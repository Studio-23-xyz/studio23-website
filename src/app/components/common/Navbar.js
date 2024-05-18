"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { ChevronDown, LucideMenu } from "lucide-react";

const Navbar = () => {
	const pathname = usePathname();
	const [showMenu, setShowmenu] = useState(false);
	const [header, setHader] = useState(false);

	const handleToggleMenu = () => {
		setShowmenu(!showMenu);
	};

	const scrollHeader = () => {
		if (window.scrollY >= 20) {
			setHader(true);
		} else {
			setHader(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", scrollHeader);

		return () => {
			window.addEventListener("scroll", scrollHeader);
		};
	}, []);

	return (
		<div
			className={
				header
					? "w-full md:h-20 h-16 top-0 fixed z-10 bg-black"
					: "w-full md:h-20 h-16 top-0 fixed z-10 justify-between"
			}
		>
			<div className="flex justify-between items-center md:mx-32 mt-5">
				{/* Laptop View */}

				<div className=" hidden md:flex">
					<Link href="/">
						<Image
							src="./assets/studio23_logo_white.png"
							width={500}
							height={200}
							alt="Logo"
							className="w-[150px] md:w-[202px] pl-2 md:pl-0 pt-2 md:pt-0"
						/>
					</Link>
				</div>

				<div className="hidden md:flex">
					<nav>
						<ul className="justify-center hidden md:flex gap-12 items-center">
							<Link href="/">
								<li
									className={classNames(
										"hover:font-bold transition-all",
										pathname === "/" ? "font-bold" : ""
									)}
								>
									Home
								</li>
							</Link>

							<Link href="/our-titles">
								<li
									className={classNames(
										"hover:font-bold transition-all",
										pathname === "/our-titles" ? "font-bold" : ""
									)}
								>
									Our Titles
								</li>
							</Link>

							<Link href="/publishing-with-us">
								<li
									className={classNames(
										"hover:font-bold transition-all",
										pathname === "/publishing-with-us" ? "font-bold" : ""
									)}
								>
									Publish with Us
								</li>
							</Link>

							<Link href="/about-us">
								<li
									className={classNames(
										"hover:font-bold transition-all flex gap-2",
										pathname === "/about-us" ? "font-bold" : ""
									)}
								>
									About Us <ChevronDown />
								</li>
							</Link>

							<Link href="/community">
								<li
									className={classNames(
										"hover:font-bold transition-all",
										pathname === "/community" ? "font-bold" : ""
									)}
								>
									Community
								</li>
							</Link>

							<Link href="/contact-us">
								<div
									className={classNames(
										"bg-studio_blue px-4 py-2 rounded-md hover:bg-white hover:text-black hover:font-bold",
										pathname === "/contact-us"
											? "font-bold bg-white text-black"
											: ""
									)}
								>
									Contact Us
								</div>
							</Link>
						</ul>
					</nav>
				</div>

				{/* Mobile View */}

				<div className="md:hidden w-full mx-5 flex items-center justify-between">
					<span onClick={handleToggleMenu}>
						<div className="flex justify-between items-center">
							<LucideMenu className="w-[25px] h-[25px] stroke-studio_blue hover:stroke-white" />
						</div>

						{showMenu && (
							<div className="w-[70%] h-screen absolute top-0 left-0 bg-fiery_black pt-6 pl-4 scroll-hide flex flex-col gap-8">
								<div>
									<Link href="/">
										<Image
											src="./assets/studio23_logo_white.png"
											width={150}
											height={200}
											alt="Logo"
											className=""
										/>
									</Link>
								</div>
								<div>
									<nav>
										<ul className="justify-center flex flex-col gap-4">
											<Link href="/">
												<li
													className={classNames(
														"hover:font-bold transition-all",
														pathname === "/" ? "font-bold" : ""
													)}
												>
													Home
												</li>
											</Link>

											<Link href="/our-titles">
												<li
													className={classNames(
														"hover:font-bold transition-all",
														pathname === "/our-titles" ? "font-bold" : ""
													)}
												>
													Our Titles
												</li>
											</Link>

											<Link href="/publishing-with-us">
												<li
													className={classNames(
														"hover:font-bold transition-all",
														pathname === "/publishing-with-us"
															? "font-bold"
															: ""
													)}
												>
													Publish with Us
												</li>
											</Link>

											<Link href="/about-us">
												<li
													className={classNames(
														"hover:font-bold flex gap-2 transition-all",
														pathname === "/about-us" ? "font-bold" : ""
													)}
												>
													About Us <ChevronDown />
												</li>
											</Link>

											<Link href="/community">
												<li
													className={classNames(
														"hover:font-bold transition-all",
														pathname === "/community" ? "font-bold" : ""
													)}
												>
													Community
												</li>
											</Link>

											<Link href="/contact-us">
												<div
													className={classNames(
														"w-[60%] flex justify-center bg-studio_blue px-4 py-2 rounded-md hover:bg-white hover:text-black hover:font-bold",
														pathname === "/contact-us"
															? "font-bold bg-white text-black"
															: ""
													)}
												>
													Contact Us
												</div>
											</Link>
										</ul>
									</nav>
								</div>
							</div>
						)}
					</span>

					<div>
						<Link href="/">
							<Image
								src="./assets/studio23_logo_white.png"
								width={150}
								height={200}
								alt="Logo"
								className="w-[100px] h-[20px]"
							/>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
