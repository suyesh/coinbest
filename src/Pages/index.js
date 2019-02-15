import Loadable from "react-loadable";
import { Loading } from "../components";

const Pages = {
  dashboard: Loadable({
    loader: () => import("./Dashboard"),
    loading: Loading
  })
};

export default Pages;
