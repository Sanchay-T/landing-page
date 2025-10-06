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

# Grid Pattern

Copy Page

[Previous](https://magicui.design/docs/components/globe) [Next](https://magicui.design/docs/components/hero-video-dialog)

A background grid pattern made with SVGs, fully customizable using Tailwind CSS.

PreviewCode

[Open in](https://v0.dev/chat/api/open?url=https://magicui.design/r/grid-pattern-demo.json)

Copy

```
"use client"

import { cn } from "@/lib/utils"
import { GridPattern } from "@/registry/magicui/grid-pattern"

export function GridPatternDemo() {
  return (
    <div className="bg-background relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border">
      <GridPattern
        squares={[\
          [4, 4],\
          [5, 1],\
          [8, 2],\
          [5, 3],\
          [5, 5],\
          [10, 10],\
          [12, 15],\
          [15, 10],\
          [10, 15],\
          [15, 10],\
          [10, 15],\
          [15, 10],\
        ]}
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        )}
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

### Linear Gradient

PreviewCode

[Open in](https://v0.dev/chat/api/open?url=https://magicui.design/r/grid-pattern-linear-gradient.json)

Copy

```
"use client"

import { cn } from "@/lib/utils"
import { GridPattern } from "@/registry/magicui/grid-pattern"

export function GridPatternLinearGradient() {
  return (
    <div className="bg-background relative flex size-full items-center justify-center overflow-hidden rounded-lg border p-20">
      <GridPattern
        width={20}
        height={20}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
        )}
      />
    </div>
  )
}

```

### Dashed Stroke

PreviewCode

[Open in](https://v0.dev/chat/api/open?url=https://magicui.design/r/grid-pattern-dashed.json)

Copy

```
"use client"

import { cn } from "@/lib/utils"
import { GridPattern } from "@/registry/magicui/grid-pattern"

export function GridPatternDashed() {
  return (
    <div className="bg-background relative flex size-full items-center justify-center overflow-hidden rounded-lg border p-20">
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
        )}
      />
    </div>
  )
}

```

### Usage

```
Copyimport { GridPattern } from "@/components/ui/grid-pattern"
```

```
Copy<div className="relative h-[500px] w-full overflow-hidden">
  <GridPattern />
</div>
```

## Props

### GridPattern

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `width` | `number` | `40` | Width of the pattern |
| `height` | `number` | `40` | Height of the pattern |
| `x` | `number` | `-1` | X offset of the pattern |
| `y` | `number` | `-1` | Y offset of the pattern |
| `squares` | `number` | `[]` | X Y coordinates of filled squares as 2D array |
| `strokeDasharray` | `string` | `0` | Stroke dash array for the pattern |

[Globe](https://magicui.design/docs/components/globe) [Hero Video Dialog](https://magicui.design/docs/components/hero-video-dialog)

On This Page

[Installation](https://magicui.design/docs/components/grid-pattern#installation) [Examples](https://magicui.design/docs/components/grid-pattern#examples) [Linear Gradient](https://magicui.design/docs/components/grid-pattern#linear-gradient) [Dashed Stroke](https://magicui.design/docs/components/grid-pattern#dashed-stroke) [Usage](https://magicui.design/docs/components/grid-pattern#usage) [Props](https://magicui.design/docs/components/grid-pattern#props) [GridPattern](https://magicui.design/docs/components/grid-pattern#gridpattern)

Contribute

- [Report an issue](https://github.com/magicuidesign/magicui/issues/new?title=%5Bbug%5D%3A+%2Fdocs%2Fcomponents%2Fgrid-pattern&labels=bug&labels=documentation&template=bug_report.yml)
- [Request a feature](https://github.com/magicuidesign/magicui/issues/new?title=%5Bfeat%5D%3A+%2Fdocs%2Fcomponents%2Fgrid-pattern&labels=enhancement&template=feature_request.yml)
- [Edit this page](https://github.com/magicuidesign/magicui/edit/main/apps/www/content/docs/components/grid-pattern.mdx)

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