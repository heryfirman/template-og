export default function CardWallet() {
  return (
    <div className="wallet-card">
      <div className="wrap-wallet">
        <div className="icon-wallet">
          <img src="./icon_wallet.png" alt="" />
        </div>
        <div className="wallet-info">
          <p>My Wallet</p>
          <div>account_rdxxxx</div>
        </div>
      </div>

      <button
        type="button"
        className="text-white bg-transparent hover:bg-gray-100 border focus:outline-none font-medium rounded-full text-xs pl-3 pr-1.5 pt-1 pb-1.5 text-center inline-flex items-center cursor-pointer dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-1"
      >
        Connect Wallet
        <span className="w-6 h-6 mt-0.5">
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
  );
}
