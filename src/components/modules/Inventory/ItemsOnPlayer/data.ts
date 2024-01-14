import clock from "assets/inventory/icons/clock.svg";
import backpackage from "assets/inventory/icons/backpack.svg";
import glasses from "assets/inventory/icons/glasses.svg";
import hand from "assets/inventory/icons/hand.svg";
import armor from "assets/inventory/icons/armor.svg";
import cap from "assets/inventory/icons/cap.svg";
import maska from "assets/inventory/icons/mardi-gras.svg";
import adornment from "assets/inventory/icons/adornment.svg";
import { IPlayerGear } from "types/inventory.interface";

export const gearData: IPlayerGear[] = [
    {
        gearSlotId: 0,
        slotId: 200,
        name: "Часы",
        icon: clock,
        slotType: "watch",
        itemData: null,
    },
    {
        gearSlotId: 1,
        slotId: 201,
        name: "Броня",
        icon: armor,
        slotType: "armour",
        itemData: null,
    },
    {
        gearSlotId: 2,
        slotId: 202,
        name: "Рюкзак",
        icon: backpackage,
        slotType: "backpack",
        itemData: null,
    },
    {
        gearSlotId: 3,
        slotId: 203,
        name: "Очки",
        icon: glasses,
        slotType: "glasses",
        itemData: null,
    },
    {
        gearSlotId: 4,
        slotId: 204,
        name: "Кепка",
        icon: cap,
        slotType: "cap",
        itemData: null,
    },
    {
        gearSlotId: 5,
        slotId: 205,
        name: "Маска",
        icon: maska,
        slotType: "mask",
        itemData: null,
    },
    {
        gearSlotId: 6,
        slotId: 206,
        name: "Украшение",
        icon: adornment,
        slotType: "decoration",
        itemData: null,
    },
    {
        gearSlotId: 7,
        slotId: 207,
        name: "Предмет в руках",
        icon: hand,
        slotType: "hands",
        itemData: null,
    },
];
