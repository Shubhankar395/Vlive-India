import React from "react";
import "./chairman.css";
import newsLogo from "./../../../../assests/logo/news-icon.png";
import chairman from "./../../../../assests/img/chairman-img.png";

const ChairMan = () => {
  return (
    <>
      <div className="container p-2">
        <div className="row mt-5">
          <div className="col-lg-4">
            <div className="news-update">
              <div className="p-3 text-dark">
                <h4>News and Updates</h4>
                <div className="py-2">
                  <div
                    className="d-flex align-items-center"
                    style={{ gap: ".6rem" }}
                  >
                    <img src={newsLogo} alt="logo" />
                    <a
                      href={"https://5feb.xyz/blog/637d00aa63efe5df8f6fc963"}
                      className="news-font pt-4"
                    >
                      Smart TV & DTH Manufecturer Vlive is one of the largest
                      and trustworthy manufacturers of home appliances.
                    </a>
                  </div>
                  <div
                    className="d-flex align-items-center"
                    style={{ gap: ".6rem" }}
                  
                  >
                    <img src={newsLogo} alt="logo" />
                    <h6 className="news-font pt-4">
                      Adani Charts plan to invest $100 bn <br /> in coming
                      decade <br /> Sep 28, 2022 | Mint
                    </h6>
                  </div>
                  <div
                    className="d-flex align-items-center"
                    style={{ gap: ".6rem" }}
                  >
                    <img src={newsLogo} alt="logo" />
                    <h6 className="news-font pt-4">
                      Adani Charts plan to invest $100 bn <br /> in coming
                      decade <br /> Sep 28, 2022 | Mint
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 mt-5 mt-lg-0">
            <div className="row">
              <div className="col-lg-6">
                <div className="chairman-corner bg-primary">
                  <div className="p-3">
                    <h4>Chairman's Corner</h4>
                    <div className="py-2">
                      <h4 className="pt-3 font-size">
                        “Everyone starts business to gain but we started our
                        Vlive India to give and gain both. Because if you are
                        doing a business for only yourself, you are a good
                        businessman but if you are doing it for the entire
                        nation… then that makes you a good human being and a
                        good businessman as well.”
                      </h4>
                    </div>
                    <h6 className="pt-5 padding-bottom">Manish Sharma</h6>
                    <h6 className="chairman-name-font"> Founder & Chairmen</h6>
                    <h6 className="chairman-name-font">
                      {" "}
                      Vlive India Private limited
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 bg-image hover-zoom mt-5 mt-lg-0">
                <img
                  src={chairman}
                  alt="chairman"
                  className="chairman-img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChairMan;
