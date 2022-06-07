import { memo } from "react";
const BannerName = () => {
  return (
    <div className="bannerContent">
      <h3>Hello GUEST</h3>
      <p>
        Get Free Discount for every <span>$30</span> purchase{" "}
      </p>
      <a href="/#">Learn More</a>
    </div>
  );
};

export default memo(BannerName);
