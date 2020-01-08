# quacker

A browser extension to Clean website pages' shits (ADs)

## Supported website pages 

```
[ blog.csdn.net ] Article page

Clear `left side` two ADs, `middle side` one AD, `bottom side` several ADs, Maybe most infamous now!
```

```
[ youdao.com ] Result page

Clear `top side` one AD and `right side` one AD
```

``` 
[ baike.baidu.com ] Result page

Clear `right side` one AD
```

``` 
[ youtube.com ] Index page

Clear `top side` one AD
```

* <a href="https://www.cnblogs.com/farwish/p/12148808.html" target="_blank">Show several example</a>

## How to use this extension

```
Input chrome://extensions/ in chrome browser, and drag file `./dist/bex/Packaged/chrome/quacker.zip` into the manage page.
```

## How to start locally development

This project was based on [Quasar-framework](https://quasar.dev/) bex mode.

1/3. Environment startup
```bash
# Install dep
yarn

# Start dev
quasar dev -m bex

# Build for release
quasar build -m bex
```

2/3. Maybe you only need to change the content-script.js

3/3. Load the src-bex/ on extension management page, chrome://extensions/
