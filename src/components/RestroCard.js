import { CDN_URL } from "../utils/constant";

const RestroCard = ({ resData }) => {
  const { name, cuisines, costForTwo, cloudinaryImageId, avgRating, sla } =
    resData?.info;

  return (
    <div className=" w-[250px] h-[480px] bg-red-50 m-2">
      <img
        className="w-full h-48 shadow-2xl rounded-xl"
        src={CDN_URL + cloudinaryImageId}
        alt="hotel-img"
      ></img>
      <div className="p-4">
        <h3 className="font-bold py-2 text-lg">{name}</h3>
        <h4 style={{ wordWrap: "break-word" }}>{cuisines.join(",")}</h4>
        <h4>{costForTwo}</h4>
        <h4>{avgRating}</h4>
        <h4>{sla.slaString} </h4>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestroCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute bg-purple-600 px-2 text-white rounded-lg">
          PROMOTED
        </label>
        <RestroCard {...props} />
      </div>
    );
  };
};
export default RestroCard;
