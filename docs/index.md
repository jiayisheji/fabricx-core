---
# 使用 VitePress 的 "Hero Section" 布局
layout: home

hero:
  name: "FabricX Core"
  text: "为复杂创意 Web 编辑器而生的应用框架"
  tagline: 驾驭依赖注入、插件化架构与类型安全命令系统的强大能力，构建真正可扩展、可维护的下一代 Web 应用。
  image:
      src: /assets/logo.png
      alt: FabricX Core Logo
      style: "border-radius: 12px;"
  actions:
    - theme: brand
      text: 什么是 Fabricx Core
      link: /guide/what-is-fabricx-core
    - theme: alt
      text: GitHub
      link: https://github.com/jiayisheji/fabricx-core

features:
  - title: 现代化的依赖注入
    icon: 💡
    details: 轻量、零依赖、可分层的 DI 容器。轻松驾驭复杂性，编写真正可测试、高内聚的代码。
  - title: 可扩展的插件架构
    icon: 🔌
    details: 将每一个功能构建为独立的、拥有完整生命周期的插件。框架之魂在于扩展，核心即插件。
  - title: 类型安全的命令系统
    icon: ⌘
    details: 设计健壮、可撤销/重做的用户操作。内置中间件支持与端到端的类型安全，让复杂交互变得简单。
  - title: 内聚的应用生命周期
    icon: 🚀
    details: 从引导 (`bootstrap`) 到挂载 (`mount`) 再到销毁 (`destroy`)，清晰、可预测的生命周期将一切有机地串联起来。
  - title: 分层的事件系统
    icon: 📡
    details: 设计灵感源于 DOM，支持捕获与冒泡、中间件，提供类型安全事件目标的精密事件总线。
  - title: 生产级的底层设施
    icon: 🛠️
    details: 不止于基础。内置状态机、弹性模式 (重试/超时)、结构化日志以及强大的数据结构，为您的应用提供坚实基础。     
---
