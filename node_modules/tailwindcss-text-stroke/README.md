# `text-stroke` TailwindCSS Plugin

This plugin adds `text-stroke-` components. It implements it using the `-webkit-text-stroke-` CSS property, which is implemented [everywhere](https://caniuse.com/text-stroke) with this prefix.

## Installation

1. Install the package using npm:

```
npm install --save-dev tailwindcss-text-stroke
```

2. Register the plugin:

```javascript
import textStroke from 'tailwindcss-text-stroke'

export default {
  plugins: [
    textStroke
  ],
  // ... other options
}
```

## Available `text-stroke` variants

The following variants are available:

- `text-stroke-inherited` - reset to inherited value
- `text-stroke-none` - set to 0
- `text-stroke-100` - `text-stroke-900` - sets the -webkit-text-stroke to `0.0002 * value`, so `100` is `0.02ex`, `200` is `0.04ex`, `300` is `0.06ex` and so on.


Have fun!
