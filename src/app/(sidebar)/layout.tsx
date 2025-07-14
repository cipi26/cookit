import Sidebar from "@navigation/sidebar/Sidebar";
import SidebarStatusProvider from "@navigation/sidebar/SidebarStatusProvider";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex items-start">
        <SidebarStatusProvider>
          <Sidebar />
          {children}
        </SidebarStatusProvider>
      </div>
    </>
  );
};
export default layout;
