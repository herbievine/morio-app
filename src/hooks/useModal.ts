import { useContext } from "react";
import { ModalContext } from "../contexts/Modal";
import { ModalContextInterface } from "../contexts/Modal";

interface UseModalHook {
  modal: ModalContextInterface[0];
  setModal: ModalContextInterface[1];
}

const useModal = (): UseModalHook => {
  const [modal, setModal] = useContext(ModalContext);

  if (setModal === undefined) {
    throw new Error("useModal must be initialized");
  }

  return { modal, setModal };
};

export { useModal };
