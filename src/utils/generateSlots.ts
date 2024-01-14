import { IGloveBoxItem, IInventoryItem, ISlot } from "types/inventory.interface";

export const generateSlots = (list: IInventoryItem[], slotsCount: number) => {
    if (list.length < 1) return;

    if (list.length === slotsCount) return [...list].sort((a, b) => a.slotid - b.slotid);

    const arrayItems: Array<IInventoryItem | ISlot> = Array.from({ length: slotsCount }).map((_item, index) => ({ slotid: index }));

    const newArr: Array<IInventoryItem | ISlot> = arrayItems.map((item, index) => {
        let elem;

        list.forEach((itemData) => {
            if (itemData.slotid === index) elem = itemData;
        });

        if (elem) return elem;

        return item;
    });

    return newArr;
};

export const generateGloveBoxSlots = (list: IInventoryItem[], slotsCount: number) => {
    if (list.length < 1) return;

    if (list.length === slotsCount) return [...list].sort((a, b) => a.slotid - b.slotid);

    const arrayItems: Array<IGloveBoxItem | ISlot> = Array.from({ length: slotsCount }).map((_item, index) => ({ slotid: index + 100 }));

    const newArr: Array<IGloveBoxItem | ISlot> = arrayItems.map((item, index) => {
        let elem;

        list.forEach((itemData) => {
            if (itemData.slotid - 100 === index) elem = itemData;
        });

        if (elem) return elem;

        return item;
    });

    return newArr;
};
