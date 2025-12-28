import React, { useState, useCallback } from "react";
import FleetForm from "../components/FleetForm";
import FleetCard from "../components/FleetCard";

export default function Admin() {
  const [fleets, setFleets] = useState([]);

  const addFleet = useCallback((fleet) => {
    setFleets((prev) => [...prev, { id: Date.now(), ...fleet }]);
  }, []);

  const updateDriver = useCallback((id, newDriver) => {
    setFleets((prev) =>
      prev.map((f) => (f.id === id ? { ...f, driver: newDriver } : f))
    );
  }, []);

  const toggleAvailability = useCallback((id) => {
    setFleets((prev) =>
      prev.map((f) =>
        f.id === id ? { ...f, available: !f.available } : f
      )
    );
  }, []);

  const deleteVehicle = useCallback((id) => {
    const ok = window.confirm("Delete this vehicle?");
    if (!ok) return;
    setFleets((prev) => prev.filter((f) => f.id !== id));
  }, []);

  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      {/* Sidebar */}
      <aside style={{ width: "300px" }}>
        <h2>Add Fleet</h2>
        <FleetForm onAdd={addFleet} />
      </aside>

      {/* Main content */}
      <main style={{ flex: 1 }}>
        <h2>Fleet Cards</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1rem",
          }}
        >
          {fleets.map((fleet) => (
            <FleetCard
              key={fleet.id}
              fleet={fleet}
              onUpdateDriver={updateDriver}
              onToggleAvail={toggleAvailability}
              onDelete={deleteVehicle}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
