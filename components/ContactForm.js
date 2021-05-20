import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    fullname: "",
    email: "",
    message: "",
  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        fullname: "",
        email: "",
        message: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: "POST",
      url: "https://formspree.io/f/myylevpl",
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          "Thank you, your message has been submitted."
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <main className="py-2 max-w-md text-left">
      <form onSubmit={handleOnSubmit}>
        <div className="grid grid-cols-1">
          <label htmlFor="fullname" className="text-lg text-gray-200">
            Fullname*
          </label>
          <input
            id="fullname"
            type="text"
            name="fullname"
            onChange={handleOnChange}
            required
            value={inputs.fullname}
            placeholder="John Stone"
            className="mt-0 pt-2 block w-full px-0.5 border-0 border-b-2 border-gray-600 bg-accent-1 focus:ring-0 focus:border-gray-100"
          />
          <label className="pt-8 text-gray-200 text-lg" htmlFor="email">
            Email*
          </label>
          <input
            id="email"
            type="email"
            name="_replyto"
            onChange={handleOnChange}
            required
            value={inputs.email}
            placeholder="email@domain.com"
            className="mt-0 pt-2 block w-full px-0.5 border-0 border-b-2 border-gray-600 bg-accent-1 focus:ring-0 focus:border-gray-100"
          />
          <label for="topic" className="pt-8 text-gray-200 text-lg">
            What is the subject of the message?*
          </label>
          <select
            className="block pt-4 w-full mt-0 px-0.5 border-0 border-b-2 border-gray-600 bg-accent-1 focus:ring-0 focus:border-gray-100"
            name="topic"
            id="topic"
            required=""
          >
            <option value="Choose" className="text-gray-400" selected disabled>
              Choose
            </option>
            <option value="1">Article Idea</option>
            <option value="3">Business</option>
            <option value="5">Job offer</option>
            <option value="7">Other</option>
          </select>
          <label htmlFor="message" className="pt-12 text-gray-200 text-lg">
            Message*
          </label>
          <textarea
            id="message"
            name="message"
            onChange={handleOnChange}
            required
            value={inputs.message}
            placeholder="Type here..."
            className="mt-0 block pb-2 w-full px-0.5 border-0 border-b-2 border-gray-600 bg-accent-1 focus:ring-0 focus:border-gray-100"
          />
          <div className="pt-12 text-center md:text-right">
            <button
              type="submit"
              className="inline-block py-2 lg:py-3 px-9 border border-accent-5 hover:border-gray-200 bg-accent-1 uppercase text-xs lg:text-sm text-accent-5 active:scale-105 hover:text-accent-2 font-light  focus:outline-none transform transition duration-200 ease-in-out"
              disabled={status.submitting}
            >
              {!status.submitting
                ? !status.submitted
                  ? "Submit"
                  : "Submitted"
                : "Submitting..."}
            </button>
          </div>
        </div>
      </form>
      {status.info.error && (
        <div className="error text-bold text-gray-50 text-lg">
          Error while submitting. Please try again later.
        </div>
      )}
      {!status.info.error && status.info.msg && (
        <p className="py-4 text-sm text-gray-400">{status.info.msg}</p>
      )}
    </main>
  );
};

export default ContactForm;
