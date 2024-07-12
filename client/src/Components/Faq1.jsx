import React,{useState}  from 'react'

const Faq1 = () => {
    const [click,setclick]=useState(false);

    const handleclick=()=>{
        setclick(!click);
    }
    const faqs = [
        {
          id: 1,
          question: 'How can I find a mentor?',
          answer: 'You can find a mentor by browsing through our list of experienced mentors and choosing one that aligns with your goals and interests.',
        },
        {
          id: 2,
          question: 'What are the benefits of having a mentor?',
          answer: 'Having a mentor can provide guidance, support, and valuable insights to help you achieve your goals faster and more effectively.',
        },
        {
          id: 3,
          question: 'How often should I communicate with my mentor?',
          answer: 'The frequency of communication with your mentor can vary depending on your needs and availability. It is recommended to establish a regular schedule that works for both you and your mentor.',
        },
      ];

  return (
    <div className="container mx-auto py-12 bg-gray-100">
    <h2 className="text-3xl font-bold text-center mb-8">FAQs</h2>
    {/* FAQ chat */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 m-4">
      {faqs.map(faq => (
        <div key={faq.id} className="bg-white p-8 shadow-md rounded-lg">
          <h3 className="text-xl font-bold mb-4">{faq.question}</h3>
          <p className="text-gray-700">{faq.answer}</p>
        </div>
      ))}
    </div>
  </div>

  )
}

export default Faq1
