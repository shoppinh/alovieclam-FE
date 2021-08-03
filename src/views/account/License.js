import React, { Suspense } from "react";
const Header = React.lazy(() => import("../common/Header"));
const Footer = React.lazy(() => import("../common/Footer"));
const Avatar = React.lazy(() => import("./common/AvatarSection"));
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  formItem: {
    margin: "20px 0",
  },
}));
const License = () => {
  const classes = useStyles();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <Container
        component="main"
        maxWidth="lg"
        style={{ paddingTop: "10vh", height: "80vh" }}
      >
        <Grid container spacing={4}>
          <Avatar />
          <Grid
            container
            item
            md={8}
            style={{
              border: "1px solid black",
              boxShadow: "5px 10px 8px #888888",
              padding: "5px 15px",
            }}
          >
            <Grid item md={12}>
              <Typography
                component="h2"
                variant="h4"
                style={{
                  paddingBottom: 5,
                  marginBottom: 5,
                }}
              >
                Giấy phép kinh doanh
              </Typography>
            </Grid>
            <Grid item container md={12}>
              <form>
                <Grid item md={12} className={classes.formItem}>
                  <Typography component="h4" variant="h5">
                    Để chứng thực tài khoản Quý khách đang sử dụng trên Alo Việc
                    Làm, vui lòng đăng tải giấy phép đăng ký kinh doanh
                  </Typography>
                </Grid>
                <Grid item container md={12} className={classes.formItem}>
                  <Grid item md={6}>
                    <Typography component="h2" variant="h6">
                      Chọn file Giấy phép kinh doanh
                    </Typography>
                  </Grid>
                  <Grid item md={6}>
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      component="label"
                    >
                      CHỌN FILE GIẤY PHÉP KINH DOANH
                      <input type="file" hidden />
                    </Button>
                  </Grid>
                </Grid>
                <Grid item container md={12} className={classes.formItem}>
                  <Grid item md={6}></Grid>
                  <Grid item md={6}>
                    <Typography component="h2" variant="body1">
                      {"(Dạng file .doc, .docx, .pdf dung lượng <= 10 MB)"}
                    </Typography>
                  </Grid>
                </Grid>

                <Grid item container md={12} className={classes.formItem}>
                  <Grid item md={6}></Grid>
                  <Grid item md={6} className={classes.formItem}>
                    <Button
                      type="submit"
                      size="large"
                      variant="contained"
                      color="primary"
                      fullWidth
                    >
                      Đăng tải
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
            <Grid item md={12}>
              <Typography component="h2" variant="h6">
                GIẤY PHÉP KINH DOANH HỢP LỆ KHI:
              </Typography>
              <Typography component="h2" variant="subtitle1">
                Có dấu giáp lai của cơ quan có thẩm quyền
              </Typography>
              <Typography component="h2" variant="subtitle1">
                Trường hợp giấy phép kinh doanh là bản photo thì phải có công
                chứng
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Suspense>
  );
};

export default License;
