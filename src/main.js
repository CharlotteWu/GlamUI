/**
 * Created by charlotte on 17/2/2.
 */
import Vue from 'vue/dist/vue'
import alert from './alert.vue'
import column from './column.vue'
import row from './row.vue'
// import parent from './parent.vue'
// import child from './child.vue'
import mention from './mention.vue'
import carousel from './carousel.vue'
import popup from './popup.vue'
import loading from './loading.vue'


new Vue({
    el: '#app',
    components:{
        alert,
        column,
        row,
        mention,
        carousel,
        popup,
        loading
    }
})