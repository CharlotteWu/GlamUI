<template>
   <div>
       I am parent
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

</style>