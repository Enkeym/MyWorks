import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useState } from "react";

const Datatable = () => {

    const [data, setDaat] = useState(userRows)

    const handleDelete = (id) => {
        setDaat(data.filter(item => item.id !== id))
    }

    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="cellActions">
                        <Link to="/users/test" style={{ textDecoration: "none" }}>
                            <div className="viewButton">View</div>
                        </Link>
                        <div className="deleteButton" onClick={() => handleDelete(params.row.id)}>Delete</div>
                    </div>
                )
            }
        }
    ];

    return (
        <div className="datatable">
            <div className="dataTableTitle">
                Add New Users
                <Link to="/users/new" className="link">
                    Add New<PersonAddIcon className="icon" />
                </Link>
            </div>
            <DataGrid
                className="datagrid"
                rows={data}
                columns={userColumns.concat(actionColumn)}
                pageSize={14}
                rowsPerPageOptions={[14]}
                checkboxSelection
            />
        </div>
    );
};

export default Datatable