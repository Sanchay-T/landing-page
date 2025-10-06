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

# File Tree

Copy Page

[Previous](https://magicui.design/docs/components/dotted-map) [Next](https://magicui.design/docs/components/flickering-grid)

A component used to showcase the folder and file structure of a directory.

PreviewCode

[Open in](https://v0.dev/chat/api/open?url=https://magicui.design/r/file-tree-demo.json)

src

app

layout.tsx

page.tsx

components

ui

button.tsx

header.tsx

footer.tsx

lib

utils.ts

Copy

```
import { File, Folder, Tree } from "@/registry/magicui/file-tree"

export function FileTreeDemo() {
  return (
    <div className="bg-background relative flex h-[300px] w-1/2 flex-col items-center justify-center overflow-hidden rounded-lg border">
      <Tree
        className="bg-background overflow-hidden rounded-md p-2"
        initialSelectedId="7"
        initialExpandedItems={[\
          "1",\
          "2",\
          "3",\
          "4",\
          "5",\
          "6",\
          "7",\
          "8",\
          "9",\
          "10",\
          "11",\
        ]}
        elements={ELEMENTS}
      >
        <Folder element="src" value="1">
          <Folder value="2" element="app">
            <File value="3">
              <p>layout.tsx</p>
            </File>
            <File value="4">
              <p>page.tsx</p>
            </File>
          </Folder>
          <Folder value="5" element="components">
            <Folder value="6" element="ui">
              <File value="7">
                <p>button.tsx</p>
              </File>
            </Folder>
            <File value="8">
              <p>header.tsx</p>
            </File>
            <File value="9">
              <p>footer.tsx</p>
            </File>
          </Folder>
          <Folder value="10" element="lib">
            <File value="11">
              <p>utils.ts</p>
            </File>
          </Folder>
        </Folder>
      </Tree>
    </div>
  )
}

const ELEMENTS = [\
  {\
    id: "1",\
    isSelectable: true,\
    name: "src",\
    children: [\
      {\
        id: "2",\
        isSelectable: true,\
        name: "app",\
        children: [\
          {\
            id: "3",\
            isSelectable: true,\
            name: "layout.tsx",\
          },\
          {\
            id: "4",\
            isSelectable: true,\
            name: "page.tsx",\
          },\
        ],\
      },\
      {\
        id: "5",\
        isSelectable: true,\
        name: "components",\
        children: [\
          {\
            id: "6",\
            isSelectable: true,\
            name: "header.tsx",\
          },\
          {\
            id: "7",\
            isSelectable: true,\
            name: "footer.tsx",\
          },\
        ],\
      },\
      {\
        id: "8",\
        isSelectable: true,\
        name: "lib",\
        children: [\
          {\
            id: "9",\
            isSelectable: true,\
            name: "utils.ts",\
          },\
        ],\
      },\
    ],\
  },\
]

```

## Installation

CLIManual

```relative font-mono text-sm leading-none

```

## Usage

```
Copyimport { File, Folder, Tree } from "@/components/ui/file-tree"
```

```
Copy<Tree>
  <Folder>
    <Folder>
      <File>layout.tsx</File>
      <File>page.tsx</File>
    </Folder>
  </Folder>
</Tree>
```

## Props

### Tree

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `initialSelectedId` | `string` | `-` | The ID of the initially selected item. |
| `indicator` | `boolean` | `true` | Whether to show the tree indicator line. |
| `elements` | `TreeViewElement[]` | `-` | An array of tree view elements to render. |
| `initialExpandedItems` | `string[]` | `-` | An array of IDs for items that should be initially expanded. |
| `openIcon` | `React.ReactNode` | `-` | Custom icon for open folders. |
| `closeIcon` | `React.ReactNode` | `-` | Custom icon for closed folders. |
| `dir` | `"rtl" | "ltr"` | `"ltr"` | The text direction of the tree. |

### Folder

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `element` | `string` | `-` | The name of the folder. |
| `value` | `string` | `-` | The unique identifier for the folder. |
| `isSelectable` | `boolean` | `true` | Whether the folder can be selected. |
| `isSelect` | `boolean` | `-` | Whether the folder is currently selected. |

### File

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `string` | `-` | The unique identifier for the file. |
| `isSelectable` | `boolean` | `true` | Whether the file can be selected. |
| `isSelect` | `boolean` | `-` | Whether the file is currently selected. |
| `fileIcon` | `React.ReactNode` | `-` | Custom icon for the file. |

### CollapseButton

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `elements` | `TreeViewElement[]` | `-` | An array of tree view elements to control. |
| `expandAll` | `boolean` | `false` | Whether to expand all elements initially. |

[Dotted Map](https://magicui.design/docs/components/dotted-map) [Flickering Grid](https://magicui.design/docs/components/flickering-grid)

On This Page

[Installation](https://magicui.design/docs/components/file-tree#installation) [Usage](https://magicui.design/docs/components/file-tree#usage) [Props](https://magicui.design/docs/components/file-tree#props) [Tree](https://magicui.design/docs/components/file-tree#tree) [Folder](https://magicui.design/docs/components/file-tree#folder) [File](https://magicui.design/docs/components/file-tree#file) [CollapseButton](https://magicui.design/docs/components/file-tree#collapsebutton)

Contribute

- [Report an issue](https://github.com/magicuidesign/magicui/issues/new?title=%5Bbug%5D%3A+%2Fdocs%2Fcomponents%2Ffile-tree&labels=bug&labels=documentation&template=bug_report.yml)
- [Request a feature](https://github.com/magicuidesign/magicui/issues/new?title=%5Bfeat%5D%3A+%2Fdocs%2Fcomponents%2Ffile-tree&labels=enhancement&template=feature_request.yml)
- [Edit this page](https://github.com/magicuidesign/magicui/edit/main/apps/www/content/docs/components/file-tree.mdx)

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