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
  
  let nullCount = 0;
  // let setOfCards = new Set();
  // let setOfCards = new Set(cardsInPlay);
  for(const card of cardsInPlay){
    if(card === null){
      nullCount++;
    }
  }

  if (playing){
    return(
      <React.Fragment>
        <p id='deck-count'>{deck.length} Cards in Deck</p>
        <p id='table-count'>{cardsInPlay.length - nullCount} Cards on Table</p>
        {/* Tricky - how do we discount null when it's in the set, 
        but otherwise include all cards?
        <p id='table-count'>{setOfCards.size - 1} Cards on Table</p> */}
        <PlayArea 
          deck={deck} 
          updateDeck={updateDeck}
          cardsInPlay={cardsInPlay} 
          updateCardsInPlay={updateCardsInPlay}
          playing={playing}
          updatePlaying={updatePlaying}
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