import React from "react";
const RecruiterHeader = React.lazy(() => import("./RecruiterHeader"));
const RecruiterFooter = React.lazy(() => import("./RecruiterFooter"));
import "./Recruiter.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import image1 from "../../img/work.jpeg";
import image2 from "../../img/work2.jpg";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: "0 10px",
    padding: "10px 15px",
  },
  button2: {
    padding: "10px 15px",
    backgroundColor: "white",
    color: "black",
  },
  gridItem: {
    textAlign: "center",
  },
}));
const RecruiterHomepage = () => {
  const classes = useStyles();
  return (
    <div className="RecruiterHomepage">
      <RecruiterHeader />
      <div className="RecruiterContainer">
        <div className="Recruiter__intro">
          <div className="Recruiter__bg">
            <div className="container-fluid">
              <h1>
                Đăng tin tuyển dụng & tìm hồ sơ ứng viên hiệu quả trên
                AloViecLam
              </h1>
              <h2>
                Đăng tin tuyển dụng <strong>MIỄN PHÍ</strong> để tiếp cận
                <strong>2.000.000+</strong> người tìm việc
              </h2>
              <div class="Recruiter__action">
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Đăng Tin Ngay
                </Button>

                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                >
                  Tìm Ứng Viên
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="Recruiter__info">
          <div className="container-fluid">
            <Grid container>
              <Grid item md={12}>
                <h4 class="block-title">
                  Tại sao doanh nghiệp chọn ALOVIECLAM
                </h4>
              </Grid>
              <Grid item container>
                <Grid item md={3} className={classes.gridItem}>
                  <div class="number">3,000,000+</div>
                  <div class="title">Lượt ứng viên truy cập hàng tháng</div>
                </Grid>
                <Grid item md={3} className={classes.gridItem}>
                  <div class="number">70%</div>
                  <div class="title">1+ năm kinh nghiệm</div>
                </Grid>
                <Grid item md={3} className={classes.gridItem}>
                  <div class="number">30%</div>
                  <div class="title">Sinh viên mới tốt nghiệp</div>
                </Grid>
                <Grid item md={3} className={classes.gridItem}>
                  <div class="number">95%</div>
                  <div class="title">Chủ động tìm việc</div>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className="Recruiter__SearchInfo">
          <div className="container-fluid">
            <Grid container>
              <Grid item md={6} style={{ paddingRight: 10 }}>
                <img
                  src={image1}
                  alt="alovieclam-work"
                  style={{ width: "100%", height: "100%" }}
                />
              </Grid>
              <Grid item md={6}>
                <h3>Tìm kiếm Ứng viên thông minh</h3>
                <p>
                  - <strong>Hồ sơ người tìm việc</strong> cập nhật liên tục theo
                  từng phút. Mỗi tháng có hơn 100,000 ứng viên cập nhật qua Công
                  cụ tạo CV TopCV.vn.
                  <br />
                  - Hỗ trợ nhà tuyển dụng tìm kiếm ứng viên theo Quận/Huyện của
                  Hà Nội, Hồ Chí Minh.
                  <br />
                  - CV tại TopCV có kèm theo link Facebook, giúp NTD khai thác
                  được nhiều thông tin hơn về ứng viên.
                  <br />
                  - Dễ dàng tìm kiếm ứng viên theo từng công ty đã làm.
                  <br />
                </p>
                <Button variant="contained" color="primary">
                  Đăng ký ngay
                </Button>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className="Recruiter__EnrolInfo">
          <div className="container-fluid">
            <Grid container>
              <Grid item md={6}>
                <h3>Đăng tin Tuyển dụng Miễn phí</h3>
                <p>
                  - Tặng ngay 3 tin tuyển dụng miễn phí.
                  <br /> - Tiếp cận với 3,000,000+ ứng viên.
                  <br />- Đăng tin dễ dàng, không quá 1 phút.
                </p>
                <Button variant="contained" color="primary">
                  Đăng ký ngay
                </Button>
              </Grid>
              <Grid item md={6} style={{ paddingLeft: 10 }}>
                <img
                  src={image2}
                  alt="alovieclam-work"
                  style={{ width: "100%", height: "100%" }}
                />
              </Grid>
            </Grid>
          </div>
        </div>
        <div className="Recruiter__Action">
          <div className="container-fluid">
            <Grid container>
              <Grid item md={7}>
                <div class="message">
                  Tìm kiếm ứng viên tài năng ngay bây giờ
                </div>
              </Grid>
              <Grid item md={5} style={{ textAlign: "end" }}>
                <Button variant="contained" className={classes.button2}>
                  Tìm ứng viên ngay
                </Button>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
      <RecruiterFooter />
    </div>
  );
};

export default RecruiterHomepage;
