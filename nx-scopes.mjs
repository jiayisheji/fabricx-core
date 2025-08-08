import { getProjects as getNXProjects } from "nx/src/generators/utils/project-configuration.js";
import { FsTree } from "nx/src/generators/tree.js";
import { RuleConfigSeverity } from "@commitlint/types";

/**
 * get scopes from nx projects
 * @param {(params: Pick<Nx.ProjectConfiguration, 'name' | 'projectType' | 'tags'>) => boolean} selector
 */
export function getProjects(context, selector = () => true) {
    const ctx = context || {};
    const cwd = ctx.cwd || process.cwd();

    const projects = getNXProjects(new FsTree(cwd, false));
    return Array.from(projects.entries())
        .map(([name, project]) => ({
            name,
            ...project,
        }))
        .filter((project) =>
            selector({
                name: project.name,
                projectType: project.projectType,
                tags: project.tags,
            }),
        )
        .map((project) => project.name)
        .map((name) => (name.charAt(0) === "@" ? name.split("/")[1] : name))
        .filter(Boolean);
}

/**
 * global scopes
 */
const GLOBAL_SCOPES = [
    'repo',
    'deps',
];


/**
 * support commitlint rules scope-enum
 * @returns 
 */
export async function getScopeEnum(context) {
    return [
        RuleConfigSeverity.Error,
        "always",
        [
            ...GLOBAL_SCOPES,
            ...getProjects(context),
        ],
    ];
}

/**
 * support commitizen scope
 * @returns 
 */
export async function getScope() {
    return [
        ...GLOBAL_SCOPES,
        ...getProjects(),
    ];
}
