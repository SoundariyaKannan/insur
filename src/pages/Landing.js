import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import { Grid } from "@mui/material";
import PolicyHolderForm from "./PolicyHolderForm";
import Hero from "../assets/images/Hero.jpg";
import HeroBanner from "../assets/images/HeroBanner.jpg";

const Landing = () => {
	const { user } = useContext(UserContext);
	const navigate = useNavigate();
	useEffect(() => {
		if (user) {
			navigate("/dashboard");
		}
	}, [user]);
	return (
		<Grid container style={{ overflow: "hidden", height: "100vh" }}>
			<Grid item sx={{ width: "35%" }}>
				<img src={HeroBanner} alt="Hero" style={{ height: "100vh" }} />
			</Grid>
			<Grid
				item
				container
				sx={{ width: "65%" }}
				justifyContent="center"
				alignItems="center"
			>
				<PolicyHolderForm />
			</Grid>
		</Grid>
	);
};

export default Landing;
