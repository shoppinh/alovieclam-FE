import React, { Suspense } from "react";
const Header = React.lazy(() => import("../common/Header"));
const Footer = React.lazy(() => import("../common/Footer"));
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import avatar from "../../img/avatar-img.jpg";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  navLink: {
    textAlign: "center",
    backgroundColor: "#FF3366",
    color: "#fff",
    "&:hover": {
      backgroundColor: "grey",
    },
    form: {},
  },
}));
const Account = () => {
  const classes = useStyles();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <Container component="main" maxWidth="md" style={{ paddingTop: 10 }}>
        <Grid container spacing={4}>
          <Grid container item md={4}>
            <Grid item md={12}>
              <img src={avatar} alt="" style={{ width: "100%" }} />
            </Grid>
            <Grid item md={12}>
              <div className={classes.root}>
                <List component="nav" aria-label="main mailbox folders">
                  <ListItem
                    button
                    component="a"
                    href="#"
                    className={classes.navLink}
                  >
                    <ListItemText primary="Thông tin tài khoản" />
                  </ListItem>
                  <Divider />
                  <ListItem
                    button
                    component="a"
                    href="#"
                    className={classes.navLink}
                  >
                    <ListItemText primary="Thông tin công ty" />
                  </ListItem>
                  <Divider />
                  <ListItem
                    button
                    component="a"
                    href="#"
                    className={classes.navLink}
                  >
                    <ListItemText primary="Quản lý nhân viên" />
                  </ListItem>
                  <Divider />
                  <ListItem
                    button
                    component="a"
                    href="#"
                    className={classes.navLink}
                  >
                    <ListItemText primary="Giấy phép kinh doanh" />
                  </ListItem>
                  <Divider />
                </List>
              </div>
            </Grid>
          </Grid>
          <Grid item md={8}>
            <form className={classes.form}>
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
            </form>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Suspense>
  );
};

export default Account;
