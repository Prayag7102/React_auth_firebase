import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { MdDelete } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);


  const fetchContacts = async () => {
    try {
      const contactData = await getDocs(collection(db, "contacts"));
      const contactsArray = contactData.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setContacts(contactsArray);
    } catch (error) {
      console.error("Error fetching contacts: ", error);
    }
  };
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      setContacts(contacts.filter((contact) => contact.id !== id));
      toast.success('Deleted successfully', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        theme: "dark",
      });
    } catch (error) {
      console.error("Error deleting contact: ", error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className=" p-10 min-h-[70vh]">
       <ToastContainer />
      <h1 className="mb-3 mt-3 p-10 text-center text-4xl">Contact List</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md ">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-left text-gray-700 font-semibold">Email</th>
              <th className="py-3 px-4 text-left text-gray-700 font-semibold">Subject</th>
              <th className="py-3 px-4 text-left text-gray-700 font-semibold">Message</th>
              <th className="py-3 px-4  text-gray-700 font-semibold text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.length === 0 ? (
              <tr>
                <td colSpan="4" className="py-3 px-4 text-center text-gray-600">
                  No contacts available
                </td>
              </tr>
            ) : (
              contacts.map((contact) => {
                const { id, email, subject, message } = contact;
                return (
                  <tr key={id} className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-4 text-gray-600">{email}</td>
                    <td className="py-3 px-4 text-gray-600">{subject}</td>
                    <td className="py-3 px-4 text-gray-600">{message}</td>
                    <td className="text-center">
                      <button
                        onClick={() => handleDelete(id)}
                        className="px-4 py-3 rounded-md bg-red-500 text-white hover:bg-red-600"
                      >
                        <MdDelete />
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactList;
