import { useEffect, useState } from "react";
import { toastError } from "shared/toast";
import { useInventoryStore, useVehicleId } from "store/inventory-store/inventory.store";
import { IPlayerState } from "types/inventory.interface";

export const useInventoryEvents = () => {
	const [isInventoryVisable, setIsInventoryVisable] = useState(0);
	const [isGloveBoxShow, setIsGloveBoxShow] = useState(false);
	const [playerState, setPlayerState] = useState<IPlayerState | null>(null);

	const { updateSlot, setItems, setPlayerGear, setGloveBox } = useInventoryStore((state) => state);
	const { setVehicleId } = useVehicleId((state) => state);

	useEffect(() => {
		if ("cef" in window) {
			cef.on("inventory:visible", (status: string) => setIsInventoryVisable(JSON.parse(status)));
			cef.on("inventory:init", (data: string) => setItems(JSON.parse(data)));
			cef.on("inventory:update.player.slot", (data: string) => updateSlot(JSON.parse(data)));
			cef.on("inventory:clothes.init", (data: string) => setPlayerGear(JSON.parse(data)));
			cef.on("inventory:clothes.update", (data: string) => setPlayerGear(JSON.parse(data)));
			cef.on("inventory.message", (text: string) => toastError(text));
			cef.on("inventory:stat", (data: string) => setPlayerState(JSON.parse(data)));
			cef.on("inventory:trunk.init", (data: string) => {
				setGloveBox(JSON.parse(data));
				setIsGloveBoxShow(true);
			});
			cef.on("inventory:vehicleid", (data: string) => setVehicleId(JSON.parse(data)));
			cef.on("inventory:update.trunk.slot", (data: string) => updateSlot(JSON.parse(data)));
		}
	});

	return {
		isInventoryVisable,
		playerState,
		isGloveBoxShow,
		setIsGloveBoxShow,
	};
};
