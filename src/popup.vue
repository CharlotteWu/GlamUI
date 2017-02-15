<template>
    <div class="popupBtn">
        <span @click="framePopup">
            <slot></slot>
        </span>
        <div class="mask"></div>
        <div class="popupFrame">
            <p class="popupContent">{{popup_content}}</p>
            <div class="statusBar">
                <span class="certain" @click="closeFrame">确定</span>
                <span class="cancel" @click="closeFrame">取消</span>
            </div>
        </div>
    </div>
</template>

<script>
    var mask = document.getElementsByClassName('mask');
    var frame = document.getElementsByClassName('popupFrame');

    export default{
        props:{
            popup_content:{
                type:String,
                default:''
            }
        },
        methods:{
            framePopup:function(){
                mask[0].style.display = 'block';
                frame[0].style.display = 'block';
            },
            closeFrame:function(){
                mask[0].style.display = 'none';
                frame[0].style.display = 'none';
            }
        },
    }
</script>

<style>
.mask{
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.3);
    top: 0;
    left: 0;
    display: none;
}

.popupFrame{
    width: 200px;
    height: 100px;
    background: #ffffff;
    border-radius: 8px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%,-50%,0);
    border:1px solid #cccccc;
    display: none;
}

.popupContent{
    text-align: center;
    width: 100%;
    height: 60px;
    padding: 10px;
}

.statusBar{
    position: absolute;
    bottom: 0;
    height: 30px;
    width: 100%;
    border-top: 1px solid #cccccc;
}

.statusBar span{
    box-sizing: border-box;
    float: left;
    /*or display:inline-block*/
    width: 50%;
    text-align: center;
    line-height: 30px;
    color: #3FB1E2;
    cursor: pointer;
}

.statusBar span:first-child{
    border-right:1px solid #cccccc;
}

</style>