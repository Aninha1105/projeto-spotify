import React, {useState} from 'react';
import Sidebar from "./components/Sidebar";
import Topbar from './components/Topbar';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Browse from './components/Browse';

function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "browse">("home");

  return (
    <div className="flex flex-col h-screen bg-black text-white">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar currentPage = {currentPage} setCurrentPage={setCurrentPage}/>
        <div className="flex-1 flex flex-col">
          <Topbar/>
          {currentPage === "home" ? <MainContent/> : <Browse/>}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;