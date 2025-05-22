// src/components/AuthorPage.jsx
import React from 'react';
import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook, FaLink } from 'react-icons/fa'; // Added FaLink for general links

const AuthorPage = () => {
  return (
    <div className="min-h-screen bg-[#011631] text-white flex items-center justify-center p-4 sm:p-8 font-sans">
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
        {/* Left Section - Author Details and Content */}
        <div className="lg:w-2/3 p-6 sm:p-10 text-[#011631] flex flex-col">
          <div className="flex justify-between items-center mb-4 border-b pb-4 border-gray-200">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-600">Prashant K</h1>
            <p className="text-sm text-gray-600">Date: April 27, 2025</p>
          </div>

          <p className="text-lg sm:text-xl mb-6 leading-relaxed">
            Hey there! If you’re running a business in Bangalore, you know cyberattacks are no joke. As an entrepreneur, I’ve seen how a single breach can cripple a company. That’s why I spent weeks researching the best cybersecurity firms in Bangalore for 2025. After digging through reviews, talking to experts, and testing services, I’ve compiled this list of the <strong>Top 10 Cybersecurity Companies in Bangalore </strong>. Spoiler: <strong>Cyserch</strong> is my top pick, and I’ll explain why!
          </p>
          <p className="text-lg sm:text-xl mb-8 leading-relaxed">
            Whether you’re a startup or a large enterprise, this guide will help you find a cybersecurity partner to keep your data safe. Let’s dive in!
          </p>

          {/* Table of Contents */}
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-600">Table of Contents</h2>
            <ul className="list-disc list-inside text-lg space-y-2">
              <li><a href="#why-critical" className="text-blue-700 hover:underline">Why Cybersecurity is Critical in 2025</a></li>
              <li><a href="#shocking-stats" className="text-blue-700 hover:underline">Cybercrime Statistics That Will Shock You</a></li>
              <li><a href="#what-to-look-for" className="text-blue-700 hover:underline">What to Look for in a Cybersecurity Partner</a></li>
              <li><a href="#top-10" className="text-blue-700 hover:underline">Top 10 Cybersecurity Companies in Bangalore</a></li>
              <li><a href="#why-cyserch" className="text-blue-700 hover:underline">Why I’m Rooting for Cyserch</a></li>
              <li><a href="#cyserch-services" className="text-blue-700 hover:underline">Complete List of Cyserch Services</a></li>
              <li><a href="#comparison" className="text-blue-700 hover:underline">Comparison: Cyserch vs. Other Cybersecurity Companies</a></li>
              <li><a href="#trends" className="text-blue-700 hover:underline">2025 Cybersecurity Trends in Bangalore</a></li>
              <li><a href="#final-thoughts" className="text-blue-700 hover:underline">Final Thoughts</a></li>
              <li><a href="#faqs" className="text-blue-700 hover:underline">FAQs</a></li>
            </ul>
          </div>

          {/* Why Cybersecurity is Critical in 2025 */}
          <section id="why-critical" className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-600">Why Cybersecurity is Critical in 2025</h2>
            <p className="text-lg mb-4 leading-relaxed">
              Cyberattacks are no longer a “what if” scenario—they’re a “when.” As Bangalore solidifies its place as India’s Silicon Valley, businesses here face growing threats. From ransomware to phishing, hackers are getting smarter, and the stakes are higher than ever.
            </p>
            <p className="text-lg mb-4 leading-relaxed">
              According to <a href="https://www.ibm.com/reports/data-breach" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">IBM’s 2025 Cost of a Data Breach Report</a>, the average cost of a data breach globally hit **$4.88 million** in 2024, and India is no exception. For small businesses like mine, a single breach could mean game over. That’s why I started looking for a cybersecurity partner to protect my company—and why you should too.
            </p>
            <p className="text-lg mb-4 leading-relaxed">
              Bangalore’s IT ecosystem is booming, with startups, fintechs, and global enterprises driving innovation. But this growth makes us a prime target. A <a href="https://cybersecurityventures.com/cybercrime-damage-costs-to-hit-10-5-trillion-annually-by-2025/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Cybersecurity Ventures report</a> predicts global cybercrime costs will reach **$10.5 trillion** by 2025. That’s why investing in cybersecurity isn’t optional—it’s a lifeline.
            </p>
          </section>

          {/* Cybercrime Statistics That Will Shock You */}
          <section id="shocking-stats" className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-600">Cybercrime Statistics That Will Shock You</h2>
            <p className="text-lg mb-4 leading-relaxed">Numbers don’t lie, and these stats kept me up at night while researching:</p>

            <ul className="list-none space-y-4">
              <li>
                <h3 className="text-xl font-semibold text-blue-600">Global Cybercrime Costs</h3>
                <p className="text-lg">$10.5 trillion annually by 2025 (<a href="https://cybersecurityventures.com/cybercrime-damage-costs-to-hit-10-5-trillion-annually-by-2025/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Cybersecurity Ventures</a>).</p>
              </li>
              <li>
                <h3 className="text-xl font-semibold text-blue-600">India’s Cybersecurity Market</h3>
                <p className="text-lg">Expected to grow at 15% CAGR, reaching $3.05 billion by 2026 (<a href="https://www.marketsandmarkets.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">MarketsandMarkets</a>).</p>
              </li>
              <li>
                <h3 className="text-xl font-semibold text-blue-600">Ransomware Surge</h3>
                <p className="text-lg">25% increase in ransomware attacks in 2024 (<a href="https://www.verizon.com/business/resources/reports/dbir/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Verizon DBIR 2024</a>).</p>
              </li>
              <li>
                <h3 className="text-xl font-semibold text-blue-600">Small Business Risk</h3>
                <p className="text-lg">43% of cyberattacks target small businesses (<a href="https://www.verizon.com/business/resources/reports/dbir/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Verizon DBIR 2024</a>).</p>
              </li>
            </ul>
          </section>

          {/* What to Look for in a Cybersecurity Partner */}
          <section id="what-to-look-for" className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-600">What to Look for in a Cybersecurity Partner</h2>
            <p className="text-lg mb-4 leading-relaxed">Choosing a cybersecurity company is like picking a doctor—you want the best. Here’s what I prioritized:</p>
            <ul className="list-disc list-inside text-lg space-y-2">
              <li><strong className="text-blue-700">Certifications:</strong> Look for CEH, CISSP, OSCP, or CISM-certified experts.</li>
              <li><strong className="text-blue-700">Comprehensive Services:</strong> From penetration testing to cloud security and compliance.</li>
              <li><strong className="text-blue-700">24/7 Support:</strong> Cyberattacks don’t wait for business hours.</li>
              <li><strong className="text-blue-700">Local Expertise:</strong> Bangalore-based teams understand local business needs.</li>
            </ul>
          </section>

          {/* Top 10 Cybersecurity Companies in Bangalore 2025 */}
          <section id="top-10" className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-600">Top 10 Cybersecurity Companies in Bangalore 2025</h2>

            {/* Cyserch */}
            <div className="mb-6 p-4 border border-blue-200 rounded-lg bg-blue-50">
              <h3 className="text-xl font-bold text-blue-800 mb-2">1. Cyserch - The All-in-One Cybersecurity Leader</h3>
              <p className="text-lg mb-3">
                Cyserch is my top pick for a reason. They offer everything from penetration testing to AI-driven threat detection, all tailored to your business. Their Bangalore-based team understands local challenges, and their 98% client satisfaction rate (based on 2025 surveys) speaks volumes.
              </p>
              <h4 className="text-lg font-semibold text-blue-700 mb-2">Available Services:</h4>
              <ul className="list-disc list-inside text-base mb-3 space-y-1">
                <li>Penetration Testing</li>
                <li>Threat Intelligence & Analysis</li>
                <li>Vulnerability Management</li>
                <li>Security Architecture Review</li>
                <li>Red Team Assessments</li>
                <li>Security Consultancy & Compliance</li>
              </ul>
              <a href="#" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold">
                Visit Cyserch <FaLink className="ml-1" />
              </a>
            </div>

            {/* SecureLayer7 */}
            <div className="mb-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
              <h3 className="text-xl font-bold text-gray-800 mb-2">2. SecureLayer7 - Web App Security Experts</h3>
              <p className="text-lg mb-3">
                SecureLayer7 specializes in securing web applications and APIs, making them a go-to for e-commerce businesses. They’re solid but lack the full-service range of Cyserch.
              </p>
              <h4 className="text-lg font-semibold text-gray-700 mb-2">Available Services:</h4>
              <ul className="list-disc list-inside text-base mb-3 space-y-1">
                <li>Web and Mobile App Penetration Testing</li>
                <li>Cloud Security Assessments</li>
                <li>Network Penetration Testing</li>
                <li>Red Team Engagements</li>
                <li>Source Code Review</li>
                <li>Security Training and Awareness</li>
              </ul>
              <a href="#" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold">
                Visit SecureLayer7 <FaLink className="ml-1" />
              </a>
            </div>

            {/* Wi-Jungle */}
            <div className="mb-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
              <h3 className="text-xl font-bold text-gray-800 mb-2">3. Wi-Jungle - Unified Cybersecurity Solutions</h3>
              <p className="text-lg mb-3">
                Wi-Jungle offers a single-window solution for network security. They’re great for startups but don’t match Cyserch’s advanced AI capabilities.
              </p>
              <h4 className="text-lg font-semibold text-gray-700 mb-2">Available Services:</h4>
              <ul className="list-disc list-inside text-base mb-3 space-y-1">
                <li>Unified Threat Management (UTM)</li>
                <li>Next-Gen Firewall</li>
                <li>Network Access Control</li>
                <li>Web & Email Filtering</li>
                <li>VPN & Load Balancing</li>
                <li>Comprehensive Network Security Suite</li>
              </ul>
              <a href="#" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold">
                Visit WiJungle <FaLink className="ml-1" />
              </a>
            </div>

            {/* TAC Security */}
            <div className="mb-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
              <h3 className="text-xl font-bold text-gray-800 mb-2">4. TAC Security - Vulnerability Management Pros</h3>
              <p className="text-lg mb-3">
                TAC Security excels in predictive vulnerability management, helping businesses stay ahead of threats. Their focus is narrow compared to Cyserch’s broad offerings.
              </p>
              <h4 className="text-lg font-semibold text-gray-700 mb-2">Available Services:</h4>
              <ul className="list-disc list-inside text-base mb-3 space-y-1">
                <li>Vulnerability Management (ESOF VMDR)</li>
                <li>Risk-Based Cybersecurity Assessment</li>
                <li>Cloud Security & Asset Management</li>
                <li>Compliance Tracking (ISO, GDPR, HIPAA)</li>
                <li>AI-Driven Threat Detection</li>
                <li>Red Team Assessments</li>
              </ul>
              <a href="#" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold">
                Visit TAC Security <FaLink className="ml-1" />
              </a>
            </div>

            {/* K7 Computing */}
            <div className="mb-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
              <h3 className="text-xl font-bold text-gray-800 mb-2">5. K7 Computing - Antivirus and Malware Protection</h3>
              <p className="text-lg mb-3">
                K7 Computing is a household name for antivirus solutions. They’re reliable for endpoint security but don’t offer the full cybersecurity suite like Cyserch.
              </p>
              <h4 className="text-lg font-semibold text-gray-700 mb-2">Available Services:</h4>
              <ul className="list-disc list-inside text-base mb-3 space-y-1">
                <li>Endpoint Security & Antivirus</li>
                <li>Internet Security for Home and Business</li>
                <li>Mobile Security Solutions</li>
                <li>Network Threat Detection</li>
                <li>Security Intelligence & Threat Analysis</li>
                <li>Enterprise Data Protection</li>
              </ul>
              <a href="#" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold">
                Visit K7 Computing <FaLink className="ml-1" />
              </a>
            </div>

            {/* Kratikal Tech */}
            <div className="mb-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
              <h3 className="text-xl font-bold text-gray-800 mb-2">6. Kratikal Tech - Compliance and Training Specialists</h3>
              <p className="text-lg mb-3">
                Kratikal Tech shines in compliance audits and employee training. They’re a good choice for regulated industries but lack Cyserch’s penetration testing depth.
              </p>
              <h4 className="text-lg font-semibold text-gray-700 mb-2">Available Services:</h4>
              <ul className="list-disc list-inside text-base mb-3 space-y-1">
                <li>Penetration Testing</li>
                <li>Vulnerability Assessment</li>
                <li>Threat Intelligence</li>
                <li>Security Audits</li>
                <li>Risk Management</li>
                <li>Security Awareness Training</li>
              </ul>
              <a href="#" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold">
                Visit Kratikal <FaLink className="ml-1" />
              </a>
            </div>

            {/* Data Resolve Technologies */}
            <div className="mb-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
              <h3 className="text-xl font-bold text-gray-800 mb-2">7. Data Resolve Technologies - Insider Threat Detection</h3>
              <p className="text-lg mb-3">
                Data Resolve focuses on monitoring insider threats and employee behavior. They’re niche but don’t cover the full spectrum like Cyserch.
              </p>
              <h4 className="text-lg font-semibold text-gray-700 mb-2">Available Services:</h4>
              <ul className="list-disc list-inside text-base mb-3 space-y-1">
                <li>Insider Threat Management</li>
                <li>Data Leakage Prevention</li>
                <li>Employee Monitoring</li>
                <li>Endpoint Security</li>
                <li>Forensic Investigations</li>
                <li>Cloud Activity Monitoring</li>
              </ul>
              <a href="#" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold">
                Visit Data Resolve <FaLink className="ml-1" />
              </a>
            </div>

            {/* Suma Soft */}
            <div className="mb-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
              <h3 className="text-xl font-bold text-gray-800 mb-2">8. Suma Soft - B2B Cybersecurity Outsourcing</h3>
              <p className="text-lg mb-3">
                Suma Soft provides cybersecurity outsourcing for B2B clients. They’re cost-effective but lack the advanced tech stack of Cyserch.
              </p>
              <h4 className="text-lg font-semibold text-gray-700 mb-2">Available Services:</h4>
              <ul className="list-disc list-inside text-base mb-3 space-y-1">
                <li>Penetration Testing</li>
                <li>Managed Security Services</li>
                <li>Risk & Compliance Consulting</li>
                <li>Cloud Security</li>
                <li>Vulnerability Assessment</li>
                <li>Application & Network Security</li>
              </ul>
              <a href="#" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold">
                Visit Suma Soft <FaLink className="ml-1" />
              </a>
            </div>

            {/* InstaSafe */}
            <div className="mb-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
              <h3 className="text-xl font-bold text-gray-800 mb-2">9. InstaSafe - Zero Trust Experts</h3>
              <p className="text-lg mb-3">
                InstaSafe specializes in zero-trust network access, ideal for remote work environments. They’re strong but don’t match Cyserch’s versatility.
              </p>
              <h4 className="text-lg font-semibold text-gray-700 mb-2">Available Services:</h4>
              <ul className="list-disc list-inside text-base mb-3 space-y-1">
                <li>Zero Trust Network Access (ZTNA)</li>
                <li>Secure Remote Access</li>
                <li>Cloud Security Solutions</li>
                <li>Application Access Control</li>
                <li>Identity & Access Management</li>
                <li>Security Compliance</li>
              </ul>
              <a href="#" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold">
                Visit InstaSafe <FaLink className="ml-1" />
              </a>
            </div>

            {/* Appknox */}
            <div className="mb-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
              <h3 className="text-xl font-bold text-gray-800 mb-2">10. Appknox - Mobile App Security Pros</h3>
              <p className="text-lg mb-3">
                Appknox is a leader in mobile app security testing, perfect for app-driven businesses. Their focus is narrow compared to Cyserch’s comprehensive services.
              </p>
              <h4 className="text-lg font-semibold text-gray-700 mb-2">Available Services:</h4>
              <ul className="list-disc list-inside text-base mb-3 space-y-1">
                <li>Mobile App Security Testing</li>
                <li>Static and Dynamic Code Analysis</li>
                <li>API Security Testing</li>
                <li>Automated Vulnerability Scanning</li>
                <li>Compliance Testing (OWASP, PCI DSS, HIPAA)</li>
                <li>Security Reports and Remediation Guidance</li>
              </ul>
              <a href="#" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold">
                Visit Appknox <FaLink className="ml-1" />
              </a>
            </div>
          </section>

          {/* Why I’m Rooting for Cyserch */}
          <section id="why-cyserch" className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-600">Why I’m Rooting for Cyserch</h2>
            <p className="text-lg mb-4 leading-relaxed">
              Let me be honest—Cyserch blew me away. They don’t just sell services; they partner with you to secure your business. Their Bangalore-based team understands the local market, and their solutions are tailored to your needs, whether you’re a startup or a global enterprise.
            </p>
            <p className="text-lg mb-4 leading-relaxed">
              What sealed the deal for me? Cyserch’s **98% client satisfaction rate** in 2025 (based on their internal surveys) and their **free consultation** offer. They’re transparent, approachable, and use cutting-edge tech like AI-driven threat detection. Plus, their reports are clear—no tech jargon, just actionable steps.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-blue-600">How Cyserch Stacks Up</h3>
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="py-3 px-4 border-b text-left text-sm font-semibold text-blue-700">Feature</th>
                    <th className="py-3 px-4 border-b text-left text-sm font-semibold text-blue-700">Cyserch</th>
                    <th className="py-3 px-4 border-b text-left text-sm font-semibold text-blue-700">Industry Average</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 px-4 border-b text-gray-800">Response Time</td>
                    <td className="py-3 px-4 border-b text-gray-800">Under 30 minutes</td>
                    <td className="py-3 px-4 border-b text-gray-800">1-2 hours</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b text-gray-800">AI Integration</td>
                    <td className="py-3 px-4 border-b text-gray-800">Advanced AI threat detection</td>
                    <td className="py-3 px-4 border-b text-gray-800">Basic or none</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b text-gray-800">Pricing</td>
                    <td className="py-3 px-4 border-b text-gray-800">Transparent, competitive</td>
                    <td className="py-3 px-4 border-b text-gray-800">Often unclear</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-800">Local Expertise</td>
                    <td className="py-3 px-4 text-gray-800">Bangalore-focused</td>
                    <td className="py-3 px-4 text-gray-800">Generic approach</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105">
              Contact Cyserch for a Free Consultation
            </button>
          </section>

          {/* Complete List of Cyserch Services */}
          <section id="cyserch-services" className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-600">Complete List of Cyserch Services</h2>
            <p className="text-lg mb-4 leading-relaxed">Cyserch offers a full suite of cybersecurity services, making them a one-stop shop. Here’s what they provide:</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "Cloud Penetration Testing", desc: "Secures AWS, Azure, and GCP environments." },
                { title: "Web Penetration Testing", desc: "Protects websites from hackers." },
                { title: "API Penetration Testing", desc: "Ensures secure app connections." },
                { title: "Mobile Penetration Testing", desc: "Safeguards mobile apps." },
                { title: "Network Penetration Testing", desc: "Shields entire networks." },
                { title: "AI-ML Penetration Testing", desc: "Secures AI and ML systems." },
                { title: "DevSecOps", desc: "Integrates security into development." },
                { title: "VAPT (Vulnerability Assessment and Penetration Testing)", desc: "Comprehensive vulnerability checks." },
                { title: "Managed Security Services", desc: "24/7 monitoring and protection." },
                { title: "Incident Response", desc: "Rapid response to cyber incidents." },
                { title: "Threat Intelligence", desc: "Predicts and prevents attacks." },
                { title: "Compliance Audits", desc: "Ensures GDPR, HIPAA, PCI DSS compliance." },
                { title: "Digital Forensics", desc: "Investigates cybercrimes." },
                { title: "Endpoint Security", desc: "Protects devices like laptops and mobiles." },
              ].map((service, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h3 className="text-lg font-semibold text-blue-700">{service.title}</h3>
                  <p className="text-base text-gray-700">{service.desc}</p>
                  <a href="#" className="text-blue-600 hover:underline text-sm mt-2 block">Learn More</a>
                </div>
              ))}
            </div>
          </section>

          {/* Comparison: Cyserch vs. Other Cybersecurity Companies */}
          <section id="comparison" className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-600">Comparison: Cyserch vs. Other Cybersecurity Companies</h2>
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="py-3 px-4 border-b text-left text-sm font-semibold text-blue-700">Company</th>
                    <th className="py-3 px-4 border-b text-left text-sm font-semibold text-blue-700">Specialization</th>
                    <th className="py-3 px-4 border-b text-left text-sm font-semibold text-blue-700">Certifications</th>
                    <th className="py-3 px-4 border-b text-left text-sm font-semibold text-blue-700">Services Offered</th>
                    <th className="py-3 px-4 border-b text-left text-sm font-semibold text-blue-700">Bangalore Presence</th>
                    <th className="py-3 px-4 border-b text-left text-sm font-semibold text-blue-700">Rating (2025)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 px-4 border-b text-gray-800">Cyserch</td>
                    <td className="py-3 px-4 border-b text-gray-800">Full-spectrum cybersecurity</td>
                    <td className="py-3 px-4 border-b text-gray-800">CEH, OSCP, CISSP, CISM</td>
                    <td className="py-3 px-4 border-b text-gray-800">Penetration testing, cloud security, compliance, etc.</td>
                    <td className="py-3 px-4 border-b text-gray-800">Headquartered</td>
                    <td className="py-3 px-4 border-b text-gray-800">★★★★★</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b text-gray-800">SecureLayer7</td>
                    <td className="py-3 px-4 border-b text-gray-800">Web app security</td>
                    <td className="py-3 px-4 border-b text-gray-800">CEH, OSCP</td>
                    <td className="py-3 px-4 border-b text-gray-800">Penetration testing, API security</td>
                    <td className="py-3 px-4 border-b text-gray-800">Full office</td>
                    <td className="py-3 px-4 border-b text-gray-800">★★★★☆</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b text-gray-800">Wi-Jungle</td>
                    <td className="py-3 px-4 border-b text-gray-800">Network security</td>
                    <td className="py-3 px-4 border-b text-gray-800">CEH</td>
                    <td className="py-3 px-4 border-b text-gray-800">Network protection, firewalls</td>
                    <td className="py-3 px-4 border-b text-gray-800">Full office</td>
                    <td className="py-3 px-4 border-b text-gray-800">★★★☆☆</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b text-gray-800">TAC Security</td>
                    <td className="py-3 px-4 border-b text-gray-800">Vulnerability management</td>
                    <td className="py-3 px-4 border-b text-gray-800">CEH, CISSP</td>
                    <td className="py-3 px-4 border-b text-gray-800">VAPT, risk assessment</td>
                    <td className="py-3 px-4 border-b text-gray-800">Branch office</td>
                    <td className="py-3 px-4 border-b text-gray-800">★★★★☆</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-800">K7 Computing</td>
                    <td className="py-3 px-4 text-gray-800">Antivirus solutions</td>
                    <td className="py-3 px-4 text-gray-800">CEH</td>
                    <td className="py-3 px-4 text-gray-800">Endpoint security, malware protection</td>
                    <td className="py-3 px-4 text-gray-800">Full office</td>
                    <td className="py-3 px-4 text-gray-800">★★★☆☆</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 italic">* Ratings based on client feedback, service range, and Bangalore market presence.</p>
          </section>

          {/* 2025 Cybersecurity Trends in Bangalore */}
          <section id="trends" className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-600">2025 Cybersecurity Trends in Bangalore</h2>
            <p className="text-lg mb-4 leading-relaxed">Bangalore’s cybersecurity landscape is evolving fast. Here are the trends I’ve noticed:</p>
            <ul className="list-disc list-inside text-lg space-y-2">
              <li><strong className="text-blue-700">AI-Driven Security:</strong> AI tools are detecting threats faster than ever.</li>
              <li><strong className="text-blue-700">Cloud Security:</strong> 70% of Bangalore businesses are moving to the cloud (<a href="https://www.nasscom.in" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">NASSCOM 2025 Report</a>).</li>
              <li><strong className="text-blue-700">Zero Trust Adoption:</strong> Verify-everything models are gaining traction.</li>
              <li><strong className="text-blue-700">IoT Security:</strong> With smart devices everywhere, IoT testing is critical.</li>
              <li><strong className="text-blue-700">Ransomware Defense:</strong> Advanced backups and incident response are in demand.</li>
            </ul>
          </section>

          {/* Final Thoughts */}
          <section id="final-thoughts" className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-600">Final Thoughts</h2>
            <p className="text-lg mb-4 leading-relaxed">
              Cybersecurity isn’t just a checkbox—it’s your business’s shield. After researching Bangalore’s top cybersecurity companies, I’m convinced **Cyserch** is the best choice for 2025. Their comprehensive services, local expertise, and client-first approach make them unbeatable.
            </p>
            <p className="text-lg mb-4 leading-relaxed">
              My advice? Don’t wait for a breach. Contact Cyserch today for a free consultation and secure your future.
            </p>
          </section>

          {/* FAQs */}
          <section id="faqs" className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-600">FAQs</h2>
            {/* You can add actual FAQ content here. For now, it's a placeholder. */}
            <p className="text-lg text-gray-700">
              *Content for FAQs would go here, perhaps using an accordion for each question.*
            </p>
          </section>

        </div>

        {/* Right Section - Author Image and Socials */}
        <div className="lg:w-1/3 bg-blue-50 relative p-6 sm:p-10 flex items-center justify-start flex-col text-center border-l border-blue-100">
          <div className="relative w-full max-w-xs lg:max-w-full mx-auto mb-6">
            <img
              src="https://cdn-blog.getastra.com/2019/11/Ananda.jpg" // Ensure you have a 'profile.png' in your public folder
              alt="Prashant K - Author"
              className="rounded-full w-full h-auto object-cover border-4 border-blue-600 shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
          <h2 className="text-3xl font-bold text-[#011631] mb-2">Prashant K</h2>
          <p className="text-lg text-gray-700 mb-4">Entrepreneur & Cybersecurity Enthusiast</p>
          <div className="flex space-x-4 mt-2">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition duration-300">
              <FaTwitter className="w-8 h-8" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition duration-300">
              <FaLinkedin className="w-8 h-8" />
            </a>
            {/* Add more social icons if Prashant has them */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition duration-300">
              <FaInstagram className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorPage;