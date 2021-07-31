import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import { Link as Link2 } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import MenuItem from "@material-ui/core/MenuItem";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link2 color="inherit" href="https://material-ui.com/">
        Your Website
      </Link2>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  row: {
    display: "flex",
    alignItems: "center",
  },
}));
const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

export default function Signup() {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState("");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Đăng ký
        </Typography>
        <form className={classes.form} noValidate>
          <Typography
            component="h2"
            variant="h5"
            style={{
              paddingBottom: 5,
              marginBottom: 5,
            }}
          >
            Thông tin đăng nhập
          </Typography>
          <Grid container spacing={2}>
            <Grid item container className={classes.row}>
              <Grid item md={3}>
                <Typography component="h2" variant="subtitle1">
                  Email đăng nhập :
                </Typography>
              </Grid>
              <Grid item xs={12} md={9}>
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
            <Grid item container className={classes.row}>
              <Grid item md={3}>
                <Typography component="h2" variant="subtitle1">
                  Mật khẩu :
                </Typography>
              </Grid>
              <Grid item xs={12} md={9}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Mật khẩu"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>
            <Grid item container className={classes.row}>
              <Grid item md={3}>
                <Typography component="h2" variant="subtitle1">
                  Nhập lại mật khẩu :
                </Typography>
              </Grid>
              <Grid item xs={12} md={9}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="retypePassword"
                  label="Nhập lại mật khẩu"
                  type="password"
                  id="retypePassword"
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>
          </Grid>
          <Typography
            component="h2"
            variant="h5"
            style={{
              margin: "20px 0 20px 0",
            }}
          >
            Thông tin nhà tuyển dụng
          </Typography>

          <Grid container spacing={2}>
            <Grid item container className={classes.row}>
              <Grid item md={3}>
                <Typography component="h2" variant="subtitle1">
                  Họ và tên :
                </Typography>
              </Grid>
              <Grid item xs={12} md={9}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="companyName"
                  label="Họ và tên"
                  id="companyName"
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>
            <Grid item container className={classes.row}>
              <Grid item md={3}>
                <Typography component="h2" variant="subtitle1">
                  Số điện thoại :
                </Typography>
              </Grid>
              <Grid item xs={12} md={9}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="number"
                  label="Số điện thoại"
                  type="password"
                  id="number"
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>
            <Grid item container className={classes.row}>
              <Grid item md={3}>
                <Typography component="h2" variant="subtitle1">
                  Giới tính :
                </Typography>
              </Grid>
              <Grid item xs={12} md={9}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="gender"
                  label="Giới tính"
                  type="password"
                  id="gender"
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>
            <Grid item container className={classes.row}>
              <Grid item md={3}>
                <Typography component="h2" variant="subtitle1">
                  Công ty :
                </Typography>
              </Grid>
              <Grid item xs={12} md={9}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="company"
                  label="Công ty"
                  type="password"
                  id="company"
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>
            <Grid item container className={classes.row}>
              <Grid item md={3}>
                <Typography component="h2" variant="subtitle1">
                  Địa điểm làm việc :
                </Typography>
              </Grid>
              <Grid item xs={12} md={9}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="location"
                  label="Địa điểm làm việc"
                  type="password"
                  id="location"
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>
            <Grid item container className={classes.row}>
              <Grid item md={3}>
                <Typography component="h2" variant="subtitle1">
                  Lĩnh vực hoạt động :
                </Typography>
              </Grid>
              <Grid item xs={12} md={9}>
                <TextField
                  variant="outlined"
                  id="jobField"
                  select
                  fullWidth
                  label="Lĩnh vực hoạt động"
                  onChange={handleChange}
                  value={currency}
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>
            <Grid item container className={classes.row}>
              <Grid item md={3}>
                <Typography component="h2" variant="subtitle1">
                  Quy mô nhân sự :
                </Typography>
              </Grid>
              <Grid item xs={12} md={9}>
                <TextField
                  variant="outlined"
                  id="workforceRange"
                  select
                  fullWidth
                  label="Quy mô nhân sự"
                  onChange={handleChange}
                  value={currency}
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>
            <Grid item container className={classes.row}>
              <Grid item md={3}>
                <Typography component="h2" variant="subtitle1">
                  Vị trí công tác :
                </Typography>
              </Grid>
              <Grid item xs={12} md={9}>
                <TextField
                  variant="outlined"
                  id="workplace"
                  select
                  fullWidth
                  label="Vị trí công tác"
                  onChange={handleChange}
                  value={currency}
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>
            <Grid item container className={classes.row}>
              <Grid item md={3}>
                <Typography component="h2" variant="subtitle1">
                  Vị trí tuyển dụng quan tâm :
                </Typography>
              </Grid>
              <Grid item xs={12} md={9}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="jobPosition"
                  label="Vị trí tuyển dụng quan tâm"
                  type="password"
                  id="jobPosition"
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Tôi đồng ý với điều khoản dịch vụ"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Đăng ký
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/dang-nhap">Đã có tài khoản? Đăng nhập ngay</Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
