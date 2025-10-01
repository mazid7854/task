import { useState, useEffect } from "react";
import axios from "axios";

const Chat = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      await axios.post("http://192.168.1.136:8000/chat", {
        message: input,
        collection_name: "resume",
        query: "abc",
      });
      setInput("");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 h-screen">
      <h2 className="text-2xl font-bold mb-4">Chat Page</h2>
      {/* chat box */}
      <div className="border p-4 h-3/4 overflow-y-auto"></div>
      {/* input box */}
      <div className="mt-4">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Type your message..."
            className="border p-2 w-full"
            value={input}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
