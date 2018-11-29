<template>
    <div class="contant">
        <div class="title"><h1>服&nbsp;务&nbsp;支&nbsp;持</h1></div>
        <div class="swiper">
            <div >
                
                    <div><img src="http://zf.vpbong.cn/Public/index/images/other_01.jpg" alt="" width="70%"></div>
                    <div>成分分析</div>
                    <div class="text">成分分析就是运用各种科学手段 去分析产品的组成成分...</div>
               
            </div>    
             <div >
                
                    <div><img src="http://zf.vpbong.cn/Public/index/images/other_02.jpg" alt="" width="70%"></div>
                    <div>未知物分析</div>
                    <div class="text">未知物分析就是运用各种科学分离 和分析手段去对复杂...
</div>
               
            </div> 
             <div >
                
                    <div><img src="http://zf.vpbong.cn/Public/index/images/other_03.jpg" alt="" width="70%"></div>
                    <div>工业诊断</div>
                    <div class="text">工业诊断主要解决的是产品及其助剂 生产过程中由于产...</div>
               
            </div> 
             <div >
                
                    <div><img src="http://zf.vpbong.cn/Public/index/images/other_04.jpg" alt="" width="70%"></div>
                    <div>配方开发</div>
                    <div class="text">有样开发是在客户提供可参考样品 的情况下进行改进配方...</div>
               
            </div> 
            
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.contant{
    width: 100%;  
  
  /* margin-bottom: 140px; */
    /* border: 1px solid red; */
}
.swiper{
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex: 1;
    background: #f5f5f5;
    /* margin-bottom: 140px; */
    padding: 3rem 0;
    
   
}
.swiper>div{
    display: flex;
    flex-direction: column;
    align-items: center;
    /* border: 1px solid red; */
    /* padding: 30px 15px; */
}
.swiper>div div:nth-child(1){
    margin-bottom: 2rem;
}
.swiper>div div:nth-child(2){
    margin-bottom: .8rem;
}
.text{
      Overflow:hidden;    
    /* White-space:nowrap;  */
    Text-overflow:ellipsis;
    width: 70%;
    text-align: left;

}
div{
    font-size: .3rem;
     font-family: arial, "microsoft yahei", "Source Han Sans";
}

</style>