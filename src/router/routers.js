import Main from '@/components/main';
import parentView from '@/components/parent-view';

/**
 * Configurable parameters in meta in Adnx Travel Cms besides native parameters:
 * meta: {
 * title: { String|Number|Function }
 * Text displayed in sidebars, breadcrumbs and tabs
 * Use the form of '{{ multilingual field }}' to combine multilingual use, see multilingual routing configuration for examples;
 * A callback function can be passed in, and the parameter is the current routing object. For examples, see dynamic routing and routing with parameters
 * hideInBread: (false) After setting to true, this level of routing will not appear in the breadcrumbs, for an example see QQ group routing configuration
 * hideInMenu: (false) After setting to true, the page options will not be displayed on the left menu
 * notCache: (false) After setting to true, the page will not be cached after switching labels. If caching is required, this field does not need to be set, and the name attribute of the page component needs to be set to be consistent with the name of the routing configuration
 * access: (null) An array of permissions that can access this page, permissions set by the current route will affect sub-routes
 * icon: (-) The icon displayed on the left menu, breadcrumbs and tab navigation of this page, if it is a custom icon, you need to add an underscore '_' before the icon name
 * beforeCloseName: (-) If this field is set, when closing the current tab page, it will go to '@/router/before-close.js' to find the method corresponding to the field name, as the hook function before closing
 * }
 */

export default [
	{
		path: '/login',
		name: 'login',
		meta: {
			title: 'Login - 登录',
			hideInMenu: true,
		},
		component: () => import('@/view/login/login.vue'),
	},
	{
		path: '/',
		name: '_home',
		redirect: '/home',
		component: Main,
		meta: {
			hideInMenu: true,
			notCache: true,
		},
		children: [
			{
				path: '/home',
				name: 'home',
				meta: {
					hideInMenu: true,
					title: '首页',
					notCache: true,
					icon: 'md-home',
				},
				component: () => import('@/view/single-page/home'),
			},
		],
	},
	{
		path: '/message',
		name: 'message',
		component: Main,
		meta: {
			hideInBread: true,
			hideInMenu: true,
		},
		children: [
			{
				path: 'message_page',
				name: 'message_page',
				meta: {
					icon: 'md-notifications',
					title: '消息中心',
				},
				component: () => import('@/view/single-page/message/index.vue'),
			},
		],
	},
	{
		path: '/components',
		name: 'components',
		meta: {
			icon: 'logo-buffer',
			title: '组件',
		},
		component: Main,
		children: [
			{
				path: 'tree_select_page',
				name: 'tree_select_page',
				meta: {
					icon: 'md-arrow-dropdown-circle',
					title: '树状下拉选择器',
				},
				component: () => import('@/view/components/tree-select/index.vue'),
			},
			{
				path: 'count_to_page',
				name: 'count_to_page',
				meta: {
					icon: 'md-trending-up',
					title: '数字渐变',
				},
				component: () => import('@/view/components/count-to/count-to.vue'),
			},
			{
				path: 'drag_list_page',
				name: 'drag_list_page',
				meta: {
					icon: 'ios-infinite',
					title: '拖拽列表',
				},
				component: () => import('@/view/components/drag-list/drag-list.vue'),
			},
			{
				path: 'drag_drawer_page',
				name: 'drag_drawer_page',
				meta: {
					icon: 'md-list',
					title: '可拖拽抽屉',
				},
				component: () => import('@/view/components/drag-drawer'),
			},
			{
				path: 'org_tree_page',
				name: 'org_tree_page',
				meta: {
					icon: 'ios-people',
					title: '组织结构树',
				},
				component: () => import('@/view/components/org-tree'),
			},
			{
				path: 'tree_table_page',
				name: 'tree_table_page',
				meta: {
					icon: 'md-git-branch',
					title: '树状表格',
				},
				component: () => import('@/view/components/tree-table/index.vue'),
			},
			{
				path: 'cropper_page',
				name: 'cropper_page',
				meta: {
					icon: 'md-crop',
					title: '图片裁剪',
				},
				component: () => import('@/view/components/cropper/cropper.vue'),
			},
			{
				path: 'tables_page',
				name: 'tables_page',
				meta: {
					icon: 'md-grid',
					title: '多功能表格',
				},
				component: () => import('@/view/components/tables/tables.vue'),
			},
			{
				path: 'split_pane_page',
				name: 'split_pane_page',
				meta: {
					icon: 'md-pause',
					title: '分割窗口',
				},
				component: () => import('@/view/components/split-pane/split-pane.vue'),
			},
			{
				path: 'markdown_page',
				name: 'markdown_page',
				meta: {
					icon: 'logo-markdown',
					title: 'Markdown编辑器',
				},
				component: () => import('@/view/components/markdown/markdown.vue'),
			},
			{
				path: 'editor_page',
				name: 'editor_page',
				meta: {
					icon: 'ios-create',
					title: '富文本编辑器',
				},
				component: () => import('@/view/components/editor/editor.vue'),
			},
			{
				path: 'icons_page',
				name: 'icons_page',
				meta: {
					icon: '_bear',
					title: '自定义图标',
				},
				component: () => import('@/view/components/icons/icons.vue'),
			},
		],
	},
	{
		path: '/update',
		name: 'update',
		meta: {
			icon: 'md-cloud-upload',
			title: '数据上传',
		},
		component: Main,
		children: [
			{
				path: 'update_table_page',
				name: 'update_table_page',
				meta: {
					icon: 'ios-document',
					title: '上传Csv',
				},
				component: () => import('@/view/update/update-table.vue'),
			},
			{
				path: 'update_paste_page',
				name: 'update_paste_page',
				meta: {
					icon: 'md-clipboard',
					title: '粘贴表格数据',
				},
				component: () => import('@/view/update/update-paste.vue'),
			},
		],
	},
	{
		path: '/excel',
		name: 'excel',
		meta: {
			icon: 'ios-stats',
			title: 'EXCEL导入导出',
		},
		component: Main,
		children: [
			{
				path: 'upload-excel',
				name: 'upload-excel',
				meta: {
					icon: 'md-add',
					title: '导入EXCEL',
				},
				component: () => import('@/view/excel/upload-excel.vue'),
			},
			{
				path: 'export-excel',
				name: 'export-excel',
				meta: {
					icon: 'md-download',
					title: '导出EXCEL',
				},
				component: () => import('@/view/excel/export-excel.vue'),
			},
		],
	},
	{
		path: '/tools_methods',
		name: 'tools_methods',
		meta: {
			hideInBread: true,
		},
		component: Main,
		children: [
			{
				path: 'tools_methods_page',
				name: 'tools_methods_page',
				meta: {
					icon: 'ios-hammer',
					title: '工具方法',
					beforeCloseName: 'before_close_normal',
				},
				component: () => import('@/view/tools-methods/tools-methods.vue'),
			},
		],
	},
	{
		path: '/i18n',
		name: 'i18n',
		meta: {
			hideInBread: true,
		},
		component: Main,
		children: [
			{
				path: 'i18n_page',
				name: 'i18n_page',
				meta: {
					icon: 'md-planet',
					title: 'i18n - {{ i18n_page }}',
				},
				component: () => import('@/view/i18n/i18n-page.vue'),
			},
		],
	},
	{
		path: '/error_store',
		name: 'error_store',
		meta: {
			hideInBread: true,
		},
		component: Main,
		children: [
			{
				path: 'error_store_page',
				name: 'error_store_page',
				meta: {
					icon: 'ios-bug',
					title: '错误收集',
				},
				component: () => import('@/view/error-store/error-store.vue'),
			},
		],
	},
	{
		path: '/error_logger',
		name: 'error_logger',
		meta: {
			hideInBread: true,
			hideInMenu: true,
		},
		component: Main,
		children: [
			{
				path: 'error_logger_page',
				name: 'error_logger_page',
				meta: {
					icon: 'ios-bug',
					title: '错误收集',
				},
				component: () => import('@/view/single-page/error-logger.vue'),
			},
		],
	},
	{
		path: '/directive',
		name: 'directive',
		meta: {
			hideInBread: true,
		},
		component: Main,
		children: [
			{
				path: 'directive_page',
				name: 'directive_page',
				meta: {
					icon: 'ios-navigate',
					title: '指令',
				},
				component: () => import('@/view/directive/directive.vue'),
			},
		],
	},
	{
		path: '/multilevel',
		name: 'multilevel',
		meta: {
			icon: 'md-menu',
			title: '多级菜单',
		},
		component: Main,
		children: [
			{
				path: 'level_2_1',
				name: 'level_2_1',
				meta: {
					icon: 'md-funnel',
					title: '二级-1',
				},
				component: () => import('@/view/multilevel/level-2-1.vue'),
			},
			{
				path: 'level_2_2',
				name: 'level_2_2',
				meta: {
					access: ['super_admin'],
					icon: 'md-funnel',
					showAlways: true,
					title: '二级-2',
				},
				component: parentView,
				children: [
					{
						path: 'level_2_2_1',
						name: 'level_2_2_1',
						meta: {
							icon: 'md-funnel',
							title: '三级',
						},
						component: () =>
							import('@/view/multilevel/level-2-2/level-2-2-1.vue'),
					},
					{
						path: 'level_2_2_2',
						name: 'level_2_2_2',
						meta: {
							icon: 'md-funnel',
							title: '三级',
						},
						component: () =>
							import('@/view/multilevel/level-2-2/level-2-2-2.vue'),
					},
				],
			},
			{
				path: 'level_2_3',
				name: 'level_2_3',
				meta: {
					icon: 'md-funnel',
					title: '二级-3',
				},
				component: () => import('@/view/multilevel/level-2-3.vue'),
			},
		],
	},
	{
		path: '/argu',
		name: 'argu',
		meta: {
			hideInMenu: true,
		},
		component: Main,
		children: [
			{
				path: 'params/:id',
				name: 'params',
				meta: {
					icon: 'md-flower',
					title: (route) => `{{ params }}-${route.params.id}`,
					notCache: true,
					beforeCloseName: 'before_close_normal',
				},
				component: () => import('@/view/argu-page/params.vue'),
			},
			{
				path: 'query',
				name: 'query',
				meta: {
					icon: 'md-flower',
					title: (route) => `{{ query }}-${route.query.id}`,
					notCache: true,
				},
				component: () => import('@/view/argu-page/query.vue'),
			},
		],
	},
	{
		path: '/401',
		name: 'error_401',
		meta: {
			hideInMenu: true,
		},
		component: () => import('@/view/error-page/401.vue'),
	},
	{
		path: '/500',
		name: 'error_500',
		meta: {
			hideInMenu: true,
		},
		component: () => import('@/view/error-page/500.vue'),
	},
	{
		path: '*',
		name: 'error_404',
		meta: {
			hideInMenu: true,
		},
		component: () => import('@/view/error-page/404.vue'),
	},
];
