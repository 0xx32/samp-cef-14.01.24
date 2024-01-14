import { DragEndEvent } from "@dnd-kit/core";
import { useInventoryStore, useVehicleId } from "store/inventory-store/inventory.store";

//id слотов основного ивнентаря от 0 - 99
//id слотов багажника от 100 - 199
//id слотов Надетых предметов от 200 - 207

export const useInventory = () => {
    const { swapSlot } = useInventoryStore((state) => state);
    const { vehicleId } = useVehicleId((state) => state);

    const onDragEnd = (event: DragEndEvent) => {
        if (event?.over?.data) {
            const moveSlotData = event.active.data.current;
            const overSlotData = event.over.data.current;
            const activeSlotId = +moveSlotData?.slotid;
            const targetSlotId = +overSlotData?.slotid;

            //Drag and drop в основном инвентаре
            if (targetSlotId < 200 && activeSlotId < 200) {
                if (vehicleId) {
                    const data = JSON.stringify({
                        slot_move: activeSlotId,
                        slot_swap: targetSlotId,
                        vehicleid: vehicleId || 0,
                    });

                    if ("cef" in window) {
                        cef.emit("inventory:swap.item", data);
                    }

                    swapSlot(activeSlotId, targetSlotId);
                } else {
                    const data = JSON.stringify({
                        slot_move: activeSlotId,
                        slot_swap: targetSlotId,
                    });

                    if ("cef" in window) {
                        cef.emit("inventory:swap.item", data);
                    }

                    swapSlot(activeSlotId, targetSlotId);
                }

                return;
            }

            //Надел предмет по drag and drop
            if (targetSlotId >= 200 && moveSlotData?.typeSlot === 1) {
                if ("cef" in window) {
                    cef.emit("inventory:use.item", JSON.stringify({ slot_use: activeSlotId }));
                }
                return;
            }

            //Снял предмет по drag and drop
            if (activeSlotId >= 200 && moveSlotData?.typeSlot === 1) {
                if ("cef" in window) {
                    cef.emit(
                        "inventory:clothes.off",
                        JSON.stringify({
                            type: 1,
                            slotid_clothes: moveSlotData?.slotid,
                            slotid: targetSlotId,
                        })
                    );
                }

                return;
            }
        }
    };

    return { onDragEnd };
};
