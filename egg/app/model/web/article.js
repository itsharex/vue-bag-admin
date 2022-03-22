const dayjs = require('dayjs')
module.exports = app => {
    const { STRING, INTEGER, BOOLEAN, DATE, TEXT } = app.Sequelize
    return app.model.define('Article', {
        id: {
            type: INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        user_id: {
            type: INTEGER,
            comment: '用户id',
        },
        channel_id: {
            type: INTEGER,
            comment: '栏目id',
        },
        image: {
            type: STRING,
            comment: '缩略图',
        },
        images: {
            type: STRING,
            comment: '组图',
        },
        content: {
            type: TEXT('long'),
            comment: '内容',
        },
        skip_url: {
            type: STRING,
            comment: '跳转链接-当需要外部跳转链接时',
        },
        description: {
            type: STRING,
            comment: '描述',
        },
        views: {
            type: INTEGER,
            comment: '浏览次数',
        },
        likes: {
            type: INTEGER,
            comment: '点赞次数',
        },
        is_guest: {
            type: INTEGER,
            comment: '是否游客访问',
        },
        is_comment: {
            type: INTEGER,
            comment: '是否开启评论',
        },
        flag: {
            type: STRING,
            comment: '置顶，最新，推荐，热门',
        },
        dislikes: {
            type: INTEGER,
            comment: '点踩',
        },
        tags: {
            type: STRING,
            comment: '标签',
        },
        title: {
            type: STRING,
            comment: '标题',
        },
        title_style: {
            type: STRING,
            comment: 'title样式',
        },
        createTime: {
            type: DATE,
            comment: '创建时间',
            get() {
                return dayjs(this.getDataValue('createTime')).format('YYYY/MM/DD HH:mm:ss')
            },
        },
        updateTime: {
            type: DATE,
            comment: '更新时间',
            get() {
                return dayjs(this.getDataValue('updateTime')).format('YYYY/MM/DD HH:mm:ss')
            },
        },
    }, {
        createdAt: 'createTime', // 指定名字
        updatedAt: 'updateTime',
        tableName: 'yxs_web_article', // 定义实际表名 文章表
    })
}
