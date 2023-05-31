import { ReactNode } from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../Header/Header";

export const siteTitle = "Next.js Sample Website";

export default function Layout({
	children,
	home,
}: {
	children: ReactNode;
	home?: boolean;
}) {
	const name = "Dmytro Stukalo";
	return (
		<div className='max-w-ful py-0 px-4 mx-auto bg-white-100 dark:bg-black-100 text-black-100 dark:text-white-100 min-h-screen'>
			<Head>
				<link
					rel='icon'
					href='/favicon.ico'
				/>
				<meta
					name='description'
					content='Learn how to build a personal website using Next.js'
				/>
				<meta
					property='og:image'
					content={`https://og-image.vercel.app/${encodeURI(
						siteTitle
					)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
				/>
				<meta
					name='og:title'
					content={siteTitle}
				/>
				<meta
					name='twitter:card'
					content='summary_large_image'
				/>
			</Head>
			<Header />
			<main className={`flex flex-col items-center`}>{children}</main>
			{!home && (
				<div className='rounded-full'>
					<Link href='/'>← Back to home</Link>
				</div>
			)}
		</div>
	);
}
