import { useState } from "react";
import { MessageCircle, Send } from "lucide-react";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="bg-[#1E3557] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-[#2A4A6F] transition-all relative"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute top-0 right-1 w-3 h-3 bg-red-500 rounded-full"></span>
        </button>
      )}

      {/* Chat window */}
      {open && (
        <div className="bg-white w-[340px] h-[460px] rounded-2xl shadow-xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-[#1E3557] text-white px-4 py-3 flex justify-between items-center">
            <h3 className="font-semibold text-white">Estate-Hub Chat</h3>
            <button
              onClick={() => setOpen(false)}
              className="text-white text-lg leading-none"
            >
              ×
            </button>
          </div>

          {/* Chat area */}
          <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-[#F9FAFB]">
            <div className="text-center text-xs text-gray-500">Today</div>

            <div className="flex items-start gap-2">
              <div className="bg-[#F1F5F9] p-3 rounded-xl text-sm text-gray-700">
                Hi there! Welcome to Estate-Hub. How can I assist you today?
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {["Our Services", "Get a Quote", "Our Portfolio", "Company Info", "Contact Us"].map(
                (btn) => (
                  <button
                    key={btn}
                    className="bg-[#E3B873]/20 text-[#1E3557] text-xs px-3 py-1 rounded-full hover:bg-[#E3B873]/30 transition"
                  >
                    {btn}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Input area */}
          <div className="border-t p-3 flex items-center gap-2 bg-white">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type Message ..."
              className="flex-1 text-sm border rounded-full px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#1E3557]"
            />
            <button className="bg-[#1E3557] text-white p-2 rounded-full hover:bg-[#2A4A6F] transition">
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
