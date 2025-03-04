import React from 'react';
import Sidebar from "./components/Sidebar";

function App() {
    return (
        <div className="flex flex-col h-screen bg-black text-white">
          <div className="flex flex-1 overflow-hidden">
            <Sidebar />
          </div>
        </div>
    );
}

export default App;