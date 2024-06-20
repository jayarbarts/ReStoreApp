import { Alert, AlertTitle, Box, Button, ButtonGroup, Container, List, ListItem, ListItemText, MobileStepper, Paper, Typography, useTheme } from "@mui/material";
import agent from "../../app/api/agent";
import Slider from "react-slick";
import { useState } from "react";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

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
    // const [validationErrors, setValidationErrors] = useState<string[]>([]);

    // function getValidationError() {
    //     agent.TestErrors.getValidationError()
    //         .then(() => console.log('should not see this'))
    //         .catch(error => setValidationErrors(error))
    // }
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step: number) => {
        setActiveStep(step);
    };
    return (
        <div style={{ paddingTop: '80px' }}>
            <Container>
                <Typography gutterBottom variant="h3">About Bini</Typography>
                <Box sx={{ maxWidth: 400, flexGrow: 1, margin: 'auto' }}>
                    <Paper
                        square
                        elevation={0}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            height: 50,
                            pl: 2,
                            bgcolor: 'background.default',
                        }}
                    >
                        <Typography style={{ margin: 'auto' }} variant="h5">{images[activeStep].label}</Typography>
                    </Paper>
                    <AutoPlaySwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={activeStep}
                        onChangeIndex={handleStepChange}
                        enableMouseEvents
                    >
                        {images.map((step, index) => (
                            <div key={step.label}>
                                {Math.abs(activeStep - index) <= 8 ? (
                                    <Box
                                        component="img"
                                        sx={{
                                            height: '85%',
                                            display: 'block',
                                            overflow: 'hidden',
                                            width: '85%',
                                            margin: 'auto'
                                        }}
                                        src={step.imgPath}
                                        alt={step.label}
                                    />
                                ) : null}
                            </div>
                        ))}
                    </AutoPlaySwipeableViews>
                    <MobileStepper
                        steps={maxSteps}
                        position="static"
                        activeStep={activeStep}
                        nextButton={
                            <Button
                                size="small"
                                onClick={handleNext}
                                disabled={activeStep === maxSteps - 1}
                            >
                                Next
                                {theme.direction === 'rtl' ? (
                                    <KeyboardArrowLeft />
                                ) : (
                                    <KeyboardArrowRight />
                                )}
                            </Button>
                        }
                        backButton={
                            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                {theme.direction === 'rtl' ? (
                                    <KeyboardArrowRight />
                                ) : (
                                    <KeyboardArrowLeft />
                                )}
                                Back
                            </Button>
                        }
                    />
                </Box>
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