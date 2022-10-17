import './table.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {
    const rows = [
        {
            id: 1423136,
            product: "Acer Nitro 5",
            img: "https://computer-image.ru/upload/iblock/441/86af3rxids0n3nqgp94rnq59y3hwa5kt.jpg",
            costumer: "Nikita Korolev",
            date: "1 March",
            amount: 785,
            method: "Case on Delivery",
            status: "Approved",
        },
        {
            id: 2313427,
            product: "Playstation 5",
            img: "https://yandex-images.clstorage.net/9V7in3W72/c32e97DVM3hk/IJb_VCWhopOeLQP5TC2r1_5vRqAxOlQcAUPs5HyMkuxvCwFRVU5oK9T-YJ_wNMap6P76r46klSHeqIfQNEc8QAASK4RhxIaG2kwk7PlMuhY7b-OlYOvxacVCCQFI3SMpOojhNVRKrX5hiOC_gDU0W0rPHelccpfzzB9GUESSeTSR0yr3xzWwoO_spHks3Gx1DXwn4DDcZt7S9-zVL6ogLry7gdLlGH39ANl2KccjpXmL7o047OP0AZ7sJbB2ggpH9iLI9aSiE8FsnXc4rr39dg4PlbBB3jY_YPWv1qxKkwyfC7CzxSiNLaN4Nok2Ekbr2X-NqozzRaA-HcVTVoK5BLZRKWS2IaMRXV912dyvvLV-L0ViM-2mPTOkb7Vv-nGefTqj8ycY3Z4QeBaJxqIEuBt__qmt0xYBbtyUUqVAmHdmArkHlBAQ8h1uVgtcv_wmLqz0IrKOZq1TZfz0zwsxDm9JccAEWjx8AImV-4RhlrjqfgzbLOD1UNxc5oF2sQmGRANr92VC8QFvLPQJv0wsJK1dJeCjPzTvAWesFp97YSzcSZFCx1mf7vErBcrFABcYCe9-2C7AtdN9rdawBrKoxCUQi-aHgTLSv82XyL8-bbVOPQaSASyl_CDmPKT_iqIPDSqyYvTY7mwj-VXbx-BVysnPXrgOk1dzjQ32QObCCEY1QnjGlhNS0f9vJ-k8zl0lXA8mAUJtN17iRrxEP0jA7i74AaE1Sv0uMSl1ubWhJXr6fpxYTJL1MY5NxbJ0Ezu3p0KZlZWDUcDtzPeZLQztZp8uJcCi7KV-8BZt9t8KUa7umbAzFdmNvwCJBKrV0QTIiA1c6i5zxwM8vXeAhBMIFpQiuxUlsvCiny8Xiw7tn2V837bx4u_GTNKHrnSPuvLsn6mhcxR7zOwhqHeZNxGlOyrtHZvMoDQQza6VUITzuuXnwBlkptDDAI8fZmgdDh2VXE8EMvIcJ98TRiw1c",
            costumer: "Jon Doe",
            date: "9 April",
            amount: 900,
            method: "Online Payment",
            status: "Pending",
        },
        {
            id: 6543282,
            product: "Redragon S101",
            img: "https://nevateka.ru/upload/iblock/bb7/b6pnqqnryspdtodruiykc6b7881yl3xj/c2578bb4-f5af-4d13-ab47-9f7306165e2d.Jpeg",
            costumer: "Alex Grow",
            date: "17 May",
            amount: 35,
            method: "Cash on Delivery",
            status: "Pending",
        },
        {
            id: 6543282,
            product: "Razer Blade 15",
            img: "https://torg-pc.ru/upload/iblock/eeb/65oas7d1wjhzdu34kh6rmrkqp7bruxnu/Razer-Blade-Pro-17-2020.jpg",
            costumer: "Kate Smith",
            date: "12 June",
            amount: 920,
            method: "Online",
            status: "Approved",
        },
        {
            id: 9864237,
            product: "ASUS ROG Strix",
            img: "https://avatars.mds.yandex.net/get-mpic/3699263/img_id7297792322008787629.jpeg/orig",
            costumer: "Karen Dabeld",
            date: "30 Decomber",
            amount: 2000,
            method: "Online",
            status: "Pending",
        },
    ];

    return (
        <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className='tableCell'>Tracking ID</TableCell>
                        <TableCell className='tableCell'>Product</TableCell>
                        <TableCell className='tableCell'>Customer</TableCell>
                        <TableCell className='tableCell'>Date</TableCell>
                        <TableCell className='tableCell'>Amount</TableCell>
                        <TableCell className='tableCell'>Paymet Method</TableCell>
                        <TableCell className='tableCell'>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.id}>
                            <TableCell className='tableCell'>{row.id}</TableCell>
                            <TableCell className='tableCell'>{row.costumer}</TableCell>
                            <TableCell className='tableCell'>
                                <div className="cellWrapper">
                                    <img className='productImg' src={row.img} alt="IMG" />
                                    {row.product}
                                </div>
                            </TableCell>
                            <TableCell className='tableCell'>{row.date}</TableCell>
                            <TableCell className='tableCell'>{row.amount}</TableCell>
                            <TableCell className='tableCell'>{row.method}</TableCell>
                            <TableCell className='tableCell'>
                                <span className={`status ${row.status}`}>{row.status}</span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default List