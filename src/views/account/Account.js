import React, { Suspense } from "react";
const Header = React.lazy(() => import("../common/Header"));
const Footer = React.lazy(() => import("../common/Footer"));
const Avatar = React.lazy(() => import("./common/AvatarSection"));

import Container from "@material-ui/core/Container";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const useStyles = makeStyles((theme) => ({
  form: {},
  formItem: {
    margin: "5px 0",
  },
}));
const Account = () => {
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
                variant="h5"
                style={{
                  paddingBottom: 5,
                  marginBottom: 5,
                }}
              >
                Thông tin tài khoản
              </Typography>
            </Grid>
            <Grid container item>
              <Grid container item md={6}>
                <Grid item md={10} className={classes.formItem}>
                  <Typography component="h2" variant="subtitle1">
                    Email đăng nhập :
                  </Typography>
                </Grid>
                <Grid item md={10} className={classes.formItem}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Địa chỉ email"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item md={10} className={classes.formItem}>
                  <Typography component="h2" variant="subtitle1">
                    Email đăng nhập :
                  </Typography>
                </Grid>
                <Grid item md={10} className={classes.formItem}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Địa chỉ email"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item md={10} className={classes.formItem}>
                  <Typography component="h2" variant="subtitle1">
                    Email đăng nhập :
                  </Typography>
                </Grid>
                <Grid item md={10} className={classes.formItem}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Địa chỉ email"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
              </Grid>
              <Grid container item md={6}>
                <Grid item md={10} className={classes.formItem}>
                  <Typography component="h2" variant="subtitle1">
                    Email đăng nhập :
                  </Typography>
                </Grid>
                <Grid item md={10} className={classes.formItem}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Địa chỉ email"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>{" "}
                <Grid item md={10} className={classes.formItem}>
                  <Typography component="h2" variant="subtitle1">
                    Email đăng nhập :
                  </Typography>
                </Grid>
                <Grid item md={10} className={classes.formItem}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Địa chỉ email"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item md={10} className={classes.formItem}>
                  <Typography component="h2" variant="subtitle1">
                    Email đăng nhập :
                  </Typography>
                </Grid>
                <Grid item md={10} className={classes.formItem}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Địa chỉ email"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
              </Grid>
              <Grid container item className={classes.formItem}>
                <Grid item>
                  <Typography component="h2" variant="h6">
                    Cảnh báo đăng nhập
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography component="h2" variant="subtitle1">
                    Alo Việc Làm sẽ gửi email thông báo khi nhận thấy có địa chỉ
                    IP hay thiết bị lạ đăng nhập và sử dụng tài khoản của quý
                    khách
                  </Typography>
                </Grid>
                <Grid item>
                  <RadioGroup
                    row
                    aria-label="position"
                    name="position"
                    defaultValue="top"
                  >
                    <FormControlLabel
                      value="on"
                      control={<Radio color="primary" />}
                      label="Bật"
                      labelPlacement="start"
                    />
                    <FormControlLabel
                      value="off"
                      control={<Radio color="primary" />}
                      label="Tắt"
                      labelPlacement="start"
                    />
                  </RadioGroup>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Suspense>
  );
};

export default Account;
