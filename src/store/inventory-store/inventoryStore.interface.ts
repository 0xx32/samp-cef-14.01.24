import {  IInventoryItem, IPlayerGear } from "types/inventory.interface";

export interface IInventoryState {
    items: IInventoryItem[];
    gloveBox: IInventoryItem[];
    playerGear: IPlayerGear[];
    setItems: (itemsList: IInventoryItem[]) => void;
    setGloveBox: (itemsList: IInventoryItem[]) => void;
    swapSlot: (indexFrom: number, indexTo: number) => void;
    updateSlot: (slot: IInventoryItem) => void;
    removeSLot: (slotid: number) => void;
    setPlayerGear: (gear: IInventoryItem[]) => void;

}

export interface IActiveSlotState {
    slotId: number | null;
    setSlot: (slot: number | null) => void;
}
export interface IVehicleIdState {
    vehicleId: number | null;
    setVehicleId: (slot: number) => void;
}
