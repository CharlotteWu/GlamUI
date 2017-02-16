<template>
    <div class="">
        <div class="loadingBtn">
            <slot></slot>
        </div>
        <div class="mask"></div>
        <div class="loadingContent">
            <div :class="loadingDuration" class="loadingCircleAnimation">
                <div class="loadingCircleOutside"></div>
                <div class="loadingCircleInside"></div>
            </div>
            <p>{{loading_content}}</p>
        </div>
    </div>
</template>

<script>
    var timer = null;
    var loading = document.getElementsByClassName('loadingCircleAnimation');
    var mask = document.getElementsByClassName('mask');
    export default{
        props:{
            duration:{
                type:Number,
                default:0
            },
            loading_content:{
                type:String,
                default:'loading......'
            }
        },
        computed:{
            //什么情况下需要持续时间
            loadingDuration:function () {
                 if(this.duration != 0){
                     timer = setTimeout(function () {
                         loading[0].className = 'fadeOut';
                     },this.duration*1000);
                 }
            }
            
        }
    }
</script>

<style>
.mask{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000000;
    opacity: .3;
}

/*loading animation*/
.loadingCircleAnimation{

}

.fadeOut{
    -webkit-animation:fadeOut 2s linear;
    -o-animation:fadeOut 2s linear;
    -moz-animation: fadeOut 2s linear;
    animation:fadeOut 2s linear;
}

@-webkit-keyframes fadeOut {
    from{
        opacity: 1;
    }
    to{
        opacity: 0;
    }
}

@-moz-keyframes fadeOut {
    from{
        opacity: 1;
    }
    to{
        opacity: 0;
    }
}
</style>