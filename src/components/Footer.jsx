import React from 'react'

function ContactInfo() {
  return (
    <>
      <p>
        📧 Email: <a href="mailto:yashsaxena2110@gmail.com">yashsaxena2110@gmail.com</a>
      </p>
      <p>📱 Phone: +91-9528155115</p>
    </>
  )
}

function SocialLinks() {
  return (
    <div className="socials">
      <a href="https://github.com/yashworkspace1?tab=repositories" title="GitHub">GitHub</a>
      <a href="https://linkedin.com/" title="LinkedIn">LinkedIn</a>
    </div>
  )
}

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <h3>Get in Touch</h3>
        <p>
          I'd love to hear from you. Feel free to reach out for collaboration, freelance opportunities, or just a friendly chat.
        </p>
        <ContactInfo />
        <SocialLinks />
        <p className="notice">© 2026 Yash Kumar. All rights reserved.</p>
      </div>
    </footer>
  )
}
