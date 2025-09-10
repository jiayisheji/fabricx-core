# FabricX Core Editor

<p align="center">
  <img src="https://github.com/jiayisheji/fabricx-core/docs/assets/logo.png" alt="FabricX Core Logo" width="150"/>
</p>

<h1 align="center">@fabricx-core/editor</h1>

<p align="center">
  <strong>为复杂创意 Web 编辑器而生的应用框架</strong>
  <br />
  驾驭依赖注入、插件化架构与类型安全命令系统的强大能力，构建真正可扩展、可维护的下一代 Web 应用。
</p>

<p align="center">
  <!-- 预留徽章位置 - 项目发布后替换链接 -->
  <a href="https://www.npmjs.com/package/@fabricx-core/editor"><img src="https://img.shields.io/npm/v/@fabricx-core/editor.svg" alt="NPM Version"></a>
  <a href="https://github.com/jiayisheji/fabricx-core/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/@fabricx-core/editor.svg" alt="License"></a>
  <a href="[此处替换为您的构建状态链接]"><img src="https://img.shields.io/github/actions/workflow/status/jiayisheji/fabricx-core/ci.yml?branch=main" alt="Build Status"></a>
  <a href="https://codecov.io/github/jiayisheji/fabricx-core" ><img src="https://codecov.io/github/jiayisheji/fabricx-core/graph/badge.svg?token=MW6FHBAD3H" alt="Code Coverage" /></a>
</p>

<p align="center">
  <a href="https://github.com/jiayisheji/fabricx-core"><strong>详细文档</strong></a> ·
  <a href="https://github.com/jiayisheji/fabricx-core"><strong>在线示例</strong></a> ·
  <a href="https://github.com/jiayisheji/fabricx-core/issues">报告 Bug</a> ·
  <a href="https://github.com/jiayisheji/fabricx-core/discussions">参与讨论</a>
</p>

---

> **⚠️ 项目状态：开发者预览 (Developer Preview)**
>
> FabricX Core 目前正处于积极开发阶段。核心架构已稳定，主要功能已实现并通过了广泛的单元测试。但 API 仍可能在 `1.0.0` 正式版发布前发生变化。
>
> 我们非常欢迎您试用、提供反馈，并参与到这个激动人心的项目中来！

## 🤔 解决什么问题？

直接使用 [Fabric.js](http://fabricjs.com/) 构建大型、复杂的图形编辑器时，开发者往往会面临状态管理混乱、业务逻辑与视图高度耦合、缺乏工程化体系等挑战。随着应用功能的增长，代码的可维护性会急剧下降。

**FabricX Core** 旨在解决这些痛点。它并非要取代 Fabric.js，而是为其提供一个强大的、企业级的**应用架构**。我们提供了一整套经过实战检验的解决方案，让您可以从重复的底层工作中解放出来，真正专注于实现编辑器的核心创意功能。

## ✨ 核心特性

- **💡 现代化的依赖注入**: 轻量、零依赖、可分层的 DI 容器。轻松驾驭复杂性，编写真正可测试、高内聚的代码。
- **🔌 可扩展的插件架构**: 将每一个功能构建为独立的、拥有完整生命周期的插件。框架之魂在于扩展，核心即插件。
- **⌘ 类型安全的命令系统**: 设计健壮、可撤销/重做的用户操作。内置中间件支持与端到端的类型安全，让复杂交互变得简单。
- **🚀 内聚的应用生命周期**: 从引导 (`bootstrap`) 到挂载 (`mount`) 再到销毁 (`destroy`)，清晰、可预测的生命周期将一切有机地串联起来。
- **📡 分层的事件系统**: 设计灵感源于 DOM，支持捕获与冒泡、中间件，提供类型安全事件目标的精密事件总线。
- **🛠️ 生产级的底层设施**: 不止于基础。内置状态机、弹性模式 (重试/超时)、结构化日志以及强大的数据结构，为您的应用提供坚实基础。

## 🚀 快速上手 (理想中的 API)

> **注意**: 以下是项目 `1.0.0` 版本的目标 API 示例。

**1. HTML 结构**

```html
<div id="editor-container" style="width: 800px; height: 600px; border: 1px solid #ccc;"></div>
```

**2. TypeScript 代码**

```typescript
// main.ts
import { bootstrapApplication } from '@fabricx-core/editor';
import { provideHistory } from '@fabricx-core/plugins';

async function main() {
  // 1. 引导应用，并注册所需插件
  const app = await bootstrapApplication({
    plugins: [
      // 启用撤销/重做功能
      ...applyPlugin(
        provideHistory({
          capacity: 100,
        }),
      ),
    ],
  });

  // 2. 将应用挂载到 DOM 元素上
  const appContext = await app.mount('#editor-container');

  // 3. 通过 appContext 与编辑器交互，执行命令
  appContext.exec('object:add-rect', {
    left: 100,
    top: 100,
    width: 150,
    height: 80,
    fill: '#ff7f50',
  });
}

main();
```

## 🏗️ 架构总览

**FabricX Core** 的设计哲学根植于**分层**、**模块化**与**可扩展性**。它并非一个大而全的整体，而是一个由多个**高内聚、低耦合**的核心模块协同工作的精密生态系统。

<img src="https://github.com/jiayisheji/fabricx-core/docs/assets/architecture.svg" alt="FabricX Core Architecture" />

- **应用层 (Application Layer)**: 框架的最外层，负责整个应用的**引导 (Bootstrap)** 和**生命周期管理**。
- **中间系统层 (Systems Layer)**: 构建了应用的行为框架，包括定义用户操作的**命令系统**和实现功能扩展的**插件系统**。
- **核心业务层 (Editor Business Layer)**: 编辑器具体业务逻辑的实现，包含一系列各司其职的**管理器 (Managers)**，如 `ObjectManager`、`LayerManager`、`ViewportManager` 等。
- **底层核心 (Core Layer)**: 提供与业务无关的基础能力，如依赖注入、事件系统、钩子、日志、错误处理和状态机等。

> 👉 想了解更多细节？请阅读我们的 [**架构深度解析**]([链接到您的详细架构文档])。

## 📦 包 (Packages)

本项目采用 monorepo 结构，主要包含以下两个包：

| 包                          | NPM                                                                                                                   | 描述                                                             |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| **`@fabricx-core/editor`**  | [![npm](https://img.shields.io/npm/v/@fabricx-core/editor.svg)](https://www.npmjs.com/package/@fabricx-core/editor)   | 核心框架。包含所有底层模块和编辑器核心服务。                     |
| **`@fabricx-core/plugins`** | [![npm](https://img.shields.io/npm/v/@fabricx-core/plugins.svg)](https://www.npmjs.com/package/@fabricx-core/plugins) | 官方插件集。提供了诸如交互控制、对齐、历史记录等开箱即用的功能。 |

## 🤝 参与贡献

我们正处在构建下一代 Web 编辑器框架的激动人心的阶段，欢迎任何形式的贡献！无论是提交 Bug 报告、参与功能讨论，还是贡献代码，您的帮助都至关重要。

- **报告问题**: 发现 Bug？请在 [GitHub Issues](https://github.com/jiayisheji/fabricx-core/issues) 中提交详细报告。
- **功能建议**: 有很棒的想法？欢迎在 [GitHub Discussions](https://github.com/jiayisheji/fabricx-core/discussions) 中与我们分享。
- **贡献代码**: 请阅读我们的 [**贡献指南 (CONTRIBUTING.md)**](CONTRIBUTING.md) 来了解开发流程和代码规范。

## 📄 开源协议

本项目基于 **MIT** 协议开源。
