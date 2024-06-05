const Home = ({ greet, name, icon }) => {
    return (
      <div>
        <h1>
          {greet} {name} {icon}
        </h1>
      </div>
    );
  };
  
  export default Home;
  