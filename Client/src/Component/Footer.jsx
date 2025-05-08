import React from 'react';

const Footer = () => {
  const sectionStyle = 'text-white font-semibold mb-3';
  const listItemStyle = 'hover:text-indigo-400 cursor-pointer';

  return (
    <footer className="bg-gray-900 text-gray-300 px-6 md:px-12 lg:px-20 py-16 text-sm mt-5">
      {/* Top Sections */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h3 className={sectionStyle}>In-demand Careers</h3>
          <ul className="space-y-1">
            <li className={listItemStyle}>Data Scientist</li>
            <li className={listItemStyle}>Full Stack Web Developer</li>
            <li className={listItemStyle}>Cloud Engineer</li>
            <li className={listItemStyle}>Project Manager</li>
            <li className={listItemStyle}>Game Developer</li>
            <li className="text-indigo-400 cursor-pointer">See all Career Accelerators</li>
          </ul>
        </div>

        <div>
          <h3 className={sectionStyle}>Web Development</h3>
          <ul className="space-y-1">
            <li className={listItemStyle}>Web Development</li>
            <li className={listItemStyle}>JavaScript</li>
            <li className={listItemStyle}>React JS</li>
            <li className={listItemStyle}>Angular</li>
            <li className={listItemStyle}>Java</li>
          </ul>
        </div>

        <div>
          <h3 className={sectionStyle}>IT Certifications</h3>
          <ul className="space-y-1">
            <li className={listItemStyle}>Amazon AWS</li>
            <li className={listItemStyle}>AWS Certified Cloud Practitioner</li>
            <li className={listItemStyle}>AZ-900: Microsoft Azure Fundamentals</li>
            <li className={listItemStyle}>AWS Certified Solutions Architect</li>
            <li className={listItemStyle}>Kubernetes</li>
          </ul>
        </div>

        <div>
          <h3 className={sectionStyle}>Leadership</h3>
          <ul className="space-y-1">
            <li className={listItemStyle}>Leadership</li>
            <li className={listItemStyle}>Management Skills</li>
            <li className={listItemStyle}>Project Management</li>
            <li className={listItemStyle}>Personal Productivity</li>
            <li className={listItemStyle}>Emotional Intelligence</li>
          </ul>
        </div>

       
      </div>

      {/* Mid Sections */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mt-12">
      <div>
          <h3 className={sectionStyle}>Certifications by Skill</h3>
          <ul className="space-y-1">
            <li className={listItemStyle}>Cybersecurity Certification</li>
            <li className={listItemStyle}>Project Management Certification</li>
            <li className={listItemStyle}>Cloud Certification</li>
            <li className={listItemStyle}>Data Analytics Certification</li>
            <li className={listItemStyle}>HR Management Certification</li>
            <li className="text-indigo-400 cursor-pointer">See all Certifications</li>
          </ul>
        </div>
        <div>
          <h3 className={sectionStyle}>Data Science</h3>
          <ul className="space-y-1">
            <li className={listItemStyle}>Data Science</li>
            <li className={listItemStyle}>Python</li>
            <li className={listItemStyle}>Machine Learning</li>
            <li className={listItemStyle}>ChatGPT</li>
            <li className={listItemStyle}>Deep Learning</li>
          </ul>
        </div>
        <div>
          <h3 className={sectionStyle}>Communication</h3>
          <ul className="space-y-1">
            <li className={listItemStyle}>Communication Skills</li>
            <li className={listItemStyle}>Presentation Skills</li>
            <li className={listItemStyle}>Public Speaking</li>
            <li className={listItemStyle}>Writing</li>
            <li className={listItemStyle}>PowerPoint</li>
          </ul>
        </div>
        <div>
          <h3 className={sectionStyle}>Business Analytics & Intelligence</h3>
          <ul className="space-y-1">
            <li className={listItemStyle}>Microsoft Excel</li>
            <li className={listItemStyle}>SQL</li>
            <li className={listItemStyle}>Power BI</li>
            <li className={listItemStyle}>Data Analysis</li>
            <li className={listItemStyle}>Business Analysis</li>
          </ul>
        </div>
      </div>

      {/* Bottom Sections */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-10 border-t border-gray-700 bg-black">
        <div>
          <h3 className={sectionStyle}>About</h3>
          <ul className="space-y-1">
            <li className={listItemStyle}>About us</li>
            <li className={listItemStyle}>Careers</li>
            <li className={listItemStyle}>Contact us</li>
            <li className={listItemStyle}>Blog</li>
            <li className={listItemStyle}>Investors</li>
          </ul>
        </div>

        <div>
          <h3 className={sectionStyle}>Discover Udemy</h3>
          <ul className="space-y-1">
            <li className={listItemStyle}>Get the app</li>
            <li className={listItemStyle}>Teach on Udemy</li>
            <li className={listItemStyle}>Plans and Pricing</li>
            <li className={listItemStyle}>Affiliate</li>
            <li className={listItemStyle}>Help and Support</li>
          </ul>
        </div>

        <div>
          <h3 className={sectionStyle}>Udemy for Business</h3>
          <ul className="space-y-1">
            <li className={listItemStyle}>Udemy Business</li>
          </ul>
        </div>

        <div>
          <h3 className={sectionStyle}>Legal & Accessibility</h3>
          <ul className="space-y-1">
            <li className={listItemStyle}>Accessibility statement</li>
            <li className={listItemStyle}>Privacy policy</li>
            <li className={listItemStyle}>Sitemap</li>
            <li className={listItemStyle}>Terms</li>
          </ul>
        </div>
      </div>

    
    </footer>
  );
};

export default Footer;
