<template>
  <el-form
    label-position="top"
    ref="movieForm"
    :rules="rules"
    :model="movieForm"
    label-width="80px"
    v-loading="loading"
  >
    <el-form-item label="片名" prop="movieTitle">
      <el-input v-model="movieForm.movieTitle"></el-input>
    </el-form-item>
    <el-form-item label="文件">
      <el-upload
        class="upload-demo"
        ref="upload"
        action
        :file-list="fileList"
        :before-upload="beforeMovieUpload"
        auto-upload
        :http-request="httpRequest"
      >
        <el-button slot="trigger" size="small" type="primary"
          >选取文件</el-button
        >

        <div slot="tip" class="el-upload__tip">
          <video controls="controls" ref="video">
            <source src="" :type="movieType" />
          </video>
          <div>
            只能上传flv/mp4文件，且不超过1G
          </div>
        </div>
      </el-upload>
    </el-form-item>
    <el-form-item label="简介">
      <el-input
        type="textarea"
        :rows="2"
        placeholder="请输入内容"
        v-model="movieForm.descript"
      >
      </el-input>
    </el-form-item>
    <el-form-item label="封面">
      <el-upload
        class="avatar-uploader"
        action
        :show-file-list="false"
        :auto-upload="false"
        :on-change="handleChange"
      >
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </el-form-item>
    <el-form-item label="星级">
      <el-select v-model="movieForm.starValue" placeholder="请选择">
        <el-option
          v-for="item in stars"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="标签">
      <el-select v-model="movieForm.tagVal" placeholder="请选择">
        <el-option
          v-for="item in tags"
          :key="item.tagId"
          :label="item.tagName"
          :value="item.tagId"
        >
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="地区" prop="area">
      <el-input v-model="movieForm.area"></el-input>
    </el-form-item>
    <el-form-item label="片长(min)" prop="movieLength">
      <el-input v-model.number="movieForm.movieLength"></el-input>
    </el-form-item>
    <el-form-item label="上映时间" prop="releaseTime">
      <el-date-picker
        v-model="movieForm.releaseTime"
        value-format="timestamp"
        format="yyyy-MM-dd"
        type="date"
        placeholder="选择日期"
      >
      </el-date-picker>
    </el-form-item>
    <el-form-item>
      <el-button size="small" type="primary" @click="submitUpload"
        >确定</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script>
import {
  uploadMovieInfo,
  getTagInfo,
  uploadMovieFile,
  uploadMovieImg,
} from "network/movie";

export default {
  name: "MovieAdd",
  data() {
    return {
      movieForm: {
        movieTitle: "",
        descript: "",
        starValue: "1",
        area: "",
        tagVal: "",
        movieLength: "",
        releaseTime: "",
        movieUrl: "",
      },
      stars: [
        {
          value: "1",
          label: "一星",
        },
        {
          value: "2",
          label: "二星",
        },
        {
          value: "3",
          label: "三星",
        },
        {
          value: "4",
          label: "四星",
        },
        {
          value: "5",
          label: "五星",
        },
      ],
      loading: false,
      tags: [],
      movieType: "video/mp4",
      imageUrl: "",
      fileList: [],
      isMovie: false,
      submitForm: new FormData(),
      rules: {
        movieTitle: [
          { required: true, message: "请输入片名", trigger: "blur" },
        ],
        area: [{ required: true, message: "请输入地区", trigger: "blur" }],
        movieLength: [
          { required: true, message: "请输入片长", trigger: "blur" },
          { type: "number", message: "片长必须为数字" },
        ],

        releaseTime: {
          type: "date",
          required: true,
          message: "请选择日期",
          trigger: "change",
        },
      },
    };
  },
  created() {
    getTagInfo().then((res) => {
      if (res.status === 0) {
        this.tags = res.data;
        this.movieForm.tagVal = res.data[0].tagId;
      } else {
        this.$message({
          message: res.data,
          type: "error",
        });
      }
    });
  },
  methods: {
    httpRequest(param) {
      let fileObj = param.file; // 相当于input里取得的file
      let data = new FormData();
      data.append("movieFile", fileObj);
      uploadMovieFile(data).then((res) => {
        if (res.status === 0) {
          const movieSrc = res.data.movieSrc;
          this.movieForm.movieUrl = res.data.movieUrl;
          this.$refs.video.src = movieSrc;
          this.isMovie = true;
          this.movieType = "video/" + movieSrc.split(".").slice(-1)[0];
        } else {
          this.$message({
            message: res.data,
            type: "error",
          });
        }
      });
    },
    submitUpload() {
      this.$refs.movieForm.validate((valid) => {
        if (valid) {
          let data = this.submitForm;
          let form = this.movieForm;
          let resImg = data.has("imgFile");
          if (!this.isMovie) {
            this.$message.error("请上传电影视频");
            return false;
          }
          if (!resImg) {
            this.$message.error("请上传封面");
            return false;
          }
          data.delete("movieTitle");
          data.delete("descript");
          data.delete("starValue");
          data.delete("area");
          data.delete("tagVal");
          data.delete("movieLength");
          data.delete("releaseTime");
          data.delete("movieUrl");
          for (let key in form) {
            if (key === "releaseTime") {
              data.append(key, form[key] / 1000);
            } else {
              data.append(key, form[key]);
            }
          }
          this.loading = true;
          uploadMovieInfo(data).then((res) => {
            if (res.status === 0) {
              this.$message.success("上传成功");
              this.loading = false;
              this.isMovie = false;
              this.movieForm.movieTitle = "";
              this.movieForm.descript = "";
              this.movieForm.area = "";
              this.movieForm.movieLength = "";
              this.movieForm.releaseTime = "";
              this.movieForm.movieUrl = "";
              this.fileList = [];
              this.submitForm = new FormData();
              this.imageUrl = "";
              this.$refs.video.src = "";
            } else {
              this.loading = false;
              this.$message.error(res.data);
            }
          });
        } else {
          this.isMovie = false;
          this.loading = false;
          return false;
        }
      });
    },
    beforeMovieUpload(file) {
      const isType = file.type === "video/mp4" || file.type === "video/flv";
      const isSize = file.size / 1024 / 1024 < 1024;
      if (!isType) {
        this.$message.error("上传视频只能是mp4与flv格式");
      }
      if (!isSize) {
        this.$message.error("上传视频图片大小不能超过1G");
      }
      return isType && isSize;
    },

    beforeAvatarUpload(file) {
      const type = file.name.split(".").slice(-1)[0];
      const isType = type === "jpeg" || type === "jpg" || type === "png";
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isType) {
        this.$message.error("上传头像图片只能是JPG与PNG格式");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过2MB");
      }
      return isType && isLt2M;
    },
    handleChange(file, fileList) {
      const res = this.beforeAvatarUpload(file);
      if (res) {
        this.submitForm = new FormData();
        this.submitForm.append("imgFile", file.raw);
        const _this = this;
        const event = event || window.event;
        file = event.target.files[0];
        const reader = new FileReader();
        //转base64
        reader.onload = function(e) {
          _this.imageUrl = e.target.result; //将图片路径赋值给src
        };
        reader.readAsDataURL(file);
      } else {
        return res;
      }
    },
  },
};
</script>

<style scoped>
.avatar-uploader {
  border: 1px dashed #d9d9d9;
  width: 178px;
  height: 178px;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
