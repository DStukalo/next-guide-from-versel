import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button/Button";

export default function Header() {
	const router = useRouter();
	return (
		<header className='w-full flex items-center justify-between font-semibold mb-10'>
			<Link
				href={"/"}
				className={
					router.pathname == "/"
						? "header-link inline-block hover:cursor-default"
						: "header-link inline-block"
				}
			>
				<div className='px-4 flex flex-col items-center'>
					<h1>
						<Image
							priority
							src='/images/DS-black.svg'
							className='h-16'
							height={144}
							width={144}
							alt='Logo'
						/>
					</h1>
				</div>
			</Link>
			<div className='px-4'>
				<nav>
					<ul className='flex gap-4'>
						<li>
							<Link
								href={"/"}
								className={
									router.pathname == "/"
										? "header-link pb-0.5 inline-block border-b hover:cursor-default text-tertiary-200 "
										: "header-link pb-0.5 inline-block text-secondary-100 hover:text-tertiary-100"
								}
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								href={"/posts"}
								className={
									router.pathname == "/posts"
										? "header-link pb-0.5 inline-block border-b hover:cursor-default text-tertiary-200 "
										: "header-link pb-0.5 inline-block text-secondary-100 hover:text-tertiary-100"
								}
							>
								Posts
							</Link>
						</li>
						<li>
							<Link
								href={"/blog"}
								className={
									router.pathname == "/blog"
										? "header-link pb-0.5 inline-block border-b hover:cursor-default text-tertiary-200 "
										: "header-link pb-0.5 inline-block text-secondary-100 hover:text-tertiary-100"
								}
							>
								Blog
							</Link>
						</li>
						<li>
							<Button />
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
