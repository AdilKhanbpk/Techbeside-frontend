import { FC } from "react";

interface ContactModalProps {
  contact: any;
  onClose: () => void;
}

const ContactModal: FC<ContactModalProps> = ({ contact, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-gray-500   bg-opacity-50  flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="bg-white  w-full md:max-w-xl shadow-lg relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* <button
          className="absolute top-2 right-2 border-2 hover:border-red-400 px-3 text-gray-500 hover:text-red-600 text-xl"
          onClick={onClose}
        >
          &times;
        </button> */}
        <h2 className="text-xl font-semibold mb-4 bg-[#9A00FF] text-white p-7 text-center">
          Contact Details
        </h2>
        <div className="p-2 mb-3">
          <p className="mt-3 text-gray-600">
            <strong className="">First Name:</strong> {contact.firstName}
          </p>
          <p className="mt-3 text-gray-600">
            <strong>Last Name:</strong> {contact.lastName}
          </p>
          <p className="mt-3 text-gray-600">
            <strong>Email:</strong> {contact.email}
          </p>
          <p className="mt-3 text-gray-600">
            <strong>Phone Number:</strong> {contact.phoneNumber}
          </p>
          <p className="mt-3 text-gray-600">
            <strong>Message:</strong> {contact.message}
          </p>
          <p className="mt-3 text-gray-600">
            <strong>Created At:</strong>{" "}
            {new Date(contact.createdAt).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
