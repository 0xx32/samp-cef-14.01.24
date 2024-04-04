import { ErrorBoundary } from "react-error-boundary";

import Auth from "components/A-screens/auth/Auth";
import CharacterSelection from "components/A-screens/character-selection/CharacterSelection";
import SpawnSelection from "components/A-screens/spawn-selection/SpawnSelection";
import Inventory from "components/A-screens/inventory/Inventory";
import { ErrorFallback } from "components/shared/ErrorFallback/ErrorFallback";

import { useAuthEvents } from "hooks/useAuthEvents";
import { useInventoryEvents } from "hooks/useInventoryEvents";

function App() {
	const authEvents = useAuthEvents();
	const inventoryEvents = useInventoryEvents();

	return (
		<ErrorBoundary FallbackComponent={ErrorFallback}>
			{authEvents.isAuthVisable === 1 && <Auth />}
			{authEvents.isCharacterSelectVisable === 1 && (
				<CharacterSelection characterList={authEvents.characterList} />
			)}
			{authEvents.isSpawnSelectVisable === 1 && <SpawnSelection spawnData={authEvents.spawnData} />}

			{inventoryEvents.isInventoryVisable === 1 && (
				<Inventory
					playerState={inventoryEvents.playerState}
					isGloveBoxShow={inventoryEvents.isGloveBoxShow}
					setIsGloveBoxShow={inventoryEvents.setIsGloveBoxShow}
				/>
			)}
		</ErrorBoundary>
	);
}

export default App;
