function PlayArea({deck, updateDeck, cardsInPlay, updateCardsInPlay}){

  function selectCard(){
    
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
          onClick={}
        />
      )}
    </div>
  );
}