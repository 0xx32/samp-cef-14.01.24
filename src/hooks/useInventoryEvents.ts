import { useEffect, useState } from "react";
import { toastError } from "shared/toast";
import { useInventoryStore, useLog, useVehicleId } from "store/inventory-store/inventory.store";
import { IPlayerState } from "types/inventory.interface";

// const data = [
//     {
//         slotid: 204,
//         itemid: 3,
//         item_name: "Бандана",
//         count: 1,
//         type: 1,
//         icon: "bandana.png",
//     },

// ];

// const inv = [
//     {
//         slotid: 0,
//         itemid: 1,
//         item_name: "Яблоко",
//         count: 10,
//         type: 1,
//         icon: "apple.png",
//     },
//     {
//         slotid: 100,
//         itemid: 4,
//         item_name: "Бандана",
//         count: 1,
//         type: 1,
//         icon: "bandana.png",
//     },
// ];

export const useInventoryEvents = () => {
    const [isInventoryVisable, setIsInventoryVisable] = useState(0);
    const [isGloveBoxShow, setIsGloveBoxShow] = useState(false);
    const [playerState, setPlayerState] = useState<IPlayerState | null>(null);

    const { updateSlot, setItems, setPlayerGear, setGloveBox } = useInventoryStore((state) => state);
    const { setVehicleId } = useVehicleId((state) => state);
    const { setLog } = useLog((state) => state);
    useEffect(() => {
        // setPlayerGear(data);
        // setItems(inv);

        if ("cef" in window) {
            cef.on("inventory:visible", (status: string) => setIsInventoryVisable(JSON.parse(status)));

            cef.on("inventory:init", (data: string) => {
                setItems(JSON.parse(data));
            });
            cef.on("inventory:update.player.slot", (data: string) => {
                updateSlot(JSON.parse(data));
            });
            cef.on("inventory:clothes.init", (data: string) => {
                setPlayerGear(JSON.parse(data));
            });
            cef.on("inventory:clothes.update", (data: string) => {
                setPlayerGear(JSON.parse(data));
            });
            cef.on("inventory.message", (text: string) => {
                toastError(text);
            });
            cef.on("inventory:stat", (data: string) => {
                setPlayerState(JSON.parse(data));
            });

            cef.on("inventory:trunk.init", (data: string) => {
                setGloveBox(JSON.parse(data));
                setIsGloveBoxShow(true);
            });
            cef.on("inventory:vehicleid", (data: string) => {
                setVehicleId(JSON.parse(data));
            });
            cef.on("inventory:update.trunk.slot", (data: string) => {
                updateSlot(JSON.parse(data));
                setLog(data);
            });
        }
    }, []);

    return {
        isInventoryVisable,
        playerState,
        isGloveBoxShow,
        setIsGloveBoxShow,
    };
};
