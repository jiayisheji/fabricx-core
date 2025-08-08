import inquirer from 'inquirer';
import inquirerPrompt from 'inquirer-autocomplete-prompt';

import { getScope } from './nx-scopes.mjs';

inquirer.registerPrompt('autocomplete', inquirerPrompt);

export default {
  // 使用 prompter 函数完全自定义交互流程
  prompter: async (cz, commit) => {
    const scopes = await getScope();

    inquirer.prompt([
      {
        name: 'type',
        type: 'list',
        message: '请选择提交类型:',
        choices: [
          { value: 'feat', name: 'feat:     ✨  新功能' },
          { value: 'fix', name: 'fix:      🐛  修复 bug' },
          { value: 'docs', name: 'docs:     📝  文档变更' },
          { value: 'style', name: 'style:    💄  代码格式（不影响功能）' },
          { value: 'refactor', name: 'refactor: ♻️   代码重构' },
          { value: 'perf', name: 'perf:     ⚡️  性能优化' },
          { value: 'test', name: 'test:     ✅  测试相关' },
          { value: 'build', name: 'build:    📦️  构建系统或外部依赖项的更改' },
          { value: 'ci', name: 'ci:       🎡  CI/CD 配置和脚本' },
          { value: 'chore', name: 'chore:    🔨  其他不修改 src 或测试文件的更改' },
          { value: 'revert', name: 'revert:   ⏪️  回退' },
        ],
      },
      {
        name: 'scope',
        type: 'autocomplete',
        message: '请输入修改范围（可选）:',
        suggestOnly: true, // 允许输入非列表项
        validate: input => {
          const userInput = input ? input.trim() : '';
          // 允许直接回车或输入空格跳过
          return userInput === '' || scopes.includes(userInput)
            ? true
            : `无效范围，可选值: ${scopes.join(', ')}`;
        },
        source: (answers, input) => {
          const userInput = input ? input.trim() : '';

          // 处理空格/跳过
          if (userInput === '') {
            // 添加一个特殊的忽略选项
            return Promise.resolve([{
              name: '← 忽略范围（无 scope）',
              value: '',
              short: '无范围'
            }]);
          }

          // 匹配 scopes
          const filteredScopes = scopes.filter(s =>
            s.toLowerCase().includes(userInput.toLowerCase())
          );

          // 添加用户输入的新 scope（可选）
          if (userInput && !filteredScopes.includes(userInput)) {
            filteredScopes.push({
              name: `创建新范围: "${userInput}"`,
              value: userInput
            });
          }

          return Promise.resolve(filteredScopes);
        },
      },
      {
        name: 'subject',
        type: 'input',
        message: '请输入提交描述（必填）:',
        validate: input => (input ? true : '提交描述不能为空'),
      },
      {
        name: 'body',
        type: 'input',
        message: '请输入详细描述（可选）:',
      },
      {
        name: 'isBreaking',
        type: 'confirm',
        message: '是否存在不兼容变更?',
        default: false,
      },
      {
        name: 'breakingBody',
        type: 'input',
        message: '请输入不兼容变更描述:',
        when: answers => answers.isBreaking,
      },
      {
        name: 'issues',
        type: 'input',
        message: '关联的 issue（可选），例如: #31, #34:',
      },
    ]).then(answers => {
      const message = formatCommitMessage(answers);
      commit(message);
    });
  },
};

function formatCommitMessage(answers) {
  const { type, scope, subject, body, isBreaking, breakingBody, issues } = answers;
  let message = `${type}`;

  if (scope) {
    message += `(${scope})`;
  }

  message += `: ${subject}`;

  if (body) {
    message += `

${body}`;
  }
  if (isBreaking) {
    message += `

BREAKING CHANGE: ${breakingBody}`;
  }
  if (issues) {
    message += `

Closes ${issues}`;
  }

  return message;
}