window.onload = function() {
  var deck = null;
  var hand = null;
  document.getElementById("shuffle").addEventListener("click", function() {
    if (deck == null) {
      deck = (new Deck()).shuffle();
    } else {
      if (confirm("ȷ��Ҫ����ϴ����")) {
        deck = (new Deck()).shuffle();
      }
    }
  }, false);
  
  document.getElementById("deal").addEventListener("click", function() {
    if (deck == null) {
      alert("����ϴ��")
    } else {
      deck = deck.deal(13).sort(Card.orderByRank);
      for (var i=0; i<13; i++) {
        
        var card = document.getElementById("card_" + (i+1));
        card.firstChild.src = "images/" + deck[i].suit.name + "_" + deck[i].rank.value + ".jpg"
      };
      
      deck = null;
    }
    
  }, false);
}