import React, { Suspense } from "react";
const Header = React.lazy(() => import("../common/Header"));
const Footer = React.lazy(() => import("../common/Footer"));
const Avatar = React.lazy(() => import("./common/AvatarSection"));
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
const EmployeeManagement = () => {
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
                Quản lý nhân viên
              </Typography>
            </Grid>
            <Grid item md={12}></Grid>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Suspense>
  );
};

export default EmployeeManagement;
