
<template>
    <div class="contant">
        <div class="out">
            <el-button @click="out" type='warning'>退出后台</el-button><br>
        </div>
        <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
                label="注册时间"
                width="250">
                <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span style="margin-left: 10px">{{ scope.row.createAt | timefilter }}</span>
                </template>
            </el-table-column>
            <el-table-column
                label="注册姓名"
                width="180">
                <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top">
                    <p>姓名: {{ scope.row.userName }}</p>
       
                    <div slot="reference" class="name-wrapper">
                        <el-tag size="medium">{{ scope.row.userName }}</el-tag>
                    </div>
                    </el-popover>
                </template>
            </el-table-column>
            <el-table-column
                label="电话"
                width="180">
                <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top">
                        <p>电话: {{ scope.row.phone }}</p>
                    <div slot="reference" class="name-wrapper">
                        <el-tag size="medium">{{ scope.row.phone }}</el-tag>
                    </div>
                    </el-popover>
                </template>
            </el-table-column>
            <!-- <el-table-column
                label="qq"
                width="180">
                <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top">
                        <p>电话: {{ scope.row.qq }}</p>
                    <div slot="reference" class="name-wrapper">
                        <el-tag size="medium">{{ scope.row.qq }}</el-tag>
                    </div>
                    </el-popover>
                </template>
            </el-table-column> -->
                    <el-table-column label="操作">
                    <template slot-scope="scope">
                        <!-- <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)">编辑</el-button> -->
                        <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
            </el-table-column>
        </el-table>
        <div class="block">
            
            <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[10]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="count">
            </el-pagination>
        </div>      
    </div>    
</template>

<script>
import axios from 'axios'
import {toTime} from '../filter/time.js'
  export default {
    data() {
      return {
        tableData: [],
        count:0,
        currentPage4: 1
      }
    },
    filters:{
        timefilter(atime){
            return toTime(atime)
        }
    },
    async mounted() {
        this.search()    
        this.total()
        
    },
    methods: {
        //分页查询
      async search(){
          let {status,data:{code,message}}=await axios.post('http://127.0.0.1:3000/user/all',{
            page:this.currentPage4
          })
            if(status===200&&code===200){
            this.tableData=message
            console.log(this.tableData)
        }
      },
      async out(){
          sessionStorage.removeItem('myinfo')
          await this.$alert('退出管理系统')
          this.$router.push('/')
      },
      //查询总数量
      async total(){
          let {status,data:{code,message}}=await axios.post('http://127.0.0.1:3000/user/total')
            if(status===200&&code===200){
            this.count=message
        }
      },
    //   handleEdit(index, row) {
    //     console.log(index, row);
    //   },
    // 删除操作
      async handleDelete(index, row) {
        console.log(index, row,row._id);
        let {status,data:{code,message}}=await axios.post('http://127.0.0.1:3000/user/del',{
            _id:row._id
          })
          console.log(status,code,message)
          if(status==200&&code===200){
                await this.$alert(message)
                this.$router.go(0)
          }else{
              this.$alert('删除失败')
          }

      },
      //分页
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      //按页查询
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.currentPage4=val
        this.search()
       
        
      }
    }
}
  
</script>
<style scoped>
    .contant{
        margin-left:20%;
    }
    .el-pagination{
        margin-top: 100px;
    }
    .out{
        float: left;
    }
</style>
