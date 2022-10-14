import Contact from '~/pages/Contact';
import Home from '~/pages/Home';
import View from '~/pages/View';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/view', component: View },
    { path: '/contact', component: Contact, layout: null },
];

export { publicRoutes };
