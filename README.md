# Interactive Parallax

A module to create a parallax that interacts with the mouse move.

[![NPM](https://img.shields.io/npm/v/interactiveparallax.svg)](https://www.npmjs.com/package/interactiveparallax) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Demo

<p align="center" >
  <img src="./assets/demo.gif" style="height: 300px">
</p>

Live Demo [Here](https://lnardon.github.io/InteractiveParallax/ "Interactive Parallax Demo")

## Installation

```bash
npm install interactiveparallax
```

## Usage

### JavaScript

```ts
import useParallax from "animationsequence";

// containerClass = the class name of the container where the parallax will happen.
// targetClass = the class name of the targets to apply the effect.
// alertMobileUser = argument to inform in case the device has no support for the package.(Optional)
useParallax(containerClass: string, targetClass: string, alertMobileUser?: boolean)
```

### HTML Element

```html
<!-- 
  parallax-speed-x = X-axis parallax speed for the target. (Number between 1 and 50)
  parallax-speed-y = Y-axis parallax speed for the target. (Number between 1 and 50)
-->
<div class="target" parallax-speed-x="7" parallax-speed-y="11"></div>
```

## Example

```html
<!-- HTML -->
<div class="splash">
  <h1 class="title target" parallax-speed="0.3">Interactive Parallax</h1>
  <div class="target" parallax-speed-x="13" parallax-speed-y="19"></div>
  <div class="target" parallax-speed-x="21" parallax-speed-y="14"></div>
</div>
```

```js
// Javascript
useParallax("splash", "target", true);
```

The full source code of the [Live Example](https://lnardon.github.io/InteractiveParallax/ "Interactive Parallax Demo") can be found in the `./index.html` file.
