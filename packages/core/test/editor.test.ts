import { describe, it, expect } from 'vitest';

// 这是一个非常简单的测试套件，用于初始的 CI 验证
describe('Initial Setup Verification', () => {
  /**
   * 测试用例 1: 验证基本的测试环境是否工作正常
   */
  it('should pass a basic truthiness test', () => {
    // 这个测试总是会通过，它的目的是确保 vitest 能够找到并运行一个测试文件
    expect(true).toBe(true);
  });

  /**
   * 测试用例 2: 验证全局常量 __DEV__ 是否被正确注入
   * 这依赖于 vitest.config.ts 中的 `define: { __DEV__: true }` 配置
   */
  it('should have __DEV__ global constant defined as true in test environment', () => {
    // 如果 __DEV__ 没有被定义，这个测试会因为 "ReferenceError: __DEV__ is not defined" 而失败
    // 如果 __DEV__ 被定义为 false，这个测试会因为断言失败而失败
    expect(__DEV__).toBe(true);
  });
});
