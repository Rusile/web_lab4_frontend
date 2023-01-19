import './DataTable.scss'

import React, {useEffect} from 'react';
import {DataGrid} from "@mui/x-data-grid";
import {fetchGetAllHits} from "../../../../redux/actions";
import {connect} from "react-redux";

const columns = [
    {
        field: 'x',
        headerName: 'X',
        width: 100,
        align: 'center',
        headerAlign: 'center'
    },
    {
        field: 'y',
        headerName: 'Y',
        width: 100,
        align: 'center',
        headerAlign: 'center'
    },
    {
        field: 'r',
        headerName: 'R',
        width: 100,
        align: 'center',
        headerAlign: 'center'
    },
    {
        field: 'checkDate',
        headerName: 'Check date',
        width: 256,
        align: 'center',
        headerAlign: 'center',
        valueGetter: (params) => {
            return new Date(params.row.checkDate).toLocaleString()
        }
    },
    {
        field: 'executionTime',
        headerName: 'Execution time',
        width: 225,
        align: 'center',
        headerAlign: 'center'
    },
    {
        field: 'status',
        headerName: 'Result',
        width: 225,
        align: 'center',
        headerAlign: 'center',
        valueGetter: (params) =>
            params.row.status ? "HIT" : "MISS",
    },
];

const DataTable = (props) => {

    useEffect(props.fetchGetAllHits, []);

    return (
        <div className="data-grid">
            <DataGrid
                rows={props.tableHitsList}
                columns={columns}
                pageSize={4}
                rowsPerPageOptions={[4]}
                disableSelectionOnClick
                disableColumnFilter
                disableColumnMenu
                disableColumnSelector
                disableDensitySelector
            />
        </div>
    );

};

const mapStateToDataTableProps = (state) => {
    return {
        tableHitsList: state.tableHitsList
    }
}

const mapDispatchToDataTableProps = (dispatch) => {
    return {
        fetchGetAllHits: () => {
            dispatch(fetchGetAllHits())
        }
    }
}

export default connect(mapStateToDataTableProps, mapDispatchToDataTableProps)(DataTable);