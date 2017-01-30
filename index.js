const OFF    = 'off'
const WARN   = 'warn'
const ERROR  = 'error'
const ALWAYS = 'always'

module.exports = {
  extends: 'metrological',
  parserOptions: {
    ecmaVersion: 6
  }
, env: {
  , node: true
  }
, rules: {
  // Node.js and CommonJS, TODO: put this in it's own module
  , 'callback-return': OFF
  , 'global-require': ERROR // TBD
  , 'handle-callback-err': OFF
  , 'no-mixed-requires': OFF
  , 'no-new-require': ERROR // TBD
  , 'no-path-concat': ERROR // TBD
  , 'no-process-env': OFF
  , 'no-process-exit': ERROR // TBD
  , 'no-restricted-modules': OFF // TBD
  , 'no-sync': OFF
  }
}
