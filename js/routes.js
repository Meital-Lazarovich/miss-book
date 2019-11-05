import bookApp from './cmps/book-app.cmp.js';
import welcomePage from './cmps/welcome-page.cmp.js';
import aboutPage from './cmps/about-page.cmp.js';
import bookDetails from './cmps/book-details.cmp.js';


const routes = [
    {
        path: '/',
        component: welcomePage
    },
    {
        path: '/book',
        component: bookApp
    },
    {
        path: '/about',
        component: aboutPage
    }, 
    {
        path: '/book/:id',
        component: bookDetails
    }
]

const router = new VueRouter({routes})

export default router;