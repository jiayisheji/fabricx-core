# FabricX Core - Extensible Editor Architecture for Fabric.js

FabricX Core is a professional-grade architecture for building robust, extensible canvas editors using Fabric.js. It provides a solid foundation with enterprise-ready patterns while maintaining complete UI independence.

## Why FabricX Core

Building complex canvas editors requires:

- 🏗️ A solid architectural foundation
- 🔌 Extensible plugin system
- ⏪ Reliable undo/redo functionality
- 🧩 Modular, maintainable code structure

FabricX Core solves these challenges with:

- **Plugin Architecture** - Build features as independent modules
- **Command Pattern** - Implement undo/redo with ease
- **Dependency Injection** - Manage service dependencies elegantly
- **Event System** - Enable cross-plugin communication
- **UI Agnostic Design** - Use with any UI framework

## Key Features

- **Enterprise-Grade Patterns**  
  Command, DI, Event systems, and Plugin systems
- **Pure Logic Core**  
  Zero UI dependencies - bring your own interface
- **Fabric.js Abstraction**  
  Clean API surface for canvas operations
- **Performance Optimized**  
  Task scheduling and operation throttling
- **Extensible Architecture**  
  Add new features via plugins
- **Comprehensive Tooling**  
  Layer management, alignment tools, shortcuts

## Getting Started

```bash
npm install @fabricx-core/core @fabricx-core/plugins
```

```typescript
import { EditorCore } from '@fabricx-core/core';
import { HistoryPlugin, ShortcutPlugin } from '@fabricx-core/plugins';

// Initialize editor
const editor = new EditorCore({
  /* config */
});
editor.use(HistoryPlugin);
editor.use(ShortcutPlugin);
await editor.initialize();

// Execute commands
editor.executeCommand(new AddObjectCommand(object));

// Use plugins
editor.plugins.history.undo();
```

## Documentation

Explore our comprehensive documentation:  
[https://fabricx-core.github.io/docs](https://fabricx-core.github.io/docs)

## Examples

Check out our demo applications:

- [Simple Editor](https://github.com/your-username/fabricx-core/tree/main/apps/demo-simple)
- [Advanced Editor](https://github.com/your-username/fabricx-core/tree/main/apps/demo-advanced)

## Contributing

We welcome contributions! Please read our [Contribution Guidelines](CONTRIBUTING.md) before submitting a PR.

## License

Distributed under the MIT License. See `LICENSE` for more information.
