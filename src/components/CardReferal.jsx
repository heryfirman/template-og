import { useState } from "react";

export default function CardReferal() {
  const [isPremium, setIsPremium] = useState(true);

  return (
    <div className="card-referalcode">
      <div className="top">
        <div className="w-20 h-20 mx-auto rounded-2xl bg-accent/50"></div>
        <div className="text">
          <h4>Invite your friends</h4>
          <p>Get Bonuses</p>
        </div>
        <hr className="w-[80%] h-px mx-auto my-8 bg-gray-700/50 border-0 dark:bg-gray-700" />
      </div>
      <div className="middle">
        <CardPoint isPremium={false} point="10" text="for Invite friends" />
        <CardPoint
          isPremium
          point="100"
          text="for Invite friends with premium"
        />
      </div>
      <div className="bottom">
        <ButtonShare />
        <button className="text-xs font-light tracking-wide italic my-4 cursor-pointer text-gray-500">
          Maybe Later
        </button>
      </div>
    </div>
  );
}

export const CardPoint = ({ isPremium, point, text }) => {
  return (
    <div className="card-point">
      {isPremium && (
        <div className="premium">
          <div className="icon">
            <img src="./icon_premium-star.svg" alt="" className="w-2.5 h-2.w-2.5 mx-auto translate-y-px"/>
          </div>
          <span className="text-[10px] font-normal leading-4 tracking-wider italic">
            Premium
          </span>
        </div>
      )}
      <div className="text-base font-medium leading-6 tracking-widest">
        +{point}
      </div>
      <p className="text-[11px] font-light leading-3 tracking-wider text-gray-400">
        {text}
      </p>
    </div>
  );
};

export const ButtonShare = () => {
  return (
    <button
      type="button"
      className="w-full cursor-pointer text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-0 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-[18px] text-base tracking-wide px-5 py-2.5 text-center mb-2 "
    >
      Invite Friends
    </button>
  );
};
