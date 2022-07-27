import React from "react";
import { AppBar, IconButton, Typography, Toolbar, Button } from "@mui/material";
import { Menu, MenuItem } from "@mui/material";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
	const [auth, setAuth] = React.useState(true);
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleChange = (event) => {
		setAuth(event.target.checked);
	};

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<div>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
					></IconButton>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						Insur.
					</Typography>

					<div>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleMenu}
							color="inherit"
						>
							<FaUserCircle />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorEl}
							anchorOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							open={Boolean(anchorEl)}
							onClose={handleClose}
						>
							<MenuItem onClick={handleClose}>Profile</MenuItem>
						</Menu>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Header;
