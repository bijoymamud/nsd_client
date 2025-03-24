import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
  { id: "q1", question: "What is your return policy?", answer: "We offer a 30-day return policy for all unused items in their original packaging. Please contact our customer support team to initiate a return." },
  { id: "q2", question: "How can I track my order?", answer: "You can track your order by logging into your account and visiting the 'Order History' section. Alternatively, you can use the tracking number provided in your shipping confirmation email." },
  { id: "q3", question: "Do you ship internationally?", answer: "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary depending on the destination. You can see the shipping options available during checkout." },
  { id: "q4", question: "How do I reset my password?", answer: "You can reset your password by clicking on the 'Forgot Password' link on the login page. We'll send you an email with instructions to create a new password." },
  { id: "q5", question: "Can I have multiple shipping addresses?", answer: "Yes, you can save multiple shipping addresses in your account settings. During checkout, you'll be able to select which address you want to use for that specific order." },
];

export default function Faq() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (id) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <div className=" bg-[#17141D] flex items-center justify-center pb-32">
      <div className="container mx-auto px-4 py-8 md:py-12 container">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-white ">
            Frequently Asked Questions
          </h1>
          <p className="text-base md:text-lg text-gray-200 mb-6 md:mb-8 max-w-2xl mx-auto">
            Find answers to common questions about our services. Can't find what you're looking for? Contact our support team.
          </p>
        </div>
        <div className="space-y-2 md:space-y-4">
          <div className="   shadow-sm border border-[#5D4B81] ">
            {faqData.map((item) => (
              <div key={item.id} className="border border-[#5D4B81] ">
                <button
                  onClick={() => toggleQuestion(item.id)}
                  className="w-full px-4 py-3 md:px-6 md:py-4 text-left font-medium text-white  transition-all flex justify-between items-center "
                  aria-expanded={openQuestion === item.id}
                  aria-controls={`faq-${item.id}`}
                >
                  <span className="text-sm md:text-base text-white ">{item.question}</span>
                  {openQuestion === item.id ? (
                    <ChevronUp className="h-4 w-4 md:h-5 md:w-5 text-gray-300  transition-transform duration-300" />
                  ) : (
                    <ChevronDown className="h-4 w-4 md:h-5 md:w-5 text-gray-500  transition-transform duration-300" />
                  )}
                </button>
                <div
                  id={`faq-${item.id}`}
                  className={`overflow-hidden transition-[max-height] duration-300 ease-in-out text-white ${
                    openQuestion === item.id ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-4 pb-3 pt-2 md:px-6 md:pb-4 md:pt-2 text-gray-200 bg-[#5D4B81]/20  text-sm md:text-base">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}