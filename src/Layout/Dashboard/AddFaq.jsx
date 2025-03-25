

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Plus, Edit, Trash } from 'lucide-react';

export default function FaqManager() {
  const [faqs, setFaqs] = useState([
    {
      id: crypto.randomUUID(),
      question: "What is your return policy?",
      answer: "You can return any item within 30 days of purchase for a full refund."
    },
    {
      id: crypto.randomUUID(),
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to most countries worldwide. Shipping costs may vary."
    },
    {
      id: crypto.randomUUID(),
      question: "How can I track my order?",
      answer: "After placing an order, you'll receive a tracking link via email."
    }
  ]);

  const [editingFaq, setEditingFaq] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    if (editingFaq) {
      setFaqs(faqs.map(faq =>
        faq.id === editingFaq.id
          ? { ...faq, question: data.question, answer: data.answer }
          : faq
      ));
    } else {
      setFaqs([...faqs, { id: crypto.randomUUID(), ...data }]);
    }
    closeModal();
  };

  const openModal = (faq) => {
    if (faq) {
      setEditingFaq(faq);
      reset({ question: faq.question, answer: faq.answer });
    } else {
      setEditingFaq(null);
      reset({ question: '', answer: '' });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingFaq(null);
    reset();
  };

  const deleteFaq = (id) => {
    setFaqs(faqs.filter(faq => faq.id !== id));
  };

  const toggleExpand = (faqId) => {
    if (expandedFaq === faqId) {
      setExpandedFaq(null);
    } else {
      setExpandedFaq(faqId);
    }
  };

  return (
    <div className="p-6 container mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-[#CBCCD2]">FAQ Management</h2>
        <button
          className="btn bg-[#313138] shadow-none border-none text-white hover:bg-[#27272c]"
          onClick={() => openModal()}
        >
          Add FAQ
          <Plus className="w-4 h-4 mr-2" />
        </button>
      </div>

      <div className="space-y-4">
        {faqs.map((faq) => (
          <div key={faq.id} className="card bg-[#111014] shadow-xl">
            <div className="card-body">
              <div className="flex justify-between items-start">
                <h3 className="card-title text-[#CBCCD2] cursor-pointer" onClick={() => toggleExpand(faq.id)}>
                  {faq.question}
                </h3>
                <div className="flex gap-2 hover:text-black">
                  <button
                    className="btn btn-square btn-sm btn-ghost rounded-full hover:bg-black hover:text-black"
                    onClick={() => openModal(faq)}
                  >
                    <Edit className="w-5 h-5 text-[#CBCCD2]  " />
                  </button>
                  <button
                    className="btn btn-square btn-sm btn-ghost rounded-full hover:bg-black hover:text-black"
                    onClick={() => deleteFaq(faq.id)}
                  >
                    <Trash className="w-5 h-5 text-[#CBCCD2]" />
                  </button>
                </div>
              </div>
              {expandedFaq === faq.id && (
                <p className="text-[#CBCCD2] mt-3">{faq.answer}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <dialog id="faq_modal" className={`modal ${isModalOpen ? 'modal-open' : ''}`}>
        <div className=" p-5 bg-[#313138] h-[450px] w-[500px] mx-auto">
          <h3 className="font-bold text-[#CBCCD2] text-lg mb-4">
            {editingFaq ? 'Edit FAQ' : 'Add New FAQ'}
          </h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#CBCCD2] mb-1">Question</span>
              </label>
              <input
                type="text"
                className={`input input-bordered bg-transparent border border-gray-200 focus-none text-white w-full ${errors.question ? 'input-error' : ''}`}
                {...register("question", { required: "Question is required" })}
                placeholder="Enter your question"
              />
              {errors.question && (
                <label className="label">
                  <span className="label-text-alt text-error">{errors.question.message}</span>
                </label>
              )}
            </div>

            <div className="form-control mt-5">
              <label className="label">
                <span className="label-text text-[#CBCCD2] mb-1">Answer</span>
              </label>
              <textarea
                type="text"
                rows={8}
                className={`textarea textarea-bordered bg-transparent border border-gray-200 focus-none text-white w-full ${errors.answer ? 'textarea-error' : ''}`}
                {...register("answer", { required: "Answer is required" })}
                placeholder="Enter your Answer"
              />
              {errors.answer && (
                <label className="label">
                  <span className="label-text-alt text-error">{errors.answer.message}</span>
                </label>
              )}
            </div>

            <div className="modal-action">
              <button type="button" className="btn" onClick={closeModal}>
                Cancel
              </button>
              <button type="submit" className="btn bg-gradient-to-b from-[#881CA2] to-[#2B3069] border-none shadow-none text-white">
                {editingFaq ? 'Update' : 'Add'} FAQ
              </button>
            </div>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={closeModal}>close</button>
        </form>
      </dialog>
    </div>
  );
}
