import './table.scss'
import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const rows = [
  {
    id: 124445,
    product: "Acer Nitro 5",
    img: "https://m.media-amazon.com/images/I/91U5Ler19jL._AC_UY218_.jpg",
    customer: "John Smith",
    date: "1 March",
    amount: 785,
    method: "Cash on Delivery",
    status: "Approved"

  },
  {
    id: 1344567,
    product: "Razer Blade 15",
    img: "https://m.media-amazon.com/images/I/81B54EwuLUL._AC_UY218_.jpg",
    customer: "Michhele",
    date: "1 March",
    amount: 1084,
    method: "Online",
    status: "Approved"

  },
  {
    id: 124445,
    product: "Asus Rog Strix",
    img: "https://m.media-amazon.com/images/I/61bwqXfWiaL._AC_UY218_.jpg",
    customer: "Marold Carol",
    date: "1 March",
    amount: 678,
    method: "Online",
    status: "Pending"

  },
  {
    id: 2525688,
    product: "Redragon S101",
    img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY218_.jpg",
    customer: "Jane Smith",
    date: "1 March",
    amount: 35,
    method: "Cash on Delivery",
    status: "Pending"

  },
  {
    id: 845927,
    product: "Playsttion 5",
    img: "https://m.media-amazon.com/images/I/71lkbBa83uL._SX679_.jpg",
    customer: "Michael Doe",
    date: "1 March",
    amount: 900,
    method: "Online Payment",
    status: "Pending"

  }
];

const Table1 = () => {
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell" >Tracking ID</TableCell>
            <TableCell className="tableCell" >Product </TableCell>
            <TableCell className="tableCell" >Customer</TableCell>
            <TableCell className="tableCell" >Date</TableCell>
            <TableCell className="tableCell" >Amount</TableCell>
            <TableCell className="tableCell" >Payment Method</TableCell>
            <TableCell className="tableCell" >Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className='image' />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Table1