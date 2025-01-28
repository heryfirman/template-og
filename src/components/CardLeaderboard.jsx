
export default function CardLeaderboard({nickname, username, total, rank}) {
  return (
    <div className="card-laderboard">
        <div className="left">
            {/* <div className="absolute top-0 -left-1 w-3 h-full rounded-full bg-accent"/> */}
            <div className="relative w-[34px] h-[34px] overflow-hidden rounded-full bg-primary">
                <img src="./avatar.png" alt="" className="w-10 h-10 aspect-square object-cover"/>
            </div>
            <div className="flex flex-col gap-1">
                <div className="text-xs font-normal tracking-wide leading-none">{nickname} <span className="text-xs text-gray-500">/</span> <span className="text-[10px] font-extralight">{username}</span></div>
                <div className="flex align-baseline items-center gap-1">
                    <div className="icon" />
                    <span className="text-xs font-light text-gray-300 leading-none">{total}</span>
                </div>
            </div>
        </div>
        <div className="right">
            <div className={`rank ${rank <= 3 && rank >= 0 ? "bg-accent" : "bg-transparent"} `}>{rank}</div>
        </div>
    </div>
  )
}
