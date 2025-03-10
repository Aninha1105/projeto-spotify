import React from 'react';
import Sidebar from "./components/Sidebar";
import Topbar from './components/Topbar';
import Footer from './components/Footer';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="flex flex-col h-screen bg-black text-white">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar/>
        <div className="flex-1 flex flex-col">
          <Topbar/>
          <MainContent/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;