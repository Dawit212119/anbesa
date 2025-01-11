// import * as React from "react";
// import { DataGrid, GridColDef } from "@mui/x-data-grid";
// import Paper from "@mui/material/Paper";
// import Actionbtn from "./Admincomponent/Actionbtn";
// import { MdAccessTimeFilled, MdDone, MdRemoveRedEye } from "react-icons/md";
// import { FaTimesCircle } from "react-icons/fa";
// import Status from "./Admincomponent/Status";

// const paginationModel = { page: 0, pageSize: 5 };

// export default function ManageApplications() {
//   const [fetchrows, setRows] = React.useState([]);

//   ///////     fetching the request data

//   React.useEffect(() => {
//     const fetchingData = async () => {
//       const Response = await fetch("/route/getall/");
//       const data = await Response.json();
//       if (data) {
//         setRows(data);
//       }
//     };
//     fetchingData();
//   }, []);

//   const handleDenied = (id: string) => {
//     console.log(id);
//   };
//   const handlePending = (id: string) => {
//     console.log(id);
//   };
//   const handleReviewed = (id: string) => {};
//   const handleviewed = (id: string) => {};
//   const columns: GridColDef[] = [
//     { field: "id", headerName: "ID", width: 200 },
//     { field: "Route", headerName: "Route", width: 200 },
//     {
//       field: "Time",
//       headerName: "Time",
//       type: "date",
//       width: 200,
//     },
//     {
//       field: "Status",
//       headerName: "Status",
//       description: "This column has a value getter and is not sortable.",
//       sortable: false,
//       width: 200,
//       renderCell: (params) => {
//         return (
//           <div>
//             {params.row.status === "pending" ? (
//               <Status
//                 text="Pending"
//                 icon={MdAccessTimeFilled}
//                 bg="bg-slate-200"
//                 color="text-slate-700"
//               />
//             ) : params.row.status === "rejected" ? (
//               <Status
//                 text="Rejected"
//                 icon={FaTimesCircle}
//                 bg="bg-red-200"
//                 color="text-red-700"
//               />
//             ) : params.row.status === "accepted" ? (
//               <Status
//                 text="Accepted"
//                 icon={MdDone}
//                 bg="bg-green-200"
//                 color="text-green-700"
//               />
//             ) : (
//               <></>
//             )}
//           </div>
//         );
//       },
//     },
//     {
//       field: "Action",
//       headerName: "Action",
//       width: 200,
//       renderCell: (params) => {
//         return (
//           <div className="flex justify-between gap-4 w-full my-2">
//             <Actionbtn
//               icon={FaTimesCircle}
//               onClick={() => {
//                 handleDenied(params.row.id);
//               }}
//             />
//             <Actionbtn
//               icon={MdAccessTimeFilled}
//               onClick={() => {
//                 handlePending(params.row.id);
//               }}
//             />
//             <Actionbtn
//               icon={MdDone}
//               onClick={() => {
//                 handleReviewed(params.row.id);
//               }}
//             />
//           </div>
//         );
//       },
//     },
//   ];

//   const rows = [
//     { id: 1, Time: new Date(), Route: "bethel-alembank", Status: "Pending" },
//     { id: 2, Time: new Date(), Route: "pissa-adisugebya", Status: "Pending" },
//     { id: 3, Time: new Date(), Route: "megenagna-abado", Status: "Accepted" },
//     { id: 4, Time: new Date(), Route: "ayat-cmc", Status: "Pending" },
//     { id: 5, Time: new Date(), Route: "bole-4killo", Status: "Pending" },
//     { id: 6, Time: new Date(), Route: "4killo-mexico", Status: "Pending" },
//     { id: 7, Time: new Date(), Route: "mexico-sheromeda", Status: "Pending" },
//     { id: 8, Time: new Date(), Route: "ferensay-6killo", Status: "Pending" },
//     { id: 9, Time: new Date(), Route: "kalite-koyefetch", Status: "Pending" },
//   ];

//   return (
//     <>
//       <div className="font-bold text-xl mb-7 text-center">
//         Manage <span className="text-orange-500 ">Route</span>{" "}
//       </div>
//       <Paper sx={{ height: 400, width: "100%" }} className="bg-slate-400">
//         <DataGrid
//           rows={rows}
//           columns={columns}
//           initialState={{ pagination: { paginationModel } }}
//           pageSizeOptions={[5, 10]}
//           checkboxSelection
//           sx={{ border: 0 }}
//         />
//       </Paper>
//     </>
//   );
// }
