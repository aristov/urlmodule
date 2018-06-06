import { p } from 'htmlmodule'
import { url } from '../lib/url'

const example = url({
    protocol : 'https:',
    username : 'pupkin',
    password : 'secret',
    hostname : 'example',
    port : '8087',
    pathname : 'test/dir/script.php',
    searchParams : {
        foo : 'bar',
        tet : 'wiz'
    },
    hash : 'heading'
})

// https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit

const recaptcha = url({
    protocol : 'https:',
    hostname : 'www.google.com',
    pathname : 'recaptcha/api.js',
    searchParams : {
        render : 'explicit',
        onload : `ID${ Date.now() }_onload`,
        hl : document.body.lang
    }
})

document.body.append(p(example.toString()).node)
document.body.append(p(recaptcha.toString()).node)
