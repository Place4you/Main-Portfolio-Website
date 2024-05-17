import { useEffect, useState } from 'react';

function Counter() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		const storedCount = localStorage.getItem('pageVisits');
		const initialCount = Number(storedCount) || 0;
		setCount(initialCount + 1);
		localStorage.setItem('pageVisits', String(initialCount + 1));
	}, []);

	return (
		<div className="block text-primary-50 font-semibold tracking-wide uppercase text-base text-center">
			Author: <a href="https://faizanak.vercel.app/blog/about">Faizan A.</a>
		</div>
	);
}

export default Counter;
