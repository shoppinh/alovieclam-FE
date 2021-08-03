import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import avatar from "../../../img/avatar-img.jpg";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
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
  },
}));
const AvatarSection = () => {
  const classes = useStyles();

  return (
    <Grid container item md={4} style={{ paddingTop: 0 }}>
      <Grid
        item
        md={12}
        style={{
          border: "2px solid black",
        }}
      >
        <img src={avatar} alt="" style={{ width: "100%" }} />
      </Grid>
      <Grid item md={12}>
        <div className={classes.root}>
          <List component="nav" aria-label="main mailbox folders">
            <ListItem
              button
              component="a"
              href="/tuyen-dung/tai-khoan"
              className={classes.navLink}
            >
              <ListItemText primary="Thông tin tài khoản" />
            </ListItem>
            <Divider />
            <ListItem
              button
              component="a"
              href="/tuyen-dung/tai-khoan/thong-tin-cong-ty"
              className={classes.navLink}
            >
              <ListItemText primary="Thông tin công ty" />
            </ListItem>
            <Divider />
            <ListItem
              button
              component="a"
              href="/tuyen-dung/tai-khoan/quan-ly-nhan-vien"
              className={classes.navLink}
            >
              <ListItemText primary="Quản lý nhân viên" />
            </ListItem>
            <Divider />
            <ListItem
              button
              component="a"
              href="/tuyen-dung/tai-khoan/giay-phep"
              className={classes.navLink}
            >
              <ListItemText primary="Giấy phép kinh doanh" />
            </ListItem>
            <Divider />
          </List>
        </div>
      </Grid>
    </Grid>
  );
};

export default AvatarSection;
