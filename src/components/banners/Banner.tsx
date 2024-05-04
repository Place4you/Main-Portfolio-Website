// Banner.tsx

import React from 'react';

interface BannerProps {
	message: string;
	bgColor: string;
	textColor: string;
}

const Banner: React.FC<BannerProps> = ({ message, bgColor, textColor }) => {
	return (
		<div
			className={`flex items-center justify-center h-32 bg-${bgColor} text-${textColor} rounded-md shadow-md`}>
			<p className="text-center">We have a newsletter</p>
		</div>
	);
};

export default Banner;
