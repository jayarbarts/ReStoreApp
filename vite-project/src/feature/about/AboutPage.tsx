import { Box, Container, Paper, Typography } from "@mui/material";
import Slider from 'react-slick';

const images = [
    {
        label: 'BINI',
        imgPath:
            "/images/bini_hero6.webp",
    },
    {
        label: 'Aiah',
        imgPath:
            "/images/bini_aiah.webp",
    },
    {
        label: 'Colet',
        imgPath:
            "/images/bini_colet.webp",
    },
    {
        label: 'Gwen',
        imgPath:
            "/images/bini_gwen.webp",
    },
    {
        label: 'Jhoanna',
        imgPath:
            "/images/bini_jho.webp",
    },
    {
        label: 'Maloi',
        imgPath:
            "/images/bini_maloi.webp",
    },
    {
        label: 'Mikha',
        imgPath:
            "/images/bini_mikha.webp",
    },
    {
        label: 'Sheena',
        imgPath:
            "/images/bini_sheena.webp",
    },
    {
        label: 'Stacey',
        imgPath:
            "/images/bini_stacey.webp",
    }
];

export default function AboutPage() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    // const [validationErrors, setValidationErrors] = useState<string[]>([]);

    // function getValidationError() {
    //     agent.TestErrors.getValidationError()
    //         .then(() => console.log('should not see this'))
    //         .catch(error => setValidationErrors(error))
    // }
    // const theme = useTheme();
    // const [activeStep, setActiveStep] = useState(0);
    // const maxSteps = images.length;

    // const handleNext = () => {
    //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // };

    // const handleBack = () => {
    //     setActiveStep((prevActiveStep) => prevActiveStep - 1);
    // };

    // const handleStepChange = (step: number) => {
    //     setActiveStep(step);
    // };
    return (
        <div style={{ paddingTop: '80px' }}>
            <Container>
                <Typography gutterBottom variant="h3">About Bini</Typography>
                <Box sx={{ maxWidth: 400, flexGrow: 1, margin: 'auto' }}>
                    <Slider {...settings}>
                        {images.map((step) => (
                            <>
                                <Paper
                                    square
                                    elevation={0}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        height: 50,
                                        pl: 2,
                                        bgcolor: 'background.default',
                                        borderRadius: 2,
                                        boxShadow: 2
                                    }}
                                >
                                    <Typography style={{ margin: 'auto' }} variant="h5">{step.label}</Typography>
                                </Paper>
                                <div key={step.label}>
                                    <Box
                                        component="img"
                                        sx={{
                                            height: '85%',
                                            display: 'block',
                                            overflow: 'hidden',
                                            width: '85%',
                                            margin: 'auto',
                                            boxShadow: 2
                                        }}
                                        src={step.imgPath}
                                        alt={step.label}
                                    />
                                </div>
                            </>
                        ))}
                    </Slider>
                </Box>
                <br></br>
                <br></br>
                <p>Filipino pop phenomenon BINI features 8 multi-talented members, Aiah, Colet, Maloi, Gwen, Stacey, Mikha, Jhoanna, and Sheena. The girls have quickly become the biggest female Filipino artist in history, and second biggest artist overall in the Philippines, holding both the #1 & #2 spots on the top Filipino music charts simultaneously with the hits “Salamin, Salamin” and “Pantropiko.”</p>
                <p>BINI's sound is shaped by homegrown artists and global sensations alike. On the heels of their unprecedented growth in socials and in streaming listenership (30M +), the girls recently sold out their “BINIverse” tour in record-breaking time, and have been heralded as one of Teen Vogue's 2024 Girl Groups to watch!</p>
                <br></br>
                <Typography gutterBottom variant="h3">About the Shop</Typography>
                <p>This is the unofficial online shop BINI merchandize especially made for the BLOOMS, Bini's official fan group. Check out for the latest products available.</p>
                {/* <ButtonGroup fullWidth>
                <Button variant="contained" onClick={() => agent.TestErrors.get400Error().catch(error => console.log(error))}>Test 400 Error</Button>
                <Button variant="contained" onClick={() => agent.TestErrors.get401Error().catch(error => console.log(error))}>Test 401 Error</Button>
                <Button variant="contained" onClick={() => agent.TestErrors.get404Error().catch(error => console.log(error))}>Test 404 Error</Button>
                <Button variant="contained" onClick={() => agent.TestErrors.get500Error().catch(error => console.log(error))}>Test 500 Error</Button>
                <Button variant="contained" onClick={getValidationError}>Test Validation Error</Button>
            </ButtonGroup>
            {validationErrors.length > 0 && 
                <Alert severity="error">
                    <AlertTitle>Validation Errors</AlertTitle>
                    <List>
                        {validationErrors.map(error => (
                            <ListItem key={error}>
                                <ListItemText>{error}</ListItemText>
                            </ListItem>
                        )
                        )}
                    </List>
                </Alert>
            } */}
                <br></br>
                <br></br>
                <br></br>
            </Container>
        </div>
    )
}