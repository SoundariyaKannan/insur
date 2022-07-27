import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import {
	TableContainer,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	Table,
	Paper,
} from "@mui/material";
import { FaEdit, FaTrash } from "react-icons/fa";

const DependentList = ({ dependents, openPopup }) => {
	const { removeDependent, getCurrentDependent } = useContext(UserContext);
	return (
		<>
			{" "}
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>First name</TableCell>
							<TableCell>Last name</TableCell>
							<TableCell>Gender</TableCell>
							<TableCell>Age</TableCell>
							<TableCell>Existing medical illness</TableCell>
							<TableCell>Edit</TableCell>
							<TableCell>Delete</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{dependents &&
							dependents.map((dependent) => {
								console.log("List displaying", dependent);
								return (
									<TableRow key={dependent.fName}>
										<TableCell>{dependent.fName}</TableCell>
										<TableCell>{dependent.lName}</TableCell>
										<TableCell>{dependent.gender}</TableCell>
										<TableCell>{dependent.age}</TableCell>
										<TableCell>{dependent.illness}</TableCell>
										<TableCell>
											<FaEdit
												style={{ cursor: "pointer" }}
												onClick={() => {
													getCurrentDependent(dependent.id);
													openPopup();
												}}
											/>
										</TableCell>
										<TableCell>
											<FaTrash
												style={{ cursor: "pointer" }}
												onClick={() => removeDependent(dependent.id)}
											/>
										</TableCell>
									</TableRow>
								);
							})}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
};

export default DependentList;
