import { useState, useEffect } from "react";
import axios from "axios";
const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    event.preventDefault();
    setMessages([...messages, event.target.value]);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    axios
      .post("http://192.168.1.136:8000/chat", messages)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  return (
    <div className="p-4 h-screen">
      <h2 className="text-2xl font-bold mb-4">Chat Page</h2>
      {/* chat box */}
      <div className="border p-4 h-3/4 overflow-y-auto"></div>
      {/* input box */}
      <div className="mt-4">
        <form>
          <input
            type="text"
            placeholder="Type your message..."
            className="border p-2 w-full"
            onChange={handleChange}
          />
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
