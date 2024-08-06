"use client";

import { useGetUsersQuery } from "@/state/api";
import { titleCase } from "title-case";
import { PlusCircleIcon, SearchIcon } from "lucide-react";
import Header from "@/shared/widgets/header";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";

const columns: GridColDef[] = [
    { field: "userId", headerName: "ID", width: 90 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "email", headerName: "Email", width: 200 },
];

const Users = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const { data: users, isError, isLoading } = useGetUsersQuery(searchTerm);

    if (isLoading) {
        return <div className="py-4">Loading...</div>;
    }

    if (isError || !users) {
        return (
            <div className="text-center text-red-500 py-4">Failed to fetch users</div>
        );
    }

    return (
        <div className="flex flex-col">
            <div className="flex flex-col align-top gap-4 justify-between md:flex-row md:items-center ">
                <Header name="Users" />
                {/* SEARCH BAR */}
                <div className="mb-6">
                    <div className="flex items-center border-2 border-gray-200 rounded">
                        <SearchIcon className="w-5 h-5 text-gray-500 m-2" />
                        <input
                            className="w-full py-2 px-4 rounded bg-white"
                            placeholder="Search Users..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(titleCase(e.target.value))}
                        />
                    </div>
                </div>
            </div>
            <DataGrid
                rows={users}
                columns={columns}
                getRowId={(row) => row.userId}
                checkboxSelection
                className="bg-white shadow rounded-lg border border-gray-200 mt-5 !text-gray-700"
            />
        </div>
    );
};

export default Users;
