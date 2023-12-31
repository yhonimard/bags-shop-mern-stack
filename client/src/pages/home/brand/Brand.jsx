import { Box, Grid } from "@mui/material";
import Slider from "react-slick";
import nikeImg from "../../../assets/brand/Nike.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Brand = () => {
  return (
    <Box
      px={2}
      py={5}
      borderTop="1px solid #D0D5DD"
      borderBottom="1px solid #D0D5DD"
    >
      <Slider
        autoplay={true}
        dots={true}
        infinite={true}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        arrows={false}
      >
        <div>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={4} lg={2}>
              <img
                width={100}
                src={nikeImg}
                alt=""
                style={{ display: "block", margin: "auto" }}
              />
            </Grid>
            <Grid item xs={6} sm={4} lg={2}>
              <img
                width={100}
                src={nikeImg}
                alt=""
                style={{ display: "block", margin: "auto" }}
              />
            </Grid>
            <Grid item xs={6} sm={4} lg={2}>
              <img
                width={100}
                src={nikeImg}
                alt=""
                style={{ display: "block", margin: "auto" }}
              />
            </Grid>
            <Grid item xs={6} sm={4} lg={2}>
              <img
                width={100}
                src={nikeImg}
                alt=""
                style={{ display: "block", margin: "auto" }}
              />
            </Grid>
            <Grid item xs={6} sm={4} lg={2}>
              <img
                width={100}
                src={nikeImg}
                alt=""
                style={{ display: "block", margin: "auto" }}
              />
            </Grid>
            <Grid item xs={6} sm={4} lg={2}>
              <img
                width={100}
                src={nikeImg}
                alt=""
                style={{ display: "block", margin: "auto" }}
              />
            </Grid>
          </Grid>
        </div>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={4} lg={2}>
              <img
                width={100}
                src={nikeImg}
                alt=""
                style={{ display: "block", margin: "auto" }}
              />
            </Grid>
            <Grid item xs={6} sm={4} lg={2}>
              <img
                width={100}
                src={nikeImg}
                alt=""
                style={{ display: "block", margin: "auto" }}
              />
            </Grid>
            <Grid item xs={6} sm={4} lg={2}>
              <img
                width={100}
                src={nikeImg}
                alt=""
                style={{ display: "block", margin: "auto" }}
              />
            </Grid>
            <Grid item xs={6} sm={4} lg={2}>
              <img
                width={100}
                src={nikeImg}
                alt=""
                style={{ display: "block", margin: "auto" }}
              />
            </Grid>
            <Grid item xs={6} sm={4} lg={2}>
              <img
                width={100}
                src={nikeImg}
                alt=""
                style={{ display: "block", margin: "auto" }}
              />
            </Grid>
            <Grid item xs={6} sm={4} lg={2}>
              <img
                width={100}
                src={nikeImg}
                alt=""
                style={{ display: "block", margin: "auto" }}
              />
            </Grid>
          </Grid>
        </div>
      </Slider>
    </Box>
  );
};

export default Brand;
