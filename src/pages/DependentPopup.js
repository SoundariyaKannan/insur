import React, { useState, useContext, useEffect } from "react";
import { Button, Grid, Typography } from "@mui/material";
import { FormInputField } from "../components/UI/Styled";
import {
	styled,
	FormControl,
	FormControlLabel,
	Radio,
	FormLabel,
	RadioGroup,
} from "@mui/material";
import UserContext from "../context/UserContext";

const DependentPopup = ({ closePopup }) => {
	const [dependent, setDependent] = useState({
		fName: null,
		lName: "",
		gender: "",
		age: "",
		illness: "",
	});
	const { addDependent, currentDependent, editDependent } =
		useContext(UserContext);

	useEffect(() => {
		if (currentDependent) {
			setDependent(currentDependent);
		}
	}, [currentDependent]);

	const handleChange = (e) => {
		setDependent({
			...dependent,
			[e.target.name]: e.target.value,
		});
	};

	const handleAddDependent = () => {
		addDependent(dependent);
	};

	return (
		<>
			<Grid container sx={{ width: "100%" }} justifyContent="center">
				<Grid
					container
					justifyContent="center"
					sx={{
						width: "80%",
						margin: "30px auto",
					}}
				>
					<Typography
						variant="h5"
						textAlign="center"
						sx={{ marginBottom: "20px" }}
					>
						{currentDependent ? "Edit" : "Add"} Dependant Details
					</Typography>
					<Grid container justifyContent="space-between">
						<Grid item>
							<FormInputField
								placeholder="First Name"
								type="text"
								variant="outlined"
								disableUnderline={true}
								name="fName"
								onChange={(e) => handleChange(e)}
								value={dependent.fName}
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
								value={dependent.lName}
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
									checked={dependent.gender === "female"}
								/>
								<FormControlLabel
									value="male"
									control={<Radio />}
									label="Male"
									checked={dependent.gender === "male"}
								/>
								<FormControlLabel
									value="other"
									control={<Radio />}
									label="Other"
									checked={dependent.gender === "other"}
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
								value={dependent.age}
							/>
						</Grid>
					</Grid>
					<Grid container>
						<FormControl
							sx={{
								flexDirection: "row",
								alignItems: "center",
								marginBottom: "10px",
							}}
						>
							<FormLabel
								id="demo-row-radio-buttons-group-label"
								sx={{ marginRight: "20px" }}
							>
								Any existing Medical illness
							</FormLabel>
							<RadioGroup
								row
								aria-labelledby="demo-row-radio-buttons-group-label"
								name="illness"
								onChange={(e) => handleChange(e)}
							>
								<FormControlLabel
									value="Yes"
									control={<Radio />}
									label="Yes"
									checked={dependent.illness === "Yes"}
								/>
								<FormControlLabel
									value="No"
									control={<Radio />}
									label="No"
									checked={dependent.illness === "No"}
								/>
							</RadioGroup>
						</FormControl>
					</Grid>

					<Grid container style={{ width: "100%" }}>
						<Grid item style={{ width: "100%" }}>
							{currentDependent ? (
								<Button
									variant="contained"
									sx={{ width: "100%" }}
									onClick={() => {
										editDependent(dependent.id, dependent);
										closePopup();
										setDependent({});
									}}
								>
									save Dependant
								</Button>
							) : (
								<Button
									variant="contained"
									sx={{ width: "100%" }}
									onClick={() => {
										handleAddDependent();
										closePopup();
										setDependent({
											fName: null,
											lName: "",
											gender: "",
											age: "",
											illness: "",
										});
									}}
								>
									Add Dependant
								</Button>
							)}
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};

export default DependentPopup;
