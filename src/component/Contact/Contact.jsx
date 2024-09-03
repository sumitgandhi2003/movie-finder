import { useState } from "react";
import Swal from "sweetalert2";
const Contact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });
  const inputHandle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContact({
      ...contact,
      [name]: value,
    });
  };
  const submithandle = async (e) => {
    e.preventDefault();
    if (contact.email.includes("@") && contact.name && contact.message) {
      const isConfirmed = await Swal.fire({
        title: "Thankyou!",
        text: "Your Query has been submited!",
        icon: "success",
      });
      if (isConfirmed.isConfirmed) {
        setContact((contact) => {
          return {
            ...contact,
            name: "",
            email: "",
            message: "",
          };
        });
      }
      return;
    }
    Swal.fire({
      title: "Error!",
      text: "Please fill all the fields!",
      icon: "error",
    });
  };
  return (
    <div className="contact-us-container w-full h-full flex relative justify-center items-center p-4 mt-4 font-mono ">
      <form
        onSubmit={submithandle}
        className="contact w-[600px] h-fit p-8 flex gap-5 flex-col justify-between items-center bg-white rounded-xl shadow-lg"
      >
        <div className="container-heading w-full">
          <h1 className="text-3xl font-bold font- from-neutral-500">
            Get in Touch
          </h1>
          <p className="text-sm text-gray-400 my-3 ">
            Feel free to drop us a line below!
          </p>
        </div>
        <div className="form grid gap-5 w-full relative">
          <input
            type="text"
            className="bg-gray-200 p-2 rounded-md text-lg"
            name="name"
            placeholder="Your Name"
            id=""
            value={contact.name}
            onChange={inputHandle}
          />
          <input
            type="email"
            name="email"
            className="bg-gray-200 p-2 rounded-md w-full text-lg"
            id=""
            placeholder="Your Email"
            value={contact.email}
            onChange={inputHandle}
          />
          <textarea
            name="message"
            id=""
            className="bg-gray-200 p-2 rounded-md w-full h-[200px] text-lg resize-none "
            placeholder="Enter your Message here"
            value={contact.message}
            onChange={inputHandle}
          ></textarea>
          <div className="btn w-full flex  justify-end ">
            <button className=" text-[#FFFAFF] w-fit rounded-md p-3 bg-[#1B1F3B] ">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
