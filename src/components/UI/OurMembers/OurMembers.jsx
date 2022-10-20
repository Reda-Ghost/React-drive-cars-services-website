import React from "react";
import "./our-member.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import ava01 from "../../../assets/all-images/ava-1.jpg";
import ava02 from "../../../assets/all-images/ava-2.jpg";
import ava03 from "../../../assets/all-images/ava-3.jpg";
import ava04 from "../../../assets/all-images/ava-4.jpg";

const OUR__MEMBERS = [
  {
    name: "Abraham Dane",
    experience: "3 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava01,
  },

  {
    name: "David Lisa",
    experience: "2 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava02,
  },

  {
    name: "Hilton King",
    experience: "4 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava03,
  },

  {
    name: "Anna Williams",
    experience: "2 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava04,
  },
];

const OurMembers = () => {
  return (
    <>
      {OUR__MEMBERS.map(({ imgUrl, fbUrl, twitUrl, instUrl, linkedinUrl, name, experience }, index) => (
        <Col lg="3" md="3" sm="4" xs="6" key={index} className="mb-4">
          <div className="single__member">
            <div className="single__member-img">
              <img src={imgUrl} alt="" className="w-100" />

              <div className="single__member-social">
                <Link to={fbUrl}>
                  <i class="ri-facebook-line"></i>
                </Link>
                <Link to={twitUrl}>
                  <i class="ri-twitter-line"></i>
                </Link>

                <Link to={linkedinUrl}>
                  <i class="ri-linkedin-line"></i>
                </Link>

                <Link to={instUrl}>
                  <i class="ri-instagram-line"></i>
                </Link>
              </div>
            </div>

            <h6 className="text-center mb-0 mt-3">{name}</h6>
            <p className="section__description text-center">
              {experience}
            </p>
          </div>
        </Col>
      ))}
    </>
  );
};

export default OurMembers;
