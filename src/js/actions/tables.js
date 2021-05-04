import { UPDATE_TABLES, UPDATE_PATHS } from "./types";
import store from "../store";

export const updateTables = () => async (dispatch) => {
  // Call on the OSFP FUNCTION HERE
  const state = store.getState();

  const tables = electron.osfpAPI.forwardingTable(state.topology.graph);

  //console.log(JSON.parse(tables));

  dispatch({
    type: UPDATE_TABLES,
    payload: JSON.parse(tables).forwardingTable,
  });
};

export const updatePaths = () => async (dispatch) => {
  const state = store.getState();
  const tmp_paths = JSON.parse(
    electron.osfpAPI.leastCostPathsTable(state.topology.graph)
  ).lowestCostPaths;

  let paths = [];

  console.log(tmp_paths.length);
  for (let i = 0; i < tmp_paths.length; i++) {
    for (let j = 0; j < tmp_paths[String(i)].length; j++) {
      console.log(tmp_paths[i][j].split(","));
    }
  }

  dispatch({
    type: UPDATE_PATHS,
    payload: tmp_paths,
  });
};
