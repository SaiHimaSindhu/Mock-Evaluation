import React, { useState } from "react";

export default function FleetForm({ onAdd }) {
  const [regNo, setRegNo] = useState("");
  const [category, setCategory] = useState("Auto");
  const [driver, setDriver] = useState("");
  const [available, setAvailable] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!regNo.trim() || !driver.trim()) {
      alert("Required fields must not be empty");
      return;
    }

    onAdd({
      regNo: regNo.trim(),
      category,
      driver: driver.trim(),
      available,
    });

    setRegNo("");
    setCategory("Auto");
    setDriver("");
    setAvailable(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Vehicle Reg No"
        value={regNo}
        onChange={(e) => setRegNo(e.target.value)}
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>Auto</option>
        <option>Car</option>
        <option>Truck</option>
        <option>Bus</option>
      </select>
      <input
        type="text"
        placeholder="Driver Name"
        value={driver}
        onChange={(e) => setDriver(e.target.value)}
      />
      <select
        value={available ? "Available" : "Unavailable"}
        onChange={(e) => setAvailable(e.target.value === "Available")}
      >
        <option>Available</option>
        <option>Unavailable</option>
      </select>
      <button type="submit">Add Fleet</button>
    </form>
  );
}
