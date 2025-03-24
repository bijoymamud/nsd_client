// import React, { useState } from "react";

// import { FaPencilAlt } from "react-icons/fa"; // Using FaPencilAlt for the edit icon

// const AddPrivacy = () => {
//   // Initial content for the privacy section
//   const initialContent = [
//     "A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made. A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.",
//     "A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made. A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.",
//     "A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made. A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.",
//     "A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made. A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.",
//     "A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made. A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.",
//     "A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made. A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.",
//     "A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made. A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.",
//     "A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made. A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.",
//     "A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made. A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.",
//     "A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made. A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.",
//     "A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made. A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.",
//     "A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made. A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.",
//   ];

//   const [content, setContent] = useState(initialContent);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedContent, setEditedContent] = useState([...initialContent]);

//   // Handle edit button click
//   const handleEditClick = () => {
//     setIsEditing(true);
//     setEditedContent([...content]); // Copy current content to editedContent
//   };

//   // Handle content change in textarea
//   const handleContentChange = (index, value) => {
//     const updatedContent = [...editedContent];
//     updatedContent[index] = value;
//     setEditedContent(updatedContent);
//   };

//   // Handle save button click
//   const handleSave = () => {
//     setContent([...editedContent]);
//     setIsEditing(false);
//   };

//   // Handle cancel button click
//   const handleCancel = () => {
//     setEditedContent([...content]); // Revert to original content
//     setIsEditing(false);
//   };

//   return (
//     <div className="bg-[#16141A] text-[#CBCCD2] p-6 rounded-lg">
//       {/* Header with Title and Edit Button */}
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-2xl font-semibold">Privacy</h2>
//         {!isEditing && (
//           <button
//             onClick={handleEditClick}
//             className="flex items-center gap-1 text-[#CBCCD2] hover:text-white"
//           >
//             <FaPencilAlt size={16} />
//             <span>Edit</span>
//           </button>
//         )}
//       </div>

//       {/* Content */}
//       <div className="space-y-4">
//         {isEditing ? (
//           // Editable Mode
//           <>
//             {editedContent.map((paragraph, index) => (
//               <div key={index} className="flex gap-2">
//                 <span className="text-[#CBCCD2]">{index + 1}.</span>
//                 <textarea
//                   value={paragraph}
//                   onChange={(e) => handleContentChange(index, e.target.value)}
//                   className="w-full bg-[#27242D] text-[#CBCCD2] p-2 rounded resize-y"
//                   rows={3}
//                 />
//               </div>
//             ))}
//             {/* Save and Cancel Buttons */}
//             <div className="flex justify-end gap-2 mt-4">
//               <button
//                 onClick={handleCancel}
//                 className="btn bg-gray-600 text-white px-4 py-2 rounded"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleSave}
//                 className="btn bg-purple-600 text-white px-4 py-2 rounded"
//               >
//                 Save
//               </button>
//             </div>
//           </>
//         ) : (
//           // View Mode
//           content.map((paragraph, index) => (
//             <div key={index} className="flex gap-2">
//               <span className="text-[#CBCCD2]">{index + 1}.</span>
//               <p className="text-[#CBCCD2]">{paragraph}</p>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default AddPrivacy;




import React, { useState } from "react";
import { FaPencilAlt } from "react-icons/fa"; // Using FaPencilAlt for the edit icon

const PrivacyEditor = () => {
  // Initial content for the privacy section
  const initialContent = [
    "A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made. A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.",
    "A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made. A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.",
    "A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made. A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.",
    "A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made. A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.",
    "A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made. A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.",
    "A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made. A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.",
    "A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made. A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.",
    "A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made. A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.",
    "A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made. A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.",
    "A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made. A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.",
    "A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made. A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.",
    "A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made. A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.",
  ];

  const [content, setContent] = useState(initialContent);
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState("");

  // Handle edit button click
  const handleEditClick = () => {
    setIsEditing(true);
    // Join the content array into a single string with newlines between paragraphs
    setEditedContent(content.join("\n\n"));
  };

  // Handle content change in textarea
  const handleContentChange = (value) => {
    setEditedContent(value);
  };

  // Handle save button click
  const handleSave = () => {
    // Split the edited content back into an array of paragraphs
    const updatedContent = editedContent
      .split("\n\n")
      .map((paragraph) => paragraph.trim())
      .filter((paragraph) => paragraph.length > 0); // Remove empty paragraphs
    setContent(updatedContent);
    setIsEditing(false);
  };

  // Handle cancel button click
  const handleCancel = () => {
    setEditedContent("");
    setIsEditing(false);
  };

  return (
    <div className="bg-[#16141A] text-[#CBCCD2] p-6 rounded-lg">
      {/* Header with Title and Edit Button */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Privacy</h2>
        {!isEditing && (
          <button
            onClick={handleEditClick}
            className="flex items-center gap-1 text-[#CBCCD2] hover:text-white"
          >
            <FaPencilAlt size={16} />
            <span>Edit</span>
          </button>
        )}
      </div>

      {/* Content */}
      <div className="space-y-4">
        {isEditing ? (
          // Editable Mode with a Single Textarea
          <>
            <textarea
              value={editedContent}
              onChange={(e) => handleContentChange(e.target.value)}
              className="w-full bg-[#27242D] text-[#CBCCD2] p-4 rounded resize-y"
              rows={15}
              placeholder="Enter your privacy content here..."
            />
            {/* Save and Cancel Buttons */}
            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={handleCancel}
                className="btn bg-gray-600 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="btn bg-purple-600 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </>
        ) : (
          // View Mode
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

export default PrivacyEditor;