import React, { Suspense } from "react";
const Header = React.lazy(() => import("../common/Header"));
const Footer = React.lazy(() => import("../common/Footer"));
const Avatar = React.lazy(() => import("./common/AvatarSection"));
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import avatar from "../../img/avatar-img.jpg";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Select from "@material-ui/core/Select";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import DeleteIcon from "@material-ui/icons/Delete";


const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  formItem: {
    margin: "5px 0",
  },
  textHeader: {
    color: "#FF3366",
    fontWeight: 600,
  },
  navLink: {
    textAlign: "center",
    backgroundColor: "#FF3366",
    color: "#fff",
    "&:hover": {
      opacity: 0.8,
      backgroundColor: "#FF3366",
    },
    form: {},
  },
  selectOption: {
    width: "100%",
  },
  button: {
    textAlign: "center",
    backgroundColor: "#FF3366",
    color: "#fff",
    "&:hover": {
      opacity: 0.8,
      backgroundColor: "#FF3366",
    },
  },
  buttonDelete: {
    textAlign: "center",
    backgroundColor: "grey",
    width: "150px",
    "&:hover": {
      backgroundColor: "grey",
      opacity: 0.8,
    },
  },
  subTitle: {
    fontSize: "0.83rem",
  },
  textArea: {
    width: "91%",
  },
  hrLine: {
    width: "91%",
    color: "#000",
    marginBottom: "5px"
  }
}));

const CompanyInformation = () => {
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
              fontSize: "2rem"
            }}
          >
            <Grid item md={12} className={classes.textHeader}>
              <Typography
                component="h3"
                variant="h3"
                style={{
                  marginTop: 5,
                  paddingBottom: 5,
                  marginBottom: 5,
                }}
              >
                Thông tin công ty
              </Typography>
              <Divider className={classes.hrLine}/>
            </Grid>
            <Grid container item>
              <Grid container item md={6}>
                <Grid item md={10} className={classes.formItem}>
                  <Typography component="h2" variant="subtitle1">
                    Tên công ty:
                  </Typography>
                </Grid>
                <Grid item md={10} className={classes.formItem}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Tên công ty"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item md={10} className={classes.formItem}>
                  <Typography component="h2" variant="subtitle1">
                    Website:
                  </Typography>
                </Grid>
                <Grid item md={10} className={classes.formItem}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Website"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item md={10} className={classes.formItem}>
                  <Typography component="h2" variant="subtitle1">
                    Lĩnh vực hoạt động:
                  </Typography>
                </Grid>
                <Grid item md={10} className={classes.formItem}>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    fullWidth
                    //value={age}
                    // onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </Grid>{" "}
              </Grid>

              <Grid container item md={6}>
                <Grid item md={10} className={classes.formItem}>
                  <Typography component="h2" variant="subtitle1">
                    Email:
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
                    Quy mô công ty:
                  </Typography>
                </Grid>
                <Grid item md={10} className={classes.selectOption}>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    fullWidth
                    //value={age}
                    // onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </Grid>{" "}
                <Grid item md={10} className={classes.formItem}>
                  <Typography component="h2" variant="subtitle1">
                    Mã số thuế:
                  </Typography>
                </Grid>
                <Grid item md={10} className={classes.formItem}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Mã số thuế"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
              </Grid>
              <Grid container item className={classes.formItem}>
                <Grid item md={12}>
                  <Typography component="h2" variant="h6">
                    Giới thiệu công ty:
                  </Typography>
                </Grid>
                <Grid item md={12} fullWidth>
                  <TextareaAutosize
                    className={classes.textArea}
                    maxRows={10}
                    minRows={6}
                    // aria-label="maximum height"
                    // placeholder="Maximum 4 rows"
                    defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                  ut labore et dolore magna aliqua."
                  />
                </Grid>
              </Grid>
              <Grid container item className={classes.formItem}>
                <Grid item md={12}>
                  <Typography component="h2" variant="h6">
                    Logo công ty:
                  </Typography>
                </Grid>
                <Grid item md={12}>
                  <input
                    accept="image/*"
                    className={classes.input}
                    style={{ display: "none" }}
                    id="raised-button-file"
                    multiple
                    type="file"
                  />
                  <label htmlFor="raised-button-file">
                    <Button
                      variant="raised"
                      component="span"
                      className={classes.button}
                    >
                      Chọn logo
                    </Button>
                  </label>
                  <Typography
                    component="h5"
                    variant="subtitle1"
                    className={classes.subTitle}
                  >
                    Dạng file ảnh .jpg, .gif, .png, dung lượng 300KB và kích
                    thước tối thiểu 300x300 pixel
                  </Typography>
                </Grid>
              </Grid>
              <Grid container item className={classes.formItem}>
                <Grid item md={12}>
                  <Typography component="h2" variant="h6">
                    Ảnh banner công ty:
                  </Typography>
                </Grid>
                <Grid item md={12}>
                  <input
                    accept="image/*"
                    className={classes.input}
                    style={{ display: "none" }}
                    id="raised-button-file"
                    multiple
                    type="file"
                  />
                  <label htmlFor="raised-button-file">
                    <Button
                      variant="raised"
                      component="span"
                      className={classes.button}
                    >
                      Chọn banner khác
                    </Button>
                  </label>
                </Grid>
              </Grid>
              <Grid container item className={classes.formItem}>
                <Grid item md={3}></Grid>
                <Grid item md={3}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                  >
                    Lưu thông tin
                  </Button>
                </Grid>
                <Grid item md = {3}>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.buttonDelete}
                    startIcon={<DeleteIcon />}
                  >
                    Hủy
                  </Button>
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

export default CompanyInformation;
