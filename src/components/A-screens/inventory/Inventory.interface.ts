import { IInventoryItem } from "types/inventory.interface";

export interface IModalState {
    modalType: "actions" | "transfer" | "confirmation" | "division" | null;
    modalData?: IModalData | undefined;
    callback?: () => void;
}


export interface IModalData extends IInventoryItem {
    gearSlotId? : number
    typeInv?: 'gear'
}