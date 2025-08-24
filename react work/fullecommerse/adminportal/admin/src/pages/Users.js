import React, { useState, useEffect, useMemo } from "react";
import { Search } from "lucide-react";
import axios from "axios";
import { Pagination, PaginationInfo, ItemsPerPageSelector } from "./Pagination";

const Users = () => {
  const apiurl = process.env.REACT_APP_BACKEND_URL;

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [sortConfig, setSortConfig] = useState({
    key: "customer_name",
    direction: "asc",
  });

  const [visibleColumns, setVisibleColumns] = useState([
    "customer_name",
    "email",
    "password",
    "customer_phone",
    "date_joined",
  ]);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const fetchUsers = async () => {
    try {
      const res = await axios.get(`${apiurl}/users`,{ withCredentials: true });
      setUsers(res.data); // fix: use setUsers
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const columns = [
    { label: "Name", key: "customer_name" },
    { label: "Email", key: "email" },
    { label: "Password", key: "password" },
    { label: "Phone", key: "customer_phone" },
    { label: "Joined", key: "date_joined" },
  ];

  const getByPath = (obj, path) =>
    path
      .split(".")
      .reduce(
        (acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined),
        obj
      );

  // Search
  const matchesSearch = (user, q) => {
    if (!q) return true;
    const needle = q.toLowerCase();
    return columns.some(({ key }) => {
      const v = getByPath(user, key);
      if (v == null) return false;
      const str =
        typeof v === "number" ? String(v) : v.toString().toLowerCase();
      return str.includes(needle);
    });
  };

  // Sorting
  const handleSort = (key) => {
    setSortConfig((prev) =>
      prev.key === key
        ? { key, direction: prev.direction === "asc" ? "desc" : "asc" }
        : { key, direction: "asc" }
    );
  };

  // Filter + Sort
  const sortedFilteredUsers = useMemo(() => {
    const q = search.trim();
    const arr = users.filter((u) => matchesSearch(u, q));

    if (!sortConfig?.key) return arr;
    const { key, direction } = sortConfig;
    const dir = direction === "asc" ? 1 : -1;

    return [...arr].sort((a, b) => {
      const va = getByPath(a, key) ?? "";
      const vb = getByPath(b, key) ?? "";
      if (va < vb) return -1 * dir;
      if (va > vb) return 1 * dir;
      return 0;
    });
  }, [users, search, sortConfig]);

  // Pagination
  const totalItems = sortedFilteredUsers.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const currentItems = sortedFilteredUsers.slice(startIndex, endIndex);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold text-gray-900">Users</h2>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search users..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                {columns
                  .filter((c) => visibleColumns.includes(c.key))
                  .map(({ label, key }) => (
                    <th
                      key={key}
                      onClick={() => handleSort(key)}
                      className="px-6 py-3 cursor-pointer text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {label}{" "}
                      {sortConfig.key === key
                        ? sortConfig.direction === "asc"
                          ? "▲"
                          : "▼"
                        : ""}
                    </th>
                  ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentItems.map((user) => (
                <tr key={user._id} className="hover:bg-gray-50">
                  {columns
                    .filter((c) => visibleColumns.includes(c.key))
                    .map(({ key }) => {
                      let value = getByPath(user, key);

                      if (key === "date_joined" && value) {
                        value = new Date(value).toLocaleDateString();
                      }

                      // For Name column, show avatar + name
                      if (key === "customer_name") {
                        return (
                          <td
                            key={key}
                            className="px-6 py-4 whitespace-nowrap flex items-center gap-3 text-gray-900"
                          >
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                              <span className="text-blue-600 font-medium">
                                {value?.charAt(0)}
                              </span>
                            </div>
                            <span>{value ?? "-"}</span>
                          </td>
                        );
                      }

                      return (
                        <td
                          key={key}
                          className="px-6 py-4 whitespace-nowrap text-gray-900"
                        >
                          {value ?? "-"}
                        </td>
                      );
                    })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex flex-wrap md:flex-nowrap items-center justify-between mt-4 gap-4 overflow-x-auto">
        <ItemsPerPageSelector
          itemsPerPage={itemsPerPage}
          onItemsPerPageChange={(n) => {
            setItemsPerPage(n);
            setCurrentPage(1);
          }}
        />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
        <PaginationInfo
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          startIndex={startIndex}
          endIndex={endIndex}
        />
      </div>
    </div>
  );
};

export default Users;
