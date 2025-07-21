import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Chip,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import React from "react";
import { useState, useMemo } from "react";
import { DataGrid } from "@mui/x-data-grid";
import feeschduledata from "../FeeScheduleData";
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function FeeScheduleTable() {
  const [rows, setRows] = useState(feeschduledata);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "scheduleFor",
      headerName: "scheduleFor",
      width: 150,
      editable: true,
    },
    {
      field: "frequency",
      headerName: "frequency",
      width: 150,
      editable: true,
    },
    {
      field: "transaction",
      headerName: "transaction",
      width: 110,
      editable: true,
    },
    {
      field: "chargeItem",
      headerName: "chargeItem",
      width: 150,
      editable: true,
    },
    {
      field: "status",
      headerName: "Status",
      width: 180,
      renderCell: (params) => (
        <Chip label={params.value} color={getStatusChipColor(params.value)} />
      ),
      editable: true,
      cellClassName: "status-chip",
    },
    {
      field: "validity",
      headerName: "Validity",
      width: 200,
      editable: true,
    },
    {
      //   field: 'actions',
      //   headerName: 'Actions',
      //   width: 150,
      renderCell: (params) => (
        <Tooltip title="Delete">
          <IconButton>
            <ModeEditIcon  style={{  cursor: "pointer", padding:"2px" }}/>
            <VisibilityIcon  style={{  cursor: "pointer", padding:"2px" }}/>
            <DeleteIcon
              onClick={() => handleDelete(params.id)}
              style={{ color: "red", cursor: "pointer", padding:"2px" }}
            />
          </IconButton>
        </Tooltip>
      ),
      editable: false,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      width: 100,
      headerAlign: "center",
      align: "center",
    },
  ];

  const getStatusChipColor = (status) => {
    switch (status) {
      case "Approved":
        return "success";
      case "Pending Approval":
        return "warning";
      case "Awaiting Your Approval":
        return "info";
      case "Draft":
        return "default";
      default:
        return "default";
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this entry?")) {
      setRows((prev) => prev.filter((row) => row.id !== id));
    }
  };

  const filteredRows = useMemo(() => {
    let updatedRows = [...rows];
    return updatedRows;
  }, [rows]);

  return (
    <div>
      <div style={{ height: 600, width: "100%" }}>
        <DataGrid
          disableColumnMenu
          rows={filteredRows}
          columns={columns}
          showToolbar
          pageSize={10}
          rowsPerPageOptions={[10, 20, 50]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
  );
}
