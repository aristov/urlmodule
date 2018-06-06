import { Assembler } from 'esmodule'

const { URL } = window
const { getTargetOf } = Assembler

export class URLAssembler extends Assembler {
    /**
     * @param {string} name
     * @param {string} value
     */
    setProperty(name, value) {
        if(!['url', 'base', 'protocol'].includes(name)) {
            super.setProperty(name, value)
        }
    }

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
        const params = this.searchParams
        Object.keys(searchParams).forEach(key => {
            params.set(key, searchParams[key])
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
     * @param {string} [url]
     * @param {string} [base]
     * @param {string} [protocol]
     * @returns {URL}
     */
    static create({ url, base, protocol = this.protocol }) {
        if(!url) {
            url = protocol + this.hostname
        }
        return new URL(url, base)
    }

    /**
     * @returns {string}
     */
    static get hostname() {
        return this.name.toLowerCase()
    }

    /**
     * @returns {interface} URL
     */
    static get interface() {
        return URL
    }

    /**
     * @returns {string}
     */
    static get protocol() {
        return 'http:'
    }
}

/**
 * @param {*} [init]
 * @returns {URLAssembler}
 */
export function url(init) {
    return new URLAssembler(init)
}
