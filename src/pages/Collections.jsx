import axios from "axios";
import { useState } from "react";
const Collections = () => {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(false);
  const [collection_name, setCollection_name] = useState("");
  const getCollections = () => {
    setLoading(true);
    axios
      .get("http://192.168.1.136:8000/collections")
      .then((res) => {
        setCollections(res.data.collections);
        setLoading(false);
        console.log(res.data.collections);
      })
      .catch((err) => console.log(err));
  };

  const deleteCollections = (collection_name) => {
    axios
      .delete(`http://192.168.1.136:8000/collections/${collection_name}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div className="p-4 h-screen">
      <h2 className="text-2xl font-bold mb-4">Collections Page</h2>
      <p>This is the collections page of the application.</p>
      <div className="border p-4 h-3/4 overflow-y-auto">
        {collections.map((collection, index) => (
          <div key={index} className="mb-4 p-2 border-b">
            <h3 className="text-lg font-semibold">Collection {index + 1}</h3>
            <p>{collection}</p>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={deleteCollections(collection)}
            >
              Delete collection
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={getCollections}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {loading ? "Loading..." : "Fetch Collections"}
      </button>
    </div>
  );
};

export default Collections;
