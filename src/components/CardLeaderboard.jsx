
export default function CardLeaderboard({nickname, username, total, rank}) {
  return (
    <div className="card-laderboard">
        <div className="left">
            {/* <div className="absolute top-0 -left-1 w-3 h-full rounded-full bg-accent"/> */}
            <div className="relative max-w-[38px] h-[38px] overflow-hidden rounded-full bg-primary">
                <img src="./avatar.png" alt="" className="w-10 h-10 aspect-square object-cover"/>
            </div>
            <div className="flex flex-col gap-1.5">
                <div className="text-sm font-medium leading-none">{nickname} <span className="text-xs font-extralight">{username}</span></div>
                <div className="flex align-baseline items-center gap-1">
                    <div className="icon" />
                    <span className="text-sm font-light leading-none">{total}</span>
                </div>
            </div>
        </div>
        <div className="right">
            <div className="rank">{rank}</div>
        </div>
    </div>
  )
}
