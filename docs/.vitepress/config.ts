import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "FabricX Core",
    description: "The Application Framework for Complex, Creative Web Editors.",

    // The base path for the deployed site.
    // e.g., if you plan to deploy to https://<USERNAME>.github.io/<REPO>/
    // base should be set to '/<REPO>/'
    base: process.env.VITEPRESS_BASE || '/',
    // https://vitepress.dev/guide/i18n
    locales: {
        root: {
            label: '中文',
            lang: 'zh',
            // https://vitepress.dev/reference/default-theme-config
            themeConfig: {
                nav: [
                    { text: '指南', link: '/guide/what-is-fabricx-core', activeMatch: '/guide/' },
                    { text: '概念', link: '/concepts/architecture', activeMatch: '/concepts/' },
                ],

                sidebar: {
                    '/guide/': [
                        {
                            text: '指南',
                            items: [
                                { text: '什么是 FabricX Core?', link: '/guide/what-is-fabricx-core' },
                            ]
                        }
                    ],
                    '/concepts/': [
                        {
                            text: '核心概念',
                            items: [
                                { text: '架构设计', link: '/concepts/architecture' },
                            ],
                        },
                    ]
                },

                footer: {
                    message: 'Released under the MIT License.',
                    copyright: 'Copyright © 2025 jiayi'
                }
            }
        }
    },

    // Theme related configuration
    themeConfig: {
        socialLinks: [
            { icon: 'github', link: 'https://github.com/jiayisheji/fabricx-core' }
        ]
    }
});