import React, { useState, useEffect, useMemo } from "react";
import { Search, Filter, Download } from "lucide-react";
import axios from "axios";
import * as XLSX from "xlsx";
import { Pagination, PaginationInfo, ItemsPerPageSelector } from "./Pagination";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [editOrder, setEditOrder] = useState(null);
  const [search, setSearch] = useState("");
  const [sortConfig, setSortConfig] = useState({
    key: "orderId",
    direction: "asc",
  });
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [visibleColumns, setVisibleColumns] = useState([
    "orderId",
    "customer_name",
    "customer_email",
    "customer_phone",
    "customer_address.state",
    "customer_address.city",
    "customer_address.street",
    "customer_address.zip",
    "products.name",
  "products.price",
  "products.qty",
  "products.color",
  "products.category",
  "products.subcategory",
    "Order_status",
    "order_date",
    "payment_method",
    "total_amount",
    "delivery_date",
    "delivey_charges",
    "hidden_charges",
  ]);
  const [showFilter, setShowFilter] = useState(false);

  const apiurl = process.env.REACT_APP_BACKEND_URL;

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(`${apiurl}/orders`, {
        withCredentials: true,
      });

      setOrders(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "Order Placed":
        return "bg-blue-100 text-blue-800";
      case "Packaging":
        return "bg-yellow-100 text-yellow-800";
      case "Shipped":
        return "bg-purple-100 text-purple-800";
      case "Out for Delivery":
        return "bg-orange-100 text-orange-800";
      case "Delivered":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  // sort handler
  // Removed duplicate handleSort function to resolve redeclaration error.

  // status workflow
  const orderflow = [
    "Order Placed",
    "Packaging",
    "Shipped",
    "Out for Delivery",
    "Delivered",
  ];
  const nextStatus = (currentStatus) => {
    const idx = orderflow.indexOf(currentStatus);
    return orderflow[(idx + 1) % orderflow.length];
  };

  // const handleStatusClick = async (order) => {
  //   try {
  //     const updatedOrder = {
  //       ...order,
  //       Order_status: nextStatus(order.Order_status),
  //     };
  //     await axios.put(`${apiurl}/orders/${order._id}`, updatedOrder, {
  //       withCredentials: true,
  //     });
  //     fetchOrders();
  //   } catch (error) {
  //     console.error("Error updating status:", error);
  //   }
  // };

  const handleStatusClick = async (order) => {
  try {
    const newStatus = nextStatus(order.Order_status);

    await axios.put(`${apiurl}/orders/${order._id}`, {
      Order_status: newStatus,
    }, { withCredentials: true });

    fetchOrders();
  } catch (error) {
    console.error("Error updating status:", error);
  }
};

const handleBulkStatusChange = async () => {
  try {
    await Promise.all(
      selectedOrders.map(async (orderId) => {
        const order = orders.find((o) => o._id === orderId);
        if (!order) return;

        // Only send the updated status
        await axios.put(`${apiurl}/orders/${orderId}`, {
          Order_status: nextStatus(order.Order_status),
        }, { withCredentials: true });
      })
    );

    fetchOrders();
    setSelectedOrders([]);
  } catch (e) {
    console.error("Bulk update failed:", e);
  }
};



  // const handleBulkStatusChange = async () => {
  //   try {
  //     await Promise.all(
  //       selectedOrders.map(async (orderId) => {
  //         const order = orders.find((o) => o._id === orderId);
  //         if (!order) return;
  //         const updatedOrder = {
  //           ...order,
  //           Order_status: nextStatus(order.Order_status),
  //         };
  //         await axios.put(`${apiurl}/orders/${orderId}`, updatedOrder, {
  //           withCredentials: true,
  //         });
  //       })
  //     );
  //     fetchOrders();
  //     setSelectedOrders([]);
  //   } catch (e) {
  //     console.error("Bulk update failed:", e);
  //   }
  // };

  // ---- Utilities ----
  // const getByPath = (obj, path) =>
  //   path
  //     .split(".")
  //     .reduce(
  //       (acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined),
  //       obj
  //     );

//   const getByPath = (obj, path) => {
//   const value = path.split(".").reduce((acc, key) => acc?.[key], obj);
//   // if value is an array of objects, flatten it
//   if (Array.isArray(value)) {
//     return value.map(v => (typeof v === "object" ? JSON.stringify(v) : v)).join(", ");
//   }
//   return value;
// };

const getByPath = (obj, path) => {
  const parts = path.split(".");
  let value = obj;

  for (let part of parts) {
    if (Array.isArray(value)) {
      value = value.map(v => v?.[part]);
    } else {
      value = value?.[part];
    }
  }

  // if final value is array, flatten it to string
  if (Array.isArray(value)) {
    return value.map(v => (typeof v === "object" ? JSON.stringify(v) : v)).join(", ");
  }

  return value;
};



  const normalizeForSort = (val, key) => {
    if (val == null) return "";
    // Dates
    if (key === "order_date" || key === "delivery_date") {
      const t = new Date(val).getTime();
      return Number.isNaN(t) ? 0 : t;
    }
    // Numbers
    if (typeof val === "number") return val;
    if (
      typeof val === "string" &&
      val.trim() !== "" &&
      !Number.isNaN(Number(val))
    ) {
      return Number(val);
    }
    return String(val).toLowerCase();
  };

  // Define columns once (label + key path used for sorting/searching)
  const columns = [
    { label: "Order ID", key: "orderId" },
    { label: "Customer name", key: "customer_name" },
    { label: "customer email", key: "customer_email" },
    { label: "customer phone", key: "customer_phone" },
    { label: "customer state", key: "customer_address.state" },
    { label: "city", key: "customer_address.city" },
    { label: "streed", key: "customer_address.street" }, // keeping your original label
    { label: "zip code", key: "customer_address.zip" },
    { label: "product name", key: "products.name" },
    { label: "product price", key:  "products.price" },
    { label: "product quantity", key: "products.qty" },
    { label: "product color", key:"products.color" },
    { label: "category", key: "product_category" },
    { label: "subcategory", key: "product_subcategory" },
    { label: "order status", key: "Order_status" },
    { label: "order date", key: "order_date" },
    { label: "payment method", key: "payment_method" },
    { label: "total amount", key: "total_amount" },
    { label: "delivery date", key: "delivery_date" },
    { label: "delivery charges", key: "delivey_charges" }, // note original misspelling in data
    { label: "hiden charges", key: "hidden_charges" },
  ];

  // Search filter

  const matchesSearch = (order, q) => {
    if (!q) return true;
    const needle = q.toLowerCase();

    return columns.some(({ key }) => {
      const v = getByPath(order, key);

      if (v === undefined || v === null) return false;

      // Always convert numbers to string
      const strVal =
        typeof v === "number" ? String(v) : v.toString().toLowerCase();

      return strVal.includes(needle);
    });
  };

  // Date filter (either/both ends; end includes the whole day)
  const withinDateRange = (order) => {
    const raw = order.order_date;
    if (!raw) return true;
    const d = new Date(raw).getTime();
    if (Number.isNaN(d)) return true;

    if (startDate) {
      const s = new Date(`${startDate}T00:00:00`).getTime();
      if (d < s) return false;
    }
    if (endDate) {
      const e = new Date(`${endDate}T23:59:59.999`).getTime();
      if (d > e) return false;
    }
    return true;
  };

  // Sorting
  const handleSort = (key) => {
    setSortConfig((prev) => {
      if (prev.key === key) {
        return { key, direction: prev.direction === "asc" ? "desc" : "asc" };
      }
      return { key, direction: "asc" };
    });
  };

  const sortedFilteredOrders = useMemo(() => {
    const q = search.trim();
    const arr = orders
      .filter((o) => matchesSearch(o, q))
      .filter(withinDateRange);

    if (!sortConfig?.key) return arr;

    const { key, direction } = sortConfig;
    const dir = direction === "asc" ? 1 : -1;

    return [...arr].sort((a, b) => {
      const va = normalizeForSort(getByPath(a, key), key);
      const vb = normalizeForSort(getByPath(b, key), key);
      if (va < vb) return -1 * dir;
      if (va > vb) return 1 * dir;
      return 0;
    });
  }, [orders, search, startDate, endDate, sortConfig]);

  // Selection
  const toggleSelect = (id) =>
    setSelectedOrders((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  const allChecked =
    sortedFilteredOrders.length > 0 &&
    selectedOrders.length === sortedFilteredOrders.length;

  const toggleSelectAll = () =>
    setSelectedOrders(allChecked ? [] : sortedFilteredOrders.map((o) => o._id));

  const toggleColumn = (key) => {
    setVisibleColumns((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const exportToExcel = () => {
    const exportData = orders.map((order) => {
      let row = {};
      visibleColumns.forEach((key) => {
        const value = key.split(".").reduce((o, p) => o?.[p], order);
        row[columns.find((c) => c.key === key)?.label || key] = value;
      });
      return row;
    });

    const ws = XLSX.utils.json_to_sheet(exportData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Orders");
    XLSX.writeFile(wb, "orders.xlsx");
  };

  // Apply pagination AFTER filtering & sorting
  const totalItems = sortedFilteredOrders.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

  const currentItems = sortedFilteredOrders.slice(startIndex, endIndex);

  return (
    <div className="space-y-6">
      {/* Header with search + date filter + actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl mb-7 font-bold text-gray-900">Orders</h2>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between mb-6">
            {/* Search and Date Filters */}
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              {/* Search Input */}
              <div className="relative flex-1 sm:flex-none sm:w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search orders..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-gray-400 text-sm"
                />
              </div>

              {/* Date Range Filters */}
              <div className="flex flex-col sm:flex-row gap-1 sm:gap-1">
                {/* Start Date */}
                <div className="relative">
                  <label className="block text-xs font-medium text-gray-600 mb-1 sm:hidden">
                    From Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="w-full sm:w-40 px-3 py-2.5 border border-gray-300 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-sm text-gray-700"
                    />
                    <svg
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>

                {/* Date Range Separator */}
                <div className="hidden sm:flex items-center justify-center py-0.5">
                  <span className="text-gray-400 text-sm">to</span>
                </div>

                {/* End Date */}
                <div className="relative">
                  <label className="block text-xs font-medium text-gray-600 mb-1 sm:hidden">
                    To Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="w-full sm:w-40 px-3 py-2.5 border border-gray-300 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-sm text-gray-700"
                    />
                    <svg
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              {/* Clear Filters Button */}
              {/* <button
      onClick={() => {
        setSearch('');
        setStartDate('');
        setEndDate('');
      }}
      className="flex items-center justify-center w-auto h-11 px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-1 transition-all duration-200"
    >
      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
      Clear Filters
    </button> */}

              {/* Bulk Update Button */}
              <button
                onClick={handleBulkStatusChange}
                className="flex items-center justify-center w-auto h-11 px-4 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                Update Status (Bulk)
              </button>
            </div>
          </div>
          <button
            onClick={() => setShowFilter((prev) => !prev)}
            className="flex items-center gap-2 w-auto h-11 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Filter className="w-4 h-4" /> Filter
          </button>

          {showFilter && (
            <div className="absolute z-50 mt-2 right-0 w-80 sm:w-72 bg-white shadow-xl rounded-xl p-5 border border-gray-100 backdrop-blur-sm">
              {/* Header with title + close button */}
              <div className="flex justify-between items-center mb-4 pb-2 border-b border-gray-100">
                <h3 className="text-base font-semibold text-gray-800 flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.707A1 1 0 013 7V4z"
                    />
                  </svg>
                  Choose Columns
                </h3>
                <button
                  onClick={() => setShowFilter(false)}
                  className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Select All */}
              <div className="flex items-center mb-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
                <div className="relative flex items-center">
                  <input
                    type="checkbox"
                    checked={visibleColumns.length === columns.length}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setVisibleColumns(columns.map((c) => c.key));
                      } else {
                        setVisibleColumns([]);
                      }
                    }}
                    className="w-4 h-4 text-blue-600 bg-white border-2 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 focus:ring-offset-0 transition-colors duration-200"
                  />
                </div>
                <span className="ml-3 text-sm font-medium text-blue-700">
                  Select All Columns
                </span>
              </div>

              {/* Columns in responsive grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5 max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                {columns.map((col) => (
                  <label
                    key={col.key}
                    className="flex items-center p-2.5 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors duration-200 group"
                  >
                    <div className="relative flex items-center">
                      <input
                        type="checkbox"
                        checked={visibleColumns.includes(col.key)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setVisibleColumns((prev) => [...prev, col.key]);
                          } else {
                            setVisibleColumns((prev) =>
                              prev.filter((k) => k !== col.key)
                            );
                          }
                        }}
                        className="w-4 h-4 text-blue-600 bg-white border-2 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 focus:ring-offset-0 transition-colors duration-200"
                      />
                    </div>
                    <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-200 select-none">
                      {col.label}
                    </span>
                  </label>
                ))}
              </div>

              {/* Footer with improved buttons */}
              <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                <span className="text-xs text-gray-500">
                  {visibleColumns.length} of {columns.length} selected
                </span>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setShowFilter(false)}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition-all duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => setShowFilter(false)}
                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition-all duration-200"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          )}
          <button
            onClick={exportToExcel}
            className="flex items-center gap-2 w-auto h-11 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Download className="w-4 h-4" /> Export
          </button>
        </div>
      </div>
      {/* Orders Table */}
      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4">
                  <input
                    type="checkbox"
                    onChange={toggleSelectAll}
                    checked={allChecked}
                  />
                </th>
                {columns
                  .filter((col) => visibleColumns.includes(col.key))
                  .map(({ label, key }) => (
                    <th
                      key={key}
                      onClick={() => handleSort(key)}
                      title={`Sort by ${label}`}
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
              {currentItems.map((order) => (
                <tr key={order._id} className="hover:bg-gray-50">
                  <td className="px-4">
                    <input
                      type="checkbox"
                      checked={selectedOrders.includes(order._id)}
                      onChange={() => toggleSelect(order._id)}
                    />
                  </td>
                  {columns
                    .filter((col) => visibleColumns.includes(col.key))
                    .map(({ key }) => {
                      let value = getByPath(order, key);

                      // special handling for status
                      if (key === "Order_status") {
                        return (
                          <td
                            key={key}
                            className="px-6 py-4 whitespace-nowrap"
                            onClick={() => handleStatusClick(order)}
                          >
                            <span
                              className={`inline-block px-2 cursor-pointer py-1 text-xs rounded-full ${getStatusColor(
                                order.Order_status
                              )}`}
                            >
                              {order.Order_status}
                            </span>
                          </td>
                        );
                      }

                      // format dates
                      if (key === "order_date" || key === "delivery_date") {
                        value = value
                          ? new Date(value).toLocaleDateString()
                          : "";
                      }

                      return (
                        <td
                          key={key}
                          className="px-6 py-4 whitespace-nowrap text-gray-900"
                        >
                          {value ?? ""}
                        </td>
                      );
                    })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex flex-wrap md:flex-nowrap items-center justify-between mt-4 gap-4 overflow-x-auto">
        {/* Items per page selector */}
        <ItemsPerPageSelector
          itemsPerPage={itemsPerPage}
          onItemsPerPageChange={(newSize) => {
            setItemsPerPage(newSize);
            setCurrentPage(1); // reset to first page
          }}
        />

        {/* Pagination Controls */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          showFirstLast={true}
          showPrevNext={true}
          maxVisiblePages={5}
        />

        {/* Pagination Info */}
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

export default Orders;
