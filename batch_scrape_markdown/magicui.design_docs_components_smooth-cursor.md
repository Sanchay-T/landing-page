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

# Smooth Cursor

Copy Page

[Previous](https://magicui.design/docs/components/shiny-button) [Next](https://magicui.design/docs/components/sparkles-text)

A customizable, physics-based smooth cursor animation component for React applications.

PreviewCode

[Open in](https://v0.dev/chat/api/open?url=https://magicui.design/r/smooth-cursor-demo.json)

Move your mouse aroundTap anywhere to see the cursor

Copy

```
import { SmoothCursor } from "@/registry/magicui/smooth-cursor"

export function SmoothCursorDemo() {
  return (
    <>
      <span className="hidden md:block">Move your mouse around</span>
      <span className="block md:hidden">Tap anywhere to see the cursor</span>
      <SmoothCursor />
    </>
  )
}

```

## Features

- 🎯 Smooth physics-based cursor animations
- 🔄 Rotation effects based on movement direction
- ⚡ Performance optimized with RAF
- 🎨 Fully customizable cursor design
- 📦 Lightweight and easy to implement

## Installation

CLIManual

```relative font-mono text-sm leading-none

```

## Usage

```
Copyimport { SmoothCursor } from "@/components/ui/smooth-cursor"
```

```
Copy<SmoothCursor />
```

## Hiding Default Browser Cursor

To prevent the default browser cursor from overlapping with the custom cursor, add the following CSS globally:

```
Copy* {
  cursor: none !important;
}
```

### Optional: Keep text cursor for inputs

```
Copyinput,
textarea,
select {
  cursor: text !important;
}
```

💡 If you're using Tailwind CSS, you can add cursor-none to your layout wrapper:

```
Copy<div className="cursor-none">
  <SmoothCursor />
  {/* your app */}
</div>
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `cursor` | `React.ReactNode` | `<DefaultCursorSVG />` | Custom cursor component to replace the default cursor |
| `springConfig` | `SpringConfig` | See below | Configuration object for the spring animation behavior |

### SpringConfig Type

```
Copyinterface SpringConfig {
  damping: number // Controls how quickly the animation settles
  stiffness: number // Controls the spring stiffness
  mass: number // Controls the virtual mass of the animated object
  restDelta: number // Controls the threshold at which animation is considered complete
}
```

### Default Spring Configuration

```
Copyconst defaultSpringConfig = {
  damping: 45,
  stiffness: 400,
  mass: 1,
  restDelta: 0.001,
}
```

## Browser Support

Compatible with all modern browsers that support:

- `requestAnimationFrame`
- CSS transforms
- Pointer events

## Accessibility

When using this component, consider that:

- Users navigating via keyboard will not see the custom cursor
- You may want to provide alternative visual cues for interactive elements
- Some users may have motion sensitivity, so consider providing a way to disable the animation

## Credits

- Credit to [@Code\_Parth](https://twitter.com/Code_Parth) for the original concept and implementation

[Shiny Button](https://magicui.design/docs/components/shiny-button) [Sparkles Text](https://magicui.design/docs/components/sparkles-text)

On This Page

[Features](https://magicui.design/docs/components/smooth-cursor#features) [Installation](https://magicui.design/docs/components/smooth-cursor#installation) [Usage](https://magicui.design/docs/components/smooth-cursor#usage) [Hiding Default Browser Cursor](https://magicui.design/docs/components/smooth-cursor#hiding-default-browser-cursor) [Optional: Keep text cursor for inputs](https://magicui.design/docs/components/smooth-cursor#optional-keep-text-cursor-for-inputs) [Props](https://magicui.design/docs/components/smooth-cursor#props) [SpringConfig Type](https://magicui.design/docs/components/smooth-cursor#springconfig-type) [Default Spring Configuration](https://magicui.design/docs/components/smooth-cursor#default-spring-configuration) [Browser Support](https://magicui.design/docs/components/smooth-cursor#browser-support) [Accessibility](https://magicui.design/docs/components/smooth-cursor#accessibility) [Credits](https://magicui.design/docs/components/smooth-cursor#credits)

Contribute

- [Report an issue](https://github.com/magicuidesign/magicui/issues/new?title=%5Bbug%5D%3A+%2Fdocs%2Fcomponents%2Fsmooth-cursor&labels=bug&labels=documentation&template=bug_report.yml)
- [Request a feature](https://github.com/magicuidesign/magicui/issues/new?title=%5Bfeat%5D%3A+%2Fdocs%2Fcomponents%2Fsmooth-cursor&labels=enhancement&template=feature_request.yml)
- [Edit this page](https://github.com/magicuidesign/magicui/edit/main/apps/www/content/docs/components/smooth-cursor.mdx)

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