import { useState } from "react";
import celeb from "../assets/celeb.png";
import styles from "../utils/styles";
import { layout } from "../utils/styles";
import { useNavigate } from "react-router-dom";
const Join = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    phoneNumber: "",
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <section className={`${layout.section}`}>
      <div className={layout.sectionInfo}>
        <form
          onSubmit={handleSubmit}
          className="max-w-[470px] mx-auto px-4 sm:px-6 lg:px-8 mt-5 "
        >
          <h2 className={styles.heading2}>Unlock Exclusive Benifits</h2>
          <label className="mb-4">
            PHONE NUMBER
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <input
                className="border-solid border-2 border-[#4f4e4e] rounded-full p-1 mb-2 sm:mb-0"
                type="text"
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                placeholder="+91 India"
                maxLength="4"
                required
              />
              <input
                className="border-solid border-2 border-[#4f4e4e] rounded-full p-1"
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />
            </div>
          </label>
          <label className="flex flex-col mb-4">
            NAME
            <input
              className="border-solid border-2 border-[#4f4e4e] rounded-full p-1"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label className="flex flex-col mb-4">
            EMAIL [OPTIONAL]
            <input
              className="border-solid border-2 border-[#4f4e4e] rounded-full p-1"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <div className="flex flex-col">
            <button
              type="submit"
              className="bg-[#61baf5] text-white rounded-full mt-8 p-2 text-xl mb-4 transition-transform transform hover:scale-105 hover:shadow-md "
            >
              CONTINUE
            </button>
            <span className="text-[#4f4e4e] text-sm block sm:inline ">
              Get ready to receive a secret code [OTP] on your phone
            </span>
          </div>
        </form>
      </div>
      <div className={layout.sectionImg}>
        <img
          src={celeb}
          alt="womenenjoying"
          className="w-[100%] h-[100%]"
        ></img>
      </div>
    </section>
  );
};
export default Join;
