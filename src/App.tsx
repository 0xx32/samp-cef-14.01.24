import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

import Auth from "components/A-screens/auth/Auth";
import CharacterSelection from "components/A-screens/character-selection/CharacterSelection";
import SpawnSelection from "components/A-screens/spawn-selection/SpawnSelection";
import Inventory from "components/A-screens/inventory/Inventory";

import { useAuthEvents } from "hooks/useAuthEvents";
import { useInventoryEvents } from "hooks/useInventoryEvents";
import { ErrorFallback } from "components/shared/ErrorFallback/ErrorFallback";

import { useLog } from "store/inventory-store/inventory.store";

function App() {
    const [isLogVisible, setIsLogVisible] = useState(false);

    const { characterList, spawnData, isAuthVisable, isCharacterSelectVisable, isSpawnSelectVisable } = useAuthEvents();
    const { isInventoryVisable, playerState, isGloveBoxShow, setIsGloveBoxShow } = useInventoryEvents();

    const { log } = useLog((state) => state);

    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            {isAuthVisable === 1 && <Auth />}
            {isCharacterSelectVisable === 1 && <CharacterSelection characterList={characterList} />}
            {isSpawnSelectVisable === 1 && <SpawnSelection spawnData={spawnData} />}

            {isInventoryVisable === 1 && (
                <Inventory playerState={playerState} isGloveBoxShow={isGloveBoxShow} setIsGloveBoxShow={setIsGloveBoxShow} />
            )}
            {/* {isInventoryVisable === 0 && (
                <Inventory
                    playerState={{ armour: 50, health: 75, weight: 10 }}
                    isGloveBoxShow={isGloveBoxShow}
                    setIsGloveBoxShow={setIsGloveBoxShow}
                />
            )} */}

            <div className="log-wrapper-btn">
                <button className="btn-log" onClick={() => setIsLogVisible(!isLogVisible)}>
                    {isLogVisible ? "Close" : "Open"}
                </button>
            </div>

            <div className={`logText ${isLogVisible ? "open-log" : ""} `}>
                <div className="rowlog">log: {"=> " + log}</div>
            </div>
        </ErrorBoundary>
    );
}

export default App;
