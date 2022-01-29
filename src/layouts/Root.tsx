import React from "react";
import Sidebar from "../components/Sidebar";
import { useModal } from "../hooks/useModal";

interface RootProps {
  component: React.ReactNode;
}

const Root: React.FC<RootProps> = ({ component }) => {
  const { modal, setModal } = useModal();

  return (
    <>
      {modal && (
        <div
          className="w-screen h-screen absolute z-50 flex justify-center items-center"
          onClick={() => {
            if (modal) {
              setModal(null);
            }
          }}
        >
          {modal}
        </div>
      )}
      <div className={modal && "bg-black"}>
        <div className={modal && "opacity-50"}>
          <div className="min-h-screen bg-neutral-900">
            <div className="flex justify-start items-start">
              <Sidebar />
              {component}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Root;
