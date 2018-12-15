import {FILTER_SET} from "./actions";

export const doSetFilter = (filter) => ({
    type: FILTER_SET,
    filter
});