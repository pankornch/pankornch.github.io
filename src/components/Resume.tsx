import React from "react"

import TabScroll from "@/src/components/TabScroll"

import JSSVG from "@/public/javascript.svg"
import TSSVG from "@/public/typescript.svg"
import PythonSVG from "@/public/python.svg"
import GolangSVG from "@/public/golang.svg"
import JavaSVG from "@/public/java.svg"
import ReactSVG from "@/public/react.svg"
import VueSVG from "@/public/vuejs.svg"
import FlutterSVG from "@/public/flutter.svg"
import NodeJSSVG from "@/public/nodejs.svg"
import GraphQLSVG from "@/public/graphql.svg"
import GoFiberSVG from "@/public/fiber.svg"
import MongoDBSVG from "@/public/mongodb.svg"
import PostgresQLSVG from "@/public/postgresql.svg"
import RedisSVG from "@/public/redis.svg"
import MySqlSVG from "@/public/mysql.svg"
import FirebaseSVG from "@/public/firebase.svg"
import Image from "next/image"

const Resume = () => {
	const getAge = () => {
		const now = new Date()
		return now.getFullYear() - 2000
	}
	return (
		<>
			<h4 className="text-3xl text-center underline underline-offset-4 text-orange-500 mb-12">
				Resume
			</h4>
			<TabScroll
				className="sm:mt-0 mt-12 mb-12"
				tabs={[
					{ title: "Personal Info", id: "personal_info" },
					{ title: "Programming Skills", id: "programming_skills" },
					{ title: "Projects", id: "projects" },
					{ title: "Internships", id: "internships" },
					{ title: "Tournaments & Activities", id: "activities" },
				]}
				contents={[
					{
						id: "personal_info",
						content: (
							<div className="border-b pb-12">
								<h5 className="text-2xl font-medium text-orange-500 mb-6 underline underline-offset-4">
									Personal Information
								</h5>
								<div>
									<div className="flex items-baseline space-x-3">
										<div className="underline underline-offset-4 font-medium text-orange-500 text-lg min-w-[6rem]">
											Name
										</div>
										<div className="text-2xl">Pankorn Chantarod</div>
									</div>
									<div className="flex items-baseline space-x-3">
										<div className="underline underline-offset-4 font-medium text-orange-500 text-lg min-w-[6rem]">
											Birth date
										</div>
										<div className="">
											24 OCTOBER. 2000 ({getAge()} years old.)
										</div>
									</div>
									<div className="flex items-baseline space-x-3">
										<div className="underline underline-offset-4 font-medium text-orange-500 text-lg min-w-[6rem]">
											Address
										</div>
										<div className="">Chiang Rai, Thailand</div>
									</div>
								</div>

								<h6 className="text-xl font-medium text-orange-500 mb-3 mt-6">
									Languages
								</h6>
								<ul className="ml-3">
									<li>Thai (Native)</li>
									<li>English (Intermediate)</li>
								</ul>

								<h6 className="text-xl font-medium text-orange-500 mb-3 mt-6">
									Education
								</h6>
								<div className="flex justify-between sm:flex-row flex-col">
									<div className="flex items-start order-2 sm:order-1">
										<div className="w-4 h-4 bg-orange-500 rounded-full mt-1 mr-3" />
										<div className="">
											<div className="text-orange-500 font-medium text-lg">
												University of Phayao
											</div>
											<span>Software Engineering</span>
										</div>
									</div>
									<div className="bg-orange-500 rounded-full h-fit text-white px-3 py-1 text-xs w-fit order-1 sm:order-2 mb-3 sm:mb-0">
										2019 - 2022
									</div>
								</div>
							</div>
						),
					},

					{
						id: "programming_skills",
						content: (
							<div className="space-y-6 border-b pb-6">
								<h5 className="text-2xl font-medium text-orange-500 mb-6 underline underline-offset-4">
									Programming Languages
								</h5>
								<div className="flex gap-x-6 pb-3 flex-wrap">
									<div className="flex flex-col items-center hover:text-orange-500 transition-all duration-200 ease-in-out">
										<JSSVG className="w-16" />
										<span>JavaScript</span>
									</div>

									<div className="flex flex-col items-center hover:text-orange-500 transition-all duration-200 ease-in-out">
										<TSSVG className="w-16" />
										<span>TypeScript</span>
									</div>

									<div className="flex flex-col items-center">
										<PythonSVG className="w-16 hover:text-orange-500 transition-all duration-200 ease-in-outw-16" />
										<span>Python</span>
									</div>

									<div className="flex flex-col items-center hover:text-orange-500 transition-all duration-200 ease-in-out">
										<GolangSVG className="w-16" />
										<span>Golang</span>
									</div>

									<div className="flex flex-col items-center hover:text-orange-500 transition-all duration-200 ease-in-out">
										<JavaSVG className="w-16" />
										<span>Java</span>
									</div>
								</div>

								<h5 className="text-xl font-medium text-orange-500 mb-3">
									Programming Frameworks
								</h5>
								<div className="ml-3">
									<h6 className="text-lg font-medium text-orange-500 mb-3">
										Front-end
									</h6>
									<div className="">
										<h6 className="text-lg font-medium text-orange-500 mb-3 ml-3">
											WEB
										</h6>
										<div className="flex gap-x-6 ml-3">
											<div className="flex flex-col items-center hover:text-orange-500 transition-all duration-200 ease-in-out">
												<ReactSVG className="w-16" />
												<span>React JS & Next JS</span>
											</div>
											<div className="flex flex-col items-center hover:text-orange-500 transition-all duration-200 ease-in-out">
												<VueSVG className="w-16" />
												<span>Vue JS & Nuxt JS</span>
											</div>
										</div>

										<h6 className="text-lg font-medium text-orange-500 my-3 ml-3">
											Mobile
										</h6>
										<div className="flex gap-x-6 ml-3">
											<div className="flex flex-col items-center hover:text-orange-500 transition-all duration-200 ease-in-out">
												<ReactSVG className="w-16" />
												<span>React-Native</span>
											</div>
											<div className="flex flex-col items-center hover:text-orange-500 transition-all duration-200 ease-in-out">
												<FlutterSVG className="w-16" />
												<span>Flutter</span>
											</div>
										</div>
									</div>

									<h6 className="text-lg font-medium text-orange-500 my-3 ml-3">
										Back-end
									</h6>
									<div className="flex gap-x-6 ml-3 flex-wrap">
										<div className="flex flex-col items-center hover:text-orange-500 transition-all duration-200 ease-in-out">
											<NodeJSSVG className="w-16" />
											<span>Express JS</span>
										</div>
										<div className="flex flex-col items-center hover:text-orange-500 transition-all duration-200 ease-in-out">
											<GraphQLSVG className="w-16" />
											<span>Apollo Express</span>
										</div>
										<div className="flex flex-col items-center hover:text-orange-500 transition-all duration-200 ease-in-out">
											<GoFiberSVG className="h-16" />
											<div>Go Fiber</div>
										</div>
									</div>

									<h6 className="text-lg font-medium text-orange-500 my-3 ml-3">
										Databases
									</h6>
									<div className="flex gap-x-6 ml-3 flex-wrap">
										<div className="flex flex-col items-center hover:text-orange-500 transition-all duration-200 ease-in-out">
											<MongoDBSVG className="w-16" />
											<span>MongoDB</span>
										</div>
										<div className="flex flex-col items-center hover:text-orange-500 transition-all duration-200 ease-in-out">
											<PostgresQLSVG className="w-16" />
											<span>PostgresQL</span>
										</div>
										<div className="flex flex-col items-center hover:text-orange-500 transition-all duration-200 ease-in-out">
											<MySqlSVG className="w-16" />
											<span>MySql</span>
										</div>
										<div className="flex flex-col items-center hover:text-orange-500 transition-all duration-200 ease-in-out">
											<RedisSVG className="w-16" />
											<span>Redis</span>
										</div>
										<div className="flex flex-col items-center hover:text-orange-500 transition-all duration-200 ease-in-out">
											<FirebaseSVG className="w-16" />
											<span>Firestore</span>
										</div>
									</div>
								</div>
							</div>
						),
					},
					{
						id: "projects",
						content: (
							<div className="border-b pb-6">
								<h5 className="text-2xl font-medium text-orange-500 mb-6 underline underline-offset-4">
									Projects
								</h5>
								<div className="ml-3">
									<a
										href="https://sharekan.netlify.app/"
										target="_blank"
										rel="noopener noreferrer"
										className="underline underline-offset-4 text-orange-500"
									>
										Sharekan
									</a>
									<div className="text-sm ml-3 mt-2 mb-3">
										a Money Management Platform which can be shared with
										friends.
									</div>
									<div>
										<h6 className="mb-3">Tech Stacks</h6>
										<div className="flex space-x-12 ml-3">
											<div>
												<div>Frontend</div>
												<ul className="list-disc ml-6">
													<li>Next JS</li>
													<li>Apollo Client</li>
													<li>Tailwind CSS</li>
													<li>Next Auth</li>
													<li>Netlify</li>
												</ul>
											</div>

											<div>
												<div>Backend</div>
												<ul className="list-disc ml-6">
													<li>Apollo Express</li>
													<li>PostgresQL</li>
													<li>Heroku</li>
												</ul>
											</div>
										</div>
										<h6 className="my-3">Source code</h6>
										<div className="flex flex-col ml-3 space-y-2">
											<a
												href="https://github.com/pankornch/sharekan-client"
												target="_blank"
												rel="noopener noreferrer"
												className="underline underline-offset-4 text-orange-500"
											>
												Frontend
											</a>
											<a
												href="https://github.com/pankornch/sharekan-api"
												target="_blank"
												rel="noopener noreferrer"
												className="underline underline-offset-4 text-orange-500"
											>
												Backend
											</a>
										</div>
									</div>
								</div>
							</div>
						),
					},
					{
						id: "internships",
						content: (
							<div>
								<h5 className="text-2xl font-medium text-orange-500 mb-6 underline underline-offset-4">
									Internships
								</h5>

								<div className="flex justify-between sm:flex-row flex-col">
									<div className="flex items-start order-2 sm:order-1">
										<div className="w-4 h-4 bg-orange-500 rounded-full mt-1 mr-3"></div>
										<div>
											<div className="text-orange-500 font-medium text-lg">
												Owl Day House
											</div>
											<span>Frontend developer</span>
										</div>
									</div>
									<div className="bg-orange-500 rounded-full h-fit text-white px-3 py-1 text-xs w-fit order-1 sm:order-2 mb-3 sm:mb-0">
										Apirl - May 2021
									</div>
								</div>
							</div>
						),
					},
					{
						id: "activities",
						content: (
							<div className="border-b pb-6">
								<h5 className="text-2xl font-medium text-orange-500 mb-6 underline underline-offset-4">
									Tournaments & Activities
								</h5>
								<ul className="ml-3 space-y-6">
									<li className="">
										<h6 className="font-medium text-orange-500 mb-3">
											Startup Thailand League 2020 (Evoligence)
										</h6>

										<p className="ml-3 text-sm">
											a platform to teach children in Executive Functions.
										</p>
										<div className="flex justify-between mt-3 ml-3 xl:flex-row flex-col gap-y-3 xl:gap-y-0">
											<div className="w-full xl:w-60 h-60 relative">
												<Image
													className="rounded-lg"
													src="/startup-1.jpg"
													layout="fill"
													alt=""
													objectFit="cover"
												/>
											</div>
											<div className="w-full h-36 xl:w-80 xl:h-60 relative">
												<Image
													className="rounded-lg"
													src="/startup-2.jpg"
													layout="fill"
													alt=""
													objectFit="cover"
												/>
											</div>
										</div>
									</li>
									<li>
										<h6 className="font-medium text-orange-500 mb-3">
											Research to Market 2020 (Evoligence)
										</h6>
										<p className="ml-3 text-sm">
											a platform to teach children in Executive Functions.
										</p>
										<div className="flex justify-between mt-3 ml-3 xl:flex-row flex-col gap-y-3 xl:gap-y-0">
											<div className="w-full xl:w-60 h-60 relative">
												<Image
													className="rounded-lg"
													src="/r2m-1.jpg"
													layout="fill"
													alt=""
													objectFit="cover"
												/>
											</div>
											<div className="w-full h-36 xl:w-80 xl:h-60 relative">
												<Image
													className="rounded-lg"
													src="/r2m-2.jpg"
													layout="fill"
													alt=""
													objectFit="cover"
												/>
											</div>
										</div>
									</li>
									<li>
										<h6 className="font-medium text-orange-500 mb-3">
											Bootcamp 20Scoops CNX 2021
										</h6>
										<p className="ml-3 text-sm">
											a project about how to design market online with Scrum workflow.
										</p>
										<div className="flex justify-between mt-3 ml-3 xl:flex-row flex-col gap-y-3 xl:gap-y-0">
											<div className="w-full xl:w-60 h-60 relative">
												<Image
													className="rounded-lg"
													src="/20scoops-1.jpg"
													layout="fill"
													alt=""
													objectFit="cover"
												/>
											</div>
											<div className="w-full h-36 xl:w-80 xl:h-60 relative">
												<Image
													className="rounded-lg"
													src="/20scoops-2.jpg"
													layout="fill"
													alt=""
													objectFit="cover"
												/>
											</div>
										</div>
									</li>
								</ul>
							</div>
						),
					},
				]}
			/>
		</>
	)
}

export default Resume
