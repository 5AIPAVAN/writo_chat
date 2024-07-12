import React from 'react';
import Navbar from './Navbar';
import Lower_footer from './Lower_footer';


const PrivacyPolicy = () => {
    return (
        <div>
            <Navbar />
            <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-6">
                <h1 className="text-center text-3xl font-bold mb-6 text-blue-600">Privacy Policy</h1>
                <p className="text-gray-600 mb-6">Effective Date: [Insert Date]</p>

                <h2 className="text-xl font-semibold text-blue-500 mt-4">1. Introduction</h2>
                <p className="text-gray-700 my-4">
                    Welcome to Writo Education. We value your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and share information about you when you visit our website or use our services.
                </p>

                <h2 className="text-xl font-semibold text-blue-500 mt-4">2. Information We Collect</h2>
                <p className="text-gray-700 my-4">We may collect and process the following information about you:</p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                    <li><strong>Personal Information:</strong> Name, email address, phone number, and other contact details.</li>
                    <li><strong>Usage Data:</strong> Information about how you use our website, products, and services.</li>
                    <li><strong>Technical Data:</strong> IP address, browser type, operating system, and other technical details.</li>
                    <li><strong>Cookies:</strong> We use cookies to enhance your experience on our site. For more information, please refer to our <a href="/cookie-policy" className="text-blue-500 underline">Cookie Policy</a>.</li>
                </ul>

                <h2 className="text-xl font-semibold text-blue-500 mt-4">3. How We Use Your Information</h2>
                <p className="text-gray-700 my-4">We use your information to:</p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                    <li>Provide, operate, and maintain our website and services.</li>
                    <li>Improve, personalize, and expand our website and services.</li>
                    <li>Communicate with you, including customer service and support.</li>
                    <li>Send you updates, marketing, and promotional materials.</li>
                    <li>Analyze and monitor usage and trends.</li>
                </ul>

                <h2 className="text-xl font-semibold text-blue-500 mt-4">4. How We Share Your Information</h2>
                <p className="text-gray-700 my-4">We may share your information with:</p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                    <li><strong>Service Providers:</strong> Third parties that help us provide and improve our services.</li>
                    <li><strong>Legal Obligations:</strong> When required by law or to protect our rights.</li>
                    <li><strong>Business Transfers:</strong> In connection with any merger, sale, or transfer of our business.</li>
                </ul>

                <h2 className="text-xl font-semibold text-blue-500 mt-4">5. Your Rights</h2>
                <p className="text-gray-700 my-4">You have the following rights regarding your personal data:</p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                    <li><strong>Access:</strong> You can request a copy of the data we hold about you.</li>
                    <li><strong>Rectification:</strong> You can request correction of inaccurate data.</li>
                    <li><strong>Deletion:</strong> You can request deletion of your data.</li>
                    <li><strong>Objection:</strong> You can object to the processing of your data.</li>
                    <li><strong>Portability:</strong> You can request transfer of your data to another service.</li>
                </ul>
                <p className="text-gray-700 my-4">To exercise these rights, please contact us at [Insert Contact Email].</p>

                <h2 className="text-xl font-semibold text-blue-500 mt-4">6. Data Security</h2>
                <p className="text-gray-700 my-4">
                    We implement appropriate technical and organizational measures to protect your data from unauthorized access, use, or disclosure.
                </p>

                <h2 className="text-xl font-semibold text-blue-500 mt-4">7. Changes to This Policy</h2>
                <p className="text-gray-700 my-4">
                    We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.
                </p>

                <h2 className="text-xl font-semibold text-blue-500 mt-4">8. Contact Us</h2>
                <p className="text-gray-700 my-4">
                    If you have any questions about this privacy policy, please contact us at:
                </p>
                <p className="text-gray-700 my-4">Email: [Insert Contact Email]</p>
                <p className="text-gray-700 my-4">Address: [Insert Company Address]</p>
            </div>
            <Lower_footer />
        </div>
    );
};

export default PrivacyPolicy;
