<template>
         <span class="comment">
             <slot></slot>
             <!--通过分发内容直接在html编写-->
             <span :class="commentNum">+23</span>
         </span>
</template>

<script>
    export default{
        props:{
            commentNum:{
                type:String,
                default:''
            }
        }

    }
</script>

<style>
.comment{
    color: #ffffff;
    border-radius: 5px;
    background: #cccccc;
    padding: 2px 4px 2px 4px;
    position: relative;
}

.commentNum{
    display: inline-block;
    position: absolute;
    background: red;
    border-radius: 5px;
    top: -2px;
    right: -2px;
    font-size: 10px;
}

</style>