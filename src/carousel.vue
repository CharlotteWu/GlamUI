<template>
    <div id="carousel">
        <ul>
            <div class="leftButton" @click="sildeToLeft">

            </div>
            <li><slot></slot></li>
            <div class="rightButton" @click="sildeToRight">

            </div>
        </ul>
    </div>
</template>

<script>

    export default{
        methods:{
            slideToLeft:function () {

            },
            slideToRight:function () {
                
            }
        }
    }
</script>

<style>
#carousel{
    position: relative;
}

.leftButton{
    position: absolute;
}

.rightButton{
    position: absolute;
}
</style>