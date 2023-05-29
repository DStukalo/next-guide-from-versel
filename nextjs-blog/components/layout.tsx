import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const name = "Dmytro Stukalo";
export const siteTitle = "Next.js Sample Website";

export default function Layout({
	children,
	home,
}: {
	children: ReactNode;
	home: boolean;
}) {
	return (
		<div className='max-w-xl py-0 px-4 mt-12 mx-auto mb-24'>
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
					)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
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
			<header className='flex flex-col mx-auto'>
				{home ? (
					<>
						<div className='w-36 h-36 '>
							<Image
								priority
								src='/images/profile.jpg'
								className='rounded-3xl'
								height={144}
								width={144}
								alt=''
							/>
						</div>
						<h1 className='text-4xl my-4 mx-0 leading-tight font-extrabold'>
							{name}
						</h1>
					</>
				) : (
					<>
						<Link href='/'>
							<Image
								priority
								src='/images/profile.jpg'
								className='rounded-full'
								height={108}
								width={108}
								alt=''
							/>
						</Link>
						<h2 className='text-2xl my-4 mx-0 leading-snug'>
							<Link
								href='/'
								className='text-inherit'
							>
								{name}
							</Link>
						</h2>
					</>
				)}
			</header>
			<main
				className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
			>
				{children}
			</main>
			{!home && (
				<div className='mt-12 mx-0 mb-0'>
					<Link href='/'>← Back to home</Link>
				</div>
			)}
		</div>
	);
}
