export default [
    {
        path: '/SystemManagement/RoleManagementList',
        name: 'SystemManagement-RoleManagementList',
        component: () => import('@/views/system-management/RoleManagementList.vue'),
        meta: {
            pageTitle: 'menus.roleManagement',
            breadcrumb: [
                { text: 'menus.systemManagement' },
                { text: 'menus.roleManagement', active: true },
            ],
        },
    },
    // {
    //     path: '/SystemManagement/RoleManagementCreate',
    //     name: 'SystemManagement-RoleManagementCreate',
    //     component: () => import('@/views/system-management/RoleManagementCrud.vue'),
    //     meta: {
    //         pageTitle: 'Role Management',
    //         navActiveLink: 'SystemManagement-RoleManagementList',
    //         breadcrumb: [
    //             { text: 'SYSTEM MANAGEMENT' },
    //             { text: 'Role Management', to: { name: 'SystemManagement-RoleManagementList' } },
    //             { text: 'create', active: true },
    //         ],
    //     },
    // },
    // {
    //     path: '/SystemManagement/RoleManagementEdit',
    //     name: 'SystemManagement-RoleManagementEdit',
    //     component: () => import('@/views/system-management/RoleManagementCrud.vue'),
    //     meta: {
    //         pageTitle: 'Role Management',
    //         navActiveLink: 'SystemManagement-RoleManagementList',
    //         breadcrumb: [
    //             { text: 'SYSTEM MANAGEMENT' },
    //             { text: 'Role Management', to: { name: 'SystemManagement-RoleManagementList' } },
    //             { text: 'edit', active: true },
    //         ],
    //     },
    // }
]
