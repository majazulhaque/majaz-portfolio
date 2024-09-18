import emailjs from "@emailjs/browser";
import { useRef, useState, ChangeEvent, FormEvent } from "react";

import useAlert from "../hooks/useAlert.ts";
import Alert from "../components/Alert.tsx";
import EarthCanvas from "../components/canvas/Earth.tsx";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState<boolean>(false);

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
          from_name: form.name,
          to_name: "Majaz-ul Haque",
          from_email: form.email,
          to_email: "majazhaq98@gmail.com",
          message: form.message,
        },
        "Rppo0R79LlJikc5nO"
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: "Thank you for your message 😃",
            type: "success",
          });

          setTimeout(() => {
            hideAlert();
            setForm({
              name: "",
              email: "",
              message: "",
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
    <section className="c-space my-20" id="contact">
      {alert.show && <Alert {...alert} />}
      <div className="w-full h-[40vh] sm:h-[50vh] lg:hidden">
      <EarthCanvas/>
      </div>
      

      <div className="relative sm:min-h-screen flex items-center justify-center xl:mt-12 flex-col-reverse lg:flex-row sm:gap-10 overflow-hidden">
        <div className="relative w-full lg:w-1/2 h-full flex flex-col justify-center items-start p-5 lg:p-10">
          <img
            src="/assets/terminal.png"
            alt="terminal-bg"
            className="absolute inset-0  w-full h-full opacity-100"
          />

          <div className="contact-container relative z-10 max-w-lg w-full">
            <h3 className="text-4xl font-bold text-white">Let&apos;s talk</h3>
            <p className="text-base text-gray-400 mt-3">
              Whether you&apos;re looking to build a new website, improve your
              existing platform, or bring a unique project to life, I&apos;m
              here to help.
            </p>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="sm:mt-8 mt-4 flex flex-col space-y-4"
            >
              <label className="space-y-1">
                <span className="field-label text-gray-300">Full Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="field-input w-full px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500  "
                  placeholder="ex., John Doe"
                />
              </label>

              <label className="space-y-1">
                <span className="field-label text-gray-300">Email address</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="field-input w-full px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 "
                  placeholder="ex., johndoe@gmail.com"
                />
              </label>

              <label className="space-y-1">
                <span className="field-label text-gray-300">Your message</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="field-input w-full px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 "
                  placeholder="Share your thoughts or inquiries..."
                />
              </label>

              <button
                className="field-btn w-full bg-blue-200 text-white py-3 rounded-md flex justify-center items-center space-x-2 hover:bg-blue-500 transition duration-200 disabled:opacity-50 "
                type="submit"
                disabled={loading}
                style={{boxShadow:"0 8px 8px 1px rgba(0,0,0,0.3)"}}
              >
                {loading ? "Sending..." : "Send Message"}

                <img
                  src="/assets/arrow-up.png"
                  alt="arrow-up"
                  className="ml-2 h-4 w-4"
                />
              </button>
            </form>
          </div>
        </div>
        <div className="flex-1 w-full h-[350px] lg:h-[550px] hidden lg:flex">
          <EarthCanvas />
        </div>
      </div>
    </section>
  );
};

export default Contact;
