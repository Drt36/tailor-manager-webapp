import React from "react";
import { sendGetRequest } from "../services/GetService";
import { useState, useEffect } from "react";
import Table from "./Table";
import "../assets/css/pagination.css";
import AdminSidebar from "./AdminSidebar";
import ReactPaginate from "react-paginate";

const User = () => {

  const [responseData, setResponseData] = useState({
    data: undefined,
    error: undefined,
    loading: false,
  });

  const [page, setPage] = useState(0);

  const getUsers = async () => {
    setResponseData({ data: undefined, error: undefined, loading: true });
    const { data, error, loading } = await sendGetRequest(
      "api/admin/users?page=" + page
    );
    setResponseData({ data: data, error: error, loading: loading });
  };

  useEffect(() => {
    getUsers();
  }, [page]);

  const handelPageChange=(pageData)=>{
      console.log(pageData)
    setPage(pageData.selected)
  } 

  console.log(responseData.data);


  return (
    <>
     {
    (responseData.data!==undefined)&&(
        <div>
        <AdminSidebar />
        <Table users={responseData.data.totalPages} />
        <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            breakLabel={"..."}
            pageCount={responseData.data.totalPages}
            onPageChange={handelPageChange}
            />
        </div>
    )
   }
  </>
  );
};

export default User;
