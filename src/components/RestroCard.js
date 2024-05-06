import { CDN_URL } from "../utils/constant";

const RestroCard = ({ resData }) => {
  const { name, cuisines, costForTwo, cloudinaryImageId, avgRating, sla } =
    resData?.info;

  return (
    <div className=" w-[250px] h-[480px] bg-red-50 m-2 shadow-2xl rounded-xl transform transition-transform hover:scale-105 hover:bg-slate-300">
      <img
        className="rounded-lg w-full h-48"
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

export default RestroCard;
