import { Button, Menu, Fade, MenuItem } from "@mui/material";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/configureStore";
import { signOut } from "../../feature/account/accountSlice";
import { clearBasket } from "../../feature/basket/basketSlice";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function SignedInMenu() {
    const dispatch = useAppDispatch();
    const {user} = useAppSelector((state) => state.account);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: any) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <>
        <Button 
            color="inherit"
            onClick={handleClick}
            sx={{typography: 'h6'}}
        >
          {user?.email}
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={handleClose}>Profile <i style={{fontSize:'12px'}}>(coming soon...)</i></MenuItem>
          <MenuItem component={Link} to='/orders'>My orders</MenuItem>
          <MenuItem onClick={() => {
            dispatch(signOut());
            dispatch(clearBasket());
            toast.success("You have successfully logged out.")
          }}>Logout</MenuItem>
        </Menu>
      </>
    );
}