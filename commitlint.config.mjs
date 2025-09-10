import { RuleConfigSeverity } from "@commitlint/types";
import { getScopeEnum } from './nx-scopes.mjs';

export default {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'scope-enum': getScopeEnum,
        'header-max-length': [RuleConfigSeverity.Error, 'always', 100],
        'type-case': [RuleConfigSeverity.Error, 'always', 'lower-case'],
        'subject-case': [RuleConfigSeverity.Error, 'always', 'lower-case'],
        'scope-empty': [RuleConfigSeverity.Warning, 'never'],
    },
    ignores: [
        commit => commit.startsWith('chore(release):')
    ],
};