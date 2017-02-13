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
    justify-content: center;
    align-items: center;
    min-height: 20px;
}
.column span{
    display: inline-block;
    width: 25%;
    text-align: center;
}
</style>