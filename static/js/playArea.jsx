function PlayArea({deck, updateDeck, cardsInPlay, updateCardsInPlay}){
  const [selectedCards, updateSelectedCards] = React.useState([]);

  function selectCard(card){
    // select 1, then check a second selection
    if (selectedCards.length < 2){
      // keep track of what we've selected
      let selected = [];
      selected = [...selectedCards, card];
      updateSelectedCards(selected);
      console.log('selectedCards', selectedCards)
      if (selected.length === 2){
        // check card.word matches a previous selection
        if(selected[0].word === selected[1].word){
          console.log('found match', selected[0].word)
        }
        setTimeout(() => updateSelectedCards([]), 1000);
      }
    }
  }

  return(
    <div id='play-area'>
      {/*  
      option1: 
        (param) => value
      option2:
        (param) => { return value }
      */}
      {/* for card in cardsInPlay:
            Card[key] = card.id
            Card[color] = card.color
            Card[word] = card.word
            return Card
       */}
      {cardsInPlay.map(card => // with a fn expr, if we use curlies, need explicit return
        // do something else here 
        // do another thing
        <Card 
          key={card.id}
          color={card.color}
          word={card.word}
          onClick={() => selectCard(card)}
        />
      )}
    </div>
  );
}