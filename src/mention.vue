<template>
         <span class="mention">
             <slot></slot>
             <!--通过分发内容直接在html编写-->
             <span :class="mentionOpen" >{{mentionNum}}</span>
         </span>
</template>

<script>
    export default{
        props:{
            mention_status:{
                type:String,
                default:''
            },
            mention_num:{
                type:String,
                default:''
            }
        },
        computed:{
            mentionOpen:function(){
                return{
                    'mentionNumber': this.mention_status == 'on',
                    'mentionAlert': this.mention_status == 'off'
                }
            },
            mentionNum:function () {
                if(parseInt(this['mention_num']) <= 99){
                    return this['mention_num'];
                }else if(parseInt(this['mention_num']) > 99){
                    return this['mention_num'] = '+99';
                }
            }
        },

    }
</script>

<style>
    .mention{
        color: #ffffff;
        border-radius: 5px;
        background: #cccccc;
        padding: 2px 10px 2px 10px;
        position: relative;
    }

    .mentionNumber{
        display: inline-block;
        position: absolute;
        background: red;
        border-radius: 5px;
        top: -10px;
        right: -14px;
        font-size: 10px;
        padding: 0 4px 0 4px;
    }

    .mentionAlert{
        display: inline-block;
        position: absolute;
        background: red;
        border-radius: 50%;
        width: 8px;
        height: 8px;
        top: -4px;
        right: -4px;
    }
</style>