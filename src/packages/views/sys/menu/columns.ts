const columns = [
    {
        title: '名称',
        dataIndex: 'name',
        key: 'name',
        align: 'center',
        ellipsis: true,
        width: 150,
    },
    {
        title: '图标',
        dataIndex: 'icon',
        key: 'icon',
        width: 80,
        align: 'center',
        ellipsis: true,
        slots: { customRender: 'icon' },
    },
    {
        title: '节点类型',
        dataIndex: 'type',
        key: 'type',
        ellipsis: true,
        align: 'center',
        width: 80,
        slots: { customRender: 'type' },
    },
    {
        title: '路由地址',
        dataIndex: 'path',
        key: 'path',
        ellipsis: true,
        align: 'center',
    },
    {
        title: '文件路径',
        dataIndex: 'filePath',
        key: 'filePath',
        ellipsis: true,
        align: 'center',
    },
    // {
    //     title: 'iframe',
    //     dataIndex: 'iframePath',
    //     key: 'iframePath',
    //     ellipsis: true,
    //     align: 'center',
    // },
    // {
    //     title: '外链',
    //     dataIndex: 'httpViewPath',
    //     key: 'httpViewPath',
    //     ellipsis: true,
    //     align: 'center',
    // },
    {
        title: '路由缓存',
        dataIndex: 'keepAlive',
        key: 'keepAlive',
        align: 'center',
        ellipsis: true,
        width: 90,
        customRender: (item: any) => {
            return item.text ? '是' : '否'
        },
    },
    {
        title: '是否隐藏Tab切换',
        dataIndex: 'tabHidden',
        key: 'tabHidden',
        align: 'center',
        ellipsis: true,
        width: 200,
        customRender: (item: any) => {
            return item.text ? '是' : '否'
        },
    },
    {
        title: '固定菜单',
        dataIndex: 'tabFix',
        key: 'tabFix',
        align: 'center',
        ellipsis: true,
        width: 90,
        customRender: (item: any) => {
            return item.text ? '是' : '否'
        },
    },
    {
        title: '是否显示',
        dataIndex: 'shows',
        key: 'shows',
        align: 'center',
        width: 90,
        customRender: (item: any) => {
            return item.text ? '是' : '否'
        },
    },
    {
        title: '排序',
        dataIndex: 'order',
        key: 'order',
        align: 'center',
        width: 90,
    },
    {
        title: '更新时间',
        dataIndex: 'updateTime',
        key: 'updateTime',
        align: 'center',
        ellipsis: true,
        width: 200,
    },
    {
        title: '操作',
        key: 'action',
        align: 'center',
        width: 200,
        slots: { customRender: 'action' },
    },
]

export default columns
