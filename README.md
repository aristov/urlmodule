# urlmodule

_work in progress_

URLAssembler helps to assemble URLs.

See https://url.spec.whatwg.org/

## Example

```js
class GoogleUrl extends URLAssembler {
    static get url() {
        return 'https://www.google.com'
    }
}
const url = new GoogleUrl({
    pathname : 'recaptcha/api.js',
    searchParams : {
        render : 'explicit',
        onload : `ID${ Date.now() }_onload`,
        hl : document.body.lang
    }
})
console.log(url)
```

Result:

```
https://www.google.com/recaptcha/api.js?render=explicit&onload=ID1536188939748_onload&hl=ru
```

## Installation

```
npm install urlmodule
```

## License

[The MIT License (MIT)](https://raw.githubusercontent.com/aristov/urlmodule/master/LICENSE)

