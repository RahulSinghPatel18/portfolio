import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log("From submitted:", formData);
      await emailjs.send(
        "service_79b0nyj",
        "template_17us8im",
        {
          from_name: formData.name,
          to_name: "Ali",
          from_email: formData.email,
          to_email: "AliSanatiDev@gmail.com",
          message: formData.message,
        },
        "pn-Bw_mS1_QQdofuV"
      );
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "You message has been sent!");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      showAlertMessage("danger", "Somthing went wrong!");
    }
  };
  
  return (
    <section className="relative flex items-center section-spacing px-4 sm:px-6 lg:px-8">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      
      <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto p-4 sm:p-6 border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-4 sm:gap-5 mb-8 sm:mb-10">
          <h2 className="text-heading">Let's Talk</h2>
          <p className="font-normal text-neutral-400 text-sm sm:text-base leading-relaxed">
            Whether you're looking to build a new website, improve your existing
            platform, or bring a unique project to life, I'm here to help
          </p>
        </div>
        
        <form className="w-full space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="feild-label">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus w-full"
              placeholder="John Doe"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="feild-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="field-input field-input-focus w-full"
              placeholder="JohnDoe@email.com"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div>
            <label htmlFor="message" className="feild-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="field-input field-input-focus w-full resize-none"
              placeholder="Share your thoughts..."
              autoComplete="off"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          
          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-6 py-3 text-base sm:text-lg text-center rounded-lg cursor-pointer bg-radial from-lavender to-royal hover-animation disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium"
          >
            {!isLoading ? "Send Message" : "Sending..."}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
