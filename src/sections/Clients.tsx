import { FormEvent, useState } from "react";
import useAlert from "../hooks/useAlert";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";

const Clients = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [form, setForm] = useState({
    name: "",
    position: "",
    email: "",
    review: "",
  });

  const { alert, showAlert, hideAlert } = useAlert();
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_56y8bxh",
        "template_nx22ukg",
        {
          from_name: form.name + "-" + form.position,
          to_name: "Majaz-ul Haque",
          from_email: form.email,
          to_email: "majazhaq98@gmail.com",
          message: form.review,
        },
        "Rppo0R79LlJikc5nO"
      )
      .then(
        () => {
          setLoading(false);
          closeModal();
          showAlert({
            show: true,
            text: "Thank you for your review😃. Your review will be consider soon...",
            type: "success",
          });

          setTimeout(() => {
            hideAlert();
            setForm({
              name: "",
              position: "",
              email: "",
              review: "",
            });
          }, 3000);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: "danger",
          });
        }
      );
  };

  return (
    <section className="c-space my-20">
      {alert.show && <Alert {...alert} />}
      <h3 className="head-text">Hear from My Clients</h3>
      {!showModal ? (
        <div className="relative bg-terminal bg-cover bg-center rounded-2xl w-full h-[50vh] flex flex-col items-center justify-center mt-10 sm:mt-20 px-5 overflow-hidden">
        <p className="text-white/60 text-center text-lg">
          I have been working with some amazing clients/colleagues.
        </p>
        <p className="text-white/60 text-center text-lg mt-2">
          I would love to hear
          from you.
        </p>
        <button
          onClick={openModal}
          className="bg-[#0f0f11] text-white py-3 px-6 rounded-lg mt-4 hover:bg-blue-500 transition duration-200 disabled:opacity-50 flex justify-center items-center"
          style={{ boxShadow: "0 8px 8px 1px rgba(0,0,0,0.3)" }}
        >
          Share Your Review{" "}
          <img
            src="/assets/arrow-up.png"
            alt="arrow-up"
            className="ml-2 h-4 w-4"
          />
        </button>
      </div>
      
      ) : (
        <div className="w-full h-auto rounded-xl flex items-center justify-center mt-10 sm:mt-20 flex-col-reverse lg:flex-row gap-10 overflow-hidden">
          <div className="bg-terminal bg-cover bg-center px-6 pt-20 pb-10 rounded-lg sm:w-1/2 w-full">
            <h3 className="text-4xl font-bold text-white">Share Your Review</h3>
            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col space-y-4"
            >
              <label className="space-y-1">
                <span className="field-label text-gray-300">Full Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="field-input w-full px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </label>
              <label className="space-y-1">
                <span className="field-label text-gray-300">Position</span>
                <input
                  type="text"
                  name="position"
                  value={form.position}
                  onChange={handleChange}
                  placeholder="CEO at --- / Software Engineer at ---"
                  className="field-input w-full px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </label>
              <label className="space-y-1">
                <span className="field-label text-gray-300">Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="johndoe@gmail.com"
                  className="field-input w-full px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </label>
              <label className="space-y-1">
                <span className="field-label text-gray-300">Review</span>
                <textarea
                  name="review"
                  value={form.review}
                  onChange={handleChange}
                  placeholder="Share your reviews..."
                  className="field-input w-full px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                  required
                />
              </label>

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={closeModal}
                  className="field-btn w-full bg-blue-200 text-white py-3 rounded-md flex justify-center items-center space-x-2 hover:bg-red-500 transition duration-200 disabled:opacity-50"
                  style={{ boxShadow: "0 8px 8px 1px rgba(0,0,0,0.3)" }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="field-btn w-full bg-blue-200 text-white py-3 rounded-md flex justify-center items-center space-x-2 hover:bg-blue-500 transition duration-200 disabled:opacity-50"
                  style={{ boxShadow: "0 8px 8px 1px rgba(0,0,0,0.3)" }}
                >
                  {loading ? "Sending..." : "Share"}
                  <img
                    src="/assets/arrow-up.png"
                    alt="arrow-up"
                    className="ml-2 h-4 w-4"
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Clients;
