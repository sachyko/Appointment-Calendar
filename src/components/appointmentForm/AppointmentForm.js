import React, { useMemo } from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  name,
  setTitle,
  contacts,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  const contactNames = useMemo(() => {
    return contacts.map((contact) => contact.name);
  }, [contacts]);
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Appointment Title"
          required
          aria-label="Appointment Title"
        />
      </label>
      <br />
      <label>
        <ContactPicker
          name="contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          contacts={contactNames}
        />
      </label>
      <br />
      <label>
        <input
          type="time"
          name="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          aria-label="Time Picker"
        />
      </label>
      <br />
      <label>
        <input
          type="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          min={getTodayString()}
          required
          aria-label="Data Picker"
        />
      </label>
      <input
        aria-label="Add Appointment"
        type="submit"
        value="Add Appointment"
      />
    </form>
  );
};
