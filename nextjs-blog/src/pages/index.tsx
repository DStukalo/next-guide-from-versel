import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Date from "@/components/date";
import Layout, { siteTitle } from "@/components/Layout/Layout";
import { getSortedBlogsData } from "../../lib/blogs";
import { BlogData } from "../../types/types";

export async function getStaticProps() {
	const allBlogsData: Partial<BlogData>[] = getSortedBlogsData();
	return {
		props: {
			allBlogsData,
		},
	};
}

const name = "Dmytro Stukalo";

export default function Home({ allBlogsData }: { allBlogsData: BlogData[] }) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<div className='flex flex-col items-center justify-center w-full mb-8'>
				<div className='w-52 mb-4'>
					<Image
						priority
						src='/images/profile avatar.jpg'
						className='w-52 rounded-full'
						height={208}
						width={208}
						alt=''
					/>
				</div>
				<h1 className='my-4 mx-0 main-title'>{name}</h1>
			</div>
			<section className='w-4/5'>
				<p className='main-text mb-4'>
					I am currently looking for a job. While I was working as a shift
					supervisor my responsibilities include organizing the work of the
					shift and maintaining documentation. I have ability to work in a team.
					Purposeful, sociable and nonconflicting.
				</p>
				<p className='main-text mb-4'>
					I graduated from the National University of Food Technologies with a
					degree in industrial biotechnology. Studied programming at RS School,
					finished Front end course in September 2022.
				</p>
				<p className='main-text mb-4'>
					(This is a sample website - you’ll be building a site like this on{" "}
					<a
						href='https://nextjs.org/learn'
						className=' sub-text text-green-100 dark:text-green-100'
					>
						our Next.js tutorial
					</a>
					.)
				</p>
			</section>
			<section className='w-4/5'>
				<h2 className='title my-4 mx-0'>Blog</h2>
				<ul className='list-none p-0 m-0'>
					{allBlogsData.map(({ id, date, title }) => (
						<li
							className='m-0 mb-5'
							key={id}
						>
							<Link
								href={`/blog/${id}`}
								className='main-text'
							>
								{title}
							</Link>
							<br />
							<small className='sub-text text-gray'>
								<Date dateString={date} />
							</small>
						</li>
					))}
				</ul>
			</section>
		</Layout>
	);
}
