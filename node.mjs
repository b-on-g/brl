#!/usr/bin/env node
"use strict";
var exports = void 0;

var $node = $node || {}
void function( module ) { var exports = module.exports = this; function require( id ) { return $node[ id.replace( /^.\// , "../" ) ] }; 
;
"use strict";
Error.stackTraceLimit = 50;
var $;
(function ($) {
})($ || ($ = {}));
module.exports = $;

;

$node[ "../mam.ts" ] = $node[ "../mam.ts" ] = module.exports }.call( {} , {} )
;
"use strict"

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	else for (var i = decorators.length - 1; i >= 0; i--) if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var $ = ( typeof module === 'object' ) ? ( module['export'+'s'] = globalThis ) : globalThis
$.$$ = $

;
"use strict";
var $;
(function ($) {
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    const mod = require /****/('module');
    const internals = mod.builtinModules;
    function $node_internal_check(name) {
        if (name.startsWith('node:'))
            return true;
        return internals.includes(name);
    }
    $.$node_internal_check = $node_internal_check;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_promise_like(val) {
        try {
            return val && typeof val === 'object' && 'then' in val && typeof val.then === 'function';
        }
        catch {
            return false;
        }
    }
    $.$mol_promise_like = $mol_promise_like;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_fail(error) {
        throw error;
    }
    $.$mol_fail = $mol_fail;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_fail_hidden(error) {
        throw error; /// Use 'Never Pause Here' breakpoint in DevTools or simply blackbox this script
    }
    $.$mol_fail_hidden = $mol_fail_hidden;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const catched = new WeakSet();
    function $mol_fail_catch(error) {
        if (typeof error !== 'object')
            return false;
        if ($mol_promise_like(error))
            $mol_fail_hidden(error);
        if (catched.has(error))
            return false;
        catched.add(error);
        return true;
    }
    $.$mol_fail_catch = $mol_fail_catch;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_try(handler) {
        try {
            return handler();
        }
        catch (error) {
            console.error(error);
            return error;
        }
    }
    $.$mol_try = $mol_try;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_fail_log(error) {
        if ($mol_promise_like(error))
            return false;
        if (!$mol_fail_catch(error))
            return false;
        $mol_try(() => { $mol_fail_hidden(error); });
        return true;
    }
    $.$mol_fail_log = $mol_fail_log;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const path = require /****/('path');
    const mod = require /****/('module');
    const localRequire = mod.createRequire(path.join(process.cwd(), 'package.json'));
    function $node_autoinstall(name) {
        try {
            localRequire.resolve(name);
        }
        catch {
            this.$mol_run.spawn({ command: ['npm', 'install', '--omit=dev', name], dir: '.' });
            try {
                this.$mol_run.spawn({ command: ['npm', 'install', '--omit=dev', '@types/' + name], dir: '.' });
            }
            catch (e) {
                if (this.$mol_promise_like(e))
                    this.$mol_fail_hidden(e);
                this.$mol_fail_log(e);
            }
        }
    }
    $.$node_autoinstall = $node_autoinstall;
})($ || ($ = {}));

;
"use strict";
var $node = new Proxy({ require }, {
    get(target, name, wrapper) {
        if (target[name])
            return target[name];
        if ($.$node_internal_check(name))
            return target.require(name);
        if (name[0] === '.')
            return target.require(name);
        $.$node_autoinstall(name);
        return target.require(name);
    },
    set(target, name, value) {
        target[name] = value;
        return true;
    },
});
require = (req => Object.assign(function require(name) {
    return $node[name];
}, req))(require);

;
"use strict";
var $;
(function ($) {
    const named = new WeakSet();
    function $mol_func_name(func) {
        let name = func.name;
        if (name?.length > 1)
            return name;
        if (named.has(func))
            return name;
        for (let key in this) {
            try {
                if (this[key] !== func)
                    continue;
                name = key;
                Object.defineProperty(func, 'name', { value: name });
                break;
            }
            catch { }
        }
        named.add(func);
        return name;
    }
    $.$mol_func_name = $mol_func_name;
    function $mol_func_name_from(target, source) {
        Object.defineProperty(target, 'name', { value: source.name });
        return target;
    }
    $.$mol_func_name_from = $mol_func_name_from;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function cause_serialize(cause) {
        return JSON.stringify(cause, null, '  ')
            .replace(/\(/, '<')
            .replace(/\)/, ' >');
    }
    function frame_normalize(frame) {
        return (typeof frame === 'string' ? frame : cause_serialize(frame))
            .trim()
            .replace(/at /gm, '   at ')
            .replace(/^(?!    +at )(.*)/gm, '    at | $1 (#)');
    }
    class $mol_error_mix extends AggregateError {
        cause;
        name = $$.$mol_func_name(this.constructor).replace(/^\$/, '') + '_Error';
        constructor(message, cause = {}, ...errors) {
            super(errors, message, { cause });
            this.cause = cause;
            const desc = Object.getOwnPropertyDescriptor(this, 'stack');
            const stack_get = () => desc?.get?.() ?? super.stack ?? desc?.value ?? this.message;
            Object.defineProperty(this, 'stack', {
                get: () => stack_get() + '\n' + [
                    this.cause ?? 'no cause',
                    ...this.errors.flatMap(e => [
                        String(e.stack),
                        ...e instanceof $mol_error_mix || !e.cause ? [] : [e.cause]
                    ])
                ].map(frame_normalize).join('\n')
            });
            // в nodejs, что б не дублировалось cause в консоли
            Object.defineProperty(this, 'cause', {
                get: () => cause
            });
        }
        static [Symbol.toPrimitive]() {
            return this.toString();
        }
        static toString() {
            return $$.$mol_func_name(this);
        }
        static make(...params) {
            return new this(...params);
        }
    }
    $.$mol_error_mix = $mol_error_mix;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_ambient_ref = Symbol('$mol_ambient_ref');
    function $mol_ambient(overrides) {
        return Object.setPrototypeOf(overrides, this || $);
    }
    $.$mol_ambient = $mol_ambient;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const instances = new WeakSet();
    /**
     * Proxy that delegates all to lazy returned target.
     *
     * 	$mol_delegate( Array.prototype , ()=> fetch_array() )
     */
    function $mol_delegate(proto, target) {
        const proxy = new Proxy(proto, {
            get: (_, field) => {
                const obj = target();
                let val = Reflect.get(obj, field);
                if (typeof val === 'function') {
                    val = val.bind(obj);
                }
                return val;
            },
            has: (_, field) => Reflect.has(target(), field),
            set: (_, field, value) => Reflect.set(target(), field, value),
            getOwnPropertyDescriptor: (_, field) => Reflect.getOwnPropertyDescriptor(target(), field),
            ownKeys: () => Reflect.ownKeys(target()),
            getPrototypeOf: () => Reflect.getPrototypeOf(target()),
            setPrototypeOf: (_, donor) => Reflect.setPrototypeOf(target(), donor),
            isExtensible: () => Reflect.isExtensible(target()),
            preventExtensions: () => Reflect.preventExtensions(target()),
            apply: (_, self, args) => Reflect.apply(target(), self, args),
            construct: (_, args, retarget) => Reflect.construct(target(), args, retarget),
            defineProperty: (_, field, descr) => Reflect.defineProperty(target(), field, descr),
            deleteProperty: (_, field) => Reflect.deleteProperty(target(), field),
        });
        instances.add(proxy);
        return proxy;
    }
    $.$mol_delegate = $mol_delegate;
    Reflect.defineProperty($mol_delegate, Symbol.hasInstance, {
        value: (obj) => instances.has(obj),
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_owning_map = new WeakMap();
    function $mol_owning_allow(having) {
        try {
            if (!having)
                return false;
            if (typeof having !== 'object' && typeof having !== 'function')
                return false;
            if (having instanceof $mol_delegate)
                return false;
            if (typeof having['destructor'] !== 'function')
                return false;
            return true;
        }
        catch {
            return false;
        }
    }
    $.$mol_owning_allow = $mol_owning_allow;
    function $mol_owning_get(having, Owner) {
        if (!$mol_owning_allow(having))
            return null;
        while (true) {
            const owner = $.$mol_owning_map.get(having);
            if (!owner)
                return owner;
            if (!Owner)
                return owner;
            if (owner instanceof Owner)
                return owner;
            having = owner;
        }
    }
    $.$mol_owning_get = $mol_owning_get;
    function $mol_owning_check(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having) !== owner)
            return false;
        return true;
    }
    $.$mol_owning_check = $mol_owning_check;
    function $mol_owning_catch(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having))
            return false;
        $.$mol_owning_map.set(having, owner);
        return true;
    }
    $.$mol_owning_catch = $mol_owning_catch;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    $.$mol_key_handle = Symbol.for('$mol_key_handle');
    $.$mol_key_store = new WeakMap();
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    if (!Symbol.dispose)
        Symbol.dispose = Symbol('Symbol.dispose');
    class $mol_object2 {
        static $ = $;
        [Symbol.toStringTag];
        [$mol_ambient_ref] = null;
        get $() {
            if (this[$mol_ambient_ref])
                return this[$mol_ambient_ref];
            const owner = $mol_owning_get(this);
            return this[$mol_ambient_ref] = owner?.$ || this.constructor.$ || $mol_object2.$;
        }
        set $(next) {
            if (this[$mol_ambient_ref])
                $mol_fail_hidden(new Error('Context already defined'));
            this[$mol_ambient_ref] = next;
        }
        static create(init) {
            const obj = new this;
            if (init)
                init(obj);
            return obj;
        }
        static [Symbol.toPrimitive]() {
            return this.toString();
        }
        static toString() {
            return this[Symbol.toStringTag] || this.$.$mol_func_name(this);
        }
        static toJSON() {
            return this.toString();
        }
        static [$mol_key_handle]() {
            return this.toString();
        }
        destructor() { }
        static destructor() { }
        [Symbol.dispose]() {
            this.destructor();
        }
        //[ Symbol.toPrimitive ]( hint: string ) {
        //	return hint === 'number' ? this.valueOf() : this.toString()
        //}
        toString() {
            return this[Symbol.toStringTag] || this.constructor.name + '<>';
        }
    }
    $.$mol_object2 = $mol_object2;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($_1) {
    let $$;
    (function ($$) {
        let $;
    })($$ = $_1.$$ || ($_1.$$ = {}));
    $_1.$mol_object_field = Symbol('$mol_object_field');
    class $mol_object extends $mol_object2 {
        static make(config) {
            return super.create(obj => {
                for (let key in config)
                    obj[key] = config[key];
            });
        }
    }
    $_1.$mol_object = $mol_object;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_env() {
        return {};
    }
    $.$mol_env = $mol_env;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_env = function $mol_env() {
        return this.process.env;
    };
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    /** Generates unique identifier. */
    function $mol_guid(length = 8, exists = () => false) {
        for (;;) {
            let id = Math.random().toString(36).substring(2, length + 2).toUpperCase();
            if (exists(id))
                continue;
            return id;
        }
    }
    $.$mol_guid = $mol_guid;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    /** Special status statuses. */
    let $mol_wire_cursor;
    (function ($mol_wire_cursor) {
        /** Update required. */
        $mol_wire_cursor[$mol_wire_cursor["stale"] = -1] = "stale";
        /** Some of (transitive) pub update required. */
        $mol_wire_cursor[$mol_wire_cursor["doubt"] = -2] = "doubt";
        /** Actual state but may be dropped. */
        $mol_wire_cursor[$mol_wire_cursor["fresh"] = -3] = "fresh";
        /** State will never be changed. */
        $mol_wire_cursor[$mol_wire_cursor["final"] = -4] = "final";
    })($mol_wire_cursor = $.$mol_wire_cursor || ($.$mol_wire_cursor = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    /**
     * Collects subscribers in compact array. 28B
     */
    class $mol_wire_pub extends Object {
        constructor(id = `$mol_wire_pub:${$mol_guid()}`) {
            super();
            this[Symbol.toStringTag] = id;
        }
        [Symbol.toStringTag];
        data = [];
        // Derived objects should be Arrays.
        static get [Symbol.species]() {
            return Array;
        }
        /**
         * Index of first subscriber.
         */
        sub_from = 0; // 4B
        /**
         * All current subscribers.
         */
        get sub_list() {
            const res = [];
            for (let i = this.sub_from; i < this.data.length; i += 2) {
                res.push(this.data[i]);
            }
            return res;
        }
        /**
         * Has any subscribers or not.
         */
        get sub_empty() {
            return this.sub_from === this.data.length;
        }
        /**
         * Subscribe subscriber to this publisher events and return position of subscriber that required to unsubscribe.
         */
        sub_on(sub, pub_pos) {
            const pos = this.data.length;
            this.data.push(sub, pub_pos);
            return pos;
        }
        /**
         * Unsubscribe subscriber from this publisher events by subscriber position provided by `on(pub)`.
         */
        sub_off(sub_pos) {
            if (!(sub_pos < this.data.length)) {
                $mol_fail(new Error(`Wrong pos ${sub_pos}`));
            }
            const end = this.data.length - 2;
            if (sub_pos !== end) {
                this.peer_move(end, sub_pos);
            }
            this.data.length = end;
            if (end === this.sub_from)
                this.reap();
        }
        /**
         * Called when last sub was unsubscribed.
         **/
        reap() { }
        /**
         * Autowire this publisher with current subscriber.
         **/
        promote() {
            $mol_wire_auto()?.track_next(this);
        }
        /**
         * Enforce actualization. Should not throw errors.
         */
        fresh() { }
        /**
         * Allow to put data to caches in the subtree.
         */
        complete() { }
        get incompleted() {
            return false;
        }
        /**
         * Notify subscribers about self changes.
         */
        emit(quant = $mol_wire_cursor.stale) {
            for (let i = this.sub_from; i < this.data.length; i += 2) {
                ;
                this.data[i].absorb(quant, this.data[i + 1]);
            }
        }
        /**
         * Moves peer from one position to another. Doesn't clear data at old position!
         */
        peer_move(from_pos, to_pos) {
            const peer = this.data[from_pos];
            const self_pos = this.data[from_pos + 1];
            this.data[to_pos] = peer;
            this.data[to_pos + 1] = self_pos;
            peer.peer_repos(self_pos, to_pos);
        }
        /**
         * Updates self position in the peer.
         */
        peer_repos(peer_pos, self_pos) {
            this.data[peer_pos + 1] = self_pos;
        }
    }
    $.$mol_wire_pub = $mol_wire_pub;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    $.$mol_wire_auto_sub = null;
    /**
     * When fulfilled, all publishers are promoted to this subscriber on access to its.
     */
    function $mol_wire_auto(next = $.$mol_wire_auto_sub) {
        return $.$mol_wire_auto_sub = next;
    }
    $.$mol_wire_auto = $mol_wire_auto;
    /**
     * Affection queue. Used to prevent accidental stack overflow on emit.
     */
    $.$mol_wire_affected = [];
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    // https://docs.google.com/document/d/1FTascZXT9cxfetuPRT2eXPQKXui4nWFivUnS_335T3U/preview#
    $['devtoolsFormatters'] ||= [];
    function $mol_dev_format_register(config) {
        $['devtoolsFormatters'].push(config);
    }
    $.$mol_dev_format_register = $mol_dev_format_register;
    $.$mol_dev_format_head = Symbol('$mol_dev_format_head');
    $.$mol_dev_format_body = Symbol('$mol_dev_format_body');
    function $mol_dev_format_button(label, click) {
        return $mol_dev_format_auto({
            [$.$mol_dev_format_head]() {
                return $.$mol_dev_format_span({ color: 'cornflowerblue' }, label);
            },
            [$.$mol_dev_format_body]() {
                Promise.resolve().then(click);
                return $.$mol_dev_format_span({});
            }
        });
    }
    $mol_dev_format_register({
        header: (val, config = false) => {
            if (config)
                return null;
            if (!val)
                return null;
            if ($.$mol_dev_format_head in val) {
                try {
                    return val[$.$mol_dev_format_head]();
                }
                catch (error) {
                    return $.$mol_dev_format_accent($mol_dev_format_native(val), '💨', $mol_dev_format_native(error), '');
                }
            }
            if (typeof val === 'function') {
                return $mol_dev_format_native(val);
            }
            if (val instanceof Error) {
                return $.$mol_dev_format_span({}, $mol_dev_format_native(val), ' ', $mol_dev_format_button('throw', () => $mol_fail_hidden(val)));
            }
            if (val instanceof Promise) {
                return $.$mol_dev_format_shade($mol_dev_format_native(val), ' ', val[Symbol.toStringTag] ?? '');
            }
            if (Symbol.toStringTag in val) {
                return $mol_dev_format_native(val);
            }
            return null;
        },
        hasBody: (val, config = false) => {
            if (config)
                return false;
            if (!val)
                return false;
            // if( Error.isError( val ) ) true
            if (val[$.$mol_dev_format_body])
                return true;
            return false;
        },
        body: (val, config = false) => {
            if (config)
                return null;
            if (!val)
                return null;
            if ($.$mol_dev_format_body in val) {
                try {
                    return val[$.$mol_dev_format_body]();
                }
                catch (error) {
                    return $.$mol_dev_format_accent($mol_dev_format_native(val), '💨', $mol_dev_format_native(error), '');
                }
            }
            // if( Error.isError( val ) ) {
            // 	return $mol_dev_format_native( val )
            // }
            return null;
        },
    });
    function $mol_dev_format_native(obj) {
        if (typeof obj === 'undefined')
            return $.$mol_dev_format_shade('undefined');
        // if( ![ 'object', 'function', 'symbol' ].includes( typeof obj )  ) return obj
        return [
            'object',
            {
                object: obj,
                config: true,
            },
        ];
    }
    $.$mol_dev_format_native = $mol_dev_format_native;
    function $mol_dev_format_auto(obj) {
        if (obj == null)
            return $.$mol_dev_format_shade(String(obj));
        return [
            'object',
            {
                object: obj,
                config: false,
            },
        ];
    }
    $.$mol_dev_format_auto = $mol_dev_format_auto;
    function $mol_dev_format_element(element, style, ...content) {
        const styles = [];
        for (let key in style)
            styles.push(`${key} : ${style[key]}`);
        return [
            element,
            {
                style: styles.join(' ; '),
            },
            ...content,
        ];
    }
    $.$mol_dev_format_element = $mol_dev_format_element;
    $.$mol_dev_format_span = $mol_dev_format_element.bind(null, 'span');
    $.$mol_dev_format_div = $mol_dev_format_element.bind(null, 'div');
    $.$mol_dev_format_ol = $mol_dev_format_element.bind(null, 'ol');
    $.$mol_dev_format_li = $mol_dev_format_element.bind(null, 'li');
    $.$mol_dev_format_table = $mol_dev_format_element.bind(null, 'table');
    $.$mol_dev_format_tr = $mol_dev_format_element.bind(null, 'tr');
    $.$mol_dev_format_td = $mol_dev_format_element.bind(null, 'td');
    $.$mol_dev_format_accent = $.$mol_dev_format_span.bind(null, {
        'color': 'magenta',
    });
    $.$mol_dev_format_strong = $.$mol_dev_format_span.bind(null, {
        'font-weight': 'bold',
    });
    $.$mol_dev_format_string = $.$mol_dev_format_span.bind(null, {
        'color': 'green',
    });
    $.$mol_dev_format_shade = $.$mol_dev_format_span.bind(null, {
        'color': 'gray',
    });
    $.$mol_dev_format_indent = $.$mol_dev_format_div.bind(null, {
        'margin-inline-start': '13px'
    });
    class Stack extends Array {
        // [ Symbol.toPrimitive ]() {
        // 	return this.toString()
        // }
        match(...args) {
            return this.toString().match(...args);
        }
        split(...args) {
            return this.toString().split(...args);
        }
        toString() {
            return this.join('\n');
        }
    }
    class Call extends Object {
        type;
        function;
        method;
        eval;
        source;
        offset;
        pos;
        object;
        flags;
        [Symbol.toStringTag];
        constructor(call) {
            super();
            this.type = call.getTypeName() ?? '';
            this.function = call.getFunctionName() ?? '';
            this.method = call.getMethodName() ?? '';
            if (this.method === this.function)
                this.method = '';
            // const func = c.getFunction()
            this.pos = [call.getEnclosingLineNumber() ?? 0, call.getEnclosingColumnNumber() ?? 0];
            this.eval = call.getEvalOrigin() ?? '';
            this.source = call.getScriptNameOrSourceURL() ?? '';
            this.object = call.getThis();
            this.offset = call.getPosition();
            const flags = [];
            if (call.isAsync())
                flags.push('async');
            if (call.isConstructor())
                flags.push('constructor');
            if (call.isEval())
                flags.push('eval');
            if (call.isNative())
                flags.push('native');
            if (call.isPromiseAll())
                flags.push('PromiseAll');
            if (call.isToplevel())
                flags.push('top');
            this.flags = flags;
            const type = this.type ? this.type + '.' : '';
            const func = this.function || '<anon>';
            const method = this.method ? ' [' + this.method + '] ' : '';
            this[Symbol.toStringTag] = `${type}${func}${method}`;
        }
        [Symbol.toPrimitive]() {
            return this.toString();
        }
        toString() {
            const object = this.object || '';
            const label = this[Symbol.toStringTag];
            const source = `${this.source}:${this.pos.join(':')} #${this.offset}`;
            return `\tat ${object}${label} (${source})`;
        }
        [$.$mol_dev_format_head]() {
            return $.$mol_dev_format_div({}, $mol_dev_format_native(this), $.$mol_dev_format_shade(' '), ...this.object ? [
                $mol_dev_format_native(this.object),
            ] : [], ...this.method ? [$.$mol_dev_format_shade(' ', ' [', this.method, ']')] : [], $.$mol_dev_format_shade(' ', this.flags.join(', ')));
        }
    }
    Error.prepareStackTrace ??= (error, stack) => new Stack(...stack.map(call => new Call(call)));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    /**
     * Publisher that can auto collect other publishers. 32B
     *
     * 	P1 P2 P3 P4 S1 S2 S3
     * 	^           ^
     * 	pubs_from   subs_from
     */
    class $mol_wire_pub_sub extends $mol_wire_pub {
        pub_from = 0; // 4B
        cursor = $mol_wire_cursor.stale; // 4B
        get temp() {
            return false;
        }
        get pub_list() {
            const res = [];
            const max = this.cursor >= 0 ? this.cursor : this.sub_from;
            for (let i = this.pub_from; i < max; i += 2) {
                if (this.data[i])
                    res.push(this.data[i]);
            }
            return res;
        }
        track_on() {
            this.cursor = this.pub_from;
            const sub = $mol_wire_auto();
            $mol_wire_auto(this);
            return sub;
        }
        promote() {
            if (this.cursor >= this.pub_from) {
                $mol_fail(new Error('Circular subscription'));
            }
            super.promote();
        }
        track_next(pub) {
            if (this.cursor < 0)
                $mol_fail(new Error('Promo to non begun sub'));
            if (this.cursor < this.sub_from) {
                const next = this.data[this.cursor];
                if (pub === undefined)
                    return next ?? null;
                if (next === pub) {
                    this.cursor += 2;
                    return next;
                }
                if (next) {
                    if (this.sub_from < this.data.length) {
                        this.peer_move(this.sub_from, this.data.length);
                    }
                    this.peer_move(this.cursor, this.sub_from);
                    this.sub_from += 2;
                }
            }
            else {
                if (pub === undefined)
                    return null;
                if (this.sub_from < this.data.length) {
                    this.peer_move(this.sub_from, this.data.length);
                }
                this.sub_from += 2;
            }
            this.data[this.cursor] = pub;
            this.data[this.cursor + 1] = pub.sub_on(this, this.cursor);
            this.cursor += 2;
            return pub;
        }
        track_off(sub) {
            $mol_wire_auto(sub);
            if (this.cursor < 0) {
                $mol_fail(new Error('End of non begun sub'));
            }
            for (let cursor = this.pub_from; cursor < this.cursor; cursor += 2) {
                const pub = this.data[cursor];
                pub.fresh();
            }
            this.cursor = $mol_wire_cursor.fresh;
        }
        pub_off(sub_pos) {
            this.data[sub_pos] = undefined;
            this.data[sub_pos + 1] = undefined;
        }
        destructor() {
            for (let cursor = this.data.length - 2; cursor >= this.sub_from; cursor -= 2) {
                const sub = this.data[cursor];
                const pos = this.data[cursor + 1];
                sub.pub_off(pos);
            }
            this.data.length = this.sub_from;
            this.cursor = this.pub_from;
            this.track_cut();
            this.cursor = $mol_wire_cursor.stale;
        }
        track_cut() {
            if (this.cursor < this.pub_from) {
                $mol_fail(new Error('Cut of non begun sub'));
            }
            let end = this.data.length;
            for (let cursor = this.cursor; cursor < this.sub_from; cursor += 2) {
                const pub = this.data[cursor];
                pub?.sub_off(this.data[cursor + 1]);
                end -= 2;
                if (this.sub_from <= end)
                    this.peer_move(end, cursor);
            }
            this.data.length = end;
            this.sub_from = this.cursor;
        }
        complete() { }
        complete_pubs() {
            const limit = this.cursor < 0 ? this.sub_from : this.cursor;
            for (let cursor = this.pub_from; cursor < limit; cursor += 2) {
                const pub = this.data[cursor];
                if (pub?.incompleted)
                    return;
            }
            for (let cursor = this.pub_from; cursor < limit; cursor += 2) {
                const pub = this.data[cursor];
                pub?.complete();
            }
        }
        absorb(quant = $mol_wire_cursor.stale, pos = -1) {
            if (this.cursor === $mol_wire_cursor.final)
                return;
            if (this.cursor >= quant)
                return;
            this.cursor = quant;
            this.emit($mol_wire_cursor.doubt);
            // if( pos >= 0 && pos < this.sub_from - 2 ) {
            // 	const pub = this.data[ pos ] as $mol_wire_pub
            // 	if( pub instanceof $mol_wire_task ) return
            // 	for(
            // 		let cursor = this.pub_from;
            // 		cursor < this.sub_from;
            // 		cursor += 2
            // 	) {
            // 		const pub = this.data[ cursor ] as $mol_wire_pub
            // 		if( pub instanceof $mol_wire_task ) {
            // 			pub.destructor()
            // 		}
            // 	}
            // }
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_native(this);
        }
        /**
         * Is subscribed to any publisher or not.
         */
        get pub_empty() {
            return this.sub_from === this.pub_from;
        }
    }
    $.$mol_wire_pub_sub = $mol_wire_pub_sub;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_after_tick extends $mol_object2 {
        task;
        static promise = null;
        cancelled = false;
        constructor(task) {
            super();
            this.task = task;
            if (!$mol_after_tick.promise)
                $mol_after_tick.promise = Promise.resolve().then(() => {
                    $mol_after_tick.promise = null;
                });
            $mol_after_tick.promise.then(() => {
                if (this.cancelled)
                    return;
                task();
            });
        }
        destructor() {
            this.cancelled = true;
        }
    }
    $.$mol_after_tick = $mol_after_tick;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const wrappers = new WeakMap();
    /**
     * Suspendable task with support both sync/async api.
     *
     * 	A1 A2 A3 A4 P1 P2 P3 P4 S1 S2 S3
     * 	^           ^           ^
     * 	args_from   pubs_from   subs_from
     **/
    class $mol_wire_fiber extends $mol_wire_pub_sub {
        task;
        host;
        static warm = true;
        static planning = new Set();
        static reaping = new Set();
        static plan_task = null;
        static plan() {
            if (this.plan_task)
                return;
            this.plan_task = new $mol_after_tick(() => {
                try {
                    this.sync();
                }
                finally {
                    $mol_wire_fiber.plan_task = null;
                }
            });
        }
        static sync() {
            // Sync whole fiber graph
            while (this.planning.size) {
                for (const fiber of this.planning) {
                    this.planning.delete(fiber);
                    if (fiber.cursor >= 0)
                        continue;
                    if (fiber.cursor === $mol_wire_cursor.final)
                        continue;
                    fiber.fresh();
                }
            }
            // Collect garbage
            while (this.reaping.size) {
                const fibers = this.reaping;
                this.reaping = new Set;
                for (const fiber of fibers) {
                    if (!fiber.sub_empty)
                        continue;
                    fiber.destructor();
                }
            }
        }
        cache = undefined;
        get args() {
            return this.data.slice(0, this.pub_from);
        }
        result() {
            if ($mol_promise_like(this.cache))
                return;
            if (this.cache instanceof Error)
                return;
            return this.cache;
        }
        get incompleted() {
            return $mol_promise_like(this.cache);
        }
        field() {
            return this.task.name + '()';
        }
        constructor(id, task, host, args) {
            super(id);
            this.task = task;
            this.host = host;
            if (args)
                this.data.push(...args);
            this.pub_from = this.sub_from = args?.length ?? 0;
        }
        plan() {
            $mol_wire_fiber.planning.add(this);
            $mol_wire_fiber.plan();
            return this;
        }
        reap() {
            $mol_wire_fiber.reaping.add(this);
            $mol_wire_fiber.plan();
        }
        toString() {
            return this[Symbol.toStringTag];
        }
        toJSON() {
            return this[Symbol.toStringTag];
        }
        [$mol_dev_format_head]() {
            const cursor = {
                [$mol_wire_cursor.stale]: '🔴',
                [$mol_wire_cursor.doubt]: '🟡',
                [$mol_wire_cursor.fresh]: '🟢',
                [$mol_wire_cursor.final]: '🔵',
            }[this.cursor] ?? this.cursor.toString();
            return $mol_dev_format_div({}, $mol_owning_check(this, this.cache)
                ? $mol_dev_format_shade(cursor)
                : $mol_dev_format_shade(this[Symbol.toStringTag], cursor), $mol_dev_format_auto(this.cache));
        }
        [$mol_dev_format_body]() { return null; }
        get $() {
            return (this.host ?? this.task)['$'];
        }
        emit(quant = $mol_wire_cursor.stale) {
            if (this.sub_empty)
                this.plan();
            else
                super.emit(quant);
        }
        fresh() {
            if (this.cursor === $mol_wire_cursor.fresh)
                return;
            if (this.cursor === $mol_wire_cursor.final)
                return;
            check: if (this.cursor === $mol_wire_cursor.doubt) {
                for (let i = this.pub_from; i < this.sub_from; i += 2) {
                    ;
                    this.data[i]?.fresh();
                    if (this.cursor !== $mol_wire_cursor.doubt)
                        break check;
                }
                this.cursor = $mol_wire_cursor.fresh;
                return;
            }
            const bu = this.track_on();
            let result;
            try {
                switch (this.pub_from) {
                    case 0:
                        result = this.task.call(this.host);
                        break;
                    case 1:
                        result = this.task.call(this.host, this.data[0]);
                        break;
                    default:
                        result = this.task.call(this.host, ...this.args);
                        break;
                }
                if ($mol_promise_like(result)) {
                    if (wrappers.has(result)) {
                        result = wrappers.get(result).then(a => a);
                    }
                    else {
                        const put = (res) => {
                            if (this.cache === result)
                                this.put(res);
                            return res;
                        };
                        wrappers.set(result, result = Object.assign(result.then(put, put), { destructor: result.destructor || (() => { }) }));
                        wrappers.set(result, result);
                        const error = new Error(`Promise in ${this}`);
                        Object.defineProperty(result, 'stack', { get: () => error.stack });
                    }
                }
            }
            catch (error) {
                if (error instanceof Error || $mol_promise_like(error)) {
                    result = error;
                }
                else {
                    result = new Error(String(error), { cause: error });
                }
                if ($mol_promise_like(result)) {
                    if (wrappers.has(result)) {
                        result = wrappers.get(result);
                    }
                    else {
                        const put = (v) => {
                            if (this.cache === result)
                                this.absorb();
                            return v;
                        };
                        wrappers.set(result, result = Object.assign(result.then(put, put), { destructor: result.destructor || (() => { }) }));
                        const error = new Error(`Promise in ${this}`);
                        Object.defineProperty(result, 'stack', { get: () => error.stack });
                    }
                }
            }
            if (!$mol_promise_like(result)) {
                this.track_cut();
            }
            this.track_off(bu);
            this.put(result);
            return this;
        }
        refresh() {
            this.cursor = $mol_wire_cursor.stale;
            this.fresh();
        }
        /**
         * Synchronous execution. Throws Promise when waits async task (SuspenseAPI provider).
         * Should be called inside SuspenseAPI consumer (ie fiber).
         */
        sync() {
            if (!$mol_wire_fiber.warm) {
                return this.result();
            }
            this.promote();
            this.fresh();
            if (this.cache instanceof Error) {
                return $mol_fail_hidden(this.cache);
            }
            if ($mol_promise_like(this.cache)) {
                return $mol_fail_hidden(this.cache);
            }
            return this.cache;
        }
        /**
         * Asynchronous execution.
         * It's SuspenseAPI consumer. So SuspenseAPI providers can be called inside.
         */
        async async_raw() {
            while (true) {
                this.fresh();
                if (this.cache instanceof Error) {
                    $mol_fail_hidden(this.cache);
                }
                if (!$mol_promise_like(this.cache))
                    return this.cache;
                await Promise.race([this.cache, this.step()]);
                if (!$mol_promise_like(this.cache))
                    return this.cache;
                if (this.cursor === $mol_wire_cursor.final) {
                    // never ends on destructed fiber
                    await new Promise(() => { });
                }
            }
        }
        async() {
            const promise = this.async_raw();
            if (!promise.destructor)
                promise.destructor = () => this.destructor();
            return promise;
        }
        step() {
            return new Promise(done => {
                const sub = new $mol_wire_pub_sub;
                const prev = sub.track_on();
                sub.track_next(this);
                sub.track_off(prev);
                sub.absorb = () => {
                    done(null);
                    setTimeout(() => sub.destructor());
                };
            });
        }
        destructor() {
            super.destructor();
            $mol_wire_fiber.planning.delete(this);
            if (!$mol_owning_check(this, this.cache))
                return;
            try {
                this.cache.destructor();
            }
            catch (result) {
                if ($mol_promise_like(result)) {
                    const error = new Error(`Promise in ${this}.destructor()`);
                    Object.defineProperty(result, 'stack', { get: () => error.stack });
                }
                $mol_fail_hidden(result);
            }
        }
    }
    $.$mol_wire_fiber = $mol_wire_fiber;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_compare_deep_cache = new WeakMap();
    /**
     * Deeply compares two values. Returns true if equal.
     * Define `Symbol.toPrimitive` to customize.
     */
    function $mol_compare_deep(left, right) {
        if (Object.is(left, right))
            return true;
        if (left === null)
            return false;
        if (right === null)
            return false;
        if (typeof left !== 'object')
            return false;
        if (typeof right !== 'object')
            return false;
        const left_proto = Reflect.getPrototypeOf(left);
        const right_proto = Reflect.getPrototypeOf(right);
        if (left_proto !== right_proto)
            return false;
        if (left instanceof Boolean)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof Number)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof String)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof Date)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof RegExp)
            return left.source === right.source && left.flags === right.flags;
        if (left instanceof Error)
            return left.message === right.message && $mol_compare_deep(left.stack, right.stack);
        let left_cache = $.$mol_compare_deep_cache.get(left);
        if (left_cache) {
            const right_cache = left_cache.get(right);
            if (typeof right_cache === 'boolean')
                return right_cache;
        }
        else {
            left_cache = new WeakMap();
            $.$mol_compare_deep_cache.set(left, left_cache);
        }
        left_cache.set(right, true);
        let result;
        try {
            if (!left_proto)
                result = compare_pojo(left, right);
            else if (!Reflect.getPrototypeOf(left_proto))
                result = compare_pojo(left, right);
            else if (Symbol.toPrimitive in left)
                result = compare_primitive(left, right);
            else if (Array.isArray(left))
                result = compare_array(left, right);
            else if (left instanceof Set)
                result = compare_set(left, right);
            else if (left instanceof Map)
                result = compare_map(left, right);
            else if (ArrayBuffer.isView(left))
                result = compare_buffer(left, right);
            else if (Symbol.iterator in left)
                result = compare_iterator(left[Symbol.iterator](), right[Symbol.iterator]());
            else
                result = false;
        }
        finally {
            left_cache.set(right, result);
        }
        return result;
    }
    $.$mol_compare_deep = $mol_compare_deep;
    function compare_array(left, right) {
        const len = left.length;
        if (len !== right.length)
            return false;
        for (let i = 0; i < len; ++i) {
            if (!$mol_compare_deep(left[i], right[i]))
                return false;
        }
        return true;
    }
    function compare_buffer(left, right) {
        const len = left.byteLength;
        if (len !== right.byteLength)
            return false;
        if (left instanceof DataView)
            return compare_buffer(new Uint8Array(left.buffer, left.byteOffset, left.byteLength), new Uint8Array(right.buffer, right.byteOffset, right.byteLength));
        for (let i = 0; i < len; ++i) {
            if (left[i] !== right[i])
                return false;
        }
        return true;
    }
    function compare_iterator(left, right) {
        while (true) {
            const left_next = left.next();
            const right_next = right.next();
            if (left_next.done !== right_next.done)
                return false;
            if (left_next.done)
                break;
            if (!$mol_compare_deep(left_next.value, right_next.value))
                return false;
        }
        return true;
    }
    function compare_set(left, right) {
        if (left.size !== right.size)
            return false;
        return compare_iterator(left.values(), right.values());
    }
    function compare_map(left, right) {
        if (left.size !== right.size)
            return false;
        return compare_iterator(left.keys(), right.keys())
            && compare_iterator(left.values(), right.values());
    }
    function compare_pojo(left, right) {
        const left_keys = Object.getOwnPropertyNames(left);
        const right_keys = Object.getOwnPropertyNames(right);
        if (!compare_array(left_keys, right_keys))
            return false;
        for (let key of left_keys) {
            if (!$mol_compare_deep(left[key], right[key]))
                return false;
        }
        const left_syms = Object.getOwnPropertySymbols(left);
        const right_syms = Object.getOwnPropertySymbols(right);
        if (!compare_array(left_syms, right_syms))
            return false;
        for (let key of left_syms) {
            if (!$mol_compare_deep(left[key], right[key]))
                return false;
        }
        return true;
    }
    function compare_primitive(left, right) {
        return Object.is(left[Symbol.toPrimitive]('default'), right[Symbol.toPrimitive]('default'));
    }
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    /** Log begin of collapsed group only when some logged inside, returns func to close group */
    function $mol_log3_area_lazy(event) {
        const self = this.$;
        const stack = self.$mol_log3_stack;
        const deep = stack.length;
        let logged = false;
        stack.push(() => {
            logged = true;
            self.$mol_log3_area.call(self, event);
        });
        return () => {
            if (logged)
                self.console.groupEnd();
            if (stack.length > deep)
                stack.length = deep;
        };
    }
    $.$mol_log3_area_lazy = $mol_log3_area_lazy;
    $.$mol_log3_stack = [];
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    /** Position in any resource. */
    class $mol_span extends $mol_object2 {
        uri;
        source;
        row;
        col;
        length;
        constructor(uri, source, row, col, length) {
            super();
            this.uri = uri;
            this.source = source;
            this.row = row;
            this.col = col;
            this.length = length;
            this[Symbol.toStringTag] = this.uri + ('#' + this.row + ':' + this.col + '/' + this.length);
        }
        /** Span for begin of unknown resource */
        static unknown = $mol_span.begin('?');
        /** Makes new span for begin of resource. */
        static begin(uri, source = '') {
            return new $mol_span(uri, source, 1, 1, 0);
        }
        /** Makes new span for end of resource. */
        static end(uri, source) {
            return new $mol_span(uri, source, 1, source.length + 1, 0);
        }
        /** Makes new span for entire resource. */
        static entire(uri, source) {
            return new $mol_span(uri, source, 1, 1, source.length);
        }
        toString() {
            return this[Symbol.toStringTag];
        }
        toJSON() {
            return {
                uri: this.uri,
                row: this.row,
                col: this.col,
                length: this.length
            };
        }
        /** Makes new error for this span. */
        error(message, Class = Error) {
            return new Class(`${message} (${this})`);
        }
        /** Makes new span for same uri. */
        span(row, col, length) {
            return new $mol_span(this.uri, this.source, row, col, length);
        }
        /** Makes new span after end of this. */
        after(length = 0) {
            return new $mol_span(this.uri, this.source, this.row, this.col + this.length, length);
        }
        /** Makes new span between begin and end. */
        slice(begin, end = -1) {
            let len = this.length;
            if (begin < 0)
                begin += len;
            if (end < 0)
                end += len;
            if (begin < 0 || begin > len)
                this.$.$mol_fail(this.error(`Begin value '${begin}' out of range`, RangeError));
            if (end < 0 || end > len)
                this.$.$mol_fail(this.error(`End value '${end}' out of range`, RangeError));
            if (end < begin)
                this.$.$mol_fail(this.error(`End value '${end}' can't be less than begin value`, RangeError));
            return this.span(this.row, this.col + begin, end - begin);
        }
    }
    $.$mol_span = $mol_span;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    /** Serializes tree to string in tree format. */
    function $mol_tree2_to_string(tree) {
        let output = [];
        function dump(tree, prefix = '') {
            if (tree.type.length) {
                if (!prefix.length) {
                    prefix = "\t";
                }
                output.push(tree.type);
                if (tree.kids.length == 1) {
                    output.push(' ');
                    dump(tree.kids[0], prefix);
                    return;
                }
                output.push("\n");
            }
            else if (tree.value.length || prefix.length) {
                output.push("\\" + tree.value + "\n");
            }
            for (const kid of tree.kids) {
                output.push(prefix);
                dump(kid, prefix + "\t");
            }
        }
        dump(tree);
        return output.join('');
    }
    $.$mol_tree2_to_string = $mol_tree2_to_string;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_maybe(value) {
        return (value == null) ? [] : [value];
    }
    $.$mol_maybe = $mol_maybe;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    /**
     * Abstract Syntax Tree with human readable serialization.
     * Avoid direct instantiation. Use static factories instead.
     * @see https://github.com/nin-jin/tree.d
     */
    class $mol_tree2 extends Object {
        type;
        value;
        kids;
        span;
        constructor(
        /** Type of structural node, `value` should be empty */
        type, 
        /** Content of data node, `type` should be empty */
        value, 
        /** Child nodes */
        kids, 
        /** Position in most far source resource */
        span) {
            super();
            this.type = type;
            this.value = value;
            this.kids = kids;
            this.span = span;
            this[Symbol.toStringTag] = type || '\\' + value;
        }
        /** Makes collection node. */
        static list(kids, span = $mol_span.unknown) {
            return new $mol_tree2('', '', kids, span);
        }
        /** Makes new derived collection node. */
        list(kids) {
            return $mol_tree2.list(kids, this.span);
        }
        /** Makes data node for any string. */
        static data(value, kids = [], span = $mol_span.unknown) {
            const chunks = value.split('\n');
            if (chunks.length > 1) {
                let kid_span = span.span(span.row, span.col, 0);
                const data = chunks.map(chunk => {
                    kid_span = kid_span.after(chunk.length);
                    return new $mol_tree2('', chunk, [], kid_span);
                });
                kids = [...data, ...kids];
                value = '';
            }
            return new $mol_tree2('', value, kids, span);
        }
        /** Makes new derived data node. */
        data(value, kids = []) {
            return $mol_tree2.data(value, kids, this.span);
        }
        /** Makes struct node. */
        static struct(type, kids = [], span = $mol_span.unknown) {
            if (/[ \n\t\\]/.test(type)) {
                $$.$mol_fail(span.error(`Wrong type ${JSON.stringify(type)}`));
            }
            return new $mol_tree2(type, '', kids, span);
        }
        /** Makes new derived structural node. */
        struct(type, kids = []) {
            return $mol_tree2.struct(type, kids, this.span);
        }
        /** Makes new derived node with different kids id defined. */
        clone(kids, span = this.span) {
            return new $mol_tree2(this.type, this.value, kids, span);
        }
        /** Returns multiline text content. */
        text() {
            var values = [];
            for (var kid of this.kids) {
                if (kid.type)
                    continue;
                values.push(kid.value);
            }
            return this.value + values.join('\n');
        }
        /** Parses tree format. */
        /** @deprecated Use $mol_tree2_from_string */
        static fromString(str, uri = 'unknown') {
            return $$.$mol_tree2_from_string(str, uri);
        }
        /** Serializes to tree format. */
        toString() {
            return $$.$mol_tree2_to_string(this);
        }
        /** Makes new tree with node overrided by path. */
        insert(value, ...path) {
            return this.update($mol_maybe(value), ...path)[0];
        }
        /** Makes new tree with node overrided by path. */
        update(value, ...path) {
            if (path.length === 0)
                return value;
            const type = path[0];
            if (typeof type === 'string') {
                let replaced = false;
                const sub = this.kids.flatMap((item, index) => {
                    if (item.type !== type)
                        return item;
                    replaced = true;
                    return item.update(value, ...path.slice(1));
                }).filter(Boolean);
                if (!replaced && value) {
                    sub.push(...this.struct(type, []).update(value, ...path.slice(1)));
                }
                return [this.clone(sub)];
            }
            else if (typeof type === 'number') {
                const ins = (this.kids[type] || this.list([]))
                    .update(value, ...path.slice(1));
                return [this.clone([
                        ...this.kids.slice(0, type),
                        ...ins,
                        ...this.kids.slice(type + 1),
                    ])];
            }
            else {
                const kids = ((this.kids.length === 0) ? [this.list([])] : this.kids)
                    .flatMap(item => item.update(value, ...path.slice(1)));
                return [this.clone(kids)];
            }
        }
        /** Query nodes by path. */
        select(...path) {
            let next = [this];
            for (const type of path) {
                if (!next.length)
                    break;
                const prev = next;
                next = [];
                for (var item of prev) {
                    switch (typeof (type)) {
                        case 'string':
                            for (var child of item.kids) {
                                if (child.type == type) {
                                    next.push(child);
                                }
                            }
                            break;
                        case 'number':
                            if (type < item.kids.length)
                                next.push(item.kids[type]);
                            break;
                        default: next.push(...item.kids);
                    }
                }
            }
            return this.list(next);
        }
        /** Filter kids by path or value. */
        filter(path, value) {
            const sub = this.kids.filter(item => {
                var found = item.select(...path);
                if (value === undefined) {
                    return Boolean(found.kids.length);
                }
                else {
                    return found.kids.some(child => child.value == value);
                }
            });
            return this.clone(sub);
        }
        hack_self(belt, context = {}) {
            let handle = belt[this.type] || belt[''];
            if (!handle || handle === Object.prototype[this.type]) {
                handle = (input, belt, context) => [
                    input.clone(input.hack(belt, context), context.span)
                ];
            }
            try {
                return handle(this, belt, context);
            }
            catch (error) {
                error.message += `\n${this.clone([])}${this.span}`;
                $mol_fail_hidden(error);
            }
        }
        /** Transform tree through context with transformers */
        hack(belt, context = {}) {
            return [].concat(...this.kids.map(child => child.hack_self(belt, context)));
        }
        /** Makes Error with node coordinates. */
        error(message, Class = Error) {
            return this.span.error(`${message}\n${this.clone([])}`, Class);
        }
    }
    $.$mol_tree2 = $mol_tree2;
    class $mol_tree2_empty extends $mol_tree2 {
        constructor() {
            super('', '', [], $mol_span.unknown);
        }
    }
    $.$mol_tree2_empty = $mol_tree2_empty;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    /** Syntax error with cordinates and source line snippet. */
    class $mol_error_syntax extends SyntaxError {
        reason;
        line;
        span;
        constructor(reason, line, span) {
            super(`${reason}\n${span}\n${line.substring(0, span.col - 1).replace(/\S/g, ' ')}${''.padEnd(span.length, '!')}\n${line}`);
            this.reason = reason;
            this.line = line;
            this.span = span;
        }
    }
    $.$mol_error_syntax = $mol_error_syntax;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    /** Parses tree format from string. */
    function $mol_tree2_from_string(str, uri = '?') {
        const span = $mol_span.entire(uri, str);
        var root = $mol_tree2.list([], span);
        var stack = [root];
        var pos = 0, row = 0, min_indent = 0;
        while (str.length > pos) {
            var indent = 0;
            var line_start = pos;
            row++;
            // read indent
            while (str.length > pos && str[pos] == '\t') {
                indent++;
                pos++;
            }
            if (!root.kids.length) {
                min_indent = indent;
            }
            indent -= min_indent;
            // invalid tab size
            if (indent < 0 || indent >= stack.length) {
                const sp = span.span(row, 1, pos - line_start);
                // skip error line
                while (str.length > pos && str[pos] != '\n') {
                    pos++;
                }
                if (indent < 0) {
                    if (str.length > pos) {
                        this.$mol_fail(new this.$mol_error_syntax(`Too few tabs`, str.substring(line_start, pos), sp));
                    }
                }
                else {
                    this.$mol_fail(new this.$mol_error_syntax(`Too many tabs`, str.substring(line_start, pos), sp));
                }
            }
            stack.length = indent + 1;
            var parent = stack[indent];
            // parse types
            while (str.length > pos && str[pos] != '\\' && str[pos] != '\n') {
                // type can not contain space and tab
                var error_start = pos;
                while (str.length > pos && (str[pos] == ' ' || str[pos] == '\t')) {
                    pos++;
                }
                if (pos > error_start) {
                    let line_end = str.indexOf('\n', pos);
                    if (line_end === -1)
                        line_end = str.length;
                    const sp = span.span(row, error_start - line_start + 1, pos - error_start);
                    this.$mol_fail(new this.$mol_error_syntax(`Wrong nodes separator`, str.substring(line_start, line_end), sp));
                }
                // read type
                var type_start = pos;
                while (str.length > pos &&
                    str[pos] != '\\' &&
                    str[pos] != ' ' &&
                    str[pos] != '\t' &&
                    str[pos] != '\n') {
                    pos++;
                }
                if (pos > type_start) {
                    let next = new $mol_tree2(str.slice(type_start, pos), '', [], span.span(row, type_start - line_start + 1, pos - type_start));
                    const parent_kids = parent.kids;
                    parent_kids.push(next);
                    parent = next;
                }
                // read one space if exists
                if (str.length > pos && str[pos] == ' ') {
                    pos++;
                }
            }
            // read data
            if (str.length > pos && str[pos] == '\\') {
                var data_start = pos;
                while (str.length > pos && str[pos] != '\n') {
                    pos++;
                }
                let next = new $mol_tree2('', str.slice(data_start + 1, pos), [], span.span(row, data_start - line_start + 2, pos - data_start - 1));
                const parent_kids = parent.kids;
                parent_kids.push(next);
                parent = next;
            }
            // now must be end of text
            if (str.length === pos && stack.length > 0) {
                const sp = span.span(row, pos - line_start + 1, 1);
                this.$mol_fail(new this.$mol_error_syntax(`Unexpected EOF, LF required`, str.substring(line_start, str.length), sp));
            }
            stack.push(parent);
            pos++;
        }
        return root;
    }
    $.$mol_tree2_from_string = $mol_tree2_from_string;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_array_chunks(array, rule) {
        const br = typeof rule === 'number' ? (_, i) => i % rule === 0 : rule;
        let chunk = [];
        const chunks = [];
        for (let i = 0; i < array.length; ++i) {
            const item = array[i];
            if (br(item, i)) {
                if (chunk.length)
                    chunks.push(chunk);
                chunk = [];
            }
            chunk.push(item);
        }
        if (chunk.length)
            chunks.push(chunk);
        return chunks;
    }
    $.$mol_array_chunks = $mol_array_chunks;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_tree2_from_json(json, span = $mol_span.unknown) {
        if (typeof json === 'boolean' || typeof json === 'number' || json === null) {
            return new $mol_tree2(String(json), '', [], span);
        }
        if (typeof json === 'string') {
            return $mol_tree2.data(json, [], span);
        }
        if (typeof json.toJSON === 'function') {
            return $mol_tree2_from_json(json.toJSON());
        }
        if (Array.isArray(json)) {
            const sub = json.map(json => $mol_tree2_from_json(json, span));
            return new $mol_tree2('/', '', sub, span);
        }
        if (ArrayBuffer.isView(json)) {
            const buf = new Uint8Array(json.buffer, json.byteOffset, json.byteLength);
            const codes = [...buf].map(b => b.toString(16).toUpperCase().padStart(2, '0'));
            const str = $mol_array_chunks(codes, 8).map(c => c.join(' ')).join('\n');
            return $mol_tree2.data(str, [], span);
        }
        if (json instanceof Date) {
            return new $mol_tree2('', json.toISOString(), [], span);
        }
        if (json.toString !== Object.prototype.toString) {
            return $mol_tree2.data(json.toString(), [], span);
        }
        if (json instanceof Error) {
            const { name, message, stack } = json;
            json = { ...json, name, message, stack };
        }
        const sub = [];
        for (var key in json) {
            const val = json[key];
            if (val === undefined)
                continue;
            const subsub = $mol_tree2_from_json(val, span);
            if (/^[^\n\t\\ ]+$/.test(key)) {
                sub.push(new $mol_tree2(key, '', [subsub], span));
            }
            else {
                sub.push($mol_tree2.data(key, [subsub], span));
            }
        }
        return new $mol_tree2('*', '', sub, span);
    }
    $.$mol_tree2_from_json = $mol_tree2_from_json;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    /** Module for working with terminal. Text coloring when output in terminal */
    class $mol_term_color {
        static reset = this.ansi(0, 0);
        static bold = this.ansi(1, 22);
        static italic = this.ansi(3, 23);
        static underline = this.ansi(4, 24);
        static inverse = this.ansi(7, 27);
        static hidden = this.ansi(8, 28);
        static strike = this.ansi(9, 29);
        static gray = this.ansi(90, 39);
        static red = this.ansi(91, 39);
        static green = this.ansi(92, 39);
        static yellow = this.ansi(93, 39);
        static blue = this.ansi(94, 39);
        static magenta = this.ansi(95, 39);
        static cyan = this.ansi(96, 39);
        static Gray = (str) => this.inverse(this.gray(str));
        static Red = (str) => this.inverse(this.red(str));
        static Green = (str) => this.inverse(this.green(str));
        static Yellow = (str) => this.inverse(this.yellow(str));
        static Blue = (str) => this.inverse(this.blue(str));
        static Magenta = (str) => this.inverse(this.magenta(str));
        static Cyan = (str) => this.inverse(this.cyan(str));
        static ansi(open, close) {
            if (typeof process === 'undefined')
                return String;
            if (!process.stdout.isTTY)
                return String;
            const prefix = `\x1b[${open}m`;
            const postfix = `\x1b[${close}m`;
            const suffix_regexp = new RegExp(postfix.replace('[', '\\['), 'g');
            return function colorer(str) {
                str = String(str);
                if (str === '')
                    return str;
                const suffix = str.replace(suffix_regexp, prefix);
                return prefix + suffix + postfix;
            };
        }
    }
    $.$mol_term_color = $mol_term_color;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_log3_node_make(level, output, type, color) {
        return function $mol_log3_logger(event) {
            if (!event.time)
                event = { ...event, time: new Date().toISOString() };
            let tree = this.$mol_tree2_from_json(event);
            tree = tree.struct(type, tree.kids);
            let str = color(tree.toString());
            this.console[level](str);
            const self = this;
            return () => self.console.groupEnd();
        };
    }
    $.$mol_log3_node_make = $mol_log3_node_make;
    $.$mol_log3_come = $mol_log3_node_make('info', 'stdout', 'come', $mol_term_color.blue);
    $.$mol_log3_done = $mol_log3_node_make('info', 'stdout', 'done', $mol_term_color.green);
    $.$mol_log3_fail = $mol_log3_node_make('error', 'stderr', 'fail', $mol_term_color.red);
    $.$mol_log3_warn = $mol_log3_node_make('warn', 'stderr', 'warn', $mol_term_color.yellow);
    $.$mol_log3_rise = $mol_log3_node_make('log', 'stdout', 'rise', $mol_term_color.magenta);
    $.$mol_log3_area = $mol_log3_node_make('log', 'stdout', 'area', $mol_term_color.cyan);
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    /** One-shot fiber */
    class $mol_wire_task extends $mol_wire_fiber {
        static getter(task) {
            return function $mol_wire_task_get(host, args) {
                const sub = $mol_wire_auto();
                const existen = sub?.track_next();
                let cause = '';
                reuse: if (existen) {
                    if (!existen.temp)
                        break reuse;
                    if (existen.host !== host) {
                        cause = 'host';
                        break reuse;
                    }
                    if (existen.task !== task) {
                        cause = 'task';
                        break reuse;
                    }
                    if (!$mol_compare_deep(existen.args, args)) {
                        cause = 'args';
                        break reuse;
                    }
                    return existen;
                }
                const key = (host?.[Symbol.toStringTag] ?? host) + ('.' + task.name + '<#>');
                const next = new $mol_wire_task(key, task, host, args);
                // Disabled because non-idempotency is required for try-catch
                if (existen?.temp) {
                    $$.$mol_log3_warn({
                        place: '$mol_wire_task',
                        message: `Different ${cause} on restart`,
                        sub,
                        prev: existen,
                        next,
                        hint: 'Maybe required additional memoization',
                    });
                }
                return next;
            };
        }
        get temp() {
            return true;
        }
        complete() {
            if ($mol_promise_like(this.cache))
                return;
            this.destructor();
        }
        put(next) {
            const prev = this.cache;
            this.cache = next;
            if ($mol_promise_like(next)) {
                this.cursor = $mol_wire_cursor.fresh;
                if (next !== prev)
                    this.emit();
                if ($mol_owning_catch(this, next)) {
                    try {
                        next[Symbol.toStringTag] = this[Symbol.toStringTag];
                    }
                    catch { // Promises throw in strict mode
                        Object.defineProperty(next, Symbol.toStringTag, { value: this[Symbol.toStringTag] });
                    }
                }
                return next;
            }
            this.cursor = $mol_wire_cursor.final;
            if (this.sub_empty)
                this.destructor();
            else if (next !== prev)
                this.emit();
            return next;
        }
        destructor() {
            super.destructor();
            this.cursor = $mol_wire_cursor.final;
        }
    }
    $.$mol_wire_task = $mol_wire_task;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const factories = new WeakMap();
    function factory(val) {
        let make = factories.get(val);
        if (make)
            return make;
        make = $mol_func_name_from((...args) => new val(...args), val);
        factories.set(val, make);
        return make;
    }
    const getters = new WeakMap();
    function get_prop(host, field) {
        let props = getters.get(host);
        let get_val = props?.[field];
        if (get_val)
            return get_val;
        get_val = (next) => {
            if (next !== undefined)
                host[field] = next;
            return host[field];
        };
        Object.defineProperty(get_val, 'name', { value: field });
        if (!props) {
            props = {};
            getters.set(host, props);
        }
        props[field] = get_val;
        return get_val;
    }
    /**
     * Convert asynchronous (promise-based) API to synchronous by wrapping function and method calls in a fiber.
     * @see https://mol.hyoo.ru/#!section=docs/=1fcpsq_1wh0h2
     */
    function $mol_wire_sync(obj) {
        return new Proxy(obj, {
            get(obj, field) {
                let val = obj[field];
                const temp = $mol_wire_task.getter(typeof val === 'function' ? val : get_prop(obj, field));
                if (typeof val !== 'function')
                    return temp(obj, []).sync();
                return function $mol_wire_sync(...args) {
                    const fiber = temp(obj, args);
                    return fiber.sync();
                };
            },
            set(obj, field, next) {
                const temp = $mol_wire_task.getter(get_prop(obj, field));
                temp(obj, [next]).sync();
                return true;
            },
            construct(obj, args) {
                const temp = $mol_wire_task.getter(factory(obj));
                return temp(obj, args).sync();
            },
            apply(obj, self, args) {
                const temp = $mol_wire_task.getter(obj);
                return temp(self, args).sync();
            },
        });
    }
    $.$mol_wire_sync = $mol_wire_sync;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_run_error extends $mol_error_mix {
    }
    $.$mol_run_error = $mol_run_error;
    $.$mol_run_spawn = (...args) => $node['child_process'].spawn(...args);
    $.$mol_run_spawn_sync = (...args) => $node['child_process'].spawnSync(...args);
    class $mol_run extends $mol_object {
        static async_enabled() {
            return Boolean(this.$.$mol_env()['MOL_RUN_ASYNC']);
        }
        static spawn(options) {
            const sync = !this.async_enabled() || !Boolean($mol_wire_auto());
            const env = options.env ?? this.$.$mol_env();
            return $mol_wire_sync(this).spawn_async({ ...options, sync, env });
        }
        static spawn_async({ dir, sync, timeout, command, env }) {
            const args_raw = typeof command === 'string' ? command.split(' ') : command;
            const [app, ...args] = args_raw;
            const opts = { shell: true, cwd: dir, env };
            const log_object = {
                place: `${this}.spawn()`,
                message: 'Run',
                command: args_raw.join(' '),
                dir: $node.path.relative('', dir),
            };
            if (sync) {
                this.$.$mol_log3_come({
                    hint: 'Run inside fiber',
                    ...log_object
                });
                let error;
                let res;
                try {
                    res = this.$.$mol_run_spawn_sync(app, args, opts);
                    error = res.error;
                }
                catch (err) {
                    error = err;
                }
                if (!res || error || res.status) {
                    throw new $mol_run_error(this.error_message(res), { ...log_object, status: res?.status, signal: res?.signal }, ...(error ? [error] : []));
                }
                return res;
            }
            let sub;
            try {
                sub = this.$.$mol_run_spawn(app, args, {
                    ...opts,
                    stdio: ['pipe', 'inherit', 'inherit'],
                });
            }
            catch (error) {
                throw new $mol_run_error(this.error_message(undefined), log_object, error);
            }
            const pid = sub.pid ?? 0;
            this.$.$mol_log3_come({
                ...log_object,
                pid,
            });
            let timeout_kill = false;
            let timer;
            const std_data = [];
            const error_data = [];
            const add = (std_chunk, error_chunk) => {
                if (std_chunk)
                    std_data.push(std_chunk);
                if (error_chunk)
                    error_data.push(error_chunk);
                if (!timeout)
                    return;
                clearTimeout(timer);
                timer = setTimeout(() => {
                    const signal = timeout_kill ? 'SIGKILL' : 'SIGTERM';
                    timeout_kill = true;
                    add();
                    sub.kill(signal);
                }, timeout);
            };
            add();
            sub.stdout?.on('data', data => add(data));
            sub.stderr?.on('data', data => add(undefined, data));
            const result_promise = new Promise((done, fail) => {
                const close = (error, status = null, signal = null) => {
                    if (!timer && timeout)
                        return;
                    clearTimeout(timer);
                    timer = undefined;
                    const res = {
                        pid,
                        signal,
                        get stdout() { return Buffer.concat(std_data); },
                        get stderr() { return Buffer.concat(error_data); }
                    };
                    if (error || status || timeout_kill)
                        return fail(new $mol_run_error(this.error_message(res) + (timeout_kill ? ', timeout' : ''), { ...log_object, pid, status, signal, timeout_kill }, ...error ? [error] : []));
                    this.$.$mol_log3_done({
                        ...log_object,
                        pid,
                    });
                    done(res);
                };
                sub.on('disconnect', () => close(new Error('Disconnected')));
                sub.on('error', err => close(err));
                sub.on('exit', (status, signal) => close(null, status, signal));
            });
            return Object.assign(result_promise, { destructor: () => {
                    clearTimeout(timer);
                    sub.kill('SIGKILL');
                } });
        }
        static error_message(res) {
            return res?.stderr.toString() || res?.stdout.toString() || 'Run error';
        }
    }
    $.$mol_run = $mol_run;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_dom_context = new $node.jsdom.JSDOM('', { url: `http://${process.env.DOMAIN || 'localhost'}/` }).window;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_dom = $mol_dom_context;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_style_attach(id, text) {
        const doc = $mol_dom_context.document;
        if (!doc)
            return null;
        const elid = `$mol_style_attach:${id}`;
        let el = doc.getElementById(elid);
        if (!el) {
            el = doc.createElement('style');
            el.id = elid;
            doc.head.appendChild(el);
        }
        if (el.innerHTML != text)
            el.innerHTML = text;
        return el;
    }
    $.$mol_style_attach = $mol_style_attach;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_promise extends Promise {
        done;
        fail;
        constructor(executor) {
            let done;
            let fail;
            super((d, f) => {
                done = d;
                fail = f;
                executor?.(d, f);
            });
            this.done = done;
            this.fail = fail;
        }
    }
    $.$mol_promise = $mol_promise;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_promise_blocker extends $mol_promise {
        static [Symbol.toStringTag] = '$mol_promise_blocker';
    }
    $.$mol_promise_blocker = $mol_promise_blocker;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_decor {
        value;
        constructor(value) {
            this.value = value;
        }
        prefix() { return ''; }
        valueOf() { return this.value; }
        postfix() { return ''; }
        toString() {
            return `${this.prefix()}${this.valueOf()}${this.postfix()}`;
        }
    }
    $.$mol_decor = $mol_decor;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    /**
     * CSS Units
     * @see https://mol.hyoo.ru/#!section=docs/=xwq9q5_f966fg
     */
    class $mol_style_unit extends $mol_decor {
        literal;
        constructor(value, literal) {
            super(value);
            this.literal = literal;
        }
        postfix() {
            return this.literal;
        }
        static per(value) { return `${value}%`; }
        static px(value) { return `${value}px`; }
        static mm(value) { return `${value}mm`; }
        static cm(value) { return `${value}cm`; }
        static Q(value) { return `${value}Q`; }
        static in(value) { return `${value}in`; }
        static pc(value) { return `${value}pc`; }
        static pt(value) { return `${value}pt`; }
        static cap(value) { return `${value}cap`; }
        static ch(value) { return `${value}ch`; }
        static em(value) { return `${value}em`; }
        static rem(value) { return `${value}rem`; }
        static ex(value) { return `${value}ex`; }
        static ic(value) { return `${value}ic`; }
        static lh(value) { return `${value}lh`; }
        static rlh(value) { return `${value}rlh`; }
        static vh(value) { return `${value}vh`; }
        static vw(value) { return `${value}vw`; }
        static vi(value) { return `${value}vi`; }
        static vb(value) { return `${value}vb`; }
        static vmin(value) { return `${value}vmin`; }
        static vmax(value) { return `${value}vmax`; }
        static deg(value) { return `${value}deg`; }
        static rad(value) { return `${value}rad`; }
        static grad(value) { return `${value}grad`; }
        static turn(value) { return `${value}turn`; }
        static s(value) { return `${value}s`; }
        static ms(value) { return `${value}ms`; }
    }
    $.$mol_style_unit = $mol_style_unit;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const { per } = $mol_style_unit;
    /**
     * CSS Functions
     * @see https://mol.hyoo.ru/#!section=docs/=xwq9q5_f966fg
     */
    class $mol_style_func extends $mol_decor {
        name;
        constructor(name, value) {
            super(value);
            this.name = name;
        }
        prefix() { return this.name + '('; }
        postfix() { return ')'; }
        static linear_gradient(value) {
            return new $mol_style_func('linear-gradient', value);
        }
        static radial_gradient(value) {
            return new $mol_style_func('radial-gradient', value);
        }
        static calc(value) {
            return new $mol_style_func('calc', value);
        }
        static vary(name, defaultValue) {
            return new $mol_style_func('var', defaultValue ? [name, defaultValue] : name);
        }
        static url(href) {
            return new $mol_style_func('url', JSON.stringify(href));
        }
        static hsla(hue, saturation, lightness, alpha) {
            return new $mol_style_func('hsla', [hue, per(saturation), per(lightness), alpha]);
        }
        static clamp(min, mid, max) {
            return new $mol_style_func('clamp', [min, mid, max]);
        }
        static rgba(red, green, blue, alpha) {
            return new $mol_style_func('rgba', [red, green, blue, alpha]);
        }
        static scale(zoom) {
            return new $mol_style_func('scale', [zoom]);
        }
        static linear(...breakpoints) {
            return new $mol_style_func("linear", breakpoints.map((e) => Array.isArray(e)
                ? String(e[0]) +
                    " " +
                    (typeof e[1] === "number" ? e[1] + "%" : e[1].toString())
                : String(e)));
        }
        static cubic_bezier(x1, y1, x2, y2) {
            return new $mol_style_func('cubic-bezier', [x1, y1, x2, y2]);
        }
        static steps(value, step_position) {
            return new $mol_style_func('steps', [value, step_position]);
        }
        static blur(value) {
            return new $mol_style_func('blur', value ?? "");
        }
        static brightness(value) {
            return new $mol_style_func('brightness', value ?? "");
        }
        static contrast(value) {
            return new $mol_style_func('contrast', value ?? "");
        }
        static drop_shadow(color, x_offset, y_offset, blur_radius) {
            return new $mol_style_func("drop-shadow", blur_radius
                ? [color, x_offset, y_offset, blur_radius]
                : [color, x_offset, y_offset]);
        }
        static grayscale(value) {
            return new $mol_style_func('grayscale', value ?? "");
        }
        static hue_rotate(value) {
            return new $mol_style_func('hue-rotate', value ?? "");
        }
        static invert(value) {
            return new $mol_style_func('invert', value ?? "");
        }
        static opacity(value) {
            return new $mol_style_func('opacity', value ?? "");
        }
        static sepia(value) {
            return new $mol_style_func('sepia', value ?? "");
        }
        static saturate(value) {
            return new $mol_style_func('saturate', value ?? "");
        }
    }
    $.$mol_style_func = $mol_style_func;
})($ || ($ = {}));

;
"use strict";

;
"use strict";

;
"use strict";
var $;
(function ($) {
    /** Create record of CSS variables. */
    function $mol_style_prop(prefix, keys) {
        const record = keys.reduce((rec, key) => {
            rec[key] = $mol_style_func.vary(`--${prefix}_${key}`);
            return rec;
        }, {});
        return record;
    }
    $.$mol_style_prop = $mol_style_prop;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    /**
     * Theme css variables
     * @see https://mol.hyoo.ru/#!section=demos/demo=mol_textarea_demo
     */
    $.$mol_theme = $mol_style_prop('mol_theme', [
        'back',
        'hover',
        'card',
        'current',
        'special',
        'text',
        'control',
        'shade',
        'line',
        'focus',
        'field',
        'image',
        'spirit',
        'hue',
        'hue_spread',
    ]);
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/theme/theme.css", ":root {\n\t--mol_theme_hue: 240deg;\n\t--mol_theme_hue_spread: 90deg;\n\tcolor-scheme: dark light;\n}\n\nbody, :where([mol_theme]) {\n\tcolor: var(--mol_theme_text);\n\tfill: var(--mol_theme_text);\n\tbackground-color: var(--mol_theme_back);\n}\n\t\n:root, [mol_theme=\"$mol_theme_dark\"], :where([mol_theme=\"$mol_theme_dark\"]) [mol_theme]  {\n\n\t--mol_theme_luma: -1;\n\t--mol_theme_image: invert(1) hue-rotate( 180deg );\n\t--mol_theme_spirit: hsl( 0deg, 0%, 0%, .75 );\n\n\t--mol_theme_back: hsl( var(--mol_theme_hue), 20%, 10% );\n\t--mol_theme_card: hsl( var(--mol_theme_hue), 50%, 20%, .25 );\n\t--mol_theme_field: hsl( var(--mol_theme_hue), 50%, 8%, .25 );\n\t--mol_theme_hover: hsl( var(--mol_theme_hue), 0%, 50%, .1 );\n\t\n\t--mol_theme_text: hsl( var(--mol_theme_hue), 0%, 80% );\n\t--mol_theme_shade: hsl( var(--mol_theme_hue), 0%, 60%, 1 );\n\t--mol_theme_line: hsl( var(--mol_theme_hue), 0%, 50%, .25 );\n\t--mol_theme_focus: hsl( calc( var(--mol_theme_hue) + 180deg ), 100%, 65% );\n\t\n\t--mol_theme_control: hsl( var(--mol_theme_hue), 60%, 65% );\n\t--mol_theme_current: hsl( calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ), 60%, 65% );\n\t--mol_theme_special: hsl( calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ), 60%, 65% );\n\n} @supports( color: oklch( 0% 0 0deg ) ) {\n:root, [mol_theme=\"$mol_theme_dark\"], :where([mol_theme=\"$mol_theme_dark\"]) [mol_theme]  {\n\t\n\t--mol_theme_back: oklch( 20% .03 var(--mol_theme_hue) );\n\t--mol_theme_card: oklch( 30% .05 var(--mol_theme_hue) / .25 );\n\t--mol_theme_field: oklch( 15% 0 var(--mol_theme_hue) / .25 );\n\t--mol_theme_hover: oklch( 70% 0 var(--mol_theme_hue) / .1 );\n\t\n\t--mol_theme_text: oklch( 80% 0 var(--mol_theme_hue) );\n\t--mol_theme_shade: oklch( 60% 0 var(--mol_theme_hue) );\n\t--mol_theme_line: oklch( 60% 0 var(--mol_theme_hue) / .25 );\n\t--mol_theme_focus: oklch( 80% .2 calc( var(--mol_theme_hue) + 180deg ) );\n\t\n\t--mol_theme_control: oklch( 70% .1 var(--mol_theme_hue) );\n\t--mol_theme_current: oklch( 70% .2 calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ) );\n\t--mol_theme_special: oklch( 70% .2 calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ) );\n\n} }\n\n[mol_theme=\"$mol_theme_light\"], :where([mol_theme=\"$mol_theme_light\"]) [mol_theme] {\n\t\n\t--mol_theme_luma: 1;\n\t--mol_theme_image: none;\n\t--mol_theme_spirit: hsl( 0deg, 0%, 100%, .75 );\n\t\n\t--mol_theme_back: hsl( var(--mol_theme_hue), 20%, 92% );\n\t--mol_theme_card: hsl( var(--mol_theme_hue), 50%, 100%, .5 );\n\t--mol_theme_field: hsl( var(--mol_theme_hue), 50%, 100%, .75 );\n\t--mol_theme_hover: hsl( var(--mol_theme_hue), 0%, 50%, .1 );\n\t\n\t--mol_theme_text: hsl( var(--mol_theme_hue), 0%, 0% );\n\t--mol_theme_shade: hsl( var(--mol_theme_hue), 0%, 40%, 1 );\n\t--mol_theme_line: hsl( var(--mol_theme_hue), 0%, 50%, .25 );\n\t--mol_theme_focus: hsl( calc( var(--mol_theme_hue) + 180deg ), 100%, 40% );\n\t\n\t--mol_theme_control: hsl( var(--mol_theme_hue), 80%, 30% );\n\t--mol_theme_current: hsl( calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ), 80%, 30% );\n\t--mol_theme_special: hsl( calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ), 80%, 30% );\n\n} @supports( color: oklch( 0% 0 0deg ) ) {\n[mol_theme=\"$mol_theme_light\"], :where([mol_theme=\"$mol_theme_light\"]) [mol_theme] {\n\t--mol_theme_back: oklch( 92% .01 var(--mol_theme_hue) );\n\t--mol_theme_card: oklch( 99% .01 var(--mol_theme_hue) / .5 );\n\t--mol_theme_field: oklch( 100% 0 var(--mol_theme_hue) / .5 );\n\t--mol_theme_hover: oklch( 50% 0 var(--mol_theme_hue) / .1 );\n\t\n\t--mol_theme_text: oklch( 20% 0 var(--mol_theme_hue) );\n\t--mol_theme_shade: oklch( 60% 0 var(--mol_theme_hue) );\n\t--mol_theme_line: oklch( 50% 0 var(--mol_theme_hue) / .25 );\n\t--mol_theme_focus: oklch( 60% .2 calc( var(--mol_theme_hue) + 180deg ) );\n\t\n\t--mol_theme_control: oklch( 40% .15 var(--mol_theme_hue) );\n\t--mol_theme_current: oklch( 50% .2 calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ) );\n\t--mol_theme_special: oklch( 50% .2 calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ) );\n\n} }\n\n:where( :root, [mol_theme=\"$mol_theme_dark\"] ) [mol_theme=\"$mol_theme_base\"] {\n\t--mol_theme_back: oklch( 25% .075 var(--mol_theme_hue) );\n\t--mol_theme_card: oklch( 35% .1 var(--mol_theme_hue) / .25 );\n}\n:where( [mol_theme=\"$mol_theme_light\"] ) [mol_theme=\"$mol_theme_base\"] {\n\t--mol_theme_back: oklch( 85% .075 var(--mol_theme_hue) );\n\t--mol_theme_card: oklch( 98% .03 var(--mol_theme_hue) / .25 );\n}\n\n:where( :root, [mol_theme=\"$mol_theme_dark\"] ) [mol_theme=\"$mol_theme_current\"] {\n\t--mol_theme_back: oklch( 25% .05 calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ) );\n\t--mol_theme_card: oklch( 35% .1 calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ) / .25 );\n}\n:where( [mol_theme=\"$mol_theme_light\"] ) [mol_theme=\"$mol_theme_current\"] {\n\t--mol_theme_back: oklch( 85% .05 calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ) );\n\t--mol_theme_card: oklch( 98% .03 calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ) / .25 );\n}\n\n:where( :root, [mol_theme=\"$mol_theme_dark\"] ) [mol_theme=\"$mol_theme_special\"] {\n\t--mol_theme_back: oklch( 25% .05 calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ) );\n\t--mol_theme_card: oklch( 35% .1 calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ) / .25 );\n}\n:where( [mol_theme=\"$mol_theme_light\"] ) [mol_theme=\"$mol_theme_special\"] {\n\t--mol_theme_back: oklch( 85% .05 calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ) );\n\t--mol_theme_card: oklch( 98% .03 calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ) / .25 );\n}\n\n:where( :root, [mol_theme=\"$mol_theme_dark\"] ) [mol_theme=\"$mol_theme_accent\"] {\n\t--mol_theme_back: oklch( 35% .1 calc( var(--mol_theme_hue) + 180deg ) );\n\t--mol_theme_card: oklch( 45% .15 calc( var(--mol_theme_hue) + 180deg ) / .25 );\n}\n:where( [mol_theme=\"$mol_theme_light\"] ) [mol_theme=\"$mol_theme_accent\"] {\n\t--mol_theme_back: oklch( 83% .1 calc( var(--mol_theme_hue) + 180deg ) );\n\t--mol_theme_card: oklch( 98% .03 calc( var(--mol_theme_hue) + 180deg ) / .25 );\n}\n\n");
})($ || ($ = {}));

;
"use strict";
// namespace $ {
// 	$mol_style_attach( '$mol_theme_lights', `:root { --mol_theme_back: oklch( ${ $$.$mol_lights() ? 92 : 20 }% .01 var(--mol_theme_hue) ) }` )
// }

;
"use strict";
var $;
(function ($) {
    /**
     * Gap in CSS
     * @see https://page.hyoo.ru/#!=msdb74_bm7nsq
     */
    $.$mol_gap = $mol_style_prop('mol_gap', [
        'page',
        'block',
        'text',
        'emoji',
        'round',
        'space',
        'blur',
    ]);
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/gap/gap.css", ":root {\n\t--mol_gap_page: 3rem;\n\t--mol_gap_block: .75rem;\n\t--mol_gap_text: .5rem .75rem;\n\t--mol_gap_emoji: .5rem;\n\t--mol_gap_round: .25rem;\n\t--mol_gap_space: .25rem;\n\t--mol_gap_blur: .5rem;\n}\n");
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_children(el, childNodes) {
        const node_set = new Set(childNodes);
        let nextNode = el.firstChild;
        for (let view of childNodes) {
            if (view == null)
                continue;
            if (view instanceof $mol_dom_context.Node) {
                while (true) {
                    if (!nextNode) {
                        el.appendChild(view);
                        break;
                    }
                    if (nextNode == view) {
                        nextNode = nextNode.nextSibling;
                        break;
                    }
                    else {
                        if (node_set.has(nextNode)) {
                            el.insertBefore(view, nextNode);
                            break;
                        }
                        else {
                            const nn = nextNode.nextSibling;
                            el.removeChild(nextNode);
                            nextNode = nn;
                        }
                    }
                }
            }
            else {
                if (nextNode && nextNode.nodeName === '#text') {
                    const str = String(view);
                    if (nextNode.nodeValue !== str)
                        nextNode.nodeValue = str;
                    nextNode = nextNode.nextSibling;
                }
                else {
                    const textNode = $mol_dom_context.document.createTextNode(String(view));
                    el.insertBefore(textNode, nextNode);
                }
            }
        }
        while (nextNode) {
            const currNode = nextNode;
            nextNode = currNode.nextSibling;
            el.removeChild(currNode);
        }
    }
    $.$mol_dom_render_children = $mol_dom_render_children;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    $.$mol_jsx_prefix = '';
    $.$mol_jsx_crumbs = '';
    $.$mol_jsx_booked = null;
    $.$mol_jsx_document = {
        getElementById: () => null,
        createElementNS: (space, name) => $mol_dom_context.document.createElementNS(space, name),
        createDocumentFragment: () => $mol_dom_context.document.createDocumentFragment(),
    };
    $.$mol_jsx_frag = '';
    /**
     * JSX adapter that makes DOM tree.
     * Generates global unique ids for every DOM-element by components tree with ids.
     * Ensures all local ids are unique.
     * Can reuse an existing nodes by GUIDs when used inside [`mol_jsx_attach`](https://github.com/hyoo-ru/mam_mol/tree/master/jsx/attach).
     */
    function $mol_jsx(Elem, props, ...childNodes) {
        const id = props && props.id || '';
        const guid = id ? $.$mol_jsx_prefix ? $.$mol_jsx_prefix + '/' + id : id : $.$mol_jsx_prefix;
        const crumbs_self = id ? $.$mol_jsx_crumbs.replace(/(\S+)/g, `$1_${id.replace(/\/.*/i, '')}`) : $.$mol_jsx_crumbs;
        if (Elem && $.$mol_jsx_booked) {
            if ($.$mol_jsx_booked.has(id)) {
                $mol_fail(new Error(`JSX already has tag with id ${JSON.stringify(guid)}`));
            }
            else {
                $.$mol_jsx_booked.add(id);
            }
        }
        let node = guid ? $.$mol_jsx_document.getElementById(guid) : null;
        if ($.$mol_jsx_prefix) {
            const prefix_ext = $.$mol_jsx_prefix;
            const booked_ext = $.$mol_jsx_booked;
            const crumbs_ext = $.$mol_jsx_crumbs;
            for (const field in props) {
                const func = props[field];
                if (typeof func !== 'function')
                    continue;
                const wrapper = function (...args) {
                    const prefix = $.$mol_jsx_prefix;
                    const booked = $.$mol_jsx_booked;
                    const crumbs = $.$mol_jsx_crumbs;
                    try {
                        $.$mol_jsx_prefix = prefix_ext;
                        $.$mol_jsx_booked = booked_ext;
                        $.$mol_jsx_crumbs = crumbs_ext;
                        return func.call(this, ...args);
                    }
                    finally {
                        $.$mol_jsx_prefix = prefix;
                        $.$mol_jsx_booked = booked;
                        $.$mol_jsx_crumbs = crumbs;
                    }
                };
                $mol_func_name_from(wrapper, func);
                props[field] = wrapper;
            }
        }
        if (typeof Elem !== 'string') {
            if ('prototype' in Elem) {
                const view = node && node[String(Elem)] || new Elem;
                Object.assign(view, props);
                view[Symbol.toStringTag] = guid;
                view.childNodes = childNodes;
                if (!view.ownerDocument)
                    view.ownerDocument = $.$mol_jsx_document;
                view.className = (crumbs_self ? crumbs_self + ' ' : '') + (Elem['name'] || Elem);
                node = view.valueOf();
                node[String(Elem)] = view;
                return node;
            }
            else {
                const prefix = $.$mol_jsx_prefix;
                const booked = $.$mol_jsx_booked;
                const crumbs = $.$mol_jsx_crumbs;
                try {
                    $.$mol_jsx_prefix = guid;
                    $.$mol_jsx_booked = new Set;
                    $.$mol_jsx_crumbs = (crumbs_self ? crumbs_self + ' ' : '') + (Elem['name'] || Elem);
                    return Elem(props, ...childNodes);
                }
                finally {
                    $.$mol_jsx_prefix = prefix;
                    $.$mol_jsx_booked = booked;
                    $.$mol_jsx_crumbs = crumbs;
                }
            }
        }
        if (!node) {
            node = Elem
                ? $.$mol_jsx_document.createElementNS(props?.xmlns ?? 'http://www.w3.org/1999/xhtml', Elem)
                : $.$mol_jsx_document.createDocumentFragment();
        }
        $mol_dom_render_children(node, [].concat(...childNodes));
        if (!Elem)
            return node;
        if (guid)
            node.id = guid;
        for (const key in props) {
            if (key === 'id')
                continue;
            if (typeof props[key] === 'string') {
                if (typeof node[key] === 'string')
                    node[key] = props[key];
                node.setAttribute(key, props[key]);
            }
            else if (props[key] &&
                typeof props[key] === 'object' &&
                Reflect.getPrototypeOf(props[key]) === Reflect.getPrototypeOf({})) {
                if (typeof node[key] === 'object') {
                    Object.assign(node[key], props[key]);
                    continue;
                }
            }
            else {
                node[key] = props[key];
            }
        }
        if ($.$mol_jsx_crumbs)
            node.className = (props?.['class'] ? props['class'] + ' ' : '') + crumbs_self;
        return node;
    }
    $.$mol_jsx = $mol_jsx;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_window extends $mol_object {
        static size() {
            return {
                width: 1024,
                height: 768,
            };
        }
    }
    $.$mol_window = $mol_window;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const TypedArray = Object.getPrototypeOf(Uint8Array);
    /** Returns string key for any value. */
    function $mol_key(value) {
        primitives: {
            if (typeof value === 'bigint')
                return value.toString() + 'n';
            if (typeof value === 'symbol')
                return `Symbol(${value.description})`;
            if (!value)
                return JSON.stringify(value); // 0, null, ""
            if (typeof value !== 'object' && typeof value !== 'function')
                return JSON.stringify(value); // boolean, number, string
        }
        caching: {
            let key = $mol_key_store.get(value);
            if (key)
                return key;
        }
        objects: {
            if (value instanceof TypedArray) {
                return `${value[Symbol.toStringTag]}([${[...value].map(v => $mol_key(v))}])`;
            }
            if (Array.isArray(value))
                return `[${value.map(v => $mol_key(v))}]`;
            if (value instanceof RegExp)
                return value.toString();
            if (value instanceof Date)
                return `Date(${value.valueOf()})`;
        }
        structures: {
            const proto = Reflect.getPrototypeOf(value);
            if (!proto || !Reflect.getPrototypeOf(proto)) {
                return `{${Object.entries(value).map(([k, v]) => JSON.stringify(k) + ':' + $mol_key(v))}}`;
            }
        }
        handlers: {
            if ($mol_key_handle in value) {
                return value[$mol_key_handle]();
            }
        }
        containers: {
            const key = JSON.stringify('#' + $mol_guid());
            $mol_key_store.set(value, key);
            return key;
        }
    }
    $.$mol_key = $mol_key;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_after_timeout extends $mol_object2 {
        delay;
        task;
        id;
        constructor(delay, task) {
            super();
            this.delay = delay;
            this.task = task;
            this.id = setTimeout(task, delay);
        }
        destructor() {
            clearTimeout(this.id);
        }
    }
    $.$mol_after_timeout = $mol_after_timeout;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_after_frame extends $mol_after_timeout {
        task;
        constructor(task) {
            super(16, task);
            this.task = task;
        }
    }
    $.$mol_after_frame = $mol_after_frame;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    /**
     * Decorates method to fiber to ensure it is executed only once inside other fiber.
     */
    function $mol_wire_method(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const temp = $mol_wire_task.getter(orig);
        const value = function (...args) {
            const fiber = temp(this ?? null, args);
            return fiber.sync();
        };
        Object.defineProperty(value, 'name', { value: orig.name + ' ' });
        Object.assign(value, { orig });
        const descr2 = { ...descr, value };
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_method = $mol_wire_method;
})($ || ($ = {}));

;
"use strict";

;
"use strict";

;
"use strict";
var $;
(function ($) {
    /** Long-living fiber. */
    class $mol_wire_atom extends $mol_wire_fiber {
        static solo(host, task) {
            const field = task.name + '()';
            const existen = Object.getOwnPropertyDescriptor(host ?? task, field)?.value;
            if (existen)
                return existen;
            const prefix = host?.[Symbol.toStringTag] ?? (host instanceof Function ? $$.$mol_func_name(host) : host);
            const key = prefix + ('.' + task.name + '<>');
            const fiber = new $mol_wire_atom(key, task, host, []);
            (host ?? task)[field] = fiber;
            return fiber;
        }
        static plex(host, task, key) {
            const field = task.name + '()';
            let dict = Object.getOwnPropertyDescriptor(host ?? task, field)?.value;
            const prefix = host?.[Symbol.toStringTag] ?? (host instanceof Function ? $$.$mol_func_name(host) : host);
            const key_str = $mol_key(key);
            if (dict) {
                const existen = dict.get(key_str);
                if (existen)
                    return existen;
            }
            else {
                dict = (host ?? task)[field] = new Map();
            }
            const id = prefix + ('.' + task.name) + ('<' + key_str.replace(/^"|"$/g, "'") + '>');
            const fiber = new $mol_wire_atom(id, task, host, [key]);
            dict.set(key_str, fiber);
            return fiber;
        }
        static watching = new Set();
        static watcher = null;
        static watch() {
            $mol_wire_atom.watcher = new $mol_after_frame($mol_wire_atom.watch);
            for (const atom of $mol_wire_atom.watching) {
                if (atom.cursor === $mol_wire_cursor.final) {
                    $mol_wire_atom.watching.delete(atom);
                }
                else {
                    atom.cursor = $mol_wire_cursor.stale;
                    atom.fresh();
                }
            }
        }
        watch() {
            if (!$mol_wire_atom.watcher) {
                $mol_wire_atom.watcher = new $mol_after_frame($mol_wire_atom.watch);
            }
            $mol_wire_atom.watching.add(this);
        }
        /**
         * Update atom value through another temp fiber.
         */
        resync(args) {
            // enforce pulling tasks abort
            for (let cursor = this.pub_from; cursor < this.sub_from; cursor += 2) {
                const pub = this.data[cursor];
                if (pub && pub instanceof $mol_wire_task) {
                    pub.destructor();
                }
            }
            return this.put(this.task.call(this.host, ...args));
        }
        once() {
            return this.sync();
        }
        channel() {
            return Object.assign((next) => {
                if (next !== undefined)
                    return this.resync([...this.args, next]);
                if (!$mol_wire_fiber.warm)
                    return this.result();
                if ($mol_wire_auto()?.temp) {
                    return this.once();
                }
                else {
                    return this.sync();
                }
            }, { atom: this });
        }
        destructor() {
            super.destructor();
            if (this.pub_from === 0) {
                ;
                (this.host ?? this.task)[this.field()] = null;
            }
            else {
                const key = $mol_key(this.args[0]);
                const map = (this.host ?? this.task)[this.field()];
                if (!map.has(key))
                    this.$.$mol_log3_warn({
                        place: this,
                        message: 'Absent key on destruction',
                        hint: 'Check for $mol_key(key) is not changed',
                    });
                map.delete(key);
            }
        }
        put(next) {
            const prev = this.cache;
            update: if (next !== prev) {
                try {
                    if ($mol_compare_deep(prev, next))
                        break update;
                }
                catch (error) {
                    $mol_fail_log(error);
                }
                if ($mol_owning_check(this, prev)) {
                    prev.destructor();
                }
                if ($mol_owning_catch(this, next)) {
                    try {
                        next[Symbol.toStringTag] = this[Symbol.toStringTag];
                    }
                    catch { // Promises throw in strict mode
                        Object.defineProperty(next, Symbol.toStringTag, { value: this[Symbol.toStringTag] });
                    }
                }
                if (!this.sub_empty)
                    this.emit();
            }
            this.cache = next;
            this.cursor = $mol_wire_cursor.fresh;
            if ($mol_promise_like(next))
                return next;
            this.complete_pubs();
            return next;
        }
    }
    __decorate([
        $mol_wire_method
    ], $mol_wire_atom.prototype, "resync", null);
    __decorate([
        $mol_wire_method
    ], $mol_wire_atom.prototype, "once", null);
    $.$mol_wire_atom = $mol_wire_atom;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    /** Decorates solo object channel to [mol_wire_atom](../atom/atom.ts). */
    function $mol_wire_solo(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const descr2 = {
            ...descr,
            value: function (...args) {
                let atom = $mol_wire_atom.solo(this, orig);
                if ((args.length === 0) || (args[0] === undefined)) {
                    if (!$mol_wire_fiber.warm)
                        return atom.result();
                    if ($mol_wire_auto()?.temp) {
                        return atom.once();
                    }
                    else {
                        return atom.sync();
                    }
                }
                return atom.resync(args);
            }
        };
        Reflect.defineProperty(descr2.value, 'name', { value: orig.name + ' ' });
        Reflect.defineProperty(descr2.value, 'length', { value: orig.length });
        Object.assign(descr2.value, { orig });
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_solo = $mol_wire_solo;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    /** Reactive memoizing multiplexed property decorator. */
    function $mol_wire_plex(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const descr2 = {
            ...descr,
            value: function (...args) {
                let atom = $mol_wire_atom.plex(this, orig, args[0]);
                if ((args.length === 1) || (args[1] === undefined)) {
                    if (!$mol_wire_fiber.warm)
                        return atom.result();
                    if ($mol_wire_auto()?.temp) {
                        return atom.once();
                    }
                    else {
                        return atom.sync();
                    }
                }
                return atom.resync(args);
            }
        };
        Reflect.defineProperty(descr2.value, 'name', { value: orig.name + ' ' });
        Reflect.defineProperty(descr2.value, 'length', { value: orig.length });
        Object.assign(descr2.value, { orig });
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_plex = $mol_wire_plex;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    /**
     * Reactive memoizing solo property decorator from [mol_wire](../wire/README.md)
     * @example
     * '@' $mol_mem
     * name(next?: string) {
     * 	return next ?? 'default'
     * }
     * @see https://mol.hyoo.ru/#!section=docs/=qxmh6t_sinbmb
     */
    $.$mol_mem = $mol_wire_solo;
    /**
     * Reactive memoizing multiplexed property decorator [mol_wire](../wire/README.md)
     * @example
     * '@' $mol_mem_key
     * name(id: number, next?: string) {
     *  return next ?? 'default'
     * }
     * @see https://mol.hyoo.ru/#!section=docs/=qxmh6t_sinbmb
     */
    $.$mol_mem_key = $mol_wire_plex;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_guard_defined(value) {
        return value !== null && value !== undefined;
    }
    $.$mol_guard_defined = $mol_guard_defined;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_view_selection extends $mol_object {
        static focused(next, notify) {
            const parents = [];
            let element = next?.[0] ?? $mol_dom_context.document.activeElement;
            while (element?.shadowRoot) {
                element = element.shadowRoot.activeElement;
            }
            while (element) {
                parents.push(element);
                const parent = element.parentNode;
                if (parent instanceof ShadowRoot)
                    element = parent.host;
                else
                    element = parent;
            }
            if (!next || notify)
                return parents;
            new $mol_after_tick(() => {
                const element = this.focused()[0];
                if (element)
                    element.focus();
                else
                    $mol_dom_context.blur();
            });
            return parents;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_view_selection, "focused", null);
    $.$mol_view_selection = $mol_view_selection;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_wrapper extends $mol_object2 {
        static wrap;
        static run(task) {
            return this.func(task)();
        }
        static func(func) {
            return this.wrap(func);
        }
        static get class() {
            return (Class) => {
                const construct = (target, args) => new Class(...args);
                const handler = {
                    construct: this.func(construct)
                };
                handler[Symbol.toStringTag] = Class.name + '#';
                return new Proxy(Class, handler);
            };
        }
        static get method() {
            return (obj, name, descr = Reflect.getOwnPropertyDescriptor(obj, name)) => {
                descr.value = this.func(descr.value);
                return descr;
            };
        }
        static get field() {
            return (obj, name, descr = Reflect.getOwnPropertyDescriptor(obj, name)) => {
                descr.get = descr.set = this.func(descr.get);
                return descr;
            };
        }
    }
    $.$mol_wrapper = $mol_wrapper;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_memo extends $mol_wrapper {
        static wrap(task) {
            const store = new WeakMap();
            const fun = function (next) {
                if (next === undefined && store.has(this ?? fun))
                    return store.get(this ?? fun);
                const val = task.call(this, next) ?? next;
                store.set(this ?? fun, val);
                return val;
            };
            Reflect.defineProperty(fun, 'name', { value: task.name + ' ' });
            return fun;
        }
    }
    $.$mol_memo = $mol_memo;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_qname(name) {
        return name.replace(/\W/g, '').replace(/^(?=\d+)/, '_');
    }
    $.$mol_dom_qname = $mol_dom_qname;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    /** Run code without state changes */
    function $mol_wire_probe(task, def) {
        const warm = $mol_wire_fiber.warm;
        try {
            $mol_wire_fiber.warm = false;
            const res = task();
            if (res === undefined)
                return def;
            return res;
        }
        finally {
            $mol_wire_fiber.warm = warm;
        }
    }
    $.$mol_wire_probe = $mol_wire_probe;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    /**
     * Real-time refresh current atom.
     * Don't use if possible. May reduce performance.
     */
    function $mol_wire_watch() {
        const atom = $mol_wire_auto();
        if (atom instanceof $mol_wire_atom) {
            atom.watch();
        }
        else {
            $mol_fail(new Error('Atom is required for watching'));
        }
    }
    $.$mol_wire_watch = $mol_wire_watch;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    /**
     * Returns closure that returns constant value.
     * @example
     * const rnd = $mol_const( Math.random() )
     */
    function $mol_const(value) {
        const getter = (() => value);
        getter['()'] = value;
        getter[Symbol.toStringTag] = value;
        getter[$mol_dev_format_head] = () => $mol_dev_format_span({}, '()=> ', $mol_dev_format_auto(value));
        return getter;
    }
    $.$mol_const = $mol_const;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    /**
     * Disable reaping of current subscriber
     */
    function $mol_wire_solid() {
        let current = $mol_wire_auto();
        if (current.temp)
            current = current.host;
        if (current.reap !== nothing) {
            current?.sub_on(sub, sub.data.length);
        }
        current.reap = nothing;
    }
    $.$mol_wire_solid = $mol_wire_solid;
    const nothing = () => { };
    const sub = new $mol_wire_pub_sub;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_attributes(el, attrs) {
        for (let name in attrs) {
            let val = attrs[name];
            if (val === undefined) {
                continue;
            }
            else if (val === null || val === false) {
                if (!el.hasAttribute(name))
                    continue;
                el.removeAttribute(name);
            }
            else {
                const str = String(val);
                if (el.getAttribute(name) === str)
                    continue;
                el.setAttribute(name, str);
            }
        }
    }
    $.$mol_dom_render_attributes = $mol_dom_render_attributes;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_events(el, events, passive = false) {
        for (let name in events) {
            el.addEventListener(name, events[name], { passive });
        }
    }
    $.$mol_dom_render_events = $mol_dom_render_events;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_error_message(error) {
        return String((error instanceof Error ? error.message : null) || error) || 'Unknown';
    }
    $.$mol_error_message = $mol_error_message;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_styles(el, styles) {
        for (let name in styles) {
            let val = styles[name];
            const style = el.style;
            const kebab = (name) => name.replace(/[A-Z]/g, letter => '-' + letter.toLowerCase());
            if (typeof val === 'number') {
                style.setProperty(kebab(name), `${val}px`);
            }
            else {
                style.setProperty(kebab(name), val);
            }
        }
    }
    $.$mol_dom_render_styles = $mol_dom_render_styles;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_fields(el, fields) {
        for (let key in fields) {
            const val = fields[key];
            if (val === undefined)
                continue;
            if (val === el[key])
                continue;
            el[key] = val;
        }
    }
    $.$mol_dom_render_fields = $mol_dom_render_fields;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    /** Convert a pseudo-synchronous (Suspense API) API to an explicit asynchronous one (for integrating with external systems). */
    function $mol_wire_async(obj) {
        let fiber;
        const temp = $mol_wire_task.getter(obj);
        return new Proxy(obj, {
            get(obj, field) {
                const val = obj[field];
                if (typeof val !== 'function')
                    return val;
                let fiber;
                const temp = $mol_wire_task.getter(val);
                return function $mol_wire_async(...args) {
                    fiber?.destructor();
                    fiber = temp(obj, args);
                    return fiber.async();
                };
            },
            apply(obj, self, args) {
                fiber?.destructor();
                fiber = temp(self, args);
                return fiber.async();
            },
        });
    }
    $.$mol_wire_async = $mol_wire_async;
})($ || ($ = {}));

;
"use strict";

;
"use strict";

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/view/view/view.css", "@view-transition {\n\tnavigation: auto;\n}\n\n[mol_view] {\n\ttransition-property: height, width, min-height, min-width, max-width, max-height, transform, scale, translate, rotate;\n\ttransition-duration: .2s;\n\ttransition-timing-function: ease-out;\n\t-webkit-appearance: none;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tflex-shrink: 0;\n\tcontain: style;\n\tscrollbar-color: var(--mol_theme_line) transparent;\n\tscrollbar-width: thin;\n\t/* text-wrap-style: pretty; dont work in textarea */\n\tunicode-bidi: plaintext\n}\n\n[mol_view]::selection {\n\tbackground: var(--mol_theme_line);\n}\t\n\n[mol_view]::-webkit-scrollbar {\n\twidth: .25rem;\n\theight: .25rem;\n}\n\n[mol_view]::-webkit-scrollbar-corner {\n\tbackground-color: var(--mol_theme_line);\n}\n\n[mol_view]::-webkit-scrollbar-track {\n\tbackground-color: transparent;\n}\n\n[mol_view]::-webkit-scrollbar-thumb {\n\tbackground-color: var(--mol_theme_line);\n\tborder-radius: var(--mol_gap_round);\n}\n\n[mol_view] > * {\n\tword-break: inherit;\n}\n\n[mol_view_root] {\n\tmargin: 0;\n\tpadding: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbox-sizing: border-box;\n\tfont-family: system-ui, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n\tfont-size: 1rem;\n\tline-height: 1.5rem;\n\t/* background: var(--mol_theme_back);\n\tcolor: var(--mol_theme_text); */\n\tcontain: unset; /** Fixes bg ignoring when applied to body on Chrome */\n\ttab-size: 4;\n\t/*overscroll-behavior: contain; /** Disable navigation gestures **/\n}\n\n@media print {\n\t[mol_view_root] {\n\t\theight: auto;\n\t}\n}\n[mol_view][mol_view_error]:not([mol_view_error=\"Promise\"], [mol_view_error=\"$mol_promise_blocker\"]) {\n\tbackground-image: repeating-linear-gradient(\n\t\t-45deg,\n\t\t#f92323,\n\t\t#f92323 .5rem,\n\t\t#ff3d3d .5rem,\n\t\t#ff3d3d 1.5rem\n\t);\n\tcolor: black;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n@keyframes mol_view_wait {\n\tfrom {\n\t\topacity: .25;\n\t}\n\t20% {\n\t\topacity: .75;\n\t}\n\tto {\n\t\topacity: .25;\n\t}\n}\n\n:where([mol_view][mol_view_error=\"$mol_promise_blocker\"]),\n:where([mol_view][mol_view_error=\"Promise\"]) {\n\tbackground: var(--mol_theme_hover);\n}\n\n[mol_view][mol_view_error=\"Promise\"] {\n\tanimation: mol_view_wait 1s steps(20,end) infinite;\n}\n");
})($ || ($ = {}));

;
"use strict";
/** @jsx $mol_jsx */
var $;
(function ($) {
    function $mol_view_visible_width() {
        return $mol_window.size().width;
    }
    $.$mol_view_visible_width = $mol_view_visible_width;
    function $mol_view_visible_height() {
        return $mol_window.size().height;
    }
    $.$mol_view_visible_height = $mol_view_visible_height;
    function $mol_view_state_key(suffix) {
        return suffix;
    }
    $.$mol_view_state_key = $mol_view_state_key;
    /**
     * The base class for all visual components. It provides the infrastructure for reactive lazy rendering, handling exceptions.
     * @see https://mol.hyoo.ru/#!section=docs/=vv2nig_s5zr0f
     */
    /// Reactive statefull lazy ViewModel
    class $mol_view extends $mol_object {
        static Root(id) {
            return new this;
        }
        static roots() {
            return [...$mol_dom.document.querySelectorAll('[mol_view_root]:not([mol_view_root=""])')].map((node, index) => {
                const name = node.getAttribute('mol_view_root');
                const View = this.$[name];
                if (!View) {
                    $mol_fail_log(new Error(`Autobind unknown view class`, { cause: { name } }));
                    return null;
                }
                const view = View.Root(index);
                view.dom_node(node);
                return view;
            }).filter($mol_guard_defined);
        }
        static auto() {
            const roots = this.roots();
            if (!roots.length)
                return;
            for (const root of roots) {
                try {
                    root.dom_tree();
                }
                catch (error) {
                    $mol_fail_log(error);
                }
            }
            try {
                document.title = roots[0].title();
            }
            catch (error) {
                $mol_fail_log(error);
            }
            descr: try {
                const descr = roots[0].hint();
                if (!descr)
                    break descr;
                const head = $mol_dom.document.head;
                let node = head.querySelector('meta[name="description"]');
                if (node)
                    node.content = descr;
                else
                    head.append($mol_jsx("meta", { name: "description", content: descr }));
            }
            catch (error) {
                $mol_fail_log(error);
            }
        }
        title() {
            return this.toString().match(/.*\.(\w+)/)?.[1] ?? this.toString();
        }
        hint() {
            return '';
        }
        focused(next) {
            let node = this.dom_node();
            const value = $mol_view_selection.focused(next === undefined ? undefined : (next ? [node] : []));
            return value.indexOf(node) !== -1;
        }
        state_key(suffix = '') {
            return this.$.$mol_view_state_key(suffix);
        }
        /// Name of element that created when element not found in DOM
        dom_name() {
            return $mol_dom_qname(this.constructor.toString()) || 'div';
        }
        /// NameSpace of element that created when element not found in DOM
        dom_name_space() { return 'http://www.w3.org/1999/xhtml'; }
        /// Raw child views
        sub() {
            return [];
        }
        /// Visible sub views with defined ambient context
        /// Render all by default
        sub_visible() {
            return this.sub();
        }
        /// Minimal width that used for lazy rendering
        minimal_width() {
            let min = 0;
            try {
                const sub = this.sub();
                if (!sub)
                    return 0;
                sub.forEach(view => {
                    if (view instanceof $mol_view) {
                        min = Math.max(min, view.minimal_width());
                    }
                });
            }
            catch (error) {
                $mol_fail_log(error);
                return 24;
            }
            return min;
        }
        maximal_width() {
            return this.minimal_width();
        }
        /// Minimal height that used for lazy rendering
        minimal_height() {
            let min = 0;
            try {
                for (const view of this.sub() ?? []) {
                    if (view instanceof $mol_view) {
                        min = Math.max(min, view.minimal_height());
                    }
                }
            }
            catch (error) {
                $mol_fail_log(error);
                return 24;
            }
            return min;
        }
        static watchers = new Set();
        view_rect() {
            if ($mol_wire_probe(() => this.view_rect()) === undefined) {
                $mol_wire_watch();
                return null; // don't touch DOM to prevent instant reflow
            }
            else {
                const { width, height, left, right, top, bottom } = this.dom_node().getBoundingClientRect();
                return { width, height, left, right, top, bottom }; // pick to optimize compare
            }
        }
        dom_id() {
            return this.toString().replace(/</g, '(').replace(/>/g, ')').replaceAll(/"/g, "'");
        }
        dom_node_external(next) {
            const node = next ?? $mol_dom_context.document.createElementNS(this.dom_name_space(), this.dom_name());
            const id = this.dom_id();
            node.setAttribute('id', id);
            node.toString = $mol_const('<#' + id + '>');
            return node;
        }
        dom_node(next) {
            $mol_wire_solid();
            const node = this.dom_node_external(next);
            $mol_dom_render_attributes(node, this.attr_static());
            const events = this.event_async();
            $mol_dom_render_events(node, events);
            return node;
        }
        dom_final() {
            this.render();
            const sub = this.sub_visible();
            if (!sub)
                return;
            for (const el of sub) {
                if (el && typeof el === 'object' && 'dom_final' in el) {
                    el['dom_final']();
                }
            }
            return this.dom_node();
        }
        dom_tree(next) {
            const node = this.dom_node(next);
            render: try {
                $mol_dom_render_attributes(node, { mol_view_error: null });
                try {
                    this.render();
                }
                finally {
                    for (let plugin of this.plugins()) {
                        if (plugin instanceof $mol_plugin) {
                            plugin.dom_tree();
                        }
                    }
                }
            }
            catch (error) {
                $mol_fail_log(error);
                const mol_view_error = $mol_promise_like(error)
                    ? error.constructor[Symbol.toStringTag] ?? 'Promise'
                    : error.name || error.constructor.name;
                $mol_dom_render_attributes(node, { mol_view_error });
                if ($mol_promise_like(error))
                    break render;
                try {
                    ;
                    node.innerText = this.$.$mol_error_message(error).replace(/^|$/mg, '\xA0\xA0');
                }
                catch { }
            }
            try {
                this.auto();
            }
            catch (error) {
                $mol_fail_log(error);
            }
            return node;
        }
        dom_node_actual() {
            const node = this.dom_node();
            const attr = this.attr();
            const style = this.style();
            $mol_dom_render_attributes(node, attr);
            $mol_dom_render_styles(node, style);
            return node;
        }
        auto() {
            return [];
        }
        render() {
            const node = this.dom_node_actual();
            const sub = this.sub_visible();
            if (!sub)
                return;
            const nodes = sub.map(child => {
                if (child == null)
                    return null;
                return (child instanceof $mol_view)
                    ? child.dom_node()
                    : child instanceof $mol_dom_context.Node
                        ? child
                        : String(child);
            });
            $mol_dom_render_children(node, nodes);
            for (const el of sub)
                if (el && typeof el === 'object' && 'dom_tree' in el)
                    el['dom_tree']();
            $mol_dom_render_fields(node, this.field());
        }
        static view_classes() {
            const proto = this.prototype;
            let current = proto;
            const classes = [];
            while (current) {
                if (current.constructor.name !== classes.at(-1)?.name) {
                    classes.push(current.constructor);
                }
                if (!(current instanceof $mol_view))
                    break;
                current = Object.getPrototypeOf(current);
            }
            return classes;
        }
        static _view_names;
        static view_names(suffix) {
            let cache = Reflect.getOwnPropertyDescriptor(this, '_view_names')?.value;
            if (!cache)
                cache = this._view_names = new Map;
            const cached = cache.get(suffix);
            if (cached)
                return cached;
            const names = [];
            const suffix2 = '_' + suffix[0].toLowerCase() + suffix.substring(1);
            for (const Class of this.view_classes()) {
                if (suffix in Class.prototype)
                    names.push(this.$.$mol_func_name(Class) + suffix2);
                else
                    break;
            }
            cache.set(suffix, names);
            return names;
        }
        view_names_owned() {
            const names = [];
            let owner = $mol_owning_get(this);
            if (!(owner?.host instanceof $mol_view))
                return names;
            const suffix = owner.task.name.trim();
            const suffix2 = '_' + suffix[0].toLowerCase() + suffix.substring(1);
            names.push(...owner.host.constructor.view_names(suffix));
            for (let prefix of owner.host.view_names_owned()) {
                names.push(prefix + suffix2);
            }
            return names;
        }
        view_names() {
            const names = new Set();
            for (let name of this.view_names_owned())
                names.add(name);
            for (let Class of this.constructor.view_classes()) {
                const name = this.$.$mol_func_name(Class);
                if (name)
                    names.add(name);
            }
            return names;
        }
        theme(next) {
            return next;
        }
        attr_static() {
            let attrs = {};
            for (let name of this.view_names())
                attrs[name.replace(/\$/g, '').replace(/^(?=\d)/, '_').toLowerCase()] = '';
            return attrs;
        }
        attr() {
            return {
                mol_theme: this.theme(),
            };
        }
        style() {
            return {};
        }
        field() {
            return {};
        }
        event() {
            return {};
        }
        event_async() {
            return { ...$mol_wire_async(this.event()) };
        }
        plugins() {
            return [];
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this));
        }
        /** Deep search view by predicate. */
        *view_find(check, path = []) {
            if (path.length === 0 && check(this))
                return yield [this];
            try {
                const checked = new Set();
                const sub = this.sub();
                for (const item of sub) {
                    if (!(item instanceof $mol_view))
                        continue;
                    if (!check(item))
                        continue;
                    checked.add(item);
                    yield [...path, this, item];
                }
                for (const item of sub) {
                    if (!(item instanceof $mol_view))
                        continue;
                    if (checked.has(item))
                        continue;
                    yield* item.view_find(check, [...path, this]);
                }
            }
            catch (error) {
                if ($mol_promise_like(error))
                    $mol_fail_hidden(error);
                $mol_fail_log(error);
            }
        }
        /** Renders path of views to DOM. */
        force_render(path) {
            const kids = this.sub();
            const index = kids.findIndex(item => {
                if (item instanceof $mol_view) {
                    return path.has(item);
                }
                else {
                    return false;
                }
            });
            if (index >= 0) {
                kids[index].force_render(path);
            }
        }
        /** Renders view to DOM and scroll to it. */
        ensure_visible(view, align = "start") {
            const path = this.view_find(v => v === view).next().value;
            this.force_render(new Set(path));
            try {
                this.dom_final();
            }
            finally {
                view.dom_node().scrollIntoView({ block: align });
            }
        }
        bring() {
            const win = this.$.$mol_dom_context;
            if (win.parent !== win.self && !win.document.hasFocus())
                return;
            // new this.$.$mol_after_frame( ()=> {
            // 	this.dom_node().scrollIntoView({ block: 'start', inline: 'nearest' })
            // } )
            new this.$.$mol_after_timeout(0, () => {
                this.focused(true);
            });
        }
        destructor() {
            const node = $mol_wire_probe(() => this.dom_node());
            if (!node)
                return;
            const events = $mol_wire_probe(() => this.event_async());
            if (!events)
                return;
            for (let event_name in events) {
                node.removeEventListener(event_name, events[event_name]);
            }
        }
    }
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "title", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "focused", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "dom_name", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "minimal_width", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "minimal_height", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "view_rect", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "dom_id", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_node", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_final", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_tree", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_node_actual", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "render", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "view_names_owned", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "view_names", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "event_async", null);
    __decorate([
        $mol_mem_key
    ], $mol_view, "Root", null);
    __decorate([
        $mol_mem
    ], $mol_view, "roots", null);
    __decorate([
        $mol_mem
    ], $mol_view, "auto", null);
    __decorate([
        $mol_memo.method
    ], $mol_view, "view_classes", null);
    $.$mol_view = $mol_view;
})($ || ($ = {}));

;
	($.$mol_list) = class $mol_list extends ($.$mol_view) {
		gap_before(){
			return 0;
		}
		Gap_before(){
			const obj = new this.$.$mol_view();
			(obj.style) = () => ({"paddingTop": (this.gap_before())});
			return obj;
		}
		Empty(){
			const obj = new this.$.$mol_view();
			return obj;
		}
		gap_after(){
			return 0;
		}
		Gap_after(){
			const obj = new this.$.$mol_view();
			(obj.style) = () => ({"paddingTop": (this.gap_after())});
			return obj;
		}
		rows(){
			return [
				(this.Gap_before()), 
				(this.Empty()), 
				(this.Gap_after())
			];
		}
		render_visible_only(){
			return true;
		}
		render_over(){
			return 0.1;
		}
		sub(){
			return (this.rows());
		}
		item_height_min(id){
			return 1;
		}
		item_width_min(id){
			return 1;
		}
		view_window_shift(next){
			if(next !== undefined) return next;
			return 0;
		}
		view_window(){
			return [0, 0];
		}
	};
	($mol_mem(($.$mol_list.prototype), "Gap_before"));
	($mol_mem(($.$mol_list.prototype), "Empty"));
	($mol_mem(($.$mol_list.prototype), "Gap_after"));
	($mol_mem(($.$mol_list.prototype), "view_window_shift"));


;
"use strict";
var $;
(function ($) {
    $.$mol_mem_cached = $mol_wire_probe;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    let cache = null;
    function $mol_support_css_overflow_anchor() {
        return cache ?? (cache = this.$mol_dom_context.CSS?.supports('overflow-anchor:auto') ?? false);
    }
    $.$mol_support_css_overflow_anchor = $mol_support_css_overflow_anchor;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_dom_listener extends $mol_object {
        _node;
        _event;
        _handler;
        _config;
        constructor(_node, _event, _handler, _config = { passive: true }) {
            super();
            this._node = _node;
            this._event = _event;
            this._handler = _handler;
            this._config = _config;
            this._node.addEventListener(this._event, this._handler, this._config);
        }
        destructor() {
            this._node.removeEventListener(this._event, this._handler, this._config);
            super.destructor();
        }
    }
    $.$mol_dom_listener = $mol_dom_listener;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_print extends $mol_object {
        static before() {
            return new $mol_dom_listener(this.$.$mol_dom_context, 'beforeprint', () => {
                this.active(true);
            });
        }
        static after() {
            return new $mol_dom_listener(this.$.$mol_dom_context, 'afterprint', () => {
                this.active(false);
            });
        }
        static active(next) {
            this.before();
            this.after();
            return next || false;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_print, "before", null);
    __decorate([
        $mol_mem
    ], $mol_print, "after", null);
    __decorate([
        $mol_mem
    ], $mol_print, "active", null);
    $.$mol_print = $mol_print;
})($ || ($ = {}));

;
"use strict";

;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        /**
         * The list of rows with lazy/virtual rendering support based on `minimal_height` of rows.
         * `mol_list` should contain only components that inherits `mol_view`. You should not place raw strings or numbers in list.
         * @see https://mol.hyoo.ru/#!section=demos/demo=mol_list_demo
         */
        class $mol_list extends $.$mol_list {
            sub() {
                const rows = this.rows();
                const next = (rows.length === 0) ? [this.Empty()] : rows;
                const prev = $mol_mem_cached(() => this.sub());
                const [start, end] = $mol_mem_cached(() => this.view_window()) ?? [0, 0];
                if (prev && $mol_mem_cached(() => prev[start] !== next[start])) {
                    const index = $mol_mem_cached(() => next.indexOf(prev[start])) ?? -1;
                    if (index >= 0)
                        this.view_window_shift(index - start);
                }
                return next;
            }
            render_visible_only() {
                return this.$.$mol_support_css_overflow_anchor();
            }
            _view_window_last = [0, 0];
            view_window(next) {
                const kids = this.sub();
                if (kids.length < 3)
                    return [0, kids.length];
                if (this.$.$mol_print.active())
                    return [0, kids.length];
                const rect = this.view_rect();
                if (next)
                    return next;
                let [min, max] = $mol_mem_cached(() => this.view_window()) ?? this._view_window_last;
                const shift = this.view_window_shift();
                this.view_window_shift(0);
                min += shift;
                max += shift;
                let max2 = max = Math.min(max, kids.length);
                let min2 = min = Math.max(0, Math.min(min, max - 1));
                const anchoring = this.render_visible_only();
                const window_height = this.$.$mol_window.size().height + 40;
                const over = Math.ceil(window_height * this.render_over());
                const limit_top = -over;
                const limit_bottom = window_height + over;
                const gap_before = $mol_mem_cached(() => this.gap_before()) ?? 0;
                const gap_after = $mol_mem_cached(() => this.gap_after()) ?? 0;
                let top = Math.ceil(rect?.top ?? 0) + gap_before;
                let bottom = Math.ceil(rect?.bottom ?? 0) - gap_after;
                // change nothing when already covers all limits
                if (top <= limit_top && bottom >= limit_bottom) {
                    return [min2, max2];
                }
                // jumps when fully over limits
                if (anchoring && ((bottom < limit_top) || (top > limit_bottom))) {
                    min = 0;
                    top = Math.ceil(rect?.top ?? 0);
                    while (min < (kids.length - 1)) {
                        const height = this.item_height_min(min);
                        if (top + height >= limit_top)
                            break;
                        top += height;
                        ++min;
                    }
                    min2 = min;
                    max2 = max = min;
                    bottom = top;
                }
                let top2 = top;
                let bottom2 = bottom;
                // force recalc min when overlapse top limit
                if (anchoring && (top < limit_top) && (bottom < limit_bottom) && (max < kids.length)) {
                    min2 = max;
                    top2 = bottom;
                }
                // force recalc max when overlapse bottom limit
                if ((bottom > limit_bottom) && (top > limit_top) && (min > 0)) {
                    max2 = min;
                    bottom2 = top;
                }
                // extend min to cover top limit
                while (anchoring && ((top2 > limit_top) && (min2 > 0))) {
                    --min2;
                    top2 -= this.item_height_min(min2);
                }
                // extend max to cover bottom limit
                while (bottom2 < limit_bottom && max2 < kids.length) {
                    bottom2 += this.item_height_min(max2);
                    ++max2;
                }
                return [min2, max2];
            }
            item_height_min(index) {
                try {
                    return this.sub()[index]?.minimal_height() ?? 0;
                }
                catch (error) {
                    $mol_fail_log(error);
                    return 0;
                }
            }
            row_width_min(index) {
                try {
                    return this.sub()[index]?.minimal_width() ?? 0;
                }
                catch (error) {
                    $mol_fail_log(error);
                    return 0;
                }
            }
            gap_before() {
                let gap = 0;
                const skipped = this.view_window()[0];
                for (let i = 0; i < skipped; ++i)
                    gap += this.item_height_min(i);
                return gap;
            }
            gap_after() {
                let gap = 0;
                const from = this.view_window()[1];
                const to = this.sub().length;
                for (let i = from; i < to; ++i)
                    gap += this.item_height_min(i);
                return gap;
            }
            sub_visible() {
                return [
                    ...this.gap_before() ? [this.Gap_before()] : [],
                    ...this.sub().slice(...this._view_window_last = this.view_window()),
                    ...this.gap_after() ? [this.Gap_after()] : [],
                ];
            }
            minimal_height() {
                let height = 0;
                const len = this.sub().length;
                for (let i = 0; i < len; ++i)
                    height += this.item_height_min(i);
                return height;
            }
            minimal_width() {
                let width = 0;
                const len = this.sub().length;
                for (let i = 0; i < len; ++i)
                    width = Math.max(width, this.item_width_min(i));
                return width;
            }
            force_render(path) {
                const kids = this.rows();
                const index = kids.findIndex(item => path.has(item));
                if (index >= 0) {
                    const win = this.view_window();
                    if (index < win[0] || index >= win[1]) {
                        this.view_window([this.render_visible_only() ? index : 0, index + 1]);
                    }
                    kids[index].force_render(path);
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "sub", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "view_window", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "gap_before", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "gap_after", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "sub_visible", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "minimal_height", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "minimal_width", null);
        $$.$mol_list = $mol_list;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/list/list.view.css", "[mol_list] {\n\twill-change: contents;\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex-shrink: 0;\n\tmax-width: 100%;\n\t/* display: flex;\n\talign-items: stretch;\n\talign-content: stretch; */\n\ttransition: none;\n\t/* will-change: contents; */\n}\n\n[mol_list]:where([mol_view_error]) {\n\tmin-height: 1.5rem;\n}\n\n[mol_list_gap_before] ,\n[mol_list_gap_after] {\n\tdisplay: block !important;\n\tflex: none;\n\ttransition: none;\n\toverflow-anchor: none;\n}\n");
})($ || ($ = {}));

;
	($.$mol_speck) = class $mol_speck extends ($.$mol_view) {
		value(){
			return null;
		}
		theme(){
			return "$mol_theme_accent";
		}
		sub(){
			return [(this.value())];
		}
	};


;
"use strict";
var $;
(function ($) {
    /**
     * Z-index values for layers
     * https://page.hyoo.ru/#!=xthcpx_wqmiba
     */
    $.$mol_layer = $mol_style_prop('mol_layer', [
        'hover',
        'focus',
        'speck',
        'float',
        'popup',
    ]);
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/layer/layer.css", ":root {\n\t--mol_layer_hover: 1;\n\t--mol_layer_focus: 2;\n\t--mol_layer_speck: 3;\n\t--mol_layer_float: 4;\n\t--mol_layer_popup: 5;\n}\n");
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/speck/speck.view.css", "[mol_speck] {\n\tfont-size: .75rem;\n\tborder-radius: 1rem;\n\tmargin: -0.5rem -0.2rem;\n\talign-self: flex-start;\n\tmin-height: 1em;\n\tmin-width: .75rem;\n\tvertical-align: sub;\n\tpadding: 0 .2rem;\n\tposition: absolute;\n\tz-index: var(--mol_layer_speck);\n\ttext-align: center;\n\tline-height: .9;\n\tdisplay: inline-block;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\tuser-select: none;\n\tbox-shadow: 0 0 3px rgba(0,0,0,.5);\n}\n");
})($ || ($ = {}));

;
"use strict";


;
	($.$mol_button) = class $mol_button extends ($.$mol_view) {
		event_activate(next){
			if(next !== undefined) return next;
			return null;
		}
		activate(next){
			return (this.event_activate(next));
		}
		clicks(next){
			if(next !== undefined) return next;
			return null;
		}
		event_key_press(next){
			if(next !== undefined) return next;
			return null;
		}
		key_press(next){
			return (this.event_key_press(next));
		}
		disabled(){
			return false;
		}
		tab_index(){
			return 0;
		}
		hint(){
			return "";
		}
		hint_safe(){
			return (this.hint());
		}
		error(){
			return "";
		}
		enabled(){
			return true;
		}
		click(next){
			if(next !== undefined) return next;
			return null;
		}
		event_click(next){
			if(next !== undefined) return next;
			return null;
		}
		status(next){
			if(next !== undefined) return next;
			return [];
		}
		event(){
			return {
				...(super.event()), 
				"click": (next) => (this.activate(next)), 
				"dblclick": (next) => (this.clicks(next)), 
				"keydown": (next) => (this.key_press(next))
			};
		}
		attr(){
			return {
				...(super.attr()), 
				"disabled": (this.disabled()), 
				"role": "button", 
				"tabindex": (this.tab_index()), 
				"title": (this.hint_safe())
			};
		}
		sub(){
			return [(this.title())];
		}
		Speck(){
			const obj = new this.$.$mol_speck();
			(obj.value) = () => ((this.error()));
			return obj;
		}
	};
	($mol_mem(($.$mol_button.prototype), "event_activate"));
	($mol_mem(($.$mol_button.prototype), "clicks"));
	($mol_mem(($.$mol_button.prototype), "event_key_press"));
	($mol_mem(($.$mol_button.prototype), "click"));
	($mol_mem(($.$mol_button.prototype), "event_click"));
	($mol_mem(($.$mol_button.prototype), "status"));
	($mol_mem(($.$mol_button.prototype), "Speck"));


;
"use strict";
var $;
(function ($) {
    /**
    * Key names code for hotkey
    * @see [mol_hotkey](../../hotkey/hotkey.view.ts)
    */
    let $mol_keyboard_code;
    (function ($mol_keyboard_code) {
        $mol_keyboard_code[$mol_keyboard_code["backspace"] = 8] = "backspace";
        $mol_keyboard_code[$mol_keyboard_code["tab"] = 9] = "tab";
        $mol_keyboard_code[$mol_keyboard_code["enter"] = 13] = "enter";
        $mol_keyboard_code[$mol_keyboard_code["shift"] = 16] = "shift";
        $mol_keyboard_code[$mol_keyboard_code["ctrl"] = 17] = "ctrl";
        $mol_keyboard_code[$mol_keyboard_code["alt"] = 18] = "alt";
        $mol_keyboard_code[$mol_keyboard_code["pause"] = 19] = "pause";
        $mol_keyboard_code[$mol_keyboard_code["capsLock"] = 20] = "capsLock";
        $mol_keyboard_code[$mol_keyboard_code["escape"] = 27] = "escape";
        $mol_keyboard_code[$mol_keyboard_code["space"] = 32] = "space";
        $mol_keyboard_code[$mol_keyboard_code["pageUp"] = 33] = "pageUp";
        $mol_keyboard_code[$mol_keyboard_code["pageDown"] = 34] = "pageDown";
        $mol_keyboard_code[$mol_keyboard_code["end"] = 35] = "end";
        $mol_keyboard_code[$mol_keyboard_code["home"] = 36] = "home";
        $mol_keyboard_code[$mol_keyboard_code["left"] = 37] = "left";
        $mol_keyboard_code[$mol_keyboard_code["up"] = 38] = "up";
        $mol_keyboard_code[$mol_keyboard_code["right"] = 39] = "right";
        $mol_keyboard_code[$mol_keyboard_code["down"] = 40] = "down";
        $mol_keyboard_code[$mol_keyboard_code["insert"] = 45] = "insert";
        $mol_keyboard_code[$mol_keyboard_code["delete"] = 46] = "delete";
        $mol_keyboard_code[$mol_keyboard_code["key0"] = 48] = "key0";
        $mol_keyboard_code[$mol_keyboard_code["key1"] = 49] = "key1";
        $mol_keyboard_code[$mol_keyboard_code["key2"] = 50] = "key2";
        $mol_keyboard_code[$mol_keyboard_code["key3"] = 51] = "key3";
        $mol_keyboard_code[$mol_keyboard_code["key4"] = 52] = "key4";
        $mol_keyboard_code[$mol_keyboard_code["key5"] = 53] = "key5";
        $mol_keyboard_code[$mol_keyboard_code["key6"] = 54] = "key6";
        $mol_keyboard_code[$mol_keyboard_code["key7"] = 55] = "key7";
        $mol_keyboard_code[$mol_keyboard_code["key8"] = 56] = "key8";
        $mol_keyboard_code[$mol_keyboard_code["key9"] = 57] = "key9";
        $mol_keyboard_code[$mol_keyboard_code["A"] = 65] = "A";
        $mol_keyboard_code[$mol_keyboard_code["B"] = 66] = "B";
        $mol_keyboard_code[$mol_keyboard_code["C"] = 67] = "C";
        $mol_keyboard_code[$mol_keyboard_code["D"] = 68] = "D";
        $mol_keyboard_code[$mol_keyboard_code["E"] = 69] = "E";
        $mol_keyboard_code[$mol_keyboard_code["F"] = 70] = "F";
        $mol_keyboard_code[$mol_keyboard_code["G"] = 71] = "G";
        $mol_keyboard_code[$mol_keyboard_code["H"] = 72] = "H";
        $mol_keyboard_code[$mol_keyboard_code["I"] = 73] = "I";
        $mol_keyboard_code[$mol_keyboard_code["J"] = 74] = "J";
        $mol_keyboard_code[$mol_keyboard_code["K"] = 75] = "K";
        $mol_keyboard_code[$mol_keyboard_code["L"] = 76] = "L";
        $mol_keyboard_code[$mol_keyboard_code["M"] = 77] = "M";
        $mol_keyboard_code[$mol_keyboard_code["N"] = 78] = "N";
        $mol_keyboard_code[$mol_keyboard_code["O"] = 79] = "O";
        $mol_keyboard_code[$mol_keyboard_code["P"] = 80] = "P";
        $mol_keyboard_code[$mol_keyboard_code["Q"] = 81] = "Q";
        $mol_keyboard_code[$mol_keyboard_code["R"] = 82] = "R";
        $mol_keyboard_code[$mol_keyboard_code["S"] = 83] = "S";
        $mol_keyboard_code[$mol_keyboard_code["T"] = 84] = "T";
        $mol_keyboard_code[$mol_keyboard_code["U"] = 85] = "U";
        $mol_keyboard_code[$mol_keyboard_code["V"] = 86] = "V";
        $mol_keyboard_code[$mol_keyboard_code["W"] = 87] = "W";
        $mol_keyboard_code[$mol_keyboard_code["X"] = 88] = "X";
        $mol_keyboard_code[$mol_keyboard_code["Y"] = 89] = "Y";
        $mol_keyboard_code[$mol_keyboard_code["Z"] = 90] = "Z";
        $mol_keyboard_code[$mol_keyboard_code["metaLeft"] = 91] = "metaLeft";
        $mol_keyboard_code[$mol_keyboard_code["metaRight"] = 92] = "metaRight";
        $mol_keyboard_code[$mol_keyboard_code["select"] = 93] = "select";
        $mol_keyboard_code[$mol_keyboard_code["numpad0"] = 96] = "numpad0";
        $mol_keyboard_code[$mol_keyboard_code["numpad1"] = 97] = "numpad1";
        $mol_keyboard_code[$mol_keyboard_code["numpad2"] = 98] = "numpad2";
        $mol_keyboard_code[$mol_keyboard_code["numpad3"] = 99] = "numpad3";
        $mol_keyboard_code[$mol_keyboard_code["numpad4"] = 100] = "numpad4";
        $mol_keyboard_code[$mol_keyboard_code["numpad5"] = 101] = "numpad5";
        $mol_keyboard_code[$mol_keyboard_code["numpad6"] = 102] = "numpad6";
        $mol_keyboard_code[$mol_keyboard_code["numpad7"] = 103] = "numpad7";
        $mol_keyboard_code[$mol_keyboard_code["numpad8"] = 104] = "numpad8";
        $mol_keyboard_code[$mol_keyboard_code["numpad9"] = 105] = "numpad9";
        $mol_keyboard_code[$mol_keyboard_code["multiply"] = 106] = "multiply";
        $mol_keyboard_code[$mol_keyboard_code["add"] = 107] = "add";
        $mol_keyboard_code[$mol_keyboard_code["subtract"] = 109] = "subtract";
        $mol_keyboard_code[$mol_keyboard_code["decimal"] = 110] = "decimal";
        $mol_keyboard_code[$mol_keyboard_code["divide"] = 111] = "divide";
        $mol_keyboard_code[$mol_keyboard_code["F1"] = 112] = "F1";
        $mol_keyboard_code[$mol_keyboard_code["F2"] = 113] = "F2";
        $mol_keyboard_code[$mol_keyboard_code["F3"] = 114] = "F3";
        $mol_keyboard_code[$mol_keyboard_code["F4"] = 115] = "F4";
        $mol_keyboard_code[$mol_keyboard_code["F5"] = 116] = "F5";
        $mol_keyboard_code[$mol_keyboard_code["F6"] = 117] = "F6";
        $mol_keyboard_code[$mol_keyboard_code["F7"] = 118] = "F7";
        $mol_keyboard_code[$mol_keyboard_code["F8"] = 119] = "F8";
        $mol_keyboard_code[$mol_keyboard_code["F9"] = 120] = "F9";
        $mol_keyboard_code[$mol_keyboard_code["F10"] = 121] = "F10";
        $mol_keyboard_code[$mol_keyboard_code["F11"] = 122] = "F11";
        $mol_keyboard_code[$mol_keyboard_code["F12"] = 123] = "F12";
        $mol_keyboard_code[$mol_keyboard_code["numLock"] = 144] = "numLock";
        $mol_keyboard_code[$mol_keyboard_code["scrollLock"] = 145] = "scrollLock";
        $mol_keyboard_code[$mol_keyboard_code["semicolon"] = 186] = "semicolon";
        $mol_keyboard_code[$mol_keyboard_code["equals"] = 187] = "equals";
        $mol_keyboard_code[$mol_keyboard_code["comma"] = 188] = "comma";
        $mol_keyboard_code[$mol_keyboard_code["dash"] = 189] = "dash";
        $mol_keyboard_code[$mol_keyboard_code["period"] = 190] = "period";
        $mol_keyboard_code[$mol_keyboard_code["forwardSlash"] = 191] = "forwardSlash";
        $mol_keyboard_code[$mol_keyboard_code["graveAccent"] = 192] = "graveAccent";
        $mol_keyboard_code[$mol_keyboard_code["bracketOpen"] = 219] = "bracketOpen";
        $mol_keyboard_code[$mol_keyboard_code["slashBack"] = 220] = "slashBack";
        $mol_keyboard_code[$mol_keyboard_code["slashBackLeft"] = 226] = "slashBackLeft";
        $mol_keyboard_code[$mol_keyboard_code["bracketClose"] = 221] = "bracketClose";
        $mol_keyboard_code[$mol_keyboard_code["quoteSingle"] = 222] = "quoteSingle";
    })($mol_keyboard_code = $.$mol_keyboard_code || ($.$mol_keyboard_code = {}));
})($ || ($ = {}));

;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        /**
         * Simple button.
         * @see https://mol.hyoo.ru/#!section=demos/demo=mol_button_demo
         */
        class $mol_button extends $.$mol_button {
            disabled() {
                return !this.enabled();
            }
            event_activate(next) {
                if (!next)
                    return;
                if (!this.enabled())
                    return;
                try {
                    this.event_click(next);
                    this.click(next);
                    this.status([null]);
                }
                catch (error) {
                    // Calling actions from catch section, if throwing promise breaks idempotency
                    Promise.resolve().then(() => this.status([error]));
                    $mol_fail_hidden(error);
                }
            }
            event_key_press(event) {
                if (event.keyCode === $mol_keyboard_code.enter) {
                    return this.activate(event);
                }
            }
            tab_index() {
                return this.enabled() ? super.tab_index() : -1;
            }
            error() {
                const error = this.status()?.[0];
                if (!error)
                    return '';
                if ($mol_promise_like(error)) {
                    return $mol_fail_hidden(error);
                }
                return this.$.$mol_error_message(error);
            }
            hint_safe() {
                try {
                    return this.hint();
                }
                catch (error) {
                    $mol_fail_log(error);
                    return '';
                }
            }
            sub_visible() {
                return [
                    ...this.error() ? [this.Speck()] : [],
                    ...this.sub(),
                ];
            }
        }
        $$.$mol_button = $mol_button;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/button.view.css", "[mol_button] {\n\tborder: none;\n\tfont: inherit;\n\tdisplay: inline-flex;\n\tflex-shrink: 0;\n\ttext-decoration: inherit;\n\tcursor: inherit;\n\tposition: relative;\n\tbox-sizing: border-box;\n\tword-break: normal;\n\tcursor: default;\n\tuser-select: none;\n\t-webkit-user-select: none;\n\tborder-radius: var(--mol_gap_round);\n\tbackground: transparent;\n\tcolor: inherit;\n}\n\n[mol_button]:where(:not(:disabled)):hover {\n\tz-index: var(--mol_layer_hover);\n}\n\n[mol_button]:focus {\n\toutline: none;\n\tz-index: var(--mol_layer_focus);\n}\n");
})($ || ($ = {}));

;
	($.$mol_button_typed) = class $mol_button_typed extends ($.$mol_button) {
		minimal_height(){
			return 40;
		}
		minimal_width(){
			return 40;
		}
	};


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/typed/typed.view.css", "[mol_button_typed] {\n\talign-content: center;\n\talign-items: center;\n\tpadding: var(--mol_gap_text);\n\tborder-radius: var(--mol_gap_round);\n\tgap: var(--mol_gap_space);\n\tuser-select: none;\n\tcursor: pointer;\n\tmin-width: 2.5rem;\n\tmin-height: 2.5rem;\n}\n\n[mol_button_typed][disabled] {\n\tpointer-events: none;\n}\n\n[mol_button_typed]:hover ,\n[mol_button_typed]:focus-visible {\n\tbox-shadow: inset 0 0 0 100vmax var(--mol_theme_hover);\n}\n\n[mol_button_typed]:active {\n\tcolor: var(--mol_theme_focus);\n}\n");
})($ || ($ = {}));

;
"use strict";


;
	($.$mol_button_minor) = class $mol_button_minor extends ($.$mol_button_typed) {};


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/minor/minor.view.css", "[mol_button_minor]:where(:not([disabled])) {\n\tcolor: var(--mol_theme_control);\n}\n");
})($ || ($ = {}));

;
"use strict";


;
	($.$mol_check) = class $mol_check extends ($.$mol_button_minor) {
		checked(next){
			if(next !== undefined) return next;
			return false;
		}
		aria_checked(){
			return "false";
		}
		aria_role(){
			return "checkbox";
		}
		Icon(){
			return null;
		}
		title(){
			return "";
		}
		Title(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.title())]);
			return obj;
		}
		label(){
			return [(this.Title())];
		}
		attr(){
			return {
				...(super.attr()), 
				"mol_check_checked": (this.checked()), 
				"aria-checked": (this.aria_checked()), 
				"role": (this.aria_role())
			};
		}
		sub(){
			return [(this.Icon()), (this.label())];
		}
	};
	($mol_mem(($.$mol_check.prototype), "checked"));
	($mol_mem(($.$mol_check.prototype), "Title"));


;
"use strict";
var $;
(function ($) {
    /**
     * Decorates method to fiber to ensure it is executed only once inside other fiber from [mol_wire](../wire/README.md)
     * @see https://mol.hyoo.ru/#!section=docs/=1fcpsq_1wh0h2
     */
    $.$mol_action = $mol_wire_method;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_dom_event extends $mol_object {
        native;
        constructor(native) {
            super();
            this.native = native;
        }
        prevented(next) {
            if (next)
                this.native.preventDefault();
            return this.native.defaultPrevented;
        }
        static wrap(event) {
            return new this.$.$mol_dom_event(event);
        }
    }
    __decorate([
        $mol_action
    ], $mol_dom_event.prototype, "prevented", null);
    __decorate([
        $mol_action
    ], $mol_dom_event, "wrap", null);
    $.$mol_dom_event = $mol_dom_event;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/check.css", "[mol_check] {\n\tflex: 0 0 auto;\n\tjustify-content: flex-start;\n\talign-content: center;\n\t/* align-items: flex-start; */\n\tborder: none;\n\tfont-weight: inherit;\n\tbox-shadow: none;\n\ttext-align: start;\n\tdisplay: inline-flex;\n\tflex-wrap: nowrap;\n}\n\n[mol_check_title] {\n\tflex-shrink: 1;\n}\n");
})($ || ($ = {}));

;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        /**
         * Checkbox UI component. See Variants for more concrete implementations.
         * @see https://mol.hyoo.ru/#!section=demos/demo=mol_check_box_demo
         */
        class $mol_check extends $.$mol_check {
            click(next) {
                const event = next ? $mol_dom_event.wrap(next) : null;
                if (event?.prevented())
                    return;
                event?.prevented(true);
                this.checked(!this.checked());
            }
            sub() {
                return [
                    ...$mol_maybe(this.Icon()),
                    ...this.label(),
                ];
            }
            label() {
                return this.title() ? super.label() : [];
            }
            aria_checked() {
                return String(this.checked());
            }
        }
        $$.$mol_check = $mol_check;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_check_list) = class $mol_check_list extends ($.$mol_view) {
		option_checked(id, next){
			if(next !== undefined) return next;
			return false;
		}
		option_title(id){
			return "";
		}
		option_label(id){
			return [(this.option_title(id))];
		}
		enabled(){
			return true;
		}
		option_enabled(id){
			return (this.enabled());
		}
		option_hint(id){
			return "";
		}
		items(){
			return [];
		}
		dictionary(){
			return {};
		}
		Option(id){
			const obj = new this.$.$mol_check();
			(obj.checked) = (next) => ((this.option_checked(id, next)));
			(obj.label) = () => ((this.option_label(id)));
			(obj.enabled) = () => ((this.option_enabled(id)));
			(obj.hint) = () => ((this.option_hint(id)));
			(obj.minimal_height) = () => (24);
			return obj;
		}
		options(){
			return {};
		}
		keys(){
			return [];
		}
		sub(){
			return (this.items());
		}
	};
	($mol_mem_key(($.$mol_check_list.prototype), "option_checked"));
	($mol_mem_key(($.$mol_check_list.prototype), "Option"));


;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        /**
         * List of checkboxes
         * @see https://mol.hyoo.ru/#!section=demos/demo=mol_check_list_demo
         */
        class $mol_check_list extends $.$mol_check_list {
            options() {
                return {};
            }
            dictionary(next) {
                return next ?? {};
            }
            option_checked(id, next) {
                const prev = this.dictionary();
                if (next === undefined)
                    return prev[id] ?? null;
                const next_rec = { ...prev, [id]: next };
                if (next === null)
                    delete next_rec[id];
                return this.dictionary(next_rec)[id] ?? null;
            }
            keys() {
                return Object.keys(this.options());
            }
            items() {
                return this.keys().map(key => this.Option(key));
            }
            option_title(key) {
                return this.options()[key] || key;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_check_list.prototype, "keys", null);
        __decorate([
            $mol_mem
        ], $mol_check_list.prototype, "items", null);
        $$.$mol_check_list = $mol_check_list;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/list/list.view.css", "[mol_check_list] {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tflex: 1 1 auto;\n\tborder-radius: var(--mol_gap_round);\n\tgap: 1px;\n}\n\n[mol_check_list_option] {\n\tflex: 0 1 auto;\n}\n\n[mol_check_list_option]:where([mol_check_checked=\"true\"]) {\n\ttext-shadow: 0 0;\n\tcolor: var(--mol_theme_current);\n}\n\n[mol_check_list_option]:where([mol_check_checked=\"true\"][disabled]) {\n\tcolor: var(--mol_theme_text);\n}\n");
})($ || ($ = {}));

;
	($.$mol_switch) = class $mol_switch extends ($.$mol_check_list) {
		value(next){
			if(next !== undefined) return next;
			return "";
		}
	};
	($mol_mem(($.$mol_switch.prototype), "value"));


;
"use strict";
var $;
(function ($) {
    class $mol_state_session extends $mol_object {
        static 'native()';
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $mol_dom_context.sessionStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return this['native()'] = native;
            }
            catch (error) {
                console.warn(error);
            }
            return this['native()'] = {
                getItem(key) {
                    return this[':' + key];
                },
                setItem(key, value) {
                    this[':' + key] = value;
                },
                removeItem(key) {
                    this[':' + key] = void 0;
                }
            };
        }
        static value(key, next) {
            if (next === void 0)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null)
                this.native().removeItem(key);
            else
                this.native().setItem(key, JSON.stringify(next));
            return next;
        }
        prefix() { return ''; }
        value(key, next) {
            return $mol_state_session.value(this.prefix() + '.' + key, next);
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_state_session, "value", null);
    $.$mol_state_session = $mol_state_session;
})($ || ($ = {}));

;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        /**
         * Buttons which switching the state
         * @see https://mol.hyoo.ru/#!section=demos/demo=mol_switch_demo
         */
        class $mol_switch extends $.$mol_switch {
            value(next) {
                return $mol_state_session.value(`${this}.value()`, next) ?? '';
            }
            option_checked(key, next) {
                if (next === undefined)
                    return this.value() == key;
                this.value(next ? key : '');
                return next;
            }
        }
        $$.$mol_switch = $mol_switch;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_deck) = class $mol_deck extends ($.$mol_list) {
		current(next){
			if(next !== undefined) return next;
			return "0";
		}
		switch_options(){
			return {};
		}
		Switch(){
			const obj = new this.$.$mol_switch();
			(obj.value) = (next) => ((this.current(next)));
			(obj.options) = () => ((this.switch_options()));
			return obj;
		}
		Content(){
			const obj = new this.$.$mol_view();
			return obj;
		}
		items(){
			return [];
		}
		rows(){
			return [(this.Switch()), (this.Content())];
		}
	};
	($mol_mem(($.$mol_deck.prototype), "current"));
	($mol_mem(($.$mol_deck.prototype), "Switch"));
	($mol_mem(($.$mol_deck.prototype), "Content"));


;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        /**
         * The component which arrange content in multiple tabs.
         * @seehttps://mol.hyoo.ru/#!section=demos/demo=mol_deck_demo
         */
        class $mol_deck extends $.$mol_deck {
            current(next) {
                return $mol_state_session.value(`${this}.current()`, next) || '0';
            }
            switch_options() {
                let options = {};
                this.items().forEach((item, index) => {
                    options[String(index)] = item.title();
                });
                return options;
            }
            Content() {
                return this.items()[Number(this.current())];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_deck.prototype, "Content", null);
        $$.$mol_deck = $mol_deck;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_link) = class $mol_link extends ($.$mol_view) {
		uri_toggle(){
			return "";
		}
		uri_unsafe(){
			return (this.uri_toggle());
		}
		hint(){
			return "";
		}
		hint_safe(){
			return (this.hint());
		}
		target(){
			return "_self";
		}
		file_name(){
			return "";
		}
		current(){
			return false;
		}
		relation(){
			return "";
		}
		event_click(next){
			if(next !== undefined) return next;
			return null;
		}
		click(next){
			return (this.event_click(next));
		}
		uri(){
			return "";
		}
		dom_name(){
			return "a";
		}
		uri_off(){
			return "";
		}
		uri_native(){
			return null;
		}
		external(){
			return false;
		}
		attr(){
			return {
				...(super.attr()), 
				"href": (this.uri_unsafe()), 
				"title": (this.hint_safe()), 
				"target": (this.target()), 
				"download": (this.file_name()), 
				"mol_link_current": (this.current()), 
				"rel": (this.relation())
			};
		}
		sub(){
			return [(this.title())];
		}
		arg(){
			return {};
		}
		event(){
			return {...(super.event()), "click": (next) => (this.click(next))};
		}
	};
	($mol_mem(($.$mol_link.prototype), "event_click"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    /** State of arguments like `foo=bar xxx` */
    class $mol_state_arg extends $mol_object {
        prefix;
        static prolog = '';
        static separator = ' ';
        static href(next) {
            return next || process.argv.slice(2).join(' ');
        }
        static href_normal() {
            return this.link({});
        }
        static dict(next) {
            if (next !== void 0)
                this.href(this.make_link(next));
            var href = this.href();
            var chunks = href.split(' ');
            var params = {};
            chunks.forEach(chunk => {
                if (!chunk)
                    return;
                var vals = chunk.split('=').map(decodeURIComponent);
                params[vals.shift()] = vals.join('=');
            });
            return params;
        }
        static value(key, next) {
            if (next === void 0)
                return this.dict()[key] ?? null;
            this.href(this.link({ [key]: next }));
            return next;
        }
        static link(next) {
            const params = {};
            var prev = this.dict();
            for (var key in prev) {
                params[key] = prev[key];
            }
            for (var key in next) {
                params[key] = next[key];
            }
            return this.make_link(params);
        }
        static make_link(next) {
            const chunks = [];
            for (const key in next) {
                if (next[key] !== null) {
                    chunks.push([key, next[key]].map(encodeURIComponent).join('='));
                }
            }
            return chunks.join(' ');
        }
        static go(next) {
            this.href(this.link(next));
        }
        static commit() { }
        constructor(prefix = '') {
            super();
            this.prefix = prefix;
        }
        value(key, next) {
            return this.constructor.value(this.prefix + key, next);
        }
        sub(postfix) {
            return new this.constructor(this.prefix + postfix + '.');
        }
        link(next) {
            const prefix = this.prefix;
            const dict = {};
            for (var key in next) {
                dict[prefix + key] = next[key];
            }
            return this.constructor.link(dict);
        }
    }
    __decorate([
        $mol_mem
    ], $mol_state_arg, "href", null);
    __decorate([
        $mol_mem
    ], $mol_state_arg, "href_normal", null);
    __decorate([
        $mol_mem
    ], $mol_state_arg, "dict", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_arg, "value", null);
    __decorate([
        $mol_action
    ], $mol_state_arg, "go", null);
    $.$mol_state_arg = $mol_state_arg;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_safe_uri(uri) {
        return uri.replace(/^(?=\w+script+:)/, 'about:blank#');
    }
    $.$mol_dom_safe_uri = $mol_dom_safe_uri;
    function $mol_dom_safe_attr(val) {
        return val;
    }
    $.$mol_dom_safe_attr = $mol_dom_safe_attr;
    $.$mol_dom_safe_rules = {
        // defaults
        '': { id: $mol_dom_safe_attr },
        // special
        a: { href: $mol_dom_safe_uri },
        img: { src: $mol_dom_safe_uri },
        object: { src: $mol_dom_safe_uri },
        // blocks
        div: {},
        p: {},
        h1: {},
        h2: {},
        h3: {},
        h4: {},
        h5: {},
        h6: {},
        blockquote: {},
        pre: {},
        ul: {},
        ol: {},
        li: {},
        details: {},
        summary: {},
        hr: {},
        table: {},
        tr: {},
        td: {},
        // inlines
        span: {},
        strong: {},
        em: {},
        br: {},
        ins: {},
        del: {},
        code: {},
    };
    function $mol_dom_safe(nodes) {
        const res = [];
        for (const node of nodes) {
            if (node.nodeType === node.TEXT_NODE) {
                res.push(node);
                continue;
            }
            if (node.nodeType === node.ELEMENT_NODE) {
                const kids = this.$mol_dom_safe([...node.childNodes]);
                const allowed = this.$mol_dom_safe_rules[node.localName];
                if (!allowed) {
                    res.push(...kids);
                    continue;
                }
                for (const attr of [...node.attributes]) {
                    const proc = allowed[attr.localName] ?? this.$mol_dom_safe_rules[''][attr.localName];
                    if (proc)
                        attr.nodeValue = proc(attr.nodeValue);
                    else
                        node.removeAttribute(attr.nodeName);
                }
                $mol_dom_render_children(node, kids);
                res.push(node);
                continue;
            }
        }
        return res;
    }
    $.$mol_dom_safe = $mol_dom_safe;
})($ || ($ = {}));

;
"use strict";

;
"use strict";

;
"use strict";

;
"use strict";

;
"use strict";
var $;
(function ($) {
    function $mol_style_sheet(Component, config0) {
        let rules = [];
        const block = $mol_dom_qname($mol_ambient({}).$mol_func_name(Component));
        const kebab = (name) => name.replace(/[A-Z]/g, letter => '-' + letter.toLowerCase());
        const make_class = (prefix, path, config) => {
            const props = [];
            const selector = (prefix, path) => {
                if (path.length === 0)
                    return prefix || `[${block}]`;
                let res = `[${block}_${path.join('_')}]`;
                if (prefix)
                    res = prefix + ' :where(' + res + ')';
                return res;
            };
            for (const key of Object.keys(config).reverse()) {
                if (/^(--)?[a-z]/.test(key)) {
                    const addProp = (keys, val) => {
                        if (Array.isArray(val)) {
                            if (val[0] && [Array, Object].includes(val[0].constructor)) {
                                val = val.map(v => {
                                    return Object.entries(v).map(([n, a]) => {
                                        if (a === true)
                                            return kebab(n);
                                        if (a === false)
                                            return null;
                                        return String(a);
                                    }).filter(Boolean).join(' ');
                                }).join(',');
                            }
                            else {
                                val = val.join(' ');
                            }
                            props.push(`\t${keys.join('-')}: ${val};\n`);
                        }
                        else if (val.constructor === Object) {
                            for (let suffix of Object.keys(val).reverse()) {
                                addProp([...keys, kebab(suffix)], val[suffix]);
                            }
                        }
                        else {
                            props.push(`\t${keys.join('-')}: ${val};\n`);
                        }
                    };
                    addProp([kebab(key)], config[key]);
                }
                else if (/^[A-Z]/.test(key)) {
                    make_class(prefix, [...path, key.toLowerCase()], config[key]);
                }
                else if (key[0] === '$') {
                    make_class(selector(prefix, path) + ' :where([' + $mol_dom_qname(key) + '])', [], config[key]);
                }
                else if (key === '>') {
                    const types = config[key];
                    for (let type of Object.keys(types).reverse()) {
                        make_class(selector(prefix, path) + ' > :where([' + $mol_dom_qname(type) + '])', [], types[type]);
                    }
                }
                else if (key === '@') {
                    const attrs = config[key];
                    for (let name of Object.keys(attrs).reverse()) {
                        for (let val in attrs[name]) {
                            make_class(selector(prefix, path) + ':where([' + name + '=' + JSON.stringify(val) + '])', [], attrs[name][val]);
                        }
                    }
                }
                else if (key === '@media' || key === '@container') {
                    const media = config[key];
                    for (let query of Object.keys(media).reverse()) {
                        rules.push('}\n');
                        make_class(prefix, path, media[query]);
                        rules.push(`${key} ${query} {\n`);
                    }
                }
                else if (key === '@starting-style') {
                    const styles = config[key];
                    rules.push('}\n');
                    make_class(prefix, path, styles);
                    rules.push(`${key} {\n`);
                }
                else if (key[0] === '[' && key[key.length - 1] === ']') {
                    const attr = key.slice(1, -1);
                    const vals = config[key];
                    for (let val of Object.keys(vals).reverse()) {
                        make_class(selector(prefix, path) + ':where([' + attr + '=' + JSON.stringify(val) + '])', [], vals[val]);
                    }
                }
                else {
                    make_class(selector(prefix, path) + key, [], config[key]);
                }
            }
            if (props.length) {
                rules.push(`${selector(prefix, path)} {\n${props.reverse().join('')}}\n`);
            }
        };
        make_class('', [], config0);
        return rules.reverse().join('');
    }
    $.$mol_style_sheet = $mol_style_sheet;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    /**
     * CSS in TS.
     * Statically typed CSS style sheets. Following samples show which CSS code are generated from TS code.
     * @see https://mol.hyoo.ru/#!section=docs/=xwq9q5_f966fg
     */
    function $mol_style_define(Component, config) {
        return $mol_style_attach(Component.name, $mol_style_sheet(Component, config));
    }
    $.$mol_style_define = $mol_style_define;
})($ || ($ = {}));

;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        /**
         * Dynamic hyperlink. It can add, change or remove parameters. A link that leads to the current page has [mol_link_current] attribute set to true.
         * @see https://mol.hyoo.ru/#!section=demos/demo=mol_link_demo
         */
        class $mol_link extends $.$mol_link {
            uri_toggle() {
                return this.current() ? this.uri_off() : this.uri();
            }
            uri() {
                return new this.$.$mol_state_arg(this.state_key()).link(this.arg());
            }
            uri_off() {
                const arg2 = {};
                for (let i in this.arg())
                    arg2[i] = null;
                return new this.$.$mol_state_arg(this.state_key()).link(arg2);
            }
            uri_native() {
                const base = this.$.$mol_state_arg.href();
                return new URL(this.uri(), base);
            }
            current() {
                const base = this.$.$mol_state_arg.href_normal();
                const target = this.uri_native().toString();
                if (base === target)
                    return true;
                const args = this.arg();
                const keys = Object.keys(args).filter(key => args[key] != null);
                if (keys.length === 0)
                    return false;
                for (const key of keys) {
                    if (this.$.$mol_state_arg.value(key) != args[key])
                        return false;
                }
                return true;
            }
            file_name() {
                return null;
            }
            minimal_height() {
                return Math.max(super.minimal_height(), 24);
            }
            external() {
                return this.uri_native().origin !== $mol_dom_context.location.origin;
            }
            target() {
                return this.external() ? '_blank' : '_self';
            }
            hint_safe() {
                try {
                    return this.hint();
                }
                catch (error) {
                    $mol_fail_log(error);
                    if (error instanceof Error)
                        return '💥' + error.message;
                    return '';
                }
            }
            uri_unsafe() {
                return $mol_dom_safe_uri(super.uri_unsafe());
            }
        }
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri_toggle", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri_off", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri_native", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "current", null);
        $$.$mol_link = $mol_link;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const { rem } = $mol_style_unit;
    $mol_style_define($mol_link, {
        textDecoration: 'none',
        color: $mol_theme.control,
        stroke: 'currentcolor',
        cursor: 'pointer',
        padding: $mol_gap.text,
        boxSizing: 'border-box',
        position: 'relative',
        minWidth: rem(2.5),
        minHeight: rem(2.5),
        gap: $mol_gap.space,
        border: {
            radius: $mol_gap.round,
        },
        ':hover': {
            background: {
                color: $mol_theme.hover,
            },
        },
        ':focus': {
            outline: 'none',
        },
        ':focus-visible': {
            outline: 'none',
            background: {
                color: $mol_theme.hover,
            }
        },
        ':active': {
            color: $mol_theme.focus,
        },
        '@': {
            mol_link_current: {
                'true': {
                    color: $mol_theme.current,
                    textShadow: '0 0',
                }
            }
        },
    });
})($ || ($ = {}));

;
	($.$mol_paragraph) = class $mol_paragraph extends ($.$mol_view) {
		line_height(){
			return 24;
		}
		letter_width(){
			return 7;
		}
		width_limit(){
			return +Infinity;
		}
		row_width(){
			return 0;
		}
		sub(){
			return [(this.title())];
		}
	};


;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_paragraph extends $.$mol_paragraph {
            maximal_width() {
                let width = 0;
                const letter = this.letter_width();
                for (const kid of this.sub()) {
                    if (!kid)
                        continue;
                    if (kid instanceof $mol_view) {
                        width += kid.maximal_width();
                    }
                    else if (typeof kid !== 'object') {
                        width += String(kid).length * letter;
                    }
                }
                return width;
            }
            width_limit() {
                return this.$.$mol_window.size().width;
            }
            minimal_width() {
                return this.letter_width();
            }
            row_width() {
                return Math.max(Math.min(this.width_limit(), this.maximal_width()), this.letter_width());
            }
            minimal_height() {
                return Math.max(1, Math.ceil(this.maximal_width() / this.row_width())) * this.line_height();
            }
        }
        __decorate([
            $mol_mem
        ], $mol_paragraph.prototype, "maximal_width", null);
        __decorate([
            $mol_mem
        ], $mol_paragraph.prototype, "row_width", null);
        __decorate([
            $mol_mem
        ], $mol_paragraph.prototype, "minimal_height", null);
        $$.$mol_paragraph = $mol_paragraph;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/paragraph/paragraph.view.css", ":where([mol_paragraph]) {\n\tmargin: 0;\n\tmax-width: 100%;\n}\n");
})($ || ($ = {}));

;
	($.$mol_stack) = class $mol_stack extends ($.$mol_view) {};


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/stack/stack.view.css", "[mol_stack] {\n\tdisplay: grid;\n\t/* width: max-content; */\n\t/* height: max-content; */\n\talign-items: flex-start;\n\tjustify-items: flex-start;\n}\n\n[mol_stack] > * {\n\tgrid-area: 1/1;\n}\n");
})($ || ($ = {}));

;
"use strict";


;
	($.$mol_dimmer) = class $mol_dimmer extends ($.$mol_paragraph) {
		parts(){
			return [];
		}
		string(id){
			return "";
		}
		haystack(){
			return "";
		}
		needle(){
			return "";
		}
		sub(){
			return (this.parts());
		}
		Low(id){
			const obj = new this.$.$mol_paragraph();
			(obj.sub) = () => ([(this.string(id))]);
			return obj;
		}
		High(id){
			const obj = new this.$.$mol_paragraph();
			(obj.sub) = () => ([(this.string(id))]);
			return obj;
		}
	};
	($mol_mem_key(($.$mol_dimmer.prototype), "Low"));
	($mol_mem_key(($.$mol_dimmer.prototype), "High"));


;
"use strict";

;
"use strict";

;
"use strict";

;
"use strict";

;
"use strict";
var $;
(function ($) {
    let x = /x/[Symbol.matchAll];
    /** Type safe reguar expression builder */
    class $mol_regexp extends RegExp {
        groups;
        /** Prefer to use $mol_regexp.from */
        constructor(source, flags = 'gsu', groups = []) {
            super(source, flags);
            this.groups = groups;
        }
        *[Symbol.matchAll](str) {
            const index = this.lastIndex;
            this.lastIndex = 0;
            try {
                while (this.lastIndex < str.length) {
                    const found = this.exec(str);
                    if (!found)
                        break;
                    yield found;
                }
            }
            finally {
                this.lastIndex = index;
            }
        }
        /** Parses input and returns found capture groups or null */
        [Symbol.match](str) {
            const res = [...this[Symbol.matchAll](str)].filter(r => r.groups).map(r => r[0]);
            if (!res.length)
                return null;
            return res;
        }
        /** Splits string by regexp edges */
        [Symbol.split](str) {
            const res = [];
            let token_last = null;
            for (let token of this[Symbol.matchAll](str)) {
                if (token.groups && (token_last ? token_last.groups : true))
                    res.push('');
                res.push(token[0]);
                token_last = token;
            }
            if (!res.length)
                res.push('');
            return res;
        }
        test(str) {
            return Boolean(str.match(this));
        }
        exec(str) {
            const from = this.lastIndex;
            if (from >= str.length)
                return null;
            const res = super.exec(str);
            if (res === null) {
                this.lastIndex = str.length;
                if (!str)
                    return null;
                return Object.assign([str.slice(from)], {
                    index: from,
                    input: str,
                });
            }
            if (from === this.lastIndex) {
                $mol_fail(new Error('Captured empty substring'));
            }
            const groups = {};
            const skipped = str.slice(from, this.lastIndex - res[0].length);
            if (skipped) {
                this.lastIndex = this.lastIndex - res[0].length;
                return Object.assign([skipped], {
                    index: from,
                    input: res.input,
                });
            }
            for (let i = 0; i < this.groups.length; ++i) {
                const group = this.groups[i];
                groups[group] = groups[group] || res[i + 1] || '';
            }
            return Object.assign(res, { groups });
        }
        generate(params) {
            return null;
        }
        get native() {
            return new RegExp(this.source, this.flags);
        }
        /** Makes regexp that greedy repeats this pattern with delimiter */
        static separated(chunk, sep) {
            return $mol_regexp.from([
                $mol_regexp.repeat_greedy([[chunk], sep], 0),
                chunk,
            ]);
        }
        /** Makes regexp that non-greedy repeats this pattern from min to max count */
        static repeat(source, min = 0, max = Number.POSITIVE_INFINITY) {
            const regexp = $mol_regexp.from(source);
            const upper = Number.isFinite(max) ? max : '';
            const str = `(?:${regexp.source}){${min},${upper}}?`;
            const regexp2 = new $mol_regexp(str, regexp.flags, regexp.groups);
            regexp2.generate = params => {
                const res = regexp.generate(params);
                if (res)
                    return res;
                if (min > 0)
                    return res;
                return '';
            };
            return regexp2;
        }
        /** Makes regexp that greedy repeats this pattern from min to max count */
        static repeat_greedy(source, min = 0, max = Number.POSITIVE_INFINITY) {
            const regexp = $mol_regexp.from(source);
            const upper = Number.isFinite(max) ? max : '';
            const str = `(?:${regexp.source}){${min},${upper}}`;
            const regexp2 = new $mol_regexp(str, regexp.flags, regexp.groups);
            regexp2.generate = params => {
                const res = regexp.generate(params);
                if (res)
                    return res;
                if (min > 0)
                    return res;
                return '';
            };
            return regexp2;
        }
        /** Makes regexp that match any of options */
        static vary(sources, flags = 'gsu') {
            const groups = [];
            const chunks = sources.map(source => {
                const regexp = $mol_regexp.from(source);
                groups.push(...regexp.groups);
                return regexp.source;
            });
            return new $mol_regexp(`(?:${chunks.join('|')})`, flags, groups);
        }
        /** Makes regexp that allow absent of this pattern */
        static optional(source) {
            return $mol_regexp.repeat_greedy(source, 0, 1);
        }
        /** Makes regexp that look ahead for pattern */
        static force_after(source) {
            const regexp = $mol_regexp.from(source);
            return new $mol_regexp(`(?=${regexp.source})`, regexp.flags, regexp.groups);
        }
        /** Makes regexp that look ahead for pattern */
        static forbid_after(source) {
            const regexp = $mol_regexp.from(source);
            return new $mol_regexp(`(?!${regexp.source})`, regexp.flags, regexp.groups);
        }
        /** Converts some js values to regexp */
        static from(source, { ignoreCase, multiline } = {
            ignoreCase: false,
            multiline: false,
        }) {
            let flags = 'gsu';
            if (multiline)
                flags += 'm';
            if (ignoreCase)
                flags += 'i';
            if (typeof source === 'number') {
                const src = `\\u{${source.toString(16)}}`;
                const regexp = new $mol_regexp(src, flags);
                regexp.generate = () => src;
                return regexp;
            }
            if (typeof source === 'string') {
                const src = source.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                const regexp = new $mol_regexp(src, flags);
                regexp.generate = () => source;
                return regexp;
            }
            else if (source instanceof $mol_regexp) {
                const regexp = new $mol_regexp(source.source, flags, source.groups);
                regexp.generate = params => source.generate(params);
                return regexp;
            }
            if (source instanceof RegExp) {
                const test = new RegExp('|' + source.source);
                const groups = Array.from({ length: test.exec('').length - 1 }, (_, i) => String(i + 1));
                const regexp = new $mol_regexp(source.source, source.flags, groups);
                regexp.generate = () => '';
                return regexp;
            }
            if (Array.isArray(source)) {
                const patterns = source.map(src => Array.isArray(src)
                    ? $mol_regexp.optional(src)
                    : $mol_regexp.from(src));
                const chunks = patterns.map(pattern => pattern.source);
                const groups = [];
                let index = 0;
                for (const pattern of patterns) {
                    for (let group of pattern.groups) {
                        if (Number(group) >= 0) {
                            groups.push(String(index++));
                        }
                        else {
                            groups.push(group);
                        }
                    }
                }
                const regexp = new $mol_regexp(chunks.join(''), flags, groups);
                regexp.generate = params => {
                    let res = '';
                    for (const pattern of patterns) {
                        let sub = pattern.generate(params);
                        if (sub === null)
                            return '';
                        res += sub;
                    }
                    return res;
                };
                return regexp;
            }
            else {
                const groups = [];
                const chunks = Object.keys(source).map(name => {
                    groups.push(name);
                    const regexp = $mol_regexp.from(source[name]);
                    groups.push(...regexp.groups);
                    return `(${regexp.source})`;
                });
                const regexp = new $mol_regexp(`(?:${chunks.join('|')})`, flags, groups);
                const validator = new RegExp('^' + regexp.source + '$', flags);
                regexp.generate = (params) => {
                    for (let option in source) {
                        if (option in params) {
                            if (typeof params[option] === 'boolean') {
                                if (!params[option])
                                    continue;
                            }
                            else {
                                const str = String(params[option]);
                                if (str.match(validator))
                                    return str;
                                $mol_fail(new Error(`Wrong param: ${option}=${str}`));
                            }
                        }
                        else {
                            if (typeof source[option] !== 'object')
                                continue;
                        }
                        const res = $mol_regexp.from(source[option]).generate(params);
                        if (res)
                            return res;
                    }
                    return null;
                };
                return regexp;
            }
        }
        /** Makes regexp which includes only unicode category */
        static unicode_only(...category) {
            return new $mol_regexp(`\\p{${category.join('=')}}`);
        }
        /** Makes regexp which excludes unicode category */
        static unicode_except(...category) {
            return new $mol_regexp(`\\P{${category.join('=')}}`);
        }
        static char_range(from, to) {
            return new $mol_regexp(`${$mol_regexp.from(from).source}-${$mol_regexp.from(to).source}`);
        }
        static char_only(...allowed) {
            const regexp = allowed.map(f => $mol_regexp.from(f).source).join('');
            return new $mol_regexp(`[${regexp}]`);
        }
        static char_except(...forbidden) {
            const regexp = forbidden.map(f => $mol_regexp.from(f).source).join('');
            return new $mol_regexp(`[^${regexp}]`);
        }
        static decimal_only = $mol_regexp.from(/\d/gsu);
        static decimal_except = $mol_regexp.from(/\D/gsu);
        static latin_only = $mol_regexp.from(/\w/gsu);
        static latin_except = $mol_regexp.from(/\W/gsu);
        static space_only = $mol_regexp.from(/\s/gsu);
        static space_except = $mol_regexp.from(/\S/gsu);
        static word_break_only = $mol_regexp.from(/\b/gsu);
        static word_break_except = $mol_regexp.from(/\B/gsu);
        static tab = $mol_regexp.from(/\t/gsu);
        static slash_back = $mol_regexp.from(/\\/gsu);
        static nul = $mol_regexp.from(/\0/gsu);
        static char_any = $mol_regexp.from(/./gsu);
        static begin = $mol_regexp.from(/^/gsu);
        static end = $mol_regexp.from(/$/gsu);
        static or = $mol_regexp.from(/|/gsu);
        static line_end = $mol_regexp.from({
            win_end: [['\r'], '\n'],
            mac_end: '\r',
        });
    }
    $.$mol_regexp = $mol_regexp;
})($ || ($ = {}));

;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        /**
         * Output text with dimmed mismatched substrings.
         * @see https://mol.hyoo.ru/#!section=demos/demo=mol_dimmer_demo
         */
        class $mol_dimmer extends $.$mol_dimmer {
            parts() {
                const needle = this.needle();
                if (needle.length < 2)
                    return [this.haystack()];
                let chunks = [];
                let strings = this.strings();
                for (let index = 0; index < strings.length; index++) {
                    if (strings[index] === '')
                        continue;
                    chunks.push((index % 2) ? this.High(index) : this.Low(index));
                }
                return chunks;
            }
            strings() {
                const options = this.needle().split(/\s+/g).filter(Boolean);
                if (!options.length)
                    return [this.haystack()];
                const variants = { ...options };
                const regexp = $mol_regexp.from({ needle: variants }, { ignoreCase: true });
                return this.haystack().split(regexp);
            }
            string(index) {
                return this.strings()[index];
            }
            *view_find(check, path = []) {
                if (check(this, this.haystack())) {
                    yield [...path, this];
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_dimmer.prototype, "strings", null);
        $$.$mol_dimmer = $mol_dimmer;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/dimmer/dimmer.view.css", "[mol_dimmer] {\n\tdisplay: block;\n\tmax-width: 100%;\n}\n\n[mol_dimmer_low] {\n\tdisplay: inline;\n\topacity: 0.8;\n}\n\n[mol_dimmer_high] {\n\tdisplay: inline;\n\tcolor: var(--mol_theme_focus);\n\ttext-shadow: 0 0;\n}\n");
})($ || ($ = {}));

;
	($.$mol_text_code_token) = class $mol_text_code_token extends ($.$mol_dimmer) {
		type(){
			return "";
		}
		attr(){
			return {...(super.attr()), "mol_text_code_token_type": (this.type())};
		}
	};
	($.$mol_text_code_token_link) = class $mol_text_code_token_link extends ($.$mol_text_code_token) {
		uri(){
			return "";
		}
		dom_name(){
			return "a";
		}
		type(){
			return "code-link";
		}
		attr(){
			return {
				...(super.attr()), 
				"href": (this.uri()), 
				"target": "_blank"
			};
		}
	};


;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { hsla } = $mol_style_func;
        $mol_style_define($mol_text_code_token, {
            display: 'inline',
            textDecoration: 'none',
            '@': {
                mol_text_code_token_type: {
                    'code-keyword': {
                        color: hsla(0, 70, 60, 1),
                    },
                    'code-field': {
                        color: hsla(300, 70, 50, 1),
                    },
                    'code-tag': {
                        color: hsla(330, 70, 50, 1),
                    },
                    'code-global': {
                        color: hsla(30, 80, 50, 1),
                    },
                    'code-decorator': {
                        color: hsla(180, 40, 50, 1),
                    },
                    'code-punctuation': {
                        color: hsla(0, 0, 50, 1),
                    },
                    'code-string': {
                        color: hsla(90, 40, 50, 1),
                    },
                    'code-number': {
                        color: hsla(55, 65, 45, 1),
                    },
                    'code-call': {
                        color: hsla(270, 60, 50, 1),
                    },
                    'code-link': {
                        color: hsla(210, 60, 50, 1),
                    },
                    'code-comment-inline': {
                        opacity: .5,
                    },
                    'code-comment-block': {
                        opacity: .5,
                    },
                    'code-docs': {
                        opacity: .75,
                    },
                },
            }
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_text_code_line) = class $mol_text_code_line extends ($.$mol_paragraph) {
		numb(){
			return 0;
		}
		token_type(id){
			return "";
		}
		token_text(id){
			return "";
		}
		highlight(){
			return "";
		}
		token_uri(id){
			return "";
		}
		text(){
			return "";
		}
		minimal_height(){
			return 24;
		}
		numb_showed(){
			return true;
		}
		syntax(){
			return null;
		}
		uri_resolve(id){
			return "";
		}
		Numb(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.numb())]);
			return obj;
		}
		Token(id){
			const obj = new this.$.$mol_text_code_token();
			(obj.type) = () => ((this.token_type(id)));
			(obj.haystack) = () => ((this.token_text(id)));
			(obj.needle) = () => ((this.highlight()));
			return obj;
		}
		Token_link(id){
			const obj = new this.$.$mol_text_code_token_link();
			(obj.haystack) = () => ((this.token_text(id)));
			(obj.needle) = () => ((this.highlight()));
			(obj.uri) = () => ((this.token_uri(id)));
			return obj;
		}
		find_pos(id){
			return null;
		}
	};
	($mol_mem(($.$mol_text_code_line.prototype), "Numb"));
	($mol_mem_key(($.$mol_text_code_line.prototype), "Token"));
	($mol_mem_key(($.$mol_text_code_line.prototype), "Token_link"));


;
"use strict";
var $;
(function ($) {
    /** Creates lexer by dictionary of lexems. Lexem that started first wins. Then lexem that declared earlier wins. Use regexp capture to take parts of token. */
    class $mol_syntax2 {
        lexems;
        constructor(lexems) {
            this.lexems = lexems;
            for (let name in lexems) {
                this.rules.push({
                    name: name,
                    regExp: lexems[name],
                    size: RegExp('^$|' + lexems[name].source).exec('').length - 1,
                });
            }
            const parts = '(' + this.rules.map(rule => rule.regExp.source).join(')|(') + ')';
            this.regexp = RegExp(`([\\s\\S]*?)(?:(${parts})|$(?![^]))`, 'gmu');
        }
        rules = [];
        regexp;
        tokenize(text, handle) {
            let end = 0;
            lexing: while (end < text.length) {
                const start = end;
                this.regexp.lastIndex = start;
                var found = this.regexp.exec(text);
                end = this.regexp.lastIndex;
                if (start === end)
                    throw new Error('Empty token');
                var prefix = found[1];
                if (prefix)
                    handle('', prefix, [prefix], start);
                var suffix = found[2];
                if (!suffix)
                    continue;
                let offset = 4;
                for (let rule of this.rules) {
                    if (found[offset - 1]) {
                        handle(rule.name, suffix, found.slice(offset, offset + rule.size), start + prefix.length);
                        continue lexing;
                    }
                    offset += rule.size + 1;
                }
                $mol_fail(new Error('$mol_syntax2 is broken'));
            }
        }
        parse(text, handlers) {
            this.tokenize(text, (name, ...args) => handlers[name](...args));
        }
    }
    $.$mol_syntax2 = $mol_syntax2;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_syntax2_md_flow = new $mol_syntax2({
        'quote': /^((?:(?:[>"] )(?:[^]*?)$(\r?\n?))+)([\n\r]*)/,
        'spoiler': /^((?:(?:[\?] )(?:[^]*?)$(\r?\n?))+)([\n\r]*)/,
        'header': /^([#=]+)(\s+)(.*?)$([\n\r]*)/,
        'list': /^((?:(?: ?([*+-])|(?:\d+[\.\)])+) +(?:[^]*?)$(?:\r?\n?)(?:  (?:[^]*?)$(?:\r?\n?))*)+)((?:\r?\n)*)/,
        'code': /^(```)([\w.-]*)[\r\n]+([^]*?)^(```)$([\n\r]*)/,
        'code-indent': /^((?:(?: |\t)(?:[^]*?)$\r?\n?)+)([\n\r]*)/,
        'table': /((?:^\|.+?$\r?\n?)+)([\n\r]*)/,
        'grid': /((?:^ *! .*?$\r?\n?)+)([\n\r]*)/,
        'cut': /^--+$((?:\r?\n)*)/,
        'block': /^(.*?)$((?:\r?\n)*)/,
    });
    $.$mol_syntax2_md_line = new $mol_syntax2({
        'strong': /\*\*(.+?)\*\*/,
        'emphasis': /\*(?!\s)(.+?)\*|\/\/(?!\s)(.+?)\/\//,
        'code': /```(.+?)```|;;(.+?);;|`(.+?)`/,
        'insert': /\+\+(.+?)\+\+/,
        'delete': /~~(.+?)~~|--(.+?)--/,
        // 'remark' : /(\()(.+?)(\))/ ,
        // 'quote' : /(")(.+?)(")/ ,
        'embed': /""(?:(.*?)\\)?(.*?)""/,
        'link': /\\\\(?:(.*?)\\)?(.*?)\\\\/,
        'image-link': /!\[([^\[\]]*?)\]\((.*?)\)/,
        'text-link': /\[(.*?(?:\[[^\[\]]*?\][^\[\]]*?)*)\]\((.*?)\)/,
        'text-link-http': /\b(https?:\/\/[^\s,.;:!?")]+(?:[,.;:!?")][^\s,.;:!?")]+)+)/,
    });
    $.$mol_syntax2_md_code = new $mol_syntax2({
        'code-indent': /\t+/,
        'code-docs': /\/\/\/.*?$/,
        'code-comment-block': /(?:\/\*[^]*?\*\/|\/\+[^]*?\+\/|<![^]*?>)/,
        'code-link': /(?:\w+:\/\/|#)\S+?(?=\s|\\\\|""|$)/,
        'code-comment-inline': /\/\/.*?(?:$|\/\/)|- \\(?!\\).*|(?<=^| )#!? .*/,
        'code-string': /(?:".*?"|'.*?'|`.*?`| ?\\\\.+?\\\\|\/.+?\/[dygimsu]*(?!\p{Letter})|[ \t]*\\[^\n]*)/u,
        'code-number': /[+-]?(?:\d*\.)?\d+(\uFE0F.|\w*)/,
        'code-call': /\.?\w+(?=\()/,
        'code-sexpr': /\((\w+ )/,
        'code-field': /(?:(?<=\.|::|->)[a-z][\w-]*|(?<=[, \t] |\t)[\w-]+\??:(?!\/\/|:))/,
        'code-keyword': /(?<=^|\t|[ )(}{=] )((throw|readonly|unknown|keyof|typeof|never|from|class|struct|interface|type|function|extends|implements|module|namespace|import|export|include|require|var|val|let|const|for|do|while|until|in|out|of|new|if|then|else|switch|case|return|async|await|yield|try|catch|break|continue|get|set|public|private|protected|void|int|float|ref)( |$|;))+/,
        'code-global': /[$]+\w*|\b[A-Z][a-z0-9]+[A-Z]\w*/,
        'code-word': /\w+/,
        'code-decorator': /(?<=^|  |\t)@\s*\S+/,
        'code-tag': /<\/?[\w-]+\/?>?|&\w+;/,
        'code-punctuation': /[\-\[\]\{\}\(\)<=>~!\?@#%&\*_\+\\\/\|;:\.,\^]+?/,
    });
})($ || ($ = {}));

;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_text_code_line extends $.$mol_text_code_line {
            maximal_width() {
                return this.text().length * this.letter_width();
            }
            syntax() {
                return this.$.$mol_syntax2_md_code;
            }
            tokens(path) {
                const tokens = [];
                const text = (path.length > 0)
                    // @FIXME: this logic compatible only with `string`
                    ? this.tokens(path.slice(0, path.length - 1))[path[path.length - 1]].found.slice(1, -1)
                    : this.text();
                this.syntax().tokenize(text, (name, found, chunks) => {
                    if (name === 'code-sexpr') {
                        tokens.push({ name: 'code-punctuation', found: '(', chunks: [] });
                        tokens.push({ name: 'code-call', found: chunks[0], chunks: [] });
                    }
                    else {
                        tokens.push({ name, found, chunks });
                    }
                });
                return tokens;
            }
            sub() {
                return [
                    ...this.numb_showed() ? [this.Numb()] : [],
                    ...this.row_content([])
                ];
            }
            row_content(path) {
                const content = this.tokens(path).map((t, i) => this.Token([...path, i]));
                return content.length ? content : ['\n'];
            }
            Token(path) {
                return this.token_type(path) === 'code-link' ? this.Token_link(path) : super.Token(path);
            }
            token_type(path) {
                return this.tokens([...path.slice(0, path.length - 1)])[path[path.length - 1]].name;
            }
            token_content(path) {
                const tokens = this.tokens([...path.slice(0, path.length - 1)]);
                const token = tokens[path[path.length - 1]];
                switch (token.name) {
                    case 'code-string': return [
                        token.found[0],
                        ...this.row_content(path),
                        token.found[token.found.length - 1],
                    ];
                    default: return [token.found];
                }
            }
            token_text(path) {
                const tokens = this.tokens([...path.slice(0, path.length - 1)]);
                const token = tokens[path[path.length - 1]];
                return token.found;
            }
            token_uri(path) {
                const uri = this.token_text(path);
                return this.uri_resolve(uri);
            }
            *view_find(check, path = []) {
                if (check(this, this.text())) {
                    yield [...path, this];
                }
            }
            find_pos(offset) {
                return this.find_token_pos([offset]);
            }
            find_token_pos([offset, ...path]) {
                for (const [index, token] of this.tokens(path).entries()) {
                    if (token.found.length >= offset) {
                        const token = this.Token([...path, index]);
                        return { token, offset };
                    }
                    else {
                        offset -= token.found.length;
                    }
                }
                return null;
            }
        }
        __decorate([
            $mol_mem_key
        ], $mol_text_code_line.prototype, "tokens", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_line.prototype, "row_content", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_line.prototype, "token_type", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_line.prototype, "token_content", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_line.prototype, "token_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_line.prototype, "token_uri", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_line.prototype, "find_pos", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_line.prototype, "find_token_pos", null);
        $$.$mol_text_code_line = $mol_text_code_line;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem } = $mol_style_unit;
        $mol_style_define($mol_text_code_line, {
            display: 'block',
            position: 'relative',
            font: {
                family: 'monospace',
            },
            Numb: {
                textAlign: 'end',
                color: $mol_theme.shade,
                width: rem(3),
                margin: {
                    inlineStart: '-4rem',
                },
                display: 'inline-block',
                whiteSpace: 'nowrap',
                userSelect: 'none',
                position: 'absolute',
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_blob = ($node.buffer?.Blob ?? $mol_dom_context.Blob);
})($ || ($ = {}));

;
	($.$mol_svg) = class $mol_svg extends ($.$mol_view) {
		dom_name(){
			return "svg";
		}
		dom_name_space(){
			return "http://www.w3.org/2000/svg";
		}
		font_size(){
			return 16;
		}
		font_family(){
			return "";
		}
		style_size(){
			return {};
		}
	};


;
"use strict";
var $;
(function ($) {
    /** State of time moment */
    class $mol_state_time extends $mol_object {
        static task(precision, reset) {
            if (precision) {
                return new $mol_after_timeout(precision, () => this.task(precision, null));
            }
            else {
                return new $mol_after_frame(() => this.task(precision, null));
            }
        }
        static now(precision) {
            this.task(precision);
            return Date.now();
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_state_time, "task", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_time, "now", null);
    $.$mol_state_time = $mol_state_time;
})($ || ($ = {}));

;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        /** Base SVG component to display SVG images or icons. */
        class $mol_svg extends $.$mol_svg {
            computed_style() {
                const win = this.$.$mol_dom_context;
                const style = win.getComputedStyle(this.dom_node());
                if (!style['font-size'])
                    $mol_state_time.now(0);
                return style;
            }
            font_size() {
                return parseInt(this.computed_style()['font-size']) || 16;
            }
            font_family() {
                return this.computed_style()['font-family'];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_svg.prototype, "computed_style", null);
        __decorate([
            $mol_mem
        ], $mol_svg.prototype, "font_size", null);
        __decorate([
            $mol_mem
        ], $mol_svg.prototype, "font_family", null);
        $$.$mol_svg = $mol_svg;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_svg_root) = class $mol_svg_root extends ($.$mol_svg) {
		view_box(){
			return "0 0 100 100";
		}
		aspect(){
			return "xMidYMid";
		}
		dom_name(){
			return "svg";
		}
		attr(){
			return {
				...(super.attr()), 
				"viewBox": (this.view_box()), 
				"preserveAspectRatio": (this.aspect())
			};
		}
	};


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/svg/root/root.view.css", "[mol_svg_root] {\n\toverflow: hidden;\n}\n");
})($ || ($ = {}));

;
"use strict";


;
	($.$mol_svg_path) = class $mol_svg_path extends ($.$mol_svg) {
		geometry(){
			return "";
		}
		dom_name(){
			return "path";
		}
		attr(){
			return {...(super.attr()), "d": (this.geometry())};
		}
	};


;
"use strict";


;
	($.$mol_icon) = class $mol_icon extends ($.$mol_svg_root) {
		path(){
			return "";
		}
		Path(){
			const obj = new this.$.$mol_svg_path();
			(obj.geometry) = () => ((this.path()));
			return obj;
		}
		view_box(){
			return "0 0 24 24";
		}
		minimal_width(){
			return 16;
		}
		minimal_height(){
			return 16;
		}
		sub(){
			return [(this.Path())];
		}
	};
	($mol_mem(($.$mol_icon.prototype), "Path"));


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/icon/icon.view.css", "[mol_icon] {\n\tfill: currentColor;\n\tstroke: none;\n\twidth: 1em;\n\theight: 1.5em;\n\tflex: 0 0 auto;\n\tvertical-align: top;\n\tdisplay: inline-block;\n\tfilter: drop-shadow(0px 1px 1px var(--mol_theme_back));\n\ttransform-origin: center;\n}\n\n[mol_icon_path] {\n\ttransform-origin: center;\n}\n");
})($ || ($ = {}));

;
"use strict";


;
	($.$mol_icon_clipboard) = class $mol_icon_clipboard extends ($.$mol_icon) {
		path(){
			return "M19,3H14.82C14.4,1.84 13.3,1 12,1C10.7,1 9.6,1.84 9.18,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M12,3A1,1 0 0,1 13,4A1,1 0 0,1 12,5A1,1 0 0,1 11,4A1,1 0 0,1 12,3";
		}
	};


;
"use strict";


;
	($.$mol_icon_clipboard_outline) = class $mol_icon_clipboard_outline extends ($.$mol_icon) {
		path(){
			return "M19,3H14.82C14.4,1.84 13.3,1 12,1C10.7,1 9.6,1.84 9.18,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M12,3A1,1 0 0,1 13,4A1,1 0 0,1 12,5A1,1 0 0,1 11,4A1,1 0 0,1 12,3M7,7H17V5H19V19H5V5H7V7Z";
		}
	};


;
"use strict";


;
	($.$mol_button_copy) = class $mol_button_copy extends ($.$mol_button_minor) {
		text(){
			return (this.title());
		}
		text_blob(next){
			if(next !== undefined) return next;
			const obj = new this.$.$mol_blob([(this.text())], {"type": "text/plain"});
			return obj;
		}
		html(){
			return "";
		}
		html_blob(next){
			if(next !== undefined) return next;
			const obj = new this.$.$mol_blob([(this.html())], {"type": "text/html"});
			return obj;
		}
		Icon(){
			const obj = new this.$.$mol_icon_clipboard_outline();
			return obj;
		}
		title(){
			return "";
		}
		blobs(){
			return [(this.text_blob()), (this.html_blob())];
		}
		data(){
			return {};
		}
		sub(){
			return [(this.Icon()), (this.title())];
		}
	};
	($mol_mem(($.$mol_button_copy.prototype), "text_blob"));
	($mol_mem(($.$mol_button_copy.prototype), "html_blob"));
	($mol_mem(($.$mol_button_copy.prototype), "Icon"));


;
"use strict";
var $;
(function ($) {
    const mapping = {
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        '&': '&amp;',
    };
    function $mol_html_encode(text) {
        return text.replace(/[&<">]/gi, str => mapping[str]);
    }
    $.$mol_html_encode = $mol_html_encode;
})($ || ($ = {}));

;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        /**
         * Button copy text() value to clipboard
         * @see https://mol.hyoo.ru/#!section=demos/demo=mol_button_demo
         */
        class $mol_button_copy extends $.$mol_button_copy {
            data() {
                return Object.fromEntries(this.blobs().map(blob => [blob.type, blob]));
            }
            html() {
                return $mol_html_encode(this.text());
            }
            attachments() {
                return [new ClipboardItem(this.data())];
            }
            click(event) {
                const cb = $mol_wire_sync(this.$.$mol_dom_context.navigator.clipboard);
                cb.writeText?.(this.text());
                cb.write?.(this.attachments());
                if (cb.writeText === undefined && cb.write === undefined) {
                    throw new Error("doesn't support copy to clipoard");
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_button_copy.prototype, "html", null);
        __decorate([
            $mol_mem
        ], $mol_button_copy.prototype, "attachments", null);
        $$.$mol_button_copy = $mol_button_copy;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_storage extends $mol_object2 {
        /** Is storage a long term. */
        static persisted(next) {
            return false;
        }
        /** Total storage quota in bytes. */
        static total() {
            return 0;
        }
        /** Total storage usage in bytes. */
        static used() {
            return 0;
        }
        /** Minimum available free space in bytes. */
        static free() {
            return this.total() - this.used();
        }
        /** Fulfillness of storage. */
        static portion() {
            const total = this.total();
            if (!total)
                return 1;
            return this.used() / total;
        }
        /**
         * Fulfillness logarithmic level.
         * `0` - empty
         * `1` - half free
         * `2` - quart free
         * `Infinity` - fulfilled
         */
        static level() {
            return Math.floor(-Math.log2(1 - this.portion()));
        }
    }
    $.$mol_storage = $mol_storage;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_storage_node extends $mol_storage {
        static persisted() {
            return true;
        }
        static stats() {
            $mol_state_time.now(1000);
            return $node.fs.statfsSync('.');
        }
        static total() {
            const { blocks, bsize } = this.stats();
            return blocks * bsize;
        }
        static used() {
            const { blocks, bfree, bsize } = this.stats();
            return (blocks - bfree) * bsize;
        }
        static free() {
            const { bfree, bsize } = this.stats();
            return bfree * bsize;
        }
        static portion() {
            const { blocks, bfree } = this.stats();
            if (!blocks)
                return 1;
            return (blocks - bfree) / blocks;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_storage_node, "stats", null);
    $.$mol_storage_node = $mol_storage_node;
    $.$mol_storage = $.$mol_storage_node;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_state_local extends $mol_object {
        static 'native()';
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $mol_dom_context.localStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return this['native()'] = native;
            }
            catch (error) {
                console.warn(error);
            }
            return this['native()'] = {
                getItem(key) {
                    return this[':' + key];
                },
                setItem(key, value) {
                    this[':' + key] = value;
                },
                removeItem(key) {
                    this[':' + key] = void 0;
                }
            };
        }
        static changes(next) { return next; }
        static value(key, next) {
            this.changes();
            if (next === void 0)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null) {
                this.native().removeItem(key);
            }
            else {
                this.native().setItem(key, JSON.stringify(next));
                this.$.$mol_storage.persisted(true);
            }
            return next;
        }
        prefix() { return ''; }
        value(key, next) {
            return $mol_state_local.value(this.prefix() + '.' + key, next);
        }
    }
    __decorate([
        $mol_mem
    ], $mol_state_local, "changes", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_local, "value", null);
    $.$mol_state_local = $mol_state_local;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_lock extends $mol_object {
        promise = null;
        async wait() {
            let next = () => { };
            let destructed = false;
            const task = $mol_wire_auto();
            if (!task)
                return next;
            const destructor = task.destructor.bind(task);
            task.destructor = () => {
                destructor();
                destructed = true;
                next();
            };
            let promise;
            do {
                promise = this.promise;
                await promise;
                if (destructed)
                    return next;
            } while (promise !== this.promise);
            this.promise = new Promise(done => { next = done; });
            return next;
        }
        grab() { return $mol_wire_sync(this).wait(); }
    }
    $.$mol_lock = $mol_lock;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_compare_array(a, b) {
        if (a === b)
            return true;
        if (Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
            return false;
        if (a.length !== b.length)
            return false;
        for (let i = 0; i < a.length; i++)
            if (a[i] !== b[i])
                return false;
        return true;
    }
    $.$mol_compare_array = $mol_compare_array;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    const decoders = {};
    function $mol_charset_decode(buffer, encoding = 'utf8') {
        let decoder = decoders[encoding];
        if (!decoder)
            decoder = decoders[encoding] = new TextDecoder(encoding);
        return decoder.decode(buffer);
    }
    $.$mol_charset_decode = $mol_charset_decode;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    let buf = new Uint8Array(2 ** 12); // 4KB Mem Page
    /** Temporary buffer. Recursive usage isn't supported. */
    function $mol_charset_buffer(size) {
        if (buf.byteLength < size)
            buf = new Uint8Array(size);
        return buf;
    }
    $.$mol_charset_buffer = $mol_charset_buffer;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_charset_encode(str) {
        const buf = $mol_charset_buffer(str.length * 3);
        return buf.slice(0, $mol_charset_encode_to(str, buf));
    }
    $.$mol_charset_encode = $mol_charset_encode;
    function $mol_charset_encode_to(str, buf, from = 0) {
        let pos = from;
        for (let i = 0; i < str.length; i++) {
            let code = str.charCodeAt(i);
            if (code < 0x80) { // ASCII - 1 octet
                buf[pos++] = code;
            }
            else if (code < 0x800) { // 2 octet
                buf[pos++] = 0xc0 | (code >> 6);
                buf[pos++] = 0x80 | (code & 0x3f);
            }
            else if (code < 0xd800 || code >= 0xe000) { // 3 octet
                buf[pos++] = 0xe0 | (code >> 12);
                buf[pos++] = 0x80 | ((code >> 6) & 0x3f);
                buf[pos++] = 0x80 | (code & 0x3f);
            }
            else { // surrogate pair
                const point = ((code - 0xd800) << 10) + str.charCodeAt(++i) + 0x2400;
                buf[pos++] = 0xf0 | (point >> 18);
                buf[pos++] = 0x80 | ((point >> 12) & 0x3f);
                buf[pos++] = 0x80 | ((point >> 6) & 0x3f);
                buf[pos++] = 0x80 | (point & 0x3f);
            }
        }
        return pos - from;
    }
    $.$mol_charset_encode_to = $mol_charset_encode_to;
    function $mol_charset_encode_size(str) {
        let size = 0;
        for (let i = 0; i < str.length; i++) {
            let code = str.charCodeAt(i);
            if (code < 0x80)
                size += 1;
            else if (code < 0x800)
                size += 2;
            else if (code < 0xd800 || code >= 0xe000)
                size += 3;
            else
                size += 4;
        }
        return size;
    }
    $.$mol_charset_encode_size = $mol_charset_encode_size;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_file_transaction extends $mol_object {
        path() { return ''; }
        modes() { return []; }
        write(options) {
            throw new Error('Not implemented');
        }
        read() {
            throw new Error('Not implemented');
        }
        truncate(size) {
            throw new Error('Not implemented');
        }
        flush() {
            throw new Error('Not implemented');
        }
        close() {
            throw new Error('Not implemented');
        }
        destructor() {
            this.close();
        }
    }
    $.$mol_file_transaction = $mol_file_transaction;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    let file_modes;
    (function (file_modes) {
        /** create if it doesn't already exist */
        file_modes[file_modes["create"] = $node.fs.constants.O_CREAT] = "create";
        /** truncate to zero size if it already exists */
        file_modes[file_modes["exists_truncate"] = $node.fs.constants.O_TRUNC] = "exists_truncate";
        /** throw exception if it already exists */
        file_modes[file_modes["exists_fail"] = $node.fs.constants.O_EXCL] = "exists_fail";
        file_modes[file_modes["read_only"] = $node.fs.constants.O_RDONLY] = "read_only";
        file_modes[file_modes["write_only"] = $node.fs.constants.O_WRONLY] = "write_only";
        file_modes[file_modes["read_write"] = $node.fs.constants.O_RDWR] = "read_write";
        /** data will be appended to the end */
        file_modes[file_modes["append"] = $node.fs.constants.O_APPEND] = "append";
    })(file_modes || (file_modes = {}));
    function mode_mask(modes) {
        return modes.reduce((res, mode) => res | file_modes[mode], 0);
    }
    class $mol_file_transaction_node extends $mol_file_transaction {
        descr() {
            $mol_wire_solid();
            return $node.fs.openSync(this.path(), mode_mask(this.modes()));
        }
        write({ buffer, offset = 0, length, position = null }) {
            if (Array.isArray(buffer)) {
                return $node.fs.writevSync(this.descr(), buffer, position ?? undefined);
            }
            if (typeof buffer === 'string') {
                return $node.fs.writeSync(this.descr(), buffer, position);
            }
            length = length ?? buffer.byteLength;
            return $node.fs.writeSync(this.descr(), buffer, offset, length, position);
        }
        truncate(size) {
            $node.fs.ftruncateSync(this.descr());
        }
        read() {
            return $mol_file_node_buffer_normalize($node.fs.readFileSync(this.descr()));
        }
        flush() {
            $node.fs.fsyncSync(this.descr());
        }
        close() {
            $node.fs.closeSync(this.descr());
        }
    }
    __decorate([
        $mol_mem
    ], $mol_file_transaction_node.prototype, "descr", null);
    $.$mol_file_transaction_node = $mol_file_transaction_node;
    $.$mol_file_transaction = $mol_file_transaction_node;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_file_base extends $mol_object {
        static absolute(path) {
            return this.make({
                path: $mol_const(path)
            });
        }
        static relative(path) {
            throw new Error('Not implemented yet');
        }
        static base = '';
        path() {
            return '.';
        }
        parent() {
            return this.resolve('..');
        }
        exists_cut() { return this.exists(); }
        root() {
            const path = this.path();
            const base = this.constructor.base;
            // Если путь выше или равен base или если parent такойже как и this - считаем это корнем
            return base.startsWith(path) || this == this.parent();
        }
        stat(next, virt) {
            const path = this.path();
            const parent = this.parent();
            // Отслеживать проверку наличия родительской папки не стоит до корня диска
            // Лучше ограничить mam-ом
            if (!this.root()) {
                /*
                Если parent папка удалилась, надо ресетнуть все объекты в ней на любой глубине.
                Например, rm -rf с последующим git pull: parent папка может удалиться, потом создасться,
                а текущая папка успеет только удалиться до момента выполнения stat.
                Поэтому parent.exists() не запустит перевычисления, нужна именно parent.version()

                Однако, parent.version() меняется не только при удалении, будет ложное срабатывание
                С этим придется мириться, красивого решения пока нет.
                */
                parent.version();
            }
            parent.watcher();
            if (virt)
                return next ?? null;
            return next ?? this.info(path);
        }
        static changed = new Set;
        static frame = null;
        static changed_add(type, path) {
            if (/([\/\\]\.|___$)/.test(path))
                return;
            const file = this.relative(path.at(-1) === '/' ? path.slice(0, -1) : path);
            // console.log(type, path)
            // add (change): добавился файл - у parent надо обновить список sub, если он был заюзан
            // change, unlink (rename): обновился или удалился файл - ресетим
            // addDir (change), добавилась папка, у parent обновляем список директорий в sub
            // дочерние ресетим
            // unlinkDir (rename), удалилась папка, ресетим ее
            // stat у всех дочерних обновится сам, т.к. связан с parent.version()
            this.changed.add(file);
            if (!this.watching)
                return;
            // throttle, пока события поступают не сбрасываем.
            // аналог awaitWriteFinish из chokidar
            // интервалы между change-сообщениями модифицируемого файла должны быть меньше watch_debounce
            this.frame?.destructor();
            this.frame = new this.$.$mol_after_timeout(this.watch_debounce(), () => {
                if (!this.watching)
                    return;
                this.watching = false;
                $mol_wire_async(this).flush();
            });
        }
        /**
         * Должно быть больше, чем время между событиями от вотчера при записи внешним процессом.
         * Иначе запуск ресетов паралельно с изменением может привести к неконсистентности.
         */
        static watch_debounce() { return 500; }
        static flush() {
            // Пока flush работает, вотчер сюда не заходит, но может добавлять новые изменения
            // на каждом перезапуске они применятся
            // Пока run выполняется, изменения накапливаются, в конце run вызывается flush
            // Пока применяются изменения, run должен ожидать конца flush
            for (const file of this.changed) {
                const parent = file.parent();
                try {
                    if ($mol_wire_probe(() => parent.sub()))
                        parent.sub(null);
                    file.reset();
                }
                catch (error) {
                    if ($mol_fail_catch(error))
                        $mol_fail_log(error);
                }
            }
            this.changed.clear();
            this.watching = true;
            // this.watch_wd?.destructor()
            // this.watch_wd = null
        }
        static watching = true;
        static lock = new $mol_lock;
        static watch_off(path) {
            this.watching = false;
            // run должен ожидать конца flush
            this.flush();
            this.watching = false;
            /*
            watch запаздывает и событие может прилететь через 3 сек после окончания сайд эффекта
            поэтому добавляем папку, которую меняет side_effect
            Когда дойдет до выполнения flush, он ресетнет ее
            
            Иначе будут лишние срабатывания
            Например, удалили hyoo/board, watch ресетит и exists начинает отдавать false, срабатывает git clone
            Сразу после него событие addDir еще не успело прийти,
            на следующем перезапуске вызывается git pull, т.к.
            с точки зрения реактивной системы hyoo/board еще не существует.
            */
            this.changed.add(this.absolute(path));
        }
        // protected static watch_wd = null as null | $mol_after_timeout
        static unwatched(side_effect, affected_dir) {
            // ждем, пока выполнится предыдущий unwatched
            const unlock = this.lock.grab();
            this.watch_off(affected_dir);
            try {
                const result = side_effect();
                this.flush();
                unlock();
                return result;
            }
            catch (e) {
                if (!$mol_promise_like(e)) {
                    this.flush();
                    unlock();
                }
                $mol_fail_hidden(e);
            }
        }
        reset() {
            this.stat(null);
        }
        modified() { return this.stat()?.mtime ?? null; }
        version() {
            const next = this.stat()?.mtime.getTime().toString(36).toUpperCase() ?? '';
            // console.log('version', next, this.path())
            return next;
        }
        info(path) { return null; }
        ensure() { }
        drop() { }
        copy(to) { }
        read() { return new Uint8Array; }
        write(buffer) { }
        kids() {
            return [];
        }
        readable(opts) {
            return new ReadableStream;
        }
        writable(opts) {
            return new WritableStream;
        }
        // open( ... modes: readonly $mol_file_mode[] ) { return 0 }
        buffer(next) {
            // Если версия пустая - возвращаем пустой буфер
            let readed = new Uint8Array();
            if (next === undefined) {
                // Если меняется версия файла, буфер надо перечитать
                if (this.version())
                    readed = this.read();
            }
            const prev = $mol_mem_cached(() => this.buffer());
            const changed = prev === undefined || !$mol_compare_array(prev, next ?? readed);
            if (prev !== undefined && changed) {
                // Логируем, если повторно читаем/пишем и буфер поменялся
                this.$.$mol_log3_rise({
                    place: `$mol_file_node.buffer()`,
                    message: 'Changed',
                    path: this.relate(),
                });
            }
            if (next === undefined)
                return changed ? readed : prev;
            // Если буфер при записи не поменялся и файл не удаляли перед этим - не записываем новую версию.
            // Если записывать, это приведет к смене mtime и вотчер снова триггернется, даже если содержимое файла не поменялось.
            // В этом алгоритме есть изъян.
            // Если файл записали, потом отключили вотчер, кто-то из вне его поменял, потом включили вотчер, снова записали тот же буфер,
            // то буфер не запишется на диск, т.к. кэш не консистентен с диском.
            if (!changed && this.exists())
                return prev;
            this.parent().exists(true);
            this.stat(this.stat_make(next.length), 'virt');
            this.write(next);
            return next;
        }
        stat_make(size) {
            const now = new Date();
            return {
                type: 'file',
                size,
                atime: now,
                mtime: now,
                ctime: now,
            };
        }
        clone(to) {
            if (!this.exists())
                return null;
            const target = this.constructor.absolute(to);
            try {
                this.version();
                target.parent().exists(true);
                this.copy(to);
                target.reset();
                return target;
            }
            catch (error) {
                if ($mol_fail_catch(error)) {
                    console.error(error);
                }
            }
            return null;
        }
        // static watch_root = ''
        // static watcher_warned = false
        watcher() {
            // const constructor = this.constructor as typeof $mol_file_base
            // if (! constructor.watcher_warned) {
            // 	console.warn(`${constructor}.watcher() not implemented`)
            // 	constructor.watcher_warned = true
            // }
            return {
                destructor() { }
            };
        }
        exists(next) {
            const exists = Boolean(this.stat());
            // console.log('exists current', exists, 'next', next, this.path())
            if (next === undefined)
                return exists;
            if (next === exists)
                return exists;
            if (next) {
                this.parent().exists(true);
                this.ensure();
            }
            else {
                this.drop();
            }
            this.reset();
            return next;
        }
        type() {
            return this.stat()?.type ?? '';
        }
        name() {
            return this.path().replace(/^.*\//, '');
        }
        ext() {
            const match = /((?:\.\w+)+)$/.exec(this.path());
            return match ? match[1].substring(1) : '';
        }
        text(next, virt) {
            // Если записываем text, и вотчер ресетнул записанный файл,
            // то надо снова его обновить, вызвать логику, которая делала пуш в text.
            // Например файл удалили, потом снова создали, версия поменялась - перезаписываем
            // Если использовать version, то вновь созданный файл, через вотчер запустит свое пересоздание
            if (next !== undefined)
                this.exists();
            return this.text_int(next, virt);
        }
        text_int(next, virt) {
            if (virt) {
                this.stat(this.stat_make(0), 'virt');
                return next;
            }
            if (next === undefined) {
                return $mol_charset_decode(this.buffer());
            }
            else {
                const buffer = $mol_charset_encode(next);
                this.buffer(buffer);
                return next;
            }
        }
        sub(reset) {
            if (!this.exists())
                return [];
            if (this.type() !== 'dir')
                return [];
            this.version();
            // Если дочерний file удалился, список надо обновить
            return this.kids().filter(file => file.exists());
        }
        resolve(path) {
            throw new Error('implement');
        }
        relate(base = this.constructor.relative('.')) {
            const base_path = base.path();
            const path = this.path();
            return path.startsWith(base_path) ? path.slice(base_path.length) : path;
        }
        find(include, exclude) {
            const found = [];
            const sub = this.sub();
            for (const child of sub) {
                const child_path = child.path();
                if (exclude && child_path.match(exclude))
                    continue;
                if (!include || child_path.match(include))
                    found.push(child);
                if (child.type() === 'dir') {
                    const sub_child = child.find(include, exclude);
                    for (const child of sub_child)
                        found.push(child);
                }
            }
            return found;
        }
        size() {
            switch (this.type()) {
                case 'file': return this.stat()?.size ?? 0;
                default: return 0;
            }
        }
        toJSON() {
            return this.path();
        }
        open(...modes) {
            return this.$.$mol_file_transaction.make({
                path: () => this.path(),
                modes: () => modes
            });
        }
    }
    __decorate([
        $mol_action
    ], $mol_file_base.prototype, "exists_cut", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "stat", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "modified", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "version", null);
    __decorate([
        $mol_mem_key
    ], $mol_file_base.prototype, "readable", null);
    __decorate([
        $mol_mem_key
    ], $mol_file_base.prototype, "writable", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "buffer", null);
    __decorate([
        $mol_action
    ], $mol_file_base.prototype, "stat_make", null);
    __decorate([
        $mol_mem_key
    ], $mol_file_base.prototype, "clone", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "exists", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "type", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "text_int", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "sub", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "size", null);
    __decorate([
        $mol_action
    ], $mol_file_base.prototype, "open", null);
    __decorate([
        $mol_mem_key
    ], $mol_file_base, "absolute", null);
    __decorate([
        $mol_action
    ], $mol_file_base, "flush", null);
    __decorate([
        $mol_action
    ], $mol_file_base, "watch_off", null);
    $.$mol_file_base = $mol_file_base;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_file extends $mol_file_base {
    }
    $.$mol_file = $mol_file;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function stat_convert(stat) {
        if (!stat)
            return null;
        let type;
        if (stat.isDirectory())
            type = 'dir';
        if (stat.isFile())
            type = 'file';
        if (stat.isSymbolicLink())
            type = 'link';
        if (!type)
            return $mol_fail(new Error(`Unsupported file type`));
        return {
            type,
            size: Number(stat.size),
            atime: stat.atime,
            mtime: stat.mtime,
            ctime: stat.ctime
        };
    }
    function $mol_file_node_buffer_normalize(buf) {
        return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
    }
    $.$mol_file_node_buffer_normalize = $mol_file_node_buffer_normalize;
    class $mol_file_node extends $mol_file {
        static relative(path) {
            return this.absolute($node.path.resolve(this.base, path).replace(/\\/g, '/'));
        }
        watcher(reset) {
            const path = this.path();
            const root = this.root();
            // Если папки/файла нет, watch упадет с ошибкой
            // exists обратится к parent.version и parent.watcher
            // Поэтому у root-папки и выше не надо вызывать exists, иначе поднимется выше base до корня диска
            // exists вызывать надо, что б пересоздавать вотчер при появлении папки или файла
            if (!root && !this.exists())
                return super.watcher();
            let watcher;
            try {
                // Между exists и watch файл может удалиться, в любом случае надо обрабатывать ENOENT
                watcher = $node.fs.watch(path);
            }
            catch (error) {
                if (!(error instanceof Error))
                    error = new Error('Unknown watch error', { cause: error });
                error.message += '\n' + path;
                if (root || error.code !== 'ENOENT') {
                    this.$.$mol_fail_log(error);
                }
                // Если файла нет - вотчер не создается, создастся потом, когда exists поменяется на true.
                // Если создание упало с другой ошибкой - не ломаем работу mol_file, деградируем до не реактивной fs.
                return super.watcher();
            }
            watcher.on('change', (type, name) => {
                if (!name)
                    return;
                const path = $node.path.join(this.path(), name.toString());
                this.constructor.changed_add(type, path);
            });
            watcher.on('error', e => this.$.$mol_fail_log(e));
            let destructed = false;
            watcher.on('close', () => {
                // Если в процессе работы вотчер сам закрылся, надо его переоткрыть
                if (!destructed)
                    setTimeout(() => $mol_wire_async(this).watcher(null), 500);
            });
            return {
                destructor() {
                    destructed = true;
                    watcher.close();
                }
            };
        }
        info(path) {
            try {
                return stat_convert($node.fs.statSync(path));
            }
            catch (error) {
                if (this.$.$mol_fail_catch(error)) {
                    if (error.code === 'ENOENT')
                        return null;
                    if (error.code === 'EPERM')
                        return null;
                    error.message += '\n' + path;
                    this.$.$mol_fail_hidden(error);
                }
            }
            return null;
        }
        ensure() {
            const path = this.path();
            try {
                $node.fs.mkdirSync(path, { recursive: true });
                return null;
            }
            catch (e) {
                if (this.$.$mol_fail_catch(e)) {
                    if (e.code === 'EEXIST')
                        return null;
                    e.message += '\n' + path;
                    this.$.$mol_fail_hidden(e);
                }
            }
        }
        copy(to) {
            $node.fs.copyFileSync(this.path(), to);
        }
        drop() {
            $node.fs.unlinkSync(this.path());
        }
        read() {
            const path = this.path();
            try {
                return $mol_file_node_buffer_normalize($node.fs.readFileSync(path));
            }
            catch (error) {
                if (!$mol_promise_like(error)) {
                    error.message += '\n' + path;
                }
                $mol_fail_hidden(error);
            }
        }
        write(buffer) {
            const path = this.path();
            try {
                $node.fs.writeFileSync(path, buffer);
            }
            catch (error) {
                if (this.$.$mol_fail_catch(error)) {
                    error.message += '\n' + path;
                }
                return this.$.$mol_fail_hidden(error);
            }
        }
        kids() {
            const path = this.path();
            try {
                const kids = $node.fs.readdirSync(path)
                    .filter(name => !/^\.+$/.test(name))
                    .map(name => this.resolve(name));
                return kids;
            }
            catch (e) {
                if (this.$.$mol_fail_catch(e)) {
                    if (e.code === 'ENOENT')
                        return [];
                    e.message += '\n' + path;
                }
                $mol_fail_hidden(e);
            }
        }
        resolve(path) {
            return this.constructor
                .relative($node.path.join(this.path(), path));
        }
        relate(base = this.constructor.relative('.')) {
            return $node.path.relative(base.path(), this.path()).replace(/\\/g, '/');
        }
        readable(opts) {
            const { Readable } = $node['node:stream'];
            const stream = $node.fs.createReadStream(this.path(), {
                flags: 'r',
                autoClose: true,
                start: opts?.start,
                end: opts?.end,
                encoding: 'binary',
            });
            return Readable.toWeb(stream);
        }
        writable(opts) {
            const { Writable } = $node['node:stream'];
            const stream = $node.fs.createWriteStream(this.path(), {
                flags: 'w+',
                autoClose: true,
                start: opts?.start,
                encoding: 'binary',
            });
            return Writable.toWeb(stream);
        }
    }
    __decorate([
        $mol_mem
    ], $mol_file_node.prototype, "watcher", null);
    __decorate([
        $mol_action
    ], $mol_file_node.prototype, "info", null);
    __decorate([
        $mol_action
    ], $mol_file_node.prototype, "ensure", null);
    __decorate([
        $mol_action
    ], $mol_file_node.prototype, "copy", null);
    __decorate([
        $mol_action
    ], $mol_file_node.prototype, "drop", null);
    __decorate([
        $mol_action
    ], $mol_file_node.prototype, "read", null);
    __decorate([
        $mol_action
    ], $mol_file_node.prototype, "write", null);
    __decorate([
        $mol_mem_key
    ], $mol_file_node.prototype, "readable", null);
    __decorate([
        $mol_mem
    ], $mol_file_node.prototype, "writable", null);
    $.$mol_file_node = $mol_file_node;
    $.$mol_file = $mol_file_node;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_state_local_node extends $mol_state_local {
        static dir() {
            const base = process.env.XDG_DATA_HOME || ($node.os.homedir() + '/.local/share');
            return $mol_file.absolute(base).resolve('./mol_state_local');
        }
        static value(key, next) {
            const file = this.dir().resolve(encodeURIComponent(key) + '.json');
            if (next === null) {
                file.exists(false);
                return null;
            }
            const arg = next === undefined ? undefined : JSON.stringify(next);
            return JSON.parse(file.text(arg) || 'null');
        }
    }
    __decorate([
        $mol_mem
    ], $mol_state_local_node, "dir", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_local_node, "value", null);
    $.$mol_state_local_node = $mol_state_local_node;
    $.$mol_state_local = $mol_state_local_node;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    /**
     * Localisation in $mol framework
     * @see https://mol.hyoo.ru/#!section=docs/=s5aqnb_odub8l
     */
    class $mol_locale extends $mol_object {
        static lang_default() {
            return 'en';
        }
        static lang(next) {
            return this.$.$mol_state_local.value('locale', next) || $mol_dom_context.navigator.language.replace(/-.*/, '') || this.lang_default();
        }
        static langs_rtl() {
            return ['ar', 'he', 'fa', 'ur', 'yi', 'ps', 'ug', 'sd'];
        }
        static direction() {
            const lang = this.lang();
            try {
                return new Intl.Locale(lang).getTextInfo().direction ?? 'ltr';
            }
            catch (e) {
                $mol_fail_log(e);
                return this.langs_rtl().includes(lang) ? 'rtl' : 'ltr';
            }
        }
        static source(lang) {
            return JSON.parse(this.$.$mol_file.relative(`web.locale=${lang}.json`).text().toString());
        }
        static texts(lang, next) {
            if (next)
                return next;
            try {
                return this.source(lang).valueOf();
            }
            catch (error) {
                if ($mol_fail_catch(error)) {
                    const def = this.lang_default();
                    if (lang === def)
                        throw error;
                }
            }
            return {};
        }
        static text(key) {
            const lang = this.lang();
            const target = this.texts(lang)[key];
            if (target)
                return target;
            this.warn(key);
            const en = this.texts('en')[key];
            if (!en)
                return key;
            return en;
        }
        static warn(key) {
            console.warn(`Not translated to "${this.lang()}": ${key}`);
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_locale, "lang_default", null);
    __decorate([
        $mol_mem
    ], $mol_locale, "lang", null);
    __decorate([
        $mol_mem
    ], $mol_locale, "direction", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "source", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "texts", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "text", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "warn", null);
    $.$mol_locale = $mol_locale;
})($ || ($ = {}));

;
	($.$mol_text_code) = class $mol_text_code extends ($.$mol_stack) {
		sidebar_showed(){
			return false;
		}
		render_visible_only(){
			return false;
		}
		row_numb(id){
			return 0;
		}
		row_theme(id){
			return "";
		}
		row_text(id){
			return "";
		}
		syntax(){
			return null;
		}
		uri_resolve(id){
			return "";
		}
		highlight(){
			return "";
		}
		Row(id){
			const obj = new this.$.$mol_text_code_line();
			(obj.numb_showed) = () => ((this.sidebar_showed()));
			(obj.numb) = () => ((this.row_numb(id)));
			(obj.theme) = () => ((this.row_theme(id)));
			(obj.text) = () => ((this.row_text(id)));
			(obj.syntax) = () => ((this.syntax()));
			(obj.uri_resolve) = (id) => ((this.uri_resolve(id)));
			(obj.highlight) = () => ((this.highlight()));
			return obj;
		}
		rows(){
			return [(this.Row("0"))];
		}
		Rows(){
			const obj = new this.$.$mol_list();
			(obj.render_visible_only) = () => ((this.render_visible_only()));
			(obj.rows) = () => ((this.rows()));
			return obj;
		}
		text_export(){
			return "";
		}
		Copy(){
			const obj = new this.$.$mol_button_copy();
			(obj.hint) = () => ((this.$.$mol_locale.text("$mol_text_code_Copy_hint")));
			(obj.text) = () => ((this.text_export()));
			return obj;
		}
		attr(){
			return {...(super.attr()), "mol_text_code_sidebar_showed": (this.sidebar_showed())};
		}
		text(){
			return "";
		}
		text_lines(){
			return [];
		}
		find_pos(id){
			return null;
		}
		uri_base(){
			return "";
		}
		row_themes(){
			return [];
		}
		sub(){
			return [(this.Rows()), (this.Copy())];
		}
	};
	($mol_mem_key(($.$mol_text_code.prototype), "Row"));
	($mol_mem(($.$mol_text_code.prototype), "Rows"));
	($mol_mem(($.$mol_text_code.prototype), "Copy"));


;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        /**
         * Code visualizer.
         * @see https://mol.hyoo.ru/#!section=demos/demo=mol_text_code_demo
         */
        class $mol_text_code extends $.$mol_text_code {
            render_visible_only() {
                return this.$.$mol_support_css_overflow_anchor();
            }
            text_lines() {
                return (this.text() ?? '').split('\n');
            }
            rows() {
                return this.text_lines().map((_, index) => this.Row(index + 1));
            }
            row_text(index) {
                return this.text_lines()[index - 1];
            }
            row_numb(index) {
                return index;
            }
            find_pos(offset) {
                for (const [index, line] of this.text_lines().entries()) {
                    if (line.length >= offset) {
                        return this.Row(index + 1).find_pos(offset);
                    }
                    else {
                        offset -= line.length + 1;
                    }
                }
                return null;
            }
            sub() {
                return [
                    this.Rows(),
                    ...this.sidebar_showed() ? [this.Copy()] : []
                ];
            }
            syntax() {
                return this.$.$mol_syntax2_md_code;
            }
            uri_base() {
                return $mol_dom_context.document.location.href;
            }
            uri_resolve(uri) {
                if (/^(\w+script+:)+/.test(uri))
                    return null;
                try {
                    const url = new URL(uri, this.uri_base());
                    return url.toString();
                }
                catch (error) {
                    $mol_fail_log(error);
                    return null;
                }
            }
            text_export() {
                return this.text() + '\n';
            }
            row_theme(row) {
                return this.row_themes()[row - 1];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_text_code.prototype, "text_lines", null);
        __decorate([
            $mol_mem
        ], $mol_text_code.prototype, "rows", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code.prototype, "row_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code.prototype, "find_pos", null);
        __decorate([
            $mol_mem
        ], $mol_text_code.prototype, "sub", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code.prototype, "uri_resolve", null);
        $$.$mol_text_code = $mol_text_code;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem, px } = $mol_style_unit;
        $mol_style_define($mol_text_code, {
            whiteSpace: 'pre-wrap',
            font: {
                family: 'monospace',
            },
            Rows: {
                padding: $mol_gap.text,
                minWidth: 0,
            },
            Row: {
                font: {
                    family: 'inherit',
                },
            },
            Copy: {
                alignSelf: 'flex-start',
                justifySelf: 'flex-start',
            },
            '@': {
                'mol_text_code_sidebar_showed': {
                    true: {
                        $mol_text_code_line: {
                            margin: {
                                inlineStart: '1.75rem',
                            },
                        },
                    },
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_float) = class $mol_float extends ($.$mol_view) {
		style(){
			return {...(super.style()), "minHeight": "auto"};
		}
	};


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/float/float.view.css", "[mol_float] {\n\tposition: sticky;\n\ttop: 0;\n\tleft: 0;\n\tz-index: var(--mol_layer_float);\n\topacity: 1;\n\ttransition: opacity .25s ease-in;\n\tdisplay: block;\n\tbackground: linear-gradient( var(--mol_theme_card), var(--mol_theme_card) ), var(--mol_theme_back);\n\tbox-shadow: 0 0 .5rem hsla(0,0%,0%,.25);\n}\n\n");
})($ || ($ = {}));

;
"use strict";


;
	($.$mol_icon_chevron) = class $mol_icon_chevron extends ($.$mol_icon) {
		path(){
			return "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z";
		}
	};


;
"use strict";


;
	($.$mol_check_expand) = class $mol_check_expand extends ($.$mol_check) {
		level_style(){
			return "0px";
		}
		expanded(next){
			if(next !== undefined) return next;
			return false;
		}
		expandable(){
			return false;
		}
		Icon(){
			const obj = new this.$.$mol_icon_chevron();
			return obj;
		}
		level(){
			return 0;
		}
		style(){
			return {...(super.style()), "paddingLeft": (this.level_style())};
		}
		checked(next){
			return (this.expanded(next));
		}
		enabled(){
			return (this.expandable());
		}
	};
	($mol_mem(($.$mol_check_expand.prototype), "expanded"));
	($mol_mem(($.$mol_check_expand.prototype), "Icon"));


;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        /**
         * Expander for trees, lists, etc
         * @see https://mol.hyoo.ru/#!section=demos/demo=mol_check_expand_demo
         */
        class $mol_check_expand extends $.$mol_check_expand {
            level_style() {
                return `${this.level() * 1 - 1}rem`;
            }
            expandable() {
                return this.expanded() !== null;
            }
        }
        $$.$mol_check_expand = $mol_check_expand;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/expand/expand.view.css", "[mol_check_expand] {\n\tmin-width: 20px;\n}\n\n:where([mol_check_expand][disabled]) [mol_check_expand_icon] {\n\tvisibility: hidden;\n}\n\n[mol_check_expand_icon] {\n\tbox-shadow: none;\n\tmargin-inline-start: -0.375rem;\n}\n[mol_check_expand_icon] {\n\ttransform: rotateZ(0deg);\n}\n\n:where([mol_check_checked]) [mol_check_expand_icon] {\n\ttransform: rotateZ(90deg);\n}\n\n[mol_check_expand_icon] {\n\tvertical-align: text-top;\n}\n\n[mol_check_expand_label] {\n\tmargin-inline-start: 0;\n}\n");
})($ || ($ = {}));

;
	($.$mol_grid) = class $mol_grid extends ($.$mol_view) {
		rows(){
			return [];
		}
		Table(){
			const obj = new this.$.$mol_grid_table();
			(obj.sub) = () => ((this.rows()));
			return obj;
		}
		head_cells(){
			return [];
		}
		cells(id){
			return [];
		}
		cell_content(id){
			return [];
		}
		cell_content_text(id){
			return (this.cell_content(id));
		}
		cell_content_number(id){
			return (this.cell_content(id));
		}
		col_head_content(id){
			return [];
		}
		cell_level(id){
			return 0;
		}
		cell_expanded(id, next){
			if(next !== undefined) return next;
			return false;
		}
		needle(){
			return "";
		}
		cell_value(id){
			return "";
		}
		Cell_dimmer(id){
			const obj = new this.$.$mol_dimmer();
			(obj.needle) = () => ((this.needle()));
			(obj.haystack) = () => ((this.cell_value(id)));
			return obj;
		}
		row_height(){
			return 32;
		}
		row_ids(){
			return [];
		}
		row_id(id){
			return null;
		}
		col_ids(){
			return [];
		}
		records(){
			return {};
		}
		record(id){
			return null;
		}
		hierarchy(){
			return null;
		}
		hierarchy_col(){
			return "";
		}
		minimal_width(){
			return 0;
		}
		sub(){
			return [(this.Head()), (this.Table())];
		}
		Head(){
			const obj = new this.$.$mol_grid_row();
			(obj.cells) = () => ((this.head_cells()));
			return obj;
		}
		Row(id){
			const obj = new this.$.$mol_grid_row();
			(obj.minimal_height) = () => ((this.row_height()));
			(obj.minimal_width) = () => ((this.minimal_width()));
			(obj.cells) = () => ((this.cells(id)));
			return obj;
		}
		Cell(id){
			const obj = new this.$.$mol_view();
			return obj;
		}
		cell(id){
			return null;
		}
		Cell_text(id){
			const obj = new this.$.$mol_grid_cell();
			(obj.sub) = () => ((this.cell_content_text(id)));
			return obj;
		}
		Cell_number(id){
			const obj = new this.$.$mol_grid_number();
			(obj.sub) = () => ((this.cell_content_number(id)));
			return obj;
		}
		Col_head(id){
			const obj = new this.$.$mol_float();
			(obj.dom_name) = () => ("th");
			(obj.sub) = () => ((this.col_head_content(id)));
			return obj;
		}
		Cell_branch(id){
			const obj = new this.$.$mol_check_expand();
			(obj.level) = () => ((this.cell_level(id)));
			(obj.label) = () => ((this.cell_content(id)));
			(obj.expanded) = (next) => ((this.cell_expanded(id, next)));
			return obj;
		}
		Cell_content(id){
			return [(this.Cell_dimmer(id))];
		}
	};
	($mol_mem(($.$mol_grid.prototype), "Table"));
	($mol_mem_key(($.$mol_grid.prototype), "cell_expanded"));
	($mol_mem_key(($.$mol_grid.prototype), "Cell_dimmer"));
	($mol_mem(($.$mol_grid.prototype), "Head"));
	($mol_mem_key(($.$mol_grid.prototype), "Row"));
	($mol_mem_key(($.$mol_grid.prototype), "Cell"));
	($mol_mem_key(($.$mol_grid.prototype), "Cell_text"));
	($mol_mem_key(($.$mol_grid.prototype), "Cell_number"));
	($mol_mem_key(($.$mol_grid.prototype), "Col_head"));
	($mol_mem_key(($.$mol_grid.prototype), "Cell_branch"));
	($.$mol_grid_table) = class $mol_grid_table extends ($.$mol_list) {};
	($.$mol_grid_row) = class $mol_grid_row extends ($.$mol_view) {
		cells(){
			return [];
		}
		sub(){
			return (this.cells());
		}
	};
	($.$mol_grid_cell) = class $mol_grid_cell extends ($.$mol_view) {
		minimal_height(){
			return 40;
		}
	};
	($.$mol_grid_number) = class $mol_grid_number extends ($.$mol_grid_cell) {};


;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_grid extends $.$mol_grid {
            head_cells() {
                return this.col_ids().map(colId => this.Col_head(colId));
            }
            col_head_content(colId) {
                return [colId];
            }
            rows() {
                return this.row_ids().map(id => this.Row(id));
            }
            cells(row_id) {
                return this.col_ids().map(col_id => this.Cell({ row: row_id, col: col_id }));
            }
            col_type(col_id) {
                if (col_id === this.hierarchy_col())
                    return 'branch';
                const rowFirst = this.row_id(0);
                const val = this.record(rowFirst[rowFirst.length - 1])[col_id];
                if (typeof val === 'number')
                    return 'number';
                return 'text';
            }
            Cell(id) {
                switch (this.col_type(id.col).valueOf()) {
                    case 'branch': return this.Cell_branch(id);
                    case 'number': return this.Cell_number(id);
                }
                return this.Cell_text(id);
            }
            cell_content(id) {
                return [this.record(id.row[id.row.length - 1])[id.col]];
            }
            cell_content_text(id) {
                return this.cell_content(id).map(val => typeof val === 'object' ? JSON.stringify(val) : val);
            }
            records() {
                return [];
            }
            record(id) {
                return this.records()[id];
            }
            record_ids() {
                return Object.keys(this.records());
            }
            row_id(index) {
                return this.row_ids().slice(index, index + 1).valueOf()[0];
            }
            col_ids() {
                const rowFirst = this.row_id(0);
                if (rowFirst === void 0)
                    return [];
                const record = this.record(rowFirst[rowFirst.length - 1]);
                if (!record)
                    return [];
                return Object.keys(record);
            }
            hierarchy() {
                const hierarchy = {};
                const root = hierarchy[''] = {
                    id: '',
                    parent: null,
                    sub: [],
                };
                this.record_ids().map(id => {
                    root.sub.push(hierarchy[id] = {
                        id,
                        parent: root,
                        sub: [],
                    });
                });
                return hierarchy;
            }
            row_sub_ids(row) {
                return this.hierarchy()[row[row.length - 1]].sub.map(child => row.concat(child.id));
            }
            row_root_id() {
                return [''];
            }
            cell_level(id) {
                return id.row.length - 1;
            }
            row_ids() {
                const next = [];
                const add = (row) => {
                    next.push(row);
                    if (this.row_expanded(row)) {
                        this.row_sub_ids(row).forEach(child => add(child));
                    }
                };
                this.row_sub_ids(this.row_root_id()).forEach(child => add(child));
                return next;
            }
            row_expanded(row_id, next) {
                if (!this.row_sub_ids(row_id).length)
                    return null;
                const key = `row_expanded(${JSON.stringify(row_id)})`;
                const next2 = $mol_state_session.value(key, next);
                return (next2 == null) ? this.row_expanded_default(row_id) : next2;
            }
            row_expanded_default(row_id) {
                return true;
            }
            cell_expanded(id, next) {
                return this.row_expanded(id.row, next);
            }
            sub() {
                this.head_cells();
                this.rows();
                return super.sub();
            }
        }
        __decorate([
            $mol_mem
        ], $mol_grid.prototype, "head_cells", null);
        __decorate([
            $mol_mem
        ], $mol_grid.prototype, "rows", null);
        __decorate([
            $mol_mem_key
        ], $mol_grid.prototype, "col_type", null);
        __decorate([
            $mol_mem
        ], $mol_grid.prototype, "record_ids", null);
        __decorate([
            $mol_mem
        ], $mol_grid.prototype, "hierarchy", null);
        __decorate([
            $mol_mem
        ], $mol_grid.prototype, "row_ids", null);
        $$.$mol_grid = $mol_grid;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/grid/grid.view.css", "[mol_grid] {\n\tdisplay: block;\n\tflex: 0 1 auto;\n\tposition: relative;\n\toverflow-x: auto;\n}\n\n[mol_grid_gap] {\n\tposition: absolute;\n\tpadding: .1px;\n\ttop: 0;\n\ttransform: translateZ(0);\n}\n\n[mol_grid_table] {\n\tborder-spacing: 0;\n\tdisplay: table-row-group;\n\tposition: relative;\n}\n\n[mol_grid_table] > * {\n\tdisplay: table-row;\n\ttransition: none;\n}\n\n[mol_grid_head] > *,\n[mol_grid_table] > * > * {\n\tdisplay: table-cell;\n\tpadding: var(--mol_gap_text);\n\twhite-space: nowrap;\n\tvertical-align: middle;\n\tbox-shadow: inset 2px 2px 0 -1px var(--mol_theme_line);\n}\n\n[mol_grid_row]:where(:first-child) > * {\n\tbox-shadow: inset 2px 0 0 -1px var(--mol_theme_line);\n}\n\n[mol_grid_table] > * > *:where(:first-child) {\n\tbox-shadow: inset 0px 2px 0 -1px var(--mol_theme_line);\n}\n\n[mol_grid_head] > * {\n\tbox-shadow: inset 2px -2px 0 -1px var(--mol_theme_line);\n}\n\n[mol_grid_head] > *:where(:first-child) {\n\tbox-shadow: inset 0px -2px 0 -1px var(--mol_theme_line);\n}\n\n[mol_grid_table] > [mol_grid_row]:where(:first-child) > *:where(:first-child) {\n\tbox-shadow: none;\n}\t\n\n[mol_grid_head] {\n\tdisplay: table-row;\n\ttransform: none !important;\n}\n\n/* [mol_grid_cell_number] {\n\ttext-align: end;\n} */\n\n[mol_grid_col_head] {\n\tfont-weight: inherit;\n\ttext-align: inherit;\n\tdisplay: table-cell;\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_grid_cell_dimmer] {\n\tdisplay: inline-block;\n\tvertical-align: inherit;\n}\n");
})($ || ($ = {}));

;
	($.$mol_image) = class $mol_image extends ($.$mol_view) {
		uri(){
			return "";
		}
		title(){
			return "";
		}
		loading(){
			return "lazy";
		}
		decoding(){
			return "async";
		}
		cors(){
			return null;
		}
		natural_width(){
			return 0;
		}
		natural_height(){
			return 0;
		}
		load(next){
			if(next !== undefined) return next;
			return null;
		}
		dom_name(){
			return "img";
		}
		attr(){
			return {
				...(super.attr()), 
				"src": (this.uri()), 
				"title": (this.hint()), 
				"alt": (this.title()), 
				"loading": (this.loading()), 
				"decoding": (this.decoding()), 
				"crossOrigin": (this.cors()), 
				"width": (this.natural_width()), 
				"height": (this.natural_height())
			};
		}
		event(){
			return {"load": (next) => (this.load(next))};
		}
		minimal_width(){
			return 16;
		}
		minimal_height(){
			return 16;
		}
	};
	($mol_mem(($.$mol_image.prototype), "load"));


;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_image extends $.$mol_image {
            natural_width(next) {
                const dom = this.dom_node();
                if (dom.naturalWidth)
                    return dom.naturalWidth;
                const found = this.uri().match(/\bwidth=(\d+)/);
                return found ? Number(found[1]) : null;
            }
            natural_height(next) {
                const dom = this.dom_node();
                if (dom.naturalHeight)
                    return dom.naturalHeight;
                const found = this.uri().match(/\bheight=(\d+)/);
                return found ? Number(found[1]) : null;
            }
            load() {
                this.natural_width(null);
                this.natural_height(null);
            }
        }
        __decorate([
            $mol_mem
        ], $mol_image.prototype, "natural_width", null);
        __decorate([
            $mol_mem
        ], $mol_image.prototype, "natural_height", null);
        $$.$mol_image = $mol_image;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/image/image.view.css", "[mol_image] {\n\tborder-radius: var(--mol_gap_round);\n\toverflow: hidden;\n\tflex: 0 1 auto;\n\tmax-width: 100%;\n\tobject-fit: cover;\n\theight: fit-content;\n}\n");
})($ || ($ = {}));

;
	($.$mol_link_iconed) = class $mol_link_iconed extends ($.$mol_link) {
		icon(){
			return "";
		}
		Icon(){
			const obj = new this.$.$mol_image();
			(obj.uri) = () => ((this.icon()));
			(obj.title) = () => ("");
			return obj;
		}
		title(){
			return (this.uri());
		}
		sub(){
			return [(this.Icon())];
		}
		content(){
			return [(this.title())];
		}
		host(){
			return "";
		}
	};
	($mol_mem(($.$mol_link_iconed.prototype), "Icon"));


;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_link_iconed extends $.$mol_link_iconed {
            icon() {
                return `https://favicon.yandex.net/favicon/${this.host()}?color=0,0,0,0&size=32&stub=1`;
                // return `https://api.faviconkit.com/${ this.host() }/16`
            }
            host() {
                const base = this.$.$mol_state_arg.href();
                const url = new URL(this.uri(), base);
                return url.hostname;
            }
            title() {
                const uri = this.uri();
                const host = this.host();
                const suffix = (host ? uri.split(this.host(), 2)[1] : uri)?.replace(/^[\/\?#!]+/, '');
                return decodeURIComponent(suffix || host).replace(/^\//, ' ');
            }
            sub() {
                return [
                    ...this.host() ? [this.Icon()] : [],
                    ...this.content() ? [' ', ...this.content()] : [],
                ];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_link_iconed.prototype, "icon", null);
        __decorate([
            $mol_mem
        ], $mol_link_iconed.prototype, "host", null);
        __decorate([
            $mol_mem
        ], $mol_link_iconed.prototype, "title", null);
        __decorate([
            $mol_mem
        ], $mol_link_iconed.prototype, "sub", null);
        $$.$mol_link_iconed = $mol_link_iconed;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/link/iconed/iconed.view.css", "[mol_link_iconed] {\n\talign-items: baseline;\n\tdisplay: inline-flex;\n\tpadding: var(--mol_gap_text);\n}\n\n[mol_link_iconed_icon] {\n\tbox-shadow: none;\n\theight: 1.5em;\n\twidth: 1em;\n\tflex: 0 0 auto;\n\tdisplay: inline-block;\n\talign-self: normal;\n\tvertical-align: top;\n\tborder-radius: 0;\n\tobject-fit: scale-down;\n\topacity: .75;\n}\n\n[mol_theme=\"$mol_theme_dark\"] [mol_link_iconed_icon] {\n\tfilter: var(--mol_theme_image);\n}\n");
})($ || ($ = {}));

;
	($.$mol_scroll) = class $mol_scroll extends ($.$mol_view) {
		tabindex(){
			return -1;
		}
		event_scroll(next){
			if(next !== undefined) return next;
			return null;
		}
		scroll_top(next){
			if(next !== undefined) return next;
			return 0;
		}
		scroll_left(next){
			if(next !== undefined) return next;
			return 0;
		}
		attr(){
			return {...(super.attr()), "tabindex": (this.tabindex())};
		}
		event(){
			return {...(super.event()), "scroll": (next) => (this.event_scroll(next))};
		}
	};
	($mol_mem(($.$mol_scroll.prototype), "event_scroll"));
	($mol_mem(($.$mol_scroll.prototype), "scroll_top"));
	($mol_mem(($.$mol_scroll.prototype), "scroll_left"));


;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        /**
         * Scrolling pane.
         * @see https://mol.hyoo.ru/#!section=demos/demo=mol_scroll_demo
         */
        class $mol_scroll extends $.$mol_scroll {
            scroll_top(next, cache) {
                const el = this.dom_node();
                if (next !== undefined && !cache)
                    el.scrollTop = next;
                return el.scrollTop;
            }
            scroll_left(next, cache) {
                const el = this.dom_node();
                if (next !== undefined && !cache)
                    el.scrollLeft = next;
                return el.scrollLeft;
            }
            event_scroll(next) {
                const el = this.dom_node();
                this.scroll_left(el.scrollLeft, 'cache');
                this.scroll_top(el.scrollTop, 'cache');
            }
            minimal_height() {
                return this.$.$mol_print.active() ? null : 0;
            }
            minimal_width() {
                return this.$.$mol_print.active() ? null : 0;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_scroll.prototype, "scroll_top", null);
        __decorate([
            $mol_mem
        ], $mol_scroll.prototype, "scroll_left", null);
        $$.$mol_scroll = $mol_scroll;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per, rem, px } = $mol_style_unit;
        $mol_style_define($mol_scroll, {
            display: 'grid',
            overflow: 'auto',
            flex: {
                direction: 'column',
                grow: 1,
                shrink: 1,
                // basis: 0,
            },
            outline: 'none',
            align: {
                self: 'stretch',
                items: 'flex-start',
            },
            boxSizing: 'border-box',
            willChange: 'scroll-position',
            scroll: {
                padding: [rem(.75), 0],
            },
            maxHeight: per(100),
            maxWidth: per(100),
            webkitOverflowScrolling: 'touch',
            contain: 'content',
            '>': {
                $mol_view: {
                    // transform: 'translateZ(0)', // enforce gpu scroll in all agents
                    gridArea: '1/1',
                },
            },
            '::before': {
                display: 'none',
            },
            '::after': {
                display: 'none',
            },
            '::-webkit-scrollbar': {
                width: rem(.25),
                height: rem(.25),
            },
            '@media': {
                'print': {
                    overflow: 'hidden',
                    contain: 'none',
                    maxHeight: 'unset',
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_embed_native) = class $mol_embed_native extends ($.$mol_scroll) {
		uri(next){
			if(next !== undefined) return next;
			return "about:config";
		}
		title(){
			return "";
		}
		Fallback(){
			const obj = new this.$.$mol_link();
			(obj.uri) = () => ((this.uri()));
			(obj.sub) = () => ([(this.title())]);
			return obj;
		}
		uri_change(next){
			if(next !== undefined) return next;
			return null;
		}
		dom_name(){
			return "iframe";
		}
		window(){
			return null;
		}
		attr(){
			return {...(super.attr()), "src": (this.uri())};
		}
		sub(){
			return [(this.Fallback())];
		}
		message(){
			return {"hashchange": (next) => (this.uri_change(next))};
		}
	};
	($mol_mem(($.$mol_embed_native.prototype), "uri"));
	($mol_mem(($.$mol_embed_native.prototype), "Fallback"));
	($mol_mem(($.$mol_embed_native.prototype), "uri_change"));


;
"use strict";
var $;
(function ($) {
    function $mol_wait_timeout_async(timeout) {
        const promise = new $mol_promise();
        const task = new this.$mol_after_timeout(timeout, () => promise.done());
        return Object.assign(promise, {
            destructor: () => task.destructor()
        });
    }
    $.$mol_wait_timeout_async = $mol_wait_timeout_async;
    function $mol_wait_timeout(timeout) {
        return this.$mol_wire_sync(this).$mol_wait_timeout_async(timeout);
    }
    $.$mol_wait_timeout = $mol_wait_timeout;
})($ || ($ = {}));

;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_embed_native extends $.$mol_embed_native {
            window() {
                $mol_wire_solid();
                this.uri_resource();
                return $mol_wire_sync(this).load(this.dom_node_actual());
            }
            load(frame) {
                return new Promise((done, fail) => {
                    frame.onload = () => {
                        try {
                            if (frame.contentWindow.location.href === 'about:blank') {
                                return;
                            }
                        }
                        catch { }
                        done(frame.contentWindow);
                    };
                    frame.onerror = (event) => {
                        fail(typeof event === 'string' ? new Error(event) : event.error || event);
                    };
                });
            }
            uri_resource() {
                return this.uri().replace(/#.*/, '');
            }
            message_listener() {
                return new $mol_dom_listener($mol_dom_context, 'message', $mol_wire_async(this).message_receive);
            }
            sub_visible() {
                this.window();
                return super.sub_visible();
            }
            message_receive(event) {
                if (!event)
                    return;
                if (event.source !== this.window())
                    return;
                if (!Array.isArray(event.data))
                    return;
                this.message()[event.data[0]]?.(event);
            }
            uri_change(event) {
                this.$.$mol_wait_timeout(1000);
                this.uri(event.data[1]);
            }
            auto() {
                return [
                    this.message_listener(),
                    this.window(),
                ];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_embed_native.prototype, "window", null);
        __decorate([
            $mol_mem
        ], $mol_embed_native.prototype, "uri_resource", null);
        __decorate([
            $mol_mem
        ], $mol_embed_native.prototype, "message_listener", null);
        $$.$mol_embed_native = $mol_embed_native;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/embed/native/native.view.css", "[mol_embed_native] {\n\tmin-width: 0;\n\tmin-height: 0;\n\tmax-width: 100%;\n\tmax-height: 100vh;\n\tobject-fit: cover;\n\tdisplay: flex;\n\tflex: 1 1 auto;\n\tobject-position: top left;\n\tborder-radius: var(--mol_gap_round);\n\taspect-ratio: 4/3;\n\tborder: none;\n}\n");
})($ || ($ = {}));

;
	($.$mol_icon_youtube) = class $mol_icon_youtube extends ($.$mol_icon) {
		path(){
			return "M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z";
		}
	};


;
"use strict";


;
	($.$mol_frame) = class $mol_frame extends ($.$mol_embed_native) {
		allow(){
			return "";
		}
		html(){
			return null;
		}
		attr(){
			return {
				"tabindex": (this.tabindex()), 
				"allow": (this.allow()), 
				"src": (this.uri()), 
				"srcdoc": (this.html())
			};
		}
		fullscreen(){
			return true;
		}
		accelerometer(){
			return true;
		}
		autoplay(){
			return true;
		}
		encription(){
			return true;
		}
		gyroscope(){
			return true;
		}
		pip(){
			return true;
		}
		clipboard_read(){
			return true;
		}
		clipboard_write(){
			return true;
		}
	};


;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        /**
         * @see https://mol.hyoo.ru/#!section=demos/demo=mol_frame_demo
         */
        class $mol_frame extends $.$mol_frame {
            window() {
                // if( this.html() ) return ( this.dom_node() as HTMLIFrameElement ).contentWindow!
                return super.window();
            }
            allow() {
                return [
                    ...this.fullscreen() ? ['fullscreen'] : [],
                    ...this.accelerometer() ? ['accelerometer'] : [],
                    ...this.autoplay() ? ['autoplay'] : [],
                    ...this.encription() ? ['encrypted-media'] : [],
                    ...this.gyroscope() ? ['gyroscope'] : [],
                    ...this.pip() ? ['picture-in-picture'] : [],
                    ...this.clipboard_read() ? [`clipboard-read ${this.uri()}`] : [],
                    ...this.clipboard_write() ? [`clipboard-write ${this.uri()}`] : [],
                ].join('; ');
            }
        }
        $$.$mol_frame = $mol_frame;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_define($mol_frame, {
        border: {
            style: 'none',
        },
        maxHeight: $mol_style_unit.vh(100),
    });
})($ || ($ = {}));

;
	($.$mol_embed_service) = class $mol_embed_service extends ($.$mol_check) {
		active(next){
			if(next !== undefined) return next;
			return false;
		}
		title(){
			return "";
		}
		video_preview(){
			return "";
		}
		Image(){
			const obj = new this.$.$mol_image();
			(obj.title) = () => ((this.title()));
			(obj.uri) = () => ((this.video_preview()));
			return obj;
		}
		Hint(){
			const obj = new this.$.$mol_icon_youtube();
			return obj;
		}
		video_embed(){
			return "";
		}
		Frame(){
			const obj = new this.$.$mol_frame();
			(obj.title) = () => ((this.title()));
			(obj.uri) = () => ((this.video_embed()));
			return obj;
		}
		uri(){
			return "";
		}
		video_id(){
			return "";
		}
		checked(next){
			return (this.active(next));
		}
		sub(){
			return [
				(this.Image()), 
				(this.Hint()), 
				(this.Frame())
			];
		}
	};
	($mol_mem(($.$mol_embed_service.prototype), "active"));
	($mol_mem(($.$mol_embed_service.prototype), "Image"));
	($mol_mem(($.$mol_embed_service.prototype), "Hint"));
	($mol_mem(($.$mol_embed_service.prototype), "Frame"));


;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_embed_service extends $.$mol_embed_service {
            sub() {
                return this.active()
                    ? [this.Frame()]
                    : [this.Image(), this.Hint()];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_embed_service.prototype, "sub", null);
        $$.$mol_embed_service = $mol_embed_service;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/embed/service/service.view.css", "[mol_embed_service] {\n\tpadding: 0;\n\tmax-width: 100%;\n}\n\n[mol_embed_service_image] {\n\tflex: auto 1 1;\n\twidth: 100vw;\n}\n\n[mol_embed_service_frame] {\n\twidth: 100vw;\n}\n\n[mol_embed_service_hint] {\n\tposition: absolute;\n    left: 50%;\n    top: 50%;\n    width: 50%;\n    height: 50%;\n    opacity: 0.3;\n    transform: translate(-50%, -50%);\n}\n\n[mol_embed_service]:hover [mol_embed_service_hint] {\n\topacity: .6;\n}\n");
})($ || ($ = {}));

;
	($.$mol_embed_youtube) = class $mol_embed_youtube extends ($.$mol_embed_service) {};


;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_embed_youtube extends $.$mol_embed_youtube {
            video_embed() {
                return `https://www.youtube.com/embed/${encodeURIComponent(this.video_id())}?autoplay=1&loop=1`;
            }
            video_id() {
                return this.uri().match(/^https\:\/\/www\.youtube\.com\/(?:embed\/|shorts\/|watch\?v=)([^\/&?#]+)/)?.[1]
                    ?? this.uri().match(/^https\:\/\/youtu\.be\/([^\/&?#]+)/)?.[1]
                    ?? 'about:blank';
            }
            video_preview() {
                return `https://i.ytimg.com/vi/${this.video_id()}/sddefault.jpg`;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_embed_youtube.prototype, "video_embed", null);
        __decorate([
            $mol_mem
        ], $mol_embed_youtube.prototype, "video_id", null);
        __decorate([
            $mol_mem
        ], $mol_embed_youtube.prototype, "video_preview", null);
        $$.$mol_embed_youtube = $mol_embed_youtube;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_embed_rutube) = class $mol_embed_rutube extends ($.$mol_embed_service) {};


;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_embed_rutube extends $.$mol_embed_rutube {
            video_embed() {
                return `https://rutube.ru/play/embed/${encodeURIComponent(this.video_id())}`;
            }
            video_id() {
                return this.uri().match(/^https:\/\/rutube.ru\/video\/([^\/&?#]+)/)?.[1] ?? 'about:blank';
            }
            video_preview() {
                return `https://rutube.ru/api/video/${this.video_id()}/thumbnail/?redirect=1`;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_embed_rutube.prototype, "video_embed", null);
        __decorate([
            $mol_mem
        ], $mol_embed_rutube.prototype, "video_id", null);
        __decorate([
            $mol_mem
        ], $mol_embed_rutube.prototype, "video_preview", null);
        $$.$mol_embed_rutube = $mol_embed_rutube;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_embed_vklive) = class $mol_embed_vklive extends ($.$mol_embed_service) {};


;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_embed_vklive extends $.$mol_embed_vklive {
            video_embed() {
                return `https://live.vkvideo.ru/app/embed/${this.channel_id()}/${this.video_id()}`;
            }
            channel_id() {
                return this.uri().match(/^https:\/\/live\.vkvideo\.ru\/([^\/&?#]+)/)?.[1] ?? '';
            }
            video_id() {
                return this.uri().match(/^https:\/\/live\.vkvideo\.ru\/[^\/&?#]+\/record\/([^\/&?#]+)/)?.[1] ?? '';
            }
            video_preview() {
                return `https://images.live.vkvideo.ru/public_video_stream/record/${this.video_id()}/preview`;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_embed_vklive.prototype, "video_embed", null);
        __decorate([
            $mol_mem
        ], $mol_embed_vklive.prototype, "channel_id", null);
        __decorate([
            $mol_mem
        ], $mol_embed_vklive.prototype, "video_id", null);
        __decorate([
            $mol_mem
        ], $mol_embed_vklive.prototype, "video_preview", null);
        $$.$mol_embed_vklive = $mol_embed_vklive;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_embed_any) = class $mol_embed_any extends ($.$mol_view) {
		title(){
			return "";
		}
		uri(){
			return "";
		}
		Image(){
			const obj = new this.$.$mol_image();
			(obj.title) = () => ((this.title()));
			(obj.uri) = () => ((this.uri()));
			return obj;
		}
		Object(){
			const obj = new this.$.$mol_embed_native();
			(obj.title) = () => ((this.title()));
			(obj.uri) = () => ((this.uri()));
			return obj;
		}
		Youtube(){
			const obj = new this.$.$mol_embed_youtube();
			(obj.title) = () => ((this.title()));
			(obj.uri) = () => ((this.uri()));
			return obj;
		}
		Rutube(){
			const obj = new this.$.$mol_embed_rutube();
			(obj.title) = () => ((this.title()));
			(obj.uri) = () => ((this.uri()));
			return obj;
		}
		Vklive(){
			const obj = new this.$.$mol_embed_vklive();
			(obj.title) = () => ((this.title()));
			(obj.uri) = () => ((this.uri()));
			return obj;
		}
	};
	($mol_mem(($.$mol_embed_any.prototype), "Image"));
	($mol_mem(($.$mol_embed_any.prototype), "Object"));
	($mol_mem(($.$mol_embed_any.prototype), "Youtube"));
	($mol_mem(($.$mol_embed_any.prototype), "Rutube"));
	($mol_mem(($.$mol_embed_any.prototype), "Vklive"));


;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_embed_any extends $.$mol_embed_any {
            type() {
                try {
                    const uri = this.uri();
                    if (/\b(png|gif|jpg|jpeg|jfif|webp|svg)\b/.test(uri))
                        return 'image';
                    if (/^https:\/\/www\.youtube\.com\//.test(uri))
                        return 'youtube';
                    if (/^https:\/\/youtu\.be\//.test(uri))
                        return 'youtube';
                    if (/^https:\/\/rutube\.ru\//.test(uri))
                        return 'rutube';
                    if (/^https:\/\/live\.vkvideo\.ru\//.test(uri))
                        return 'vklive';
                }
                catch (error) {
                    $mol_fail_log(error);
                    return 'image';
                }
                return 'object';
            }
            sub() {
                switch (this.type()) {
                    case 'image': return [this.Image()];
                    case 'youtube': return [this.Youtube()];
                    case 'rutube': return [this.Rutube()];
                    case 'vklive': return [this.Vklive()];
                    default: return [this.Object()];
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_embed_any.prototype, "type", null);
        __decorate([
            $mol_mem
        ], $mol_embed_any.prototype, "sub", null);
        $$.$mol_embed_any = $mol_embed_any;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_expander) = class $mol_expander extends ($.$mol_list) {
		expanded(next){
			if(next !== undefined) return next;
			return false;
		}
		expandable(){
			return true;
		}
		label(){
			return [(this.title())];
		}
		Trigger(){
			const obj = new this.$.$mol_check_expand();
			(obj.checked) = (next) => ((this.expanded(next)));
			(obj.expandable) = () => ((this.expandable()));
			(obj.label) = () => ((this.label()));
			return obj;
		}
		Tools(){
			return null;
		}
		Label(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Trigger()), (this.Tools())]);
			return obj;
		}
		content(){
			return [];
		}
		Content(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ((this.content()));
			return obj;
		}
		rows(){
			return [(this.Label()), (this.Content())];
		}
	};
	($mol_mem(($.$mol_expander.prototype), "expanded"));
	($mol_mem(($.$mol_expander.prototype), "Trigger"));
	($mol_mem(($.$mol_expander.prototype), "Label"));
	($mol_mem(($.$mol_expander.prototype), "Content"));


;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        /**
         * Component which expands any content on title click.
         * @see https://mol.hyoo.ru/#!section=demos/demo=mol_expander_demo
         */
        class $mol_expander extends $.$mol_expander {
            rows() {
                return [
                    this.Label(),
                    ...this.expanded() ? [this.Content()] : []
                ];
            }
            expandable() {
                return this.content().length > 0;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_expander.prototype, "rows", null);
        $$.$mol_expander = $mol_expander;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/expander/expander.view.css", "[mol_expander] {\n\tflex-direction: column;\n}\n\n[mol_expander_label] {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tborder-radius: var(--mol_gap_round);\n}\n\n[mol_expander_trigger] {\n\tflex: auto;\n\tposition: relative;\n}\n");
})($ || ($ = {}));

;
	($.$mol_text) = class $mol_text extends ($.$mol_list) {
		auto_scroll(){
			return null;
		}
		block_content(id){
			return [];
		}
		uri_resolve(id){
			return "";
		}
		quote_text(id){
			return "";
		}
		highlight(){
			return "";
		}
		list_type(id){
			return "-";
		}
		list_text(id){
			return "";
		}
		header_level(id){
			return 1;
		}
		header_arg(id){
			return {};
		}
		pre_text(id){
			return "";
		}
		pre_themes(id){
			return [];
		}
		code_sidebar_showed(){
			return true;
		}
		pre_sidebar_showed(){
			return (this.code_sidebar_showed());
		}
		table_head_cells(id){
			return [];
		}
		table_rows(id){
			return [];
		}
		table_cells(id){
			return [];
		}
		table_cell_text(id){
			return "";
		}
		grid_rows(id){
			return [];
		}
		grid_cells(id){
			return [];
		}
		grid_cell_text(id){
			return "";
		}
		line_text(id){
			return "";
		}
		line_type(id){
			return "";
		}
		line_content(id){
			return [];
		}
		code_syntax(){
			return null;
		}
		link_uri(id){
			return "";
		}
		link_host(id){
			return "";
		}
		spoiler_label(id){
			return "";
		}
		Spoiler_label(id){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.spoiler_label(id)));
			return obj;
		}
		spoiler_content(id){
			return "";
		}
		Spoiler_content(id){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.spoiler_content(id)));
			return obj;
		}
		uri_base(){
			return "";
		}
		text(){
			return "";
		}
		param(){
			return "";
		}
		flow_tokens(){
			return [];
		}
		block_text(id){
			return "";
		}
		auto(){
			return [(this.auto_scroll())];
		}
		Paragraph(id){
			const obj = new this.$.$mol_paragraph();
			(obj.sub) = () => ((this.block_content(id)));
			return obj;
		}
		Quote(id){
			const obj = new this.$.$mol_text();
			(obj.uri_resolve) = (id) => ((this.uri_resolve(id)));
			(obj.text) = () => ((this.quote_text(id)));
			(obj.highlight) = () => ((this.highlight()));
			(obj.auto_scroll) = () => (null);
			return obj;
		}
		List(id){
			const obj = new this.$.$mol_text_list();
			(obj.uri_resolve) = (id) => ((this.uri_resolve(id)));
			(obj.type) = () => ((this.list_type(id)));
			(obj.text) = () => ((this.list_text(id)));
			(obj.highlight) = () => ((this.highlight()));
			return obj;
		}
		item_index(id){
			return 0;
		}
		Header(id){
			const obj = new this.$.$mol_text_header();
			(obj.minimal_height) = () => (40);
			(obj.level) = () => ((this.header_level(id)));
			(obj.content) = () => ((this.block_content(id)));
			(obj.arg) = () => ((this.header_arg(id)));
			return obj;
		}
		Pre(id){
			const obj = new this.$.$mol_text_code();
			(obj.text) = () => ((this.pre_text(id)));
			(obj.row_themes) = () => ((this.pre_themes(id)));
			(obj.highlight) = () => ((this.highlight()));
			(obj.uri_resolve) = (id) => ((this.uri_resolve(id)));
			(obj.sidebar_showed) = () => ((this.pre_sidebar_showed()));
			return obj;
		}
		Cut(id){
			const obj = new this.$.$mol_view();
			(obj.dom_name) = () => ("hr");
			return obj;
		}
		Table(id){
			const obj = new this.$.$mol_grid();
			(obj.head_cells) = () => ((this.table_head_cells(id)));
			(obj.rows) = () => ((this.table_rows(id)));
			return obj;
		}
		Table_row(id){
			const obj = new this.$.$mol_grid_row();
			(obj.cells) = () => ((this.table_cells(id)));
			return obj;
		}
		Table_cell(id){
			const obj = new this.$.$mol_text();
			(obj.auto_scroll) = () => (null);
			(obj.highlight) = () => ((this.highlight()));
			(obj.uri_resolve) = (id) => ((this.uri_resolve(id)));
			(obj.text) = () => ((this.table_cell_text(id)));
			return obj;
		}
		Grid(id){
			const obj = new this.$.$mol_grid();
			(obj.rows) = () => ((this.grid_rows(id)));
			return obj;
		}
		Grid_row(id){
			const obj = new this.$.$mol_grid_row();
			(obj.cells) = () => ((this.grid_cells(id)));
			return obj;
		}
		Grid_cell(id){
			const obj = new this.$.$mol_text();
			(obj.auto_scroll) = () => (null);
			(obj.highlight) = () => ((this.highlight()));
			(obj.uri_resolve) = (id) => ((this.uri_resolve(id)));
			(obj.text) = () => ((this.grid_cell_text(id)));
			return obj;
		}
		String(id){
			const obj = new this.$.$mol_dimmer();
			(obj.dom_name) = () => ("span");
			(obj.needle) = () => ((this.highlight()));
			(obj.haystack) = () => ((this.line_text(id)));
			return obj;
		}
		Span(id){
			const obj = new this.$.$mol_text_span();
			(obj.dom_name) = () => ("span");
			(obj.type) = () => ((this.line_type(id)));
			(obj.sub) = () => ((this.line_content(id)));
			return obj;
		}
		Code_line(id){
			const obj = new this.$.$mol_text_code_line();
			(obj.numb_showed) = () => (false);
			(obj.highlight) = () => ((this.highlight()));
			(obj.text) = () => ((this.line_text(id)));
			(obj.uri_resolve) = (id) => ((this.uri_resolve(id)));
			(obj.syntax) = () => ((this.code_syntax()));
			return obj;
		}
		Link(id){
			const obj = new this.$.$mol_link_iconed();
			(obj.uri) = () => ((this.link_uri(id)));
			(obj.content) = () => ((this.line_content(id)));
			return obj;
		}
		Link_http(id){
			const obj = new this.$.$mol_link_iconed();
			(obj.uri) = () => ((this.link_uri(id)));
			(obj.content) = () => ([(this.link_host(id))]);
			return obj;
		}
		Embed(id){
			const obj = new this.$.$mol_embed_any();
			(obj.uri) = () => ((this.link_uri(id)));
			(obj.title) = () => ((this.line_text(id)));
			return obj;
		}
		Spoiler(id){
			const obj = new this.$.$mol_expander();
			(obj.label) = () => ([(this.Spoiler_label(id))]);
			(obj.content) = () => ([(this.Spoiler_content(id))]);
			return obj;
		}
	};
	($mol_mem_key(($.$mol_text.prototype), "Spoiler_label"));
	($mol_mem_key(($.$mol_text.prototype), "Spoiler_content"));
	($mol_mem_key(($.$mol_text.prototype), "Paragraph"));
	($mol_mem_key(($.$mol_text.prototype), "Quote"));
	($mol_mem_key(($.$mol_text.prototype), "List"));
	($mol_mem_key(($.$mol_text.prototype), "Header"));
	($mol_mem_key(($.$mol_text.prototype), "Pre"));
	($mol_mem_key(($.$mol_text.prototype), "Cut"));
	($mol_mem_key(($.$mol_text.prototype), "Table"));
	($mol_mem_key(($.$mol_text.prototype), "Table_row"));
	($mol_mem_key(($.$mol_text.prototype), "Table_cell"));
	($mol_mem_key(($.$mol_text.prototype), "Grid"));
	($mol_mem_key(($.$mol_text.prototype), "Grid_row"));
	($mol_mem_key(($.$mol_text.prototype), "Grid_cell"));
	($mol_mem_key(($.$mol_text.prototype), "String"));
	($mol_mem_key(($.$mol_text.prototype), "Span"));
	($mol_mem_key(($.$mol_text.prototype), "Code_line"));
	($mol_mem_key(($.$mol_text.prototype), "Link"));
	($mol_mem_key(($.$mol_text.prototype), "Link_http"));
	($mol_mem_key(($.$mol_text.prototype), "Embed"));
	($mol_mem_key(($.$mol_text.prototype), "Spoiler"));
	($.$mol_text_header) = class $mol_text_header extends ($.$mol_paragraph) {
		arg(){
			return {};
		}
		content(){
			return [];
		}
		Link(){
			const obj = new this.$.$mol_link();
			(obj.arg) = () => ((this.arg()));
			(obj.hint) = () => ((this.$.$mol_locale.text("$mol_text_header_Link_hint")));
			(obj.sub) = () => ((this.content()));
			return obj;
		}
		level(){
			return 1;
		}
		sub(){
			return [(this.Link())];
		}
	};
	($mol_mem(($.$mol_text_header.prototype), "Link"));
	($.$mol_text_span) = class $mol_text_span extends ($.$mol_paragraph) {
		type(){
			return "";
		}
		dom_name(){
			return "span";
		}
		attr(){
			return {...(super.attr()), "mol_text_type": (this.type())};
		}
	};


;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        /**
         * Markdown visualizer.
         * @see https://mol.hyoo.ru/#!section=demos/demo=mol_text_demo
         */
        class $mol_text extends $.$mol_text {
            flow_tokens() {
                const tokens = [];
                this.$.$mol_syntax2_md_flow.tokenize(this.text(), (name, found, chunks) => tokens.push({ name, found, chunks }));
                return tokens;
            }
            block_type(index) {
                return this.flow_tokens()[index].name;
            }
            rows() {
                return this.flow_tokens().map(({ name }, index) => {
                    switch (name) {
                        case 'quote': return this.Quote(index);
                        case 'spoiler': return this.Spoiler(index);
                        case 'header': return this.Header(index);
                        case 'list': return this.List(index);
                        case 'code': return this.Pre(index);
                        case 'code-indent': return this.Pre(index);
                        case 'table': return this.Table(index);
                        case 'grid': return this.Grid(index);
                        case 'cut': return this.Cut(index);
                        default: return this.Paragraph(index);
                    }
                });
            }
            param() {
                return this.toString().replace(/^.*?[\)>]\./, '').replace(/[(<>)]/g, '');
            }
            header_level(index) {
                return this.flow_tokens()[index].chunks[0].length;
            }
            header_arg(index) {
                return {
                    [this.param()]: this.block_text(index)
                };
            }
            list_type(index) {
                return this.flow_tokens()[index].chunks[1] ?? '';
            }
            item_index(index) {
                return this.flow_tokens().slice(0, index).filter(token => token.name === 'block').length + 1;
            }
            pre_text(index) {
                const token = this.flow_tokens()[index];
                return (token.chunks[2] ?? token.chunks[0].replace(/^(\t| (?:\+\+|--|\*\*|  ) )/gm, '')).replace(/[\n\r]*$/, '');
            }
            pre_themes(index) {
                const token = this.flow_tokens()[index];
                const names = {
                    ' ** ': '$mol_theme_accent',
                    ' ++ ': '$mol_theme_current',
                    ' -- ': '$mol_theme_special',
                };
                return token.chunks[0].split('\n')
                    .map(line => names[line.match(/^ (?:\+\+|--|\*\*|  ) /gm)?.[0] ?? ''] ?? null);
            }
            quote_text(index) {
                return this.flow_tokens()[index].chunks[0].replace(/^[>"] /mg, '');
            }
            list_text(index) {
                return this.flow_tokens()[index].chunks[0].replace(/^([-*+]|(?:\d+[\.\)])+) ?/mg, '').replace(/^  ?/mg, '');
            }
            cell_content(indexBlock) {
                return this.flow_tokens()[indexBlock].chunks[0]
                    .split(/\r?\n/g)
                    .filter(row => row && !/\|--/.test(row))
                    .map((row, rowId) => {
                    return row.split(/\|/g)
                        .filter(cell => cell)
                        .map((cell, cellId) => cell.trim());
                });
            }
            table_rows(blockId) {
                return this.cell_content(blockId)
                    .slice(1)
                    .map((row, rowId) => this.Table_row({ block: blockId, row: rowId + 1 }));
            }
            table_head_cells(blockId) {
                return this.cell_content(blockId)[0]
                    .map((cell, cellId) => this.Table_cell({ block: blockId, row: 0, cell: cellId }));
            }
            table_cells(id) {
                return this.cell_content(id.block)[id.row]
                    .map((cell, cellId) => this.Table_cell({ block: id.block, row: id.row, cell: cellId }));
            }
            table_cell_text(id) {
                return this.cell_content(id.block)[id.row][id.cell];
            }
            grid_content(indexBlock) {
                return [...this.flow_tokens()[indexBlock].chunks[0].match(/(?:^! .*?$\r?\n?)+(?:^ +! .*?$\r?\n?)*/gm)]
                    .map((row, rowId) => {
                    const cells = [];
                    for (const line of row.trim().split(/\r?\n/)) {
                        const [_, indent, content] = /^( *)! (.*)/.exec(line);
                        const col = Math.ceil(indent.length / 2);
                        cells[col] = (cells[col] ? cells[col] + '\n' : '') + content;
                    }
                    return cells;
                });
            }
            grid_rows(blockId) {
                return this.grid_content(blockId)
                    .map((row, rowId) => this.Grid_row({ block: blockId, row: rowId }));
            }
            grid_cells(id) {
                return this.grid_content(id.block)[id.row]
                    .map((cell, cellId) => this.Grid_cell({ block: id.block, row: id.row, cell: cellId }));
            }
            grid_cell_text(id) {
                return this.grid_content(id.block)[id.row][id.cell];
            }
            uri_base() {
                return $mol_dom_context.document.location.href;
            }
            uri_base_abs() {
                return new URL(this.uri_base(), $mol_dom_context.document.location.href);
            }
            uri_resolve(uri) {
                if (/^(\w+script+:)+/.test(uri))
                    return null;
                if (/^#\!/.test(uri)) {
                    const params = {};
                    for (const chunk of uri.slice(2).split(this.$.$mol_state_arg.separator)) {
                        if (!chunk)
                            continue;
                        const vals = chunk.split('=').map(decodeURIComponent);
                        params[vals.shift()] = vals.join('=');
                    }
                    return this.$.$mol_state_arg.link(params);
                }
                try {
                    const url = new URL(uri, this.uri_base_abs());
                    return url.toString();
                }
                catch (error) {
                    $mol_fail_log(error);
                    return null;
                }
            }
            code_syntax() {
                return this.$.$mol_syntax2_md_code;
            }
            block_text(index) {
                const token = this.flow_tokens()[index];
                switch (token.name) {
                    case 'header': return token.chunks[2];
                    default: return token.chunks[0];
                }
            }
            block_content(index) {
                return this.line_content([index]);
            }
            line_tokens(path) {
                const tokens = [];
                this.$.$mol_syntax2_md_line.tokenize(this.line_text(path), (name, found, chunks) => tokens.push({ name, found, chunks }));
                return tokens;
            }
            line_token(path) {
                const tokens = this.line_tokens(path.slice(0, path.length - 1));
                return tokens[path[path.length - 1]];
            }
            line_type(path) {
                return this.line_token(path).name;
            }
            line_text(path) {
                if (path.length === 1)
                    return this.block_text(path[0]);
                const { name, found, chunks } = this.line_token(path);
                switch (name) {
                    case 'link': return chunks[0] || chunks[1].replace(/^.*?\/\/|\/.*$/g, '');
                    case 'text-link': return chunks[0] || chunks[1].replace(/^.*?\/\/|\/.*$/g, '');
                    default: return (chunks[0] || chunks[1] || chunks[2]) ?? found;
                }
            }
            line_content(path) {
                return this.line_tokens(path).map(({ name, chunks }, index) => {
                    const path2 = [...path, index];
                    switch (name) {
                        case 'embed': return this.Embed(path2);
                        case 'link': return this.Link(path2);
                        case 'text-link-http': return this.Link_http(path2);
                        case 'text-link': return this.Link(path2);
                        case 'image-link': return this.Embed(path2);
                        case 'code': return this.Code_line(path2);
                        case '': return this.String(path2);
                        default: return this.Span(path2);
                    }
                });
            }
            link_uri(path) {
                const token = this.line_token(path);
                const uri = this.uri_resolve(token.chunks[1] ?? token.found);
                if (!uri)
                    throw new Error('Bad link');
                return uri;
            }
            link_host(path) {
                return this.link_uri(path).replace(/^.*?\/\/|\/.*$/g, '');
            }
            auto_scroll() {
                for (const [index, token] of this.flow_tokens().entries()) {
                    if (token.name !== 'header')
                        continue;
                    const header = this.Header(index);
                    if (!header.Link().current())
                        continue;
                    new $mol_after_tick(() => this.ensure_visible(header));
                }
            }
            spoiler_rows(index) {
                return this.flow_tokens()[index].chunks[0].replace(/^[\?] /mg, '').split('\n');
            }
            spoiler_label(index) {
                return this.spoiler_rows(index)[0];
            }
            spoiler_content(index) {
                return this.spoiler_rows(index).slice(1).join('\n');
            }
        }
        __decorate([
            $mol_mem
        ], $mol_text.prototype, "flow_tokens", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "block_type", null);
        __decorate([
            $mol_mem
        ], $mol_text.prototype, "rows", null);
        __decorate([
            $mol_mem
        ], $mol_text.prototype, "param", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "header_level", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "header_arg", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "pre_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "pre_themes", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "quote_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "list_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "cell_content", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "table_rows", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "table_head_cells", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "table_cells", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "table_cell_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "grid_content", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "grid_rows", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "grid_cells", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "grid_cell_text", null);
        __decorate([
            $mol_mem
        ], $mol_text.prototype, "uri_base_abs", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "uri_resolve", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "block_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "line_tokens", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "line_token", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "line_type", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "line_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "line_content", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "link_uri", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "link_host", null);
        __decorate([
            $mol_mem
        ], $mol_text.prototype, "auto_scroll", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "spoiler_rows", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "spoiler_label", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "spoiler_content", null);
        $$.$mol_text = $mol_text;
        class $mol_text_header extends $.$mol_text_header {
            dom_name() {
                return 'h' + this.level();
            }
        }
        $$.$mol_text_header = $mol_text_header;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/text/text/text.view.css", "[mol_text] {\n\tline-height: 1.5em;\n\tbox-sizing: border-box;\n\tborder-radius: var(--mol_gap_round);\n\twhite-space: pre-line;\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex: 0 0 auto;\n\ttab-size: 4;\n}\n\n[mol_text_paragraph] {\n\tpadding: var(--mol_gap_text);\n\toverflow: auto;\n\toverflow-x: overlay;\n\tmax-width: 100%;\n\tdisplay: block;\n\tmax-width: 60rem;\n\tbreak-inside: avoid;\n}\n\n[mol_text_spoiler_label_paragraph] {\n\tpadding: 0;\n}\n\n[mol_text_span] {\n\tdisplay: inline;\n}\n\n[mol_text_string] {\n\tdisplay: inline;\n\tflex: 0 1 auto;\n\twhite-space: normal;\n}\n\n[mol_text_quote] {\n\tmargin: var(--mol_gap_block);\n\tpadding: var(--mol_gap_block);\n\tbackground: var(--mol_theme_card);\n\tbox-shadow: 0 0 0 1px var(--mol_theme_back);\n\tbreak-inside: avoid;\n}\n\n[mol_text_header] {\n\tdisplay: block;\n\ttext-shadow: 0 0;\n\tfont-weight: normal;\n\tbreak-after: avoid;\n\tletter-spacing: 2px;\n}\n\n* + [mol_text_header] {\n\tmargin-top: 0.75rem;\n}\n\nh1[mol_text_header] {\n\tfont-size: 1.5rem;\n}\n\nh2[mol_text_header] {\n\tfont-size: 1.5rem;\n\tfont-style: italic;\n}\n\nh3[mol_text_header] {\n\tfont-size: 1.25rem;\n}\n\nh4[mol_text_header] {\n\tfont-size: 1.25em;\n\tfont-style: italic;\n}\n\nh5[mol_text_header] {\n\tfont-size: 1rem;\n}\n\nh6[mol_text_header] {\n\tfont-size: 1rem;\n\tfont-style: italic;\n}\n\n[mol_text_header_link] {\n\tcolor: inherit;\n}\n\n[mol_text_table] {\n\tbreak-inside: avoid;\n}\n\n[mol_text_table_cell] {\n\twidth: auto;\n\tdisplay: table-cell;\n\tvertical-align: baseline;\n\tpadding: 0;\n\tborder-radius: 0;\n}\n\n[mol_text_grid] {\n\tbreak-inside: avoid;\n}\n\n[mol_text_grid_cell] {\n\twidth: auto;\n\tdisplay: table-cell;\n\tvertical-align: top;\n\tpadding: 0;\n\tborder-radius: 0;\n}\n\n[mol_text_cut] {\n\tborder: none;\n\twidth: 100%;\n\tbox-shadow: 0 0 0 1px var(--mol_theme_line);\n}\n\n[mol_text_link_http],\n[mol_text_link] {\n\tpadding: 0;\n\tdisplay: inline;\n\twhite-space: nowrap;\n}\n\n[mol_text_link_icon] + [mol_text_embed] {\n\tmargin-inline-start: -1.5rem;\n}\n\n[mol_text_embed_youtube] {\n\tdisplay: inline;\n}\n\n[mol_text_embed_youtube_image],\n[mol_text_embed_youtube_frame],\n[mol_text_embed_object] {\n\tobject-fit: contain;\n\tobject-position: center;\n\twidth: 100vw;\n\tmax-height: calc( 100vh - 6rem );\n}\n[mol_text_embed_object_fallback] {\n\tpadding: 0;\n}\n[mol_text_embed_image] {\n\tobject-fit: contain;\n\tobject-position: center;\n\tdisplay: inline;\n\t/* max-height: calc( 100vh - 6rem ); */\n\tvertical-align: top;\n}\n\n[mol_text_pre] {\n\twhite-space: pre;\n\toverflow-x: auto;\n\toverflow-x: overlay;\n\ttab-size: 2;\n\tbreak-inside: avoid;\n}\n\n[mol_text_code_line] {\n\tdisplay: inline-block;\n}\n\n[mol_text_type=\"strong\"] {\n\ttext-shadow: 0 0;\n\tfilter: contrast(1.5);\n}\n\n[mol_text_type=\"emphasis\"] {\n\tfont-style: italic;\n}\n\n[mol_text_type=\"insert\"] {\n\tcolor: var(--mol_theme_special);\n}\n\n[mol_text_type=\"delete\"] {\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_text_type=\"remark\"] {\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_text_type=\"quote\"] {\n\tfont-style: italic;\n}\n");
})($ || ($ = {}));

;
	($.$mol_ghost) = class $mol_ghost extends ($.$mol_view) {
		Sub(){
			const obj = new this.$.$mol_view();
			return obj;
		}
	};
	($mol_mem(($.$mol_ghost.prototype), "Sub"));


;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        /**
         * Mixin view logic to DOM node of another component.
         */
        class $mol_ghost extends $.$mol_ghost {
            dom_node_external(next) {
                return this.Sub().dom_node(next);
            }
            dom_node_actual() {
                this.dom_node();
                const node = this.Sub().dom_node_actual();
                const attr = this.attr();
                const style = this.style();
                const fields = this.field();
                $mol_dom_render_attributes(node, attr);
                $mol_dom_render_styles(node, style);
                $mol_dom_render_fields(node, fields);
                return node;
            }
            dom_tree() {
                const Sub = this.Sub();
                const node = Sub.dom_tree();
                try {
                    this.dom_node_actual();
                    this.auto();
                }
                catch (error) {
                    $mol_fail_log(error);
                }
                return node;
            }
            title() {
                return this.Sub().title();
            }
            minimal_width() {
                return this.Sub().minimal_width();
            }
            minimal_height() {
                return this.Sub().minimal_height();
            }
        }
        __decorate([
            $mol_mem
        ], $mol_ghost.prototype, "dom_node_actual", null);
        $$.$mol_ghost = $mol_ghost;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_follower) = class $mol_follower extends ($.$mol_ghost) {
		transform(){
			return "";
		}
		Anchor(){
			const obj = new this.$.$mol_view();
			return obj;
		}
		align(){
			return [-.5, -.5];
		}
		offset(){
			return [0, 0];
		}
		style(){
			return {...(super.style()), "transform": (this.transform())};
		}
	};
	($mol_mem(($.$mol_follower.prototype), "Anchor"));


;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        /**
         * Marker on top of another component with tracking of its position.
         */
        class $mol_follower extends $.$mol_follower {
            pos() {
                const self_rect = this.view_rect();
                const prev = $mol_wire_probe(() => this.pos());
                const anchor_rect = this.Anchor()?.view_rect();
                if (!anchor_rect)
                    return null;
                const offset = this.offset();
                const align = this.align();
                const left = Math.floor((prev?.left ?? 0)
                    - (self_rect?.left ?? 0)
                    + (self_rect?.width ?? 0) * align[0]
                    + (anchor_rect?.left ?? 0)
                    + offset[0] * (anchor_rect?.width ?? 0));
                const top = Math.floor((prev?.top ?? 0)
                    - (self_rect?.top ?? 0)
                    + (self_rect?.height ?? 0) * align[1]
                    + (anchor_rect?.top ?? 0)
                    + offset[1] * (anchor_rect?.height ?? 0));
                return { left, top };
            }
            transform() {
                const pos = this.pos();
                if (!pos)
                    return 'scale(0)';
                const { left, top } = pos;
                return `translate( ${left}px, ${top}px )`;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_follower.prototype, "pos", null);
        __decorate([
            $mol_mem
        ], $mol_follower.prototype, "transform", null);
        $$.$mol_follower = $mol_follower;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/follower/follower.view.css", "[mol_follower] {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\ttransition: none;\n}\n");
})($ || ($ = {}));

;
	($.$mol_pop) = class $mol_pop extends ($.$mol_view) {
		bubble(){
			return null;
		}
		Anchor(){
			return null;
		}
		bubble_offset(){
			return [0, 1];
		}
		bubble_align(){
			return [0, 0];
		}
		bubble_content(){
			return [];
		}
		height_max(){
			return 9999;
		}
		Bubble(){
			const obj = new this.$.$mol_pop_bubble();
			(obj.content) = () => ((this.bubble_content()));
			(obj.height_max) = () => ((this.height_max()));
			return obj;
		}
		Follower(){
			const obj = new this.$.$mol_follower();
			(obj.offset) = () => ((this.bubble_offset()));
			(obj.align) = () => ((this.bubble_align()));
			(obj.Anchor) = () => ((this.Anchor()));
			(obj.Sub) = () => ((this.Bubble()));
			return obj;
		}
		showed(next){
			if(next !== undefined) return next;
			return false;
		}
		align_vert(){
			return "";
		}
		align_hor(){
			return "";
		}
		align(){
			return "bottom_center";
		}
		prefer(){
			return "vert";
		}
		auto(){
			return [(this.bubble())];
		}
		sub(){
			return [(this.Anchor())];
		}
		sub_visible(){
			return [(this.Anchor()), (this.Follower())];
		}
	};
	($mol_mem(($.$mol_pop.prototype), "Bubble"));
	($mol_mem(($.$mol_pop.prototype), "Follower"));
	($mol_mem(($.$mol_pop.prototype), "showed"));
	($.$mol_pop_bubble) = class $mol_pop_bubble extends ($.$mol_view) {
		content(){
			return [];
		}
		height_max(){
			return 9999;
		}
		sub(){
			return (this.content());
		}
		style(){
			return {...(super.style()), "maxHeight": (this.height_max())};
		}
		attr(){
			return {
				...(super.attr()), 
				"tabindex": 0, 
				"popover": "manual"
			};
		}
	};


;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        /**
         * `Bubble` that can be shown anchored to `Anchor` element.
         * @see https://mol.hyoo.ru/#!section=demos/demo=mol_pop_demo
         */
        class $mol_pop extends $.$mol_pop {
            showed(next = false) {
                this.focused();
                return next;
            }
            sub_visible() {
                return [
                    this.Anchor(),
                    ...this.showed() ? [this.Follower()] : [],
                ];
            }
            height_max() {
                const viewport = this.$.$mol_window.size();
                const rect_bubble = this.view_rect();
                const align = this.align_vert();
                if (align === 'bottom')
                    return (viewport.height - rect_bubble.bottom);
                if (align === 'top')
                    return rect_bubble.top;
                return 0;
            }
            align() {
                switch (this.prefer()) {
                    case 'hor': return `${this.align_hor()}_${this.align_vert()}`;
                    case 'vert': return `${this.align_vert()}_${this.align_hor()}`;
                    default: return this.prefer();
                }
            }
            align_vert() {
                const rect_pop = this.view_rect();
                if (!rect_pop)
                    return 'suspense';
                const viewport = this.$.$mol_window.size();
                return rect_pop.top > viewport.height / 2 ? 'top' : 'bottom';
            }
            align_hor() {
                const rect_pop = this.view_rect();
                if (!rect_pop)
                    return 'suspense';
                const viewport = this.$.$mol_window.size();
                return rect_pop.left > viewport.width / 2 ? 'left' : 'right';
            }
            bubble_offset() {
                const tags = new Set(this.align().split('_'));
                if (tags.has('suspense'))
                    return [0, 0];
                const hor = tags.has('right') ? 'right' : tags.has('left') ? 'left' : 'center';
                const vert = tags.has('bottom') ? 'bottom' : tags.has('top') ? 'top' : 'center';
                if ([...tags][0] === hor) {
                    return [
                        { left: 0, center: .5, right: 1 }[hor],
                        { top: 1, center: .5, bottom: 0 }[vert],
                    ];
                }
                else {
                    return [
                        { left: 1, center: .5, right: 0 }[hor],
                        { top: 0, center: .5, bottom: 1 }[vert],
                    ];
                }
            }
            bubble_align() {
                const tags = new Set(this.align().split('_'));
                if (tags.has('suspense'))
                    return [-.5, -.5];
                const hor = tags.has('right') ? 'right' : tags.has('left') ? 'left' : 'center';
                const vert = tags.has('bottom') ? 'bottom' : tags.has('top') ? 'top' : 'center';
                return [
                    { left: -1, center: -.5, right: 0, suspense: -.5 }[hor],
                    { top: -1, center: -.5, bottom: 0, suspense: -.5 }[vert],
                ];
            }
            bubble() {
                if (!this.showed())
                    return;
                this.Bubble().dom_node().showPopover?.();
            }
        }
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "showed", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "sub_visible", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "height_max", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "align", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "align_vert", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "align_hor", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "bubble_offset", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "bubble_align", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "bubble", null);
        $$.$mol_pop = $mol_pop;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/pop/pop.view.css", "@keyframes mol_pop_show {\n\tfrom {\n\t\topacity: 0;\n\t}\n}\n\n[mol_pop] {\n\tposition: relative;\n\tdisplay: inline-flex;\n}\n\n[mol_pop_bubble] {\n\tborder: none;\n\tpadding: 0;\n\tcolor: var(--mol_theme_text);\n\tbox-shadow: 0 0 1rem hsla(0,0%,0%,.5);\n\tborder-radius: var(--mol_gap_round);\n\tposition: fixed;\n\tz-index: var(--mol_layer_popup);\n\tbackground: var(--mol_theme_back);\n\tmax-width: none;\n\tmax-height: none;\n\t/* overflow: hidden;\n\toverflow-y: scroll;\n\toverflow-y: overlay; */\n\tword-break: normal;\n\twidth: max-content;\n\t/* height: max-content; */\n\tflex-direction: column;\n\tmax-width: calc( 100vw - var(--mol_gap_page) );\n\tmax-height: 80vw;\n\tcontain: paint;\n\ttransition-property: opacity;\n\t/* Safari ios layer fix, https://t.me/mam_mol/170017 */\n\ttransform: translateZ(0);\n\tanimation: mol_pop_show .1s ease-in;\n}\n\n:where( [mol_pop_bubble] > * ) {\n\tbackground: var(--mol_theme_card);\n}\n\n[mol_pop_bubble][mol_scroll] {\n\tbackground: var(--mol_theme_back);\n}\n\n[mol_pop_bubble]:focus {\n\toutline: none;\n}\n");
})($ || ($ = {}));

;
	($.$mol_pick) = class $mol_pick extends ($.$mol_pop) {
		keydown(next){
			if(next !== undefined) return next;
			return null;
		}
		trigger_enabled(){
			return true;
		}
		clicks(next){
			if(next !== undefined) return next;
			return null;
		}
		trigger_content(){
			return [(this.title())];
		}
		hint(){
			return "";
		}
		Trigger(){
			const obj = new this.$.$mol_check();
			(obj.minimal_width) = () => (40);
			(obj.minimal_height) = () => (40);
			(obj.enabled) = () => ((this.trigger_enabled()));
			(obj.checked) = (next) => ((this.showed(next)));
			(obj.clicks) = (next) => ((this.clicks(next)));
			(obj.sub) = () => ((this.trigger_content()));
			(obj.hint) = () => ((this.hint()));
			return obj;
		}
		event(){
			return {...(super.event()), "keydown": (next) => (this.keydown(next))};
		}
		Anchor(){
			return (this.Trigger());
		}
	};
	($mol_mem(($.$mol_pick.prototype), "keydown"));
	($mol_mem(($.$mol_pick.prototype), "clicks"));
	($mol_mem(($.$mol_pick.prototype), "Trigger"));


;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        /**
         * Pop-up display and hide by mouse click, also hide by unfocus.
         * Based on [mol_pop](https://mol.hyoo.ru/#!section=demos/demo=mol_pop_demo) component.
         * @see https://mol.hyoo.ru/#!section=demos/demo=mol_pick_demo
         */
        class $mol_pick extends $.$mol_pick {
            keydown(event) {
                if (!this.trigger_enabled())
                    return;
                if (event.defaultPrevented)
                    return;
                if (event.keyCode === $mol_keyboard_code.escape) {
                    if (!this.showed())
                        return;
                    event.preventDefault();
                    this.showed(false);
                }
            }
        }
        $$.$mol_pick = $mol_pick;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/pick/pick.view.css", "[mol_pick_trigger] {\n\talign-items: center;\n\tflex-grow: 1;\n}\n");
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    /** Plugin is component without its own DOM element, but instead uses the owner DOM element */
    class $mol_plugin extends $mol_view {
        dom_node_external(next) {
            return next ?? $mol_owning_get(this).host.dom_node();
        }
        render() {
            this.dom_node_actual();
        }
    }
    $.$mol_plugin = $mol_plugin;
})($ || ($ = {}));

;
	($.$mol_nav) = class $mol_nav extends ($.$mol_plugin) {
		event_key(next){
			if(next !== undefined) return next;
			return null;
		}
		cycle(next){
			if(next !== undefined) return next;
			return false;
		}
		mod_ctrl(){
			return false;
		}
		mod_shift(){
			return false;
		}
		mod_alt(){
			return false;
		}
		keys_x(next){
			if(next !== undefined) return next;
			return [];
		}
		keys_y(next){
			if(next !== undefined) return next;
			return [];
		}
		current_x(next){
			if(next !== undefined) return next;
			return null;
		}
		current_y(next){
			if(next !== undefined) return next;
			return null;
		}
		event_up(next){
			if(next !== undefined) return next;
			return null;
		}
		event_down(next){
			if(next !== undefined) return next;
			return null;
		}
		event_left(next){
			if(next !== undefined) return next;
			return null;
		}
		event_right(next){
			if(next !== undefined) return next;
			return null;
		}
		event(){
			return {...(super.event()), "keydown": (next) => (this.event_key(next))};
		}
	};
	($mol_mem(($.$mol_nav.prototype), "event_key"));
	($mol_mem(($.$mol_nav.prototype), "cycle"));
	($mol_mem(($.$mol_nav.prototype), "keys_x"));
	($mol_mem(($.$mol_nav.prototype), "keys_y"));
	($mol_mem(($.$mol_nav.prototype), "current_x"));
	($mol_mem(($.$mol_nav.prototype), "current_y"));
	($mol_mem(($.$mol_nav.prototype), "event_up"));
	($mol_mem(($.$mol_nav.prototype), "event_down"));
	($mol_mem(($.$mol_nav.prototype), "event_left"));
	($mol_mem(($.$mol_nav.prototype), "event_right"));


;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        /**
         * Plugin which can navigate in list of items
         * @see https://mol.hyoo.ru/#!section=demos/demo=mol_nav_demo
         */
        class $mol_nav extends $.$mol_nav {
            event_key(event) {
                if (!event)
                    return event;
                if (event.defaultPrevented)
                    return;
                if (this.mod_ctrl() && !event.ctrlKey)
                    return;
                if (this.mod_shift() && !event.shiftKey)
                    return;
                if (this.mod_alt() && !event.altKey)
                    return;
                switch (event.keyCode) {
                    case $mol_keyboard_code.up: return this.event_up(event);
                    case $mol_keyboard_code.down: return this.event_down(event);
                    case $mol_keyboard_code.left: return this.event_left(event);
                    case $mol_keyboard_code.right: return this.event_right(event);
                    case $mol_keyboard_code.pageUp: return this.event_up(event);
                    case $mol_keyboard_code.pageDown: return this.event_down(event);
                }
            }
            event_up(event) {
                if (!event)
                    return event;
                const keys = this.keys_y();
                if (keys.length < 1)
                    return;
                const index_y = this.index_y();
                const index_old = index_y === null ? 0 : index_y;
                const index_new = (index_old + keys.length - 1) % keys.length;
                event.preventDefault();
                if (index_old === 0 && !this.cycle())
                    return;
                this.current_y(this.keys_y()[index_new]);
            }
            event_down(event) {
                if (!event)
                    return event;
                const keys = this.keys_y();
                if (keys.length < 1)
                    return;
                const index_y = this.index_y();
                const index_old = index_y === null ? keys.length - 1 : index_y;
                const index_new = (index_old + 1) % keys.length;
                event.preventDefault();
                if (index_new === 0 && !this.cycle())
                    return;
                this.current_y(this.keys_y()[index_new]);
            }
            event_left(event) {
                if (!event)
                    return event;
                const keys = this.keys_x();
                if (keys.length < 1)
                    return;
                const index_x = this.index_x();
                const index_old = index_x === null ? 0 : index_x;
                const index_new = (index_old + keys.length - 1) % keys.length;
                event.preventDefault();
                if (index_old === 0 && !this.cycle())
                    return;
                this.current_x(this.keys_x()[index_new]);
            }
            event_right(event) {
                if (!event)
                    return event;
                const keys = this.keys_x();
                if (keys.length < 1)
                    return;
                const index_x = this.index_x();
                const index_old = index_x === null ? keys.length - 1 : index_x;
                const index_new = (index_old + 1) % keys.length;
                event.preventDefault();
                if (index_new === 0 && !this.cycle())
                    return;
                this.current_x(this.keys_x()[index_new]);
            }
            index_y() {
                let index = this.keys_y().indexOf(this.current_y());
                if (index < 0)
                    return null;
                return index;
            }
            index_x() {
                let index = this.keys_x().indexOf(this.current_x());
                if (index < 0)
                    return null;
                return index;
            }
        }
        $$.$mol_nav = $mol_nav;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_hotkey) = class $mol_hotkey extends ($.$mol_plugin) {
		keydown(next){
			if(next !== undefined) return next;
			return null;
		}
		event(){
			return {...(super.event()), "keydown": (next) => (this.keydown(next))};
		}
		key(){
			return {};
		}
		mod_ctrl(){
			return false;
		}
		mod_alt(){
			return false;
		}
		mod_shift(){
			return false;
		}
	};
	($mol_mem(($.$mol_hotkey.prototype), "keydown"));


;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        /**
         * Plugin which adds handlers for keyboard keys.
         * @see [mol_keyboard_code](../keyboard/code/code.ts)
         */
        class $mol_hotkey extends $.$mol_hotkey {
            key() {
                return super.key();
            }
            keydown(event) {
                if (!event)
                    return;
                if (event.defaultPrevented)
                    return;
                let name = $mol_keyboard_code[event.keyCode];
                if (this.mod_ctrl() !== (event.ctrlKey || event.metaKey))
                    return;
                if (this.mod_alt() !== event.altKey)
                    return;
                if (this.mod_shift() !== event.shiftKey)
                    return;
                const handle = this.key()[name];
                if (handle)
                    handle(event);
            }
        }
        $$.$mol_hotkey = $mol_hotkey;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_string) = class $mol_string extends ($.$mol_view) {
		selection_watcher(){
			return null;
		}
		error_report(){
			return null;
		}
		disabled(){
			return false;
		}
		value(next){
			if(next !== undefined) return next;
			return "";
		}
		value_changed(next){
			return (this.value(next));
		}
		hint(){
			return "";
		}
		hint_visible(){
			return (this.hint());
		}
		spellcheck(){
			return true;
		}
		autocomplete_native(){
			return "";
		}
		selection_end(){
			return 0;
		}
		selection_start(){
			return 0;
		}
		keyboard(){
			return "text";
		}
		enter(){
			return "go";
		}
		length_max(){
			return +Infinity;
		}
		type(next){
			if(next !== undefined) return next;
			return "text";
		}
		event_change(next){
			if(next !== undefined) return next;
			return null;
		}
		submit_with_ctrl(){
			return false;
		}
		submit(next){
			if(next !== undefined) return next;
			return null;
		}
		Submit(){
			const obj = new this.$.$mol_hotkey();
			(obj.mod_ctrl) = () => ((this.submit_with_ctrl()));
			(obj.key) = () => ({"enter": (next) => (this.submit(next))});
			return obj;
		}
		dom_name(){
			return "input";
		}
		enabled(){
			return true;
		}
		minimal_height(){
			return 40;
		}
		autocomplete(){
			return false;
		}
		selection(next){
			if(next !== undefined) return next;
			return [0, 0];
		}
		auto(){
			return [(this.selection_watcher()), (this.error_report())];
		}
		field(){
			return {
				...(super.field()), 
				"disabled": (this.disabled()), 
				"value": (this.value_changed()), 
				"placeholder": (this.hint_visible()), 
				"spellcheck": (this.spellcheck()), 
				"autocomplete": (this.autocomplete_native()), 
				"selectionEnd": (this.selection_end()), 
				"selectionStart": (this.selection_start()), 
				"inputMode": (this.keyboard()), 
				"enterkeyhint": (this.enter())
			};
		}
		attr(){
			return {
				...(super.attr()), 
				"maxlength": (this.length_max()), 
				"type": (this.type())
			};
		}
		event(){
			return {...(super.event()), "input": (next) => (this.event_change(next))};
		}
		plugins(){
			return [(this.Submit())];
		}
	};
	($mol_mem(($.$mol_string.prototype), "value"));
	($mol_mem(($.$mol_string.prototype), "type"));
	($mol_mem(($.$mol_string.prototype), "event_change"));
	($mol_mem(($.$mol_string.prototype), "submit"));
	($mol_mem(($.$mol_string.prototype), "Submit"));
	($mol_mem(($.$mol_string.prototype), "selection"));


;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        /**
         * An input field for entering single line text.
         * @see https://mol.hyoo.ru/#!section=demos/demo=mol_string_demo
         */
        class $mol_string extends $.$mol_string {
            event_change(next) {
                if (!next)
                    return;
                const el = this.dom_node();
                const from = el.selectionStart;
                const to = el.selectionEnd;
                try {
                    el.value = this.value_changed(el.value);
                }
                catch (error) {
                    const el = this.dom_node();
                    if (error instanceof Error) {
                        el.setCustomValidity(error.message);
                        el.reportValidity();
                    }
                    $mol_fail_hidden(error);
                }
                if (to === null)
                    return;
                el.selectionEnd = to;
                el.selectionStart = from;
                this.selection_change(next);
            }
            error_report() {
                try {
                    if (this.focused())
                        this.value();
                }
                catch (error) {
                    const el = this.dom_node();
                    if (error instanceof Error) {
                        el.setCustomValidity(error.message);
                        el.reportValidity();
                    }
                }
            }
            hint_visible() {
                return (this.enabled() ? this.hint() : '') || ' ';
            }
            disabled() {
                return !this.enabled();
            }
            autocomplete_native() {
                return this.autocomplete() ? 'on' : 'off';
            }
            selection_watcher() {
                return new $mol_dom_listener(this.$.$mol_dom_context.document, 'selectionchange', $mol_wire_async(event => this.selection_change(event)));
            }
            selection_change(event) {
                const el = this.dom_node();
                if (el !== this.$.$mol_dom_context.document.activeElement)
                    return;
                const [from, to] = this.selection([
                    el.selectionStart,
                    el.selectionEnd,
                ]);
                el.selectionEnd = to;
                el.selectionStart = from;
                if (to !== from && el.selectionEnd === el.selectionStart) {
                    el.selectionEnd = to;
                }
            }
            selection_start() {
                const el = this.dom_node();
                if (!this.focused())
                    return undefined;
                if (el.selectionStart == null)
                    return undefined;
                return this.selection()[0];
            }
            selection_end() {
                const el = this.dom_node();
                if (!this.focused())
                    return undefined;
                if (el.selectionEnd == null)
                    return undefined;
                return this.selection()[1];
            }
        }
        __decorate([
            $mol_action
        ], $mol_string.prototype, "event_change", null);
        __decorate([
            $mol_mem
        ], $mol_string.prototype, "error_report", null);
        __decorate([
            $mol_mem
        ], $mol_string.prototype, "selection_watcher", null);
        $$.$mol_string = $mol_string;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/string/string.view.css", "[mol_string] {\n\tbox-sizing: border-box;\n\toutline-offset: 0;\n\tborder: none;\n\tborder-radius: var(--mol_gap_round);\n\twhite-space: pre-line;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\tpadding: var(--mol_gap_text);\n\ttext-align: start;\n\tposition: relative;\n\tfont: inherit;\n\tflex: 1 1 auto;\n\tbackground: transparent;\n\tmin-width: 0;\n\tcolor: inherit;\n\tbackground: var(--mol_theme_field);\n}\n\n[mol_string]:disabled:not(:placeholder-shown) {\n\tbackground-color: transparent;\n\tcolor: var(--mol_theme_text);\n}\n\n[mol_string]:where(:not(:disabled)) {\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_line);\n}\n\n[mol_string]:where(:not(:disabled)):hover {\n\tbox-shadow: inset 0 0 0 2px var(--mol_theme_line);\n\tz-index: var(--mol_layer_hover);\n}\n\n[mol_string]:focus {\n\toutline: none;\n\tz-index: var(--mol_layer_focus);\n\tcolor: var(--mol_theme_text);\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_focus);\n}\n\n[mol_string]::placeholder {\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_string]::-ms-clear {\n\tdisplay: none;\n}\n");
})($ || ($ = {}));

;
	($.$mol_icon_close) = class $mol_icon_close extends ($.$mol_icon) {
		path(){
			return "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z";
		}
	};


;
"use strict";


;
	($.$mol_search) = class $mol_search extends ($.$mol_pop) {
		clear(next){
			if(next !== undefined) return next;
			return null;
		}
		Hotkey(){
			const obj = new this.$.$mol_hotkey();
			(obj.key) = () => ({"escape": (next) => (this.clear(next))});
			return obj;
		}
		nav_components(){
			return [];
		}
		nav_focused(next){
			if(next !== undefined) return next;
			return null;
		}
		Nav(){
			const obj = new this.$.$mol_nav();
			(obj.keys_y) = () => ((this.nav_components()));
			(obj.current_y) = (next) => ((this.nav_focused(next)));
			return obj;
		}
		suggests_showed(next){
			if(next !== undefined) return next;
			return false;
		}
		query(next){
			if(next !== undefined) return next;
			return "";
		}
		hint(){
			return (this.$.$mol_locale.text("$mol_search_hint"));
		}
		submit(next){
			if(next !== undefined) return next;
			return null;
		}
		enabled(){
			return true;
		}
		keyboard(){
			return "search";
		}
		enter(){
			return "search";
		}
		bring(){
			return (this.Query().bring());
		}
		Query(){
			const obj = new this.$.$mol_string();
			(obj.value) = (next) => ((this.query(next)));
			(obj.hint) = () => ((this.hint()));
			(obj.submit) = (next) => ((this.submit(next)));
			(obj.enabled) = () => ((this.enabled()));
			(obj.keyboard) = () => ((this.keyboard()));
			(obj.enter) = () => ((this.enter()));
			return obj;
		}
		Clear_icon(){
			const obj = new this.$.$mol_icon_close();
			return obj;
		}
		Clear(){
			const obj = new this.$.$mol_button_minor();
			(obj.hint) = () => ((this.$.$mol_locale.text("$mol_search_Clear_hint")));
			(obj.enabled) = () => ((this.enabled()));
			(obj.click) = (next) => ((this.clear(next)));
			(obj.sub) = () => ([(this.Clear_icon())]);
			return obj;
		}
		anchor_content(){
			return [(this.Query()), (this.Clear())];
		}
		menu_items(){
			return [];
		}
		Menu(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ((this.menu_items()));
			return obj;
		}
		Bubble_pane(){
			const obj = new this.$.$mol_scroll();
			(obj.sub) = () => ([(this.Menu())]);
			return obj;
		}
		suggest_select(id, next){
			if(next !== undefined) return next;
			return null;
		}
		suggest_label(id){
			return "";
		}
		Suggest_label(id){
			const obj = new this.$.$mol_dimmer();
			(obj.haystack) = () => ((this.suggest_label(id)));
			(obj.needle) = () => ((this.query()));
			return obj;
		}
		suggest_content(id){
			return [(this.Suggest_label(id))];
		}
		suggests(){
			return [];
		}
		plugins(){
			return [
				...(super.plugins()), 
				(this.Hotkey()), 
				(this.Nav())
			];
		}
		showed(next){
			return (this.suggests_showed(next));
		}
		align_hor(){
			return "right";
		}
		Anchor(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ((this.anchor_content()));
			return obj;
		}
		bubble_content(){
			return [(this.Bubble_pane())];
		}
		Suggest(id){
			const obj = new this.$.$mol_button_minor();
			(obj.click) = (next) => ((this.suggest_select(id, next)));
			(obj.sub) = () => ((this.suggest_content(id)));
			return obj;
		}
	};
	($mol_mem(($.$mol_search.prototype), "clear"));
	($mol_mem(($.$mol_search.prototype), "Hotkey"));
	($mol_mem(($.$mol_search.prototype), "nav_focused"));
	($mol_mem(($.$mol_search.prototype), "Nav"));
	($mol_mem(($.$mol_search.prototype), "suggests_showed"));
	($mol_mem(($.$mol_search.prototype), "query"));
	($mol_mem(($.$mol_search.prototype), "submit"));
	($mol_mem(($.$mol_search.prototype), "Query"));
	($mol_mem(($.$mol_search.prototype), "Clear_icon"));
	($mol_mem(($.$mol_search.prototype), "Clear"));
	($mol_mem(($.$mol_search.prototype), "Menu"));
	($mol_mem(($.$mol_search.prototype), "Bubble_pane"));
	($mol_mem_key(($.$mol_search.prototype), "suggest_select"));
	($mol_mem_key(($.$mol_search.prototype), "Suggest_label"));
	($mol_mem(($.$mol_search.prototype), "Anchor"));
	($mol_mem_key(($.$mol_search.prototype), "Suggest"));


;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        /**
         * Search input with suggest and clear button.
         * @see https://mol.hyoo.ru/#!section=demos/demo=mol_search_demo
         */
        class $mol_search extends $.$mol_search {
            anchor_content() {
                return [
                    this.Query(),
                    ...this.query() ? [this.Clear()] : [],
                ];
            }
            suggests_showed(next = true) {
                this.query();
                if (!this.focused())
                    return false;
                return next;
            }
            suggest_selected(next) {
                if (next === undefined)
                    return;
                this.query(next);
                this.Query().focused(true);
            }
            nav_components() {
                return [
                    this.Query(),
                    ...this.menu_items(),
                ];
            }
            nav_focused(component) {
                if (!this.focused())
                    return null;
                if (component == null) {
                    for (let comp of this.nav_components()) {
                        if (comp && comp.focused())
                            return comp;
                    }
                    return null;
                }
                if (this.suggests_showed()) {
                    this.ensure_visible(component, "center");
                    component.focused(true);
                }
                return component;
            }
            suggest_label(key) {
                return key;
            }
            menu_items() {
                return this.suggests().map((suggest) => this.Suggest(suggest));
            }
            suggest_select(id, event) {
                this.query(id);
                this.Query().selection([id.length, id.length]);
                this.Query().focused(true);
            }
            clear(event) {
                this.query('');
            }
        }
        __decorate([
            $mol_mem
        ], $mol_search.prototype, "anchor_content", null);
        __decorate([
            $mol_mem
        ], $mol_search.prototype, "suggests_showed", null);
        __decorate([
            $mol_mem
        ], $mol_search.prototype, "nav_focused", null);
        __decorate([
            $mol_mem
        ], $mol_search.prototype, "menu_items", null);
        $$.$mol_search = $mol_search;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/search/search.view.css", "[mol_search] {\n\talign-self: flex-start;\n\tflex: auto;\n}\n\n[mol_search_anchor] {\n\tflex: 1 1 auto;\n}\n\n[mol_search_query] {\n\tflex-grow: 1;\n}\n\n[mol_search_menu] {\n\tmin-height: .75rem;\n\tdisplay: flex;\n}\n\n[mol_search_suggest] {\n\ttext-align: start;\n}\n\n[mol_search_suggest_label_high] {\n\tcolor: var(--mol_theme_shade);\n\ttext-shadow: none;\n}\n");
})($ || ($ = {}));

;
	($.$mol_icon_dots_vertical) = class $mol_icon_dots_vertical extends ($.$mol_icon) {
		path(){
			return "M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z";
		}
	};


;
"use strict";


;
	($.$mol_select) = class $mol_select extends ($.$mol_pick) {
		enabled(){
			return true;
		}
		event_select(id, next){
			if(next !== undefined) return next;
			return null;
		}
		option_label(id){
			return "";
		}
		filter_pattern(next){
			if(next !== undefined) return next;
			return "";
		}
		Option_label(id){
			const obj = new this.$.$mol_dimmer();
			(obj.haystack) = () => ((this.option_label(id)));
			(obj.needle) = () => ((this.filter_pattern()));
			return obj;
		}
		option_content(id){
			return [(this.Option_label(id))];
		}
		no_options_message(){
			return (this.$.$mol_locale.text("$mol_select_no_options_message"));
		}
		nav_components(){
			return [];
		}
		option_focused(next){
			if(next !== undefined) return next;
			return null;
		}
		nav_cycle(next){
			if(next !== undefined) return next;
			return true;
		}
		Nav(){
			const obj = new this.$.$mol_nav();
			(obj.keys_y) = () => ((this.nav_components()));
			(obj.current_y) = (next) => ((this.option_focused(next)));
			(obj.cycle) = (next) => ((this.nav_cycle(next)));
			return obj;
		}
		menu_content(){
			return [];
		}
		Menu(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ((this.menu_content()));
			return obj;
		}
		Bubble_pane(){
			const obj = new this.$.$mol_scroll();
			(obj.sub) = () => ([(this.Menu())]);
			return obj;
		}
		filter_hint(){
			return (this.$.$mol_locale.text("$mol_select_filter_hint"));
		}
		submit(next){
			if(next !== undefined) return next;
			return null;
		}
		dictionary(next){
			if(next !== undefined) return next;
			return {};
		}
		options(){
			return [];
		}
		value(next){
			if(next !== undefined) return next;
			return "";
		}
		option_label_default(){
			return "";
		}
		Option_row(id){
			const obj = new this.$.$mol_button_minor();
			(obj.enabled) = () => ((this.enabled()));
			(obj.event_click) = (next) => ((this.event_select(id, next)));
			(obj.sub) = () => ((this.option_content(id)));
			return obj;
		}
		No_options(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.no_options_message())]);
			return obj;
		}
		plugins(){
			return [...(super.plugins()), (this.Nav())];
		}
		hint(){
			return (this.$.$mol_locale.text("$mol_select_hint"));
		}
		bubble_content(){
			return [(this.Filter()), (this.Bubble_pane())];
		}
		Filter(){
			const obj = new this.$.$mol_search();
			(obj.query) = (next) => ((this.filter_pattern(next)));
			(obj.hint) = () => ((this.filter_hint()));
			(obj.submit) = (next) => ((this.submit(next)));
			(obj.enabled) = () => ((this.enabled()));
			return obj;
		}
		Trigger_icon(){
			const obj = new this.$.$mol_icon_dots_vertical();
			return obj;
		}
		trigger_enabled(){
			return (this.enabled());
		}
	};
	($mol_mem_key(($.$mol_select.prototype), "event_select"));
	($mol_mem(($.$mol_select.prototype), "filter_pattern"));
	($mol_mem_key(($.$mol_select.prototype), "Option_label"));
	($mol_mem(($.$mol_select.prototype), "option_focused"));
	($mol_mem(($.$mol_select.prototype), "nav_cycle"));
	($mol_mem(($.$mol_select.prototype), "Nav"));
	($mol_mem(($.$mol_select.prototype), "Menu"));
	($mol_mem(($.$mol_select.prototype), "Bubble_pane"));
	($mol_mem(($.$mol_select.prototype), "submit"));
	($mol_mem(($.$mol_select.prototype), "dictionary"));
	($mol_mem(($.$mol_select.prototype), "value"));
	($mol_mem_key(($.$mol_select.prototype), "Option_row"));
	($mol_mem(($.$mol_select.prototype), "No_options"));
	($mol_mem(($.$mol_select.prototype), "Filter"));
	($mol_mem(($.$mol_select.prototype), "Trigger_icon"));


;
"use strict";
var $;
(function ($) {
    function $mol_match_text(query, values) {
        const tags = query.toLowerCase().trim().split(/\s+/).filter(tag => tag);
        if (tags.length === 0)
            return () => true;
        return (variant) => {
            const vals = values(variant);
            return tags.every(tag => vals.some(val => val.toLowerCase().indexOf(tag) >= 0));
        };
    }
    $.$mol_match_text = $mol_match_text;
})($ || ($ = {}));

;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        /**
         * Allow user to select value from various options and displays current value.
         * @see https://mol.hyoo.ru/#!section=demos/demo=mol_select_demo_colors
         */
        class $mol_select extends $.$mol_select {
            filter_pattern(next) {
                this.focused();
                return next || '';
            }
            open() {
                this.showed(true);
            }
            options() {
                return Object.keys(this.dictionary());
            }
            options_filtered() {
                let options = this.options();
                options = options.filter($mol_match_text(this.filter_pattern(), (id) => [this.option_label(id)]));
                const index = options.indexOf(this.value());
                if (index >= 0)
                    options = [...options.slice(0, index), ...options.slice(index + 1)];
                return options;
            }
            option_label(id) {
                const value = this.dictionary()[id];
                return (value == null ? id : value) || this.option_label_default();
            }
            option_rows() {
                return this.options_filtered().map((option) => this.Option_row(option));
            }
            option_focused(component) {
                if (component == null) {
                    for (let comp of this.nav_components()) {
                        if (comp && comp.focused())
                            return comp;
                    }
                    return null;
                }
                if (this.showed()) {
                    component.focused(true);
                }
                return component;
            }
            event_select(id, event) {
                this.value(id);
                this.showed(false);
                event?.preventDefault();
            }
            nav_components() {
                if (this.options().length > 1 && this.Filter()) {
                    return [this.Filter(), ...this.option_rows()];
                }
                else {
                    return this.option_rows();
                }
            }
            trigger_content() {
                return [
                    ...this.option_content(this.value()),
                    ...this.trigger_enabled() ? [this.Trigger_icon()] : [],
                ];
            }
            menu_content() {
                return [
                    ...this.option_rows(),
                    ...(this.options_filtered().length === 0) ? [this.No_options()] : []
                ];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_select.prototype, "filter_pattern", null);
        __decorate([
            $mol_mem
        ], $mol_select.prototype, "options", null);
        __decorate([
            $mol_mem
        ], $mol_select.prototype, "options_filtered", null);
        __decorate([
            $mol_mem
        ], $mol_select.prototype, "option_focused", null);
        $$.$mol_select = $mol_select;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/select/select.view.css", "[mol_select] {\n\tdisplay: flex;\n\tword-break: normal;\n\talign-self: flex-start;\n}\n\n[mol_select_option_row] {\n\tmin-width: 100%;\n\tpadding: 0;\n\tjustify-content: flex-start;\n}\n\n[mol_select_filter] {\n\tflex: 1 0 auto;\n\talign-self: stretch;\n}\n\n[mol_select_option_label] {\n\tpadding: var(--mol_gap_text);\n\ttext-align: start;\n\tmin-height: 1.5em;\n\tdisplay: block;\n\twhite-space: nowrap;\n}\n\n[mol_select_clear_option_content] {\n\tpadding: .5em 1rem .5rem 0;\n\ttext-align: start;\n\tbox-shadow: var(--mol_theme_line);\n\tflex: 1 0 auto;\n}\n\n[mol_select_no_options] {\n\tpadding: var(--mol_gap_text);\n\ttext-align: start;\n\tdisplay: block;\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_select_trigger] {\n\tpadding: 0;\n\tflex: 1 1 auto;\n\tdisplay: flex;\n}\n\n[mol_select_trigger] > * {\n\tmargin-inline-end: -1rem;\n}\n\n[mol_select_trigger] > *:last-child {\n\tmargin-inline-end: 0;\n}\n\n[mol_select_menu] {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n");
})($ || ($ = {}));

;
	($.$mol_text_list) = class $mol_text_list extends ($.$mol_text) {
		type(){
			return "";
		}
		auto_scroll(){
			return null;
		}
		attr(){
			return {...(super.attr()), "mol_text_list_type": (this.type())};
		}
		Paragraph(id){
			const obj = new this.$.$mol_text_list_item();
			(obj.index) = () => ((this.item_index(id)));
			(obj.sub) = () => ((this.block_content(id)));
			return obj;
		}
	};
	($mol_mem_key(($.$mol_text_list.prototype), "Paragraph"));
	($.$mol_text_list_item) = class $mol_text_list_item extends ($.$mol_paragraph) {
		index(){
			return 0;
		}
		attr(){
			return {...(super.attr()), "mol_text_list_item_index": (this.index())};
		}
	};


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/text/list/list.view.css", "[mol_text_list] {\n\tpadding-inline-start: 1.75rem;\n}\n\n[mol_text_list_item] {\n\tcontain: none;\n\tdisplay: list-item;\n}\n\n[mol_text_list_item]::before {\n\tcontent: attr( mol_text_list_item_index ) \".\";\n\twidth: 1.25rem;\n\tdisplay: inline-block;\n\tposition: absolute;\n\tmargin-inline-start: -1.75rem;\n\ttext-align: end;\n}\n\n[mol_text_list_type=\"-\"] > [mol_text_list_item]::before,\n[mol_text_list_type=\"*\"] > [mol_text_list_item]::before {\n\tcontent: \"•\";\n}\n");
})($ || ($ = {}));

;
"use strict";


;
	($.$bog_brl) = class $bog_brl extends ($.$mol_view) {
		page(next){
			if(next !== undefined) return next;
			return "home";
		}
		mobile_open(next){
			if(next !== undefined) return next;
			return false;
		}
		Header(){
			const obj = new this.$.$bog_brl_header();
			(obj.page) = (next) => ((this.page(next)));
			(obj.mobile_open) = (next) => ((this.mobile_open(next)));
			return obj;
		}
		Mobile_nav(){
			const obj = new this.$.$bog_brl_mobile_nav();
			(obj.page) = (next) => ((this.page(next)));
			(obj.mobile_open) = (next) => ((this.mobile_open(next)));
			return obj;
		}
		Home_page(){
			const obj = new this.$.$bog_brl_home();
			return obj;
		}
		Catalog_page(){
			const obj = new this.$.$bog_brl_catalog();
			return obj;
		}
		property_id(next){
			if(next !== undefined) return next;
			return null;
		}
		Property_page(){
			const obj = new this.$.$bog_brl_property();
			(obj.property_id) = (next) => ((this.property_id(next)));
			return obj;
		}
		Landlords_page(){
			const obj = new this.$.$bog_brl_landlords();
			return obj;
		}
		About_page(){
			const obj = new this.$.$bog_brl_about();
			return obj;
		}
		Contacts_page(){
			const obj = new this.$.$bog_brl_contacts();
			return obj;
		}
		page_index(){
			return "";
		}
		Deck(){
			const obj = new this.$.$bog_brl_deck();
			(obj.items) = () => ([
				(this.Home_page()), 
				(this.Catalog_page()), 
				(this.Property_page()), 
				(this.Landlords_page()), 
				(this.About_page()), 
				(this.Contacts_page())
			]);
			(obj.current) = () => ((this.page_index()));
			return obj;
		}
		Footer(){
			const obj = new this.$.$bog_brl_footer();
			(obj.page) = (next) => ((this.page(next)));
			return obj;
		}
		sub(){
			return [
				(this.Header()), 
				(this.Mobile_nav()), 
				(this.Deck()), 
				(this.Footer())
			];
		}
	};
	($mol_mem(($.$bog_brl.prototype), "page"));
	($mol_mem(($.$bog_brl.prototype), "mobile_open"));
	($mol_mem(($.$bog_brl.prototype), "Header"));
	($mol_mem(($.$bog_brl.prototype), "Mobile_nav"));
	($mol_mem(($.$bog_brl.prototype), "Home_page"));
	($mol_mem(($.$bog_brl.prototype), "Catalog_page"));
	($mol_mem(($.$bog_brl.prototype), "property_id"));
	($mol_mem(($.$bog_brl.prototype), "Property_page"));
	($mol_mem(($.$bog_brl.prototype), "Landlords_page"));
	($mol_mem(($.$bog_brl.prototype), "About_page"));
	($mol_mem(($.$bog_brl.prototype), "Contacts_page"));
	($mol_mem(($.$bog_brl.prototype), "Deck"));
	($mol_mem(($.$bog_brl.prototype), "Footer"));
	($.$bog_brl_deck) = class $bog_brl_deck extends ($.$mol_deck) {
		Switch(){
			return null;
		}
	};
	($.$bog_brl_header) = class $bog_brl_header extends ($.$mol_view) {
		home_link(){
			return "";
		}
		Logo_mark(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["BZ"]);
			return obj;
		}
		Logo_text(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["BZRL"]);
			return obj;
		}
		Logo(){
			const obj = new this.$.$mol_link();
			(obj.uri) = () => ((this.home_link()));
			(obj.sub) = () => ([(this.Logo_mark()), (this.Logo_text())]);
			return obj;
		}
		Nav_home(){
			const obj = new this.$.$bog_brl_nav_link();
			(obj.label) = () => ("Главная");
			(obj.uri) = () => ((this.home_link()));
			return obj;
		}
		catalog_link(){
			return "";
		}
		Nav_catalog(){
			const obj = new this.$.$bog_brl_nav_link();
			(obj.label) = () => ("Недвижимость");
			(obj.uri) = () => ((this.catalog_link()));
			return obj;
		}
		landlords_link(){
			return "";
		}
		Nav_landlords(){
			const obj = new this.$.$bog_brl_nav_link();
			(obj.label) = () => ("Арендодателям");
			(obj.uri) = () => ((this.landlords_link()));
			return obj;
		}
		about_link(){
			return "";
		}
		Nav_about(){
			const obj = new this.$.$bog_brl_nav_link();
			(obj.label) = () => ("О проекте");
			(obj.uri) = () => ((this.about_link()));
			return obj;
		}
		contacts_link(){
			return "";
		}
		Nav_contacts(){
			const obj = new this.$.$bog_brl_nav_link();
			(obj.label) = () => ("Контакты");
			(obj.uri) = () => ((this.contacts_link()));
			return obj;
		}
		telegram_url(){
			return "";
		}
		Nav_cta(){
			const obj = new this.$.$bog_brl_nav_cta();
			(obj.uri) = () => ((this.telegram_url()));
			return obj;
		}
		Nav(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				(this.Nav_home()), 
				(this.Nav_catalog()), 
				(this.Nav_landlords()), 
				(this.Nav_about()), 
				(this.Nav_contacts()), 
				(this.Nav_cta())
			]);
			return obj;
		}
		burger_toggle(next){
			if(next !== undefined) return next;
			return null;
		}
		Burger(){
			const obj = new this.$.$bog_brl_burger();
			(obj.click) = (next) => ((this.burger_toggle(next)));
			return obj;
		}
		Header_inner(){
			const obj = new this.$.$bog_brl_container();
			(obj.sub) = () => ([
				(this.Logo()), 
				(this.Nav()), 
				(this.Burger())
			]);
			return obj;
		}
		page(next){
			if(next !== undefined) return next;
			return "home";
		}
		mobile_open(next){
			if(next !== undefined) return next;
			return false;
		}
		sub(){
			return [(this.Header_inner())];
		}
	};
	($mol_mem(($.$bog_brl_header.prototype), "Logo_mark"));
	($mol_mem(($.$bog_brl_header.prototype), "Logo_text"));
	($mol_mem(($.$bog_brl_header.prototype), "Logo"));
	($mol_mem(($.$bog_brl_header.prototype), "Nav_home"));
	($mol_mem(($.$bog_brl_header.prototype), "Nav_catalog"));
	($mol_mem(($.$bog_brl_header.prototype), "Nav_landlords"));
	($mol_mem(($.$bog_brl_header.prototype), "Nav_about"));
	($mol_mem(($.$bog_brl_header.prototype), "Nav_contacts"));
	($mol_mem(($.$bog_brl_header.prototype), "Nav_cta"));
	($mol_mem(($.$bog_brl_header.prototype), "Nav"));
	($mol_mem(($.$bog_brl_header.prototype), "burger_toggle"));
	($mol_mem(($.$bog_brl_header.prototype), "Burger"));
	($mol_mem(($.$bog_brl_header.prototype), "Header_inner"));
	($mol_mem(($.$bog_brl_header.prototype), "page"));
	($mol_mem(($.$bog_brl_header.prototype), "mobile_open"));
	($.$bog_brl_nav_link) = class $bog_brl_nav_link extends ($.$mol_link) {
		label(){
			return "";
		}
		sub(){
			return [(this.label())];
		}
	};
	($.$bog_brl_nav_cta) = class $bog_brl_nav_cta extends ($.$mol_link) {
		Nav_cta_icon(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["✈"]);
			return obj;
		}
		label(){
			return "Написать";
		}
		Nav_cta_text(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.label()));
			return obj;
		}
		attr(){
			return {
				...(super.attr()), 
				"target": "_blank", 
				"rel": "noopener"
			};
		}
		sub(){
			return [(this.Nav_cta_icon()), (this.Nav_cta_text())];
		}
	};
	($mol_mem(($.$bog_brl_nav_cta.prototype), "Nav_cta_icon"));
	($mol_mem(($.$bog_brl_nav_cta.prototype), "Nav_cta_text"));
	($.$bog_brl_burger) = class $bog_brl_burger extends ($.$mol_button) {
		Burger_line_1(){
			const obj = new this.$.$mol_view();
			return obj;
		}
		Burger_line_2(){
			const obj = new this.$.$mol_view();
			return obj;
		}
		Burger_line_3(){
			const obj = new this.$.$mol_view();
			return obj;
		}
		sub(){
			return [
				(this.Burger_line_1()), 
				(this.Burger_line_2()), 
				(this.Burger_line_3())
			];
		}
	};
	($mol_mem(($.$bog_brl_burger.prototype), "Burger_line_1"));
	($mol_mem(($.$bog_brl_burger.prototype), "Burger_line_2"));
	($mol_mem(($.$bog_brl_burger.prototype), "Burger_line_3"));
	($.$bog_brl_mobile_nav) = class $bog_brl_mobile_nav extends ($.$mol_view) {
		mobile_open(next){
			if(next !== undefined) return next;
			return false;
		}
		mobile_home_click(next){
			if(next !== undefined) return next;
			return null;
		}
		Mobile_home(){
			const obj = new this.$.$bog_brl_mobile_link();
			(obj.label) = () => ("Главная");
			(obj.click) = (next) => ((this.mobile_home_click(next)));
			return obj;
		}
		mobile_catalog_click(next){
			if(next !== undefined) return next;
			return null;
		}
		Mobile_catalog(){
			const obj = new this.$.$bog_brl_mobile_link();
			(obj.label) = () => ("Недвижимость");
			(obj.click) = (next) => ((this.mobile_catalog_click(next)));
			return obj;
		}
		mobile_landlords_click(next){
			if(next !== undefined) return next;
			return null;
		}
		Mobile_landlords(){
			const obj = new this.$.$bog_brl_mobile_link();
			(obj.label) = () => ("Арендодателям");
			(obj.click) = (next) => ((this.mobile_landlords_click(next)));
			return obj;
		}
		mobile_about_click(next){
			if(next !== undefined) return next;
			return null;
		}
		Mobile_about(){
			const obj = new this.$.$bog_brl_mobile_link();
			(obj.label) = () => ("О проекте");
			(obj.click) = (next) => ((this.mobile_about_click(next)));
			return obj;
		}
		mobile_contacts_click(next){
			if(next !== undefined) return next;
			return null;
		}
		Mobile_contacts(){
			const obj = new this.$.$bog_brl_mobile_link();
			(obj.label) = () => ("Контакты");
			(obj.click) = (next) => ((this.mobile_contacts_click(next)));
			return obj;
		}
		telegram_url(){
			return "";
		}
		Mobile_cta(){
			const obj = new this.$.$bog_brl_btn_telegram();
			(obj.label) = () => ("✈ Написать в Telegram");
			(obj.uri) = () => ((this.telegram_url()));
			return obj;
		}
		page(next){
			if(next !== undefined) return next;
			return "home";
		}
		attr(){
			return {"bog_brl_mobile_nav_open": (this.mobile_open())};
		}
		sub(){
			return [
				(this.Mobile_home()), 
				(this.Mobile_catalog()), 
				(this.Mobile_landlords()), 
				(this.Mobile_about()), 
				(this.Mobile_contacts()), 
				(this.Mobile_cta())
			];
		}
	};
	($mol_mem(($.$bog_brl_mobile_nav.prototype), "mobile_open"));
	($mol_mem(($.$bog_brl_mobile_nav.prototype), "mobile_home_click"));
	($mol_mem(($.$bog_brl_mobile_nav.prototype), "Mobile_home"));
	($mol_mem(($.$bog_brl_mobile_nav.prototype), "mobile_catalog_click"));
	($mol_mem(($.$bog_brl_mobile_nav.prototype), "Mobile_catalog"));
	($mol_mem(($.$bog_brl_mobile_nav.prototype), "mobile_landlords_click"));
	($mol_mem(($.$bog_brl_mobile_nav.prototype), "Mobile_landlords"));
	($mol_mem(($.$bog_brl_mobile_nav.prototype), "mobile_about_click"));
	($mol_mem(($.$bog_brl_mobile_nav.prototype), "Mobile_about"));
	($mol_mem(($.$bog_brl_mobile_nav.prototype), "mobile_contacts_click"));
	($mol_mem(($.$bog_brl_mobile_nav.prototype), "Mobile_contacts"));
	($mol_mem(($.$bog_brl_mobile_nav.prototype), "Mobile_cta"));
	($mol_mem(($.$bog_brl_mobile_nav.prototype), "page"));
	($.$bog_brl_mobile_link) = class $bog_brl_mobile_link extends ($.$mol_button) {
		label(){
			return "";
		}
		sub(){
			return [(this.label())];
		}
	};
	($.$bog_brl_btn_primary) = class $bog_brl_btn_primary extends ($.$mol_link) {
		label(){
			return "";
		}
		sub(){
			return [(this.label())];
		}
	};
	($.$bog_brl_btn_telegram) = class $bog_brl_btn_telegram extends ($.$mol_link) {
		label(){
			return "";
		}
		attr(){
			return {
				...(super.attr()), 
				"target": "_blank", 
				"rel": "noopener"
			};
		}
		sub(){
			return [(this.label())];
		}
	};
	($.$bog_brl_btn_phone) = class $bog_brl_btn_phone extends ($.$mol_link) {
		label(){
			return "";
		}
		sub(){
			return [(this.label())];
		}
	};
	($.$bog_brl_container) = class $bog_brl_container extends ($.$mol_view) {
		sub(){
			return [];
		}
	};
	($.$bog_brl_stat) = class $bog_brl_stat extends ($.$mol_view) {
		number(){
			return "";
		}
		Stat_number(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.number()));
			return obj;
		}
		label(){
			return "";
		}
		Stat_label(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.label()));
			return obj;
		}
		sub(){
			return [(this.Stat_number()), (this.Stat_label())];
		}
	};
	($mol_mem(($.$bog_brl_stat.prototype), "Stat_number"));
	($mol_mem(($.$bog_brl_stat.prototype), "Stat_label"));
	($.$bog_brl_step) = class $bog_brl_step extends ($.$mol_view) {
		num(){
			return "";
		}
		Step_num(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.num()));
			return obj;
		}
		icon(){
			return "";
		}
		Step_icon(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.icon()));
			return obj;
		}
		title(){
			return "";
		}
		Step_title(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.title()));
			return obj;
		}
		text(){
			return "";
		}
		Step_text(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.text()));
			return obj;
		}
		sub(){
			return [
				(this.Step_num()), 
				(this.Step_icon()), 
				(this.Step_title()), 
				(this.Step_text())
			];
		}
	};
	($mol_mem(($.$bog_brl_step.prototype), "Step_num"));
	($mol_mem(($.$bog_brl_step.prototype), "Step_icon"));
	($mol_mem(($.$bog_brl_step.prototype), "Step_title"));
	($mol_mem(($.$bog_brl_step.prototype), "Step_text"));
	($.$bog_brl_adv) = class $bog_brl_adv extends ($.$mol_view) {
		theme(){
			return "muted";
		}
		icon(){
			return "";
		}
		Adv_icon(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.icon()));
			return obj;
		}
		title(){
			return "";
		}
		Adv_title(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.title()));
			return obj;
		}
		text(){
			return "";
		}
		Adv_text(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.text()));
			return obj;
		}
		attr(){
			return {"bog_brl_adv_theme": (this.theme())};
		}
		sub(){
			return [
				(this.Adv_icon()), 
				(this.Adv_title()), 
				(this.Adv_text())
			];
		}
	};
	($mol_mem(($.$bog_brl_adv.prototype), "Adv_icon"));
	($mol_mem(($.$bog_brl_adv.prototype), "Adv_title"));
	($mol_mem(($.$bog_brl_adv.prototype), "Adv_text"));
	($.$bog_brl_property_card) = class $bog_brl_property_card extends ($.$mol_link) {
		badge_house(){
			return false;
		}
		image(){
			return "";
		}
		Card_image_pic(){
			const obj = new this.$.$mol_image();
			(obj.uri) = () => ((this.image()));
			return obj;
		}
		badge(){
			return "";
		}
		Card_badge(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.badge()));
			return obj;
		}
		Card_image(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Card_image_pic()), (this.Card_badge())]);
			return obj;
		}
		price(){
			return "";
		}
		Card_price_value(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.price()));
			return obj;
		}
		Card_price_unit(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["/ мес"]);
			return obj;
		}
		Card_price(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Card_price_value()), (this.Card_price_unit())]);
			return obj;
		}
		address(){
			return "";
		}
		Card_address(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.address()));
			return obj;
		}
		meta_rooms(){
			return "";
		}
		Card_meta_rooms(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.meta_rooms()));
			return obj;
		}
		meta_area(){
			return "";
		}
		Card_meta_area(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.meta_area()));
			return obj;
		}
		meta_floor(){
			return "";
		}
		Card_meta_floor(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.meta_floor()));
			return obj;
		}
		Card_meta(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				(this.Card_meta_rooms()), 
				(this.Card_meta_area()), 
				(this.Card_meta_floor())
			]);
			return obj;
		}
		Card_body(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				(this.Card_price()), 
				(this.Card_address()), 
				(this.Card_meta())
			]);
			return obj;
		}
		attr(){
			return {...(super.attr()), "bog_brl_property_badge_house": (this.badge_house())};
		}
		sub(){
			return [(this.Card_image()), (this.Card_body())];
		}
	};
	($mol_mem(($.$bog_brl_property_card.prototype), "Card_image_pic"));
	($mol_mem(($.$bog_brl_property_card.prototype), "Card_badge"));
	($mol_mem(($.$bog_brl_property_card.prototype), "Card_image"));
	($mol_mem(($.$bog_brl_property_card.prototype), "Card_price_value"));
	($mol_mem(($.$bog_brl_property_card.prototype), "Card_price_unit"));
	($mol_mem(($.$bog_brl_property_card.prototype), "Card_price"));
	($mol_mem(($.$bog_brl_property_card.prototype), "Card_address"));
	($mol_mem(($.$bog_brl_property_card.prototype), "Card_meta_rooms"));
	($mol_mem(($.$bog_brl_property_card.prototype), "Card_meta_area"));
	($mol_mem(($.$bog_brl_property_card.prototype), "Card_meta_floor"));
	($mol_mem(($.$bog_brl_property_card.prototype), "Card_meta"));
	($mol_mem(($.$bog_brl_property_card.prototype), "Card_body"));
	($.$bog_brl_gallery_dot) = class $bog_brl_gallery_dot extends ($.$mol_button) {
		active(){
			return false;
		}
		attr(){
			return {...(super.attr()), "bog_brl_gallery_dot_active": (this.active())};
		}
	};
	($.$bog_brl_feature) = class $bog_brl_feature extends ($.$mol_view) {
		Feature_check(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["✓"]);
			return obj;
		}
		text(){
			return "";
		}
		Feature_text(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.text()));
			return obj;
		}
		sub(){
			return [(this.Feature_check()), (this.Feature_text())];
		}
	};
	($mol_mem(($.$bog_brl_feature.prototype), "Feature_check"));
	($mol_mem(($.$bog_brl_feature.prototype), "Feature_text"));
	($.$bog_brl_spec) = class $bog_brl_spec extends ($.$mol_view) {
		label(){
			return "";
		}
		Spec_label(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.label()));
			return obj;
		}
		value(){
			return "";
		}
		Spec_value(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.value()));
			return obj;
		}
		sub(){
			return [(this.Spec_label()), (this.Spec_value())];
		}
	};
	($mol_mem(($.$bog_brl_spec.prototype), "Spec_label"));
	($mol_mem(($.$bog_brl_spec.prototype), "Spec_value"));
	($.$bog_brl_deal_row) = class $bog_brl_deal_row extends ($.$mol_view) {
		label(){
			return "";
		}
		Deal_label(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.label()));
			return obj;
		}
		value(){
			return "";
		}
		Deal_value(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.value()));
			return obj;
		}
		sub(){
			return [(this.Deal_label()), (this.Deal_value())];
		}
	};
	($mol_mem(($.$bog_brl_deal_row.prototype), "Deal_label"));
	($mol_mem(($.$bog_brl_deal_row.prototype), "Deal_value"));
	($.$bog_brl_landlord_benefit) = class $bog_brl_landlord_benefit extends ($.$mol_view) {
		icon(){
			return "";
		}
		Benefit_icon(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.icon()));
			return obj;
		}
		title(){
			return "";
		}
		Benefit_title(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.title()));
			return obj;
		}
		text(){
			return "";
		}
		Benefit_text(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.text()));
			return obj;
		}
		Benefit_body(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Benefit_title()), (this.Benefit_text())]);
			return obj;
		}
		sub(){
			return [(this.Benefit_icon()), (this.Benefit_body())];
		}
	};
	($mol_mem(($.$bog_brl_landlord_benefit.prototype), "Benefit_icon"));
	($mol_mem(($.$bog_brl_landlord_benefit.prototype), "Benefit_title"));
	($mol_mem(($.$bog_brl_landlord_benefit.prototype), "Benefit_text"));
	($mol_mem(($.$bog_brl_landlord_benefit.prototype), "Benefit_body"));
	($.$bog_brl_commission_item) = class $bog_brl_commission_item extends ($.$mol_view) {
		Commission_check(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["✓"]);
			return obj;
		}
		text(){
			return "";
		}
		Commission_text(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.text()));
			return obj;
		}
		sub(){
			return [(this.Commission_check()), (this.Commission_text())];
		}
	};
	($mol_mem(($.$bog_brl_commission_item.prototype), "Commission_check"));
	($mol_mem(($.$bog_brl_commission_item.prototype), "Commission_text"));
	($.$bog_brl_about_value) = class $bog_brl_about_value extends ($.$mol_view) {
		icon(){
			return "";
		}
		About_value_icon(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.icon()));
			return obj;
		}
		title(){
			return "";
		}
		About_value_title(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.title()));
			return obj;
		}
		text(){
			return "";
		}
		About_value_text(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.text()));
			return obj;
		}
		About_value_body(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.About_value_title()), (this.About_value_text())]);
			return obj;
		}
		sub(){
			return [(this.About_value_icon()), (this.About_value_body())];
		}
	};
	($mol_mem(($.$bog_brl_about_value.prototype), "About_value_icon"));
	($mol_mem(($.$bog_brl_about_value.prototype), "About_value_title"));
	($mol_mem(($.$bog_brl_about_value.prototype), "About_value_text"));
	($mol_mem(($.$bog_brl_about_value.prototype), "About_value_body"));
	($.$bog_brl_contact_card) = class $bog_brl_contact_card extends ($.$mol_view) {
		theme(){
			return "tg";
		}
		icon(){
			return "";
		}
		Contact_icon(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.icon()));
			return obj;
		}
		title(){
			return "";
		}
		Contact_title(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.title()));
			return obj;
		}
		text(){
			return "";
		}
		Contact_text(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.text()));
			return obj;
		}
		link_uri(){
			return "";
		}
		link_label(){
			return "";
		}
		Contact_link_text(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.link_label()));
			return obj;
		}
		Contact_link(next){
			if(next !== undefined) return next;
			const obj = new this.$.$mol_link();
			(obj.uri) = () => ((this.link_uri()));
			(obj.sub) = () => ([(this.Contact_link_text())]);
			return obj;
		}
		note(){
			return "";
		}
		Contact_note(next){
			if(next !== undefined) return next;
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.note()));
			return obj;
		}
		attr(){
			return {"bog_brl_contact_card_theme": (this.theme())};
		}
		sub(){
			return [
				(this.Contact_icon()), 
				(this.Contact_title()), 
				(this.Contact_text()), 
				(this.Contact_link()), 
				(this.Contact_note())
			];
		}
	};
	($mol_mem(($.$bog_brl_contact_card.prototype), "Contact_icon"));
	($mol_mem(($.$bog_brl_contact_card.prototype), "Contact_title"));
	($mol_mem(($.$bog_brl_contact_card.prototype), "Contact_text"));
	($mol_mem(($.$bog_brl_contact_card.prototype), "Contact_link_text"));
	($mol_mem(($.$bog_brl_contact_card.prototype), "Contact_link"));
	($mol_mem(($.$bog_brl_contact_card.prototype), "Contact_note"));
	($.$bog_brl_footer_link) = class $bog_brl_footer_link extends ($.$mol_link) {
		label(){
			return "";
		}
		sub(){
			return [(this.label())];
		}
	};
	($.$bog_brl_home) = class $bog_brl_home extends ($.$mol_view) {
		Hero_badge_dot(){
			const obj = new this.$.$mol_view();
			return obj;
		}
		Hero_badge_text(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Казань · Долгосрочная аренда"]);
			return obj;
		}
		Hero_badge(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Hero_badge_dot()), (this.Hero_badge_text())]);
			return obj;
		}
		Hero_title_prefix(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Находим жильё"]);
			return obj;
		}
		Hero_title_em(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["честно"]);
			return obj;
		}
		Hero_title_suffix(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["и ведём сделку до ключей"]);
			return obj;
		}
		Hero_title(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				(this.Hero_title_prefix()), 
				(this.Hero_title_em()), 
				(this.Hero_title_suffix())
			]);
			return obj;
		}
		Hero_sub(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Мы — сервис-посредник по аренде квартир и домов. Проверяем объекты, отбираем арендаторов, сопровождаем сделку. Прозрачные условия для обеих сторон."]);
			return obj;
		}
		Hero_commission_icon(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["💰"]);
			return obj;
		}
		Hero_commission_value(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["20% от месячной аренды"]);
			return obj;
		}
		Hero_commission_text(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Фиксированная комиссия —", (this.Hero_commission_value())]);
			return obj;
		}
		Hero_commission(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Hero_commission_icon()), (this.Hero_commission_text())]);
			return obj;
		}
		catalog_link(){
			return "";
		}
		Hero_action_primary(){
			const obj = new this.$.$bog_brl_btn_primary();
			(obj.label) = () => ("Смотреть объекты →");
			(obj.uri) = () => ((this.catalog_link()));
			return obj;
		}
		telegram_url(){
			return "";
		}
		Hero_action_telegram(){
			const obj = new this.$.$bog_brl_btn_telegram();
			(obj.label) = () => ("✈ Написать в Telegram");
			(obj.uri) = () => ((this.telegram_url()));
			return obj;
		}
		Hero_actions(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Hero_action_primary()), (this.Hero_action_telegram())]);
			return obj;
		}
		Hero_content(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				(this.Hero_badge()), 
				(this.Hero_title()), 
				(this.Hero_sub()), 
				(this.Hero_commission()), 
				(this.Hero_actions())
			]);
			return obj;
		}
		stat_number(id){
			return "";
		}
		stat_label(id){
			return "";
		}
		Stat(id){
			const obj = new this.$.$bog_brl_stat();
			(obj.number) = () => ((this.stat_number(id)));
			(obj.label) = () => ((this.stat_label(id)));
			return obj;
		}
		stats_rows(){
			return [(this.Stat(id))];
		}
		Stats(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ((this.stats_rows()));
			return obj;
		}
		Hero_container(){
			const obj = new this.$.$bog_brl_container();
			(obj.sub) = () => ([(this.Hero_content()), (this.Stats())]);
			return obj;
		}
		Hero(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Hero_container())]);
			return obj;
		}
		How_title(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Как мы работаем"]);
			return obj;
		}
		How_text(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Пять шагов от первого звонка до ключей"]);
			return obj;
		}
		How_header(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.How_title()), (this.How_text())]);
			return obj;
		}
		step_num(id){
			return "";
		}
		step_icon(id){
			return "";
		}
		step_title(id){
			return "";
		}
		step_text(id){
			return "";
		}
		Step(id){
			const obj = new this.$.$bog_brl_step();
			(obj.num) = () => ((this.step_num(id)));
			(obj.icon) = () => ((this.step_icon(id)));
			(obj.title) = () => ((this.step_title(id)));
			(obj.text) = () => ((this.step_text(id)));
			return obj;
		}
		steps_rows(){
			return [(this.Step(id))];
		}
		Steps(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ((this.steps_rows()));
			return obj;
		}
		How_container(){
			const obj = new this.$.$bog_brl_container();
			(obj.sub) = () => ([(this.How_header()), (this.Steps())]);
			return obj;
		}
		How(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.How_container())]);
			return obj;
		}
		Advantages_title(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Почему работают с нами"]);
			return obj;
		}
		Advantages_text(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Самая низкая и прозрачная комиссия на рынке Казани"]);
			return obj;
		}
		Advantages_header(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Advantages_title()), (this.Advantages_text())]);
			return obj;
		}
		adv_icon(id){
			return "";
		}
		adv_theme(id){
			return "";
		}
		adv_title(id){
			return "";
		}
		adv_text(id){
			return "";
		}
		Advantage(id){
			const obj = new this.$.$bog_brl_adv();
			(obj.icon) = () => ((this.adv_icon(id)));
			(obj.theme) = () => ((this.adv_theme(id)));
			(obj.title) = () => ((this.adv_title(id)));
			(obj.text) = () => ((this.adv_text(id)));
			return obj;
		}
		advantages_rows(){
			return [(this.Advantage(id))];
		}
		Advantages_grid(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ((this.advantages_rows()));
			return obj;
		}
		Advantages_container(){
			const obj = new this.$.$bog_brl_container();
			(obj.sub) = () => ([(this.Advantages_header()), (this.Advantages_grid())]);
			return obj;
		}
		Advantages(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Advantages_container())]);
			return obj;
		}
		sub(){
			return [
				(this.Hero()), 
				(this.How()), 
				(this.Advantages())
			];
		}
	};
	($mol_mem(($.$bog_brl_home.prototype), "Hero_badge_dot"));
	($mol_mem(($.$bog_brl_home.prototype), "Hero_badge_text"));
	($mol_mem(($.$bog_brl_home.prototype), "Hero_badge"));
	($mol_mem(($.$bog_brl_home.prototype), "Hero_title_prefix"));
	($mol_mem(($.$bog_brl_home.prototype), "Hero_title_em"));
	($mol_mem(($.$bog_brl_home.prototype), "Hero_title_suffix"));
	($mol_mem(($.$bog_brl_home.prototype), "Hero_title"));
	($mol_mem(($.$bog_brl_home.prototype), "Hero_sub"));
	($mol_mem(($.$bog_brl_home.prototype), "Hero_commission_icon"));
	($mol_mem(($.$bog_brl_home.prototype), "Hero_commission_value"));
	($mol_mem(($.$bog_brl_home.prototype), "Hero_commission_text"));
	($mol_mem(($.$bog_brl_home.prototype), "Hero_commission"));
	($mol_mem(($.$bog_brl_home.prototype), "Hero_action_primary"));
	($mol_mem(($.$bog_brl_home.prototype), "Hero_action_telegram"));
	($mol_mem(($.$bog_brl_home.prototype), "Hero_actions"));
	($mol_mem(($.$bog_brl_home.prototype), "Hero_content"));
	($mol_mem_key(($.$bog_brl_home.prototype), "Stat"));
	($mol_mem(($.$bog_brl_home.prototype), "Stats"));
	($mol_mem(($.$bog_brl_home.prototype), "Hero_container"));
	($mol_mem(($.$bog_brl_home.prototype), "Hero"));
	($mol_mem(($.$bog_brl_home.prototype), "How_title"));
	($mol_mem(($.$bog_brl_home.prototype), "How_text"));
	($mol_mem(($.$bog_brl_home.prototype), "How_header"));
	($mol_mem_key(($.$bog_brl_home.prototype), "Step"));
	($mol_mem(($.$bog_brl_home.prototype), "Steps"));
	($mol_mem(($.$bog_brl_home.prototype), "How_container"));
	($mol_mem(($.$bog_brl_home.prototype), "How"));
	($mol_mem(($.$bog_brl_home.prototype), "Advantages_title"));
	($mol_mem(($.$bog_brl_home.prototype), "Advantages_text"));
	($mol_mem(($.$bog_brl_home.prototype), "Advantages_header"));
	($mol_mem_key(($.$bog_brl_home.prototype), "Advantage"));
	($mol_mem(($.$bog_brl_home.prototype), "Advantages_grid"));
	($mol_mem(($.$bog_brl_home.prototype), "Advantages_container"));
	($mol_mem(($.$bog_brl_home.prototype), "Advantages"));
	($.$bog_brl_catalog) = class $bog_brl_catalog extends ($.$mol_view) {
		Section_title(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Недвижимость в Казани"]);
			return obj;
		}
		Section_text(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Проверенные объекты · Долгосрочная аренда · Комиссия 20%"]);
			return obj;
		}
		Section_header(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Section_title()), (this.Section_text())]);
			return obj;
		}
		Filter_type_label(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Тип"]);
			return obj;
		}
		filter_type_draft(next){
			if(next !== undefined) return next;
			return "";
		}
		filter_type_dict(){
			return {};
		}
		Filter_type_select(){
			const obj = new this.$.$mol_select();
			(obj.value) = (next) => ((this.filter_type_draft(next)));
			(obj.dictionary) = () => ((this.filter_type_dict()));
			return obj;
		}
		Filter_type(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Filter_type_label()), (this.Filter_type_select())]);
			return obj;
		}
		Filter_rooms_label(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Комнаты"]);
			return obj;
		}
		filter_rooms_draft(next){
			if(next !== undefined) return next;
			return "";
		}
		filter_rooms_dict(){
			return {};
		}
		Filter_rooms_select(){
			const obj = new this.$.$mol_select();
			(obj.value) = (next) => ((this.filter_rooms_draft(next)));
			(obj.dictionary) = () => ((this.filter_rooms_dict()));
			return obj;
		}
		Filter_rooms(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Filter_rooms_label()), (this.Filter_rooms_select())]);
			return obj;
		}
		Filter_district_label(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Район"]);
			return obj;
		}
		filter_district_draft(next){
			if(next !== undefined) return next;
			return "";
		}
		filter_district_dict(){
			return {};
		}
		Filter_district_select(){
			const obj = new this.$.$mol_select();
			(obj.value) = (next) => ((this.filter_district_draft(next)));
			(obj.dictionary) = () => ((this.filter_district_dict()));
			return obj;
		}
		Filter_district(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Filter_district_label()), (this.Filter_district_select())]);
			return obj;
		}
		Filter_price_min_label(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Цена от"]);
			return obj;
		}
		filter_price_min_draft(next){
			if(next !== undefined) return next;
			return "";
		}
		Filter_price_min_input(){
			const obj = new this.$.$mol_string();
			(obj.value) = (next) => ((this.filter_price_min_draft(next)));
			(obj.hint) = () => ("15 000");
			return obj;
		}
		Filter_price_min(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Filter_price_min_label()), (this.Filter_price_min_input())]);
			return obj;
		}
		Filter_price_max_label(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Цена до"]);
			return obj;
		}
		filter_price_max_draft(next){
			if(next !== undefined) return next;
			return "";
		}
		Filter_price_max_input(){
			const obj = new this.$.$mol_string();
			(obj.value) = (next) => ((this.filter_price_max_draft(next)));
			(obj.hint) = () => ("80 000");
			return obj;
		}
		Filter_price_max(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Filter_price_max_label()), (this.Filter_price_max_input())]);
			return obj;
		}
		apply_filters(next){
			if(next !== undefined) return next;
			return null;
		}
		Filter_apply(){
			const obj = new this.$.$mol_button();
			(obj.click) = (next) => ((this.apply_filters(next)));
			(obj.sub) = () => (["Найти"]);
			return obj;
		}
		reset_filters(next){
			if(next !== undefined) return next;
			return null;
		}
		Filter_reset(){
			const obj = new this.$.$mol_button();
			(obj.click) = (next) => ((this.reset_filters(next)));
			(obj.sub) = () => (["Сбросить"]);
			return obj;
		}
		Filters(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				(this.Filter_type()), 
				(this.Filter_rooms()), 
				(this.Filter_district()), 
				(this.Filter_price_min()), 
				(this.Filter_price_max()), 
				(this.Filter_apply()), 
				(this.Filter_reset())
			]);
			return obj;
		}
		Results_text(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Найдено:"]);
			return obj;
		}
		results_count_value(){
			return "";
		}
		Results_value(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.results_count_value()));
			return obj;
		}
		results_count_word(){
			return "";
		}
		Results_word(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.results_count_word()));
			return obj;
		}
		Results_count(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				(this.Results_text()), 
				(this.Results_value()), 
				(this.Results_word())
			]);
			return obj;
		}
		property_link(id){
			return "";
		}
		property_image(id){
			return "";
		}
		property_badge(id){
			return "";
		}
		property_badge_house(id){
			return false;
		}
		property_price(id){
			return "";
		}
		property_address(id){
			return "";
		}
		property_meta_rooms(id){
			return "";
		}
		property_meta_area(id){
			return "";
		}
		property_meta_floor(id){
			return "";
		}
		Property_card(id){
			const obj = new this.$.$bog_brl_property_card();
			(obj.uri) = () => ((this.property_link(id)));
			(obj.image) = () => ((this.property_image(id)));
			(obj.badge) = () => ((this.property_badge(id)));
			(obj.badge_house) = () => ((this.property_badge_house(id)));
			(obj.price) = () => ((this.property_price(id)));
			(obj.address) = () => ((this.property_address(id)));
			(obj.meta_rooms) = () => ((this.property_meta_rooms(id)));
			(obj.meta_area) = () => ((this.property_meta_area(id)));
			(obj.meta_floor) = () => ((this.property_meta_floor(id)));
			return obj;
		}
		property_rows(){
			return [(this.Property_card(id))];
		}
		Properties_grid(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ((this.property_rows()));
			return obj;
		}
		Container(){
			const obj = new this.$.$bog_brl_container();
			(obj.sub) = () => ([
				(this.Section_header()), 
				(this.Filters()), 
				(this.Results_count()), 
				(this.Properties_grid())
			]);
			return obj;
		}
		Catalog_section(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Container())]);
			return obj;
		}
		sub(){
			return [(this.Catalog_section())];
		}
	};
	($mol_mem(($.$bog_brl_catalog.prototype), "Section_title"));
	($mol_mem(($.$bog_brl_catalog.prototype), "Section_text"));
	($mol_mem(($.$bog_brl_catalog.prototype), "Section_header"));
	($mol_mem(($.$bog_brl_catalog.prototype), "Filter_type_label"));
	($mol_mem(($.$bog_brl_catalog.prototype), "filter_type_draft"));
	($mol_mem(($.$bog_brl_catalog.prototype), "Filter_type_select"));
	($mol_mem(($.$bog_brl_catalog.prototype), "Filter_type"));
	($mol_mem(($.$bog_brl_catalog.prototype), "Filter_rooms_label"));
	($mol_mem(($.$bog_brl_catalog.prototype), "filter_rooms_draft"));
	($mol_mem(($.$bog_brl_catalog.prototype), "Filter_rooms_select"));
	($mol_mem(($.$bog_brl_catalog.prototype), "Filter_rooms"));
	($mol_mem(($.$bog_brl_catalog.prototype), "Filter_district_label"));
	($mol_mem(($.$bog_brl_catalog.prototype), "filter_district_draft"));
	($mol_mem(($.$bog_brl_catalog.prototype), "Filter_district_select"));
	($mol_mem(($.$bog_brl_catalog.prototype), "Filter_district"));
	($mol_mem(($.$bog_brl_catalog.prototype), "Filter_price_min_label"));
	($mol_mem(($.$bog_brl_catalog.prototype), "filter_price_min_draft"));
	($mol_mem(($.$bog_brl_catalog.prototype), "Filter_price_min_input"));
	($mol_mem(($.$bog_brl_catalog.prototype), "Filter_price_min"));
	($mol_mem(($.$bog_brl_catalog.prototype), "Filter_price_max_label"));
	($mol_mem(($.$bog_brl_catalog.prototype), "filter_price_max_draft"));
	($mol_mem(($.$bog_brl_catalog.prototype), "Filter_price_max_input"));
	($mol_mem(($.$bog_brl_catalog.prototype), "Filter_price_max"));
	($mol_mem(($.$bog_brl_catalog.prototype), "apply_filters"));
	($mol_mem(($.$bog_brl_catalog.prototype), "Filter_apply"));
	($mol_mem(($.$bog_brl_catalog.prototype), "reset_filters"));
	($mol_mem(($.$bog_brl_catalog.prototype), "Filter_reset"));
	($mol_mem(($.$bog_brl_catalog.prototype), "Filters"));
	($mol_mem(($.$bog_brl_catalog.prototype), "Results_text"));
	($mol_mem(($.$bog_brl_catalog.prototype), "Results_value"));
	($mol_mem(($.$bog_brl_catalog.prototype), "Results_word"));
	($mol_mem(($.$bog_brl_catalog.prototype), "Results_count"));
	($mol_mem_key(($.$bog_brl_catalog.prototype), "Property_card"));
	($mol_mem(($.$bog_brl_catalog.prototype), "Properties_grid"));
	($mol_mem(($.$bog_brl_catalog.prototype), "Container"));
	($mol_mem(($.$bog_brl_catalog.prototype), "Catalog_section"));
	($.$bog_brl_property) = class $bog_brl_property extends ($.$mol_view) {
		catalog_link(){
			return "";
		}
		Back_link(){
			const obj = new this.$.$mol_link();
			(obj.uri) = () => ((this.catalog_link()));
			(obj.sub) = () => (["← Назад к каталогу"]);
			return obj;
		}
		current_image(){
			return "";
		}
		Gallery_image(){
			const obj = new this.$.$mol_image();
			(obj.uri) = () => ((this.current_image()));
			return obj;
		}
		prev_image(next){
			if(next !== undefined) return next;
			return null;
		}
		Gallery_prev(){
			const obj = new this.$.$mol_button();
			(obj.click) = (next) => ((this.prev_image(next)));
			(obj.sub) = () => (["‹"]);
			return obj;
		}
		next_image(next){
			if(next !== undefined) return next;
			return null;
		}
		Gallery_next(){
			const obj = new this.$.$mol_button();
			(obj.click) = (next) => ((this.next_image(next)));
			(obj.sub) = () => (["›"]);
			return obj;
		}
		Gallery_arrows(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Gallery_prev()), (this.Gallery_next())]);
			return obj;
		}
		dot_active(id){
			return false;
		}
		dot_select(id, next){
			if(next !== undefined) return next;
			return null;
		}
		Gallery_dot(id){
			const obj = new this.$.$bog_brl_gallery_dot();
			(obj.active) = () => ((this.dot_active(id)));
			(obj.click) = (next) => ((this.dot_select(id, next)));
			return obj;
		}
		dot_rows(){
			return [(this.Gallery_dot(id))];
		}
		Gallery_nav(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ((this.dot_rows()));
			return obj;
		}
		Gallery(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				(this.Gallery_image()), 
				(this.Gallery_arrows()), 
				(this.Gallery_nav())
			]);
			return obj;
		}
		property_title(){
			return "";
		}
		Property_title(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.property_title()));
			return obj;
		}
		property_description(){
			return "";
		}
		Property_desc(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.property_description()));
			return obj;
		}
		Property_features_title(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Удобства"]);
			return obj;
		}
		feature_text(id){
			return "";
		}
		Feature(id){
			const obj = new this.$.$bog_brl_feature();
			(obj.text) = () => ((this.feature_text(id)));
			return obj;
		}
		feature_rows(){
			return [(this.Feature(id))];
		}
		Property_features(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ((this.feature_rows()));
			return obj;
		}
		Property_info(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				(this.Property_title()), 
				(this.Property_desc()), 
				(this.Property_features_title()), 
				(this.Property_features())
			]);
			return obj;
		}
		Property_main(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Gallery()), (this.Property_info())]);
			return obj;
		}
		sidebar_price_value(){
			return "";
		}
		Sidebar_price_value(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.sidebar_price_value()));
			return obj;
		}
		Sidebar_price_unit(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["/ мес"]);
			return obj;
		}
		Sidebar_price(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Sidebar_price_value()), (this.Sidebar_price_unit())]);
			return obj;
		}
		sidebar_type_house(){
			return false;
		}
		sidebar_type(){
			return "";
		}
		Sidebar_type_text(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.sidebar_type()));
			return obj;
		}
		Sidebar_type(){
			const obj = new this.$.$mol_view();
			(obj.attr) = () => ({"bog_brl_sidebar_type_house": (this.sidebar_type_house())});
			(obj.sub) = () => ([(this.Sidebar_type_text())]);
			return obj;
		}
		spec_label(id){
			return "";
		}
		spec_value(id){
			return "";
		}
		Spec(id){
			const obj = new this.$.$bog_brl_spec();
			(obj.label) = () => ((this.spec_label(id)));
			(obj.value) = () => ((this.spec_value(id)));
			return obj;
		}
		spec_rows(){
			return [(this.Spec(id))];
		}
		Sidebar_specs(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ((this.spec_rows()));
			return obj;
		}
		Deal_title(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Условия сделки"]);
			return obj;
		}
		deal_label(id){
			return "";
		}
		deal_value(id){
			return "";
		}
		Deal_row(id){
			const obj = new this.$.$bog_brl_deal_row();
			(obj.label) = () => ((this.deal_label(id)));
			(obj.value) = () => ((this.deal_value(id)));
			return obj;
		}
		deal_rows(){
			return [(this.Deal_row(id))];
		}
		Deal_rows(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ((this.deal_rows()));
			return obj;
		}
		Deal_terms(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Deal_title()), (this.Deal_rows())]);
			return obj;
		}
		telegram_url(){
			return "";
		}
		Sidebar_telegram(){
			const obj = new this.$.$bog_brl_btn_telegram();
			(obj.label) = () => ("✈ Написать в Telegram");
			(obj.uri) = () => ((this.telegram_url()));
			return obj;
		}
		phone_label(){
			return "";
		}
		phone_url(){
			return "";
		}
		Sidebar_phone(){
			const obj = new this.$.$bog_brl_btn_phone();
			(obj.label) = () => ((this.phone_label()));
			(obj.uri) = () => ((this.phone_url()));
			return obj;
		}
		Sidebar_contacts(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Sidebar_telegram()), (this.Sidebar_phone())]);
			return obj;
		}
		Property_sidebar(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				(this.Sidebar_price()), 
				(this.Sidebar_type()), 
				(this.Sidebar_specs()), 
				(this.Deal_terms()), 
				(this.Sidebar_contacts())
			]);
			return obj;
		}
		Property_grid(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Property_main()), (this.Property_sidebar())]);
			return obj;
		}
		Container(){
			const obj = new this.$.$bog_brl_container();
			(obj.sub) = () => ([(this.Back_link()), (this.Property_grid())]);
			return obj;
		}
		Property_section(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Container())]);
			return obj;
		}
		property_id(next){
			if(next !== undefined) return next;
			return null;
		}
		sub(){
			return [(this.Property_section())];
		}
	};
	($mol_mem(($.$bog_brl_property.prototype), "Back_link"));
	($mol_mem(($.$bog_brl_property.prototype), "Gallery_image"));
	($mol_mem(($.$bog_brl_property.prototype), "prev_image"));
	($mol_mem(($.$bog_brl_property.prototype), "Gallery_prev"));
	($mol_mem(($.$bog_brl_property.prototype), "next_image"));
	($mol_mem(($.$bog_brl_property.prototype), "Gallery_next"));
	($mol_mem(($.$bog_brl_property.prototype), "Gallery_arrows"));
	($mol_mem_key(($.$bog_brl_property.prototype), "dot_select"));
	($mol_mem_key(($.$bog_brl_property.prototype), "Gallery_dot"));
	($mol_mem(($.$bog_brl_property.prototype), "Gallery_nav"));
	($mol_mem(($.$bog_brl_property.prototype), "Gallery"));
	($mol_mem(($.$bog_brl_property.prototype), "Property_title"));
	($mol_mem(($.$bog_brl_property.prototype), "Property_desc"));
	($mol_mem(($.$bog_brl_property.prototype), "Property_features_title"));
	($mol_mem_key(($.$bog_brl_property.prototype), "Feature"));
	($mol_mem(($.$bog_brl_property.prototype), "Property_features"));
	($mol_mem(($.$bog_brl_property.prototype), "Property_info"));
	($mol_mem(($.$bog_brl_property.prototype), "Property_main"));
	($mol_mem(($.$bog_brl_property.prototype), "Sidebar_price_value"));
	($mol_mem(($.$bog_brl_property.prototype), "Sidebar_price_unit"));
	($mol_mem(($.$bog_brl_property.prototype), "Sidebar_price"));
	($mol_mem(($.$bog_brl_property.prototype), "Sidebar_type_text"));
	($mol_mem(($.$bog_brl_property.prototype), "Sidebar_type"));
	($mol_mem_key(($.$bog_brl_property.prototype), "Spec"));
	($mol_mem(($.$bog_brl_property.prototype), "Sidebar_specs"));
	($mol_mem(($.$bog_brl_property.prototype), "Deal_title"));
	($mol_mem_key(($.$bog_brl_property.prototype), "Deal_row"));
	($mol_mem(($.$bog_brl_property.prototype), "Deal_rows"));
	($mol_mem(($.$bog_brl_property.prototype), "Deal_terms"));
	($mol_mem(($.$bog_brl_property.prototype), "Sidebar_telegram"));
	($mol_mem(($.$bog_brl_property.prototype), "Sidebar_phone"));
	($mol_mem(($.$bog_brl_property.prototype), "Sidebar_contacts"));
	($mol_mem(($.$bog_brl_property.prototype), "Property_sidebar"));
	($mol_mem(($.$bog_brl_property.prototype), "Property_grid"));
	($mol_mem(($.$bog_brl_property.prototype), "Container"));
	($mol_mem(($.$bog_brl_property.prototype), "Property_section"));
	($mol_mem(($.$bog_brl_property.prototype), "property_id"));
	($.$bog_brl_landlords) = class $bog_brl_landlords extends ($.$mol_view) {
		Landlord_badge_dot(){
			const obj = new this.$.$mol_view();
			return obj;
		}
		Landlord_badge_text(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Для собственников"]);
			return obj;
		}
		Landlord_badge(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Landlord_badge_dot()), (this.Landlord_badge_text())]);
			return obj;
		}
		Landlord_title_prefix(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Сдайте квартиру или дом"]);
			return obj;
		}
		Landlord_title_em(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["без головной боли"]);
			return obj;
		}
		Landlord_title(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Landlord_title_prefix()), (this.Landlord_title_em())]);
			return obj;
		}
		Landlord_sub(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Мы берём на себя подбор арендаторов, показы, договор и контроль. Вы получаете надёжного жильца. Комиссия — всего 20%."]);
			return obj;
		}
		Landlord_hero_container(){
			const obj = new this.$.$bog_brl_container();
			(obj.sub) = () => ([
				(this.Landlord_badge()), 
				(this.Landlord_title()), 
				(this.Landlord_sub())
			]);
			return obj;
		}
		Landlord_hero(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Landlord_hero_container())]);
			return obj;
		}
		landlord_benefit_icon(id){
			return "";
		}
		landlord_benefit_title(id){
			return "";
		}
		landlord_benefit_text(id){
			return "";
		}
		Benefit(id){
			const obj = new this.$.$bog_brl_landlord_benefit();
			(obj.icon) = () => ((this.landlord_benefit_icon(id)));
			(obj.title) = () => ((this.landlord_benefit_title(id)));
			(obj.text) = () => ((this.landlord_benefit_text(id)));
			return obj;
		}
		landlord_benefit_rows(){
			return [(this.Benefit(id))];
		}
		Landlord_benefits(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ((this.landlord_benefit_rows()));
			return obj;
		}
		Landlord_cta_title(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Хотите сдать объект?"]);
			return obj;
		}
		Landlord_cta_text(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Напишите нам — обсудим условия, сроки и следующие шаги. Без обязательств."]);
			return obj;
		}
		telegram_url(){
			return "";
		}
		Landlord_cta_telegram(){
			const obj = new this.$.$bog_brl_btn_telegram();
			(obj.label) = () => ("✈ Написать в Telegram");
			(obj.uri) = () => ((this.telegram_url()));
			return obj;
		}
		phone_label(){
			return "";
		}
		phone_url(){
			return "";
		}
		Landlord_cta_phone(){
			const obj = new this.$.$bog_brl_btn_phone();
			(obj.label) = () => ((this.phone_label()));
			(obj.uri) = () => ((this.phone_url()));
			return obj;
		}
		Landlord_cta_contacts(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Landlord_cta_telegram()), (this.Landlord_cta_phone())]);
			return obj;
		}
		Landlord_cta(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				(this.Landlord_cta_title()), 
				(this.Landlord_cta_text()), 
				(this.Landlord_cta_contacts())
			]);
			return obj;
		}
		Landlord_grid(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Landlord_benefits()), (this.Landlord_cta())]);
			return obj;
		}
		Commission_title(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["За что вы платите 20%?"]);
			return obj;
		}
		commission_text(id){
			return "";
		}
		Commission_item(id){
			const obj = new this.$.$bog_brl_commission_item();
			(obj.text) = () => ((this.commission_text(id)));
			return obj;
		}
		commission_rows(){
			return [(this.Commission_item(id))];
		}
		Commission_list(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ((this.commission_rows()));
			return obj;
		}
		Commission_explainer(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Commission_title()), (this.Commission_list())]);
			return obj;
		}
		Landlord_section_container(){
			const obj = new this.$.$bog_brl_container();
			(obj.sub) = () => ([(this.Landlord_grid()), (this.Commission_explainer())]);
			return obj;
		}
		Landlord_section(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Landlord_section_container())]);
			return obj;
		}
		sub(){
			return [(this.Landlord_hero()), (this.Landlord_section())];
		}
	};
	($mol_mem(($.$bog_brl_landlords.prototype), "Landlord_badge_dot"));
	($mol_mem(($.$bog_brl_landlords.prototype), "Landlord_badge_text"));
	($mol_mem(($.$bog_brl_landlords.prototype), "Landlord_badge"));
	($mol_mem(($.$bog_brl_landlords.prototype), "Landlord_title_prefix"));
	($mol_mem(($.$bog_brl_landlords.prototype), "Landlord_title_em"));
	($mol_mem(($.$bog_brl_landlords.prototype), "Landlord_title"));
	($mol_mem(($.$bog_brl_landlords.prototype), "Landlord_sub"));
	($mol_mem(($.$bog_brl_landlords.prototype), "Landlord_hero_container"));
	($mol_mem(($.$bog_brl_landlords.prototype), "Landlord_hero"));
	($mol_mem_key(($.$bog_brl_landlords.prototype), "Benefit"));
	($mol_mem(($.$bog_brl_landlords.prototype), "Landlord_benefits"));
	($mol_mem(($.$bog_brl_landlords.prototype), "Landlord_cta_title"));
	($mol_mem(($.$bog_brl_landlords.prototype), "Landlord_cta_text"));
	($mol_mem(($.$bog_brl_landlords.prototype), "Landlord_cta_telegram"));
	($mol_mem(($.$bog_brl_landlords.prototype), "Landlord_cta_phone"));
	($mol_mem(($.$bog_brl_landlords.prototype), "Landlord_cta_contacts"));
	($mol_mem(($.$bog_brl_landlords.prototype), "Landlord_cta"));
	($mol_mem(($.$bog_brl_landlords.prototype), "Landlord_grid"));
	($mol_mem(($.$bog_brl_landlords.prototype), "Commission_title"));
	($mol_mem_key(($.$bog_brl_landlords.prototype), "Commission_item"));
	($mol_mem(($.$bog_brl_landlords.prototype), "Commission_list"));
	($mol_mem(($.$bog_brl_landlords.prototype), "Commission_explainer"));
	($mol_mem(($.$bog_brl_landlords.prototype), "Landlord_section_container"));
	($mol_mem(($.$bog_brl_landlords.prototype), "Landlord_section"));
	($.$bog_brl_about) = class $bog_brl_about extends ($.$mol_view) {
		About_visual_title(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Мы отвечаем за процесс и баланс интересов"]);
			return obj;
		}
		About_visual_text(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Не просто сводим людей — ведём сделку от звонка до ключей. Посредник, который работает на обе стороны одинаково честно."]);
			return obj;
		}
		About_visual(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.About_visual_title()), (this.About_visual_text())]);
			return obj;
		}
		About_title(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Прозрачная аренда в Казани"]);
			return obj;
		}
		About_paragraph_1(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["BZRL — сервис-посредник по аренде квартир и домов в Казани. Мы не скрываем свою роль: наша задача — сделать аренду безопасной и понятной для обеих сторон."]);
			return obj;
		}
		About_paragraph_2(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Фиксированная комиссия 20% — самая низкая на рынке. Нет сделки — нет оплаты."]);
			return obj;
		}
		About_paragraph_3(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Каждый объект проверяется лично. Каждый арендатор проходит отбор. Договор — до передачи денег."]);
			return obj;
		}
		about_value_icon(id){
			return "";
		}
		about_value_title(id){
			return "";
		}
		about_value_text(id){
			return "";
		}
		About_value(id){
			const obj = new this.$.$bog_brl_about_value();
			(obj.icon) = () => ((this.about_value_icon(id)));
			(obj.title) = () => ((this.about_value_title(id)));
			(obj.text) = () => ((this.about_value_text(id)));
			return obj;
		}
		about_value_rows(){
			return [(this.About_value(id))];
		}
		About_values(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ((this.about_value_rows()));
			return obj;
		}
		About_text(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				(this.About_title()), 
				(this.About_paragraph_1()), 
				(this.About_paragraph_2()), 
				(this.About_paragraph_3()), 
				(this.About_values())
			]);
			return obj;
		}
		About_grid(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.About_visual()), (this.About_text())]);
			return obj;
		}
		Container(){
			const obj = new this.$.$bog_brl_container();
			(obj.sub) = () => ([(this.About_grid())]);
			return obj;
		}
		About_section(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Container())]);
			return obj;
		}
		sub(){
			return [(this.About_section())];
		}
	};
	($mol_mem(($.$bog_brl_about.prototype), "About_visual_title"));
	($mol_mem(($.$bog_brl_about.prototype), "About_visual_text"));
	($mol_mem(($.$bog_brl_about.prototype), "About_visual"));
	($mol_mem(($.$bog_brl_about.prototype), "About_title"));
	($mol_mem(($.$bog_brl_about.prototype), "About_paragraph_1"));
	($mol_mem(($.$bog_brl_about.prototype), "About_paragraph_2"));
	($mol_mem(($.$bog_brl_about.prototype), "About_paragraph_3"));
	($mol_mem_key(($.$bog_brl_about.prototype), "About_value"));
	($mol_mem(($.$bog_brl_about.prototype), "About_values"));
	($mol_mem(($.$bog_brl_about.prototype), "About_text"));
	($mol_mem(($.$bog_brl_about.prototype), "About_grid"));
	($mol_mem(($.$bog_brl_about.prototype), "Container"));
	($mol_mem(($.$bog_brl_about.prototype), "About_section"));
	($.$bog_brl_contacts) = class $bog_brl_contacts extends ($.$mol_view) {
		Section_title(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Контакты"]);
			return obj;
		}
		Section_text(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Свяжитесь любым удобным способом — без форм и ожиданий"]);
			return obj;
		}
		Section_header(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Section_title()), (this.Section_text())]);
			return obj;
		}
		Contact_tg(){
			const obj = new this.$.$bog_brl_contact_card();
			(obj.icon) = () => ("✈");
			(obj.theme) = () => ("tg");
			(obj.title) = () => ("Telegram");
			(obj.text) = () => ("Основной способ связи. Отвечаем в течение часа.");
			(obj.link_label) = () => ("@yusdanil →");
			(obj.link_uri) = () => ("https://t.me/yusdanil");
			return obj;
		}
		Contact_phone(){
			const obj = new this.$.$bog_brl_contact_card();
			(obj.icon) = () => ("📞");
			(obj.theme) = () => ("phone");
			(obj.title) = () => ("Телефон");
			(obj.text) = () => ("Для срочных вопросов. Пн–Сб, 9:00–20:00.");
			(obj.link_label) = () => ("+7 999 132-31-41 →");
			(obj.link_uri) = () => ("tel:+79991323141");
			return obj;
		}
		Contact_addr(){
			const obj = new this.$.$bog_brl_contact_card();
			(obj.icon) = () => ("📍");
			(obj.theme) = () => ("addr");
			(obj.title) = () => ("Казань");
			(obj.text) = () => ("Работаем по всем районам. Квартиры и дома.");
			(obj.note) = () => ("Встречи по договорённости");
			return obj;
		}
		Contacts_grid(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				(this.Contact_tg()), 
				(this.Contact_phone()), 
				(this.Contact_addr())
			]);
			return obj;
		}
		Container(){
			const obj = new this.$.$bog_brl_container();
			(obj.sub) = () => ([(this.Section_header()), (this.Contacts_grid())]);
			return obj;
		}
		Contacts_section(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Container())]);
			return obj;
		}
		sub(){
			return [(this.Contacts_section())];
		}
	};
	($mol_mem(($.$bog_brl_contacts.prototype), "Section_title"));
	($mol_mem(($.$bog_brl_contacts.prototype), "Section_text"));
	($mol_mem(($.$bog_brl_contacts.prototype), "Section_header"));
	($mol_mem(($.$bog_brl_contacts.prototype), "Contact_tg"));
	($mol_mem(($.$bog_brl_contacts.prototype), "Contact_phone"));
	($mol_mem(($.$bog_brl_contacts.prototype), "Contact_addr"));
	($mol_mem(($.$bog_brl_contacts.prototype), "Contacts_grid"));
	($mol_mem(($.$bog_brl_contacts.prototype), "Container"));
	($mol_mem(($.$bog_brl_contacts.prototype), "Contacts_section"));
	($.$bog_brl_footer) = class $bog_brl_footer extends ($.$mol_view) {
		home_link(){
			return "";
		}
		Footer_logo_mark(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["BZ"]);
			return obj;
		}
		Footer_logo_text(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["BZRL"]);
			return obj;
		}
		Footer_logo(){
			const obj = new this.$.$mol_link();
			(obj.uri) = () => ((this.home_link()));
			(obj.sub) = () => ([(this.Footer_logo_mark()), (this.Footer_logo_text())]);
			return obj;
		}
		Footer_brand_text(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Сервис-посредник по аренде недвижимости в Казани. Квартиры и дома · Комиссия 20%."]);
			return obj;
		}
		Footer_brand(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Footer_logo()), (this.Footer_brand_text())]);
			return obj;
		}
		Footer_nav_title(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Навигация"]);
			return obj;
		}
		Footer_link_home(){
			const obj = new this.$.$bog_brl_footer_link();
			(obj.label) = () => ("Главная");
			(obj.uri) = () => ((this.home_link()));
			return obj;
		}
		catalog_link(){
			return "";
		}
		Footer_link_catalog(){
			const obj = new this.$.$bog_brl_footer_link();
			(obj.label) = () => ("Недвижимость");
			(obj.uri) = () => ((this.catalog_link()));
			return obj;
		}
		landlords_link(){
			return "";
		}
		Footer_link_landlords(){
			const obj = new this.$.$bog_brl_footer_link();
			(obj.label) = () => ("Арендодателям");
			(obj.uri) = () => ((this.landlords_link()));
			return obj;
		}
		about_link(){
			return "";
		}
		Footer_link_about(){
			const obj = new this.$.$bog_brl_footer_link();
			(obj.label) = () => ("О проекте");
			(obj.uri) = () => ((this.about_link()));
			return obj;
		}
		contacts_link(){
			return "";
		}
		Footer_link_contacts(){
			const obj = new this.$.$bog_brl_footer_link();
			(obj.label) = () => ("Контакты");
			(obj.uri) = () => ((this.contacts_link()));
			return obj;
		}
		Footer_nav_links(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				(this.Footer_link_home()), 
				(this.Footer_link_catalog()), 
				(this.Footer_link_landlords()), 
				(this.Footer_link_about()), 
				(this.Footer_link_contacts())
			]);
			return obj;
		}
		Footer_nav(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Footer_nav_title()), (this.Footer_nav_links())]);
			return obj;
		}
		Footer_contacts_title(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Связаться"]);
			return obj;
		}
		telegram_url(){
			return "";
		}
		Footer_tg(){
			const obj = new this.$.$bog_brl_footer_link();
			(obj.label) = () => ("Telegram: @yusdanil");
			(obj.uri) = () => ((this.telegram_url()));
			return obj;
		}
		phone_url(){
			return "";
		}
		Footer_phone(){
			const obj = new this.$.$bog_brl_footer_link();
			(obj.label) = () => ("+7 999 132-31-41");
			(obj.uri) = () => ((this.phone_url()));
			return obj;
		}
		Footer_contacts_links(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Footer_tg()), (this.Footer_phone())]);
			return obj;
		}
		Footer_contacts(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Footer_contacts_title()), (this.Footer_contacts_links())]);
			return obj;
		}
		Footer_info_title(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Информация"]);
			return obj;
		}
		Footer_info_contract(){
			const obj = new this.$.$bog_brl_footer_link();
			(obj.label) = () => ("Типовой договор");
			(obj.uri) = () => ("#");
			return obj;
		}
		Footer_info_faq(){
			const obj = new this.$.$bog_brl_footer_link();
			(obj.label) = () => ("Частые вопросы");
			(obj.uri) = () => ("#");
			return obj;
		}
		Footer_info_privacy(){
			const obj = new this.$.$bog_brl_footer_link();
			(obj.label) = () => ("Политика конфиденциальности");
			(obj.uri) = () => ("#");
			return obj;
		}
		Footer_info_links(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				(this.Footer_info_contract()), 
				(this.Footer_info_faq()), 
				(this.Footer_info_privacy())
			]);
			return obj;
		}
		Footer_info(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Footer_info_title()), (this.Footer_info_links())]);
			return obj;
		}
		Footer_grid(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				(this.Footer_brand()), 
				(this.Footer_nav()), 
				(this.Footer_contacts()), 
				(this.Footer_info())
			]);
			return obj;
		}
		Footer_copy(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["© 2025 BZRL. Все права защищены."]);
			return obj;
		}
		Footer_location(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Казань · Аренда недвижимости"]);
			return obj;
		}
		Footer_bottom(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Footer_copy()), (this.Footer_location())]);
			return obj;
		}
		Container(){
			const obj = new this.$.$bog_brl_container();
			(obj.sub) = () => ([(this.Footer_grid()), (this.Footer_bottom())]);
			return obj;
		}
		page(next){
			if(next !== undefined) return next;
			return "home";
		}
		sub(){
			return [(this.Container())];
		}
	};
	($mol_mem(($.$bog_brl_footer.prototype), "Footer_logo_mark"));
	($mol_mem(($.$bog_brl_footer.prototype), "Footer_logo_text"));
	($mol_mem(($.$bog_brl_footer.prototype), "Footer_logo"));
	($mol_mem(($.$bog_brl_footer.prototype), "Footer_brand_text"));
	($mol_mem(($.$bog_brl_footer.prototype), "Footer_brand"));
	($mol_mem(($.$bog_brl_footer.prototype), "Footer_nav_title"));
	($mol_mem(($.$bog_brl_footer.prototype), "Footer_link_home"));
	($mol_mem(($.$bog_brl_footer.prototype), "Footer_link_catalog"));
	($mol_mem(($.$bog_brl_footer.prototype), "Footer_link_landlords"));
	($mol_mem(($.$bog_brl_footer.prototype), "Footer_link_about"));
	($mol_mem(($.$bog_brl_footer.prototype), "Footer_link_contacts"));
	($mol_mem(($.$bog_brl_footer.prototype), "Footer_nav_links"));
	($mol_mem(($.$bog_brl_footer.prototype), "Footer_nav"));
	($mol_mem(($.$bog_brl_footer.prototype), "Footer_contacts_title"));
	($mol_mem(($.$bog_brl_footer.prototype), "Footer_tg"));
	($mol_mem(($.$bog_brl_footer.prototype), "Footer_phone"));
	($mol_mem(($.$bog_brl_footer.prototype), "Footer_contacts_links"));
	($mol_mem(($.$bog_brl_footer.prototype), "Footer_contacts"));
	($mol_mem(($.$bog_brl_footer.prototype), "Footer_info_title"));
	($mol_mem(($.$bog_brl_footer.prototype), "Footer_info_contract"));
	($mol_mem(($.$bog_brl_footer.prototype), "Footer_info_faq"));
	($mol_mem(($.$bog_brl_footer.prototype), "Footer_info_privacy"));
	($mol_mem(($.$bog_brl_footer.prototype), "Footer_info_links"));
	($mol_mem(($.$bog_brl_footer.prototype), "Footer_info"));
	($mol_mem(($.$bog_brl_footer.prototype), "Footer_grid"));
	($mol_mem(($.$bog_brl_footer.prototype), "Footer_copy"));
	($mol_mem(($.$bog_brl_footer.prototype), "Footer_location"));
	($mol_mem(($.$bog_brl_footer.prototype), "Footer_bottom"));
	($mol_mem(($.$bog_brl_footer.prototype), "Container"));
	($mol_mem(($.$bog_brl_footer.prototype), "page"));


;
"use strict";


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const PAGE_IDS = ['home', 'catalog', 'property', 'landlords', 'about', 'contacts'];
        const CONTACTS = {
            telegram: { handle: '@yusdanil', url: 'https://t.me/yusdanil' },
            phone: { display: '+7 999 132-31-41', url: 'tel:+79991323141' },
        };
        const HOME_STATS = [
            { number: '20%', label: 'Фиксированная комиссия' },
            { number: '150+', label: 'Объектов в базе' },
            { number: '800+', label: 'Успешных сделок' },
            { number: '1 день', label: 'Среднее время подбора' },
        ];
        const HOME_STEPS = [
            { num: '01', icon: '🔍', title: 'Анализ объекта', text: 'Проверяем документы, собственника, состояние жилья' },
            { num: '02', icon: '📸', title: 'Подготовка', text: 'Реальные фото, описание, размещение в каталоге' },
            { num: '03', icon: '👥', title: 'Отбор арендаторов', text: 'Фильтрация по платёжеспособности и документам' },
            { num: '04', icon: '📋', title: 'Договор', text: 'Подписываем договор до передачи денег' },
            { num: '05', icon: '🔑', title: 'Передача ключей', text: 'Фиксируем состояние, передаём ключи' },
        ];
        const HOME_ADVANTAGES = [
            {
                icon: '💰',
                theme: 'warm',
                title: 'Комиссия 20% — и точка',
                text: 'Фиксированная ставка без скрытых платежей. У большинства агентств — от 50% до 100%.',
            },
            {
                icon: '🛡️',
                theme: 'green',
                title: 'Проверенные объекты',
                text: 'Документы собственника, реальные фото, актуальная цена. Никаких фейков и субаренд.',
            },
            {
                icon: '📋',
                theme: 'muted',
                title: 'Договор до денег',
                text: 'Сначала подписываем договор — потом передаём деньги. Защита для обеих сторон.',
            },
            {
                icon: '🏠',
                theme: 'green',
                title: 'Квартиры и дома',
                text: 'В каталоге не только квартиры — есть частные дома для долгосрочной аренды.',
            },
            {
                icon: '⚡',
                theme: 'warm',
                title: 'Быстрая связь',
                text: 'Никаких форм. Пишете в Telegram или звоните — отвечаем в течение часа.',
            },
            {
                icon: '🤝',
                theme: 'muted',
                title: 'Баланс интересов',
                text: 'Мы посредник, который держит баланс и отвечает за процесс — не за одну сторону.',
            },
        ];
        const LANDLORD_BENEFITS = [
            {
                icon: '💰',
                title: 'Фиксированная комиссия 20%',
                text: 'Ровно 20% от месячной аренды — за полный цикл работы. Самая низкая ставка на рынке Казани.',
            },
            {
                icon: '👥',
                title: 'Проверка арендаторов',
                text: 'Отбираем жильцов по платёжеспособности, целям аренды и документам. Вы утверждаете финального кандидата.',
            },
            {
                icon: '📋',
                title: 'Договор и юридическая защита',
                text: 'Составляем типовой договор, фиксируем состояние квартиры. Всё прозрачно и законно.',
            },
            {
                icon: '⏱️',
                title: 'Экономия вашего времени',
                text: 'Фотосъёмка, размещение, показы и переговоры — на нас. Вам нужно только утвердить арендатора.',
            },
            {
                icon: '🔍',
                title: 'Минимум вовлечённости',
                text: 'Показы с вашим участием или без. Держим в курсе через Telegram на каждом шаге.',
            },
        ];
        const COMMISSION_ITEMS = [
            'Профессиональная фотосъёмка и описание объекта',
            'Размещение в каталоге и продвижение',
            'Приём и фильтрация обращений арендаторов',
            'Организация и проведение показов',
            'Проверка платёжеспособности и документов',
            'Составление договора аренды',
            'Акт приёма-передачи с фиксацией состояния',
            'Сопровождение сделки до передачи ключей',
        ];
        const ABOUT_VALUES = [
            { icon: '🔍', title: 'Проверка каждого объекта', text: 'Документы, собственник, фото, цена — всё реальное' },
            { icon: '📋', title: 'Договор до денег', text: 'Сначала подпись — потом оплата. Никак иначе' },
            { icon: '⚖️', title: 'Баланс интересов', text: 'Защищаем и арендатора, и собственника одинаково' },
        ];
        const PROPERTIES = [
            {
                id: 1,
                propertyType: 'apartment',
                rooms: 1,
                area: 38,
                floor: 5,
                totalFloors: 16,
                price: 22000,
                deposit: '1 месяц',
                district: 'Ново-Савиновский',
                address: 'ул. Амирхана, 17',
                title: '1-комнатная, ул. Амирхана',
                description: 'Светлая квартира с отличным ремонтом рядом с парком Победы. Полностью меблирована: кухня со встроенной техникой, двуспальная кровать, рабочий стол. Метро «Козья Слобода» в пешей доступности.',
                images: [
                    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=500&fit=crop',
                    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=500&fit=crop',
                    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=500&fit=crop',
                ],
                features: ['Wi-Fi', 'Стиральная машина', 'Кондиционер', 'Балкон', 'Парковка', 'Метро 7 мин'],
            },
            {
                id: 2,
                propertyType: 'apartment',
                rooms: 2,
                area: 56,
                floor: 8,
                totalFloors: 22,
                price: 35000,
                deposit: '1 месяц',
                district: 'Вахитовский',
                address: 'ул. Пушкина, 32',
                title: '2-комнатная, центр',
                description: 'Просторная двушка в 5 минутах от Кремля. Панорамные окна, дизайнерский ремонт, два санузла. Полностью оборудованная кухня, Smart TV.',
                images: [
                    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=500&fit=crop',
                    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop',
                    'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&h=500&fit=crop',
                ],
                features: ['Wi-Fi', 'Посудомоечная машина', 'Smart TV', '2 санузла', 'Центр города', 'Лифт'],
            },
            {
                id: 3,
                propertyType: 'apartment',
                rooms: 3,
                area: 78,
                floor: 3,
                totalFloors: 10,
                price: 45000,
                deposit: '1 месяц',
                district: 'Советский',
                address: 'ул. Мусина, 68',
                title: '3-комнатная, ул. Мусина',
                description: 'Семейная квартира с отдельными комнатами, просторной кухней-гостиной и двумя балконами. Рядом школа, детсад, парк. Тихий район.',
                images: [
                    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=500&fit=crop',
                    'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=500&fit=crop',
                    'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=500&fit=crop',
                ],
                features: ['Wi-Fi', 'Стиральная машина', 'Посудомойка', '2 балкона', 'Кладовая', 'Школа рядом'],
            },
            {
                id: 4,
                propertyType: 'apartment',
                rooms: 2,
                area: 52,
                floor: 15,
                totalFloors: 20,
                price: 28000,
                deposit: '1 месяц',
                district: 'Приволжский',
                address: 'ул. Гарифьянова, 25',
                title: '2-комнатная, Горки',
                description: 'Современная квартира в ЖК «Горки Парк» с видом на Казанку. Евроремонт 2023, новая мебель и техника. Подземная парковка включена.',
                images: [
                    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop',
                    'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=500&fit=crop',
                    'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=500&fit=crop',
                ],
                features: ['Wi-Fi', 'Подземная парковка', 'Кондиционер', 'Вид на реку', 'Новая мебель', 'ТЦ «Мега» рядом'],
            },
            {
                id: 5,
                propertyType: 'apartment',
                rooms: 1,
                area: 40,
                floor: 6,
                totalFloors: 9,
                price: 18000,
                deposit: '1 месяц',
                district: 'Авиастроительный',
                address: 'ул. Копылова, 14',
                title: '1-комнатная, ул. Копылова',
                description: 'Бюджетный вариант в спокойном районе. Косметический ремонт, вся мебель и техника. Рядом транспорт и магазины.',
                images: [
                    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=500&fit=crop',
                    'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=800&h=500&fit=crop',
                    'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=500&fit=crop',
                ],
                features: ['Wi-Fi', 'Стиральная машина', 'Новый ламинат', 'Магазины рядом', 'Трамвай 3 мин', 'Тихий двор'],
            },
            {
                id: 6,
                propertyType: 'apartment',
                rooms: 4,
                area: 95,
                floor: 4,
                totalFloors: 12,
                price: 65000,
                deposit: '2 месяца',
                district: 'Вахитовский',
                address: 'ул. Островского, 7',
                title: '4-комнатная, центр, премиум',
                description: 'Элитная квартира с авторским ремонтом. Итальянская мебель, техника Miele. Четыре комнаты, гардеробная, два санузла с тёплым полом. Консьерж, паркинг.',
                images: [
                    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=500&fit=crop',
                    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop',
                    'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=500&fit=crop',
                ],
                features: ['Wi-Fi', 'Консьерж', 'Тёплый пол', 'Гардеробная', 'Паркинг', 'Техника Miele'],
            },
            {
                id: 7,
                propertyType: 'house',
                rooms: 3,
                area: 120,
                floor: 1,
                totalFloors: 2,
                price: 55000,
                deposit: '2 месяца',
                district: 'Приволжский',
                address: 'пос. Константиновка, ул. Озёрная, 14',
                title: 'Дом 120 м², Константиновка',
                description: 'Двухэтажный кирпичный дом. Первый этаж: кухня-гостиная 30 м², санузел. Второй: три спальни, ванная. Участок 6 соток, баня, парковка на 2 машины. Газ, центральная вода.',
                images: [
                    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=500&fit=crop',
                    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=500&fit=crop',
                    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop',
                ],
                features: [
                    'Участок 6 соток',
                    'Баня',
                    'Газовое отопление',
                    'Парковка 2 авто',
                    'Центральная вода',
                    'Тихий район',
                ],
            },
            {
                id: 8,
                propertyType: 'house',
                rooms: 4,
                area: 180,
                floor: 1,
                totalFloors: 2,
                price: 85000,
                deposit: '2 месяца',
                district: 'Советский',
                address: 'пос. Вознесенское, ул. Дачная, 22',
                title: 'Дом 180 м², Вознесенское',
                description: 'Просторный дом для большой семьи. Четыре спальни, два санузла, кабинет. Большая кухня-столовая с террасой. Участок 10 соток, гараж, детская площадка. Охраняемый посёлок.',
                images: [
                    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=500&fit=crop',
                    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=500&fit=crop',
                    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=500&fit=crop',
                ],
                features: [
                    'Участок 10 соток',
                    'Гараж на 2 авто',
                    'Терраса',
                    'Охрана посёлка',
                    'Детская площадка',
                    'Кабинет',
                ],
            },
            {
                id: 9,
                propertyType: 'apartment',
                rooms: 1,
                area: 34,
                floor: 12,
                totalFloors: 25,
                price: 25000,
                deposit: '1 месяц',
                district: 'Ново-Савиновский',
                address: 'пр. Ямашева, 103',
                title: '1-комнатная, пр. Ямашева',
                description: 'Хороший ремонт в новом доме. Компактная функциональная планировка. Высокий этаж с видом на город. Метро в 10 минутах.',
                images: [
                    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=500&fit=crop',
                    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=500&fit=crop',
                    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=500&fit=crop',
                ],
                features: ['Wi-Fi', 'Стиральная машина', 'Вид на город', 'Метро 10 мин', 'Лифт', 'Консьерж'],
            },
        ];
        function format_price(value) {
            return value.toLocaleString('ru-RU');
        }
        function result_word(count) {
            if (count % 10 === 1 && count % 100 !== 11)
                return 'объект';
            if ([2, 3, 4].includes(count % 10) && ![12, 13, 14].includes(count % 100))
                return 'объекта';
            return 'объектов';
        }
        function make_page_link(owner, page, property) {
            return owner.$.$mol_state_arg.link({
                page: page && page !== 'home' ? page : null,
                property: property == null ? null : String(property),
            });
        }
        class $bog_brl extends $.$bog_brl {
            page(next) {
                const normalized = next === 'home' ? null : next;
                if (next !== undefined && next !== 'property')
                    this.$.$mol_state_arg.value('property', null);
                return this.$.$mol_state_arg.value('page', normalized) ?? 'home';
            }
            property_id(next) {
                const raw = this.$.$mol_state_arg.value('property', next == null ? null : String(next));
                const value = raw ? Number(raw) : null;
                return Number.isFinite(value) ? value : null;
            }
            mobile_open(next) {
                return next ?? false;
            }
            page_index() {
                const page = this.page();
                const index = PAGE_IDS.indexOf(page);
                return String(index >= 0 ? index : 0);
            }
        }
        __decorate([
            $mol_mem
        ], $bog_brl.prototype, "page", null);
        __decorate([
            $mol_mem
        ], $bog_brl.prototype, "property_id", null);
        __decorate([
            $mol_mem
        ], $bog_brl.prototype, "mobile_open", null);
        __decorate([
            $mol_mem
        ], $bog_brl.prototype, "page_index", null);
        $$.$bog_brl = $bog_brl;
        class $bog_brl_header extends $.$bog_brl_header {
            home_link() {
                return make_page_link(this, 'home');
            }
            catalog_link() {
                return make_page_link(this, 'catalog');
            }
            landlords_link() {
                return make_page_link(this, 'landlords');
            }
            about_link() {
                return make_page_link(this, 'about');
            }
            contacts_link() {
                return make_page_link(this, 'contacts');
            }
            telegram_url() {
                return CONTACTS.telegram.url;
            }
            burger_toggle() {
                this.mobile_open(!this.mobile_open());
            }
        }
        __decorate([
            $mol_action
        ], $bog_brl_header.prototype, "burger_toggle", null);
        $$.$bog_brl_header = $bog_brl_header;
        class $bog_brl_mobile_nav extends $.$bog_brl_mobile_nav {
            telegram_url() {
                return CONTACTS.telegram.url;
            }
            mobile_home_click() {
                this.page('home');
                this.mobile_open(false);
            }
            mobile_catalog_click() {
                this.page('catalog');
                this.mobile_open(false);
            }
            mobile_landlords_click() {
                this.page('landlords');
                this.mobile_open(false);
            }
            mobile_about_click() {
                this.page('about');
                this.mobile_open(false);
            }
            mobile_contacts_click() {
                this.page('contacts');
                this.mobile_open(false);
            }
        }
        __decorate([
            $mol_action
        ], $bog_brl_mobile_nav.prototype, "mobile_home_click", null);
        __decorate([
            $mol_action
        ], $bog_brl_mobile_nav.prototype, "mobile_catalog_click", null);
        __decorate([
            $mol_action
        ], $bog_brl_mobile_nav.prototype, "mobile_landlords_click", null);
        __decorate([
            $mol_action
        ], $bog_brl_mobile_nav.prototype, "mobile_about_click", null);
        __decorate([
            $mol_action
        ], $bog_brl_mobile_nav.prototype, "mobile_contacts_click", null);
        $$.$bog_brl_mobile_nav = $bog_brl_mobile_nav;
        class $bog_brl_home extends $.$bog_brl_home {
            catalog_link() {
                return make_page_link(this, 'catalog');
            }
            telegram_url() {
                return CONTACTS.telegram.url;
            }
            stats_rows() {
                return HOME_STATS.map((_, index) => this.Stat(index));
            }
            stat_number(index) {
                return HOME_STATS[index]?.number ?? '';
            }
            stat_label(index) {
                return HOME_STATS[index]?.label ?? '';
            }
            steps_rows() {
                return HOME_STEPS.map((_, index) => this.Step(index));
            }
            step_num(index) {
                return HOME_STEPS[index]?.num ?? '';
            }
            step_icon(index) {
                return HOME_STEPS[index]?.icon ?? '';
            }
            step_title(index) {
                return HOME_STEPS[index]?.title ?? '';
            }
            step_text(index) {
                return HOME_STEPS[index]?.text ?? '';
            }
            advantages_rows() {
                return HOME_ADVANTAGES.map((_, index) => this.Advantage(index));
            }
            adv_icon(index) {
                return HOME_ADVANTAGES[index]?.icon ?? '';
            }
            adv_theme(index) {
                return HOME_ADVANTAGES[index]?.theme ?? 'muted';
            }
            adv_title(index) {
                return HOME_ADVANTAGES[index]?.title ?? '';
            }
            adv_text(index) {
                return HOME_ADVANTAGES[index]?.text ?? '';
            }
        }
        __decorate([
            $mol_mem
        ], $bog_brl_home.prototype, "stats_rows", null);
        __decorate([
            $mol_mem_key
        ], $bog_brl_home.prototype, "stat_number", null);
        __decorate([
            $mol_mem_key
        ], $bog_brl_home.prototype, "stat_label", null);
        __decorate([
            $mol_mem
        ], $bog_brl_home.prototype, "steps_rows", null);
        __decorate([
            $mol_mem_key
        ], $bog_brl_home.prototype, "step_num", null);
        __decorate([
            $mol_mem_key
        ], $bog_brl_home.prototype, "step_icon", null);
        __decorate([
            $mol_mem_key
        ], $bog_brl_home.prototype, "step_title", null);
        __decorate([
            $mol_mem_key
        ], $bog_brl_home.prototype, "step_text", null);
        __decorate([
            $mol_mem
        ], $bog_brl_home.prototype, "advantages_rows", null);
        __decorate([
            $mol_mem_key
        ], $bog_brl_home.prototype, "adv_icon", null);
        __decorate([
            $mol_mem_key
        ], $bog_brl_home.prototype, "adv_theme", null);
        __decorate([
            $mol_mem_key
        ], $bog_brl_home.prototype, "adv_title", null);
        __decorate([
            $mol_mem_key
        ], $bog_brl_home.prototype, "adv_text", null);
        $$.$bog_brl_home = $bog_brl_home;
        class $bog_brl_catalog extends $.$bog_brl_catalog {
            filter_type_draft(next) {
                return next ?? '';
            }
            filter_rooms_draft(next) {
                return next ?? '';
            }
            filter_district_draft(next) {
                return next ?? '';
            }
            filter_price_min_draft(next) {
                return next ?? '';
            }
            filter_price_max_draft(next) {
                return next ?? '';
            }
            filter_type(next) {
                return next ?? '';
            }
            filter_rooms(next) {
                return next ?? '';
            }
            filter_district(next) {
                return next ?? '';
            }
            filter_price_min(next) {
                return next ?? '';
            }
            filter_price_max(next) {
                return next ?? '';
            }
            filter_type_dict() {
                return {
                    '': 'Все объекты',
                    apartment: 'Квартиры',
                    house: 'Дома',
                };
            }
            filter_rooms_dict() {
                return {
                    '': 'Все',
                    r1: '1 комната',
                    r2: '2 комнаты',
                    r3: '3 комнаты',
                    r4: '4+ комнат',
                };
            }
            filter_district_dict() {
                const dict = { '': 'Все районы' };
                const districts = Array.from(new Set(PROPERTIES.map(property => property.district))).sort();
                for (const district of districts)
                    dict[district] = district;
                return dict;
            }
            apply_filters() {
                this.filter_type(this.filter_type_draft());
                this.filter_rooms(this.filter_rooms_draft());
                this.filter_district(this.filter_district_draft());
                this.filter_price_min(this.filter_price_min_draft());
                this.filter_price_max(this.filter_price_max_draft());
            }
            reset_filters() {
                this.filter_type_draft('');
                this.filter_rooms_draft('');
                this.filter_district_draft('');
                this.filter_price_min_draft('');
                this.filter_price_max_draft('');
                this.filter_type('');
                this.filter_rooms('');
                this.filter_district('');
                this.filter_price_min('');
                this.filter_price_max('');
            }
            filtered_properties() {
                const type = this.filter_type();
                const rooms = this.filter_rooms();
                const district = this.filter_district();
                const price_min = parseInt(this.filter_price_min());
                const price_max = parseInt(this.filter_price_max());
                return PROPERTIES.filter(property => {
                    if (type && property.propertyType !== type)
                        return false;
                    if (rooms) {
                        const room_value = Number(rooms.startsWith('r') ? rooms.slice(1) : rooms);
                        if (Number.isFinite(room_value)) {
                            if (room_value >= 4) {
                                if (property.rooms < 4)
                                    return false;
                            }
                            else if (property.rooms !== room_value) {
                                return false;
                            }
                        }
                    }
                    if (district && property.district !== district)
                        return false;
                    if (!Number.isNaN(price_min) && property.price < price_min)
                        return false;
                    if (!Number.isNaN(price_max) && property.price > price_max)
                        return false;
                    return true;
                });
            }
            results_count_value() {
                return String(this.filtered_properties().length);
            }
            results_count_word() {
                return result_word(this.filtered_properties().length);
            }
            property_rows() {
                return this.filtered_properties().map(property => this.Property_card(property.id));
            }
            property_data(id) {
                return PROPERTIES.find(property => property.id === id);
            }
            property_link(id) {
                return make_page_link(this, 'property', id);
            }
            property_image(id) {
                return this.property_data(id).images[0] ?? '';
            }
            property_badge(id) {
                return this.property_data(id).propertyType === 'house' ? 'Дом' : 'Квартира';
            }
            property_badge_house(id) {
                return this.property_data(id).propertyType === 'house';
            }
            property_price(id) {
                return `${format_price(this.property_data(id).price)} ₽`;
            }
            property_address(id) {
                const property = this.property_data(id);
                return `${property.district}, ${property.address}`;
            }
            property_meta_rooms(id) {
                return `◻ ${this.property_data(id).rooms}-комн.`;
            }
            property_meta_area(id) {
                return `▭ ${this.property_data(id).area} м²`;
            }
            property_meta_floor(id) {
                const property = this.property_data(id);
                if (property.propertyType === 'house')
                    return `▲ ${property.totalFloors} эт.`;
                return `▲ ${property.floor}/${property.totalFloors} эт.`;
            }
        }
        __decorate([
            $mol_mem
        ], $bog_brl_catalog.prototype, "filter_type_draft", null);
        __decorate([
            $mol_mem
        ], $bog_brl_catalog.prototype, "filter_rooms_draft", null);
        __decorate([
            $mol_mem
        ], $bog_brl_catalog.prototype, "filter_district_draft", null);
        __decorate([
            $mol_mem
        ], $bog_brl_catalog.prototype, "filter_price_min_draft", null);
        __decorate([
            $mol_mem
        ], $bog_brl_catalog.prototype, "filter_price_max_draft", null);
        __decorate([
            $mol_mem
        ], $bog_brl_catalog.prototype, "filter_type", null);
        __decorate([
            $mol_mem
        ], $bog_brl_catalog.prototype, "filter_rooms", null);
        __decorate([
            $mol_mem
        ], $bog_brl_catalog.prototype, "filter_district", null);
        __decorate([
            $mol_mem
        ], $bog_brl_catalog.prototype, "filter_price_min", null);
        __decorate([
            $mol_mem
        ], $bog_brl_catalog.prototype, "filter_price_max", null);
        __decorate([
            $mol_action
        ], $bog_brl_catalog.prototype, "apply_filters", null);
        __decorate([
            $mol_action
        ], $bog_brl_catalog.prototype, "reset_filters", null);
        __decorate([
            $mol_mem
        ], $bog_brl_catalog.prototype, "filtered_properties", null);
        __decorate([
            $mol_mem
        ], $bog_brl_catalog.prototype, "results_count_value", null);
        __decorate([
            $mol_mem
        ], $bog_brl_catalog.prototype, "results_count_word", null);
        __decorate([
            $mol_mem
        ], $bog_brl_catalog.prototype, "property_rows", null);
        __decorate([
            $mol_mem_key
        ], $bog_brl_catalog.prototype, "property_data", null);
        __decorate([
            $mol_mem_key
        ], $bog_brl_catalog.prototype, "property_image", null);
        __decorate([
            $mol_mem_key
        ], $bog_brl_catalog.prototype, "property_badge", null);
        __decorate([
            $mol_mem_key
        ], $bog_brl_catalog.prototype, "property_badge_house", null);
        __decorate([
            $mol_mem_key
        ], $bog_brl_catalog.prototype, "property_price", null);
        __decorate([
            $mol_mem_key
        ], $bog_brl_catalog.prototype, "property_address", null);
        __decorate([
            $mol_mem_key
        ], $bog_brl_catalog.prototype, "property_meta_rooms", null);
        __decorate([
            $mol_mem_key
        ], $bog_brl_catalog.prototype, "property_meta_area", null);
        __decorate([
            $mol_mem_key
        ], $bog_brl_catalog.prototype, "property_meta_floor", null);
        $$.$bog_brl_catalog = $bog_brl_catalog;
        class $bog_brl_property extends $.$bog_brl_property {
            catalog_link() {
                return make_page_link(this, 'catalog');
            }
            telegram_url() {
                return CONTACTS.telegram.url;
            }
            phone_url() {
                return CONTACTS.phone.url;
            }
            phone_label() {
                return `📞 ${CONTACTS.phone.display}`;
            }
            property() {
                const id = this.property_id();
                return PROPERTIES.find(property => property.id === id) ?? PROPERTIES[0];
            }
            images() {
                return this.property().images;
            }
            image_index(next) {
                this.property_id();
                return next ?? 0;
            }
            current_image() {
                return this.images()[this.image_index()] ?? '';
            }
            next_image() {
                const images = this.images();
                if (!images.length)
                    return;
                this.image_index((this.image_index() + 1) % images.length);
            }
            prev_image() {
                const images = this.images();
                if (!images.length)
                    return;
                this.image_index((this.image_index() - 1 + images.length) % images.length);
            }
            dot_rows() {
                return this.images().map((_, index) => this.Gallery_dot(index));
            }
            dot_active(index) {
                return this.image_index() === index;
            }
            dot_select(index) {
                this.image_index(index);
            }
            property_title() {
                return this.property().title;
            }
            property_description() {
                return this.property().description;
            }
            feature_rows() {
                return this.property().features.map((_, index) => this.Feature(index));
            }
            feature_text(index) {
                return this.property().features[index] ?? '';
            }
            sidebar_price_value() {
                return `${format_price(this.property().price)} ₽`;
            }
            sidebar_type() {
                return this.property().propertyType === 'house'
                    ? 'Дом · Долгосрочная аренда'
                    : 'Квартира · Долгосрочная аренда';
            }
            sidebar_type_house() {
                return this.property().propertyType === 'house';
            }
            spec_rows() {
                return this.specs().map((_, index) => this.Spec(index));
            }
            specs() {
                const property = this.property();
                return [
                    { label: 'Комнаты', value: String(property.rooms) },
                    { label: 'Площадь', value: `${property.area} м²` },
                    {
                        label: property.propertyType === 'house' ? 'Этажность' : 'Этаж',
                        value: property.propertyType === 'house'
                            ? `${property.totalFloors} эт.`
                            : `${property.floor} / ${property.totalFloors}`,
                    },
                    { label: 'Район', value: property.district },
                ];
            }
            spec_label(index) {
                return this.specs()[index]?.label ?? '';
            }
            spec_value(index) {
                return this.specs()[index]?.value ?? '';
            }
            deal_rows() {
                return this.deal_terms().map((_, index) => this.Deal_row(index));
            }
            deal_terms() {
                const property = this.property();
                const commission = Math.round(property.price * 0.2);
                return [
                    { label: 'Комиссия', value: `20% · ${format_price(commission)} ₽` },
                    { label: 'Депозит', value: property.deposit },
                    { label: 'Договор', value: 'До оплаты' },
                ];
            }
            deal_label(index) {
                return this.deal_terms()[index]?.label ?? '';
            }
            deal_value(index) {
                return this.deal_terms()[index]?.value ?? '';
            }
        }
        __decorate([
            $mol_mem
        ], $bog_brl_property.prototype, "property", null);
        __decorate([
            $mol_mem
        ], $bog_brl_property.prototype, "images", null);
        __decorate([
            $mol_mem
        ], $bog_brl_property.prototype, "image_index", null);
        __decorate([
            $mol_mem
        ], $bog_brl_property.prototype, "current_image", null);
        __decorate([
            $mol_action
        ], $bog_brl_property.prototype, "next_image", null);
        __decorate([
            $mol_action
        ], $bog_brl_property.prototype, "prev_image", null);
        __decorate([
            $mol_mem
        ], $bog_brl_property.prototype, "dot_rows", null);
        __decorate([
            $mol_mem_key
        ], $bog_brl_property.prototype, "dot_active", null);
        __decorate([
            $mol_action
        ], $bog_brl_property.prototype, "dot_select", null);
        __decorate([
            $mol_mem
        ], $bog_brl_property.prototype, "feature_rows", null);
        __decorate([
            $mol_mem_key
        ], $bog_brl_property.prototype, "feature_text", null);
        __decorate([
            $mol_mem
        ], $bog_brl_property.prototype, "spec_rows", null);
        __decorate([
            $mol_mem
        ], $bog_brl_property.prototype, "specs", null);
        __decorate([
            $mol_mem_key
        ], $bog_brl_property.prototype, "spec_label", null);
        __decorate([
            $mol_mem_key
        ], $bog_brl_property.prototype, "spec_value", null);
        __decorate([
            $mol_mem
        ], $bog_brl_property.prototype, "deal_rows", null);
        __decorate([
            $mol_mem
        ], $bog_brl_property.prototype, "deal_terms", null);
        __decorate([
            $mol_mem_key
        ], $bog_brl_property.prototype, "deal_label", null);
        __decorate([
            $mol_mem_key
        ], $bog_brl_property.prototype, "deal_value", null);
        $$.$bog_brl_property = $bog_brl_property;
        class $bog_brl_landlords extends $.$bog_brl_landlords {
            telegram_url() {
                return CONTACTS.telegram.url;
            }
            phone_url() {
                return CONTACTS.phone.url;
            }
            phone_label() {
                return `📞 ${CONTACTS.phone.display}`;
            }
            landlord_benefit_rows() {
                return LANDLORD_BENEFITS.map((_, index) => this.Benefit(index));
            }
            landlord_benefit_icon(index) {
                return LANDLORD_BENEFITS[index]?.icon ?? '';
            }
            landlord_benefit_title(index) {
                return LANDLORD_BENEFITS[index]?.title ?? '';
            }
            landlord_benefit_text(index) {
                return LANDLORD_BENEFITS[index]?.text ?? '';
            }
            commission_rows() {
                return COMMISSION_ITEMS.map((_, index) => this.Commission_item(index));
            }
            commission_text(index) {
                return COMMISSION_ITEMS[index] ?? '';
            }
        }
        __decorate([
            $mol_mem
        ], $bog_brl_landlords.prototype, "landlord_benefit_rows", null);
        __decorate([
            $mol_mem_key
        ], $bog_brl_landlords.prototype, "landlord_benefit_icon", null);
        __decorate([
            $mol_mem_key
        ], $bog_brl_landlords.prototype, "landlord_benefit_title", null);
        __decorate([
            $mol_mem_key
        ], $bog_brl_landlords.prototype, "landlord_benefit_text", null);
        __decorate([
            $mol_mem
        ], $bog_brl_landlords.prototype, "commission_rows", null);
        __decorate([
            $mol_mem_key
        ], $bog_brl_landlords.prototype, "commission_text", null);
        $$.$bog_brl_landlords = $bog_brl_landlords;
        class $bog_brl_about extends $.$bog_brl_about {
            about_value_rows() {
                return ABOUT_VALUES.map((_, index) => this.About_value(index));
            }
            about_value_icon(index) {
                return ABOUT_VALUES[index]?.icon ?? '';
            }
            about_value_title(index) {
                return ABOUT_VALUES[index]?.title ?? '';
            }
            about_value_text(index) {
                return ABOUT_VALUES[index]?.text ?? '';
            }
        }
        __decorate([
            $mol_mem
        ], $bog_brl_about.prototype, "about_value_rows", null);
        __decorate([
            $mol_mem_key
        ], $bog_brl_about.prototype, "about_value_icon", null);
        __decorate([
            $mol_mem_key
        ], $bog_brl_about.prototype, "about_value_title", null);
        __decorate([
            $mol_mem_key
        ], $bog_brl_about.prototype, "about_value_text", null);
        $$.$bog_brl_about = $bog_brl_about;
        class $bog_brl_contact_card extends $.$bog_brl_contact_card {
            Contact_link() {
                return this.link_uri() ? super.Contact_link() : null;
            }
            Contact_note() {
                return this.note() ? super.Contact_note() : null;
            }
        }
        $$.$bog_brl_contact_card = $bog_brl_contact_card;
        class $bog_brl_footer extends $.$bog_brl_footer {
            home_link() {
                return make_page_link(this, 'home');
            }
            catalog_link() {
                return make_page_link(this, 'catalog');
            }
            landlords_link() {
                return make_page_link(this, 'landlords');
            }
            about_link() {
                return make_page_link(this, 'about');
            }
            contacts_link() {
                return make_page_link(this, 'contacts');
            }
            telegram_url() {
                return CONTACTS.telegram.url;
            }
            phone_url() {
                return CONTACTS.phone.url;
            }
        }
        $$.$bog_brl_footer = $bog_brl_footer;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const colors = {
            bgPrimary: '#fafaf8',
            bgSecondary: '#f1f0ec',
            bgCard: '#ffffff',
            bgDark: '#1a1d23',
            bgDarkLighter: '#252830',
            textPrimary: '#1a1d23',
            textSecondary: '#5a5d66',
            textMuted: '#8e919a',
            textOnDark: '#f1f0ec',
            accent: '#2d6b4a',
            accentHover: '#225839',
            accentLight: '#e6f2eb',
            accentWarm: '#c4953a',
            accentWarmLight: '#fdf6e3',
            border: '#e4e3df',
            borderLight: '#edece8',
        };
        const radius = {
            sm: '8px',
            md: '12px',
            lg: '16px',
            xl: '24px',
        };
        const shadow = {
            sm: '0 1px 3px rgba(26, 29, 35, 0.04)',
            md: '0 4px 16px rgba(26, 29, 35, 0.06), 0 2px 6px rgba(26, 29, 35, 0.04)',
            hover: '0 8px 30px rgba(26, 29, 35, 0.1)',
        };
        const fonts = {
            display: 'Outfit, sans-serif',
            body: 'Onest, sans-serif',
        };
        const transition = '0.25s cubic-bezier(0.4, 0, 0.2, 1)';
        $mol_style_attach('bog_brl_global', `
			*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
			html { font-size: 16px; scroll-behavior: smooth; }
			body {
				margin: 0;
				font-family: ${fonts.body};
				background: ${colors.bgPrimary};
				color: ${colors.textPrimary};
				line-height: 1.6;
				-webkit-font-smoothing: antialiased;
				overflow-x: hidden;
			}
			a { text-decoration: none; color: inherit; }
			button { font-family: inherit; border: none; background: none; }
			img { max-width: 100%; display: block; }
			input, select { font-family: inherit; }
		`);
        $mol_style_attach('bog_brl_keyframes', `
			@keyframes bog_brl_pulse {
				0%, 100% { opacity: 1; }
				50% { opacity: 0.4; }
			}
		`);
        $mol_style_define($bog_brl, {
            minHeight: '100vh',
            background: { color: colors.bgPrimary },
            color: colors.textPrimary,
            fontFamily: fonts.body,
            lineHeight: '1.6',
            flexDirection: 'column',
        });
        $mol_style_define($bog_brl_container, {
            maxWidth: '1200px',
            margin: { left: 'auto', right: 'auto' },
            padding: {
                left: $mol_style_func.clamp('16px', '3vw', '24px'),
                right: $mol_style_func.clamp('16px', '3vw', '24px'),
            },
            width: '100%',
            flexDirection: 'column',
        });
        $mol_style_define($bog_brl_header, {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            background: { color: $mol_style_func.rgba(250, 250, 248, 0.88) },
            backdropFilter: [[new $mol_style_func('blur', '20px')]],
            borderBottom: `1px solid ${colors.borderLight}`,
            Header_inner: {
                display: 'flex',
                align: { items: 'center' },
                justify: { content: 'space-between' },
                gap: '12px',
                minHeight: '72px',
                flexWrap: 'wrap',
            },
            Logo: {
                display: 'flex',
                align: { items: 'center' },
                gap: '10px',
                fontFamily: fonts.display,
                font: { weight: 800, size: '1.45rem' },
                cursor: 'pointer',
            },
            Logo_mark: {
                width: '36px',
                height: '36px',
                background: { color: colors.accent },
                border: { radius: radius.sm },
                display: 'flex',
                align: { items: 'center' },
                justify: { content: 'center' },
                color: 'white',
                font: { size: '0.85rem', weight: 800 },
            },
            Nav: {
                display: 'flex',
                align: { items: 'center' },
                gap: '6px',
                flexWrap: 'wrap',
                margin: { left: 'auto' },
            },
            Burger: {
                display: 'none',
                margin: { left: 0 },
            },
            '@media': {
                'screen and (max-width: 768px)': {
                    Nav: {
                        display: 'none',
                    },
                    Burger: {
                        display: 'flex',
                    },
                },
            },
        });
        $mol_style_define($bog_brl_nav_link, {
            padding: { top: '8px', right: '16px', bottom: '8px', left: '16px' },
            border: { radius: radius.sm },
            font: { size: '0.9rem', weight: 500 },
            color: colors.textSecondary,
            transition,
            textDecoration: 'none',
            cursor: 'pointer',
            ':hover': {
                color: colors.textPrimary,
                background: { color: colors.bgSecondary },
            },
            '@': {
                mol_link_current: {
                    true: {
                        color: colors.textPrimary,
                        background: { color: colors.bgSecondary },
                    },
                },
            },
        });
        $mol_style_define($bog_brl_nav_cta, {
            display: 'inline-flex',
            align: { items: 'center' },
            gap: '7px',
            padding: { top: '9px', right: '20px', bottom: '9px', left: '20px' },
            border: { radius: radius.sm },
            background: { color: '#2aabee' },
            color: 'white',
            font: { size: '0.88rem', weight: 600 },
            transition,
            ':hover': {
                background: { color: '#229ed9' },
                transform: 'translateY(-1px)',
            },
            Nav_cta_icon: {
                font: { size: '0.9rem' },
            },
        });
        $mol_style_define($bog_brl_burger, {
            display: 'none',
            flexDirection: 'column',
            gap: '5px',
            padding: '8px',
            cursor: 'pointer',
            Burger_line_1: {
                width: '22px',
                height: '2px',
                background: { color: colors.textPrimary },
                border: { radius: '2px' },
            },
            Burger_line_2: {
                width: '22px',
                height: '2px',
                background: { color: colors.textPrimary },
                border: { radius: '2px' },
            },
            Burger_line_3: {
                width: '22px',
                height: '2px',
                background: { color: colors.textPrimary },
                border: { radius: '2px' },
            },
            '@media': {
                'screen and (max-width: 768px)': {
                    display: 'flex',
                },
            },
        });
        $mol_style_define($bog_brl_mobile_nav, {
            display: 'none',
            position: 'fixed',
            top: '72px',
            left: 0,
            right: 0,
            bottom: 0,
            background: { color: colors.bgPrimary },
            padding: '24px',
            zIndex: 999,
            flexDirection: 'column',
            gap: '8px',
            overflowY: 'auto',
            '@': {
                bog_brl_mobile_nav_open: {
                    true: {
                        display: 'flex',
                    },
                },
            },
        });
        $mol_style_define($bog_brl_mobile_link, {
            padding: { top: '14px', right: '16px', bottom: '14px', left: '16px' },
            border: { radius: radius.sm },
            font: { size: '1.05rem', weight: 500 },
            color: colors.textSecondary,
            textAlign: 'left',
            transition,
            ':hover': {
                color: colors.textPrimary,
                background: { color: colors.bgSecondary },
            },
        });
        $mol_style_define($bog_brl_btn_primary, {
            display: 'inline-flex',
            align: { items: 'center' },
            gap: '8px',
            padding: { top: '14px', right: '32px', bottom: '14px', left: '32px' },
            background: { color: colors.accent },
            color: 'white',
            border: { radius: radius.sm },
            font: { size: '1rem', weight: 600 },
            transition,
            ':hover': {
                background: { color: colors.accentHover },
                transform: 'translateY(-2px)',
                boxShadow: shadow.md,
            },
        });
        $mol_style_define($bog_brl_btn_telegram, {
            display: 'inline-flex',
            align: { items: 'center' },
            gap: '8px',
            padding: { top: '14px', right: '28px', bottom: '14px', left: '28px' },
            background: { color: '#2aabee' },
            color: 'white',
            border: { radius: radius.sm },
            font: { size: '1rem', weight: 600 },
            transition,
            ':hover': {
                background: { color: '#229ed9' },
                transform: 'translateY(-2px)',
                boxShadow: shadow.md,
            },
        });
        $mol_style_define($bog_brl_btn_phone, {
            display: 'inline-flex',
            align: { items: 'center' },
            gap: '8px',
            padding: { top: '14px', right: '28px', bottom: '14px', left: '28px' },
            background: { color: colors.bgCard },
            color: colors.textPrimary,
            border: { radius: radius.sm, style: 'solid', width: '1px', color: colors.border },
            font: { size: '1rem', weight: 500 },
            transition,
            ':hover': {
                borderColor: colors.accent,
                color: colors.accent,
                transform: 'translateY(-1px)',
            },
        });
        $mol_style_define($bog_brl_home, {
            flexDirection: 'column',
            Hero: {
                padding: {
                    top: $mol_style_func.clamp('120px', '15vw', '140px'),
                    right: 0,
                    bottom: $mol_style_func.clamp('56px', '8vw', '80px'),
                    left: 0,
                },
                background: {
                    image: [
                        [
                            $mol_style_func.linear_gradient([
                                '165deg',
                                `${colors.bgPrimary} 0%`,
                                `${colors.bgSecondary} 50%`,
                                `${colors.accentLight} 100%`,
                            ]),
                        ],
                    ],
                },
                position: 'relative',
                overflow: 'hidden',
                '::before': {
                    content: "''",
                    position: 'absolute',
                    top: '-120px',
                    right: '-80px',
                    width: '500px',
                    height: '500px',
                    background: {
                        image: [[$mol_style_func.radial_gradient('circle, rgba(45, 107, 74, 0.06) 0%, transparent 70%')]],
                    },
                    border: { radius: '50%' },
                },
            },
            Hero_content: {
                position: 'relative',
                zIndex: 1,
                maxWidth: '720px',
                flexDirection: 'column',
            },
            Hero_badge: {
                display: 'inline-flex',
                align: { items: 'center' },
                gap: '8px',
                padding: { top: '6px', right: '16px', bottom: '6px', left: '8px' },
                background: { color: colors.accentLight },
                border: {
                    radius: '100px',
                    style: 'solid',
                    width: '1px',
                    color: $mol_style_func.rgba(45, 107, 74, 0.15),
                },
                font: { size: '0.82rem', weight: 600 },
                color: colors.accent,
                margin: { bottom: '28px' },
                alignSelf: 'flex-start',
            },
            Hero_badge_dot: {
                width: '8px',
                height: '8px',
                background: { color: colors.accent },
                border: { radius: '50%' },
                animationName: 'bog_brl_pulse',
                animationDuration: '2s',
                animationIterationCount: 'infinite',
            },
            Hero_title: {
                fontFamily: fonts.display,
                font: { size: $mol_style_func.clamp('2.2rem', '5vw', '3.4rem'), weight: 800 },
                lineHeight: '1.12',
                letterSpacing: '-0.03em',
                margin: { bottom: '20px' },
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.35rem',
            },
            Hero_title_em: {
                fontStyle: 'normal',
                background: {
                    image: [[$mol_style_func.linear_gradient(['135deg', colors.accent, '#3da066'])]],
                },
                backgroundClip: 'text',
                color: 'transparent',
            },
            Hero_sub: {
                font: { size: '1.12rem' },
                color: colors.textSecondary,
                lineHeight: '1.7',
                margin: { bottom: '12px' },
                maxWidth: '560px',
            },
            Hero_commission: {
                display: 'inline-flex',
                align: { items: 'center' },
                gap: '8px',
                padding: { top: '10px', right: '20px', bottom: '10px', left: '20px' },
                background: { color: colors.accentWarmLight },
                border: {
                    radius: radius.sm,
                    style: 'solid',
                    width: '1px',
                    color: $mol_style_func.rgba(196, 149, 58, 0.2),
                },
                font: { size: '0.95rem', weight: 600 },
                color: '#8b6914',
                margin: { bottom: '32px' },
                alignSelf: 'flex-start',
            },
            Hero_commission_text: {
                display: 'inline-flex',
                align: { items: 'center' },
                gap: '4px',
                flexWrap: 'wrap',
            },
            Hero_commission_value: {
                font: { weight: 700 },
                margin: { left: '4px' },
            },
            Hero_actions: {
                display: 'flex',
                gap: '14px',
                flexWrap: 'wrap',
            },
            Stats: {
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                gap: '2px',
                background: { color: colors.borderLight },
                border: { radius: radius.lg },
                overflow: 'hidden',
                margin: { top: '56px' },
                position: 'relative',
                zIndex: 1,
            },
            How: {
                background: { color: colors.bgPrimary },
                padding: {
                    top: $mol_style_func.clamp('60px', '8vw', '80px'),
                    right: 0,
                    bottom: $mol_style_func.clamp('60px', '8vw', '80px'),
                    left: 0,
                },
            },
            Advantages: {
                background: { color: colors.bgSecondary },
                padding: {
                    top: $mol_style_func.clamp('60px', '8vw', '80px'),
                    right: 0,
                    bottom: $mol_style_func.clamp('60px', '8vw', '80px'),
                    left: 0,
                },
            },
            How_header: {
                margin: { bottom: '48px' },
                textAlign: 'center',
                flexDirection: 'column',
            },
            Advantages_header: {
                margin: { bottom: '48px' },
                textAlign: 'center',
                flexDirection: 'column',
            },
            How_title: {
                fontFamily: fonts.display,
                font: { size: $mol_style_func.clamp('1.7rem', '3vw', '2.3rem'), weight: 700 },
                letterSpacing: '-0.02em',
                margin: { bottom: '12px' },
            },
            Advantages_title: {
                fontFamily: fonts.display,
                font: { size: $mol_style_func.clamp('1.7rem', '3vw', '2.3rem'), weight: 700 },
                letterSpacing: '-0.02em',
                margin: { bottom: '12px' },
            },
            How_text: {
                color: colors.textSecondary,
                font: { size: '1.02rem' },
                maxWidth: '560px',
                margin: { left: 'auto', right: 'auto' },
            },
            Advantages_text: {
                color: colors.textSecondary,
                font: { size: '1.02rem' },
                maxWidth: '560px',
                margin: { left: 'auto', right: 'auto' },
            },
            Steps: {
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '16px',
            },
            Advantages_grid: {
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '20px',
            },
            '@media': {
                'screen and (max-width: 1024px)': {
                    Steps: {
                        gridTemplateColumns: 'repeat(3, 1fr)',
                    },
                },
                'screen and (max-width: 768px)': {
                    Hero: {
                        padding: { top: '120px', right: 0, bottom: '56px', left: 0 },
                    },
                    Stats: {
                        gridTemplateColumns: 'repeat(2, 1fr)',
                    },
                    Advantages_grid: {
                        gridTemplateColumns: '1fr',
                    },
                    Steps: {
                        gridTemplateColumns: '1fr',
                    },
                    Hero_actions: {
                        flexDirection: 'column',
                    },
                    Hero_action_primary: {
                        width: '100%',
                        justify: { content: 'center' },
                        textAlign: 'center',
                    },
                    Hero_action_telegram: {
                        width: '100%',
                        justify: { content: 'center' },
                        textAlign: 'center',
                    },
                },
            },
        });
        $mol_style_define($bog_brl_stat, {
            background: { color: colors.bgCard },
            padding: { top: '28px', right: '24px', bottom: '28px', left: '24px' },
            textAlign: 'center',
            flexDirection: 'column',
            Stat_number: {
                fontFamily: fonts.display,
                font: { size: '1.7rem', weight: 800 },
                color: colors.accent,
                margin: { bottom: '4px' },
            },
            Stat_label: {
                font: { size: '0.8rem', weight: 500 },
                color: colors.textMuted,
            },
        });
        $mol_style_define($bog_brl_step, {
            background: { color: colors.bgCard },
            border: { radius: radius.lg, style: 'solid', width: '1px', color: colors.borderLight },
            padding: { top: '28px', right: '22px', bottom: '28px', left: '22px' },
            textAlign: 'center',
            flexDirection: 'column',
            align: { items: 'center' },
            transition,
            ':hover': {
                transform: 'translateY(-3px)',
                boxShadow: shadow.hover,
                borderColor: 'transparent',
            },
            Step_num: {
                fontFamily: fonts.display,
                font: { size: '2rem', weight: 800 },
                color: colors.accentLight,
                margin: { bottom: '12px' },
                lineHeight: '1',
            },
            Step_icon: {
                font: { size: '1.6rem' },
                margin: { bottom: '12px' },
            },
            Step_title: {
                fontFamily: fonts.display,
                font: { size: '0.95rem', weight: 700 },
                margin: { bottom: '6px' },
            },
            Step_text: {
                font: { size: '0.82rem' },
                color: colors.textMuted,
                lineHeight: '1.5',
            },
        });
        $mol_style_define($bog_brl_adv, {
            background: { color: colors.bgCard },
            border: { radius: radius.lg, style: 'solid', width: '1px', color: colors.borderLight },
            padding: { top: '32px', right: '26px', bottom: '32px', left: '26px' },
            flexDirection: 'column',
            transition,
            ':hover': {
                transform: 'translateY(-4px)',
                boxShadow: shadow.hover,
                borderColor: 'transparent',
            },
            Adv_icon: {
                width: '48px',
                height: '48px',
                border: { radius: radius.md },
                display: 'flex',
                align: { items: 'center' },
                justify: { content: 'center' },
                font: { size: '1.3rem' },
                margin: { bottom: '18px' },
            },
            Adv_title: {
                fontFamily: fonts.display,
                font: { size: '1.1rem', weight: 700 },
                margin: { bottom: '8px' },
            },
            Adv_text: {
                font: { size: '0.9rem' },
                color: colors.textSecondary,
                lineHeight: '1.65',
            },
            '@': {
                bog_brl_adv_theme: {
                    green: {
                        Adv_icon: {
                            background: { color: colors.accentLight },
                        },
                    },
                    warm: {
                        Adv_icon: {
                            background: { color: colors.accentWarmLight },
                        },
                    },
                    muted: {
                        Adv_icon: {
                            background: { color: colors.bgSecondary },
                        },
                    },
                },
            },
        });
        $mol_style_define($bog_brl_catalog, {
            flexDirection: 'column',
            Catalog_section: {
                background: { color: colors.bgSecondary },
                padding: { top: '120px', right: 0, bottom: '80px', left: 0 },
            },
            Section_header: {
                margin: { bottom: '32px' },
                flexDirection: 'column',
            },
            Section_title: {
                fontFamily: fonts.display,
                font: { size: $mol_style_func.clamp('1.7rem', '3vw', '2.3rem'), weight: 700 },
                letterSpacing: '-0.02em',
                margin: { bottom: '12px' },
            },
            Section_text: {
                color: colors.textSecondary,
                font: { size: '1.02rem' },
                maxWidth: '560px',
            },
            Filters: {
                display: 'flex',
                gap: '12px',
                flexWrap: 'wrap',
                align: { items: 'flex-end' },
                margin: { bottom: '28px' },
            },
            Filter_type: { display: 'flex', flexDirection: 'column', gap: '6px' },
            Filter_rooms: { display: 'flex', flexDirection: 'column', gap: '6px' },
            Filter_district: { display: 'flex', flexDirection: 'column', gap: '6px' },
            Filter_price_min: { display: 'flex', flexDirection: 'column', gap: '6px' },
            Filter_price_max: { display: 'flex', flexDirection: 'column', gap: '6px' },
            Filter_type_label: {
                font: { size: '0.75rem', weight: 600 },
                color: colors.textMuted,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
            },
            Filter_rooms_label: {
                font: { size: '0.75rem', weight: 600 },
                color: colors.textMuted,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
            },
            Filter_district_label: {
                font: { size: '0.75rem', weight: 600 },
                color: colors.textMuted,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
            },
            Filter_price_min_label: {
                font: { size: '0.75rem', weight: 600 },
                color: colors.textMuted,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
            },
            Filter_price_max_label: {
                font: { size: '0.75rem', weight: 600 },
                color: colors.textMuted,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
            },
            Filter_type_select: {
                padding: { top: '10px', right: '14px', bottom: '10px', left: '14px' },
                border: { radius: radius.sm, style: 'solid', width: '1px', color: colors.border },
                background: { color: colors.bgCard },
                font: { size: '0.9rem' },
                color: colors.textPrimary,
                transition,
                minWidth: '155px',
                ':focus': {
                    borderColor: colors.accent,
                    boxShadow: '0 0 0 3px rgba(45, 107, 74, 0.1)',
                },
            },
            Filter_rooms_select: {
                padding: { top: '10px', right: '14px', bottom: '10px', left: '14px' },
                border: { radius: radius.sm, style: 'solid', width: '1px', color: colors.border },
                background: { color: colors.bgCard },
                font: { size: '0.9rem' },
                color: colors.textPrimary,
                transition,
                minWidth: '155px',
                ':focus': {
                    borderColor: colors.accent,
                    boxShadow: '0 0 0 3px rgba(45, 107, 74, 0.1)',
                },
            },
            Filter_district_select: {
                padding: { top: '10px', right: '14px', bottom: '10px', left: '14px' },
                border: { radius: radius.sm, style: 'solid', width: '1px', color: colors.border },
                background: { color: colors.bgCard },
                font: { size: '0.9rem' },
                color: colors.textPrimary,
                transition,
                minWidth: '155px',
                ':focus': {
                    borderColor: colors.accent,
                    boxShadow: '0 0 0 3px rgba(45, 107, 74, 0.1)',
                },
            },
            Filter_price_min_input: {
                padding: { top: '10px', right: '14px', bottom: '10px', left: '14px' },
                border: { radius: radius.sm, style: 'solid', width: '1px', color: colors.border },
                background: { color: colors.bgCard },
                font: { size: '0.9rem' },
                color: colors.textPrimary,
                transition,
                minWidth: '125px',
                ':focus': {
                    borderColor: colors.accent,
                    boxShadow: '0 0 0 3px rgba(45, 107, 74, 0.1)',
                },
            },
            Filter_price_max_input: {
                padding: { top: '10px', right: '14px', bottom: '10px', left: '14px' },
                border: { radius: radius.sm, style: 'solid', width: '1px', color: colors.border },
                background: { color: colors.bgCard },
                font: { size: '0.9rem' },
                color: colors.textPrimary,
                transition,
                minWidth: '125px',
                ':focus': {
                    borderColor: colors.accent,
                    boxShadow: '0 0 0 3px rgba(45, 107, 74, 0.1)',
                },
            },
            Filter_apply: {
                padding: { top: '10px', right: '24px', bottom: '10px', left: '24px' },
                background: { color: colors.accent },
                color: 'white',
                border: { radius: radius.sm },
                font: { size: '0.9rem', weight: 600 },
                transition,
                ':hover': {
                    background: { color: colors.accentHover },
                },
            },
            Filter_reset: {
                padding: { top: '10px', right: '16px', bottom: '10px', left: '16px' },
                color: colors.textMuted,
                font: { size: '0.86rem', weight: 500 },
                transition,
                border: { radius: radius.sm },
                ':hover': {
                    color: colors.textPrimary,
                    background: { color: colors.bgCard },
                },
            },
            Results_count: {
                font: { size: '0.88rem' },
                color: colors.textMuted,
                margin: { bottom: '20px' },
                display: 'flex',
                gap: '6px',
                align: { items: 'baseline' },
            },
            Results_value: {
                color: colors.textPrimary,
                font: { weight: 600 },
            },
            Properties_grid: {
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '20px',
            },
            '@media': {
                'screen and (max-width: 1024px)': {
                    Properties_grid: {
                        gridTemplateColumns: 'repeat(2, 1fr)',
                    },
                },
                'screen and (max-width: 768px)': {
                    Filters: {
                        flexDirection: 'column',
                    },
                    Filter_type_select: {
                        minWidth: '100%',
                    },
                    Filter_rooms_select: {
                        minWidth: '100%',
                    },
                    Filter_district_select: {
                        minWidth: '100%',
                    },
                    Filter_price_min_input: {
                        minWidth: '100%',
                    },
                    Filter_price_max_input: {
                        minWidth: '100%',
                    },
                    Properties_grid: {
                        gridTemplateColumns: '1fr',
                    },
                },
            },
        });
        $mol_style_define($bog_brl_property_card, {
            background: { color: colors.bgCard },
            border: { radius: radius.lg, style: 'solid', width: '1px', color: colors.borderLight },
            overflow: 'hidden',
            transition,
            cursor: 'pointer',
            color: colors.textPrimary,
            textDecoration: 'none',
            flexDirection: 'column',
            ':hover': {
                transform: 'translateY(-4px)',
                boxShadow: shadow.hover,
                borderColor: 'transparent',
                Card_image_pic: {
                    transform: 'scale(1.04)',
                },
            },
            Card_image: {
                height: '210px',
                overflow: 'hidden',
                position: 'relative',
            },
            Card_image_pic: {
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.4s ease',
            },
            Card_badge: {
                position: 'absolute',
                top: '12px',
                left: '12px',
                padding: { top: '4px', right: '12px', bottom: '4px', left: '12px' },
                border: { radius: '100px' },
                font: { size: '0.75rem', weight: 600 },
                background: { color: $mol_style_func.rgba(45, 107, 74, 0.9) },
                color: '#fff',
                backdropFilter: [[new $mol_style_func('blur', '8px')]],
            },
            Card_body: {
                padding: '20px',
                flexDirection: 'column',
            },
            Card_price: {
                fontFamily: fonts.display,
                font: { size: '1.3rem', weight: 700 },
                margin: { bottom: '4px' },
                display: 'flex',
                gap: '6px',
                align: { items: 'baseline' },
            },
            Card_price_unit: {
                font: { size: '0.82rem', weight: 400 },
                color: colors.textMuted,
            },
            Card_address: {
                font: { size: '0.86rem' },
                color: colors.textSecondary,
                margin: { bottom: '14px' },
            },
            Card_meta: {
                display: 'flex',
                gap: '14px',
                padding: { top: '14px' },
                borderTop: `1px solid ${colors.borderLight}`,
                flexWrap: 'wrap',
            },
            Card_meta_rooms: {
                font: { size: '0.8rem' },
                color: colors.textMuted,
                display: 'flex',
                align: { items: 'center' },
                gap: '4px',
            },
            Card_meta_area: {
                font: { size: '0.8rem' },
                color: colors.textMuted,
                display: 'flex',
                align: { items: 'center' },
                gap: '4px',
            },
            Card_meta_floor: {
                font: { size: '0.8rem' },
                color: colors.textMuted,
                display: 'flex',
                align: { items: 'center' },
                gap: '4px',
            },
            '@': {
                bog_brl_property_badge_house: {
                    true: {
                        Card_badge: {
                            background: { color: $mol_style_func.rgba(196, 149, 58, 0.9) },
                        },
                    },
                },
            },
        });
        $mol_style_define($bog_brl_property, {
            flexDirection: 'column',
            Property_section: {
                padding: { top: '96px', right: 0, bottom: '80px', left: 0 },
            },
            Back_link: {
                display: 'inline-flex',
                align: { items: 'center' },
                gap: '6px',
                font: { size: '0.9rem' },
                color: colors.textMuted,
                margin: { bottom: '24px' },
                transition,
                ':hover': {
                    color: colors.textPrimary,
                },
            },
            Property_grid: {
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '32px',
            },
            Property_main: {
                flexDirection: 'column',
            },
            Gallery: {
                border: { radius: radius.lg },
                overflow: 'hidden',
                position: 'relative',
                aspectRatio: '16 / 10',
            },
            Gallery_image: {
                width: '100%',
                height: '100%',
                objectFit: 'cover',
            },
            Gallery_arrows: {
                position: 'absolute',
                top: '50%',
                left: 0,
                right: 0,
                display: 'flex',
                justify: { content: 'space-between' },
                padding: { top: 0, right: '12px', bottom: 0, left: '12px' },
                transform: 'translateY(-50%)',
            },
            Gallery_prev: {
                width: '40px',
                height: '40px',
                border: { radius: '50%' },
                background: { color: $mol_style_func.rgba(255, 255, 255, 0.85) },
                backdropFilter: [[new $mol_style_func('blur', '8px')]],
                display: 'flex',
                align: { items: 'center' },
                justify: { content: 'center' },
                font: { size: '1.1rem' },
                color: colors.textPrimary,
                transition,
                ':hover': {
                    background: { color: 'white' },
                },
            },
            Gallery_next: {
                width: '40px',
                height: '40px',
                border: { radius: '50%' },
                background: { color: $mol_style_func.rgba(255, 255, 255, 0.85) },
                backdropFilter: [[new $mol_style_func('blur', '8px')]],
                display: 'flex',
                align: { items: 'center' },
                justify: { content: 'center' },
                font: { size: '1.1rem' },
                color: colors.textPrimary,
                transition,
                ':hover': {
                    background: { color: 'white' },
                },
            },
            Gallery_nav: {
                position: 'absolute',
                bottom: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: '6px',
            },
            Property_info: {
                margin: { top: '32px' },
                flexDirection: 'column',
            },
            Property_title: {
                fontFamily: fonts.display,
                font: { size: '1.4rem', weight: 700 },
                margin: { bottom: '14px' },
            },
            Property_desc: {
                color: colors.textSecondary,
                lineHeight: '1.75',
                margin: { bottom: '28px' },
            },
            Property_features_title: {
                font: { size: '1.15rem', weight: 700 },
                margin: { bottom: '14px' },
            },
            Property_features: {
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '10px',
            },
            Property_sidebar: {
                background: { color: colors.bgCard },
                border: { radius: radius.lg, style: 'solid', width: '1px', color: colors.borderLight },
                padding: '28px',
                height: 'fit-content',
                position: 'sticky',
                top: '96px',
                flexDirection: 'column',
            },
            Sidebar_price: {
                display: 'flex',
                align: { items: 'baseline' },
                gap: '6px',
                margin: { bottom: '4px' },
            },
            Sidebar_price_value: {
                fontFamily: fonts.display,
                font: { size: '1.9rem', weight: 800 },
            },
            Sidebar_price_unit: {
                font: { size: '0.9rem', weight: 400 },
                color: colors.textMuted,
            },
            Sidebar_type: {
                display: 'inline-block',
                padding: { top: '4px', right: '12px', bottom: '4px', left: '12px' },
                border: { radius: '100px' },
                font: { size: '0.78rem', weight: 600 },
                margin: { bottom: '20px' },
                background: { color: colors.accentLight },
                color: colors.accent,
            },
            Sidebar_specs: {
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '10px',
                margin: { bottom: '20px' },
            },
            Deal_terms: {
                background: { color: colors.accentWarmLight },
                border: {
                    radius: radius.md,
                    style: 'solid',
                    width: '1px',
                    color: $mol_style_func.rgba(196, 149, 58, 0.2),
                },
                padding: '16px',
                margin: { bottom: '20px' },
                flexDirection: 'column',
            },
            Deal_title: {
                font: { size: '0.78rem', weight: 600 },
                color: '#8b6914',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                margin: { bottom: '8px' },
            },
            Deal_rows: {
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
            },
            Sidebar_contacts: {
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
            },
            Sidebar_telegram: {
                width: '100%',
                justify: { content: 'center' },
            },
            Sidebar_phone: {
                width: '100%',
                justify: { content: 'center' },
            },
            '@media': {
                'screen and (max-width: 1024px)': {
                    Property_grid: {
                        gridTemplateColumns: '1fr',
                    },
                    Property_sidebar: {
                        position: 'static',
                    },
                },
                'screen and (max-width: 768px)': {
                    Property_features: {
                        gridTemplateColumns: '1fr',
                    },
                },
            },
            '@': {
                bog_brl_sidebar_type_house: {
                    true: {
                        Sidebar_type: {
                            background: { color: colors.accentWarmLight },
                            color: '#8b6914',
                        },
                    },
                },
            },
        });
        $mol_style_define($bog_brl_gallery_dot, {
            width: '8px',
            height: '8px',
            border: { radius: '50%' },
            background: { color: $mol_style_func.rgba(255, 255, 255, 0.5) },
            cursor: 'pointer',
            transition,
            '@': {
                bog_brl_gallery_dot_active: {
                    true: {
                        width: '24px',
                        border: { radius: '4px' },
                        background: { color: 'white' },
                    },
                },
            },
        });
        $mol_style_define($bog_brl_feature, {
            display: 'flex',
            align: { items: 'center' },
            gap: '10px',
            padding: { top: '10px', right: '14px', bottom: '10px', left: '14px' },
            background: { color: colors.bgSecondary },
            border: { radius: radius.sm },
            font: { size: '0.88rem' },
            Feature_check: {
                color: colors.accent,
                font: { weight: 700 },
            },
        });
        $mol_style_define($bog_brl_spec, {
            background: { color: colors.bgSecondary },
            border: { radius: radius.sm },
            padding: { top: '11px', right: '13px', bottom: '11px', left: '13px' },
            flexDirection: 'column',
            Spec_label: {
                font: { size: '0.73rem' },
                color: colors.textMuted,
                margin: { bottom: '2px' },
            },
            Spec_value: {
                font: { size: '0.92rem', weight: 600 },
            },
        });
        $mol_style_define($bog_brl_deal_row, {
            display: 'flex',
            justify: { content: 'space-between' },
            align: { items: 'center' },
            font: { size: '0.9rem' },
            padding: { top: '4px', right: 0, bottom: '4px', left: 0 },
            Deal_label: {
                color: colors.textSecondary,
            },
            Deal_value: {
                font: { weight: 600 },
            },
        });
        $mol_style_define($bog_brl_landlords, {
            flexDirection: 'column',
            Landlord_hero: {
                padding: { top: $mol_style_func.clamp('120px', '15vw', '140px'), right: 0, bottom: '60px', left: 0 },
                background: {
                    image: [[$mol_style_func.linear_gradient(['165deg', colors.bgPrimary, colors.accentWarmLight])]],
                },
            },
            Landlord_hero_container: {
                flexDirection: 'column',
            },
            Landlord_badge: {
                display: 'inline-flex',
                align: { items: 'center' },
                gap: '8px',
                padding: { top: '6px', right: '16px', bottom: '6px', left: '8px' },
                background: { color: colors.accentLight },
                border: {
                    radius: '100px',
                    style: 'solid',
                    width: '1px',
                    color: $mol_style_func.rgba(45, 107, 74, 0.15),
                },
                font: { size: '0.82rem', weight: 600 },
                color: colors.accent,
                margin: { bottom: '20px' },
                alignSelf: 'flex-start',
            },
            Landlord_badge_dot: {
                width: '8px',
                height: '8px',
                background: { color: colors.accent },
                border: { radius: '50%' },
                animationName: 'bog_brl_pulse',
                animationDuration: '2s',
                animationIterationCount: 'infinite',
            },
            Landlord_title: {
                fontFamily: fonts.display,
                font: { size: $mol_style_func.clamp('2rem', '4vw', '3rem'), weight: 800 },
                lineHeight: '1.12',
                letterSpacing: '-0.03em',
                margin: { bottom: '16px' },
                maxWidth: '640px',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.35rem',
            },
            Landlord_title_em: {
                fontStyle: 'italic',
                color: colors.textPrimary,
            },
            Landlord_sub: {
                font: { size: '1.05rem' },
                color: colors.textSecondary,
                lineHeight: '1.7',
                maxWidth: '640px',
            },
            Landlord_section: {
                padding: {
                    top: $mol_style_func.clamp('60px', '8vw', '80px'),
                    right: 0,
                    bottom: $mol_style_func.clamp('60px', '8vw', '80px'),
                    left: 0,
                },
                background: { color: colors.bgPrimary },
            },
            Landlord_section_container: {
                flexDirection: 'column',
            },
            Landlord_grid: {
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '48px',
                align: { items: 'start' },
            },
            Landlord_benefits: {
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
            },
            Landlord_cta: {
                background: { color: colors.bgDark },
                border: { radius: radius.xl },
                padding: '40px',
                color: 'white',
                position: 'sticky',
                top: '96px',
                flexDirection: 'column',
            },
            Landlord_cta_title: {
                fontFamily: fonts.display,
                font: { size: '1.5rem', weight: 700 },
                margin: { bottom: '12px' },
            },
            Landlord_cta_text: {
                color: $mol_style_func.rgba(255, 255, 255, 0.65),
                font: { size: '0.95rem' },
                lineHeight: '1.7',
                margin: { bottom: '28px' },
            },
            Landlord_cta_contacts: {
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
            },
            Landlord_cta_telegram: {
                width: '100%',
                justify: { content: 'center' },
            },
            Landlord_cta_phone: {
                width: '100%',
                justify: { content: 'center' },
                borderColor: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                ':hover': {
                    borderColor: 'rgba(255, 255, 255, 0.5)',
                    color: 'white',
                },
            },
            Commission_explainer: {
                background: { color: colors.accentWarmLight },
                border: {
                    radius: radius.lg,
                    style: 'solid',
                    width: '1px',
                    color: $mol_style_func.rgba(196, 149, 58, 0.2),
                },
                padding: '32px',
                margin: { top: '48px' },
                flexDirection: 'column',
            },
            Commission_title: {
                fontFamily: fonts.display,
                font: { size: '1.2rem', weight: 700 },
                margin: { bottom: '16px' },
                color: '#7a5c10',
            },
            Commission_list: {
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
            },
            '@media': {
                'screen and (max-width: 1024px)': {
                    Landlord_grid: {
                        gridTemplateColumns: '1fr',
                    },
                    Landlord_cta: {
                        position: 'static',
                    },
                },
                'screen and (max-width: 768px)': {
                    Landlord_hero: {
                        padding: { top: '120px', right: 0, bottom: '56px', left: 0 },
                    },
                },
            },
        });
        $mol_style_define($bog_brl_landlord_benefit, {
            display: 'flex',
            gap: '16px',
            align: { items: 'flex-start' },
            background: { color: colors.bgCard },
            border: { radius: radius.lg, style: 'solid', width: '1px', color: colors.borderLight },
            padding: '24px',
            transition,
            ':hover': {
                boxShadow: shadow.md,
                transform: 'translateY(-2px)',
            },
            Benefit_icon: {
                width: '44px',
                height: '44px',
                minWidth: '44px',
                border: { radius: radius.sm },
                background: { color: colors.accentLight },
                display: 'flex',
                align: { items: 'center' },
                justify: { content: 'center' },
                font: { size: '1.2rem' },
            },
            Benefit_title: {
                font: { size: '0.98rem', weight: 600 },
                margin: { bottom: '4px' },
            },
            Benefit_text: {
                font: { size: '0.86rem' },
                color: colors.textMuted,
                lineHeight: '1.55',
            },
            Benefit_body: {
                flexDirection: 'column',
            },
        });
        $mol_style_define($bog_brl_commission_item, {
            display: 'flex',
            gap: '12px',
            align: { items: 'flex-start' },
            font: { size: '0.9rem' },
            color: colors.textSecondary,
            Commission_check: {
                width: '22px',
                height: '22px',
                minWidth: '22px',
                background: { color: $mol_style_func.rgba(45, 107, 74, 0.12) },
                border: { radius: '50%' },
                display: 'flex',
                align: { items: 'center' },
                justify: { content: 'center' },
                font: { size: '0.7rem', weight: 700 },
                color: colors.accent,
            },
        });
        $mol_style_define($bog_brl_about, {
            flexDirection: 'column',
            About_section: {
                padding: { top: '120px', right: 0, bottom: '80px', left: 0 },
                background: { color: colors.bgPrimary },
            },
            About_grid: {
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '56px',
                align: { items: 'center' },
            },
            About_visual: {
                background: { color: colors.bgDark },
                border: { radius: radius.xl },
                padding: '48px',
                minHeight: '380px',
                display: 'flex',
                flexDirection: 'column',
                justify: { content: 'flex-end' },
                position: 'relative',
                overflow: 'hidden',
                '::before': {
                    content: "''",
                    position: 'absolute',
                    inset: '0',
                    background: {
                        image: [
                            [
                                $mol_style_func.linear_gradient([
                                    '135deg',
                                    $mol_style_func.rgba(45, 107, 74, 0.15),
                                    $mol_style_func.rgba(196, 149, 58, 0.1),
                                ]),
                            ],
                        ],
                    },
                },
            },
            About_visual_title: {
                position: 'relative',
                zIndex: 1,
                fontFamily: fonts.display,
                font: { size: '2rem', weight: 800 },
                color: 'white',
                lineHeight: '1.2',
                margin: { bottom: '14px' },
            },
            About_visual_text: {
                position: 'relative',
                zIndex: 1,
                color: $mol_style_func.rgba(255, 255, 255, 0.65),
                font: { size: '0.95rem' },
                lineHeight: '1.7',
            },
            About_title: {
                fontFamily: fonts.display,
                font: { size: $mol_style_func.clamp('1.7rem', '3vw', '2.3rem'), weight: 700 },
                letterSpacing: '-0.02em',
                margin: { bottom: '18px' },
            },
            About_text: {
                flexDirection: 'column',
            },
            About_paragraph_1: {
                color: colors.textSecondary,
                font: { size: '0.98rem' },
                lineHeight: '1.75',
                margin: { bottom: '14px' },
            },
            About_paragraph_2: {
                color: colors.textSecondary,
                font: { size: '0.98rem' },
                lineHeight: '1.75',
                margin: { bottom: '14px' },
            },
            About_paragraph_3: {
                color: colors.textSecondary,
                font: { size: '0.98rem' },
                lineHeight: '1.75',
                margin: { bottom: '14px' },
            },
            About_values: {
                margin: { top: '28px' },
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
            },
            '@media': {
                'screen and (max-width: 1024px)': {
                    About_grid: {
                        gridTemplateColumns: '1fr',
                    },
                },
            },
        });
        $mol_style_define($bog_brl_about_value, {
            display: 'flex',
            gap: '14px',
            align: { items: 'flex-start' },
            About_value_icon: {
                width: '38px',
                height: '38px',
                minWidth: '38px',
                background: { color: colors.accentLight },
                border: { radius: radius.sm },
                display: 'flex',
                align: { items: 'center' },
                justify: { content: 'center' },
                font: { size: '1rem' },
            },
            About_value_title: {
                font: { size: '0.92rem', weight: 600 },
                margin: { bottom: '2px' },
            },
            About_value_text: {
                font: { size: '0.85rem' },
                color: colors.textMuted,
            },
            About_value_body: {
                flexDirection: 'column',
            },
        });
        $mol_style_define($bog_brl_contacts, {
            flexDirection: 'column',
            Contacts_section: {
                background: { color: colors.bgSecondary },
                padding: { top: '120px', right: 0, bottom: '80px', left: 0 },
            },
            Section_header: {
                margin: { bottom: '32px' },
                flexDirection: 'column',
            },
            Section_title: {
                fontFamily: fonts.display,
                font: { size: $mol_style_func.clamp('1.7rem', '3vw', '2.3rem'), weight: 700 },
                letterSpacing: '-0.02em',
                margin: { bottom: '12px' },
            },
            Section_text: {
                color: colors.textSecondary,
                font: { size: '1.02rem' },
                maxWidth: '560px',
            },
            Contacts_grid: {
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '32px',
            },
            '@media': {
                'screen and (max-width: 1024px)': {
                    Contacts_grid: {
                        gridTemplateColumns: '1fr',
                    },
                },
            },
        });
        $mol_style_define($bog_brl_contact_card, {
            background: { color: colors.bgCard },
            border: { radius: radius.lg, style: 'solid', width: '1px', color: colors.borderLight },
            padding: '32px',
            transition,
            flexDirection: 'column',
            ':hover': {
                boxShadow: shadow.md,
            },
            Contact_icon: {
                width: '48px',
                height: '48px',
                border: { radius: radius.sm },
                display: 'flex',
                align: { items: 'center' },
                justify: { content: 'center' },
                font: { size: '1.3rem' },
                margin: { bottom: '16px' },
            },
            Contact_title: {
                font: { size: '1rem', weight: 600 },
                margin: { bottom: '6px' },
            },
            Contact_text: {
                font: { size: '0.9rem' },
                color: colors.textSecondary,
                lineHeight: '1.6',
                margin: { bottom: '16px' },
            },
            Contact_link: {
                display: 'inline-flex',
                align: { items: 'center' },
                gap: '6px',
                font: { weight: 600, size: '0.95rem' },
                color: colors.accent,
                transition,
                ':hover': {
                    color: colors.accentHover,
                },
            },
            Contact_note: {
                font: { size: '0.9rem' },
                color: colors.textMuted,
            },
            '@': {
                bog_brl_contact_card_theme: {
                    tg: {
                        Contact_icon: {
                            background: { color: '#e3f4fc' },
                        },
                    },
                    phone: {
                        Contact_icon: {
                            background: { color: colors.accentLight },
                        },
                    },
                    addr: {
                        Contact_icon: {
                            background: { color: colors.accentWarmLight },
                        },
                    },
                },
            },
        });
        $mol_style_define($bog_brl_footer, {
            background: { color: colors.bgDark },
            color: colors.textOnDark,
            padding: { top: '56px', right: 0, bottom: '32px', left: 0 },
            flexDirection: 'column',
            Footer_grid: {
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '40px',
                margin: { bottom: '40px' },
            },
            Footer_brand: {
                flexDirection: 'column',
            },
            Footer_nav: {
                flexDirection: 'column',
            },
            Footer_contacts: {
                flexDirection: 'column',
            },
            Footer_info: {
                flexDirection: 'column',
            },
            Footer_logo: {
                display: 'flex',
                align: { items: 'center' },
                gap: '10px',
                fontFamily: fonts.display,
                font: { weight: 800, size: '1.45rem' },
                color: 'white',
            },
            Footer_logo_mark: {
                width: '36px',
                height: '36px',
                background: { color: colors.accent },
                border: { radius: radius.sm },
                display: 'flex',
                align: { items: 'center' },
                justify: { content: 'center' },
                color: 'white',
                font: { size: '0.85rem', weight: 800 },
            },
            Footer_brand_text: {
                color: $mol_style_func.rgba(241, 240, 236, 0.45),
                font: { size: '0.88rem' },
                lineHeight: '1.7',
                margin: { top: '12px' },
                maxWidth: '280px',
            },
            Footer_nav_title: {
                font: { size: '0.75rem', weight: 600 },
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: $mol_style_func.rgba(241, 240, 236, 0.35),
                margin: { bottom: '16px' },
            },
            Footer_contacts_title: {
                font: { size: '0.75rem', weight: 600 },
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: $mol_style_func.rgba(241, 240, 236, 0.35),
                margin: { bottom: '16px' },
            },
            Footer_info_title: {
                font: { size: '0.75rem', weight: 600 },
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: $mol_style_func.rgba(241, 240, 236, 0.35),
                margin: { bottom: '16px' },
            },
            Footer_nav_links: {
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
            },
            Footer_contacts_links: {
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
            },
            Footer_info_links: {
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
            },
            Footer_bottom: {
                borderTop: '1px solid rgba(241, 240, 236, 0.08)',
                padding: { top: '24px' },
                display: 'flex',
                justify: { content: 'space-between' },
                align: { items: 'center' },
                gap: '12px',
                flexWrap: 'wrap',
            },
            Footer_copy: {
                font: { size: '0.8rem' },
                color: $mol_style_func.rgba(241, 240, 236, 0.3),
            },
            Footer_location: {
                font: { size: '0.8rem' },
                color: $mol_style_func.rgba(241, 240, 236, 0.3),
            },
            '@media': {
                'screen and (max-width: 768px)': {
                    Footer_grid: {
                        gap: '28px',
                    },
                    Footer_bottom: {
                        flexDirection: 'column',
                        gap: '12px',
                        textAlign: 'center',
                    },
                },
            },
        });
        $mol_style_define($bog_brl_footer_link, {
            font: { size: '0.88rem' },
            color: $mol_style_func.rgba(241, 240, 236, 0.6),
            transition,
            cursor: 'pointer',
            ':hover': {
                color: 'white',
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));


export default $
//# sourceMappingURL=node.js.map
