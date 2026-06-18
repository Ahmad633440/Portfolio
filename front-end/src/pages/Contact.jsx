import { useState, useRef } from 'react'
import { Github, Linkedin, Mail, Phone, Send, Loader2 } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { toast } from 'react-hot-toast'
import { motion } from 'framer-motion'

const Contact = () => {
  const formRef = useRef()
  const [isSending, setIsSending] = useState(false)

  const sendEmail = async (e) => {
    e.preventDefault()

    // Prevent duplicate submissions
    if (isSending) return
    setIsSending(true)

    try {
      await emailjs.sendForm(
        "service_v2ic0th",
        "template_zi282yn",
        formRef.current,
        "ImRm03zjd-2QXxvNu"
      )
      toast.success("Message sent successfully!")
      formRef.current.reset()
    } catch (error) {
      toast.error("Failed to send the message. Please try again.")
      console.error("EmailJS Error:", error)
    } finally {
      setIsSending(false)
    }
  }

  const contactDetails = [
    { icon: <Mail className="w-5 h-5" />, text: 'a09147046@gmail.com', href: 'mailto:a09147046@gmail.com', label: 'Email' },
    { icon: <Phone className="w-5 h-5" />, text: '+92 308 4250028', href: 'https://wa.me/923084250028', label: 'WhatsApp' },
    { icon: <Linkedin className="w-5 h-5" />, text: 'linkedin.com/in/ch-ahmad-31a71327b', href: 'https://www.linkedin.com/in/ch-ahmad-31a71327b', label: 'LinkedIn' },
    { icon: <Github className="w-5 h-5" />, text: 'github.com/Ahmad633440', href: 'https://github.com/Ahmad633440', label: 'GitHub' },
  ]

  return (
    <section className="relative min-h-screen bg-slate-950 text-slate-100 px-6 py-24 overflow-hidden flex flex-col items-center justify-center">
      
      {/* Premium Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-violet-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-6xl relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 flex flex-col items-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-3 py-1 text-xs font-medium tracking-wider text-violet-400 uppercase bg-violet-500/10 border border-violet-500/20 rounded-full mb-4"
          >
            Get In Touch
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4"
          >
            Let's build something together
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-md text-base"
          >
            Have a project in mind or looking to hire? Drop a message and I'll get back to you as soon as possible.
          </motion.p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          
          {/* LEFT SIDE - Contact Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col gap-4"
          >
            {contactDetails.map((item, index) => (
              <a
                key={index}
                href={item.href}
                rel="noopener noreferrer"
                target="_blank"
                className="group flex items-center gap-4 px-6 py-5 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-xl transition-all duration-300 hover:border-violet-500/50 hover:bg-slate-900/80 hover:-translate-y-1"
              >
                <div className="p-3 rounded-xl bg-slate-800/80 text-slate-400 group-hover:text-violet-400 group-hover:bg-violet-500/10 transition-colors duration-300">
                  {item.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 font-medium tracking-wide uppercase">{item.label}</span>
                  <span className="text-slate-300 group-hover:text-white transition-colors duration-300 font-medium break-all">
                    {item.text}
                  </span>
                </div>
              </a>
            ))}
          </motion.div>

          {/* RIGHT SIDE - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="flex flex-col gap-5 rounded-2xl p-6 md:p-8 border border-slate-800 bg-slate-900/50 backdrop-blur-xl"
            >
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                <input
                  name="user_name"
                  required
                  type="text"
                  disabled={isSending}
                  className="w-full rounded-xl px-4 py-3 bg-slate-950 border border-slate-800 text-slate-100 transition-all duration-200 outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Email Address</label>
                <input
                  name="user_email"
                  required
                  type="email"
                  disabled={isSending}
                  className="w-full rounded-xl px-4 py-3 bg-slate-950 border border-slate-800 text-slate-100 transition-all duration-200 outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  disabled={isSending}
                  className="w-full rounded-xl px-4 py-3 bg-slate-950 border border-slate-800 text-slate-100 transition-all duration-200 outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSending}
                whileHover={!isSending ? { scale: 1.02 } : {}}
                whileTap={!isSending ? { scale: 0.98 } : {}}
                className="mt-2 w-full py-3.5 rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-200 bg-violet-500 text-white hover:bg-violet-600 active:bg-violet-700 shadow-lg shadow-violet-500/10 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSending ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Contact