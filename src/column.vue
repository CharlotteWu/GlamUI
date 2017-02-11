<template>
     <div class="column">
         <!--<span class="row" v-for="col in {{colNums}}"></span>-->
         <span v-for="c in cnums" :class="row" >{{c}}</span>
     </div>
</template>

<script>
    export default{
        props:{
            cnums:{
                type:Number,
                default:'0'
            },
            spacing:{
                type:Number,
                default:'0'
            }
        },

        computed:{
            row:function () {
                //console.log(cnums);

            }
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