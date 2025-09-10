# Contributing to FabricX Core

🎉 First off, thank you for considering contributing to FabricX Core! 🎉

We believe in the power of the open-source community, and every contribution, no matter how small, is incredibly valuable to this project. This guide will help you get started smoothly.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Enhancements](#suggesting-enhancements)
  - [Contributing Code](#contributing-code)
- [Development Setup](#development-setup)
- [Git Commit Guidelines](#git-commit-guidelines)
- [Pull Request Process](#pull-request-process)

## Code of Conduct

To foster an open and welcoming community, we expect all participants to adhere to our [Code of Conduct](./CODE_OF_CONDUCT.md). Please take a moment to read it before participating.

## How Can I Contribute?

We welcome contributions in many forms.

### Reporting Bugs

If you encounter a bug while using the library, please report it by opening an issue on [GitHub Issues](https://github.com/jiayisheji/fabricx-core/issues). A high-quality bug report should include:

- **A clear title**: A concise summary of the issue.
- **Steps to reproduce**: A detailed, step-by-step guide to reproduce the bug.
- **Expected vs. Actual Behavior**: A clear description of what you expected to happen and what actually happened.
- **Environment Details**: Your browser version, OS, `@fabricx-core/editor` version, etc.
- **(Optional) Minimal Reproduction Repository**: If possible, providing a link to a CodeSandbox, StackBlitz, or a small GitHub repository that demonstrates the bug will help us resolve it much faster.

### Suggesting Enhancements

If you have a great idea for a new feature or an improvement, we'd love to hear it! Please share it via [GitHub Discussions](https://github.com/jiayisheji/fabricx-core/discussions) or by opening an issue with the "Feature Request" template on [GitHub Issues](https://github.com/jiayisheji/fabricx-core/issues).

Please describe in detail:

- **What problem are you trying to solve?**: What is the user scenario behind this feature?
- **What is your suggested solution?**: Describe the API or feature's behavior as clearly as possible.

### Contributing Code

We enthusiastically welcome you to contribute code directly via Pull Requests to fix bugs or implement new features.

## Development Setup

This project is a monorepo managed with pnpm and Nx.

1. **Fork & Clone**:

   ```bash
   # Fork the repository to your own GitHub account
   # Then, clone your fork to your local machine
   git clone https://github.com/YOUR_USERNAME/fabricx-core.git
   cd fabricx-core
   ```

2. **Install Dependencies**:
   We use `pnpm` as our package manager.

   ```bash
   pnpm install
   ```

3. **Run Tests**:
   Before making any changes, please ensure all tests pass.

   ```bash
   # Run all tests
   pnpm test

   # Run tests for a specific package
   pnpm exec nx test editor
   ```

4. **Start Development**:
   Create a new feature branch for your changes.

   ```bash
   git checkout -b feat/your-amazing-feature
   ```

## Git Commit Guidelines

To maintain a clear and traceable commit history, we adhere to the [**Conventional Commits**](https://www.conventionalcommits.org/) specification.

Every `git commit` message should follow this format:
`<type>(<scope>): <subject>`

- **type**: `feat` (new feature), `fix` (bug fix), `docs` (documentation), `style` (formatting), `refactor`, `test`, `chore` (build process, tooling, etc.)
- **scope** (optional): The part of the project this commit affects, e.g., `editor`, `plugins`, `di`, `docs`.
- **subject**: A short, clear description of the change.

**Examples**:

- `feat(editor): add FilterManager to apply image filters`
- `fix(plugins): resolve incorrect alignment with nested groups`
- `docs(readme): update quick start guide`
- `chore(ci): add code coverage reporting`

## Pull Request Process

1. **Ensure Tests Pass**: Before submitting a PR, make sure that `pnpm lint` and `pnpm test` both pass successfully on your local machine.

2. **(If applicable) Add a Changeset**: If your changes affect the functionality of one or more packages (`feat` or `fix`), please run `pnpm changeset` and follow the prompts to document your changes. This is crucial for our automated versioning and release process.

3. **Create the Pull Request**:

   - Push your feature branch to your fork.
   - On the FabricX Core repository page, create a new Pull Request targeting the `main` branch.
   - **Write a clear PR description**:
     - Link any relevant issues (e.g., `Closes #123`).
     - Clearly describe _what_ you changed and _why_.
     - If there are any UI changes, please include screenshots or GIFs.

4. **Code Review**: Once submitted, CI will run automatically. We will review your code as soon as possible and may suggest some changes.

5. **Merge**: Once the review is complete and CI is passing, your PR will be merged. Thank you for your contribution!
