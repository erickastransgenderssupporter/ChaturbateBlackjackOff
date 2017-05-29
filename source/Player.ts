class Player {
    name:string
    numberOfGames: number
    numberOfWins: number
    currentGame: Game

    onHit: ()=>void;
    onStay: ()=>void;
    onDoubleDown: ()=>void;

    constructor(username:string){
        this.name = username;
        this.numberOfGames = 0;
        this.numberOfWins = 0;
        this.currentGame = null;
        this.onHit = null;
        this.onStay = null;
        this.onDoubleDown = null;
    }

    hit() {
        if(this.onHit) this.onHit();
    }
    
    stay() {
        if(this.onStay) this.onStay();
    }

    doubleDown() {
        if(this.onDoubleDown) this.onDoubleDown();
    }
}