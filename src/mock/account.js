
import Mock from 'mockjs-async'

Mock.mock(/api\/login/, 'post', () => ({
  token: 'ac21ebab-bddc-41a3-bef5-4ecf3325c888',
  permissions: [],
  menus: [
    {
      text: '首页',
      icon: 'home',
      hidden: false,
      to: '/home',
      permissions: [],
      type: 'VIEW',
      resource: 'home/index',
    },
    {
      text: '项目管理',
      icon: 'apps',
      hidden: false,
      to: '/project',
      permissions: [],
      type: 'MENU',
      resource: '',
      children: [
        {
          text: '项目列表',
          hidden: false,
          to: '/project/list',
          permissions: [],
          type: 'VIEW',
          resource: 'project/index',
        },
      ],
    },
    {
      text: '腾讯地图',
      icon: 'place',
      hidden: false,
      to: '/map',
      permissions: [],
      type: 'VIEW',
      resource: 'map/index',
    },
    {
      text: '404',
      icon: 'priority_high',
      hidden: false,
      to: '404_test',
      redirect: '/exception/404',
      permissions: [],
      type: 'VIEW',
      resource: '',
    },
  ],
}))
