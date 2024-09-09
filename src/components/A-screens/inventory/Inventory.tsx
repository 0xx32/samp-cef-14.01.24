import { FC, useEffect, useState } from "react";
import { DndContext, MouseSensor, closestCenter, useSensor, useSensors } from "@dnd-kit/core";

import { MainInventory } from "components/modules/Inventory/MainInventory/MainInventory";
import { ItemsOnPlayer1 } from "components/modules/Inventory/ItemsOnPlayer/ItemsOnPlayer";
import { Toast } from "components/shared/Toast";
import { IModalState } from "./Inventory.interface";
import { ModalController } from "components/modules/Inventory/modals/ModalController";
import { PlayerCondition } from "components/modules/Inventory/PlayerCondition/PlayerCondition";
import { IPlayerState } from "types/inventory.interface";
import { useInventory } from "./useInventory";
import { useKeyPress } from "hooks/useKeyPress";
import { GloveBox } from "components/modules/Inventory/Glovebox/GloveBox";

import "react-toastify/dist/ReactToastify.css";
import styles from "./Inventory.module.scss";

interface IProps {
	playerState: IPlayerState | null;
	isGloveBoxShow: boolean;
	setIsGloveBoxShow: (state: boolean) => void;
}

const Inventory: FC<IProps> = ({ playerState, isGloveBoxShow, setIsGloveBoxShow }) => {
	const [modalState, setModalState] = useState<IModalState>({
		modalType: null,
		modalData: undefined,
	});

	const isKeyPressedEsc = useKeyPress("Escape");
	const { onDragEnd } = useInventory();

	const mouseSensor = useSensor(MouseSensor, {
		activationConstraint: { distance: 10 },
	});

	const sensors = useSensors(mouseSensor);

	useEffect(() => {
		if (!isKeyPressedEsc) return;

		if ("cef" in window) {
			cef.emit("inventory.exit");
			setIsGloveBoxShow(false);
		}
	}, [isKeyPressedEsc]);

	return (
		<div className={styles.inventory}>
			<div className={styles.main}>
				<DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd} sensors={sensors}>
					<div className={styles.leftSide}>
						<ItemsOnPlayer1 setModal={setModalState} />
						<PlayerCondition playerState={playerState} />
					</div>
					<div className={styles.rightSide}>
						<MainInventory setModal={setModalState} />
						{isGloveBoxShow && <GloveBox setModal={setModalState} />}
					</div>
				</DndContext>
			</div>

			{modalState.modalType && <ModalController modalState={modalState} setModalState={setModalState} />}

			<Toast />
		</div>
	);
};
export default Inventory;
