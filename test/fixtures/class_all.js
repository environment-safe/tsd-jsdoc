/** @module util */

/**
 * @this OtherThing
 */
function doStuff() {
}

/**
 * @class
 * @abstract
 */
class OtherThing {
    /**
     *
     */
    copy() {
    }
}

/**
 *
 */
class Stuff {
    /**
     *
     */
    doStuff() {
    }
}

/**
 *
 */
class BaseClass {
    /**
     *
     */
    baseFunc() {}
    /**
     *
     */
    baseFuncOverridden() {}
}

/**
 * @extends BaseClass
 */
class DerivedClass extends BaseClass {
    /**
     *
     */
    derivedFunc() {}
    /**
     *
     */
    baseFuncOverridden() {}
}

/**
 *
 */
class Things {
    /**
     *
     */
    doThings() {
    }

    /**
     * @method module:util~Things#[foobar1]
     */
    foobar1() {
    };

    /**
     * @type {Number}
     * @name module:util~Things#[foobar2]
     */
    foobar2 = undefined;
}

/**
 * Deep class #1
 *
 * @class
 */
function DeepClass1() {
    /**
     * Deep class #2
     *
     * @class
     */
    function DeepClass2() {
        /**
         * Deep class #3
         *
         * @class
         */
        function DeepClass3() {
            /**
             * Deep class #4
             *
             * @class
             */
            function DeepClass4() {
            }
        }
    }
}

/**
 * @class MyClass
 * @param {string} message
 * @returns {MyClass}
 */
class MyClass {
    constructor(message) {
        /** @type {string} */
        this.message = message;
    }
}

/**
 * GitGraph
 * @constructor
 * @param {object} options - GitGraph options
 * @param {string} [options.elementId = "gitGraph"] - Id of the canvas container
 * @param {Template|string|object} [options.template] - Template of the graph
 * @param {string} [options.author = "Sergio Flores <saxo-guy@epic.com>"] - Default author for commits
 * @param {string} [options.mode = (null|"compact")]  - Display mode
 * @param {HTMLElement} [options.canvas] - DOM canvas (ex: document.getElementById("id"))
 * @param {string} [options.orientation = ("vertical-reverse"|"horizontal"|"horizontal-reverse")] - Graph orientation
 * @param {boolean} [options.reverseArrow = false] - Make arrows point to ancestors if true
 * @param {number} [options.initCommitOffsetX = 0] - Add custom offsetX to initial commit.
 * @param {number} [options.initCommitOffsetY = 0] - Add custom offsetY to initial commit.
 * @param {HTMLElement} [options.tooltipContainer = document.body] - HTML Element containing tooltips in compact mode.
 * @this GitGraph
 */
class GitGraph {
    constructor(options) {}
}

/**
 * @typedef Something
 * @type boolean
 */

/**
 * @class
 * @extends OtherThing
 * @mixes Stuff
 * @mixes Things
 */
class MyThing extends OtherThing {
    /**
     * Constructs!
     * @param {...number} a - The number.
     * @private
     */
    constructor(...a) {
        super();

        /**
         * Derp or something.
         *
         * @member {string}
         * @readonly
         */
        this.derp = 'me';

        /**
         * @private
         * @member {number}
         */
        this.something = 1;

        /**
         * @member {Object<string, Array<(number|string)>>}
         */
        this.map = {};

        /**
         * @member {Array<Array.<Array<Array.<string[]>>>>}
         */
        this.superArray = {};

        /**
         * @member {Array}
         */
        this.simpleArray = [];
    }

    /**
     * Creates a new thing.
     *
     * @param {!FoobarNS.CircleOptions} opts - Namespace test!
     * @return {MyThing} the new thing.
     */
    static create(opts) {
        return new MyThing();
    }

    /**
     * @param {OtherThing} other - To copy from.
     * @override
     */
    copy(other) {
        this.derp = other.toString();
    }

    /**
     * Gets a Promise that will resolve with an Object, or reject with OtherThing
     *
     * @return {Promise<Object, OtherThing>} The Promise
     */
    promiseMe() {
    }

    /**
     * Gets a Promise that will resolve with an array of OtherThings
     *
     * @return {Promise<Array.<OtherThing>>} The Promise
     */
    promiseYou() {
    }

    /**
     * Gets a Promise that will resolve with a bunch of possible types
     *
     * @return {Promise<Array.<*>|Object|number|string>} The Promise
     */
    promiseFoo() {
    }

    /**
     * Gets a Promise that will resolve with an object with complex properties
     *
     * @return {Promise<{newChannels: Channel[], foo: Bar}>} The Promise
     */
    promiseBar() {
    }

    /**
     * Gets a Promise that will resolve with a generic function
     *
     * @return {Promise<Function>} The Promise
     */
    promiseGenericFunc() {
    }

    /**
     * Gets a Promise that will resolve with a function with no arguments
     * that returns a string.
     *
     * @return {Promise<Function(): string>} The Promise
     */
    promiseStringFunc() {
    }

    /**
     * Gets a Promise that will resolve with a function with lots of arguments
     * that returns an object.
     *
     * @return {Promise<Function(Array.<OtherThing>, object, number, string): object>} The Promise
     */
    promiseLotsArgsFunc() {
    }

    /**
     * Gets a Promise that will resolve with a function with lots of arguments
     * that returns the default type.
     *
     * @return {Promise<Function(Array.<OtherThing>, object, number, string)>} The Promise
     */
    promiseDefaultRetFunc() {
    }

    /**
     * A param that is a function
     * Note: doesn't matter what I put, a @param only gets "FUNCTION" from jsdoc
     * @param {function(number): object}
     */
    takeFuncParam(f) {
    }

    /**
     * A param that is a complex function
     * Note: doesn't matter what I put, a @param only gets "FUNCTION" from jsdoc
     * @param {function(Array.<OtherThing>, object, number): object}
     */
    takeFuncParamComplex(f) {
    }

    /**
     *
     * @param {GitGraphOptions} options - GitGraph options
     */
    objParam(o) {
    }

    /**
     * Gets derp.
     *
     * @member {string}
     */
    get D() {
        return this.derp;
    }

    set D(v) {
        this.derp = v;
    }
}

/**
 * @member {number}
 * @static
 */
MyThing.me = 10;

module.exports = {
    doStuff: doStuff,
    DerivedClass: DerivedClass,
    DeepClass1: DeepClass1,
    MyClass: MyClass,
    GitGraph: GitGraph,
    Something: Something,
    MyThing: MyThing
}
