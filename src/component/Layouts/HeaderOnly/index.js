import Header from "../component/Header";

function HeaderOnly({ children }) {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">{children}</div>
    </div>
  );
}

export default HeaderOnly;
