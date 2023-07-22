import React, { useState } from "react";
import "./HomeBanner.css";
import HomeBannericons from "../../../utils/homeBannerIcon/HomeBannericons";
import {
  FcBinoculars,
  FcBullish,
  FcClock,
  FcConferenceCall,
  FcRatings,
  FcStatistics,
} from "react-icons/fc";
import Authantication from "../../Authantication/Authantication";
import { useDispatch, useSelector } from "react-redux";
import { showForm } from "../../../Store/Slice/FormSlice";

const HomeBanner = () => {
  const data = useSelector((state) => state.form.showForm);
  console.log(data);
  const dispatch = useDispatch();
  return (
    <div className="homwBanner__container">
      <h1 className="homeBanner__heading">
        Airdrop Hunting Become More Easier with <span className="">Hunter</span>
        .
      </h1>
      <h3 className="homeBanner__subHeading">
        Hunter, Your easily accessible Airdrop hub.
      </h3>
      <div className="homeBanner__icons">
        <HomeBannericons
          icon={<FcBinoculars />}
          title="Discover New Airdrops"
        />
        <HomeBannericons icon={<FcRatings />} title="Track Usage History" />
        <HomeBannericons icon={<FcClock />} title="Get Notification" />
        <HomeBannericons icon={<FcStatistics />} title="Weekly Strategy" />
        <HomeBannericons
          icon={<FcConferenceCall />}
          title="Join our Community"
        />
        <HomeBannericons icon={<FcBullish />} title="Premium Airdrops" />
      </div>

      <button
        onClick={() => dispatch(showForm(true))}
        className="homeBanner__accessButton"
      >
        Access Now
      </button>
      {data && <Authantication />}
    </div>
  );
};

export default HomeBanner;
