import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Alert, Button } from '@mui/material';

const MyOrders = () => {
    const {user} = useAuth();
    const [orders, setOrders] = useState([]);
    const [success, setSuccess] = useState(false);

    useEffect(()=> {
        fetch(`https://enigmatic-shore-70440.herokuapp.com/orders/${user.email}`)
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [user.email]);

    const handleDeleteOrder = (id) => {
        const isDelete = window.confirm("Are You Sure to Delete?");
        if(isDelete){
            fetch(`https://enigmatic-shore-70440.herokuapp.com/orders/${id}`, {
            method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount){
                    setSuccess(true);
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                }
            })
        }
    }
    return (
        <>
        {success && <Alert sx={{my: 2}} severity="success">ORDER DELETED SUCCESSFULLY</Alert>}
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Index</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Action</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {orders.map((row, index) => (
                    <TableRow
                    key={row._id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {index + 1}
                    </TableCell>
                    <TableCell component="th" scope="row">
                        {row.productName}
                    </TableCell>
                    <TableCell>{row.price}</TableCell>
                    <TableCell>{row.description}</TableCell>
                    <TableCell>
                        <Button onClick={() => handleDeleteOrder(row._id)} style={{backgroundColor: '#D10750'}} variant="contained">Delete</Button>
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
        </>
    );
};

export default MyOrders;