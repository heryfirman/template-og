import { useEffect, useRef, useState } from 'react'
import CardTransaction from '../components/CardTransaction'
import CardWallet from '../components/CardWallet'
import viteLogo from '/rotate-circle.svg'

const Home = () => {
    const [transactionLists, setTransactionLists] = useState([])
    const loaded = useRef(false)

    useEffect(() => {
    if (loaded.current === false) {
        fetch("/transactions.json")
            .then((response) => response.json())
            .then((data) => setTransactionLists(data))
            .then(() => loaded.current = true)
    }

    return () => {
        console.log('clean up');
    }
    }, [loaded])
    
    console.log(transactionLists);
    return (
        <div className="wrapper">
            <div className="card-info__total-asset">
                <h4 className="text-xs font-extralight tracking-wider">Earned using by RDX</h4>
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

            <h3 className='my-5 text-xl font-light leading-6 text-gray-400'>Last<br /> Transaction</h3>

            <ul className="list-transactions">
                {transactionLists.map((t) => (
                    <CardTransaction key={t.id} token={t.tokenName} abbr={t.abbreviation} total={t.total} value={t.value} />
                ))}
            </ul>
        </div>
    )
}

export default Home
