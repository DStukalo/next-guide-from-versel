import { useEffect, useState } from "react";

export const useTheme = () => {
	const [theme, setTheme] = useState("light");

	useEffect(() => {
		const htmlElem = document.documentElement;
		if (theme === "dark") {
			htmlElem.classList.add("light");
			htmlElem.classList.remove("dark");
		} else if (theme === "light") {
			htmlElem.classList.remove("light");
			htmlElem.classList.add("dark");
		} else {
			htmlElem.classList.add("dark");
		}
	}, [theme]);

	return { theme, setTheme };
};
