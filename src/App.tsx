import React from 'react';
import Sidebar from "./components/Sidebar";
import Topbar from './components/Topbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col h-screen bg-black text-white">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Topbar />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;