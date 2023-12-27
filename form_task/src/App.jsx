import { useState } from "react";
import Cards from "./components/Cards";
import Form from "./components/Form";

function App() {
  const [users, setUsers] = useState([]);

  const handleFormSubmitData = (data) => {
    console.log(data);
    setUsers([...users, data]);
  };

  const handleRemove = (id) => {
    setUsers(() =>
      users.filter((item, index) => {
        return index != id;
      })
    );
  };

  return (
    <>
      <div className="w-full h-screen bg-zinc-200 flex items-center justify-center">
        <div className="container mx-auto">
          <Cards users={users} handleRemove={handleRemove} />
          <Form handleFormSubmitData={handleFormSubmitData} />
        </div>
      </div>
    </>
  );
}

export default App;
