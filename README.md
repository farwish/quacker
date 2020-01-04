# quack

Websites' shit cleaner

## Supported websites' pages 

youdao.com 结果页

## How to use this extension

First way
``` 
Find quack in chrome extension store.
```

Second way
``` 
load `dist/dist/bex/Packaged/chrome/quack.zip` into chrome browser.
OR
load `dist/dist/bex/Packaged/firefox/quack.zip` into firefox browser.
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

2/3. Maybe only change the content-script.js

3/3. Load the src-bex/ on extension management page, chrome://extensions/
