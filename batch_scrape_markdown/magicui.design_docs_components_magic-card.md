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

# Magic Card

Copy Page

[Previous](https://magicui.design/docs/components/line-shadow-text) [Next](https://magicui.design/docs/components/marquee)

A spotlight effect that follows your mouse cursor and highlights borders on hover.

PreviewCode

[Open in](https://v0.dev/chat/api/open?url=https://magicui.design/r/magic-card-demo.json)

Login

Enter your credentials to access your account

Email

Password

Sign In

Copy

```
"use client"

import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MagicCard } from "@/registry/magicui/magic-card"

export function MagicCardDemo() {
  const { theme } = useTheme()
  return (
    <Card className="w-full max-w-sm border-none p-0 shadow-none">
      <MagicCard
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        className="p-0"
      >
        <CardHeader className="border-border border-b p-4 [.border-b]:pb-4">
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4">
          <form>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="name@example.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="border-border border-t p-4 [.border-t]:pt-4">
          <Button className="w-full">Sign In</Button>
        </CardFooter>
      </MagicCard>
    </Card>
  )
}

```

## Installation

CLIManual

```relative font-mono text-sm leading-none

```

## Usage

```
Copyimport { MagicCard } from "@/registry/magicui/magic-card"
```

```
Copy<MagicCard>
  <div className="p-4">
    <p>Hello World</p>
    <span>Hover me</span>
  </div>
</MagicCard>
```

## Props

### MagicCard

| Prop name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `React.ReactNode` | `-` | The content to be rendered inside the card |
| `className` | `string` | `-` | Additional CSS classes to apply to the card |
| `gradientSize` | `number` | `200` | Size of the gradient effect |
| `gradientColor` | `string` | `#262626` | Color of the gradient effect |
| `gradientOpacity` | `number` | `0.8` | Opacity of the gradient effect |
| `gradientFrom` | `string` | `#9E7AFF` | Start color of the gradient border |
| `gradientTo` | `string` | `#FE8BBB` | End color of the gradient border |

[Line Shadow Text](https://magicui.design/docs/components/line-shadow-text) [Marquee](https://magicui.design/docs/components/marquee)

On This Page

[Installation](https://magicui.design/docs/components/magic-card#installation) [Usage](https://magicui.design/docs/components/magic-card#usage) [Props](https://magicui.design/docs/components/magic-card#props) [MagicCard](https://magicui.design/docs/components/magic-card#magiccard)

Contribute

- [Report an issue](https://github.com/magicuidesign/magicui/issues/new?title=%5Bbug%5D%3A+%2Fdocs%2Fcomponents%2Fmagic-card&labels=bug&labels=documentation&template=bug_report.yml)
- [Request a feature](https://github.com/magicuidesign/magicui/issues/new?title=%5Bfeat%5D%3A+%2Fdocs%2Fcomponents%2Fmagic-card&labels=enhancement&template=feature_request.yml)
- [Edit this page](https://github.com/magicuidesign/magicui/edit/main/apps/www/content/docs/components/magic-card.mdx)

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