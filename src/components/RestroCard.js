import { CDN_URL } from "../utils/constant";

const RestroCard = ({ resData }) => {
  const { name, cuisines, costForTwo, cloudinaryImageId, avgRating, sla } =
    resData?.info;
  return (
    <div className="restroCard">
      <img
        className="restro-img"
        src={CDN_URL + cloudinaryImageId}
        alt="hotel-img"
      ></img>
      <h3 className="restaruntName">{name}</h3>
      <h4 style={{ wordWrap: "break-word" }}>{cuisines.join(",")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}</h4>
      <h4>{sla.slaString} </h4>
    </div>
  );
};

export default RestroCard;
