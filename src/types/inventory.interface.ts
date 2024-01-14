export interface IInventoryItem {
    slotid: number;
    itemid: number;
    item_name: string;
    count: number;
    type: number;
    icon: string;
    description?: string
}

export interface IGloveBoxItem extends IInventoryItem {
    boxSlotId : number
}

export interface IPlayerState {
    health: number;
    armour: number;
    weight: number;
}

export interface ISlot {
    slotid: number;
}


export interface ISlotDataClothes {
    [key: string]: number
    watch: number;
    armour: number;
    backpack: number;
    glasses: number;
    cap: number;
    decoration: number;
    hands: number;
}



export interface IPlayerGear {
    gearSlotId: number;
    slotId: number
    name: string;
    icon: string;
    slotType: string;
    itemData: IInventoryItem | null;
}