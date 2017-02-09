<template>
     <glamRow></glamRow>
</template>

<script>
    import glamRow  from './glamRow.vue';

    export default{
        props:{
            row:{
                type:'Number',
                default:''
            }

        },
        components:{
            glamRow
        }
    }
</script>

<style>

</style>