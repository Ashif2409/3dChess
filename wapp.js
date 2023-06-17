let wp1 = { x: -2.9, z: 8.25 };
let wp2 = { x: -1.9, z: 8.25 };
let wp3 = { x: -0.9, z: 8.25 };
let wp4 = { x: 0.05, z: 8.25 };
let wp5 = { x: 1.05, z: 8.25 };
let wp6 = { x: 2.05, z: 8.25 };
let wp7 = { x: 3.05, z: 8.25 };
let wp8 = { x: 4.05, z: 8.25 };
let wr1 = { x: 0, z: 10.25 };
let wr2 = { x: -7, z: 10.25 };
let wk1 = { x: 0, z: 10.25 };
let wk2 = { x: -5, z: 10.25 };
let wb1 = { x: 0, z: 10.25 };
let wb2 = { x: -3, z: 10.25 };
let wq = { x: 0, z: 10.4 }
let wki = { x: 0, z: 10.25 }

class WPawn {
    constructor(z, x, t) {
        this.x = x;
        this.z = z;
        let position;
        loader.load('./pieces/white_pawn/scene.gltf', (gltf) => {
            gltf.scene.userData.name = 'white'
            this.piece=gltf.scene
            gltf.scene.scale.set(0.4, 0.4, 0.4)
            gltf.scene.position.set(-2.95 + z, -0.8, x)
            position = gltf.scene.getWorldPosition(worldPosition);

            board.add(gltf.scene)
            domEvents.addEventListener(gltf.scene, 'click', () => {
                let px = gltf.scene.getWorldPosition(worldPosition).x;
                let pz = gltf.scene.getWorldPosition(worldPosition).z
                if (!clicked && turn == 'w' && endb==1 && endw==1) {
                    Wpawn_onClick(px, pz, gltf.scene, t);
                    clicked = true;
                } else {
                    rmvLyr()
                    clicked = false;

                }

            })

        })
        // console.log(this.bpawn_piece.getWorldPosition(worldPosition));


    }
    wprmv(){
        this.piece.position.set(0,-10,0)
    }
}


class WRook {
    constructor(x, z, t) {
        loader.load('./pieces/white_rook/scene.gltf', (gltf) => {
            this.model=gltf.scene
            gltf.scene.userData.name = 'white'
            gltf.scene.scale.set(0.4, 0.4, 0.4)
            if (x == 0) gltf.scene.name = 'brook1';
            else gltf.scene.name = 'brook2';

            gltf.scene.position.set(0 - x, -0.93, z)
            board.add(gltf.scene)
            // if (x == 0) bRook1_Pos = gltf.scene.getWorldPosition(worldPosition)
            // else bRook2_Pos = gltf.scene.getWorldPosition(worldPosition)
            domEvents.addEventListener(gltf.scene, 'click', () => {
                let px = gltf.scene.getWorldPosition(worldPosition).x
                let pz = gltf.scene.getWorldPosition(worldPosition).z
                if (!clicked && turn == 'w' && endb==1 && endw==1) {
                    Wrook_onClick(px, pz, gltf.scene, t);
                    clicked = true;
                } else {
                    rmvLyr()
                    clicked = false;

                }

            })
        })
    }
    wrrmv(){
        this.model.position.set(2,2,2)
    }
}



class Wknight {
    constructor(z, x, t) {

        loader.load('./pieces/white_knight/scene.gltf', (gltf) => {
            gltf.scene.userData.name = 'white'
            gltf.scene.scale.set(0.4, 0.4, 0.4)
            gltf.scene.position.set(0 - z, -0.7, x)
            this.piece=gltf.scene
            board.add(gltf.scene)

            domEvents.addEventListener(gltf.scene, 'click', () => {
                let px = gltf.scene.getWorldPosition(worldPosition).x
                let pz = gltf.scene.getWorldPosition(worldPosition).z
                if (!clicked && turn == 'w' && endb==1 && endw==1) {
                    Wknight_onClick(px, pz, gltf.scene, t);
                    clicked = true;
                } else {
                    rmvLyr()
                    clicked = false;

                }

            })
        })
    }
    wkrmv(){
        this.piece.position.set(0,-10,0)
    }
}


class Wbishop {
    constructor(z, x, t) {

        loader.load('./pieces/white_bishop/scene.gltf', (gltf) => {
            gltf.scene.userData.name = 'white'
            gltf.scene.scale.set(0.4, 0.4, 0.4)
            gltf.scene.position.set(0 - z, -0.7, x)
            this.piece=gltf.scene
            board.add(gltf.scene)
            if (z == 0) bBishop1_Pos = gltf.scene.getWorldPosition(worldPosition)
            else bBishop2_Pos = gltf.scene.getWorldPosition(worldPosition)
            domEvents.addEventListener(gltf.scene, 'click', () => {
                let px = gltf.scene.getWorldPosition(worldPosition).x
                let pz = gltf.scene.getWorldPosition(worldPosition).z
                if (!clicked && turn == 'w' && endb==1 && endw==1) {
                    Wbishop_onClick(px, pz, gltf.scene, t);
                    clicked = true;
                } else {
                    rmvLyr()
                    clicked = false;

                }

            })
        })
    }
    wbrmv(){
        this.piece.position.set(0,-10,0)
    }
}

class Wking {
    constructor(z, x) {
        loader.load('./pieces/white_king/scene.gltf', (gltf) => {
            gltf.scene.userData.name = 'white'
            gltf.scene.scale.set(0.4, 0.4, 0.4)
            gltf.scene.position.set(z, -0.7, x)
            this.piece=gltf.scene
            board.add(gltf.scene)
            bKing_Pos = gltf.scene.getWorldPosition(worldPosition)
            domEvents.addEventListener(gltf.scene, 'click', () => {
                let px = gltf.scene.getWorldPosition(worldPosition).x
                let pz = gltf.scene.getWorldPosition(worldPosition).z
                if (!clicked && turn == 'w' && endb==1 && endw==1) {
                    Wking_onClick(px, pz, gltf.scene);
                    clicked = true;
                } else {
                    rmvLyr()
                    clicked = false;

                }

            })
        })
    }
    wkirmv(){
        this.piece.position.set(0,-10,0)
    }
}

class Wqueen {
    constructor(z, x) {
        loader.load('./pieces/white_queen/scene.gltf', (gltf) => {
            gltf.scene.userData.name = 'white'
            gltf.scene.scale.set(0.4, 0.4, 0.4)
            gltf.scene.position.set(z, -0.7, x)
            this.piece=gltf.scene
            board.add(gltf.scene)
            domEvents.addEventListener(gltf.scene, 'click', () => {
                let px = gltf.scene.getWorldPosition(worldPosition).x
                let pz = gltf.scene.getWorldPosition(worldPosition).z
                if (!clicked && turn == 'w' && endb==1 && endw==1) {
                    Wqueen_onClick(px, pz, gltf.scene);
                    clicked = true;
                } else {
                    rmvLyr()
                    clicked = false;

                }

            })
        })
    }
    wqrmv(){
        this.piece.position.set(0,-10,0);
    }
}

let wpawn1 = new WPawn(0, 8.25, 'a')
let wpawn2 = new WPawn(1, 8.25, 'b')
let wpawn3 = new WPawn(2, 8.25, 'c')
let wpawn4 = new WPawn(3, 8.25, 'd')
let wpawn5 = new WPawn(4, 8.25, 'e')
let wpawn6 = new WPawn(5, 8.25, 'f')
let wpawn7 = new WPawn(6, 8.25, 'g')
let wpawn8 = new WPawn(7, 8.25, 'h')

let wrook1 = new WRook(0, 10.25, 'a')
let wrook2 = new WRook(7, 10.25, 'b')

let wknight1 = new Wknight(0, 10.25, 'a')
let wknight2 = new Wknight(5, 10.25, 'b')

let wbishop1 = new Wbishop(0, 10.25,'a')
let wbishop2 = new Wbishop(3, 10.25,'b')

let wking = new Wking(0, 10.25)

let wqueen = new Wqueen(0, 10.4)
scene.add(board)
