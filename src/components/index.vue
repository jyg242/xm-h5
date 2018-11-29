<template>
    <div>
        <!-- 头部 -->
        <headerAll></headerAll>
        <Foot class="foot"/>
        
        <Swiper class="swiper"/>
        <div><p>配方查询</p></div>
        <Ask class="ask"/>
       
        <swiperAbc/>
        <beiAn/>>
        <!-- 轮播 -->
        
    </div>
</template>

<script>
import headerAll from '../components/header'
import Swiper from '../components/swiper'
import Ask from '../components/ask'
import Foot from '../components/foot'
import swiperAbc from '../components/swiper01'
import beiAn from './beian'
    export default {
        components:{
            headerAll,
            Swiper,
            Ask,
            Foot,swiperAbc,
            beiAn
        }
    }
</script>
<style>
.el-message-box{
    width:12rem !important;
}
.el-form-item__label{
    font-size: .8rem !important;
}
.el-button{
    font-size: .9rem !important;
}
.el-message {
    min-width: 80%;}
</style>

<style scoped>
.swiper{
    margin-top:1rem;
    width: 80%;
    margin: 0 auto;
    /* height: 1000px; */
}
.ask{
    width: 80%;
    margin: 0 auto;
}
div>p{
    height: 3rem;
    background: url(https://www.mingdada.com/assets/img/3.0/0_zi_3@2x.png) top center no-repeat;
    /* background-size: 874px 126px; */
    color: #2ea8e6;
    text-align: 3rem;
    line-height: 3rem;
    font-family: PingFangSC-Regular, Microsoft Yahei, arial, Hiragino Sans GB;
    margin-bottom: 1rem;
     font-size: 1rem;
}
.foot{
    margin-top: 30px;
}
</style>