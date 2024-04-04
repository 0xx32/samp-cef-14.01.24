import { lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { ErrorFallback } from "components/shared/ErrorFallback/ErrorFallback";

import { useAuthEvents } from "hooks/useAuthEvents";
import { useInventoryEvents } from "hooks/useInventoryEvents";

const CharacterSelection = lazy(() => import("components/A-screens/character-selection/CharacterSelection"));
const Inventory = lazy(() => import("components/A-screens/inventory/Inventory"));
const SpawnSelection = lazy(() => import("components/A-screens/spawn-selection/SpawnSelection"));
const Auth = lazy(() => import("components/A-screens/auth/Auth"));

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
