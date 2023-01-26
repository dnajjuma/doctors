import { Box, Button, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { useState } from "react";
import { mockDataPatient } from "../../data/mockData";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined"
import Header from "../../components/Header";
import Modal from '@mui/material/Modal';
import Form from "../form";
import Newpatient from "../newpatient";




const Patient = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "type",
      headerName: "Type",
      flex: 1,
    },
    {
      field: "location",
      headerName: "Location",
      flex: 1,
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
    
  ];

  return (
    <div>

      <Box m="20px">
    <Box display="flex" justifyContent="space-between" alignItems="center">
    <Header title="PATIENTS" subtitle="Manage Patients " />
    
      <Box>
      <Button onClick={<Newpatient/>}
      sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}>
        
         
            <AddOutlinedIcon sx={{ mr: "10px" }} />
          <Link to={'/Newpatient'}> New Patient</Link>
          
          </Button>
        </Box>
    </Box>
      
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockDataPatient} columns={columns} />
      </Box>
    </Box>
    </div>
  );

 

  
};

export default Patient;
