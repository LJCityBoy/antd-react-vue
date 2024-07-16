import "./App.css";
import AVTable from "./packages/vue-table/index";

function App() {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
  ];

  const data = [
    { key: "1", name: "John Brown", age: 32 },
    { key: "2", name: "Jim Green", age: 42 },
  ];

  return (
    <>
      <AVTable dataSource={data} columns={columns}></AVTable>
    </>
  );
}

export default App;
