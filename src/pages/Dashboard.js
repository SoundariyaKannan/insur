import React, { useContext } from "react";
import Header from "./Header";
import DependentPopup from "./DependentPopup";
import DependentList from "./DependentList";
import UserContext from "../context/UserContext";
import {
	Card,
	CardContent,
	Grid,
	Typography,
	Button,
	Dialog,
} from "@mui/material";

const Dashboard = () => {
	const { user, dependents, reset } = useContext(UserContext);
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		reset();
		setOpen(false);
	};
	return (
		<>
			<Dialog open={open} onClose={handleClose}>
				<DependentPopup closePopup={handleClose} />
			</Dialog>
			<Header />
			<Grid
				container
				style={{
					paddingTop: "50px",
					paddingLeft: "50px",
					paddingRight: "50px",
				}}
			>
				<Card sx={{ height: "150px" }}>
					<CardContent>
						<Typography>Hi {user && user.fName},</Typography>
						<br />
						<Typography>Please add dependent details</Typography>
						<Button
							variant="contained"
							sx={{ marginTop: "10px" }}
							onClick={handleClickOpen}
						>
							Add dependent
						</Button>
					</CardContent>
				</Card>
				<Grid container sx={{ marginTop: "50px" }}>
					{dependents && (
						<DependentList
							dependents={dependents}
							openPopup={handleClickOpen}
						/>
					)}
				</Grid>
			</Grid>
		</>
	);
};

export default Dashboard;
