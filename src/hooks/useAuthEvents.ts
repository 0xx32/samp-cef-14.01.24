import { useState } from "react";
import { ICharacter } from "types/character.interface";
import { ISpawnResponceData } from "types/spawn.interface";

const defaultSpawnState = {
	EXIT: false,
	HOUS: false,
	FRACTION: false,
	BUSINESS: false,
	STATION: false,
};

export const useAuthEvents = () => {
	const [isAuthVisable, setIsAuthVisable] = useState(0);
	const [characterList, setCharacterList] = useState<ICharacter[] | []>([]);
	const [isCharacterSelectVisable, setIsCharacterSelectVisable] = useState(0);
	const [isSpawnSelectVisable, setIsSpawnSelectVisable] = useState(0);
	const [spawnData, setSpawnData] = useState<ISpawnResponceData>(defaultSpawnState);

	if ("cef" in window) {
		cef.on("char_data", (data: string) => setCharacterList(JSON.parse(data)));
		cef.on("authorization:spawn.init", (data: string) => setSpawnData(JSON.parse(data)));
		cef.on("authorization:two.factor.visible", (status: number) => setIsAuthVisable(status));
		cef.on("authorization:select.char.visible", (status: number) => setIsCharacterSelectVisable(status));
		cef.on("authorization:select.spawn.visible", (status: number) => setIsSpawnSelectVisable(status));
	}

	return {
		characterList,
		spawnData,
		isAuthVisable,
		isCharacterSelectVisable,
		isSpawnSelectVisable,
	};
};
