const spaceBattle = [];

let spaceShip = {
    name: 'USS Schwarzenger',
    hull: 20,
    firepower: 5,
    accuracy: 0.7,
}



class alienShip {
    constructor(name) {
        this.name = name;
        this.hull = (Math.random() * (6 - 3 +1)) + 3,                         
        this.firepower = (Math.random() * (4 - 2 + 1)) + 2,                   
        this.accuracy = (Math.random() * (.8 - .6 + 1)) + .6,                 
    }
};
        

const spaceAttack = () => {
    for(let i = 0; i < spaceBattle.length; i++)
        while(spaceBattle[i].hull > 0) {
            if(Math.random() < spaceShip.accuracy){
                console.log('Defeat!');
            }
            else if(Math.random() > spaceShip.accuracy){
                console.log('Enemy destroyed');
                return spaceAttack;
            }
            else if(alienShipOne.hull > 0.8 ) {
                console.log('Enemy attack failed')

            }
            else{
                console.log('your ship  is now been destroyed!')
            }
    
}
}