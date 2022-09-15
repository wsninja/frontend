import React, { FC } from 'react';

interface ICogDesktopProps {
	color?: string;
	size: number;
}

export const CogDesktop: FC<ICogDesktopProps> = (props) => {
	return (
		<svg width={30} height={30} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M25.844 15c0 .51-.045.99-.105 1.47l3.165 2.475c.285.225.36.63.18.96l-3 5.19a.732.732 0 01-.915.33l-3.735-1.5c-.78.585-1.62 1.095-2.535 1.47l-.57 3.975a.731.731 0 01-.735.63h-6a.731.731 0 01-.735-.63l-.57-3.975a10.96 10.96 0 01-2.535-1.47l-3.735 1.5c-.33.12-.735 0-.915-.33l-3-5.19a.757.757 0 01.18-.96l3.165-2.475c-.06-.48-.105-.975-.105-1.47s.045-.99.105-1.47L.284 11.055a.74.74 0 01-.18-.96l3-5.19c.18-.33.57-.465.915-.33l3.735 1.5c.78-.585 1.62-1.095 2.535-1.47l.57-3.975c.045-.36.36-.63.735-.63h6c.375 0 .69.27.735.63l.57 3.975c.915.375 1.755.87 2.535 1.47l3.735-1.5c.33-.12.735 0 .915.33l3 5.19c.18.33.105.735-.18.96l-3.165 2.475c.06.48.105.96.105 1.47zm-16.5 0a5.256 5.256 0 005.25 5.25 5.256 5.256 0 005.25-5.25 5.256 5.256 0 00-5.25-5.25A5.256 5.256 0 009.344 15z"
				fill={props.color ?? '#fff'}
			/>
		</svg>
	);
};
