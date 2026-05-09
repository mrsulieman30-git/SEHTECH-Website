import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/HomePage.vue')
    },
    {
        path: '/products/hospital-management',
        name: 'HospitalManagement',
        component: () => import('../views/products/HospitalManagement.vue'),
        meta: { title: 'Hospital Management System' }
    },
    {
        path: '/products/clinic-management',
        name: 'ClinicManagement',
        component: () => import('../views/products/ClinicManagement.vue'),
        meta: { title: 'Clinic Management System' }
    },
    {
        path: '/products/radiology-management',
        name: 'RadiologyManagement',
        component: () => import('../views/products/RadiologyManagement.vue'),
        meta: { title: 'Radiology Management System' }
    },
    {
        path: '/products/dental-management',
        name: 'DentalManagement',
        component: () => import('../views/products/DentalManagement.vue'),
        meta: { title: 'Dental Clinic Management System' }
    },
    {
        path: '/products/laboratory-management',
        name: 'LaboratoryManagement',
        component: () => import('../views/products/LaboratoryManagement.vue'),
        meta: { title: 'Laboratory Management System' }
    },
    {
        path: '/products/pharmacy-management',
        name: 'PharmacyManagement',
        component: () => import('../views/products/PharmacyManagement.vue'),
        meta: { title: 'Pharmacy Management System' }
    },
    {
        path: '/products/inventory-management',
        name: 'InventoryManagement',
        component: () => import('../views/products/InventoryManagement.vue'),
        meta: { title: 'Inventory Management System' }
    },
    {
        path: '/products/quran-school-management',
        name: 'QuranSchoolManagement',
        component: () => import('../views/products/QuranSchoolManagement.vue'),
        meta: { title: 'Quran School Management System' }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) return savedPosition;
        if (to.hash && to.hash.startsWith('#') && !to.hash.includes('/')) {
            return { el: to.hash, behavior: 'smooth' };
        }
        return { top: 0, behavior: 'smooth' };
    }
});

// Update page title on route change
router.afterEach((to) => {
    document.title = to.meta.title 
        ? `${to.meta.title} | SEHTECH Solutions` 
        : 'SEHTECH Solutions — Enterprise Healthcare IT';
});

export default router;
