import { url } from '../lib/url'

const example = url({
    protocol : 'https:',
    hostname : 'example',
    pathname : 'test/dir/script.php',
    username : 'pupkin',
    password : 'secret',
    port : '8087',
    searchParams : {
        foo : 'bar',
        tet : 'wiz'
    },
    hash : 'heading'
})

window.example = example

document.body.append(example)
