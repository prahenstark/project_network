import Navbar from "@/components/navbar";
import ProjectList from "@/components/projects-list";



export default function Devices({}) {
  return (
    <div>
      <Navbar title="Devices" />
      <div className="flex h-full flex-1">
        <ProjectList />
        <div className="flex-1 min-h-svh">
          <div className="flex">

          </div>
        </div>
      </div>

    </div>
  );
} 