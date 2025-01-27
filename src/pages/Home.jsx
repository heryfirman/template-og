// import { ReactComponent as Turnover } from './rotate-circle.svg'
import Banner from '../components/Banner'
import CardHistory from '../components/CardHistory'
import CardLeaderboard from '../components/CardLeaderboard'
import CardReferal from '../components/CardReferal'
import CardTask from '../components/CardTask'
import CardTransaction from '../components/CardTransaction'
import viteLogo from '/rotate-circle.svg'

const Home = () => {
    return (
        <div className="wrapper">
            <div className="card-info__total-asset">
                <h4 className="text-xs font-light tracking-wide">Earned using by RDX</h4>
                <div className="flex flex-row justify-items-center items-center gap-2 mx-auto">
                    <div className="circle"></div>
                    <span className="text-4xl font-light tracking-wider">80.902.32</span>
                </div>
            </div>
            
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

                <button type="button" className="text-white bg-transparent hover:bg-gray-100 border focus:outline-none font-medium rounded-full text-xs pl-3 pr-1.5 pt-1 pb-1.5 text-center inline-flex items-center cursor-pointer dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-1">
                    Connect Wallet
                    <span className="w-6 h-6 mt-0.5">
                        <svg data-slot="icon" aria-hidden="true" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="m8.25 4.5 7.5 7.5-7.5 7.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </span>
                </button>
            </div>

            <div className="card-info__total-turnover">
                <div className="total-turnover">
                    <div>3.604</div>
                    <span>Total Turnover</span>
                </div>
                <div className="btn-turnover">
                    <img src={viteLogo} alt="logo turnover" className='logo-turnover' />
                    {/* <span> */}
                        {/* <Turnover /> */}
                    {/* </span> */}
                </div>
            </div>

            <h3 className='my-5 text-xl font-normal tracking-wide leading-6 text-gray-400'>Last<br />
            Transaction</h3>
            <CardTransaction />

            {/* <div className="relative w-full h-full flex flex-col justify-content-center items-center mx-auto border-2 border-red-800">
                <h3 className="uppercase text-gray-600">Homepage</h3>
            </div> */}


            <div className='mt-5'>
                <Banner labelName="TOP 100" bannerName="Leaderboards"/>
            </div>
            <div className='mt-5'>
                <Banner labelName="3 Task" bannerName="Current Tasks"/>
            </div>


            {/* Component Card Task */}
            <div className="my-20">
                <CardTask taskName="Invite your friends" />
            </div>
            
            {/* Component Card Leaderboard */}
            <div className="my-30">
                <CardLeaderboard nickname="Nickname" username="@username" total="100.902.8" rank="1"/>
            </div>

            {/* Component Card Referal Code Share */}
            <div className="my-30">
                <CardReferal />
            </div>

            <div className="my-30">
                <CardHistory />
            </div>

        </div>
    )
}

export default Home
