'use strict';


export default {
    name: 'app-header',
    template: `
        <section class="app-header-container flex space-between align-center">
            <h1>Miss Book</h1>
            <nav>
                <router-link exact to="/">Home</router-link>
                <router-link exact to="/book">Books</router-link>
                <router-link exact to="/about">About</router-link>
            </nav>
        </section>
    `
}


