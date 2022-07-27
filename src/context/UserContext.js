import { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState();
	const [dependents, setDependents] = useState([]);
	const [currentDependent, setCurrentDependent] = useState();

	const addUser = (user) => {
		setUser(user);
	};

	const addDependent = (dependent) => {
		setCurrentDependent("");
		dependent.id = uuid();

		setDependents([...dependents, dependent]);
	};

	const removeDependent = (id) => {
		const newDependents = dependents.filter((dependent) => dependent.id !== id);
		setDependents([...newDependents]);
	};

	const getCurrentDependent = (id) => {
		setCurrentDependent(
			dependents.filter((dependent) => dependent.id === id)[0]
		);
	};

	const editDependent = (id, dependent) => {
		let updatedDependent = dependents.filter(
			(dependent) => dependent.id === id
		)[0];
		updatedDependent = dependent;
		setDependents(
			dependents.map((dependent) =>
				dependent.id === id ? { ...updatedDependent } : dependent
			)
		);
		setCurrentDependent("");
	};

	const reset = () => {
		setCurrentDependent("");
	};

	return (
		<UserContext.Provider
			value={{
				user,
				dependents,
				currentDependent,
				addUser,
				addDependent,
				removeDependent,
				getCurrentDependent,
				editDependent,
				reset,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export default UserContext;
