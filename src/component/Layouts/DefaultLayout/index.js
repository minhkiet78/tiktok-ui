import Header from "../component/Header";
import Sidebar from "./Sidebar";

function Defaultlayout({ children }) {
  return (
    <div className="wrapper">
      <Header />
      <div className="container">
        <Sidebar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default Defaultlayout;
