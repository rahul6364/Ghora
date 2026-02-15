import { advisoryList } from "../../data/advisory";


function Layout({ children }) {
  return (
    <div className="flex min-h-screen bg-[#F5F3FF]">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        
        {/* Topbar */}
        <Topbar />

        {/* Page Content */}
        <main className="flex-1 p-8">
          {children}
        </main>

      </div>
    </div>
  );
}

export default Layout;
