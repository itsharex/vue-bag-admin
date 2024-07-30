const result = (data = []) => {
    return {
        code: 1,
        data,
        msg: ''
    }
}

const menus = [
    {
        id: 0,
        title: '首页',
        localesKey: 'home',
        file: '/src/app/views/home/index.vue',
        path: '/home',
        name: 'home',
        icon: 'BookOutline',
        isClose: false,
        sort:100
    },
    {
        id: 1,
        title: '用户管理',
        localesKey: 'userManagement',
        file: '/src/app/views/user/index.vue',
        path: '/user',
        name: 'user',
        icon: 'BookOutline',
        isClose: true
    },
    {
        id: 2,
        title: '项目管理',
        localesKey: 'projectManagement',
        file: '/src/app/views/pmp/index.vue',
        path: '/pmp',
        name: 'pmp',
        icon: 'BookOutline',
        isClose: true
    },
    {
        id: 3,
        title: '图标管理',
        localesKey: 'iconManagement',
        file: '/src/app/views/icon/index.vue',
        path: '/icon',
        name: 'icon',
        icon: 'BookOutline',
        isClose: true
    },
    {
        id: 4,
        title: '编辑器',
        localesKey: 'editor',
        file: '/src/app/views/editor/index.vue',
        path: '/editor',
        name: 'editor',
        icon: 'BookOutline',
        children: [
            {
                id: 5,
                title: 'MD文档',
                localesKey: 'markdown',
                file: '/src/app/views/editor/md.vue',
                path: '/md',
                name: 'md',
                isClose: true
            },
            {
                id: 6,
                title: '富文本',
                localesKey: 'richTextFormat',
                file: '/src/app/views/editor/rich.vue',
                path: '/rich',
                name: 'rich',
                isClose: true
            },
        ]
    }]


const gcjsMenus = [
    {
        id: 201,
        title: '用户管理2',
        file: '/src/app/views/user/index.vue',
        path: '/user2',
        name: 'user2',
        icon: 'BookOutline',
        isClose: true
    },
]


const baseMenus = [
    {
        id: 101,
        title: '基础功能-测试',
        file: '/src/app/views/editor/rich.vue',
        path: '/rich3',
        name: 'rich3',
        isClose: true
    },
]

export default [
    {
        url: "/api/getMenus",
        method: "post",
        response: () => {
            return result(menus)
        }
    },
    {
        url: "/api/getClassify",
        method: "post",
        response: () => {
            return result([
                {
                    id: 100,
                    title: '基础功能',
                    localesKey: 'basic',
                    file: '/src/app/views/user/index.vue',
                    path: '/user',
                    name: 'user',
                    children: baseMenus,
                },
                {
                    id: 200,
                    title: '工程建设',
                    localesKey: 'engineeringConstruction',
                    file: '/src/app/views/user/index.vue',
                    path: '/user',
                    name: 'user',
                    children: gcjsMenus,
                },
                {
                    id: 300,
                    title: '政府采购',
                    localesKey: 'governmentProcurement',
                    file: '/src/app/views/user/index.vue',
                    path: '/user',
                    name: 'user',
                    isClose: true
                },
                {
                    id: 400,
                    title: '系统设置',
                    localesKey: 'systemSettings',
                    file: '/src/app/views/user/index.vue',
                    path: '/user',
                    name: 'user',
                    isClose: true
                },
            ])
        }
    }
]