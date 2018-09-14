import { p } from 'htmlmodule'
import { URLAssembler } from '../lib'

/*================================================================*/

class ExampleUrl extends URLAssembler {
    static get url() {
        return 'http://example'
    }
}

const example = new ExampleUrl({
    username : 'pupkin',
    password : 'secret',
    port : '8087',
    pathname : 'test/dir/script.php',
    searchParams : {
        foo : 'bar',
        tet : 'wiz'
    },
    hash : 'heading'
})

document.body.append(p(example).node)

/*================================================================*/

class GoogleUrl extends URLAssembler {
    static get url() {
        return 'https://www.google.com'
    }
}

const recaptcha = new GoogleUrl({
    pathname : 'recaptcha/api.js',
    searchParams : {
        render : 'explicit',
        onload : `ID${ Date.now() }_onload`,
        hl : document.body.lang
    }
})

document.body.append(p(recaptcha).node)
