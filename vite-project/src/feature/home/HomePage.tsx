import { Box, Typography } from "@mui/material";
import Slider from 'react-slick';

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
            <Slider {...settings}>
                <div>
                    <img src="/images/hero1.jpg" alt="hero" style={{display: 'block', width: '100%', maxHeight: 500}} />
                </div>
                <div>
                    <img src="/images/hero2.jpg" alt="hero" style={{display: 'default', width: '100%', height:'100%'}} />
                </div>
                <div>
                    <img src="/images/hero5.jpg" alt="hero" style={{display: 'block', width: '100%', maxHeight: 500}} />
                </div>
            </Slider>

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