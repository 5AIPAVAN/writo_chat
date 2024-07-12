import React, { useState } from 'react';
import Navbar from './Navbar';
import { CiSquarePlus } from "react-icons/ci";
import Lower_footer from './Lower_footer';

const Faq = () => {
    const faqs = [
        {
            question: "How do I enroll in a course?",
            answer: "To enroll in a course, visit our Courses page, select the course you're interested in, and click the 'Enroll Now' button. Follow the instructions to complete your enrollment."
        },
        {
            question: "What payment methods are accepted?",
            answer: "We accept various payment methods including credit cards, debit cards, and PayPal."
        },
        {
            question: "Can I get a refund if I am not satisfied with the course?",
            answer: "Yes, we offer a 30-day money-back guarantee. If you are not satisfied with the course, you can request a refund within 30 days of purchase."
        },
        {
            question: "How can I contact customer support?",
            answer: "You can contact our customer support team via email at support@writoeducation.com or by calling (123) 456-7890."
        }
    ];

    const recentQuestions = [
        {
            question: "What are the prerequisites for the Advanced Mathematics course?",
            answer: "The prerequisites for the Advanced Mathematics course include a basic understanding of algebra and calculus."
        },
        {
            question: "Are there any discounts available for bulk enrollments?",
            answer: "Yes, we offer discounts for bulk enrollments. Please contact our support team for more details."
        },
        {
            question: "How do I access course materials after enrollment?",
            answer: "Once enrolled, you can access course materials through your student dashboard. Simply log in with your credentials and navigate to 'My Courses'."
        },
        {
            question: "Can I switch courses after enrolling?",
            answer: "Yes, you can switch courses within the first two weeks of enrollment. Please contact our support team to assist with the switch."
        }
    ];

    const [visibleFaq, setVisibleFaq] = useState(null);
    const [visibleRecentQuestion, setVisibleRecentQuestion] = useState(null);

    const toggleFaq = (index) => {
        setVisibleFaq(visibleFaq === index ? null : index);
    };

    const toggleRecentQuestion = (index) => {
        setVisibleRecentQuestion(visibleRecentQuestion === index ? null : index);
    };

    return (
        <div>
            <Navbar />
            <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-6">
                <h1 className="text-center text-3xl font-bold mb-6 text-blue-600">FAQs and Help</h1>
                
                <h2 className="text-xl font-semibold text-blue-500 mt-4">Frequently Asked Questions</h2>
                <div className="mt-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="mb-4 border p-4 rounded">
                            <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFaq(index)}>
                                <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
                                <CiSquarePlus className="text-2xl text-gray-800" />
                            </div>
                            {visibleFaq === index && (
                                <p className="text-gray-700 mt-2">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>

                <h2 className="text-xl font-semibold text-blue-500 mt-8">Recently Asked Questions</h2>
                <div className="mt-4">
                    {recentQuestions.map((question, index) => (
                        <div key={index} className="mb-4 border p-4 rounded">
                            <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleRecentQuestion(index)}>
                                <h3 className="text-lg font-medium text-gray-800">{question.question}</h3>
                                <CiSquarePlus className="text-2xl text-gray-800" />
                            </div>
                            {visibleRecentQuestion === index && (
                                <p className="text-gray-700 mt-2">{question.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <Lower_footer />
        </div>
    );
};

export default Faq;
