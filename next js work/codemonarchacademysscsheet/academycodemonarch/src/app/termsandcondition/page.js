

import React from "react";
import Navbar from "../Navbar";
import FooterSection from "../FooterSection";

export default function TermsPage() {
  return (
    <div className="w-full bg-black/90 py-16 px-4">
      <Navbar/>
    <div className="max-w-4xl mx-auto p-6 text-white mt-10">
      <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: October 31, 2025</p>

      <p className="mb-6">
        Welcome to <strong>Codemonarch</strong> the Website. By accessing or using this
        Website, you agree to comply with and be bound by the following Terms and
        Conditions. If you do not agree with any part of these Terms, please do not
        use our Website.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">1. Use of the Website</h2>
      <p className="mb-4">
        You agree to use the Website only for lawful purposes and in a manner that
        does not infringe upon the rights of others or restrict their use and enjoyment
        of the Website. You must not:
      </p>
      <ul className="list-disc ml-6 mb-6 space-y-1">
        <li>Attempt to gain unauthorized access to the Website or its servers.</li>
        <li>Copy, modify, or distribute any content without proper authorization.</li>
        <li>Use the Website to transmit harmful or malicious code.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">2. Intellectual Property Rights</h2>
      <p className="mb-6">
        All content on this Website — including text, questions, explanations, videos,
        graphics, logos, and design — is the property of <strong>Codemonarch</strong> or its
        content providers. You may not reproduce, distribute, or modify any material
        without prior written permission.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">3. User Content</h2>
      <p className="mb-6">
        By submitting any comments, feedback, or other materials, you grant{" "}
        <strong>Codemonarch</strong> a non-exclusive, royalty-free, worldwide license to
        use, reproduce, and display that content for Website improvement and user
        experience purposes.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">4. Accuracy of Information</h2>
      <p className="mb-6">
        We strive to ensure all information on this Website is accurate and up to date.
        However, <strong>Codemonarch</strong> makes no warranties or representations about
        the completeness, reliability, or accuracy of the content. Use of any
        information is at your own risk.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">5. Third-Party Links</h2>
      <p className="mb-6">
        Our Website may contain links to external sites that are not operated by us. We
        are not responsible for the content or privacy practices of those websites.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">6. Disclaimer</h2>
      <p className="mb-6">
        The content provided on <strong>Codemonarch</strong> is for{" "}
        <strong>educational and informational purposes only</strong>. We do not guarantee
        any exam results, job selection, or certification outcomes.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">7. Limitation of Liability</h2>
      <p className="mb-6">
        In no event shall <strong>Codemonarch</strong> or its team be liable for any
        indirect, incidental, or consequential damages arising out of your use of the
        Website.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">8. Changes to Terms</h2>
      <p className="mb-6">
        We may update these Terms from time to time. Any changes will be reflected on
        this page with an updated “Last updated” date. It is your responsibility to
        review these Terms periodically.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">9. Advertisement & Sponsored Content</h2>
      <p className="mb-6">
        Our Website displays advertisements served by Google AdSense to help support free access to our educational content. These ads are served based on your browsing history and interests. We do not endorse or are responsible for the content of third-party advertisements, and clicking on ads does not imply our recommendation.
      </p>
      <p className="mb-6">
        All advertising on CodeMonarch Academy complies with Google AdSense policies and advertising standards. We maintain transparency in our monetization practices.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">10. Contact Us</h2>
      <p className="mb-6">
        If you have any questions about these Terms and Conditions, please contact us
        at:
      </p>
      <p>
        📧 <strong>https://codemonarch.com/support</strong>
      </p>
    </div>
    <FooterSection/>
    </div>
  );
}
