import { Avatar, Box, Container, Grid, Paper, TextField, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { EmailOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function ContactPage() {
    // const dispatch = useAppDispatch();
    // const {data, title} = useAppSelector(state => state.counter);
    // const navigate = useNavigate();
    // const location = useLocation();
    // const dispatch = useAppDispatch();
    const { register, handleSubmit, formState: { isSubmitting, errors, isValid } } = useForm({
        mode: 'onTouched'
    });

    async function submitForm(data: FieldValues) {
        try {
            console.log(data)
            toast.success("Your message is successfully sent.")
        } catch (error: any) {
            console.log(error)
        }
    }
    return (
        <>
        <div style={{ paddingTop: '80px' }}>
            <Container component={Paper} maxWidth="sm" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 4 }}>
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <EmailOutlined />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Contact Us
                </Typography>
                <p style={{alignItems:'center'}}>
                    If you have inquiries, suggestions, and concerns, feel free to message us.
                </p>
                <Box component="form" onSubmit={handleSubmit(submitForm)} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        fullWidth
                        label="Subject"
                        size="small"
                        {...register('subject', { required: 'Subject is required' })}
                        error={!!errors.subject}
                        helperText={errors?.subject?.message as string}
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        size="small"
                        label="Full Name"
                        {...register('fullname', { required: 'Full name is required' })}
                        error={!!errors.fullname}
                        helperText={errors?.fullname?.message as string}
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        size="small"
                        label="Email"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/,
                                message: 'Not a valid email address.'
                            }
                        })}
                        error={!!errors.email}
                        helperText={errors?.email?.message as string}
                    />
                    <TextField
                        margin="normal"
                        label="Your Message"
                        fullWidth
                        minRows={5}
                        {...register('message', { required: 'Message is required' })}
                        error={!!errors.message}
                        helperText={errors?.message?.message as string}
                    />
                    <LoadingButton
                        loading={isSubmitting}
                        disabled={!isValid}
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Submit Message
                    </LoadingButton>
                    <Grid container>
                        <Grid item>
                            <Link to='/signup'>
                                {"Don't have an account? Sign up now."}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </div>
        <br></br>
        <br></br>
        </>
        // <div style={{paddingTop:'80px'}}>
        //     <Typography variant='h2'>
        //         {title}
        //     </Typography>
        //     <Typography variant='h5'>
        //         The data is: {data}
        //     </Typography>
        //     <ButtonGroup>
        //         <Button onClick={() => dispatch(decrement(1))} variant="contained" color="error">Decrement</Button>
        //         <Button onClick={() => dispatch(increment(1))} variant="contained" color="primary">Increment</Button>
        //         <Button onClick={() => dispatch(increment(5))} variant="contained" color="secondary">Increment by 5</Button>
        //     </ButtonGroup> 
        // </div>
    )
}