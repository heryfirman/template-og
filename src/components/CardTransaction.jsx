export default function CardTransaction() {
  return (
    <div className="card-transaction">
      <div className="right">
        <div className="logo-crypto">
          <img src="./btc-logo.svg" alt="" />
        </div>
        <div className="flex flex-col gap-1.5 pt-1">
          <div className="relative text-[18px] font-medium tracking-wider leading-2">
            BTC
            <span className="inline-block ml-3 px-3 py-[1px] text-xs font-light tracking-wide rounded-full border border-blue-700">
              XRD
            </span>
          </div>
          <div className="text-sm text-gray-300">Bictoin</div>
        </div>
      </div>

      <div className="flex flex-col gap-1.5 text-right text-sm font-light tracking-wider pt-1">
        <div>1.00</div>
        <div>$24,026,780,882</div>
      </div>
    </div>
  );
}
