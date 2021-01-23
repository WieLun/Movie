<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>标签列表</span>
      </div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="编号" prop="number"> </el-table-column>
        <el-table-column label="名称" prop="name"> </el-table-column>
        <el-table-column label="添加时间" prop="addTime"> </el-table-column>
        <el-table-column align="right">
          <template slot="header" slot-scope="scope">
            <el-input placeholder="请输入内容" v-model="searchVal" clearable @clear="getTagInfo">
              <el-button
                slot="append"
                icon="el-icon-search"
                @click="getTagInfo(scope)"
              ></el-button>
            </el-input>
          </template>
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[1, 2, 5, 10]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </el-card>

    <!-- 编辑tag -->
    <el-dialog
      title="修改标签"
      :visible.sync="dialogTagVisible"
      width="30%"
      :close-on-click-modal="false"
    >
      <el-input
        placeholder="请输入修改标签内容"
        v-model="tagName"
        clearable
      ></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogTagVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogTagClick">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { tagList, tagDel, tagEdit } from "network/tag";
import { formatDate } from "utils/index";

export default {
  name: "TagList",
  data() {
    return {
      tableData: [],
      searchVal: "",
      pageSize: 5,
      currentPage: 1,
      total: 0,
      dialogTagVisible: false,
      tagName: "",
    };
  },
  created() {
    this.getTagInfo();
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
      this.dialogTagVisible = true;
      this.tagName = row.name;
      sessionStorage.setItem("tagName", this.tagName);
    },
    handleDelete(index, row) {
      tagDel(row.name).then((res) => {
        if (res.status === 0) {
          this.$message({
            message: res.data,
            type: "success",
          });
        } else {
          this.$message({
            message: res.data,
            type: "error",
          });
        }
      });
      this.getTagInfo();
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.getTagInfo();
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getTagInfo();
    },
    checkTagInfo(res) {
      this.total = res.data.totalPage;
      this.tableData = [];
      const tagInfo = res.data.tagInfo;

      for (let i = 0; i < tagInfo.length; i++) {
        const date = new Date(tagInfo[i][2] * 1000);
        const number = this.pageSize * (this.currentPage - 1) + i + 1;
        const addTime = formatDate(date, "yyyy-MM-dd hh:mm:ss");
        const name = tagInfo[i][1];

        this.tableData.push({
          number,
          name,
          addTime,
        });
      }
    },
    getTagInfo() {
      tagList(this.currentPage, this.pageSize, this.searchVal).then((res) => {
        if (res.status === 0) {
          this.checkTagInfo(res);
        } else {
          this.$message({
            message: res.data,
            type: "error",
          });
        }
      });
    },
    dialogTagClick() {
      const oldTagName = sessionStorage.getItem("tagName");
      if (oldTagName === this.tagName) {
        this.dialogTagVisible = false;
        sessionStorage.removeItem("tagName");
      } else {
        tagEdit(oldTagName, this.tagName).then((res) => {
          if (res.status === 0) {
            this.$message({
              message: res.data,
              type: "success",
            });
            sessionStorage.removeItem("tagName");
            this.dialogTagVisible = false;
          } else {
            this.$message({
              message: res.data,
              type: "error",
            });
          }
        });
      }
    },
  },
};
</script>

<style scoped>
.el-pagination {
  margin-top: 10px;
}
</style>
