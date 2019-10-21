var concat = require('concat-files');
concat([
    './dist/angular-app/main-es5.js',
    './dist/angular-app/main-es2015.js',
    './dist/angular-app/polyfills-es5.js',
    './dist/angular-app/polyfills-es2015.js',
    './dist/angular-app/runtime-es5.js',
    './dist/angular-app/runtime-es2015.js',
    './dist/angular-app/styles-es5.js',
    './dist/angular-app/styles-es2015.js',
], './dist/angular-app/output.js', function(err) {
    if (err) throw err
    console.log('done');
});