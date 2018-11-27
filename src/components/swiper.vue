<template>

        <div class="swiper">
            <p>配方展示</p>
            
            <template>
                <el-carousel :interval="1000" type="card" height="450px">
                    <el-carousel-item v-for="(item,index) in swiper" :key="index">
                        <img :src=item.src alt="" width="100%" height="100%">
                    </el-carousel-item>
                </el-carousel>
            </template>   
        </div>  
</template>

<script>
    export default {
        data() {
            return {
                swiper: [{src:require('../assets/1.jpg')},{src:require('../assets/2.jpg')},{src:require('../assets/3.jpg')},{src:require('../assets/4.jpg')},{src:require('../assets/5.jpg')}]
            }
        },
    }
</script>
<style>
.el-carousel__container{
    height: 5rem!important;
}
</style>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
   .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  p{
   
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
</style>