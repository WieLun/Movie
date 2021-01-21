<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>添加电影</span>
      </div>

      <el-form
        label-position="top"
        ref="movieForm"
        :model="movieForm"
        label-width="80px"
      >
        <el-form-item label="片名">
          <el-input v-model="movieForm.movieTitle"></el-input>
        </el-form-item>
        <el-form-item label="文件">
          <el-upload
            class="upload-demo"
            ref="upload"
            action
            :file-list="fileList"
            :on-preview="handlePreview"
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
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
            :on-change="onChange"
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
        <el-form-item label="地区">
          <el-input v-model="movieForm.area"></el-input>
        </el-form-item>
        <el-form-item label="片长">
          <el-input v-model="movieForm.length"></el-input>
        </el-form-item>
        <el-form-item label="上映时间">
          <el-input> </el-input>
          <el-calendar v-model="releseTime" />
        </el-form-item>
        <el-form-item>
          <el-button size="small" type="primary" @click="submitUpload"
            >确定</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { uploadMovieInfo, getTagInfo } from "network/movie";

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
        length: "",
        releaseTime: "",
        value: "",
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
      tags: [],
      isShow: false,
      movieType: "video/mp4",
      imageUrl: "",
      fileList: [],
      releseTime: new Date(),
      rules: {
        movieTitle: [
          { required: true, message: "请输入片名", trigger: "blur" },
        ],
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
      data.append("isMovie", true);
      uploadMovieInfo(data).then((res) => {
        if (res.status === 0) {
          const movieSrc = res.data.movieSrc;
          this.$refs.video.src = movieSrc;

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
          console.log(this.$refs.movieForm);
          console.log("有效");
          this.$refs.upload.submit();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    handlePreview(file) {
      console.log(file);
    },

    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    onChange(file, fileList) {
      const _this = this;
      const event = event || window.event;
      file = event.target.files[0];
      const reader = new FileReader();
      //转base64
      reader.onload = function(e) {
        _this.imageUrl = e.target.result; //将图片路径赋值给src
      };
      reader.readAsDataURL(file);
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
