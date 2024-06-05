const Doctorinfo = ({ doctors }) => {
    return (
      <div>
        {doctors?.map((doctor) => (
          <li>{doctor.firstname}</li>
        ))}
      </div>
    );
  };
  
  export default Doctorinfo;
  