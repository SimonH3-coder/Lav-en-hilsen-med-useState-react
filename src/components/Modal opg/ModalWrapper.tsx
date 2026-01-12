import style from "./modalcomponent.module.scss";

interface ModalWrapperInterface {
  children: React.ReactNode;
  id?: string;
}

export function ModalWrapper({ children, id }: ModalWrapperInterface) {
  return (
    <div className={style.modalWrapperClass} id={id}>
      {children}
    </div>
  );
}
