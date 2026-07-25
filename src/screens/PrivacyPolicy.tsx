import React, { useEffect } from "react";

export const PrivacyPolicy: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800 leading-relaxed font-sans">
      <header className="border-b border-gray-200 pb-6 mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Privacy Policy for Nomu Izakaya Mobile App
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Powered by Toast &bull; <span className="font-semibold">Last Updated:</span> April 28, 2026
        </p>
      </header>

      <p className="mb-6">
        This Privacy Policy describes how personal information is collected, used, and disclosed when you download and use the Nomu Mobile App (the &ldquo;App&rdquo;), and the choices and rights you have to protect your personal information collected via the App.
      </p>

      <p className="mb-6">
        Nomu Izakaya (&ldquo;Merchant&rdquo;) is responsible for the personal information collected when you use the App. The App uses technology provided by Toast, Inc. (&ldquo;Toast&rdquo;). To learn more about Toast&rsquo;s privacy practices, please visit Toast&rsquo;s Privacy Statement at{" "}
        <a
          href="https://pos.toasttab.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:underline"
        >
          https://pos.toasttab.com/privacy
        </a>.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-indigo-600 pl-3">
          Personal Information Collected Via the App
        </h2>
        <p className="mb-4">The App collects the following categories of personal information:</p>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong className="text-gray-900">Contact information.</strong> You may submit your name, email, phone number, and address to the App.
          </li>
          <li>
            <strong className="text-gray-900">Orders and order history.</strong> The App collects and retains the orders you place via the App, including the items you order, date and time of the order, order amounts, delivery locations, tips, order frequency, favorite restaurant locations or menu items, and any preferences or selections you submit with your order.
          </li>
          <li>
            <strong className="text-gray-900">Payment information.</strong> You may input your payment card information, including your card number, security code, and expiration date, or provide other payment information (such as Apple Pay or Google Pay).
          </li>
          <li>
            <strong className="text-gray-900">Precise location.</strong> If you choose to enable it, the App will collect your precise location information to provide you with certain location-enabled features, such as to display and alert you to restaurants nearby and provide live map views. You can disable precise location at any time through your device settings.
          </li>
          <li>
            <strong className="text-gray-900">Rewards program and gift cards.</strong> If you participate in Merchant&rsquo;s rewards program or any other reward program supported by Merchant or the App, the App collects information about your rewards program status, including your points balance and redemptions. The App also collects information about any gift cards you receive or send, including the value of the card and balances.
          </li>
          <li>
            <strong className="text-gray-900">Device and usage information.</strong> The App automatically logs information about you, your mobile device, and your interaction over time with the App. This includes: device information, such as your device type, browser type, IP address, device identifiers, language settings, carrier, and general location information; and usage information, such as screens you viewed, how long you spent on a page, browsing history, and access times, and page clicks, page scrolls, and page element interactions. The App also sends crash reports in the event of an error for analysis and troubleshooting purposes.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-indigo-600 pl-3">
          How Your Personal Information is Used
        </h2>
        <p className="mb-4">Merchant may use your personal information for the following purposes:</p>
        <ul className="list-disc pl-6 space-y-3 mb-4">
          <li>
            <strong className="text-gray-900">To provide the App and any features you use.</strong> This includes authenticating your access to the App; administering your account; allowing you to place orders and remember your preferences; processing transactions; and providing any features that you use within the App, such as location-enabled features and access to loyalty program benefits.
          </li>
          <li>
            <strong className="text-gray-900">To personalize your experience in the App and provide recommendations.</strong> This includes personalizing the items you see displayed in the App and recommending restaurant locations and menu items that may interest you based on your past orders and preferences. The App may also send you notifications of locations or items that may interest you. You can control notifications in your device or App settings.
          </li>
          <li>
            <strong className="text-gray-900">Troubleshooting and App improvement.</strong> Your information may be used to analyze the performance of the App, identify and correct errors, and develop and improve App features and functionality. Your information may also be aggregated with other users&rsquo; information, or otherwise anonymized, to create statistics or for other lawful business purposes, including analytics, forecasting, and strategic planning.
          </li>
        </ul>

        <p className="mb-4">Merchant may also use personal information collected through the App for the following purposes:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>To analyze users&rsquo; selections and preferences in order to improve Merchant&rsquo;s offerings, identify opportunities for growth, and conduct market research;</li>
          <li>To send you marketing communications outside the App (including by email, text message or other channels) and to advertise to you and others with similar interests on third-party websites and platforms; and</li>
          <li>For compliance and protection, including to enforce any applicable terms and conditions, comply with legal obligations, defend against legal claims or disputes, protect the security and integrity of the App, and identify and investigate fraudulent, harmful, unauthorized, unethical or illegal activity.</li>
        </ul>
        <p className="text-sm text-gray-600 italic">
          These uses outside the App are just examples and may not reflect all the ways Merchant uses personal information outside the App. To learn more, please contact Merchant directly.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-indigo-600 pl-3">
          How Your Information Is Shared
        </h2>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong className="text-gray-900">Sharing with Toast.</strong> Because the App is operated by Toast, any information you provide via the App, or that Merchant inputs to the App, may be hosted and stored by Toast on Merchant&rsquo;s behalf.
          </li>
          <li>
            <strong className="text-gray-900">Service providers.</strong> The App relies on other service providers that are needed to administer and support the App and its features, including hosting services, communications, data and cyber security services, payment processing services, identity verification, fraud detection, investigation and prevention services, and customer relationship management systems.
          </li>
          <li>
            <strong className="text-gray-900">Sharing initiated by Merchant.</strong> The App may share information with partners selected by Merchant, such as delivery services and loyalty programs offered by third parties. Merchant may also share information with advertising partners, including via pixels and similar technologies, to allow Merchant to advertise to you and others with similar interests on third-party websites and platforms.
          </li>
          <li>
            <strong className="text-gray-900">Authorities and others.</strong> Your personal information may be shared with law enforcement, government authorities, and private parties, where required by law or necessary or appropriate to protect legal rights or the security or integrity of the App.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-indigo-600 pl-3">
          Your Privacy Choices
        </h2>
        <p className="mb-4">Within your App settings, you have the following choices regarding your personal information:</p>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong className="text-gray-900">Access, change your account information.</strong> You may access your personal information through your account on the App. You can also correct account information that is out of date or inaccurate.
          </li>
          <li>
            <strong className="text-gray-900">Delete your account.</strong> To delete your account, follow the instructions within the App settings page.
          </li>
          <li>
            <strong className="text-gray-900">Additional rights and choices.</strong> To disable third-party advertising pixels and similar technologies, visit the privacy page in your App settings. Merchant may offer additional choices and allow you to exercise any rights accorded to you under applicable laws. For more information, please contact Merchant directly.
          </li>
          <li>
            <strong className="text-gray-900">Do Not Track.</strong> Some Internet browsers may be configured to send &ldquo;Do Not Track&rdquo; signals to the online services that you visit. The App does not respond to &ldquo;Do Not Track&rdquo; signals. To find out more about &ldquo;Do Not Track,&rdquo; please visit{" "}
            <a
              href="http://www.allaboutdnt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline"
            >
              http://www.allaboutdnt.com
            </a>.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-indigo-600 pl-3">
          Changes to This Privacy Policy
        </h2>
        <p>
          This Privacy Policy may be modified at any time. You will be notified of any material changes to the Privacy Policy in accordance with applicable laws.
        </p>
      </section>

      <section className="mb-12 bg-gray-50 p-6 rounded-lg border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Contact Us</h2>
        <p>
          For any questions about the privacy practices described in this Privacy Policy, please contact Nomu at:{" "}
          <a href="mailto:edward@nomuizakayajax.com" className="text-indigo-600 font-medium hover:underline">
            edward@nomuizakayajax.com
          </a>
        </p>
      </section>

      <hr className="my-10 border-gray-300" />

      {/* California Addendum */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">California Addendum</h2>
        <p className="mb-6 text-gray-700">
          This California Addendum supplements the Privacy Policy for Nomu Izakaya Mobile App and applies only to personal information collected via the App that relates to California residents and is regulated by the California Consumer Privacy Act (&ldquo;CCPA&rdquo;).
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mb-3">CCPA Categories of Personal Information</h3>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-left text-sm text-gray-600 border-collapse border border-gray-200">
            <thead className="bg-gray-100 text-gray-900 font-semibold border-b border-gray-200">
              <tr>
                <th className="p-3 border-r border-gray-200">Data Category Collected</th>
                <th className="p-3 border-r border-gray-200">Collected?</th>
                <th className="p-3 border-r border-gray-200">Primary Purposes of Processing</th>
                <th className="p-3 border-r border-gray-200">Key Disclosures</th>
                <th className="p-3">Can You Limit Sharing?</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="p-3 border-r border-gray-200 font-medium text-gray-900">Identifiers (name, email, IP address)</td>
                <td className="p-3 border-r border-gray-200 text-green-700 font-semibold">Yes</td>
                <td className="p-3 border-r border-gray-200">Provide App features, personalize experience, troubleshooting &amp; improvement.</td>
                <td className="p-3 border-r border-gray-200">Toast &amp; service providers</td>
                <td className="p-3">No</td>
              </tr>
              <tr>
                <td className="p-3 border-r border-gray-200 font-medium text-gray-900">California Customer Records Statute info</td>
                <td className="p-3 border-r border-gray-200 text-green-700 font-semibold">Yes</td>
                <td className="p-3 border-r border-gray-200">Provide App features, personalize experience, troubleshooting &amp; improvement.</td>
                <td className="p-3 border-r border-gray-200">Toast &amp; service providers</td>
                <td className="p-3">No</td>
              </tr>
              <tr>
                <td className="p-3 border-r border-gray-200 font-medium text-gray-900">Protected characteristics</td>
                <td className="p-3 border-r border-gray-200 text-gray-500">No</td>
                <td className="p-3 border-r border-gray-200">N/A</td>
                <td className="p-3 border-r border-gray-200">N/A</td>
                <td className="p-3">N/A</td>
              </tr>
              <tr>
                <td className="p-3 border-r border-gray-200 font-medium text-gray-900">Commercial information (order records)</td>
                <td className="p-3 border-r border-gray-200 text-green-700 font-semibold">Yes</td>
                <td className="p-3 border-r border-gray-200">Provide App features, personalize experience, troubleshooting &amp; improvement.</td>
                <td className="p-3 border-r border-gray-200">Toast &amp; service providers</td>
                <td className="p-3">No</td>
              </tr>
              <tr>
                <td className="p-3 border-r border-gray-200 font-medium text-gray-900">Professional or employment-related info</td>
                <td className="p-3 border-r border-gray-200 text-gray-500">No</td>
                <td className="p-3 border-r border-gray-200">N/A</td>
                <td className="p-3 border-r border-gray-200">N/A</td>
                <td className="p-3">N/A</td>
              </tr>
              <tr>
                <td className="p-3 border-r border-gray-200 font-medium text-gray-900">Biometric information</td>
                <td className="p-3 border-r border-gray-200 text-gray-500">No</td>
                <td className="p-3 border-r border-gray-200">N/A</td>
                <td className="p-3 border-r border-gray-200">N/A</td>
                <td className="p-3">N/A</td>
              </tr>
              <tr>
                <td className="p-3 border-r border-gray-200 font-medium text-gray-900">Internet / electronic network activity</td>
                <td className="p-3 border-r border-gray-200 text-green-700 font-semibold">Yes</td>
                <td className="p-3 border-r border-gray-200">Provide App features, personalize experience, troubleshooting &amp; improvement.</td>
                <td className="p-3 border-r border-gray-200">Toast &amp; service providers</td>
                <td className="p-3">No</td>
              </tr>
              <tr>
                <td className="p-3 border-r border-gray-200 font-medium text-gray-900">Geolocation data</td>
                <td className="p-3 border-r border-gray-200 text-green-700 font-semibold">Yes</td>
                <td className="p-3 border-r border-gray-200">Provide App features, personalize experience, troubleshooting &amp; improvement.</td>
                <td className="p-3 border-r border-gray-200">Toast &amp; service providers</td>
                <td className="p-3">No</td>
              </tr>
              <tr>
                <td className="p-3 border-r border-gray-200 font-medium text-gray-900">Audio, visual, thermal info</td>
                <td className="p-3 border-r border-gray-200 text-gray-500">No</td>
                <td className="p-3 border-r border-gray-200">N/A</td>
                <td className="p-3 border-r border-gray-200">N/A</td>
                <td className="p-3">N/A</td>
              </tr>
              <tr>
                <td className="p-3 border-r border-gray-200 font-medium text-gray-900">Education records</td>
                <td className="p-3 border-r border-gray-200 text-gray-500">No</td>
                <td className="p-3 border-r border-gray-200">N/A</td>
                <td className="p-3 border-r border-gray-200">N/A</td>
                <td className="p-3">N/A</td>
              </tr>
              <tr>
                <td className="p-3 border-r border-gray-200 font-medium text-gray-900">Inferences drawn from behavior</td>
                <td className="p-3 border-r border-gray-200 text-green-700 font-semibold">Yes</td>
                <td className="p-3 border-r border-gray-200">Provide App features, personalize experience, troubleshooting &amp; improvement.</td>
                <td className="p-3 border-r border-gray-200">Toast &amp; service providers</td>
                <td className="p-3">No</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-2">Additional Purposes of Processing</h3>
        <p className="mb-2">Merchant may also use personal information collected through the App to:</p>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>Analyze selections &amp; preferences to improve offerings and conduct market research.</li>
          <li>Send marketing communications (email, text, advertising on third-party platforms).</li>
          <li>Ensure compliance, enforce terms, defend against legal claims, and prevent fraud.</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-900 mb-2">Additional Disclosures of Personal Information</h3>
        <p className="mb-4">
          Merchant may share personal information with delivery/loyalty partners, acquisition partners during corporate transactions, and legal authorities as required by law.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mb-2">Your Privacy Choices (CCPA)</h3>
        <p className="mb-4">
          California residents have the right to request information, access, correction, and deletion of personal information (limited to statutory CCPA exceptions, e.g., max 2 requests per 12-month period).
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mb-2">Sensitive Personal Information</h3>
        <p className="mb-4">
          We collect precise location data (if enabled) and dietary/dining preferences (which may reveal allergies or religious beliefs). You may limit or withdraw consent via your app/device settings.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mb-2">Personal Information Retention</h3>
        <p>
          Retained for as long as necessary to facilitate App access and for a reasonable time thereafter in accordance with applicable laws.
        </p>
      </section>

      <hr className="my-10 border-gray-300" />

      {/* US State Law Addendum */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">US State Law Addendum</h2>
        <p className="mb-4 text-gray-700">
          This US State Law Addendum supplements the Privacy Policy for Nomu Izakaya Mobile App and applies to residents of Virginia, Colorado, Connecticut, Texas, Montana, Oregon, and Utah.
        </p>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Additional Rights Under US State Privacy Laws</h3>
        <p className="mb-4">
          Consumers have rights regarding information access, correction, deletion, and appeal of decisions. To submit requests or appeals, please contact us at{" "}
          <a href="mailto:edward@nomuizakayajax.com" className="text-indigo-600 hover:underline">
            edward@nomuizakayajax.com
          </a>.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mb-2">Sensitive Personal Information &amp; Consent</h3>
        <p className="mb-4">
          Collection of precise location and dietary preferences relies on user consent, which can be withdrawn at any time in device or profile settings.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mb-2">Personal Information Retention</h3>
        <p>
          Personal information is retained as long as necessary to fulfill App services and legally compliant requirements.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
