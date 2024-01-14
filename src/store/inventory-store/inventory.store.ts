import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { IActiveSlotState, IInventoryState, IVehicleIdState } from "./inventoryStore.interface";
import { gearData } from "components/modules/Inventory/ItemsOnPlayer/data";
// import { IInventoryItem } from "types/inventory.interface";

export const useInventoryStore = create<IInventoryState>()(
    //@ts-ignore
    devtools((set, get) => ({
        items: [],
        playerGear: gearData,
        gloveBox: [],
        //Inventory items actions
        setItems: (itemsList) => {
            set((_state) => ({ items: [...itemsList] }));
        },
        setGloveBox: (itemsList) => {
            set((state) => ({ items: [...state.items, ...itemsList] }));
        },

        swapSlot: (indexFrom, indexTo) => {
            const itemsList = get().items;

            const elemFrom = itemsList.find((item) => item.slotid === indexFrom);
            const elemTo = itemsList.find((item) => item.slotid === indexTo);

            if (elemFrom && elemTo) {
                const newList = [...itemsList].map((item) => {
                    if (item.slotid === elemFrom.slotid) return { ...item, slotid: elemTo.slotid };
                    if (item.slotid === elemTo.slotid) return { ...item, slotid: elemFrom.slotid };
                    return item;
                });

                return set((_state) => ({ items: [...newList] }));
            }

            const newList = [...itemsList].map((item) => (item.slotid === indexFrom ? { ...item, slotid: indexTo } : item));
            set((_state) => ({ items: [...newList] }));
        },
        removeSLot: (slotid) => {
            // if (slotid >= 100) {
            //     const gloveBox = get().gloveBox;
            //     const newList = gloveBox.filter((item) => item.slotid !== slotid);
            //     set((_state) => ({ items: [...newList] }));
            // } else {
            //     const itemsList = get().items;
            //     const newList = itemsList.filter((item) => item.slotid !== slotid);
            //     set((_state) => ({ items: [...newList] }));
            // }

            const itemsList = get().items;
                const newList = itemsList.filter((item) => item.slotid !== slotid);
                set((_state) => ({ items: [...newList] }));
        },

        //Update slot actions
        updateSlot: (slot) => {
            const itemsList = get().items;

            if (slot.itemid === 0 && slot.count === 0) {
                return get().removeSLot(slot.slotid);
            }

            const newList = itemsList.map((item) => {
                return item.slotid === slot.slotid ? slot : item;
            });

            const isExist = newList.some((item) => item.slotid === slot.slotid);

            if (isExist) {
                set((_state) => ({ items: [...newList] }));
            } else {
                set((_state) => ({ items: [...newList, slot] }));
            }
        },

        //Player gear actions
        setPlayerGear: (gear) => {
            if (!gear || gear.length === 0) {
                const list = [...get().playerGear];
                list.forEach((item) => {
                    item.itemData = null;
                });

                return set((_state) => ({ playerGear: [...list] }));
            }

            const gearList = [...gearData];

            const newList = gearList.map((item) => {
                gear.forEach((gearItem) => {
                    if (item.slotId === gearItem.slotid) {
                        item.itemData = gearItem;
                    }
                });

                return item;
            });

            set((_state) => ({ playerGear: [...newList] }));
        },
    }))
);

export const useActiveSlot = create<IActiveSlotState>()(
    //@ts-ignore
    devtools((set) => ({
        slotId: null,
        setSlot: (slot) => set((_state) => ({ slotId: slot })),
    }))
);
export const useVehicleId = create<IVehicleIdState>()(
    //@ts-ignore
    devtools((set) => ({
        vehicleId: null,
        setVehicleId: (id) => set((_state) => ({ vehicleId: id })),
    }))
);

interface ILogState {
    log: string;
    setLog: (log: string) => void;
}

export const useLog = create<ILogState>()(
    //@ts-ignore
    devtools((set) => ({
        log: "null",
        setLog: (log: string) => set((_state) => ({ log })),
    }))
);
