import { FC } from "react";

import InventoryTitle from "../InventoryTitle/InventaryTitle";

import styles from "./GloveBox.module.scss";

import carIcon from "assets/inventory/icons/car.svg";
import { generateGloveBoxSlots,  } from "utils/generateSlots";
import Slot from "../Slot/Slot";
import { GameItem } from "../GameItem/GameItem";
import { IModalState } from "components/A-screens/inventory/Inventory.interface";
import { useInventoryStore } from "store/inventory-store/inventory.store";

interface IProps {
    setModal: (state: IModalState) => void;
}

export const GloveBox: FC<IProps> = ({ setModal }) => {
    const { items } = useInventoryStore((state) => state);

    const list = items.filter(item => item.slotid >= 100)
    const renderItemList = generateGloveBoxSlots(list, 10);
    const renderCondition = renderItemList && renderItemList.length > 0;


    return (
        <div className={styles.gloveBox}>
            <InventoryTitle
                title="Бардачок"
                subTitle="В инвентаре можно управлять вашими предметами"
                img={carIcon}
                classNames={styles.header}
            />

            <div className={styles.grid}>
                {renderCondition
                    ? renderItemList.map((item) =>
                          "itemid" in item ? (
                              <Slot key={item.slotid} slotid={item.slotid}>
                                  <GameItem itemData={item} setModal={setModal} />
                              </Slot>
                          ) : (
                              <Slot key={item.slotid} slotid={item.slotid} />
                          )
                      )
                    : Array.from({ length: 10 }).map((_, index) => <Slot slotid={index + 100} key={index} />)}
            </div>
        </div>
    );
};
