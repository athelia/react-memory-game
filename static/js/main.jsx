function Main(){
  const [playing, updatePlaying] = React.useState(false);
  const [deck, updateDeck] = React.useState([]);
  const [cardsInPlay, updateCardsInPlay] = React.useState([]);

  React.useEffect(() => {
    fetch('/cards.json')
    .then(res => res.json())
    .then(data => updateDeck(data))
  }, [])

  function initialDeal(){
    updatePlaying(true);
    updateCardsInPlay(deck.slice(0, 16));
    updateDeck(deck.slice(16, deck.length));
  }

  if (playing){
    return(
      <React.Fragment>
        <PlayArea 
          deck={deck} 
          updateDeck={updateDeck}
          cardsInPlay={cardsInPlay} 
          updateCardsInPlay={updateCardsInPlay}
        />
      </React.Fragment>
    )
  } else {
    return(
      <React.Fragment>
        <button onClick={initialDeal}>Deal</button>
      </React.Fragment>
  );
  }
}