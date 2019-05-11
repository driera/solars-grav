
// Include polyfill for Vue (IE)
import "babel-polyfill";

import Vue from 'vue';

const app = new Vue({
    el: '#app',

    delimiters: ['${', '}'],

    data: {
        isNavActive: false
    },

    methods: {
        toggleNav() {
            console.log('holi');
            this.isNavActive = !this.isNavActive;
        }
    },

    mounted() {
        console.log('mounted');
    }
});
