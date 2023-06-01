import type { InferGetStaticPropsType } from "next";
import Layout from "@/components/Layout/Layout";
import { PostData } from "../../../types/types";

export async function getStaticPaths() {
	const res = await fetch("https://jsonplaceholder.typicode.com/posts");
	const posts: PostData[] = await res.json();
	const paths = posts.map((el) => ({
		params: { id: String(el.id) },
	}));
	console.log(paths);
	return {
		paths,
		fallback: false,
	};
}

export const getStaticProps = async ({
	params,
}: {
	params: { id: string };
}) => {
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${params.id}`
	);
	const post = await res.json();
	return { props: { post } };
};

export default function Post({
	post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	console.log(post);
	return (
		<Layout>
			<article className=' '>
				<div className='px-4 py-8'>
					<h3 className='px-4 py-2 uppercase'>{post.title}</h3>
					<p>{post.body}</p>
				</div>
			</article>
		</Layout>
	);
}
