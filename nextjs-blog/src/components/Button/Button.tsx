import Image from "next/image";
import { useTheme } from "../../../hooks/useTheme";

const Button = () => {
	const { theme, setTheme } = useTheme();
	const onClickHandle = () => {
		console.log("click");
		if (theme === "dark") setTheme("light");
		if (theme === "light") setTheme("dark");
	};

	return (
		<button
			onClick={() => onClickHandle()}
			className='min-w-6 p-0.5 inline-block bg-secondary-300 rounded-full'
		>
			{theme === "dark" ? (
				<Image
					priority
					src='/images/sun_icon.svg'
					className='w-6'
					height={5}
					width={5}
					alt=''
				/>
			) : (
				<Image
					priority
					src='/images/night_icon.svg'
					className='w-6 '
					height={5}
					width={5}
					alt=''
				/>
			)}
		</button>
	);
};

export default Button;
