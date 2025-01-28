import CardHistory from "../components/CardHistory"
import CardWallet from "../components/CardWallet"

export default function Game() {
  return (
    <div className="wrapper">
      <div className="top">
        <CardTop />
      </div>
      <h3 className="text-3xl font-normal leading-10 mx-4 my-5">143.451.01 <span className="text-gray-300">OG</span></h3>
      <div className="list-card_info-gameplay">
        <CardInfo text="Total Win" point="20"/>
        <CardInfo text="Win Rate" point="48.55%"/>
        <CardInfo text="Win Strike" point="0"/>
      </div>
      <div className="list-games">
        <div className="content">
          <div className="my-6 px-5">
            <p className="text-xl font-extralight leading-0">Your order <span className="font-normal text-accent">10</span></p>
            <div></div>
          </div>
          <CardHistory />
          <CardHistory />
          <CardHistory />
          <CardHistory />
          <CardHistory />
        </div>
      </div>
    </div>
  )
}

export function CardInfo({text, point}) {
  return (
    <div className="card_info-gameplay">
      <p className="text-[10px] font-normal tracking-wide text-center text-gray-300">{text}</p>
      <div className="card-info">
        <span className="icon"></span>
        <div className="text-sm font-medium leading-0">{point}</div>
      </div>
    </div>
  )
}

export function CardTop() {
  const styles = {
    height: "2cap",
    aspectRatio: 1,
    borderRadius: "50%",
    backgroundColor: "transparent"
  }
  return (
    <div className="w-full h-auto flex flex-row justify-between items-center py-[12px] text-white">
      <div className="flex flex-row items-center gap-2">
        <div className="relative w-11 h-11">
          <img src="./icon_wallet.png" alt="" className="w-6 h-6 mx-auto my-2" />
        </div>
        <div className="text-sm font-medium -tracking-tighter text-accent">
          Up & Down Games
        </div>
      </div>

      <button
        type="button"
        className="text-white bg-accent/10 hover:bg-accent border border-accent/10 font-medium rounded-full text-xs pl-3 pr-1.5 py-1.5 align-baseline text-center inline-flex gap-1 items-center cursor-pointer me-1 outline-none"
        // className="text-white bg-accent/10 hover:bg-accent border border-accent/10 font-medium rounded-full text-xs pl-3 pr-1.5 pt-0.5 pb-1 align-baseline text-center inline-flex items-center cursor-pointer me-1"
      >
        {/* Connect Wallet */}
        <div className="text-xs font-light tracking-wide leading-0">Connect Wallet</div>
        <span style={styles}>
        {/* <span className="w-5 h-5 mt-0.5"> */}
          <svg
            data-slot="icon"
            aria-hidden="true"
            fill="none"
            strokeWidth="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </span>
      </button>
    </div>
  )
}