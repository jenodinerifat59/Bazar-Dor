const Datepage = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <div>
      <p>{date}</p>
    </div>)
};

export default Datepage;