<template>
     <transition v-if="close" name="fade" >
         <div :class="alertStyle" class="alert">
            <slot>
                <p class="description">
                    {{description}}
                    <span class="alert-close" @click="shouldClose">{{ closable_description}}</span>
                </p>
            </slot>
         </div>
     </transition>
</template>

<script>

    export default{
        props:{
            type:{
                type:String,
                default:''
            },
            description:{
                type:String,
                default:'default content'
            },
            closable:{
                type:Boolean,
                default:true
            },
            closable_description:{
                type:String,
                default:'X'
            }
        },
        computed:{
            alertStyle:function(){
                return{
                    'alert-success': this.type == 'success',
                    'alert-warning': this.type == 'warning',
                    'alert-normal': this.type == 'normal'
                }
            }
        },
        methods:{
            shouldClose:function() {
                 if(this.closable == true){
                     this.close = false;
                 }else if(this.closable == false){
                     this.close = true;
                 }
            }
        },
        data:function(){
            return{
                'close':true
            }
        }


    }
</script>

<style>
    .alert{
        height: 40px;
        width: calc(100% - 20px);
        border-radius: 5px;
        color: #ffffff;
        position: relative;
        background: #aaaaaa;
        margin: 10px;
    }

    .description{
        line-height: 40px;
        text-align: left;
        margin-left: 10px;
    }

    .alert-normal{
        background: #0389D6;
    }

    .alert-warning{
        background: #D60006;
    }

    .alert-success{
        background: #78D68C;
    }

    .alert-close{
        position: absolute;
        right: 10px;
        display: inline-block;
        cursor: pointer;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
        opacity: 0
    }

</style>