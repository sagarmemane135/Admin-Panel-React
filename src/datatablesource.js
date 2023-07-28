export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
        field: "user", headerName: "User", width: 230,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img src={params.row.img} alt="avatar" className="cellImg" />
                    {params.row.username}
                </div>
            )
        }
    },
    { field: "email", headerName: "Email", width: 230 },
    { field: "address", headerName: "Address", width: 200 },
    {
        field: "status", headerName: "Status", width: 230,
        renderCell: (params) => {
            return <div className={`cellWithStatus ${params.row.status}`}>
                {params.row.status}
            </div>
        },
    }
]
