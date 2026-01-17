import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'react-hot-toast'


const Contact = () => {
 const formRef = useRef();

 const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    "service_v2ic0th",
    "template_zi282yn",
    formRef.current,
    "ImRm03zjd-2QXxvNu" 
  )
  .then(() => {
   toast.success("Message sent successfully!");
    e.target.reset(); 
  })
  .catch(() => {
    toast.error("Failed to send the message. Please try again.");
  })
};

  return (
    <div className="flex flex-col items-center px-6 py-20 min-h-screen">

      <h2 className="text-4xl font-semibold pb-3 p-3 border-b-4 rounded-b-xl shadow-[0_8px_16px_-6px_rgba(255,255,255,)]
      dark:text-white dark:border-white/50 dark:bg-neutral-950/30
      text-neutral-900 border-emerald-400/50 bg-emerald-50">
        Contact Me
      </h2>

      <div className="mt-16 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* LEFT SIDE */}
        <div className="flex flex-col gap-6">
          {[
            { icon: <Mail />, text: 'a09147046@gmail.com', href: 'mailto:a09147046@gmail.com' },
            { icon: <Phone />, text: '+92 308 4250028', href: 'https://wa.me/923084250028' },
            { icon: <Linkedin />, text: 'linkedin.com/in/ch-ahmad-31a71327b', href: 'https://www.linkedin.com/in/ch-ahmad-31a71327b' },
            { icon: <Github />, text: 'github.com/Ahmad633440', href: 'https://github.com/Ahmad633440' },
          ].map((item, index) => (
            <div
              key={index}
              
              className="flex items-center gap-4 px-6 py-4 text-lg rounded-2xl transition-all duration-300 hover:scale-[1.03]
              dark:bg-emerald-900/10 dark:border dark:border-emerald-400/50 dark:text-gray-200 dark:shadow-[0_0_22px_rgba(52,211,153,0.35)] dark:hover:shadow-[0_0_35px_rgba(52,211,153,0.8)]
              bg-emerald-100 border border-emerald-300 text-emerald-900 shadow-[0_0_22px_rgba(52,211,153,0.2)] hover:shadow-[0_0_35px_rgba(52,211,153,0.5)]">
              {item.icon}
              <a href={item.href} rel='noopener noreferrer' target='_blank' >{item.text}</a>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE */}
<form
 ref={formRef}
 onSubmit={sendEmail}
 className="flex flex-col gap-4 rounded-2xl p-6 transition-all duration-300
dark:bg-emerald-900/10 dark:border dark:border-emerald-400/50 dark:shadow-[0_0_30px_rgba(52,211,153,0.45)] dark:hover:shadow-[0_0_40px_rgba(52,211,153,0.9)]
bg-emerald-100 border border-emerald-300 shadow-[0_0_30px_rgba(52,211,153,0.2)] hover:shadow-[0_0_40px_rgba(52,211,153,0.5)]">

<label className="dark:text-gray-300 text-emerald-900">Name</label>
<input
  name='user_name'
  required
  type="text"
  className="rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400 dark:bg-emerald-800 dark:border dark:border-emerald-400/20 dark:text-white
 bg-white border border-emerald-300 text-neutral-900"/>

<label className="dark:text-gray-300 text-emerald-900">Email</label>
<input 
  type="email" 
  name='user_email'
  required
  className="rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400
  dark:bg-emerald-800 dark:border dark:border-emerald-400/20 dark:text-white
  bg-white border border-emerald-300 text-neutral-900"
/>

<label className="dark:text-gray-300 text-emerald-900">Message</label>
<textarea 
  name='message'
  required
  rows="5" 
  className="rounded-lg px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-emerald-400
  dark:bg-emerald-800 dark:border dark:border-emerald-400/20 dark:text-white
  bg-white border border-emerald-300 text-neutral-900"
/>

<button
  type="submit"
  className="mt-4 py-3 rounded-xl font-medium transition-all duration-300
  dark:bg-emerald-400/90 dark:text-black dark:hover:bg-emerald-400 dark:hover:shadow-[0_0_30px_rgba(52,211,153,1)]
  bg-emerald-500 text-white hover:bg-emerald-600 hover:shadow-[0_0_30px_rgba(52,211,153,0.6)]">
  Send Message
</button>
  </form>

  </div>
</div>
  )
}

export default Contact
