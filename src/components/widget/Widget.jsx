import './widget.scss'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlined from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import { useEffect, useState } from 'react';
import { db } from "../../firebase"
import { doc, collection, query, where, getDocs } from "firebase/firestore"

const Widget = ({ type }) => {
    const [amount, setAmount] = useState(null)
    const [diff, setDiff] = useState(null)
    let data;
    // temporary
    // const amount = 500
    // const diff = 20
    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all Users",
                icon: <PersonOutlineOutlined className="icon" style={{
                    color: "crimson",
                    backgroundColor: "rgba(255,0,0,0.2)",
                }} />,
            };
            break;
        case "earning":
            data = {
                title: "EARNINGS",
                isMoney: true,
                link: "View net Earnings",
                icon: <MonetizationOnOutlinedIcon className="icon" style={{
                    color: "green",
                    backgroundColor: "rgba(0,128,0,0.2)",
                }} />,
            };
            break;
        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "View all orders",
                icon: <ShoppingCartOutlinedIcon className="icon" style={{
                    color: "goldenrod",
                    backgroundColor: "rgba(218,165,32,0.2)",
                }} />,
            };
            break;
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "See details",
                icon: <AccountBalanceWalletOutlinedIcon className="icon" style={{
                    color: "purple",
                    backgroundColor: "rgba(128,0,128,0.2",
                }} />,
            };
            break;

        default:
            break;
    }


    useEffect(() => {
        const fetchdata = async () => {
            const today = new Date();
            const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1))
            const prevMonth = new Date(new Date().setMonth(today.getMonth() - 2))

            const lastMonthQuery = query(collection(db, "users"), where("timesStamp", "<=", today), where("timesStamp", ">", lastMonth));
            const prevMonthQuery = query(collection(db, "users"), where("timesStamp", "<=", lastMonth), where("timesStamp", ">", prevMonth));

            const lastMonthData = await getDocs(lastMonthQuery)
            const prevMonthData = await getDocs(prevMonthQuery)

            setAmount(lastMonthData.docs.length)
            setDiff((lastMonthData.docs.length - prevMonthData.docs.length) / (prevMonthData.docs.length) * 100)
        }
        fetchdata();
    }, [])


    return (
        <div className='widget'>
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && "$"} {amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpOutlinedIcon />
                    {diff}%
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget