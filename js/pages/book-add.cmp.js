'use strict';

import {bookService} from '../services/book.service.js'

export default {
    name: 'book-add',
    template: `
    <section class="book-add-container flex column align-center justify-center">
        <h2>Search a book to add</h2>
        <form @submit.prevent="searchBook">
            <input type="search" v-model="searched"/>
            <button>Search</button>
        </form>
        <div  v-if="!!results && results.length > 0">
            <div v-for="result in results">
                <h6>{{result.volumeInfo.title}}</h6>
                <img v-if="result.volumeInfo.imageLinks" :src="result.volumeInfo.imageLinks.thumbnail"/>
                <img v-else src="https://onlinebookclub.org/book-covers/no-cover.jpg"/>
            </div>
        </div>
    </section>
    `,
    data() {
        return {
            searched: null,
            results: []
        }
    },
    methods: {
        searchBook() {
            bookService.getSearchedBooks(this.searched)
                .then(books => this.results = books)
        }
    }
}


