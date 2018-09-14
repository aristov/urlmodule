import { Assembler } from 'esmodule'

const { URL } = window
const { getTargetOf } = Assembler

/**
 * @see https://url.spec.whatwg.org/#url
 */
export class URLAssembler extends Assembler {
    /**
     * @returns {string}
     */
    toString() {
        return this.url.toString()
    }

    /**
     * @param {*} searchParams {{}}
     */
    set searchParams(searchParams) {
        const _searchParams = this.searchParams
        Object.keys(searchParams).forEach(key => {
            const value = searchParams[key]
            if(Array.isArray(value)) {
                value.forEach(item => _searchParams.append(key, item))
            }
            else _searchParams.set(key, value)
        })
    }

    /**
     * @returns {URLSearchParams}
     */
    get searchParams() {
        return this.url.searchParams
    }

    /**
     * @returns {URL}
     */
    get url() {
        return getTargetOf(this)
    }

    /**
     * @override
     * @returns {URL}
     */
    static create() {
        return new this.interface(this.url, this.base)
    }

    /**
     * @abstract
     */
    static get url() {}

    /**
     * @abstract
     */
    static get base() {}

    /**
     * @override
     * @returns {string}
     */
    static get targetPropertyName() {
        return 'url'
    }

    /**
     * @override
     * @returns {string}
     */
    static get defaultPropertyName() {
        return 'href'
    }

    /**
     * @override
     * @returns {interface} URL
     */
    static get interface() {
        return URL
    }
}
