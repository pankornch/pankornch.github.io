import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import Navbar from "../src/components/Navbar"
import { ReactTypical } from "@deadcoder0904/react-typical"
import Resume from "@/src/components/Resume"
import Contact from "@/src/components/Contact"

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Pankorn&apos;s Portfolio</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/icon.ico" />
			</Head>

			<main className="lg:px-56 sm:px-24 px-6 bg-[#F0F0F6] py-32">
				<Navbar />
				<div className="px-12 py-12 rounded-lg shadow-lg mb-12 bg-white">
					<div className="flex sm:justify-between sm:items-center flex-col sm:flex-row">
						<div className="sm:w-1/2 w-full sm:order-first order-last mt-12 sm:mt-0">
							<div className="font-bold uppercase text-center">
								<h1 className="text-5xl">Hi, I am Pankorn.</h1>
								<ReactTypical
									steps={[
										"Web Developer 🌐",
										2000,
										"Mobile Developer 📱",
										2000,
										"Backend Developer 💾",
										2000,
										"Full Stack Developer 💻",
										3000,
									]}
									wrapper="div"
									className="text-3xl h-12 text-orange-500 mt-3 inline"
									loop={Infinity}
								/>
								<span className="text-3xl font-light ml-1 animate-ping">|</span>
							</div>

							<p className="mt-3">
								I&apos;m a software engineering student from Thailand, I like to
								coding and learn new technology, with my experience i built web
								applications, mobile application, back-end api.
							</p>
						</div>
						<div>
							<Image
								src="/me.jpeg"
								width={300}
								height={300}
								objectFit="cover"
								alt="pankorn"
								className="rounded-full"
							/>
						</div>
					</div>
				</div>

				<Resume />
				<Contact />
			</main>
		</div>
	)
}

export default Home
