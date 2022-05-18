module.exports = {
    title: '公用组件文档',
    base: '/shsncCom/',
    themeConfig: {
        nav: [
            {
                text: 'Home',
                link: '/',
            },
            {
                //发布在github上的地址
                text: 'Github',
                link: 'https://www.baidu.com',
            },
            {
                //发布在npm的地址
                text: 'Npm',
                link: 'https://www.baidu.com/s?ie=UTF-8&wd=npm',
            },
        ],
        sidebar: [
            '/',
            {
                title: '指南', // 必要的
                path: '/componentsDocs/introduce', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 是否折叠 默认true折叠
                sidebarDepth: 1, // 可选的, 默认值是 1
                children: [
                    '/componentsDocs/introduce',
                    '/componentsDocs/chartProp',
                    '/componentsDocs/event',
                    '/componentsDocs/clolor',
                    '/componentsDocs/globalConfig',
                ],
            },
            {
                title: '图表组件', // 必要的
                path: '/componentsDocs/chart', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 是否折叠 默认true折叠
                sidebarDepth: 1, // 可选的, 默认值是 1
                children: ['/componentsDocs/chart', '/componentsDocs/bar', '/componentsDocs/line', '/componentsDocs/pie'],
            },
            {
                title: '业务组件',
                path: '/componentsDocs/table',
                collapsable: false,
                sidebarDepth: 1,
                children: ['/componentsDocs/table', '/componentsDocs/input'],
            },
        ],
    },
}
