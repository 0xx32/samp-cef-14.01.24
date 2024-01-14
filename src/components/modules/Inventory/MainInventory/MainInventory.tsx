import { FC } from "react";

import InventoryTitle from "../InventoryTitle/InventaryTitle";

import styles from "./MainPlayerInventory.module.scss";
import boxIcon from "assets/inventory/icons/box.svg";
import { generateSlots } from "utils/generateSlots";
import Slot from "../Slot/Slot";
import { GameItem } from "../GameItem/GameItem";
import { IModalState } from "components/A-screens/inventory/Inventory.interface";
import { useInventoryStore } from "store/inventory-store/inventory.store";

interface IProps {
    setModal: (state: IModalState) => void;
}

export const MainInventory: FC<IProps> = ({ setModal }) => {
    const { items } = useInventoryStore((state) => state);
    const renderItemList = generateSlots(items, 15);
    const renderCondition = renderItemList && renderItemList.length > 0;

    return (
        <div className={styles.playerItems}>
            <InventoryTitle
                title="Инвентарь"
                subTitle="В инвентаре можно управлять вашими предметами"
                img={boxIcon}
                classNames={styles.header}
            />
            <h2 className={styles.title}>Ваши предметы в одном месте</h2>
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
                    : Array.from({ length: 15 }).map((_, index) => <Slot slotid={index} key={index} />)}
            </div>
        </div>
    );
};
