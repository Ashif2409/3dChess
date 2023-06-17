let clicked;
clicked = false;
// let a,b,c,d,e,f,g,h;

let bp1 = { x: -2.95, z: -1.75 };
// piecePos[1][0]=1;
let bp2 = { x: -1.95, z: -1.75 };
// piecePos[1][1]=1;
let bp3 = { x: -0.95, z: -1.75 };
// piecePos[1][2]=1;
let bp4 = { x: 0.05, z: -1.75 };
// piecePos[1][3]=1;
let bp5 = { x: 1.05, z: -1.75 };
// piecePos[1][4]=1;
let bp6 = { x: 2.05, z: -1.75 };
// piecePos[1][5]=1;
let bp7 = { x: 3.05, z: -1.75 };
// piecePos[1][6]=1;
let bp8 = { x: 4.05, z: -1.75 };
// piecePos[1][7]=1;
let br1 = { x: 0, z: -3.75 };
// piecePos[0][0]=1;
let br2 = { x: -7, z: -3.75 };
// piecePos[0][7]=1;
let bk1 = { x: 0, z: -3.75 };
// piecePos[0][0]=1;
let bk2 = { x: -5, z: -3.75 };
// piecePos[0][5]=1;
let bb1 = { x: 0, z: -3.75 };
// piecePos[0][0]=1;
let bb2 = { x: -3, z: -3.75 };
// piecePos[0][3]=1;
let bki = { x: 0, z: -3.75 };
// piecePos[0][4]=1;
let bq = { x: 0, z: -3.75 };
// piecePos[0][5]=1;



class BPawn {
    constructor(z, x,t) {

        loader.load('./pieces/black_pawn/scene.gltf', (gltf) => {
            this.loc = gltf.scene;
            gltf.scene.name = 'black'
            gltf.scene.scale.set(0.4, 0.4, 0.4)
            gltf.scene.position.set(-2.95 + z, -0.8, x)
            board.add(gltf.scene)
            domEvents.addEventListener(gltf.scene, 'click', () => {
                let px = gltf.scene.getWorldPosition(worldPosition).x;
                let pz = gltf.scene.getWorldPosition(worldPosition).z;
               this.piece=gltf.scene
                if (!clicked && turn == 'b'  && endb==1 && endw==1) {
                    // console.log(t);
                    Bpawn_onClick(px, pz, gltf.scene,t);
                    clicked = true;
                } else {
                    rmvLyr()
                    clicked = false;

                }

            })

        })
        // console.log(this.bpawn_piece.getWorldPosition(worldPosition));

    }
    bprmv() {
        this.loc.rotation.x=(Math.PI/180)*180
        this.loc.position.y=0.5
    }

}



class BRook {
    constructor(x, z,t) {
        loader.load('./pieces/black_rook/scene.gltf', (gltf) => {
            this.model=gltf.scene
            gltf.scene.userData.name = 'black'
            gltf.scene.scale.set(0.4, 0.4, 0.4)
            if (x == 0) gltf.scene.name = 'brook1';
            else gltf.scene.name = 'brook2';
            gltf.scene.position.set(0 - x, -0.93, z)
            board.add(gltf.scene)
            domEvents.addEventListener(gltf.scene, 'click', () => {
                let px = gltf.scene.getWorldPosition(worldPosition).x
                let pz = gltf.scene.getWorldPosition(worldPosition).z


                if (!clicked && turn == 'b'  && endb==1 && endw==1) {
                    Brook_onClick(px, pz, gltf.scene,t);
                    clicked = true;
                } else {
                    rmvLyr()
                    clicked = false;

                }

            })
        })
    }
    brrmv(){
        this.model.position.set(0,-50,0)
    }
}



class Bknight {
    constructor(z, x,t) {

        loader.load('./pieces/black_knight/scene.gltf', (gltf) => {
            gltf.userData.name = 'black'
            gltf.scene.scale.set(0.4, 0.4, 0.4)
            gltf.scene.position.set(0 - z, -0.7, x)
            board.add(gltf.scene)
            this.piece=gltf.scene
            domEvents.addEventListener(gltf.scene, 'click', () => {
                let px = gltf.scene.getWorldPosition(worldPosition).x
                let pz = gltf.scene.getWorldPosition(worldPosition).z
                if (!clicked && turn == 'b'  && endb==1 && endw==1) {
                    Bknight_onClick(px, pz, gltf.scene,t);
                    clicked = true;
                } else {
                    rmvLyr()
                    clicked = false;

                }

            })
        })
    }
    bkrmv(){
        this.piece.position.set(0,-10,0)
    }
}


class Bbishop {
    constructor(z, x,t) {

        loader.load('./pieces/black_bishop/scene.gltf', (gltf) => {
            gltf.scene.userData.name = 'black'
            gltf.scene.scale.set(0.4, 0.4, 0.4)
            gltf.scene.position.set(0 - z, -0.7, x)
            this.piece=gltf.scene
            board.add(gltf.scene)
            domEvents.addEventListener(gltf.scene, 'click', () => {
                let px = gltf.scene.getWorldPosition(worldPosition).x
                let pz = gltf.scene.getWorldPosition(worldPosition).z
                if (!clicked && turn == 'b'  && endb==1 && endw==1) {
                    Bbishop_onClick(px, pz, gltf.scene,t);
                    clicked = true;
                } else {
                    rmvLyr()
                    clicked = false;

                }

            })
        })
    }
    bbrmv(){
        this.piece.position.set(0,-10,0)
    }
}


class Bking {
    constructor(z, x,t) {
        loader.load('./pieces/black_king/scene.gltf', (gltf) => {
            gltf.scene.userData.name = 'black'
            gltf.scene.scale.set(0.4, 0.4, 0.4)
            gltf.scene.position.set(z, -0.7, x)
            board.add(gltf.scene)
            bKing_Pos = gltf.scene.getWorldPosition(worldPosition)
            this.piece=gltf.scene

            domEvents.addEventListener(gltf.scene, 'click', () => {
                let px = gltf.scene.getWorldPosition(worldPosition).x
                let pz = gltf.scene.getWorldPosition(worldPosition).z
                if (!clicked && turn == 'b'  && endb==1 && endw==1) {
                    Bking_onClick(px, pz, gltf.scene,t);
                    clicked = true;
                } else {
                    rmvLyr()
                    clicked = false;

                }

            })
        })
    }
    bkirmv(){
        this.piece.position.set(0,-10,0)
    }
}


class Bqueen {
    constructor(z, x) {
        loader.load('./pieces/black_queen/scene.gltf', (gltf) => {
            gltf.scene.userData.name = 'black'
            gltf.scene.scale.set(0.4, 0.4, 0.4)
            gltf.scene.position.set(z, -0.7, x)
            board.add(gltf.scene)
            bQueen_Pos = gltf.scene.getWorldPosition(worldPosition);
            this.piece=gltf.scene
            domEvents.addEventListener(gltf.scene, 'click', () => {
                let px = gltf.scene.getWorldPosition(worldPosition).x
                let pz = gltf.scene.getWorldPosition(worldPosition).z
                if (!clicked && turn == 'b'  && endb==1 && endw==1) {
                    Bqueen_onClick(px, pz, gltf.scene);
                    clicked = true;
                } else {
                    rmvLyr()
                    clicked = false;

                }

            })
        })
    }
    bqrmv(){
        this.piece.position.set(0,-10,0)
    }
}



let bpawn1 = new BPawn(0, -1.75,'a');
let bpawn2 = new BPawn(1, -1.75,'b');
let bpawn3 = new BPawn(2, -1.75,'c');
let bpawn4 = new BPawn(3, -1.75,'d');
let bpawn5 = new BPawn(4, -1.75,'e');
let bpawn6 = new BPawn(5, -1.75,'f');
let bpawn7 = new BPawn(6, -1.75,'g');
let bpawn8 = new BPawn(7, -1.75,'h');

let brook1 = new BRook(0, -3.75,'a')
let brook2 = new BRook(7, -3.75,'b')

let bknight1 = new Bknight(0, -3.75,'a');
let bknight2 = new Bknight(5, -3.75,'b');

let bbishop1 = new Bbishop(0, -3.75,'a')
let bbishop2 = new Bbishop(3, -3.75,'b')

let bqueen = new Bqueen(0, -3.75)

let bking = new Bking(0, -3.75,'a');





