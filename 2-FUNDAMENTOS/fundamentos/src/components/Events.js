const Events = () => {

  const handleMyEvent = (e) => {
    console.log(e);
    console.log("Click");
  }

  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique Aqui!!!</button>
      </div>
    </div>
  )
}

export default Events;