class Game {
    deck: Deck;
    player: Player;
    
    constructor(deck: Deck, player: Player) {
        this.deck = deck;
        this.player = player;

        this.player.onHit = this.playerHit;
        this.player.onStay = this.playerStay;
        this.player.onDoubleDown = this.playerDoubleDown;
    }

    playerHit() {

    }

    playerStay() {

    }

    playerDoubleDown() {
        this.playerHit();
        this.playerStay();
    }
}