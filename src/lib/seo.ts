import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import type { ComponentProps } from 'react';

export function useSeoProps(
	props: Partial<ComponentProps<typeof NextSeo>> = {},
): Partial<ComponentProps<typeof NextSeo>> {
	const router = useRouter();

	const title = 'Faizan ─ developer';
	const description = "Hey 👋 I'm Faizan, a developer (and a student)";

	return {
		title,
		description,
		canonical: `https://faizanak.vercel.app/${router.asPath}`,
		openGraph: {
			title,
			description,
			site_name: 'faizan',
			url: `https://faizanak.vercel.app/${router.asPath}`,
			type: 'website',
			images: [
				{
					url: 'https://faizanak.vercel.app/banner.png',
					alt: description,
					width: 1280,
					height: 720,
				},
			],
		},
		twitter: {
			cardType: 'summary_large_image',
			handle: '@faizandev',
			site: '@faizandev',
		},
		...props,
	};
}
