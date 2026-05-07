

import React from "react";
import FooterSection from "../FooterSection";
import Navbar from "../Navbar";
export default function PrivacyPolicyPage() {
  return (
    <div className="w-full bg-black/90 py-16 px-4">
          <Navbar/>
    <div className="max-w-4xl mx-auto p-6 text-white mt-10">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: October 31, 2025</p>

      <p className="mb-6">
        At <strong>Codemonarch</strong>, accessible from{" "}
        <a href="https://academy.codemonarch.com" className="text-blue-600 underline">
          https://academy.codemonarch.com
        </a>
        , your privacy is one of our top priorities. This Privacy Policy describes how
        we collect, use, and protect your information when you visit or use our Website.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">1. Information We Collect</h2>
      <p className="mb-4">
        We may collect the following types of information from our users:
      </p>
      <ul className="list-disc ml-6 mb-6 space-y-1">
        <li>
          <strong>Personal Information:</strong> such as name, email address, or other
          details you provide when signing up or contacting us.
        </li>
        <li>
          <strong>Usage Data:</strong> including pages visited, time spent on pages,
          clicks, and referring sites.
        </li>
        <li>
          <strong>Cookies and Tracking:</strong> small data files used to improve your
          browsing experience and analyze site performance.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">2. How We Use Your Information</h2>
      <p className="mb-4">We use the information we collect to:</p>
      <ul className="list-disc ml-6 mb-6 space-y-1">
        <li>Improve the quality and functionality of our Website.</li>
        <li>Personalize user experience and deliver relevant content.</li>
        <li>Respond to your comments, feedback, or inquiries.</li>
        <li>Monitor website performance and detect technical issues.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">3. Google AdSense and Cookies</h2>
      <p className="mb-6">
        We use <strong>Google AdSense</strong> to serve ads on our Website. Google uses
        cookies to deliver personalized ads based on your previous visits to this and
        other websites. You can opt out of personalized advertising by visiting
        <a
          href="https://www.google.com/settings/ads"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Google Ad Settings
        </a>
        .
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">4. Data Security</h2>
      <p className="mb-6">
        We use appropriate security measures to protect your personal information from
        unauthorized access, alteration, disclosure, or destruction. However, no method
        of data transmission over the internet is 100% secure.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">5. Third-Party Services</h2>
      <p className="mb-6">
        Our Website may contain links to external sites or services that are not operated
        by us. We are not responsible for the content or privacy practices of those
        websites.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">6. Children Privacy</h2>
      <p className="mb-6">
        Our services are not directed toward children under 13 years of age. We do not
        knowingly collect personal information from children. If you believe your child
        has provided us with personal information, please contact us to remove it.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">7. Your Rights</h2>
      <p className="mb-6">
        You may request access to, correction of, or deletion of your personal data by
        contacting us. You can also withdraw consent for data collection at any time.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">8. Updates to This Policy</h2>
      <p className="mb-6">
        We may update this Privacy Policy from time to time. Changes will be posted on
        this page with an updated Last updated date. Continued use of our Website
        indicates your acceptance of the updated policy.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">9. Contact Us</h2>
      <p className="mb-6">
        If you have any questions about this Privacy Policy, please contact us:
      </p>
      <p>
        📧 <strong>https://codemonarch.com/support</strong>
      </p>
    </div>
    <FooterSection/>
    </div>
  );
}
