export const userColumns = [{ field: 'id', headerName: 'ID', width: 70 }, {
    field: "user", headerName: "User", width: 230, renderCell: (params) => {
        return (
            <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt="avatar" />
                {params.row.username}
            </div>
        );
    }, 
},
{
    field: "email", headerName: "Email", width: 230
},
{
    field: "age", headerName: "Age", width: 100
},
{
    field: "status", headerName: "Status", width: 160, renderCell:(params) =>{
        return (
            <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
        )
    }
},
];

export const userRows = [
    {
        id: 1,
        username: "Snow",
        img: "https://forumavatars.ru/img/avatars/0012/e4/56/188-1607700169.jpg",
        status: "active",
        email: "snow@gmail.com",
        age: 35,
    },
    {
        id: 2,
        username: "Igor",
        img: "https://forumavatars.ru/img/avatars/0012/e4/56/188-1607700169.jpg",
        status: "passive",
        email: "i.romanovich@gmail.com",
        age: 26,
    },
    {
        id: 3,
        username: "Nikolas",
        img: "https://forumavatars.ru/img/avatars/0012/e4/56/188-1607700169.jpg",
        status: "pending",
        email: "Nik.los@gmail.com",
        age: 29,
    },
    {
        id: 4,
        username: "Jamil",
        img: "https://forumavatars.ru/img/avatars/0012/e4/56/188-1607700169.jpg",
        status: "active",
        email: "ja.mi.le@gmail.com",
        age: 42,
    },
    {
        id: 5,
        username: "Snow",
        img: "https://forumavatars.ru/img/avatars/0012/e4/56/188-1607700169.jpg",
        status: "active",
        email: "snow@gmail.com",
        age: 35,
    },
    {
        id: 6,
        username: "Igor",
        img: "https://forumavatars.ru/img/avatars/0012/e4/56/188-1607700169.jpg",
        status: "passive",
        email: "i.romanovich@gmail.com",
        age: 26,
    },
    {
        id: 7,
        username: "Nikolas",
        img: "https://forumavatars.ru/img/avatars/0012/e4/56/188-1607700169.jpg",
        status: "pending",
        email: "Nik.los@gmail.com",
        age: 29,
    },
    {
        id: 8,
        username: "Jamil",
        img: "https://forumavatars.ru/img/avatars/0012/e4/56/188-1607700169.jpg",
        status: "active",
        email: "ja.mi.le@gmail.com",
        age: 42,
    },
    {
        id: 9,
        username: "Snow",
        img: "https://forumavatars.ru/img/avatars/0012/e4/56/188-1607700169.jpg",
        status: "active",
        email: "snow@gmail.com",
        age: 35,
    },
    {
        id: 10,
        username: "Igor",
        img: "https://forumavatars.ru/img/avatars/0012/e4/56/188-1607700169.jpg",
        status: "passive",
        email: "i.romanovich@gmail.com",
        age: 26,
    },
    {
        id: 11,
        username: "Nikolas",
        img: "https://forumavatars.ru/img/avatars/0012/e4/56/188-1607700169.jpg",
        status: "pending",
        email: "Nik.los@gmail.com",
        age: 29,
    },
    {
        id: 12,
        username: "Jamil",
        img: "https://forumavatars.ru/img/avatars/0012/e4/56/188-1607700169.jpg",
        status: "active",
        email: "ja.mi.le@gmail.com",
        age: 42,
    },
    {
        id: 13,
        username: "Snow",
        img: "https://forumavatars.ru/img/avatars/0012/e4/56/188-1607700169.jpg",
        status: "active",
        email: "snow@gmail.com",
        age: 35,
    },
    {
        id: 14,
        username: "Igor",
        img: "https://forumavatars.ru/img/avatars/0012/e4/56/188-1607700169.jpg",
        status: "passive",
        email: "i.romanovich@gmail.com",
        age: 26,
    },
    {
        id: 15,
        username: "Nikolas",
        img: "https://forumavatars.ru/img/avatars/0012/e4/56/188-1607700169.jpg",
        status: "pending",
        email: "Nik.los@gmail.com",
        age: 29,
    },
    {
        id: 16,
        username: "Jamil",
        img: "https://forumavatars.ru/img/avatars/0012/e4/56/188-1607700169.jpg",
        status: "active",
        email: "ja.mi.le@gmail.com",
        age: 42,
    },
    
];