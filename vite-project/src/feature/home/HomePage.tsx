import { Box, Typography } from "@mui/material";
import Slider from "react-slick";
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import FooterPage from "../../app/layout/Footer";
import AboutPage from "../about/AboutPage";
import ContactPage from "../contact/ContactPage";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function HomePage() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
        <div style={{paddingTop:'63px'}}>
            <AutoPlaySwipeableViews {...settings}>
                <div>
                    <img src="/images/hero1.jpg" alt="hero" style={{display: 'block', width: '100%', maxHeight: 500}} />
                </div>
                <div>
                    <img src="/images/hero2.jpg" alt="hero" style={{display: 'default', width: '100%', height:'100%'}} />
                </div>
                <div>
                    <img src="/images/hero5.jpg" alt="hero" style={{display: 'block', width: '100%', maxHeight: 500}} />
                </div>
            </AutoPlaySwipeableViews>

            <Box display='flex' justifyContent='center'sx={{p:4}}>
                <Typography variant="h2">
                    Welcome to Bini Merch!
                </Typography>
            </Box>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}