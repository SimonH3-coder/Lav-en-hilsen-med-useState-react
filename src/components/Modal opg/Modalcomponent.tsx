import { useState } from "react";
import style from "./modalcomponent.module.scss";
import { ModalWrapper } from "./ModalWrapper.tsx";

interface ModalProps {
  children?: React.ReactNode;
}

export function Modalcomponent({ children }: ModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isOpen && <button onClick={() => setIsOpen(true)}>Åben Modal</button>}

      {isOpen && (
        <ModalWrapper>
          <div className={style.modalClass}>
            <button className={style.closeButton} onClick={() => setIsOpen(false)}>
              Luk
            </button>
            <div className={style.modalContent}>
              {children}
              <p>test</p>
            </div>
          </div>
        </ModalWrapper>
      )}
    </>
  );
}
