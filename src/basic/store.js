import { createStore } from "redux";
import MainReducer from "./mainreducer";

const MyStore = createStore(MainReducer);

export default MyStore;