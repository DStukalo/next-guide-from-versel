import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { Inter, Roboto } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const roboto = Roboto({
	weight: ["400", "700"],
	style: ["normal", "italic"],
	subsets: ["latin"],
	display: "swap",
	variable: "--font-roboto",
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider attribute='class'>
			<div className={`${roboto.variable} ${inter.variable}`}>
				<Component {...pageProps} />
			</div>
		</ThemeProvider>
	);
}
