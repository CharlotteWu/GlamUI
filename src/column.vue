<template>
    <div class="column">
        <slot></slot>
    </div>
</template>

<script>
    export default{
        mounted(){
            this.$forceUpdate();
        }
    }
</script>

<style>
.column{
    display: flex;
    /*justify-content: center;*/
    /*align-items: center;*/
    min-height: 30px;
}

.column > div{
    /*通过sass计算children.length的平均宽度?安装webpack2.0?hot-reloader?*/
    width: 30%;

    /*--------------------------------------------------------------*/
    min-height: 30px;
}
</style>