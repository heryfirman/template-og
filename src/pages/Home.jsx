// import { ReactComponent as Turnover } from './rotate-circle.svg'
import Banner from '../components/Banner'
import CardHistory from '../components/CardHistory'
import CardLeaderboard from '../components/CardLeaderboard'
import CardReferal from '../components/CardReferal'
import CardTask from '../components/CardTask'
import CardTransaction from '../components/CardTransaction'
import CardWallet from '../components/CardWallet'
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
            
            <CardWallet />

            <div className="card-info__total-turnover">
                <div className="total-turnover">
                    <div>3.604</div>
                    <span>Total Turnover</span>
                </div>
                <div className="btn-turnover">
                    <img src={viteLogo} alt="logo turnover" className='logo-turnover' />
                </div>
            </div>

            <h3 className='my-5 text-xl font-light leading-6 text-gray-400'>Last<br />
            Transaction</h3>
            <div className="flex flex-col justify-center mb-28">
                <CardTransaction />
                <CardTransaction />
                <CardTransaction />
                <CardTransaction />
                <CardTransaction />
                <CardTransaction />
            </div>
        </div>
    )
}

export default Home
