export default function CardTransaction() {
  return (
    <div className="card-transaction">
      <div className="right">
        <div className="logo-crypto">
          <img src="./btc-logo.svg" alt="" />
        </div>
        <div className="flex flex-col justify-between gap-1">
          <div className="relative flex align-baseline items-center gap-1.5">
            <div className="text-base font-medium tracking-wider leading-0">BTC</div>
            <span className="inline-block px-2.5 text-[11px] font-light tracking-wide rounded-full border border-blue-700">
              XRD
            </span>
          </div>
          <div className="text-sm font-light text-gray-300">Bictoin</div>
        </div>
      </div>

      <div className="flex flex-col justify-between text-right text-sm font-light tracking-wide">
        <div className="text-gray-300">1.00</div>
        <div>$24,026,780,882</div>
      </div>
    </div>
  );
}
