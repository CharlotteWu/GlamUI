<template>
     <div class="column">
         {{content}}
     </div>
</template>

<script>

    export default{
        props:{
            row:{
                type:'Number',
                default:''
            },
            content:{
                type:'String',
                default:''
            }

        },

    }
</script>

<style>

.column{
    display: flex;
}

</style>