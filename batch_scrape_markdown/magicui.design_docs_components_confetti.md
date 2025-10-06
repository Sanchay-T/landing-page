[✨Introducing Magic UI Pro - 50+ blocks and templates to build beautiful landing pages in minutes.](https://pro.magicui.design/)

* * *

Getting Started

[Introduction](https://magicui.design/docs)

[Installation](https://magicui.design/docs/installation)

[MCP](https://magicui.design/docs/mcp)

[StoryNew](https://magicui.design/docs/story)

[Legacy](https://magicui.design/docs/legacy)

Templates

[AI AgentPro](https://magicui.design/docs/templates/agent)

[Dev ToolPro](https://magicui.design/docs/templates/devtool)

[MobilePro](https://magicui.design/docs/templates/mobile)

[SaaSPro](https://magicui.design/docs/templates/saas)

[StartupPro](https://magicui.design/docs/templates/startup)

[Portfolio](https://magicui.design/docs/templates/portfolio)

[ChangelogNew](https://magicui.design/docs/templates/changelog)

[BlogNew](https://magicui.design/docs/templates/blog)

Components

[Marquee](https://magicui.design/docs/components/marquee)

[Terminal](https://magicui.design/docs/components/terminal)

[Hero Video Dialog](https://magicui.design/docs/components/hero-video-dialog)

[Bento Grid](https://magicui.design/docs/components/bento-grid)

[Animated List](https://magicui.design/docs/components/animated-list)

[Dock](https://magicui.design/docs/components/dock)

[Globe](https://magicui.design/docs/components/globe)

[Tweet Card](https://magicui.design/docs/components/tweet-card)

[Orbiting Circles](https://magicui.design/docs/components/orbiting-circles)

[Avatar Circles](https://magicui.design/docs/components/avatar-circles)

[Icon Cloud](https://magicui.design/docs/components/icon-cloud)

[Lens](https://magicui.design/docs/components/lens)

[Pointer](https://magicui.design/docs/components/pointer)

[Smooth Cursor](https://magicui.design/docs/components/smooth-cursor)

[Progressive Blur](https://magicui.design/docs/components/progressive-blur)

[Dotted MapNew](https://magicui.design/docs/components/dotted-map)

Special Effects

[Animated Beam](https://magicui.design/docs/components/animated-beam)

[Border Beam](https://magicui.design/docs/components/border-beam)

[Shine Border](https://magicui.design/docs/components/shine-border)

[Magic Card](https://magicui.design/docs/components/magic-card)

[Meteors](https://magicui.design/docs/components/meteors)

[Confetti](https://magicui.design/docs/components/confetti)

[Particles](https://magicui.design/docs/components/particles)

[Animated Theme TogglerNew](https://magicui.design/docs/components/animated-theme-toggler)

Animations

[Blur Fade](https://magicui.design/docs/components/blur-fade)

Text Animations

[Text Animate](https://magicui.design/docs/components/text-animate)

[Typing AnimationNew](https://magicui.design/docs/components/typing-animation)

[Line Shadow Text](https://magicui.design/docs/components/line-shadow-text)

[Aurora Text](https://magicui.design/docs/components/aurora-text)

[Video Text](https://magicui.design/docs/components/video-text)

[Number Ticker](https://magicui.design/docs/components/number-ticker)

[Animated Shiny Text](https://magicui.design/docs/components/animated-shiny-text)

[Animated Gradient Text](https://magicui.design/docs/components/animated-gradient-text)

[Text Reveal](https://magicui.design/docs/components/text-reveal)

[Hyper Text](https://magicui.design/docs/components/hyper-text)

[Word Rotate](https://magicui.design/docs/components/word-rotate)

[Scroll Based Velocity](https://magicui.design/docs/components/scroll-based-velocity)

[Sparkles Text](https://magicui.design/docs/components/sparkles-text)

[Morphing Text](https://magicui.design/docs/components/morphing-text)

[Spinning Text](https://magicui.design/docs/components/spinning-text)

[Text HighlighterNew](https://magicui.design/docs/components/highlighter)

Device Mocks

[Safari](https://magicui.design/docs/components/safari)

[iPhone](https://magicui.design/docs/components/iphone)

[Android](https://magicui.design/docs/components/android)

Buttons

[Rainbow Button](https://magicui.design/docs/components/rainbow-button)

[Shimmer Button](https://magicui.design/docs/components/shimmer-button)

[Ripple Button](https://magicui.design/docs/components/ripple-button)

Backgrounds

[Flickering Grid](https://magicui.design/docs/components/flickering-grid)

[Animated Grid Pattern](https://magicui.design/docs/components/animated-grid-pattern)

[Retro Grid](https://magicui.design/docs/components/retro-grid)

[Ripple](https://magicui.design/docs/components/ripple)

[Dot Pattern](https://magicui.design/docs/components/dot-pattern)

[Grid Pattern](https://magicui.design/docs/components/grid-pattern)

[Striped PatternNew](https://magicui.design/docs/components/striped-pattern)

[Interactive Grid Pattern](https://magicui.design/docs/components/interactive-grid-pattern)

[Light RaysNew](https://magicui.design/docs/components/light-rays)

Community

[Shiny Button](https://magicui.design/docs/components/shiny-button)

[File Tree](https://magicui.design/docs/components/file-tree)

[Code Comparison](https://magicui.design/docs/components/code-comparison)

[Scroll Progress](https://magicui.design/docs/components/scroll-progress)

[Neon Gradient Card](https://magicui.design/docs/components/neon-gradient-card)

[Comic Text](https://magicui.design/docs/components/comic-text)

[Cool Mode](https://magicui.design/docs/components/cool-mode)

[Pixel Image](https://magicui.design/docs/components/pixel-image)

[Pulsating Button](https://magicui.design/docs/components/pulsating-button)

[Warp Background](https://magicui.design/docs/components/warp-background)

[Interactive Hover Button](https://magicui.design/docs/components/interactive-hover-button)

[Animated Circular Progress Bar](https://magicui.design/docs/components/animated-circular-progress-bar)

# Confetti

Copy Page

[Previous](https://magicui.design/docs/components/comic-text) [Next](https://magicui.design/docs/components/cool-mode)

Confetti animations are best used to delight your users when something special happens

PreviewCode

[Open in](https://v0.dev/chat/api/open?url=https://magicui.design/r/confetti-demo.json)

Confetti

Copy

```
"use client"

import { useRef } from "react"

import { Confetti, type ConfettiRef } from "@/registry/magicui/confetti"

export function ConfettiDemo() {
  const confettiRef = useRef<ConfettiRef>(null)

  return (
    <div className="bg-background relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border">
      <span className="pointer-events-none bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl leading-none font-semibold whitespace-pre-wrap text-transparent dark:from-white dark:to-slate-900/10">
        Confetti
      </span>

      <Confetti
        ref={confettiRef}
        className="absolute top-0 left-0 z-0 size-full"
        onMouseEnter={() => {
          confettiRef.current?.fire({})
        }}
      />
    </div>
  )
}

```

## Installation

CLIManual

```relative font-mono text-sm leading-none

```

## Examples

### Basic

PreviewCode

[Open in](https://v0.dev/chat/api/open?url=https://magicui.design/r/confetti-basic-cannon.json)

Confetti 🎉

Copy

```
import { ConfettiButton } from "@/registry/magicui/confetti"

export function ConfettiButtonDemo() {
  return (
    <div className="relative">
      <ConfettiButton>Confetti 🎉</ConfettiButton>
    </div>
  )
}

```

### Random Direction

PreviewCode

[Open in](https://v0.dev/chat/api/open?url=https://magicui.design/r/confetti-random-direction.json)

Random Confetti 🎉

Copy

```
import { ConfettiButton } from "@/registry/magicui/confetti"

export function ConfettiButtonDemo() {
  return (
    <div className="relative">
      <ConfettiButton
        options={{
          get angle() {
            return Math.random() * 360
          },
        }}
      >
        Random Confetti 🎉
      </ConfettiButton>
    </div>
  )
}

```

### Fireworks

PreviewCode

[Open in](https://v0.dev/chat/api/open?url=https://magicui.design/r/confetti-fireworks.json)

Trigger Fireworks

Copy

```
"use client"

import confetti from "canvas-confetti"

import { Button } from "@/components/ui/button"

export function ConfettiFireworks() {
  const handleClick = () => {
    const duration = 5 * 1000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

    const randomInRange = (min: number, max: number) =>
      Math.random() * (max - min) + min

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return clearInterval(interval)
      }

      const particleCount = 50 * (timeLeft / duration)
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    }, 250)
  }

  return (
    <div className="relative">
      <Button onClick={handleClick}>Trigger Fireworks</Button>
    </div>
  )
}

```

### Side Cannons

PreviewCode

[Open in](https://v0.dev/chat/api/open?url=https://magicui.design/r/confetti-side-cannons.json)

Trigger Side Cannons

Copy

```
"use client"

import confetti from "canvas-confetti"

import { Button } from "@/components/ui/button"

export function ConfettiSideCannons() {
  const handleClick = () => {
    const end = Date.now() + 3 * 1000 // 3 seconds
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"]

    const frame = () => {
      if (Date.now() > end) return

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      })
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      })

      requestAnimationFrame(frame)
    }

    frame()
  }

  return (
    <div className="relative">
      <Button onClick={handleClick}>Trigger Side Cannons</Button>
    </div>
  )
}

```

### Stars

PreviewCode

[Open in](https://v0.dev/chat/api/open?url=https://magicui.design/r/confetti-stars.json)

Trigger Stars

Copy

```
"use client"

import confetti from "canvas-confetti"

import { Button } from "@/components/ui/button"

export function ConfettiStars() {
  const handleClick = () => {
    const defaults = {
      spread: 360,
      ticks: 50,
      gravity: 0,
      decay: 0.94,
      startVelocity: 30,
      colors: ["#FFE400", "#FFBD00", "#E89400", "#FFCA6C", "#FDFFB8"],
    }

    const shoot = () => {
      confetti({
        ...defaults,
        particleCount: 40,
        scalar: 1.2,
        shapes: ["star"],
      })

      confetti({
        ...defaults,
        particleCount: 10,
        scalar: 0.75,
        shapes: ["circle"],
      })
    }

    setTimeout(shoot, 0)
    setTimeout(shoot, 100)
    setTimeout(shoot, 200)
  }

  return (
    <div className="relative">
      <Button onClick={handleClick}>Trigger Stars</Button>
    </div>
  )
}

```

### Custom Shapes

PreviewCode

[Open in](https://v0.dev/chat/api/open?url=https://magicui.design/r/confetti-custom-shapes.json)

Trigger Shapes

Copy

```
"use client"

import confetti from "canvas-confetti"

import { Button } from "@/components/ui/button"

export function ConfettiCustomShapes() {
  const handleClick = () => {
    const scalar = 2
    const triangle = confetti.shapeFromPath({
      path: "M0 10 L5 0 L10 10z",
    })
    const square = confetti.shapeFromPath({
      path: "M0 0 L10 0 L10 10 L0 10 Z",
    })
    const coin = confetti.shapeFromPath({
      path: "M5 0 A5 5 0 1 0 5 10 A5 5 0 1 0 5 0 Z",
    })
    const tree = confetti.shapeFromPath({
      path: "M5 0 L10 10 L0 10 Z",
    })

    const defaults = {
      spread: 360,
      ticks: 60,
      gravity: 0,
      decay: 0.96,
      startVelocity: 20,
      shapes: [triangle, square, coin, tree],
      scalar,
    }

    const shoot = () => {
      confetti({
        ...defaults,
        particleCount: 30,
      })

      confetti({
        ...defaults,
        particleCount: 5,
      })

      confetti({
        ...defaults,
        particleCount: 15,
        scalar: scalar / 2,
        shapes: ["circle"],
      })
    }

    setTimeout(shoot, 0)
    setTimeout(shoot, 100)
    setTimeout(shoot, 200)
  }

  return (
    <div className="relative flex items-center justify-center">
      <Button onClick={handleClick}>Trigger Shapes</Button>
    </div>
  )
}

```

### Emoji

PreviewCode

[Open in](https://v0.dev/chat/api/open?url=https://magicui.design/r/confetti-emoji.json)

Trigger Emoji

Copy

```
"use client"

import confetti from "canvas-confetti"

import { Button } from "@/components/ui/button"

export function ConfettiEmoji() {
  const handleClick = () => {
    const scalar = 2
    const unicorn = confetti.shapeFromText({ text: "🦄", scalar })

    const defaults = {
      spread: 360,
      ticks: 60,
      gravity: 0,
      decay: 0.96,
      startVelocity: 20,
      shapes: [unicorn],
      scalar,
    }

    const shoot = () => {
      confetti({
        ...defaults,
        particleCount: 30,
      })

      confetti({
        ...defaults,
        particleCount: 5,
      })

      confetti({
        ...defaults,
        particleCount: 15,
        scalar: scalar / 2,
        shapes: ["circle"],
      })
    }

    setTimeout(shoot, 0)
    setTimeout(shoot, 100)
    setTimeout(shoot, 200)
  }

  return (
    <div className="relative justify-center">
      <Button onClick={handleClick}>Trigger Emoji</Button>
    </div>
  )
}

```

### Usage

```
Copyimport { Confetti } from "@/components/ui/confetti"
```

```
Copy<Confetti />
```

## Props

### Confetti

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `particleCount` | `Integer` | `50` | The number of confetti particles to launch |
| `angle` | `Number` | `90` | The angle in degrees at which to launch confetti |
| `spread` | `Number` | `45` | The spread in degrees of the confetti |
| `startVelocity` | `Number` | `45` | The initial velocity of the confetti |
| `decay` | `Number` | `0.9` | The rate at which confetti slows down |
| `gravity` | `Number` | `1` | The gravity applied to confetti particles |
| `drift` | `Number` | `0` | The horizontal drift applied to particles |
| `flat` | `Boolean` | `false` | Whether confetti particles are flat |
| `ticks` | `Number` | `200` | The number of frames confetti lasts |
| `origin` | `Object` | `{ x: 0.5, y: 0.5 }` | The origin point of the confetti |
| `colors` | `Array of Strings` | `['#26ccff', '#a25afd', '#ff5e7e', '#88ff5a', '#fcff42', '#ffa62d', '#ff36ff']` | Array of color strings in HEX format |
| `shapes` | `Array of Strings` | `['square', 'circle', 'star']` | Array of shapes for the confetti |
| `zIndex` | `Integer` | `100` | The z-index of the confetti |
| `disableForReducedMotion` | `Boolean` | `false` | Disables confetti for users who prefer no motion |
| `useWorker` | `Boolean` | `true` | Use Web Worker for better performance |
| `resize` | `Boolean` | `true` | Whether to resize the canvas |
| `canvas` | `HTMLCanvasElement or null` | `null` | Custom canvas element to draw confetti |
| `scalar` | `Number` | `1` | Scaling factor for confetti size |

### ConfettiButton

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `options` | `Object` | `{}` | Options for the confetti |
| `children` | `React.ReactNode` | `null` | Children to render inside the button |

## Credits

- Credit to [Bankk](https://www.x.com/bankkroll_eth)
- Inspired by [canvas-confetti](https://www.npmjs.com/package/canvas-confetti)

[Comic Text](https://magicui.design/docs/components/comic-text) [Cool Mode](https://magicui.design/docs/components/cool-mode)

On This Page

[Installation](https://magicui.design/docs/components/confetti#installation) [Examples](https://magicui.design/docs/components/confetti#examples) [Basic](https://magicui.design/docs/components/confetti#basic) [Random Direction](https://magicui.design/docs/components/confetti#random-direction) [Fireworks](https://magicui.design/docs/components/confetti#fireworks) [Side Cannons](https://magicui.design/docs/components/confetti#side-cannons) [Stars](https://magicui.design/docs/components/confetti#stars) [Custom Shapes](https://magicui.design/docs/components/confetti#custom-shapes) [Emoji](https://magicui.design/docs/components/confetti#emoji) [Usage](https://magicui.design/docs/components/confetti#usage) [Props](https://magicui.design/docs/components/confetti#props) [Confetti](https://magicui.design/docs/components/confetti#confetti) [ConfettiButton](https://magicui.design/docs/components/confetti#confettibutton) [Credits](https://magicui.design/docs/components/confetti#credits)

Contribute

- [Report an issue](https://github.com/magicuidesign/magicui/issues/new?title=%5Bbug%5D%3A+%2Fdocs%2Fcomponents%2Fconfetti&labels=bug&labels=documentation&template=bug_report.yml)
- [Request a feature](https://github.com/magicuidesign/magicui/issues/new?title=%5Bfeat%5D%3A+%2Fdocs%2Fcomponents%2Fconfetti&labels=enhancement&template=feature_request.yml)
- [Edit this page](https://github.com/magicuidesign/magicui/edit/main/apps/www/content/docs/components/confetti.mdx)

Limited Time Offer

ShipFasterwith Magic UI ProMagic UI Pro

Stop building from scratch.

Get8 production-ready templatesand50+ premium componentsthat your users will love.

Next.js 15 + TypeScript ready

Copy, paste, customize in minutes

Save 100+ hours of development

$199once

[Get Lifetime Access](https://pro.magicui.design/)

Trusted by 5,000+ developers