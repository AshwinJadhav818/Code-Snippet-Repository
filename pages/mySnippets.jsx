import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import Head from 'next/head';
import useSWR from 'swr';
import Header from '../components/Header';
import Snippet from '../components/Snippet';

export default function MySnippets() {
	const { data: snippets } = useSWR('/api/mySnippets');

	return (
		<div>
			<Head>
				<title>Code Snippets Repository</title>
				<meta
					name="description"
					content="Save All Your Code Snippets At One Place!"
				/>
				<meta
					name="keywords"
					content="code, snipptes, repository, code snippet, code snippet repository, code repository"
				/>
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&display=swap"
					rel="stylesheet"
				/>
			</Head>

			<main className="">
				<div className="my-12">
					<Header title="My Snippets" />
				</div>
				{snippets &&
					snippets.map((snippet) => (
						<Snippet key={snippet.id} snippet={snippet} />
					))}
			</main>
		</div>
	);
}

export const getServerSideProps = withPageAuthRequired();