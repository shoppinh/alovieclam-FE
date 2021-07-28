import React from "react";
import { Grid } from "@material-ui/core";

const RecruiterFooter = () => {
  return (
    <div className="Recruiter__Footer">
      <div className="container-fluid">
        <Grid container>
          <Grid item md={7}>
            <p>
              <strong>Công ty Cổ phần TOPCV Việt Nam</strong>
            </p>
            <p>
              Trụ sở HN: Tầng 3, Tòa nhà Gold Season, 47 Nguyễn Tuân, P. Thanh
              Xuân Trung, Q. Thanh Xuân, Hà Nội
              <br />
              TP HCM: Tòa nhà cao ốc Nam Giao 1, số 261 - 263 Phan Xích Long,
              Phường 2, Quận Phú Nhuận, TP Hồ Chí Minh <br />
              Email: cskh@topcv.vn
              <br />
              Điện thoại: (024) 710 79 799
            </p>
          </Grid>
          <Grid item md={5} style={{ textAlign: "right" }}>
            <a href="https://tuyendung.topcv.vn" class="logo">
              <img
                src="https://tuyendung.topcv.vn/v2/images/logo_topcv_for_business.png"
                alt="logo"
                style={{ height: 60 }}
              />
            </a>
            <a href="https://bit.ly/topcvstartupaccelerator">
              <img
                src="https://tuyendung.topcv.vn/images/logo-google-for-startup.png"
                class="logo"
                alt="Google"
                style={{ marginLeft: "30px", width: "170px" }}
              />
            </a>
            <p>
              <a
                target="_blank"
                href="https://apps.apple.com/us/app/id1469009831"
              >
                <img
                  src="https://tuyendung.topcv.vn/images/app/appstore.jpg"
                  style={{ maxWidth: "100px" }}
                  alt=""
                />
              </a>
              <a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.topcvemployer"
              >
                <img
                  src="https://tuyendung.topcv.vn/images/app/googleplay.jpg"
                  style={{ maxWidth: "100px" }}
                  alt=""
                />
              </a>
            </p>
            <p class="copyright">
              © 2014 - 2021 Bản quyền thuộc về CTCP TOPCV Việt Nam.
            </p>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default RecruiterFooter;
