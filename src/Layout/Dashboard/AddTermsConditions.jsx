




import React, { useState } from "react";
import { BiSolidEdit } from "react-icons/bi";

const AddTermsConditions = () => {

  const initialContent = [
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum nam dolorum, architecto hic maiores assumenda pariatur corporis aperiam ut eaque rem. Molestias earum, doloribus magnam totam ullam sed distinctio qui numquam laboriosam quia recusandae incidunt rem nemo laborum. Cum, excepturi. Aperiam eos iusto voluptatem exercitationem voluptate doloribus, dolore voluptates necessitatibus quaerat dignissimos corrupti laboriosam quis saepe error, similique eum voluptatum officia nulla neque numquam. Quasi distinctio fugiat eaque temporibus dicta! Expedita animi et iste blanditiis? Praesentium nesciunt pariatur necessitatibus. Ratione, atque necessitatibus vel iste repudiandae natus accusamus voluptate qui quas veniam nemo quisquam similique assumenda quod excepturi ipsam voluptas explicabo!"
  ];

  const [content, setContent] = useState(initialContent);
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState("");


  const handleEditClick = () => {
    setIsEditing(true);
    setEditedContent(content.join("\n\n"));
  };

  const handleContentChange = (value) => {
    setEditedContent(value);
  };

  const handleSave = () => {
    const updatedContent = editedContent
      .split("\n\n")
      .map((paragraph) => paragraph.trim())
      .filter((paragraph) => paragraph.length > 0); 
    setContent(updatedContent);
    setIsEditing(false);
  };


  const handleCancel = () => {
    setEditedContent("");
    setIsEditing(false);
  };

  return (
    <div className="bg-[#16141A] text-[#CBCCD2] p-6 rounded-lg">
      <div className="flex justify-start items-center gap-10 mb-4">
        <h2 className="text-2xl font-semibold">Terms and Conditions</h2>
        {!isEditing && (
          <button
            onClick={handleEditClick}
            className="flex items-center gap-1 text-[#CBCCD2] bg-[#1D1B22] px-5 py-2 rounded-md "
          >
            <BiSolidEdit  size={20} className="hover:text-white" />
            <span>Edit</span>
          </button>
        )}
      </div>

      <div className="space-y-4">
        {isEditing ? (
          <>
            <textarea
              value={editedContent}
              onChange={(e) => handleContentChange(e.target.value)}
              className="w-full bg-[#27242D] text-[#CBCCD2] p-4 rounded resize-y"
              rows={15}
              placeholder="Enter your privacy content here..."
            />
            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={handleCancel}
                className="btn bg-gray-600 border-none shadow-none text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="btn bg-gradient-to-b from-[#881CA2] to-[#2B3069] border-none shadow-none text-white"
              >
                Save
              </button>
            </div>
          </>
        ) : (
          content.map((paragraph, index) => (
            <div key={index} className="flex gap-2">
              <span className="text-[#CBCCD2]">{index + 1}.</span>
              <p className="text-[#CBCCD2]">{paragraph}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AddTermsConditions;