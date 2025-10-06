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

# Code Comparison

Copy Page

[Previous](https://magicui.design/docs/components/border-beam) [Next](https://magicui.design/docs/components/comic-text)

A component which compares two code snippets.

PreviewCode

[Open in](https://v0.dev/chat/api/open?url=https://magicui.design/r/code-comparison-demo.json)

middleware.tsbefore

```
import { NextRequest } from 'next/server';

export const middleware = async (req: NextRequest) => {
  let user = undefined;
  let team = undefined;
  const token = req.headers.get('token');

  if(req.nextUrl.pathname.startsWith('/auth')) {
    user = await getUserByToken(token);

    if(!user) {
      return NextResponse.redirect('/login');
    }
  }

  if(req.nextUrl.pathname.startsWith('/team')) {
    user = await getUserByToken(token);

    if(!user) {
      return NextResponse.redirect('/login');
    }

    const slug = req.nextUrl.query.slug;
    team = await getTeamBySlug(slug);

    if(!team) {
      return NextResponse.redirect('/');
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/|_static|_vercel|[\w-]+\.\w+).*)'],
};
```

middleware.tsafter

```
import { createMiddleware, type MiddlewareFunctionProps } from '@app/(auth)/auth/_middleware';
import { auth } from '@/app/(auth)/auth/_middleware';
import { auth } from '@/app/(auth)/auth/_middleware';
import { team } from '@/app/(team)/team/_middleware';

const middlewares = {
  '/auth{/:path?}': auth,
  '/team{/:slug?}': [ auth, team ],
};

export const middleware = createMiddleware(middlewares);

export const config = {
  matcher: ['/((?!_next/|_static|_vercel|[\w-]+\.\w+).*)'],
};
```

VS

Copy

```
import { CodeComparison } from "@/registry/magicui/code-comparison"

const beforeCode = `import { NextRequest } from 'next/server';

export const middleware = async (req: NextRequest) => {
  let user = undefined;
  let team = undefined;
  const token = req.headers.get('token');

  if(req.nextUrl.pathname.startsWith('/auth')) {
    user = await getUserByToken(token);

    if(!user) {
      return NextResponse.redirect('/login');
    }
  }

  if(req.nextUrl.pathname.startsWith('/team')) {
    user = await getUserByToken(token);

    if(!user) {
      return NextResponse.redirect('/login');
    }

    const slug = req.nextUrl.query.slug;
    team = await getTeamBySlug(slug); // [!code highlight]

    if(!team) { // [!code highlight]
      return NextResponse.redirect('/'); // [!code highlight]
    } // [!code highlight]
  } // [!code highlight]

  return NextResponse.next(); // [!code highlight]
}

export const config = {
  matcher: ['/((?!_next/|_static|_vercel|[\\w-]+\\.\\w+).*)'], // [!code highlight]
};`

const afterCode = `import { createMiddleware, type MiddlewareFunctionProps } from '@app/(auth)/auth/_middleware';
import { auth } from '@/app/(auth)/auth/_middleware'; // [!code --]
import { auth } from '@/app/(auth)/auth/_middleware'; // [!code ++]
import { team } from '@/app/(team)/team/_middleware';

const middlewares = {
  '/auth{/:path?}': auth,
  '/team{/:slug?}': [ auth, team ],
};

export const middleware = createMiddleware(middlewares); // [!code focus]

export const config = {
  matcher: ['/((?!_next/|_static|_vercel|[\\w-]+\\.\\w+).*)'],
};`

export function CodeComparisonDemo() {
  return (
    <CodeComparison
      beforeCode={beforeCode}
      afterCode={afterCode}
      language="typescript"
      filename="middleware.ts"
      lightTheme="github-light"
      darkTheme="github-dark"
      highlightColor="rgba(101, 117, 133, 0.16)"
    />
  )
}

```

## Installation

CLIManual

```relative font-mono text-sm leading-none

```

## Usage

```
Copyimport { CodeComparison } from "@/components/ui/code-comparison"
```

```
Copy<CodeComparison beforeCode={beforeCode} afterCode={afterCode} />
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string` | `-` | The class name to be applied to the component |
| `beforeCode` | `string` | `-` | The code snippet to display in the "before" section |
| `afterCode` | `string` | `-` | The code snippet to display in the "after" section |
| `language` | `string` | `-` | The language of the code snippets (e.g., "typescript") |
| `filename` | `string` | `-` | The filename to display for the code snippets |
| `lightTheme` | `string` | `github-light` | The theme to use for light mode |
| `darkTheme` | `string` | `github-dark` | The theme to use for dark mode |
| `highlightColor` | `string` | `rgba(101, 117, 133, 0.16)` | The color to use for highlighting the code snippets |

[Border Beam](https://magicui.design/docs/components/border-beam) [Comic Text](https://magicui.design/docs/components/comic-text)

On This Page

[Installation](https://magicui.design/docs/components/code-comparison#installation) [Usage](https://magicui.design/docs/components/code-comparison#usage) [Props](https://magicui.design/docs/components/code-comparison#props)

Contribute

- [Report an issue](https://github.com/magicuidesign/magicui/issues/new?title=%5Bbug%5D%3A+%2Fdocs%2Fcomponents%2Fcode-comparison&labels=bug&labels=documentation&template=bug_report.yml)
- [Request a feature](https://github.com/magicuidesign/magicui/issues/new?title=%5Bfeat%5D%3A+%2Fdocs%2Fcomponents%2Fcode-comparison&labels=enhancement&template=feature_request.yml)
- [Edit this page](https://github.com/magicuidesign/magicui/edit/main/apps/www/content/docs/components/code-comparison.mdx)

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