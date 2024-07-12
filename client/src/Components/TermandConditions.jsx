import React from 'react'
import Navbar from './Navbar'
import Lower_footer from './Lower_footer'
const TermandConditions = () => {
  return (
    <div>
       <div>
            <Navbar />
            <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-6">
                <h1 className="text-center text-3xl font-bold mb-6 text-blue-600">Terms and Conditions</h1>
                <p className="text-gray-600 mb-6">Effective Date: [Insert Date]</p>

                <h2 className="text-xl font-semibold text-blue-500 mt-4">1. Introduction</h2>
                <p className="text-gray-700 my-4">
                    Welcome to Writo Education. These terms and conditions outline the rules and regulations for the use of Writo Education's Website.
                </p>
                <p className="text-gray-700 my-4">
                    By accessing this website we assume you accept these terms and conditions. Do not continue to use Writo Education if you do not agree to all of the terms and conditions stated on this page.
                </p>

                <h2 className="text-xl font-semibold text-blue-500 mt-4">2. Intellectual Property Rights</h2>
                <p className="text-gray-700 my-4">
                    Unless otherwise stated, Writo Education and/or its licensors own the intellectual property rights for all material on Writo Education. All intellectual property rights are reserved. You may access this from Writo Education for your own personal use subjected to restrictions set in these terms and conditions.
                </p>

                <h2 className="text-xl font-semibold text-blue-500 mt-4">3. User Content</h2>
                <p className="text-gray-700 my-4">
                    Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Writo Education does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Writo Education, its agents and/or affiliates. Comments reflect the views and opinions of the person who posts their views and opinions. To the extent permitted by applicable laws, Writo Education shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.
                </p>

                <h2 className="text-xl font-semibold text-blue-500 mt-4">4. Limitation of Liability</h2>
                <p className="text-gray-700 my-4">
                    In no event shall Writo Education, nor any of its officers, directors and employees, be liable to you for anything arising out of or in any way connected with your use of this Website, whether such liability is under contract, tort or otherwise, and Writo Education, including its officers, directors and employees shall not be liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.
                </p>

                <h2 className="text-xl font-semibold text-blue-500 mt-4">5. Indemnification</h2>
                <p className="text-gray-700 my-4">
                    You hereby indemnify to the fullest extent Writo Education from and against any and/or all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these Terms.
                </p>

                <h2 className="text-xl font-semibold text-blue-500 mt-4">6. Governing Law & Jurisdiction</h2>
                <p className="text-gray-700 my-4">
                    These Terms will be governed by and interpreted in accordance with the laws of the State of [Insert State], and you submit to the non-exclusive jurisdiction of the state and federal courts located in [Insert State] for the resolution of any disputes.
                </p>

                <h2 className="text-xl font-semibold text-blue-500 mt-4">7. Changes to These Terms</h2>
                <p className="text-gray-700 my-4">
                    We may update these terms and conditions from time to time. We will notify you of any changes by posting the new terms and conditions on this page.
                </p>

                <h2 className="text-xl font-semibold text-blue-500 mt-4">8. Contact Us</h2>
                <p className="text-gray-700 my-4">
                    If you have any questions about these Terms, please contact us at:
                </p>
                <p className="text-gray-700 my-4">Email: [Insert Contact Email]</p>
                <p className="text-gray-700 my-4">Address: [Insert Company Address]</p>
            </div>
        </div>
        <Lower_footer   />
    </div>
  )
}

export default TermandConditions
