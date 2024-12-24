import { useState } from "react";
import "./evolution-of-cyber.css";
import backgroundImage from "../../assets/can-help-background.png"; // Update the path accordingly
import CallIcon from "../../assets/phone.png";
import MessageIcon from "../../assets/message.png";
import MyCustomButton from "../button/CommonButton.jsx";

const EvolutionOfCyber = () => {
  const [dropdown1Open, setDropdown1Open] = useState(false);
  return (
    <div
      className="evolution-container"
      data-aos="fade-up"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="evolution-overlay">
        <div className="evolution-content">
          <div className="evolution-left" data-aos="fade-up">
            <p className="evolution-head">
              Experience the Evolution of Your Web Presence
            </p>
            <p className="evolution-txt">
              Transform your business with cutting-edge web development solutions from Devion-X. Contact us today to learn more about our services and schedule a consultation with our web development experts.
            </p>
            <div className="evolution-btns">
              <div className="evolution-btn">
                <div className="evolution-icon">
                  <img src={CallIcon} alt="" srcSet="" />
                </div>
                <div className="evolution-call">
                  Call Us Today
                  <br /> +916389770755
                </div>
              </div>
              <div className="evolution-btn">
                <div className="evolution-icon">
                  <img src={MessageIcon} alt="" />
                </div>
                <div className="evolution-call">
                  Email Drop Us <br /> info@pwnpilot.com
                </div>
              </div>
            </div>
          </div>
          <div className="evolution-right" data-aos="fade-up">
            <div className="form" data-aos="fade-up">
              <div className="form-head">GET IN TOUCH</div>
              <div className="form-title">Free Consultation</div>
              <div className="form-inputs">
                <div className="two-items">
                  <input
                    type="text"
                    className="input"
                    placeholder="First Name"
                  />
                  <input
                    type="text"
                    className="input"
                    placeholder="Last Name"
                  />
                </div>
                <div className="two-items">
                  <input type="email" className="input" placeholder="Email" />
                  <input
                    type="number"
                    className="input"
                    placeholder="Mobile No."
                  />
                </div>
                <div className="two-items">
                  <div className="w-full">
                    <label
                      htmlFor="countries"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Select VAPT Services
                    </label>
                    <select
                      id="countries"
                      onClick={() => {
                        setDropdown1Open(!dropdown1Open);
                      }}
                      className="  border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="">Web Development</option>
                      <option value="">Web Application Security Testing</option>
                      <option value="">Customized Software Development</option>
                      <option value="">CRM Software</option>
                      <option value="">ERP Systems</option>
                      <option value="">API Development</option>
                      <option value="">App Development</option>
                    </select>
                  </div>
                  {/* <div className="w-full">
                    <label
                      htmlFor="countries"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Select Advanced Services
                    </label>
                    <select
                      id="countries"
                      onClick={() => {
                        setDropdown1Open(!dropdown2Open);
                      }}
                      className="  border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="">Red Teaming</option>
                      <option value="">Blue Teaming</option>
                    </select>
                  </div> */}
                </div>
                <input
                  type="text"
                  className="input"
                  placeholder="Company Name"
                />
                <input type="text" className="input" placeholder="Address" />
                <input type="text" className="input" placeholder="Subject" />

                <MyCustomButton name={"Free Consultancy"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvolutionOfCyber;
