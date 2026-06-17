import { createRouter, createWebHistory } from 'vue-router';
import { seoData } from './seoData';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/HomePage.vue'),
        meta: seoData['/']
    },
    {
        path: '/products/hospital-management',
        name: 'HospitalManagement',
        component: () => import('../views/products/HospitalManagement.vue'),
        meta: seoData['/products/hospital-management']
    },
    {
        path: '/products/clinic-management',
        name: 'ClinicManagement',
        component: () => import('../views/products/ClinicManagement.vue'),
        meta: seoData['/products/clinic-management']
    },
    {
        path: '/products/radiology-management',
        name: 'RadiologyManagement',
        component: () => import('../views/products/RadiologyManagement.vue'),
        meta: seoData['/products/radiology-management']
    },
    {
        path: '/products/dental-management',
        name: 'DentalManagement',
        component: () => import('../views/products/DentalManagement.vue'),
        meta: seoData['/products/dental-management']
    },
    {
        path: '/products/laboratory-management',
        name: 'LaboratoryManagement',
        component: () => import('../views/products/LaboratoryManagement.vue'),
        meta: seoData['/products/laboratory-management']
    },
    {
        path: '/products/pharmacy-management',
        name: 'PharmacyManagementProduct',
        component: () => import('../views/products/PharmacyManagement.vue'),
        meta: seoData['/products/pharmacy-management']
    },
    {
        path: '/products/inventory-management',
        name: 'InventoryManagement',
        component: () => import('../views/products/InventoryManagement.vue'),
        meta: seoData['/products/inventory-management']
    },
    {
        path: '/products/quran-school-management',
        name: 'QuranSchoolManagement',
        component: () => import('../views/products/QuranSchoolManagement.vue'),
        meta: seoData['/products/quran-school-management']
    },
    {
        path: '/modules/patient-administration',
        name: 'PatientAdministration',
        component: () => import('../views/ModulePage.vue'),
        meta: seoData['/modules/patient-administration']
    },
    {
        path: '/modules/opd-consultations',
        name: 'OpdConsultations',
        component: () => import('../views/ModulePage.vue'),
        meta: seoData['/modules/opd-consultations']
    },
    {
        path: '/modules/laboratory-integration',
        name: 'LaboratoryIntegration',
        component: () => import('../views/ModulePage.vue'),
        meta: seoData['/modules/laboratory-integration']
    },
    {
        path: '/modules/radiology-imaging',
        name: 'RadiologyImaging',
        component: () => import('../views/ModulePage.vue'),
        meta: seoData['/modules/radiology-imaging']
    },
    {
        path: '/modules/ipd-nursing',
        name: 'IpdNursing',
        component: () => import('../views/ModulePage.vue'),
        meta: seoData['/modules/ipd-nursing']
    },
    {
        path: '/modules/pharmacy-management',
        name: 'PharmacyManagementModule',
        component: () => import('../views/ModulePage.vue'),
        meta: seoData['/modules/pharmacy-management']
    },
    {
        path: '/modules/surgery-ot',
        name: 'SurgeryOT',
        component: () => import('../views/ModulePage.vue'),
        meta: seoData['/modules/surgery-ot']
    },
    {
        path: '/modules/inventory-stock',
        name: 'InventoryStock',
        component: () => import('../views/ModulePage.vue'),
        meta: seoData['/modules/inventory-stock']
    },
    {
        path: '/modules/billing-finance',
        name: 'BillingFinance',
        component: () => import('../views/ModulePage.vue'),
        meta: seoData['/modules/billing-finance']
    },
    {
        path: '/modules/reports-analytics',
        name: 'ReportsAnalytics',
        component: () => import('../views/ModulePage.vue'),
        meta: seoData['/modules/reports-analytics']
    },
    {
        path: '/modules/emergency-triage',
        name: 'EmergencyTriage',
        component: () => import('../views/ModulePage.vue'),
        meta: seoData['/modules/emergency-triage']
    },
    {
        path: '/modules/blood-bank',
        name: 'BloodBank',
        component: () => import('../views/ModulePage.vue'),
        meta: seoData['/modules/blood-bank']
    },
    {
        path: '/modules/human-resources',
        name: 'HumanResources',
        component: () => import('../views/ModulePage.vue'),
        meta: seoData['/modules/human-resources']
    },
    {
        path: '/modules/dental-department',
        name: 'DentalDepartment',
        component: () => import('../views/ModulePage.vue'),
        meta: seoData['/modules/dental-department']
    },
    {
        path: '/modules/maternity-obstetrics',
        name: 'MaternityObstetrics',
        component: () => import('../views/ModulePage.vue'),
        meta: seoData['/modules/maternity-obstetrics']
    },
    {
        path: '/modules/mortuary-forensics',
        name: 'MortuaryForensics',
        component: () => import('../views/ModulePage.vue'),
        meta: seoData['/modules/mortuary-forensics']
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

/**
 * Updates the DOM meta tags based on the route and specified language.
 * Can be called manually when language switches.
 */
export const updateMetaTags = (route, lang) => {
    if (!route || !route.meta) return;

    const titleObj = route.meta.title;
    const descObj = route.meta.description;
    
    // Resolve localized strings
    const routeTitle = (titleObj && typeof titleObj === 'object') ? (titleObj[lang] || titleObj.EN) : (titleObj || 'SEHTECH Solutions');
    const desc = (descObj && typeof descObj === 'object') ? (descObj[lang] || descObj.EN) : (descObj || 'SEHTECH Solutions provides enterprise offline-first Hospital Management Systems for healthcare facilities in Somalia.');
    
    const title = `${routeTitle} | SEHTECH Solutions`;
    const imagePath = route.meta.previewImage || '/preview-images/preview-home.png';
    const origin = window.location.origin;
    const image = `${origin}${imagePath}`;
    const url = window.location.href;

    document.title = title;

    const updateOrCreateMeta = (selector, content) => {
        let el = document.querySelector(selector);
        if (!el) {
            el = document.createElement('meta');
            const attr = selector.includes('property') ? 'property' : 'name';
            const value = selector.match(/"([^"]+)"/)[1];
            el.setAttribute(attr, value);
            document.head.appendChild(el);
        }
        el.setAttribute('content', content);
    };

    updateOrCreateMeta('meta[name="description"]', desc);

    // Open Graph
    updateOrCreateMeta('meta[property="og:title"]', title);
    updateOrCreateMeta('meta[property="og:description"]', desc);
    updateOrCreateMeta('meta[property="og:image"]', image);
    updateOrCreateMeta('meta[property="og:url"]', url);
    updateOrCreateMeta('meta[property="og:type"]', 'website');

    // Twitter
    updateOrCreateMeta('meta[name="twitter:card"]', 'summary_large_image');
    updateOrCreateMeta('meta[name="twitter:title"]', title);
    updateOrCreateMeta('meta[name="twitter:description"]', desc);
    updateOrCreateMeta('meta[name="twitter:image"]', image);
};

// Update page title and meta tags on route change
router.afterEach((to) => {
    const queryLang = to.query.lang;
    const storedLang = localStorage.getItem('sehtech_lang') || 'EN';
    const langToUse = ['EN', 'AR', 'SO'].includes(queryLang) ? queryLang : storedLang;
    updateMetaTags(to, langToUse);
});

export default router;
