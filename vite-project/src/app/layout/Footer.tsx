import { AppBar, Button, Link, List, ListItem, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const midLinks = [
    { title: 'catalog', path: '/catalog' },
    { title: 'about', path: '/about' },
    { title: 'contact', path: '/contact' },
];

const socials = [
    {
        title: "Facebook",
        path: "https://facebook.com",
    },
    {
        title: "Instagram",
        path: "https://instagram.com",
    },
    {
        title: "Twitter",
        path: "https://www.twitter.com",
    },
    {
        title: "Youtube",
        path: "https://youtube.com",
    }
];

const navStyles = {
    color: 'inherit',
    textDecoration: 'none',
    typography: 'h6',
    '&:hover': {
        color: 'grey.500'
    },
    '&.active': {
        color: 'text.secondary'
    }
}

interface Props {
    darkMode: boolean;
}

export default function Footer({ darkMode }: Props) {
    return (
        <AppBar position="static" sx={{ top: 'auto', bottom: 0 }}>
            <Toolbar sx={{ display: 'grid', justifyContent: 'space-between', alignItems: 'center', backgroundColor: !darkMode ? '#90d5db' : '#2b2b2b' }}>

                <List sx={{ display: 'flex' }}>
                    <Button size="large"
                        component={NavLink}
                        to={'/'}
                        style={{ width: '400px' }}>
                        {!darkMode ? (
                            <img src="/images/bini_logo.png" alt="logo" height='90px' width='90px' />) : (
                            <img src="/images/bini_logo_white.webp" alt="logo" height='90px' width='90px' />
                        )}
                    </Button>
                    <List sx={{ display: 'grid' }}>
                        <List sx={{ display: 'flex', margin: 'auto' }}>
                            {midLinks.map(({ title, path }) => (
                                <ListItem
                                    style={{ fontSize: '15px' }}
                                    component={NavLink}
                                    to={path}
                                    key={path}
                                    sx={navStyles}
                                >
                                    {title.toUpperCase()}
                                </ListItem>
                            ))}
                        </List>
                        <List sx={{ display: 'flex', margin: 'auto' }}>
                            {socials.map(({ title, path }) => (
                                <ListItem
                                    key={path}
                                >
                                    <Link underline="none" href={path} target="_blank" rel="noreferrer"
                                        style={{ fontSize: '15px' }} sx={navStyles}>{title.toUpperCase()}</Link>
                                </ListItem>
                            ))}
                        </List>

                        <Typography variant="h6" margin='auto' fontSize='12px' align="center" width='100%'>
                            © 2024 Bini Merch. All rights reserved.
                        </Typography>
                    </List>
                </List>
            </Toolbar>
        </AppBar>
    )
}