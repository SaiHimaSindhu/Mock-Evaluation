import React, { memo, useCallback } from "react";

function FleetCardBase({ fleet, onUpdateDriver, onToggleAvail, onDelete }) {
  const { id, regNo, category, driver, available } = fleet;

  const handleUpdateDriver = useCallback(() => {
    const name = window.prompt("Enter new driver name", driver);
    if (!name || !name.trim()) return;
    onUpdateDriver(id, name.trim());
  }, [id, driver, onUpdateDriver]);

  const handleToggleAvail = useCallback(() => {
    onToggleAvail(id);
  }, [id, onToggleAvail]);

  const handleDelete = useCallback(() => {
    onDelete(id);
  }, [id, onDelete]);

  return (
    <div style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
      <img
        src="https://via.placeholder.com/150"
        alt="vehicle"
        style={{ width: "100%" }}
      />
      <p>Reg No: {regNo}</p>
      <p>Category: {category}</p>
      <p>Driver: {driver}</p>
      <p>Status: {available ? "Available" : "Unavailable"}</p>
      <button onClick={handleUpdateDriver}>Update Driver</button>
      <button onClick={handleToggleAvail}>Change Availability</button>
      <button onClick={handleDelete}>Delete Vehicle</button>
    </div>
  );
}

const FleetCard = memo(FleetCardBase);
export default FleetCard;
