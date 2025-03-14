// import React from "react";
import "./row4ele.css";
import CountUp from "react-countup";
import Coffee from "../../assets/coffee-cup.png";
import People from "../../assets/people.png";
import Woman from "../../assets/business-woman.png";
import Project from "../../assets/briefing.png";

const Row4Elements = () => {
  return (
    <div className="row" data-aos="fade-up">
      <div className="row-item" data-aos="fade-up">
        <div className="row-icon">
          <img src={Project} alt="Image" />
        </div>
        <div className="row-col">
          <p className="row-no">
            <CountUp
              enableScrollSpy={true}
              scrollSpyOnce={true}
              start={0}
              end={50}
              duration={1}
              className="count-no"
            />
            +
          </p>
          <p>Successfull Project</p>
        </div>
      </div>
      <div className="row-item" data-aos="fade-up">
        <div className="row-icon">
          <img src={Woman} alt="Image" />
        </div>
        <div className="row-col">
          <p className="row-no">
            <CountUp
              enableScrollSpy={true}
              scrollSpyOnce={true}
              start={0}
              end={30}
              duration={1}
              className="count-no"
            />
            +
          </p>
          <p>Software Development Experts</p>
        </div>
      </div>
      <div className="row-item" data-aos="fade-up">
        <div className="row-icon">
          <img src={Coffee} alt="Image" />
        </div>
        <div className="row-col">
          <p className="row-no">
            <CountUp
              enableScrollSpy={true}
              scrollSpyOnce={true}
              start={0}
              end={50}
              duration={1}
              className="count-no"
            />
            +
          </p>
          <p>Loyal Customers</p>
        </div>
      </div>
      <div className="row-item" data-aos="fade-up">
        <div className="row-icon">
          <img src={People} alt="Image" />
        </div>
        <div className="row-col">
          <p className="row-no">
            <CountUp
              enableScrollSpy={true}
              scrollSpyOnce={true}
              start={0}
              end={100}
              duration={1}
              className="count-no"
            />
            %
          </p>
          <p>Success Guarantee</p>
        </div>
      </div>
    </div>
  );
};

export default Row4Elements;
