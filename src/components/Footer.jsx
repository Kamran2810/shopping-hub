import { Typography } from "@mui/material";
import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CallIcon from "@mui/icons-material/Call";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <>
      <div className="max-h-screen">
        <div className="flex justify-center mb-2 mt-3 sticky bottom-0">
          <div className="flex items-center justify-around pl-[50px] pr-[20px] pt-1 pb-1 w-[70%] bg-[#171614]  text-white rounded-full lg:w-[90%] md:w-[100%] sm:w-[100%]">
            <div className="flex flex-1 flex-col flex-wrap p-2">
              <Typography variant="h4" className="text-center pb-2">
                Kamran Memon
              </Typography>
              <Typography className="pl-[100px] pb-1">
                <LocationOnOutlinedIcon />
                &emsp;Pune, India
              </Typography>
              <Typography className="pl-[100px]">
                <CallIcon />
                &emsp;+91 7769865963
              </Typography>
            </div>

            <div className="flex flex-1 flex-col p-2 m-3 rounded-full text-center">
              <Typography variant="h6">Contact Us</Typography>
              <div className="flex">
                <div className="flex flex-1 self-start justify-around m-3 rounded-full cursor-pointer p-2 text-black bg-white">
                  <a
                    href="https://www.linkedin.com/in/kamran-memon-28oct1998/"
                    target="blank"
                  >
                    <LinkedInIcon />
                  </a>
                </div>
                <div className="flex flex-1 self-start justify-around m-3 rounded-full cursor-pointer p-2 text-black bg-white">
                  <a href="mailto:kmemon321@gmail.com" target="blank">
                    <EmailIcon />
                  </a>
                </div>
                <div className="flex flex-1 self-start justify-around m-3 rounded-full cursor-pointer p-2 text-black bg-white">
                  <a href="/#" target="blank">
                    <FacebookIcon />
                  </a>
                </div>
                <div className="flex flex-1 self-start justify-around m-3 rounded-full cursor-pointer p-2 text-black bg-white">
                  <a href="/#" target="blank">
                    <InstagramIcon />
                  </a>
                </div>
                <div className="flex flex-1 self-start justify-around m-3 rounded-full cursor-pointer p-2 text-black bg-white">
                  <a href="https://github.com/Kamran2810" target="blank">
                    <GitHubIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
