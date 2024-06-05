const Animal = (props) => {
  return (
    <>
      {props.size == "small" ? (
        <li>
          {props.type} {props.icon} {props.size}
        </li>
      ) : (
        <></>
      )}
    </>
  );
};

export default Animal;
