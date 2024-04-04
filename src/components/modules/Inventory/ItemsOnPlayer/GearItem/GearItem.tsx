import { FC } from "react";

import { IInventoryItem } from "types/inventory.interface";
import { IModalState } from "components/A-screens/inventory/Inventory.interface";
import { useActiveSlot } from "store/inventory-store/inventory.store";
import { useDraggable } from "@dnd-kit/core";

import styles from "./GearItem.module.scss";
import { inventoryIconUrl } from "constants/inventory-item.constants";

interface IProps {
	item: IInventoryItem;
	setModal: (state: IModalState) => void;
	gearSlotId: number;
	slotType: string;
	slotId: number;
}

const GearItem: FC<IProps> = ({ item, setModal, gearSlotId, slotType, slotId }) => {
	const setActiveSlot = useActiveSlot((state) => state.setSlot);

	const { isDragging, attributes, listeners, setNodeRef, transform } = useDraggable({
		id: slotId,
		data: { slotid: slotId, typeSlot: item.type, slotType: slotType, typeInv: "gear" },
	});

	const onClickHandler = () => {
		setActiveSlot(slotId);
		setModal({ modalType: "actions", modalData: { ...item, gearSlotId, typeInv: "gear" } });
	};

	const style = {
		transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
		transition: "transform 0.08s ease",
	};

	const styleOther = {
		opacity: isDragging ? 0 : 1,
		transition: "opacity 0.1s ease",
	};

	return (
		<div
			className={styles.item}
			onClick={onClickHandler}
			ref={setNodeRef}
			{...listeners}
			{...attributes}
			style={style}
		>
			<div className={styles.icon}>
				<img src={inventoryIconUrl + item.icon} alt={item.icon} />
			</div>
			<div className={styles.name} style={styleOther}>
				{item.item_name}
			</div>
		</div>
	);
};

export { GearItem };
