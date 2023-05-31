import type { InferGetStaticPropsType, GetStaticProps } from "next";
import Layout from "@/components/Layout/Layout";
import Link from "next/link";
import Head from "next/head";

type Post = {
	body: string;
	id: number;
	title: string;
	userId: number;
};

const postsTitle = "Next.js posts";

export const getStaticProps: GetStaticProps<{
	post: Post[];
}> = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/posts");
	const post = await res.json();
	return { props: { post } };
};

export default function Posts({
	post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<Layout>
			<Head>
				<title>{postsTitle}</title>
			</Head>
			<article className='flex flex-col w-full mb-8'>
				<h1 className='my-4 mx-0 main-title text-center'>Some posts</h1>
				{post.map((el) => (
					<Link
						key={el.id}
						href={`/posts/${el.id}`}
					>
						<div className='px-4 py-8'>
							<h3 className='px-4 py-2 uppercase title text-center'>
								{el.title}
							</h3>
							<p className='main-text'>{el.body}</p>
						</div>
					</Link>
				))}
			</article>
		</Layout>
	);
}
