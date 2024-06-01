import { useState, useEffect } from 'react';

const CustomCursor: React.FC = () => {
	const [position, setPosition] = useState<{ x: number; y: number }>({
		x: 0,
		y: 0,
	});

	useEffect(() => {
		const moveCursor = (e: MouseEvent) => {
			setPosition({ x: e.clientX, y: e.clientY });
		};

		document.addEventListener('mousemove', moveCursor);

		return () => {
			document.removeEventListener('mousemove', moveCursor);
		};
	}, []);

	return (
		<div
			className="fixed z-50 pointer-events-none"
			style={{ left: `${position.x}px`, top: `${position.y}px` }}>
			{<img src="/cursors/cursor.png" alt="Custom Cursor" />}
		</div>
	);
};

export default CustomCursor;
