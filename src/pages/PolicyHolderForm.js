import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import { Button, Grid, Typography } from "@mui/material";
import { FormInputField } from "../components/UI/Styled";
import {
	FormControl,
	FormControlLabel,
	Radio,
	FormLabel,
	RadioGroup,
} from "@mui/material";

const PolicyHolderForm = () => {
	const [userDetails, setUserDetails] = useState({
		fName: "",
		lName: "",
		mNum: "",
		email: "",
		gender: "",
		age: "",
	});

	const { addUser } = useContext(UserContext);

	const navigate = useNavigate();

	const handleChange = (e) => {
		setUserDetails({
			...userDetails,
			[e.target.name]: e.target.value,
		});
	};
	const handleSubmit = () => {
		addUser(userDetails);
		navigate("/dashboard");
	};
	return (
		<Grid container justifyContent="center">
			<Typography variant="h5">
				Get insured from the comfort of your home
			</Typography>
			<Grid
				container
				sx={{
					width: "55%",
					marginTop: "50px",
				}}
			>
				<Grid container justifyContent="space-between">
					<Grid item>
						<FormInputField
							placeholder="First Name"
							type="text"
							variant="outlined"
							disableUnderline={true}
							name="fName"
							onChange={(e) => handleChange(e)}
						/>
					</Grid>
					<Grid item>
						<FormInputField
							placeholder="Last Name"
							type="text"
							variant="outlined"
							name="lName"
							disableUnderline={true}
							onChange={(e) => handleChange(e)}
						/>
					</Grid>
				</Grid>
				<Grid container style={{ width: "100%" }}>
					<Grid item style={{ width: "100%" }}>
						<FormInputField
							placeholder="Email"
							type="text"
							variant="outlined"
							style={{ width: "100%" }}
							disableUnderline={true}
							name="email"
							onChange={(e) => handleChange(e)}
						/>
					</Grid>
				</Grid>
				<Grid container style={{ width: "100%" }}>
					<Grid item style={{ width: "100%" }}>
						<FormInputField
							placeholder="Mobile Number"
							type="text"
							variant="outlined"
							style={{ width: "100%", color: "636769" }}
							disableUnderline={true}
							name="mNum"
							color="primary"
							onChange={(e) => handleChange(e)}
							inputProps={{
								inputMode: "numeric",
								pattern: "[0-9]*",
							}}
						/>
					</Grid>
				</Grid>
				<Grid container>
					<FormControl sx={{ flexDirection: "row", alignItems: "center" }}>
						<FormLabel
							id="demo-row-radio-buttons-group-label"
							sx={{ marginRight: "20px" }}
						>
							Gender
						</FormLabel>
						<RadioGroup
							row
							aria-labelledby="demo-row-radio-buttons-group-label"
							name="gender"
							onChange={(e) => handleChange(e)}
						>
							<FormControlLabel
								value="female"
								control={<Radio />}
								label="Female"
							/>
							<FormControlLabel value="male" control={<Radio />} label="Male" />
							<FormControlLabel
								value="other"
								control={<Radio />}
								label="Other"
							/>
						</RadioGroup>
					</FormControl>
				</Grid>
				<Grid container style={{ width: "100%" }}>
					<Grid item style={{ width: "100%" }}>
						<FormInputField
							placeholder="Age"
							type="number"
							variant="outlined"
							style={{ width: "100%", color: "636769" }}
							disableUnderline={true}
							color="primary"
							name="age"
							onChange={(e) => handleChange(e)}
						/>
					</Grid>
				</Grid>
				<Grid container style={{ width: "100%" }}>
					<Grid item style={{ width: "100%" }}>
						<Button
							variant="contained"
							sx={{ width: "100%" }}
							onClick={handleSubmit}
						>
							Submit
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default PolicyHolderForm;
