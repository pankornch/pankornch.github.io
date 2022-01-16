import React, { useState, useRef } from "react"
import SendSVG from "@/public/send.svg"
import FacebookSVG from "@/public/facebook.svg"
import LinkedInSVG from "@/public/linkedin.svg"
import EmailSVG from "@/public/email.svg"
import PhoneSVg from "@/public/phone.svg"
import emailJs from "../configs/emailjs"
import LoadingSVG from "@/public/loading.svg"
import Swal from "sweetalert2"

const Contact = () => {
	const [name, setName] = useState<string>("")
	const [email, setEmail] = useState<string>("")
	const [message, setMessage] = useState<string>("")
	const [loading, setLoading] = useState<boolean>(false)

	const loadingRef = useRef<boolean>(false)

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault()

		if (loadingRef.current) return

		loadingRef.current = true
		setLoading(true)

		await emailJs.send(
			process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID!,
			process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID!,
			{
				from_name: name,
				from_email: email,
				message: message,
			},
			process.env.NEXT_PUBLIC_EMAIL_JS_USER_ID!
		)
		Swal.fire("Message sent!", "Thank you for your message.", "success")

		setName("")
		setEmail("")
		setMessage("")
		loadingRef.current = false
		setLoading(false)
	}

	return (
		<>
			<h4 className="text-3xl text-center underline underline-offset-4 text-orange-500 mb-12">
				Contact Me
			</h4>
			<div className="bg-white shadow-lg px-12 py-6 rounded-lg">
				<h5 className="font-medium text-orange-500 text-center text-2xl mb-6">
					Get In Touch 📧
				</h5>
				<div className="flex space-x-3 justify-center overflow-x-auto pb-6">
					<a
						href="https://www.facebook.com/pankornch/"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-orange-500"
					>
						<FacebookSVG className="w-6 " />
					</a>
					<a
						href="https://www.linkedin.com/in/pankorn-chantarod-950b4716a/"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-orange-500"
					>
						<LinkedInSVG className="w-6 " />
					</a>
					<a
						href="mailto:pankorn.ch@gmail.com"
						className="hover:text-orange-500"
					>
						<EmailSVG className="h-6" />
					</a>
					<div className="flex items-center group hover:text-orange-500 cursor-pointer" onClick={() => {
                        navigator.clipboard.writeText("+66997528588")
                    }}>
						<PhoneSVg className="h-6" />
						<span className="text-xl w-0 h-6 group-hover:h-7 overflow-hidden  group-hover:w-56 group-hover:ml-3 underline underline-offset-4 transition-all delay-200 duration-500">
							🇹🇭 +669 9752 8588
						</span>
					</div>
				</div>

				<form onSubmit={handleSubmit} className="flex flex-col mt-6">
					<label className="mb-2" htmlFor="name">
						Name
					</label>
					<input
						value={name}
						onChange={(e) => setName(e.target.value)}
						className="bg-slate-100 px-4 py-2 focus:ring focus:ring-orange-300 focus:bg-white focus:outline-none rounded-lg transition-all mb-6"
						id="name"
						type="text"
						required
					/>
					<label className="mb-2" htmlFor="email">
						Email
					</label>
					<input
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="bg-slate-100 px-4 py-2 focus:ring focus:ring-orange-300 focus:bg-white focus:outline-none rounded-lg transition-all mb-6"
						id="name"
						type="email"
						required
					/>
					<label className="mb-2" htmlFor="message">
						Message
					</label>
					<textarea
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						className="bg-slate-100 px-4 py-2 focus:ring focus:ring-orange-300 focus:bg-white focus:outline-none rounded-lg transition-all mb-6"
					></textarea>
					<button
						type="submit"
						className="self-end flex text-orange-500 hover:bg-orange-500 hover:text-white transition-all outline outline-orange-500 w-fit px-6 py-2 rounded-lg active:bg-orange-300 disabled:bg-orange-500 disabled:text-white"
						disabled={loading}
					>
						{loading && <LoadingSVG className=" animate-spin w-6 h-6 mr-3" />}
						<div>Send</div>
						<SendSVG className="w-6 ml-3" />
					</button>
				</form>
			</div>
		</>
	)
}

export default Contact
