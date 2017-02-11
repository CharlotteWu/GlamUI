/**
 * Created by charlotte on 17/2/2.
 */
import Vue from 'vue/dist/vue'
import alert from './alert.vue'
import column from './column.vue'
import parent from './parent.vue'
import child from './child.vue'


new Vue({
    el: '#app',
    components:{
        alert,
        column,
        parent,
        child
    }
})