import * as EmailJS from "@emailjs/browser"

EmailJS.init(process.env.NEXT_PUBLIC_EMAIL_JS_USER_ID!)

export default EmailJS