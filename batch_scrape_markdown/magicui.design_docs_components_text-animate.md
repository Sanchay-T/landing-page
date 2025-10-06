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

# Text Animate

Copy Page

[Previous](https://magicui.design/docs/components/terminal) [Next](https://magicui.design/docs/components/text-reveal)

A text animation component that animates text using a variety of different animations.

PreviewCode

[Open in](https://v0.dev/chat/api/open?url=https://magicui.design/r/text-animate-demo.json)

Blur in by characterBlurinbycharacter

Copy

```
import { TextAnimate } from "@/registry/magicui/text-animate"

export function TextAnimateDemo() {
  return (
    <TextAnimate animation="blurInUp" by="character" once>
      Blur in by character
    </TextAnimate>
  )
}

```

## Installation

CLIManual

```relative font-mono text-sm leading-none

```

## Examples

### Blur In by Text

PreviewCode

[Open in](https://v0.dev/chat/api/open?url=https://magicui.design/r/text-animate-demo-2.json)

# Blur in textBlurintext

Copy

```
import { TextAnimate } from "@/registry/magicui/text-animate"

export function TextAnimateDemo2() {
  return (
    <TextAnimate animation="blurIn" as="h1">
      Blur in text
    </TextAnimate>
  )
}

```

### Slide Up by Word

PreviewCode

[Open in](https://v0.dev/chat/api/open?url=https://magicui.design/r/text-animate-demo-3.json)

Slide up by wordSlideupbyword

Copy

```
import { TextAnimate } from "@/registry/magicui/text-animate"

export function TextAnimateDemo3() {
  return (
    <TextAnimate animation="slideUp" by="word">
      Slide up by word
    </TextAnimate>
  )
}

```

### Scale Up by Text

PreviewCode

[Open in](https://v0.dev/chat/api/open?url=https://magicui.design/r/text-animate-demo-4.json)

Scale up by textScale up by text

Copy

```
import { TextAnimate } from "@/registry/magicui/text-animate"

export function TextAnimateDemo4() {
  return (
    <TextAnimate animation="scaleUp" by="text">
      Scale up by text
    </TextAnimate>
  )
}

```

### Fade In by Line

PreviewCode

[Open in](https://v0.dev/chat/api/open?url=https://magicui.design/r/text-animate-demo-5.json)

Fade in by line as paragraph

Fade in by line as paragraph

Fade in by line as paragraphFade in by line as paragraphFade in by line as paragraphFade in by line as paragraph

Copy

```
import { TextAnimate } from "@/registry/magicui/text-animate"

export function TextAnimateDemo5() {
  return (
    <TextAnimate animation="fadeIn" by="line" as="p">
      {`Fade in by line as paragraph\n\nFade in by line as paragraph\n\nFade in by line as paragraph`}
    </TextAnimate>
  )
}

```

### Slide Left by Character

PreviewCode

[Open in](https://v0.dev/chat/api/open?url=https://magicui.design/r/text-animate-demo-6.json)

Slide left by characterSlideleftbycharacter

Copy

```
import { TextAnimate } from "@/registry/magicui/text-animate"

export function TextAnimateDemo6() {
  return (
    <TextAnimate animation="slideLeft" by="character">
      Slide left by character
    </TextAnimate>
  )
}

```

### With Delay

PreviewCode

[Open in](https://v0.dev/chat/api/open?url=https://magicui.design/r/text-animate-demo-7.json)

Blur in by characterBlurinbycharacter

Copy

```
import { TextAnimate } from "@/registry/magicui/text-animate"

export function TextAnimateDemo7() {
  return (
    <TextAnimate animation="blurInUp" by="character" delay={2}>
      Blur in by character
    </TextAnimate>
  )
}

```

### With Duration

PreviewCode

[Open in](https://v0.dev/chat/api/open?url=https://magicui.design/r/text-animate-demo-8.json)

Blur in by characterBlurinbycharacter

Copy

```
import { TextAnimate } from "@/registry/magicui/text-animate"

export function TextAnimateDemo8() {
  return (
    <TextAnimate animation="blurInUp" by="character" duration={5}>
      Blur in by character
    </TextAnimate>
  )
}

```

### With Custom Motion Variants

PreviewCode

[Open in](https://v0.dev/chat/api/open?url=https://magicui.design/r/text-animate-demo-9.json)

Wavy Motion!WavyMotion!

Copy

```
"use client"

import { TextAnimate } from "@/registry/magicui/text-animate"

export function TextAnimateDemo9() {
  return (
    <TextAnimate
      variants={{
        hidden: {
          opacity: 0,
          y: 30,
          rotate: 45,
          scale: 0.5,
        },
        show: (i) => ({
          opacity: 1,
          y: 0,
          rotate: 0,
          scale: 1,
          transition: {
            delay: i * 0.1,
            duration: 0.4,
            y: {
              type: "spring",
              damping: 12,
              stiffness: 200,
              mass: 0.8,
            },
            rotate: {
              type: "spring",
              damping: 8,
              stiffness: 150,
            },
            scale: {
              type: "spring",
              damping: 10,
              stiffness: 300,
            },
          },
        }),
        exit: (i) => ({
          opacity: 0,
          y: 30,
          rotate: 45,
          scale: 0.5,
          transition: {
            delay: i * 0.1,
            duration: 0.4,
          },
        }),
      }}
      by="character"
    >
      Wavy Motion!
    </TextAnimate>
  )
}

```

## Usage

```
Copyimport { TextAnimate } from "@/components/ui/text-animate"
```

```
Copy<TextAnimate animation="blurInUp" by="word">
  Blur in by word
</TextAnimate>
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `string` | `-` | The text content to animate |
| `className` | `string` | `-` | The class name to be applied to the component |
| `delay` | `number` | `0` | Delay before animation starts |
| `duration` | `number` | `0.3` | Duration of the animation |
| `variants` | `Variants` | `-` | Custom motion variants for the animation |
| `as` | `ElementType` | `"p"` | The element type to render |
| `by` | `"text" | "word" | "character" | "line"` | `"word"` | How to split the text ("text", "word", "character") |
| `startOnView` | `boolean` | `true` | Whether to start animation when component enters viewport |
| `once` | `boolean` | `false` | Whether to animate only once |
| `animation` | `AnimationVariant` | `"fadeIn"` | The animation preset to use |

[Terminal](https://magicui.design/docs/components/terminal) [Text Reveal](https://magicui.design/docs/components/text-reveal)

On This Page

[Installation](https://magicui.design/docs/components/text-animate#installation) [Examples](https://magicui.design/docs/components/text-animate#examples) [Blur In by Text](https://magicui.design/docs/components/text-animate#blur-in-by-text) [Slide Up by Word](https://magicui.design/docs/components/text-animate#slide-up-by-word) [Scale Up by Text](https://magicui.design/docs/components/text-animate#scale-up-by-text) [Fade In by Line](https://magicui.design/docs/components/text-animate#fade-in-by-line) [Slide Left by Character](https://magicui.design/docs/components/text-animate#slide-left-by-character) [With Delay](https://magicui.design/docs/components/text-animate#with-delay) [With Duration](https://magicui.design/docs/components/text-animate#with-duration) [With Custom Motion Variants](https://magicui.design/docs/components/text-animate#with-custom-motion-variants) [Usage](https://magicui.design/docs/components/text-animate#usage) [Props](https://magicui.design/docs/components/text-animate#props)

Contribute

- [Report an issue](https://github.com/magicuidesign/magicui/issues/new?title=%5Bbug%5D%3A+%2Fdocs%2Fcomponents%2Ftext-animate&labels=bug&labels=documentation&template=bug_report.yml)
- [Request a feature](https://github.com/magicuidesign/magicui/issues/new?title=%5Bfeat%5D%3A+%2Fdocs%2Fcomponents%2Ftext-animate&labels=enhancement&template=feature_request.yml)
- [Edit this page](https://github.com/magicuidesign/magicui/edit/main/apps/www/content/docs/components/text-animate.mdx)

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