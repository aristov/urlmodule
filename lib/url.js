import { Assembler } from 'esmodule'

const { URL } = window
const { getTargetOf } = Assembler

/**
 * @see https://url.spec.whatwg.org
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
            _searchParams.set(key, searchParams[key])
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
     * @returns {URL}
     * @override
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
     * @returns {string}
     * @override
     */
    static get targetPropertyName() {
        return 'url'
    }

    /**
     * @returns {string}
     * @override
     */
    static get defaultPropertyName() {
        return 'href'
    }

    /**
     * @returns {interface} URL
     * @override
     */
    static get interface() {
        return URL
    }
}
