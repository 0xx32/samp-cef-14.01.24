import ModalContainer from "components/shared/ModalContainer/ModalContainer";
import { FC } from "react";
import { ActionsModal } from "./ActionsModal";
import { IModalState } from "components/A-screens/inventory/Inventory.interface";
import { useActiveSlot } from "store/inventory-store/inventory.store";
import { ItemDivisionModal } from "./ItemDivisionModal";

interface IProps {
    modalState: IModalState;
    setModalState: (state: IModalState) => void;
}

const ModalController: FC<IProps> = ({ modalState, setModalState }) => {
    const setActiveSlot = useActiveSlot((state) => state.setSlot);
    const onCloseModal = () => {
        setModalState({
            modalType: null,
            modalData: undefined,
        });
        setActiveSlot(null);
    };

    if (!modalState.modalData) return;

    return (
        <>
            {modalState.modalType && (
                <ModalContainer onClose={onCloseModal}>
                    {modalState.modalType === "actions" && (
                        <ActionsModal itemData={modalState.modalData} onClose={onCloseModal} setModalState={setModalState} />
                    )}

                    {modalState.modalType === "division" && (
                        <ItemDivisionModal itemData={modalState.modalData} setModalState={setModalState} onClose={onCloseModal} />
                    )}
                </ModalContainer>
            )}
        </>
    );
};

export { ModalController };
