import { useState, useEffect } from "react";

const Doctors = () => {
  const [search, searchQuery] = useState("");
  const [doctors, setDoctors] = useState();
  const URL = "https://api.mydrsappt.com/api/v1/doctors";

  useEffect(() => {
    async function getDoctors() {
      const doctors = await fetch(URL);
      const data = await doctors.json();
      console.log(data.data);
      setDoctors(data.data);
    }

    getDoctors();
  }, [search]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => searchQuery(e.target.value)}
        value={search}
      />

      {doctors?.map((doctor) => (
        <li key={doctor.id}>{doctor.firstname}</li>
      ))}
    </div>
  );
};

export default Doctors;
