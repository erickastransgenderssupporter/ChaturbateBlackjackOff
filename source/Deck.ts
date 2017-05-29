class Deck {
    private cards: Array<Card>

    constructor() {
      this.cards = new Array<Card>(52);
      this.build(); 
    }

    private build() {
        for(let i in Suit) {
            for(let j=2; j <=14; ++j) {
                this.insertCard(new Card(j, i));
            }
        }
    }

    private insertCard(card:Card) {
        let index = Math.round(Math.random() * (this.cards.length - 1));
        let lower_index = index - 1;
        let upper_index = index + 1;
        let inserted = false;

        while(!inserted) {
            if(null == this.cards[index]) {
                this.cards[index] = card;
                inserted = true;
            } else if(0 > lower_index
                      || (this.cards.length > upper_index 
                          && Math.round(Math.random()))) {
            
                index = upper_index++;
            } else {
                index = lower_index--;
            }
        }
    }
}