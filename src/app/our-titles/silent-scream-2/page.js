import React from "react";
import Image from "next/image";

const Test = () => {
	return (
		<div className="min-h-screen">
			<div className="-z-10 w-full">
				{/* Background Image */}
				<Image
					src="./assets/silent-scream-2-hero.png"
					width={1440}
					height={969}
					alt="Silent Scream 2 Hero"
					className="hidden md:flex w-full md:h-screen"
				/>
				<Image
					src="./assets/silent-scream-2-hero-mb.png"
					width={638}
					height={969}
					alt="Silent Scream 2 Hero"
					className="md:hidden w-full bg-cover"
				/>
			</div>
			<div className="w-full h-[50px] md:h-[100px] flex gap-6 md:gap-12 justify-center items-center">
				<button className="bg-red-600 text-[17px] md:text-[35px] text-silent2_button_text font-bold py-3 px-6">
					BUY NOW
				</button>
				<button className="bg-red-600 text-[17px] md:text-[35px] text-silent2_button_text font-bold py-3 px-6">
					TRAILER
				</button>
			</div>
		</div>
	);
};

export default Test;
