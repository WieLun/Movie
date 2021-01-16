import Vue from "vue";
import VueRouter from "vue-router";

const Container = () => import("components/content/container/Container");
const Login = () => import("views/admin/login/Login");
const Home = () => import("views/admin/home/Home");
const TagAdd = () => import("views/admin/tag/TagAdd");
const TagList = () => import("views/admin/tag/TagList");
const MovieAdd = () => import("views/admin/movie/MovieAdd");
const MovieList = () => import("views/admin/movie/MovieList");
const PreviewAdd = () => import("views/admin/preview/PreviewAdd");
const PreviewList = () => import("views/admin/preview/PreviewList");
const UserList = () => import("views/admin/user/UserList");
const CommentList = () => import("views/admin/comment/CommentList");
const CollectList = () => import("views/admin/collect/CollectList");
const OperateList = () => import("views/admin/log/Operate");
const AdminLoginList = () => import("views/admin/log/AdminLogin");
const UserLoginList = () => import("views/admin/log/UserLogin");
const AuthAdd = () => import("views/admin/auth/AuthAdd");
const AuthList = () => import("views/admin/auth/AuthList");
const RoleAdd = () => import("views/admin/role/RoleAdd");
const RoleList = () => import("views/admin/role/RoleList");
const AdminAdd = () => import("views/admin/admin/AdminAdd");
const AdminList = () => import("views/admin/admin/AdminList");



Vue.use(VueRouter);

const routes = [
  {
    path: "/admin/login",
    name: "Login",
    component: Login,
    hidden: true
  },
  {
    path: '/admin',
    component: Container,
    children: [
      {
        path: '', 
        name: 'home', 
        component: Home, 
        meta: { title: '首页', icon: 'home' },
      },
    ]
  },
  {
    path: '/admin/tag',
    redirect: '/admin/tag/add',
    name: 'Tag',
    component: Container,
    meta: { title: '标签管理', icon: 'tag' },
    children: [
      {
        path: 'add', 
        name: 'TagAdd', 
        component: TagAdd, 
        meta: { title: '添加标签', icon: 'item' },
      },
      {
        path: 'list', 
        name: 'TagList', 
        component: TagList, 
        meta: { title: '标签列表', icon: 'item' },
      },
    ]
  },
  {
    path: '/admin/moive',
    redirect: '/admin/movie/add',
    name: 'Movie',
    component: Container,
    meta: { title: '电影管理', icon: 'movie' },
    children: [
      {
        path: 'add', 
        name: 'MovieAdd', 
        component: MovieAdd, 
        meta: { title: '添加电影', icon: 'item' },
      },
      {
        path: 'list', 
        name: 'MovieList', 
        component: MovieList, 
        meta: { title: '电影列表', icon: 'item' },
      },
    ]
  },
  {
    path: '/admin/preview',
    redirect: '/admin/preview/add',
    name: 'Preview',
    component: Container,
    meta: { title: '预告管理', icon: 'preview' },
    children: [
      {
        path: 'add', 
        name: 'PreviewAdd', 
        component: PreviewAdd, 
        meta: { title: '添加预告', icon: 'item' },
      },
      {
        path: 'list', 
        name: 'PreviewList', 
        component: PreviewList, 
        meta: { title: '预告列表', icon: 'item' },
      },
    ]
  },
  {
    path: '/admin/user',
    component: Container,
    children: [
      {
        path: 'list', 
        name: 'UserList', 
        component: UserList, 
        meta: { title: '会员管理', icon: 'users' },
      },
    ]
  },
  {
    path: '/admin/comment',
    component: Container,
    children: [
      {
        path: 'list', 
        name: 'CommentList', 
        component: CommentList, 
        meta: { title: '评论管理', icon: 'comment' },
      },
    ]
  },
  {
    path: '/admin/collect',
    component: Container,
    children: [
      {
        path: 'list', 
        name: 'CollectList', 
        component: CollectList, 
        meta: { title: '收藏管理', icon: 'collect' },
      },
    ]
  },
  {
    path: '/admin/log',
    redirect: '/admin/log/oplist',
    name: 'Log',
    component: Container,
    meta: { title: '日志管理', icon: 'log' },
    children: [
      {
        path: 'oplist', 
        name: 'OperateList', 
        component: OperateList, 
        meta: { title: '操作日志列表', icon: 'item' },
      },
      {
        path: 'adminlogin', 
        name: 'AdminLoginList', 
        component: AdminLoginList, 
        meta: { title: '管理员登陆日志列表', icon: 'item' },
      },
      {
        path: 'userlogin', 
        name: 'UserLoginList', 
        component: UserLoginList, 
        meta: { title: '会员登陆日志列表', icon: 'item' },
      },
    ]
  },
  {
    path: '/admin/auth',
    redirect: '/admin/auth/add',
    name: 'Auth',
    component: Container,
    meta: { title: '权限管理', icon: 'auth' },
    children: [
      {
        path: 'add', 
        name: 'AuthAdd', 
        component: AuthAdd, 
        meta: { title: '添加权限', icon: 'item' },
      },
      {
        path: 'list', 
        name: 'AuthList', 
        component: AuthList, 
        meta: { title: '权限列表', icon: 'item' },
      },
    ]
  },
  {
    path: '/admin/role',
    redirect: '/admin/role/add',
    name: 'Role',
    component: Container,
    meta: { title: '角色管理', icon: 'role' },
    children: [
      {
        path: 'add', 
        name: 'RoleAdd', 
        component: RoleAdd, 
        meta: { title: '添加角色', icon: 'item' },
      },
      {
        path: 'list', 
        name: 'RoleList', 
        component: RoleList, 
        meta: { title: '角色列表', icon: 'item' },
      },
    ]
  },
  {
    path: '/admin/admin',
    redirect: '/admin/admin/add',
    name: 'Admin',
    component: Container,
    meta: { title: '管理员管理', icon: 'admin' },
    children: [
      {
        path: 'add', 
        name: 'AdminAdd', 
        component: AdminAdd, 
        meta: { title: '添加角色', icon: 'item' },
      },
      {
        path: 'list', 
        name: 'AdminList', 
        component: AdminList, 
        meta: { title: '管理员列表', icon: 'item' },
      },
    ]
  },
];

export const router = new VueRouter({
  base: "/",
  mode: "history",
  routes,
});
