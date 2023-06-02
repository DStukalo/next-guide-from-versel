import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

const Button = () => {
	const { systemTheme, theme, setTheme } = useTheme();
	const currentTheme = theme === "system" ? systemTheme : theme;
	const [classes, setClasses] = useState(currentTheme);

	useEffect(() => {
		if (classes) setTheme(classes);
	}, [classes, setTheme]);

	return (
		<button
			onClick={() =>
				theme === "dark" ? setClasses("light") : setClasses("dark")
			}
			className='min-w-6 p-0.5 inline-block bg-gray-100 dark:bg-white-200 rounded-full'
		>
			{theme === "dark" ? (
				<Image
					priority
					src='/images/night_icon.svg'
					className='w-6'
					height={5}
					width={5}
					alt=''
				/>
			) : (
				<Image
					priority
					src='/images/sun_icon.svg'
					className='w-6 '
					height={208}
					width={208}
					alt=''
				/>
			)}
		</button>
	);
};

export default Button;
