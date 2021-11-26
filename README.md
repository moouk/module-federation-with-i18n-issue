# module-federation-with-i18n-issue

Reproduction steps:
 1. `yarn build` app2
 2. Receive warning:
```
WARNING in shared module i18next -> ~\module-federation-with-i18n-issue\app2\node_modules\i18next\dist\esm\i18next.js
No version specified and unable to automatically determine one. No version in description file (usually package.json). Add version to description file, or manually specify version in shared config.
```
 3. Change version of i18next to `21.4.2` in app2
 4. `yarn build` app2
 5. No warning is produced
