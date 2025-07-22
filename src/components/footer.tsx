import { motion } from "framer-motion";

export default function Footer() {
  const footerSections = [
    {
      title: "Services",
      links: [
        { label: "Web Development", href: "#services" },
        { label: "UI/UX Design", href: "#services" },
        { label: "Digital Marketing", href: "#services" },
        { label: "Support & Maintenance", href: "#services" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#about" },
        { label: "Portfolio", href: "#portfolio" },
        { label: "Careers", href: "#" },
        { label: "Contact", href: "mailto:ghalilpatersonjones@gmail.com" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Support", href: "mailto:ghalilpatersonjones@gmail.com" },
      ],
    },
  ];

  const socialLinks = [
    { icon: "fab fa-twitter", href: "#" },
    { icon: "fab fa-linkedin-in", href: "#" },
    { icon: "fab fa-dribbble", href: "#" },
    { icon: "fab fa-github", href: "#" },
  ];

  return (
    <footer className="py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-lg flex items-center justify-center">
                <i className="fas fa-code text-black text-sm"></i>
              </div>
              <span className="text-xl font-bold glow-text">TigerDuckling</span>
            </div>
            <p className="text-gray-400 mb-4">
              Creating digital experiences that flow seamlessly and inspire
              action.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-8 h-8 bg-gray-800 hover:bg-cyan-400 hover:text-black rounded-full flex items-center justify-center transition-colors text-sm"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className={social.icon}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h5 className="font-semibold mb-4">{section.title}</h5>
              <ul className="space-y-2 text-gray-400">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="hover:text-cyan-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="border-t border-gray-800 pt-8 mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400">
            © 2024 TigerDuckling Agency. All rights reserved. | Crafted with{" "}
            <span className="text-cyan-400">♥</span> for the future of web.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
