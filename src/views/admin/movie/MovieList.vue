<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <div>电影列表</div>
        <div>
          <el-input
            placeholder="请输入内容"
            v-model="searchVal"
            clearable
            @clear="getMovieInfo"
          >
            <el-button
              slot="append"
              icon="el-icon-search"
              @click="getMovieInfo"
            ></el-button>
          </el-input>
        </div>
      </div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="index" label="编号"></el-table-column>
        <el-table-column prop="movieTitle" label="片名"></el-table-column>
        <el-table-column
          prop="movieLength"
          label="片长"
          :formatter="showMovieLength"
        ></el-table-column>
        <el-table-column prop="tagName" label="标签"></el-table-column>
        <el-table-column prop="area" label="地区"></el-table-column>
        <el-table-column prop="star" label="星级"></el-table-column>
        <el-table-column prop="playNum" label="播放数量"></el-table-column>
        <el-table-column prop="commentNum" label="评论数量"></el-table-column>
        <el-table-column prop="releaseTime" label="上映时间"></el-table-column>
        <el-table-column align="right">
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
    <movie-dialog>
      <movie-edit-child :preForm="preForm" :key="preForm.id"/>
    </movie-dialog>
  </div>
</template>

<script>
import { formatDate } from "utils/index";
import { movieInfo, movieDel } from "network/movie";

import MovieDialog from "./childComps/MovieDialog";
import MovieEditChild from "./childComps/MovieEditChild";

export default {
  name: "MovieList",
  data() {
    return {
      searchVal: "",
      tableData: [],
      pageSize: 5,
      currentPage: 1,
      total: 0,
      preForm: Object,
    };
  },
  components: {
    MovieDialog,
    MovieEditChild,
  },
  methods: {
    getMovieInfo() {
      movieInfo(this.currentPage, this.pageSize, this.searchVal).then((res) => {
        if (res.status === 0) {
          this.tableData = [];
          this.total = res.data.total;
          const movieInfo = res.data.movieInfo;
          const tagInfo = res.data.tagInfo;
          console.log('object',movieInfo);
          for (let i = 0; i < movieInfo.length; i++) {
            // const number = i;
            const id = movieInfo[i]["id"];
            const movieTitle = movieInfo[i]["movieTitle"];
            const movieLength = movieInfo[i]["movieLength"];
            const tagId = movieInfo[i]["tagId"];
            const tagName = tagInfo[tagId];
            const area = movieInfo[i]["area"];
            const star = movieInfo[i]["star"];
            const playNum = movieInfo[i]["playNum"];
            const commentNum = movieInfo[i]["commentNum"];
            const date = new Date(movieInfo[i]["releaseTime"] * 1000);
            const releaseTime = formatDate(date, "yyyy-MM-dd");
            const imgUrl = movieInfo[i]["imgUrl"];
            const movieUrl = movieInfo[i]["movieUrl"];
            const descript = movieInfo[i]["descript"];

            this.tableData.push({
              id,
              movieTitle,
              movieLength,
              tagId,
              tagName,
              area,
              star,
              playNum,
              commentNum,
              releaseTime,
              imgUrl,
              movieUrl,
              descript
            });
          }
        }
      });
    },
    handleEdit(index, row) {
      console.log(index, row);
      this.preForm = row;
      this.$store.commit("setMovieVisibleTrue");
    },
    handleDelete(index, row) {
      movieDel(row.id).then((res) => {
        if (res.status === 0) {
          this.$message.success(res.data);
        } else {
          this.$message.error(res.data);
        }
        this.getMovieInfo();
      });
    },
    showMovieLength(row, column, cellValue, index) {
      if (cellValue <= 60) {
        return cellValue + "分";
      } else {
        const hour = parseInt(cellValue / 60);
        const min = cellValue % 60;
        return hour + "时" + min + "分";
      }
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.getMovieInfo();
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getMovieInfo();
    },
  },
  created() {
    this.getMovieInfo();
  },
};
</script>

<style scoped>
.clearfix {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.el-pagination {
  margin-top: 10px;
}
</style>
