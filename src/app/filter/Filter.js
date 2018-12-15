import React from "react";
import connect from "react-redux/es/connect/connect";
import {doSetFilter} from "./actionCreators";

const Filter = ({ onSetFilter }) => (
    <div>
        Show
        <button
            type="button"
            onClick={() => onSetFilter('SHOW_ALL')}>
            All</button>
        <button
            type="button"
            onClick={() => onSetFilter('SHOW_COMPLETED')}>
            Completed</button>
        <button
            type="button"
            onClick={() => onSetFilter('SHOW_INCOMPLETED')}>
            Incompleted</button>
    </div>
);

const mapDispatchToPropsFilter = (dispatch) => ({onSetFilter: filterType => dispatch(doSetFilter(filterType))});

export const ConnectedFilter = connect(null, mapDispatchToPropsFilter)(Filter);