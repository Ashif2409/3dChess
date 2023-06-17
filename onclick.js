
function Bpawn_onClick(px, pz, obj, t) {
    plane_geo = new THREE.PlaneGeometry(0.8, 0.8);
    plane_mat = new THREE.MeshBasicMaterial({ color: 0xd87d7d })

    if (pz == -1.75) {
        let select = new THREE.Mesh(plane_geo, plane_mat);
        select.position.set(px - 0.55, 0.2, pz + 0.35)
        select.rotation.x = -90 * (Math.PI / 180)
        select.name = 'select'
        let select4 = new THREE.Mesh(plane_geo, plane_mat);
        select4.position.set(px - 0.55, 0.2, pz + 1.35)
        select4.rotation.x = -90 * (Math.PI / 180)
        select4.name = 'select'
        layer.add(select)
        layer.add(select4)
        let select2=new THREE.Mesh(plane_geo,plane_mat)
        select2.rotation.x = -90 * (Math.PI / 180)
        let select3=new THREE.Mesh(plane_geo,plane_mat)
        select3.rotation.x = -90 * (Math.PI / 180)
        if((Math.abs((bp1.x-1)-wp1.x)<0.051 && Math.abs((bp1.z-wp1.z+6))<0.051) || (Math.abs((bp1.x-1)-wp2.x)<0.051 && Math.abs((bp1.z-wp2.z+6))<0.051) ||(Math.abs((bp1.x-1)-wp3.x)<0.051 && Math.abs((bp1.z-wp3.z+6))<0.051) ||(Math.abs((bp1.x-1)-wp4.x)<0.051 && Math.abs((bp1.z-wp4.z+6))<0.051) ||(Math.abs((bp1.x-1)-wp5.x)<0.051 && Math.abs((bp1.z-wp5.z+6))<0.051) ||(Math.abs((bp1.x-1)-wp6.x)<0.051 && Math.abs((bp1.z-wp6.z+6))<0.051) ||(Math.abs((bp1.x-1)-wp7.x)<0.051 && Math.abs((bp1.z-wp7.z+6))<0.051) ||(Math.abs((bp1.x-1)-wp8.x)<0.051 && Math.abs((bp1.z-wp8.z+6))<0.051) ){
            select2.position.set(px-0.75-0.8,0.2,pz-1.35+1.75)
            layer.add(select2)
            domEvents.addEventListener(select2,'click',()=>{
                obj.position.set(px-1,-0.8,pz+2)
                
            })
        }
       
        if((Math.abs(((bp1.x)-wr2.x-5.05)<0.051 && Math.abs(((bp1.x)-wr2.x-5.05)>(-0.051)&& Math.abs((bp1.z-wr2.z+7))<0.051)))|| (Math.abs(((bp2.x)-wr2.x-5.05)<0.051 &&  Math.abs((bp2.z-wr2.z+7))<0.051)) && Math.abs(((bp2.x)-wr2.x-5.05)>(-0.051)) || (Math.abs(((bp3.x)-wr2.x-5.05)<0.051 && Math.abs((bp3.z-wr2.z+7))<0.051) && Math.abs(((bp3.x)-wr2.x-5.05)>(-0.051))) || (Math.abs(((bp4.x)-wr2.x-5.05)<0.051 && Math.abs((bp4.z-wr2.z+7))<0.051) && Math.abs(((bp4.x)-wr2.x-5.05)>(-0.051))) || (Math.abs(((bp5.x)-wr2.x-5.05)<0.051 && Math.abs((bp5.z-wr2.z+7))<0.051) && Math.abs(((bp5.x)-wr2.x-5.05)>(-0.051)))|| (Math.abs(((bp6.x)-wr2.x-5.05)<0.051 && Math.abs((bp6.z-wr2.z+7))<0.051)&& Math.abs(((bp6.x)-wr2.x-5.05)>(-0.051)))|| (Math.abs(((bp7.x)-wr2.x-5.05)<0.051 && Math.abs((bp7.z-wr2.z+7))<0.051)&& Math.abs(((bp7.x)-wr2.x-5.05)>(-0.051))) || (Math.abs(((bp8.x)-wr2.x-5.05)<0.051 && Math.abs((bp8.z-wr2.z+7))<0.051)&& Math.abs(((bp8.x)-wr2.x-5.05)>(-0.051)))){
       //rook2 left
 
        select2.position.set(px-0.75-0.8,0.2,pz-1.35+1.75)
           layer.add(select2)
        }
        
        if( (Math.abs(((bp1.x)-wr2.x-3.05)<0.051 &&  Math.abs((bp1.z-wr2.z+7))<0.051)) || (Math.abs(((bp2.x)-wr2.x-3.05)<0.051 &&  Math.abs((bp2.z-wr2.z+7))<0.051)) || (Math.abs(((bp3.x)-wr2.x-3.05)<0.051 &&  Math.abs((bp3.z-wr2.z+7))<0.051)) || (Math.abs(((bp4.x)-wr2.x-3.05)<0.051 &&  Math.abs((bp4.z-wr2.z+7))<0.051)) || (Math.abs(((bp5.x)-wr2.x-3.05)<0.051 &&  Math.abs((bp5.z-wr2.z+7))<0.051)) || (Math.abs(((bp6.x)-wr2.x-3.05)<0.051 &&  Math.abs((bp6.z-wr2.z+7))<0.051)) || (Math.abs(((bp7.x)-wr2.x-3.05)<0.051 &&  Math.abs((bp7.z-wr2.z+7))<0.051)) ||(Math.abs(((bp8.x)-wr2.x-3.05)<0.051 &&  Math.abs((bp8.z-wr2.z+7))<0.051))){
            //rook2 right
                   
               select3.position.set(px+0.45,0.2,pz-1.35+1.75)
               layer.add(select3)

        }
        if( (Math.abs(((bp1.x)-wr1.x-3.05)<0.051 &&  Math.abs((bp1.z-wr1.z+7))<0.051)) || (Math.abs(((bp2.x)-wr1.x-3.05)<0.051 &&  Math.abs((bp2.z-wr1.z+7))<0.051)) || (Math.abs(((bp3.x)-wr1.x-3.05)<0.051 &&  Math.abs((bp3.z-wr1.z+7))<0.051)) || (Math.abs(((bp4.x)-wr1.x-3.05)<0.051 &&  Math.abs((bp4.z-wr1.z+7))<0.051)) || (Math.abs(((bp5.x)-wr1.x-3.05)<0.051 &&  Math.abs((bp5.z-wr1.z+7))<0.051)) || (Math.abs(((bp6.x)-wr1.x-3.05)<0.051 &&  Math.abs((bp6.z-wr1.z+7))<0.051)) || (Math.abs(((bp7.x)-wr1.x-3.05)<0.051 &&  Math.abs((bp7.z-wr1.z+7))<0.051)) ||(Math.abs(((bp8.x)-wr1.x-3.05)<0.051 &&  Math.abs((bp8.z-wr1.z+7))<0.051))){
            //rook1 right
          
               select3.position.set(px+0.45,0.2,pz-1.35+1.75)
               layer.add(select3)

        }
        if((Math.abs(((bp1.x)-wr1.x-5.05)<0.051 && Math.abs(((bp1.x)-wr1.x-5.05)>(-0.051)&& Math.abs((bp1.z-wr1.z+7))<0.051)))|| (Math.abs(((bp2.x)-wr1.x-5.05)<0.051 &&  Math.abs((bp2.z-wr1.z+7))<0.051)) && Math.abs(((bp2.x)-wr1.x-5.05)>(-0.051)) || (Math.abs(((bp3.x)-wr1.x-5.05)<0.051 && Math.abs((bp3.z-wr1.z+7))<0.051) && Math.abs(((bp3.x)-wr1.x-5.05)>(-0.051))) || (Math.abs(((bp4.x)-wr1.x-5.05)<0.051 && Math.abs((bp4.z-wr1.z+7))<0.051) && Math.abs(((bp4.x)-wr1.x-5.05)>(-0.051))) || (Math.abs(((bp5.x)-wr1.x-5.05)<0.051 && Math.abs((bp5.z-wr1.z+7))<0.051) && Math.abs(((bp5.x)-wr1.x-5.05)>(-0.051)))|| (Math.abs(((bp6.x)-wr1.x-5.05)<0.051 && Math.abs((bp6.z-wr1.z+7))<0.051)&& Math.abs(((bp6.x)-wr1.x-5.05)>(-0.051)))|| (Math.abs(((bp7.x)-wr1.x-5.05)<0.051 && Math.abs((bp7.z-wr1.z+7))<0.051)&& Math.abs(((bp7.x)-wr1.x-5.05)>(-0.051))) || (Math.abs(((bp8.x)-wr1.x-5.05)<0.051 && Math.abs((bp8.z-wr1.z+7))<0.051)&& Math.abs(((bp8.x)-wr1.x-5.05)>(-0.051)))){
            //rook1 left
           
            select2.position.set(px-0.75-0.8,0.2,pz-1.35+1.75)
               layer.add(select2)
            }


            
            if((Math.abs(((bp1.x)-wb2.x-3.05)<0.051 && Math.abs(((bp1.x)-wb2.x-3.05)>(-0.051)&& Math.abs((bp1.z-wb2.z+7))<0.051)))|| (Math.abs(((bp2.x)-wb2.x-3.05)<0.051 &&  Math.abs((bp2.z-wb2.z+7))<0.051)) && Math.abs(((bp2.x)-wb2.x-3.05)>(-0.051)) || (Math.abs(((bp3.x)-wb2.x-3.05)<0.051 && Math.abs((bp3.z-wb2.z+7))<0.051) && Math.abs(((bp3.x)-wb2.x-3.05)>(-0.051))) || (Math.abs(((bp4.x)-wb2.x-3.05)<0.051 && Math.abs((bp4.z-wb2.z+7))<0.051) && Math.abs(((bp4.x)-wb2.x-3.05)>(-0.051))) || (Math.abs(((bp5.x)-wb2.x-3.05)<0.051 && Math.abs((bp5.z-wb2.z+7))<0.051) && Math.abs(((bp5.x)-wb2.x-3.05)>(-0.051)))|| (Math.abs(((bp6.x)-wb2.x-3.05)<0.051 && Math.abs((bp6.z-wb2.z+7))<0.051)&& Math.abs(((bp6.x)-wb2.x-3.05)>(-0.051)))|| (Math.abs(((bp7.x)-wb2.x-3.05)<0.051 && Math.abs((bp7.z-wb2.z+7))<0.051)&& Math.abs(((bp7.x)-wb2.x-3.05)>(-0.051))) || (Math.abs(((bp8.x)-wb2.x-3.05)<0.051 && Math.abs((bp8.z-wb2.z+7))<0.051)&& Math.abs(((bp8.x)-wb2.x-3.05)>(-0.051)))){
                //bishop2 left
                
                select2.position.set(px-0.75-0.8,0.2,pz-1.35+1.75)
                layer.add(select2)
            }
            
            
        if( (Math.abs(((bp1.x)-wb2.x-1)<0.051 &&  Math.abs((bp1.z-wb2.z+7))<0.051)) || (Math.abs(((bp2.x)-wb2.x-1)<0.051 &&  Math.abs((bp2.z-wb2.z+7))<0.051)) || (Math.abs(((bp3.x)-wb2.x-1)<0.051 &&  Math.abs((bp3.z-wb2.z+7))<0.051)) || (Math.abs(((bp4.x)-wb2.x-1)<0.051 &&  Math.abs((bp4.z-wb2.z+7))<0.051)) || (Math.abs(((bp5.x)-wb2.x-1)<0.051 &&  Math.abs((bp5.z-wb2.z+7))<0.051)) || (Math.abs(((bp6.x)-wb2.x-1)<0.051 &&  Math.abs((bp6.z-wb2.z+7))<0.051)) || (Math.abs(((bp7.x)-wb2.x-1)<0.051 &&  Math.abs((bp7.z-wb2.z+7))<0.051)) ||(Math.abs(((bp8.x)-wb2.x-1)<0.051 &&  Math.abs((bp8.z-wb2.z+7))<0.051))){
            //bishop2 right
                   
               select3.position.set(px+0.45,0.2,pz-1.35+1.75)
               layer.add(select3)

        }
        if( (Math.abs(((bp1.x)-wb1.x-1.05)<0.051 &&  Math.abs((bp1.z-wb1.z+7))<0.051)) || (Math.abs(((bp2.x)-wb1.x-1.05)<0.051 &&  Math.abs((bp2.z-wb1.z+7))<0.051)) || (Math.abs(((bp3.x)-wb1.x-1.05)<0.051 &&  Math.abs((bp3.z-wb1.z+7))<0.051)) || (Math.abs(((bp4.x)-wb1.x-1.05)<0.051 &&  Math.abs((bp4.z-wb1.z+7))<0.051)) || (Math.abs(((bp5.x)-wb1.x-1.05)<0.051 &&  Math.abs((bp5.z-wb1.z+7))<0.051)) || (Math.abs(((bp6.x)-wb1.x-1.05)<0.051 &&  Math.abs((bp6.z-wb1.z+7))<0.051)) || (Math.abs(((bp7.x)-wb1.x-1.05)<0.051 &&  Math.abs((bp7.z-wb1.z+7))<0.051)) ||(Math.abs(((bp8.x)-wb1.x-1.05)<0.051 &&  Math.abs((bp8.z-wb1.z+7))<0.051))){
            //bishop1 right
            select3.position.set(px+0.45,0.2,pz-1.35+1.75)
            layer.add(select3)
            
        }
        
        if((Math.abs(((bp1.x)-wb1.x-3.05)<0.051 && Math.abs(((bp1.x)-wb1.x-3.05)>(-0.051)&& Math.abs((bp1.z-wb1.z+7))<0.051)))|| (Math.abs(((bp2.x)-wb1.x-3.05)<0.051 &&  Math.abs((bp2.z-wb1.z+7))<0.051)) && Math.abs(((bp2.x)-wb1.x-3.05)>(-0.051)) || (Math.abs(((bp3.x)-wb1.x-3.05)<0.051 && Math.abs((bp3.z-wb1.z+7))<0.051) && Math.abs(((bp3.x)-wb1.x-3.05)>(-0.051))) || (Math.abs(((bp4.x)-wb1.x-3.05)<0.051 && Math.abs((bp4.z-wb1.z+7))<0.051) && Math.abs(((bp4.x)-wb1.x-3.05)>(-0.051))) || (Math.abs(((bp5.x)-wb1.x-3.05)<0.051 && Math.abs((bp5.z-wb1.z+7))<0.051) && Math.abs(((bp5.x)-wb1.x-3.05)>(-0.051)))|| (Math.abs(((bp6.x)-wb1.x-3.05)<0.051 && Math.abs((bp6.z-wb1.z+7))<0.051)&& Math.abs(((bp6.x)-wb1.x-3.05)>(-0.051)))|| (Math.abs(((bp7.x)-wb1.x-3.05)<0.051 && Math.abs((bp7.z-wb1.z+7))<0.051)&& Math.abs(((bp7.x)-wb1.x-3.05)>(-0.051))) || (Math.abs(((bp8.x)-wb1.x-3.05)<0.051 && Math.abs((bp8.z-wb1.z+7))<0.051)&& Math.abs(((bp8.x)-wb1.x-3.05)>(-0.051)))){
            //bishop1 left
            select2.position.set(px-0.75-0.8,0.2,pz-1.35+1.75)
               layer.add(select2)
            }


            
            if((Math.abs(((bp1.x)-wk2.x-4.05)<0.051 && Math.abs(((bp1.x)-wk2.x-4.05)>(-0.051)&& Math.abs((bp1.z-wk2.z+7))<0.051)))|| (Math.abs(((bp2.x)-wk2.x-4.05)<0.051 &&  Math.abs((bp2.z-wk2.z+7))<0.051)) && Math.abs(((bp2.x)-wk2.x-4.05)>(-0.051)) || (Math.abs(((bp3.x)-wk2.x-4.05)<0.051 && Math.abs((bp3.z-wk2.z+7))<0.051) && Math.abs(((bp3.x)-wk2.x-4.05)>(-0.051))) || (Math.abs(((bp4.x)-wk2.x-4.05)<0.051 && Math.abs((bp4.z-wk2.z+7))<0.051) && Math.abs(((bp4.x)-wk2.x-4.05)>(-0.051))) || (Math.abs(((bp5.x)-wk2.x-4.05)<0.051 && Math.abs((bp5.z-wk2.z+7))<0.051) && Math.abs(((bp5.x)-wk2.x-4.05)>(-0.051)))|| (Math.abs(((bp6.x)-wk2.x-4.05)<0.051 && Math.abs((bp6.z-wk2.z+7))<0.051)&& Math.abs(((bp6.x)-wk2.x-4.05)>(-0.051)))|| (Math.abs(((bp7.x)-wk2.x-4.05)<0.051 && Math.abs((bp7.z-wk2.z+7))<0.051)&& Math.abs(((bp7.x)-wk2.x-4.05)>(-0.051))) || (Math.abs(((bp8.x)-wk2.x-4.05)<0.051 && Math.abs((bp8.z-wk2.z+7))<0.051)&& Math.abs(((bp8.x)-wk2.x-4.05)>(-0.051)))){
                //knight2 left
                
                select2.position.set(px-0.75-0.8,0.2,pz-1.35+1.75)
                layer.add(select2)
            }

            
            
            if( (Math.abs(((bp1.x)-wk2.x-2.05)<0.051 &&  Math.abs((bp1.z-wk2.z+7))<0.051)) || (Math.abs(((bp2.x)-wk2.x-2.05)<0.051 &&  Math.abs((bp2.z-wk2.z+7))<0.051)) || (Math.abs(((bp3.x)-wk2.x-2.05)<0.051 &&  Math.abs((bp3.z-wk2.z+7))<0.051)) || (Math.abs(((bp4.x)-wk2.x-2.05)<0.051 &&  Math.abs((bp4.z-wk2.z+7))<0.051)) || (Math.abs(((bp5.x)-wk2.x-2.05)<0.051 &&  Math.abs((bp5.z-wk2.z+7))<0.051)) || (Math.abs(((bp6.x)-wk2.x-2.05)<0.051 &&  Math.abs((bp6.z-wk2.z+7))<0.051)) || (Math.abs(((bp7.x)-wk2.x-2.05)<0.051 &&  Math.abs((bp7.z-wk2.z+7))<0.051)) ||(Math.abs(((bp8.x)-wk2.x-2.05)<0.051 &&  Math.abs((bp8.z-wk2.z+7))<0.051))){
                //knight2 right
                
                select3.position.set(px+0.45,0.2,pz-1.35+1.75)
                layer.add(select3)
                
            }
  
        if( (Math.abs(((bp1.x)-wk1.x-2.05)<0.051 &&  Math.abs((bp1.z-wk1.z+7))<0.051)) || (Math.abs(((bp2.x)-wk1.x-2.05)<0.051 &&  Math.abs((bp2.z-wk1.z+7))<0.051)) || (Math.abs(((bp3.x)-wk1.x-2.05)<0.051 &&  Math.abs((bp3.z-wk1.z+7))<0.051)) || (Math.abs(((bp4.x)-wk1.x-2.05)<0.051 &&  Math.abs((bp4.z-wk1.z+7))<0.051)) || (Math.abs(((bp5.x)-wk1.x-2.05)<0.051 &&  Math.abs((bp5.z-wk1.z+7))<0.051)) || (Math.abs(((bp6.x)-wk1.x-2.05)<0.051 &&  Math.abs((bp6.z-wk1.z+7))<0.051)) || (Math.abs(((bp7.x)-wk1.x-2.05)<0.051 &&  Math.abs((bp7.z-wk1.z+7))<0.051)) ||(Math.abs(((bp8.x)-wk1.x-2.05)<0.051 &&  Math.abs((bp8.z-wk1.z+7))<0.051))){
            //knight1 right
            select3.position.set(px+0.45,0.2,pz-1.35+1.75)
            layer.add(select3)
            
        }
        
        if((Math.abs(((bp1.x)-wk1.x-4.05)<0.051 && Math.abs(((bp1.x)-wk1.x-4.05)>(-0.051)&& Math.abs((bp1.z-wk1.z+7))<0.051)))|| (Math.abs(((bp2.x)-wk1.x-4.05)<0.051 &&  Math.abs((bp2.z-wk1.z+7))<0.051)) && Math.abs(((bp2.x)-wk1.x-4.05)>(-0.051)) || (Math.abs(((bp3.x)-wk1.x-4.05)<0.051 && Math.abs((bp3.z-wk1.z+7))<0.051) && Math.abs(((bp3.x)-wk1.x-4.05)>(-0.051))) || (Math.abs(((bp4.x)-wk1.x-4.05)<0.051 && Math.abs((bp4.z-wk1.z+7))<0.051) && Math.abs(((bp4.x)-wk1.x-4.05)>(-0.051))) || (Math.abs(((bp5.x)-wk1.x-4.05)<0.051 && Math.abs((bp5.z-wk1.z+7))<0.051) && Math.abs(((bp5.x)-wk1.x-4.05)>(-0.051)))|| (Math.abs(((bp6.x)-wk1.x-4.05)<0.051 && Math.abs((bp6.z-wk1.z+7))<0.051)&& Math.abs(((bp6.x)-wk1.x-4.05)>(-0.051)))|| (Math.abs(((bp7.x)-wk1.x-4.05)<0.051 && Math.abs((bp7.z-wk1.z+7))<0.051)&& Math.abs(((bp7.x)-wk1.x-4.05)>(-0.051))) || (Math.abs(((bp8.x)-wk1.x-4.05)<0.051 && Math.abs((bp8.z-wk1.z+7))<0.051)&& Math.abs(((bp8.x)-wk1.x-4.05)>(-0.051)))){
            //knight1 left
            select2.position.set(px-0.75-0.8,0.2,pz-1.35+1.75)
               layer.add(select2)
            }
     

    
        if((Math.abs((bp2.x-1)-wp1.x)<0.051 && Math.abs((bp2.z-wp1.z+6))<0.051) || (Math.abs((bp2.x-1)-wp2.x)<0.051 && Math.abs((bp2.z-wp2.z+6))<0.051) ||(Math.abs((bp2.x-1)-wp3.x)<0.051 && Math.abs((bp2.z-wp3.z+6))<0.051) ||(Math.abs((bp2.x-1)-wp4.x)<0.051 && Math.abs((bp2.z-wp4.z+6))<0.051) ||(Math.abs((bp2.x-1)-wp5.x)<0.051 && Math.abs((bp2.z-wp5.z+6))<0.051) ||(Math.abs((bp2.x-1)-wp6.x)<0.051 && Math.abs((bp2.z-wp6.z+6))<0.051) ||(Math.abs((bp2.x-1)-wp7.x)<0.051 && Math.abs((bp2.z-wp7.z+6))<0.051) ||(Math.abs((bp2.x-1)-wp8.x)<0.051 && Math.abs((bp2.z-wp8.z+6))<0.051) ){
            select2.position.set(px-0.75-0.8,0.2,pz-1.35+1.75)
            layer.add(select2)
        }
        if((Math.abs((bp3.x-1)-wp1.x)<0.051 && Math.abs((bp3.z-wp1.z+6))<0.051) || (Math.abs((bp3.x-1)-wp2.x)<0.051 && Math.abs((bp3.z-wp2.z+6))<0.051) ||(Math.abs((bp3.x-1)-wp3.x)<0.051 && Math.abs((bp3.z-wp3.z+6))<0.051) ||(Math.abs((bp3.x-1)-wp4.x)<0.051 && Math.abs((bp3.z-wp4.z+6))<0.051) ||(Math.abs((bp3.x-1)-wp5.x)<0.051 && Math.abs((bp3.z-wp5.z+6))<0.051) ||(Math.abs((bp3.x-1)-wp6.x)<0.051 && Math.abs((bp3.z-wp6.z+6))<0.051) ||(Math.abs((bp3.x-1)-wp7.x)<0.051 && Math.abs((bp3.z-wp7.z+6))<0.051) ||(Math.abs((bp3.x-1)-wp8.x)<0.051 && Math.abs((bp3.z-wp8.z+6))<0.051) ){
            select2.position.set(px-0.75-0.8,0.2,pz-1.35+1.75)
            layer.add(select2)
        }
        if((Math.abs((bp4.x-1)-wp1.x)<0.051 && Math.abs((bp4.z-wp1.z+6))<0.051) || (Math.abs((bp4.x-1)-wp2.x)<0.051 && Math.abs((bp4.z-wp2.z+6))<0.051) ||(Math.abs((bp4.x-1)-wp3.x)<0.051 && Math.abs((bp4.z-wp3.z+6))<0.051) ||(Math.abs((bp4.x-1)-wp4.x)<0.051 && Math.abs((bp4.z-wp4.z+6))<0.051) ||(Math.abs((bp4.x-1)-wp5.x)<0.051 && Math.abs((bp4.z-wp5.z+6))<0.051) ||(Math.abs((bp4.x-1)-wp6.x)<0.051 && Math.abs((bp4.z-wp6.z+6))<0.051) ||(Math.abs((bp4.x-1)-wp7.x)<0.051 && Math.abs((bp4.z-wp7.z+6))<0.051) ||(Math.abs((bp4.x-1)-wp8.x)<0.051 && Math.abs((bp4.z-wp8.z+6))<0.051) ){
            select2.position.set(px-0.75-0.8,0.2,pz-1.35+1.75)
            layer.add(select2)
        }
        if((Math.abs((bp5.x-1)-wp1.x)<0.051 && Math.abs((bp5.z-wp1.z+6))<0.051) || (Math.abs((bp5.x-1)-wp2.x)<0.051 && Math.abs((bp5.z-wp2.z+6))<0.051) ||(Math.abs((bp5.x-1)-wp3.x)<0.051 && Math.abs((bp5.z-wp3.z+6))<0.051) ||(Math.abs((bp5.x-1)-wp4.x)<0.051 && Math.abs((bp5.z-wp4.z+6))<0.051) ||(Math.abs((bp5.x-1)-wp5.x)<0.051 && Math.abs((bp5.z-wp5.z+6))<0.051) ||(Math.abs((bp5.x-1)-wp6.x)<0.051 && Math.abs((bp5.z-wp6.z+6))<0.051) ||(Math.abs((bp5.x-1)-wp7.x)<0.051 && Math.abs((bp5.z-wp7.z+6))<0.051) ||(Math.abs((bp5.x-1)-wp8.x)<0.051 && Math.abs((bp5.z-wp8.z+6))<0.051) ){
            select2.position.set(px-0.75-0.8,0.2,pz-1.35+1.75)
            layer.add(select2)
        }
        if((Math.abs((bp6.x-1)-wp1.x)<0.051 && Math.abs((bp6.z-wp1.z+6))<0.051) || (Math.abs((bp6.x-1)-wp2.x)<0.051 && Math.abs((bp6.z-wp2.z+6))<0.051) ||(Math.abs((bp6.x-1)-wp3.x)<0.051 && Math.abs((bp6.z-wp3.z+6))<0.051) ||(Math.abs((bp6.x-1)-wp4.x)<0.051 && Math.abs((bp6.z-wp4.z+6))<0.051) ||(Math.abs((bp6.x-1)-wp5.x)<0.051 && Math.abs((bp6.z-wp5.z+6))<0.051) ||(Math.abs((bp6.x-1)-wp6.x)<0.051 && Math.abs((bp6.z-wp6.z+6))<0.051) ||(Math.abs((bp6.x-1)-wp7.x)<0.051 && Math.abs((bp6.z-wp7.z+6))<0.051) ||(Math.abs((bp6.x-1)-wp8.x)<0.051 && Math.abs((bp6.z-wp8.z+6))<0.051) ){
            select2.position.set(px-0.75-0.8,0.2,pz-1.35+1.75)
            layer.add(select2)
        }
        if((Math.abs((bp7.x-1)-wp1.x)<0.051 && Math.abs((bp7.z-wp1.z+6))<0.051) || (Math.abs((bp7.x-1)-wp2.x)<0.051 && Math.abs((bp7.z-wp2.z+6))<0.051) ||(Math.abs((bp7.x-1)-wp3.x)<0.051 && Math.abs((bp7.z-wp3.z+6))<0.051) ||(Math.abs((bp7.x-1)-wp4.x)<0.051 && Math.abs((bp7.z-wp4.z+6))<0.051) ||(Math.abs((bp7.x-1)-wp5.x)<0.051 && Math.abs((bp7.z-wp5.z+6))<0.051) ||(Math.abs((bp7.x-1)-wp6.x)<0.051 && Math.abs((bp7.z-wp6.z+6))<0.051) ||(Math.abs((bp7.x-1)-wp7.x)<0.051 && Math.abs((bp7.z-wp7.z+6))<0.051) ||(Math.abs((bp7.x-1)-wp8.x)<0.051 && Math.abs((bp7.z-wp8.z+6))<0.051) ){
            select2.position.set(px-0.75-0.8,0.2,pz-1.35+1.75)
            layer.add(select2)
        }
        if((Math.abs((bp8.x-1)-wp1.x)<0.051 && Math.abs((bp8.z-wp1.z+6))<0.051) || (Math.abs((bp8.x-1)-wp2.x)<0.051 && Math.abs((bp8.z-wp2.z+6))<0.051) ||(Math.abs((bp8.x-1)-wp3.x)<0.051 && Math.abs((bp8.z-wp3.z+6))<0.051) ||(Math.abs((bp8.x-1)-wp4.x)<0.051 && Math.abs((bp8.z-wp4.z+6))<0.051) ||(Math.abs((bp8.x-1)-wp5.x)<0.051 && Math.abs((bp8.z-wp5.z+6))<0.051) ||(Math.abs((bp8.x-1)-wp6.x)<0.051 && Math.abs((bp8.z-wp6.z+6))<0.051) ||(Math.abs((bp8.x-1)-wp7.x)<0.051 && Math.abs((bp8.z-wp7.z+6))<0.051) ||(Math.abs((bp8.x-1)-wp8.x)<0.051 && Math.abs((bp8.z-wp8.z+6))<0.051) ){
            select2.position.set(px-0.75-0.8,0.2,pz-1.35+1.75)
            layer.add(select2)
        }




        if((Math.abs((bp1.x+1)-wp1.x)<0.051 && Math.abs((bp1.z-wp1.z+6))<0.051) ||(Math.abs((bp1.x+1)-wp2.x)<0.051 && Math.abs((bp1.z-wp2.z+6))<0.051) ||(Math.abs((bp1.x+1)-wp3.x)<0.051 && Math.abs((bp1.z-wp3.z+6))<0.051) || (Math.abs((bp1.x+1)-wp4.x)<0.051 && Math.abs((bp1.z-wp4.z+6))<0.051) || (Math.abs((bp1.x+1)-wp5.x)<0.051 && Math.abs((bp1.z-wp5.z+6))<0.051) || (Math.abs((bp1.x+1)-wp6.x)<0.051 && Math.abs((bp1.z-wp6.z+6))<0.051) || (Math.abs((bp1.x+1)-wp7.x)<0.051 && Math.abs((bp1.z-wp7.z+6))<0.051)|| (Math.abs((bp1.x+1)-wp8.x)<0.051 && Math.abs((bp1.z-wp8.z+6))<0.051)){
            select3.position.set(px+0.45,0.2,pz-1.35+1.75)
            layer.add(select3)
        }
        if((Math.abs((bp2.x+1)-wp1.x)<0.051 && Math.abs((bp2.z-wp1.z+6))<0.051) ||(Math.abs((bp2.x+1)-wp2.x)<0.051 && Math.abs((bp2.z-wp2.z+6))<0.051) ||(Math.abs((bp2.x+1)-wp3.x)<0.051 && Math.abs((bp2.z-wp3.z+6))<0.051) || (Math.abs((bp2.x+1)-wp4.x)<0.051 && Math.abs((bp2.z-wp4.z+6))<0.051) || (Math.abs((bp2.x+1)-wp5.x)<0.051 && Math.abs((bp2.z-wp5.z+6))<0.051) || (Math.abs((bp2.x+1)-wp6.x)<0.051 && Math.abs((bp2.z-wp6.z+6))<0.051) || (Math.abs((bp2.x+1)-wp7.x)<0.051 && Math.abs((bp2.z-wp7.z+6))<0.051)|| (Math.abs((bp2.x+1)-wp8.x)<0.051 && Math.abs((bp2.z-wp8.z+6))<0.051)){
            select3.position.set(px+0.45,0.2,pz-1.35+1.75)
            layer.add(select3)
        }
        if((Math.abs((bp3.x+1)-wp1.x)<0.051 && Math.abs((bp3.z-wp1.z+6))<0.051) ||(Math.abs((bp3.x+1)-wp2.x)<0.051 && Math.abs((bp3.z-wp2.z+6))<0.051) ||(Math.abs((bp3.x+1)-wp3.x)<0.051 && Math.abs((bp3.z-wp3.z+6))<0.051) || (Math.abs((bp3.x+1)-wp4.x)<0.051 && Math.abs((bp3.z-wp4.z+6))<0.051) || (Math.abs((bp3.x+1)-wp5.x)<0.051 && Math.abs((bp3.z-wp5.z+6))<0.051) || (Math.abs((bp3.x+1)-wp6.x)<0.051 && Math.abs((bp3.z-wp6.z+6))<0.051) || (Math.abs((bp3.x+1)-wp7.x)<0.051 && Math.abs((bp3.z-wp7.z+6))<0.051)|| (Math.abs((bp3.x+1)-wp8.x)<0.051 && Math.abs((bp3.z-wp8.z+6))<0.051)){
            select3.position.set(px+0.45,0.2,pz-1.35+1.75)
            layer.add(select3)
        }
        if((Math.abs((bp4.x+1)-wp1.x)<0.051 && Math.abs((bp4.z-wp1.z+6))<0.051) ||(Math.abs((bp4.x+1)-wp2.x)<0.051 && Math.abs((bp4.z-wp2.z+6))<0.051) ||(Math.abs((bp4.x+1)-wp3.x)<0.051 && Math.abs((bp4.z-wp3.z+6))<0.051) || (Math.abs((bp4.x+1)-wp4.x)<0.051 && Math.abs((bp4.z-wp4.z+6))<0.051) || (Math.abs((bp4.x+1)-wp5.x)<0.051 && Math.abs((bp4.z-wp5.z+6))<0.051) || (Math.abs((bp4.x+1)-wp6.x)<0.051 && Math.abs((bp4.z-wp6.z+6))<0.051) || (Math.abs((bp4.x+1)-wp7.x)<0.051 && Math.abs((bp4.z-wp7.z+6))<0.051)|| (Math.abs((bp4.x+1)-wp8.x)<0.051 && Math.abs((bp4.z-wp8.z+6))<0.051)){
            select3.position.set(px+0.45,0.2,pz-1.35+1.75)
            layer.add(select3)
        }
        if((Math.abs((bp5.x+1)-wp1.x)<0.051 && Math.abs((bp5.z-wp1.z+6))<0.051) ||(Math.abs((bp5.x+1)-wp2.x)<0.051 && Math.abs((bp5.z-wp2.z+6))<0.051) ||(Math.abs((bp5.x+1)-wp3.x)<0.051 && Math.abs((bp5.z-wp3.z+6))<0.051) || (Math.abs((bp5.x+1)-wp4.x)<0.051 && Math.abs((bp5.z-wp4.z+6))<0.051) || (Math.abs((bp5.x+1)-wp5.x)<0.051 && Math.abs((bp5.z-wp5.z+6))<0.051) || (Math.abs((bp5.x+1)-wp6.x)<0.051 && Math.abs((bp5.z-wp6.z+6))<0.051) || (Math.abs((bp5.x+1)-wp7.x)<0.051 && Math.abs((bp5.z-wp7.z+6))<0.051)|| (Math.abs((bp5.x+1)-wp8.x)<0.051 && Math.abs((bp5.z-wp8.z+6))<0.051)){
            select3.position.set(px+0.45,0.2,pz-1.35+1.75)
            layer.add(select3)
        }
        if((Math.abs((bp6.x+1)-wp1.x)<0.051 && Math.abs((bp6.z-wp1.z+6))<0.051) ||(Math.abs((bp6.x+1)-wp2.x)<0.051 && Math.abs((bp6.z-wp2.z+6))<0.051) ||(Math.abs((bp6.x+1)-wp3.x)<0.051 && Math.abs((bp6.z-wp3.z+6))<0.051) || (Math.abs((bp6.x+1)-wp4.x)<0.051 && Math.abs((bp6.z-wp4.z+6))<0.051) || (Math.abs((bp6.x+1)-wp5.x)<0.051 && Math.abs((bp6.z-wp5.z+6))<0.051) || (Math.abs((bp6.x+1)-wp6.x)<0.051 && Math.abs((bp6.z-wp6.z+6))<0.051) || (Math.abs((bp6.x+1)-wp7.x)<0.051 && Math.abs((bp6.z-wp7.z+6))<0.051)|| (Math.abs((bp6.x+1)-wp8.x)<0.051 && Math.abs((bp6.z-wp8.z+6))<0.051)){
            select3.position.set(px+0.45,0.2,pz-1.35+1.75)
            layer.add(select3)
        }
        if((Math.abs((bp7.x+1)-wp1.x)<0.051 && Math.abs((bp7.z-wp1.z+6))<0.051) ||(Math.abs((bp7.x+1)-wp2.x)<0.051 && Math.abs((bp7.z-wp2.z+6))<0.051) ||(Math.abs((bp7.x+1)-wp3.x)<0.051 && Math.abs((bp7.z-wp3.z+6))<0.051) || (Math.abs((bp7.x+1)-wp4.x)<0.051 && Math.abs((bp7.z-wp4.z+6))<0.051) || (Math.abs((bp7.x+1)-wp5.x)<0.051 && Math.abs((bp7.z-wp5.z+6))<0.051) || (Math.abs((bp7.x+1)-wp6.x)<0.051 && Math.abs((bp7.z-wp6.z+6))<0.051) || (Math.abs((bp7.x+1)-wp7.x)<0.051 && Math.abs((bp7.z-wp7.z+6))<0.051)|| (Math.abs((bp7.x+1)-wp8.x)<0.051 && Math.abs((bp7.z-wp8.z+6))<0.051)){
            select3.position.set(px+0.45,0.2,pz-1.35+1.75)
            layer.add(select3)
        }
        if((Math.abs((bp8.x+1)-wp1.x)<0.051 && Math.abs((bp8.z-wp1.z+6))<0.051) ||(Math.abs((bp8.x+1)-wp2.x)<0.051 && Math.abs((bp8.z-wp2.z+6))<0.051) ||(Math.abs((bp8.x+1)-wp3.x)<0.051 && Math.abs((bp8.z-wp3.z+6))<0.051) || (Math.abs((bp8.x+1)-wp4.x)<0.051 && Math.abs((bp8.z-wp4.z+6))<0.051) || (Math.abs((bp8.x+1)-wp5.x)<0.051 && Math.abs((bp8.z-wp5.z+6))<0.051) || (Math.abs((bp8.x+1)-wp6.x)<0.051 && Math.abs((bp8.z-wp6.z+6))<0.051) || (Math.abs((bp8.x+1)-wp7.x)<0.051 && Math.abs((bp8.z-wp7.z+6))<0.051)|| (Math.abs((bp8.x+1)-wp8.x)<0.051 && Math.abs((bp8.z-wp8.z+6))<0.051)){
            select3.position.set(px+0.45,0.2,pz-1.35+1.75)
            layer.add(select3)
        }


      
        domEvents.addEventListener(select3,'click',()=>{
            console.log("Hii");
            obj.position.set(px-1,-0.8,pz+2)
            
        })





        domEvents.addEventListener(select4, 'click', () => {
            if (layer.getObjectByName('select')) {

                obj.position.set(px, -0.8, pz + 2)
               
                if (t == 'a') {
                    bp1 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
            
                }
                if (t == 'b') {

                    bp2 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
                    
                    
                }
                if (t == 'c') {

                    bp3 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
                }
                if (t == 'd') {

                    bp4 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
                }
                if (t == 'e') {

                    bp5 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
                }
                if (t == 'f') {

                    bp6 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
                }
                if (t == 'g') {

                    bp7 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
                }
                if (t == 'h') {

                    bp8 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
                }


            }
            rmvLyr()

            domEvents.removeEventListener(select2, 'click')
            domEvents.removeEventListener(select, 'click')
            turn = 'w';
            clicked = false;
        })
        domEvents.addEventListener(select, 'click', () => {
            if (layer.getObjectByName('select')) {


                obj.position.set(px, -0.8, pz + 1)
                if (t == 'a') {
                    bp1 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
                }
                if (t == 'b') {

                    bp2 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
                   
                }
                console.log(bp1.x);

                if (t == 'c') {

                    bp3 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
                }
                if (t == 'd') {

                    bp4 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
                }
                if (t == 'e') {

                    bp5 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
                }
                if (t == 'f') {

                    bp6 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
                }
                if (t == 'g') {

                    bp7 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
                }
                if (t == 'h') {

                    bp8 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
                }


            }
            rmvLyr()

            domEvents.removeEventListener(select, 'click')
            domEvents.removeEventListener(select2, 'click')
            turn = 'w';
            clicked = false;
        })

    }
    else {
        
        let select = new THREE.Mesh(plane_geo, plane_mat);
        let select2 = new THREE.Mesh(plane_geo, plane_mat);
        let select3 = new THREE.Mesh(plane_geo, plane_mat);
        select.position.set(px - 0.55, 0.2, pz + 0.35)
        select.rotation.x = -90 * (Math.PI / 180)
        select2.rotation.x = -90 * (Math.PI / 180)
        select3.rotation.x = -90 * (Math.PI / 180)
        select.name = 'select'
        layer.add(select)

        if((Math.abs((bp1.x-1)-wp1.x)<0.051 && Math.abs((bp1.z-wp1.z+6))<0.051) || (Math.abs((bp1.x-1)-wp2.x)<0.051 && Math.abs((bp1.z-wp2.z+6))<0.051) ||(Math.abs((bp1.x-1)-wp3.x)<0.051 && Math.abs((bp1.z-wp3.z+6))<0.051) ||(Math.abs((bp1.x-1)-wp4.x)<0.051 && Math.abs((bp1.z-wp4.z+6))<0.051) ||(Math.abs((bp1.x-1)-wp5.x)<0.051 && Math.abs((bp1.z-wp5.z+6))<0.051) ||(Math.abs((bp1.x-1)-wp6.x)<0.051 && Math.abs((bp1.z-wp6.z+6))<0.051) ||(Math.abs((bp1.x-1)-wp7.x)<0.051 && Math.abs((bp1.z-wp7.z+6))<0.051) ||(Math.abs((bp1.x-1)-wp8.x)<0.051 && Math.abs((bp1.z-wp8.z+6))<0.051) ){
           
            select2.position.set(px-0.75-0.8,0.2,pz-1.35+1.75)
            layer.add(select2)
        }
       
        if((Math.abs(((bp1.x)-wr2.x-5.05)<0.051 && Math.abs(((bp1.x)-wr2.x-5.05)>(-0.051)&& Math.abs((bp1.z-wr2.z+7))<0.051)))|| (Math.abs(((bp2.x)-wr2.x-5.05)<0.051 &&  Math.abs((bp2.z-wr2.z+7))<0.051)) && Math.abs(((bp2.x)-wr2.x-5.05)>(-0.051)) || (Math.abs(((bp3.x)-wr2.x-5.05)<0.051 && Math.abs((bp3.z-wr2.z+7))<0.051) && Math.abs(((bp3.x)-wr2.x-5.05)>(-0.051))) || (Math.abs(((bp4.x)-wr2.x-5.05)<0.051 && Math.abs((bp4.z-wr2.z+7))<0.051) && Math.abs(((bp4.x)-wr2.x-5.05)>(-0.051))) || (Math.abs(((bp5.x)-wr2.x-5.05)<0.051 && Math.abs((bp5.z-wr2.z+7))<0.051) && Math.abs(((bp5.x)-wr2.x-5.05)>(-0.051)))|| (Math.abs(((bp6.x)-wr2.x-5.05)<0.051 && Math.abs((bp6.z-wr2.z+7))<0.051)&& Math.abs(((bp6.x)-wr2.x-5.05)>(-0.051)))|| (Math.abs(((bp7.x)-wr2.x-5.05)<0.051 && Math.abs((bp7.z-wr2.z+7))<0.051)&& Math.abs(((bp7.x)-wr2.x-5.05)>(-0.051))) || (Math.abs(((bp8.x)-wr2.x-5.05)<0.051 && Math.abs((bp8.z-wr2.z+7))<0.051)&& Math.abs(((bp8.x)-wr2.x-5.05)>(-0.051)))){
       //rook2 left
 
        select2.position.set(px-0.75-0.8,0.2,pz-1.35+1.75)
           layer.add(select2)
        }
        
        if( (Math.abs(((bp1.x)-wr2.x-3.05)<0.051 &&  Math.abs((bp1.z-wr2.z+7))<0.051)) || (Math.abs(((bp2.x)-wr2.x-3.05)<0.051 &&  Math.abs((bp2.z-wr2.z+7))<0.051)) || (Math.abs(((bp3.x)-wr2.x-3.05)<0.051 &&  Math.abs((bp3.z-wr2.z+7))<0.051)) || (Math.abs(((bp4.x)-wr2.x-3.05)<0.051 &&  Math.abs((bp4.z-wr2.z+7))<0.051)) || (Math.abs(((bp5.x)-wr2.x-3.05)<0.051 &&  Math.abs((bp5.z-wr2.z+7))<0.051)) || (Math.abs(((bp6.x)-wr2.x-3.05)<0.051 &&  Math.abs((bp6.z-wr2.z+7))<0.051)) || (Math.abs(((bp7.x)-wr2.x-3.05)<0.051 &&  Math.abs((bp7.z-wr2.z+7))<0.051)) ||(Math.abs(((bp8.x)-wr2.x-3.05)<0.051 &&  Math.abs((bp8.z-wr2.z+7))<0.051))){
            //rook2 right
                   
               select3.position.set(px+0.45,0.2,pz-1.35+1.75)
               layer.add(select3)

        }
        if( (Math.abs(((bp1.x)-wr1.x-3.05)<0.051 &&  Math.abs((bp1.z-wr1.z+7))<0.051)) || (Math.abs(((bp2.x)-wr1.x-3.05)<0.051 &&  Math.abs((bp2.z-wr1.z+7))<0.051)) || (Math.abs(((bp3.x)-wr1.x-3.05)<0.051 &&  Math.abs((bp3.z-wr1.z+7))<0.051)) || (Math.abs(((bp4.x)-wr1.x-3.05)<0.051 &&  Math.abs((bp4.z-wr1.z+7))<0.051)) || (Math.abs(((bp5.x)-wr1.x-3.05)<0.051 &&  Math.abs((bp5.z-wr1.z+7))<0.051)) || (Math.abs(((bp6.x)-wr1.x-3.05)<0.051 &&  Math.abs((bp6.z-wr1.z+7))<0.051)) || (Math.abs(((bp7.x)-wr1.x-3.05)<0.051 &&  Math.abs((bp7.z-wr1.z+7))<0.051)) ||(Math.abs(((bp8.x)-wr1.x-3.05)<0.051 &&  Math.abs((bp8.z-wr1.z+7))<0.051))){
            //rook1 right
          
               select3.position.set(px+0.45,0.2,pz-1.35+1.75)
               layer.add(select3)

        }
        if((Math.abs(((bp1.x)-wr1.x-5.05)<0.051 && Math.abs(((bp1.x)-wr1.x-5.05)>(-0.051)&& Math.abs((bp1.z-wr1.z+7))<0.051)))|| (Math.abs(((bp2.x)-wr1.x-5.05)<0.051 &&  Math.abs((bp2.z-wr1.z+7))<0.051)) && Math.abs(((bp2.x)-wr1.x-5.05)>(-0.051)) || (Math.abs(((bp3.x)-wr1.x-5.05)<0.051 && Math.abs((bp3.z-wr1.z+7))<0.051) && Math.abs(((bp3.x)-wr1.x-5.05)>(-0.051))) || (Math.abs(((bp4.x)-wr1.x-5.05)<0.051 && Math.abs((bp4.z-wr1.z+7))<0.051) && Math.abs(((bp4.x)-wr1.x-5.05)>(-0.051))) || (Math.abs(((bp5.x)-wr1.x-5.05)<0.051 && Math.abs((bp5.z-wr1.z+7))<0.051) && Math.abs(((bp5.x)-wr1.x-5.05)>(-0.051)))|| (Math.abs(((bp6.x)-wr1.x-5.05)<0.051 && Math.abs((bp6.z-wr1.z+7))<0.051)&& Math.abs(((bp6.x)-wr1.x-5.05)>(-0.051)))|| (Math.abs(((bp7.x)-wr1.x-5.05)<0.051 && Math.abs((bp7.z-wr1.z+7))<0.051)&& Math.abs(((bp7.x)-wr1.x-5.05)>(-0.051))) || (Math.abs(((bp8.x)-wr1.x-5.05)<0.051 && Math.abs((bp8.z-wr1.z+7))<0.051)&& Math.abs(((bp8.x)-wr1.x-5.05)>(-0.051)))){
            //rook1 left
           
            select2.position.set(px-0.75-0.8,0.2,pz-1.35+1.75)
               layer.add(select2)
            }


            
            if((Math.abs(((bp1.x)-wb2.x-3.05)<0.051 && Math.abs(((bp1.x)-wb2.x-3.05)>(-0.051)&& Math.abs((bp1.z-wb2.z+7))<0.051)))|| (Math.abs(((bp2.x)-wb2.x-3.05)<0.051 &&  Math.abs((bp2.z-wb2.z+7))<0.051)) && Math.abs(((bp2.x)-wb2.x-3.05)>(-0.051)) || (Math.abs(((bp3.x)-wb2.x-3.05)<0.051 && Math.abs((bp3.z-wb2.z+7))<0.051) && Math.abs(((bp3.x)-wb2.x-3.05)>(-0.051))) || (Math.abs(((bp4.x)-wb2.x-3.05)<0.051 && Math.abs((bp4.z-wb2.z+7))<0.051) && Math.abs(((bp4.x)-wb2.x-3.05)>(-0.051))) || (Math.abs(((bp5.x)-wb2.x-3.05)<0.051 && Math.abs((bp5.z-wb2.z+7))<0.051) && Math.abs(((bp5.x)-wb2.x-3.05)>(-0.051)))|| (Math.abs(((bp6.x)-wb2.x-3.05)<0.051 && Math.abs((bp6.z-wb2.z+7))<0.051)&& Math.abs(((bp6.x)-wb2.x-3.05)>(-0.051)))|| (Math.abs(((bp7.x)-wb2.x-3.05)<0.051 && Math.abs((bp7.z-wb2.z+7))<0.051)&& Math.abs(((bp7.x)-wb2.x-3.05)>(-0.051))) || (Math.abs(((bp8.x)-wb2.x-3.05)<0.051 && Math.abs((bp8.z-wb2.z+7))<0.051)&& Math.abs(((bp8.x)-wb2.x-3.05)>(-0.051)))){
                //bishop2 left
                
                select2.position.set(px-0.75-0.8,0.2,pz-1.35+1.75)
                layer.add(select2)
            }
            
            
        if( (Math.abs(((bp1.x)-wb2.x-1)<0.051 &&  Math.abs((bp1.z-wb2.z+7))<0.051)) || (Math.abs(((bp2.x)-wb2.x-1)<0.051 &&  Math.abs((bp2.z-wb2.z+7))<0.051)) || (Math.abs(((bp3.x)-wb2.x-1)<0.051 &&  Math.abs((bp3.z-wb2.z+7))<0.051)) || (Math.abs(((bp4.x)-wb2.x-1)<0.051 &&  Math.abs((bp4.z-wb2.z+7))<0.051)) || (Math.abs(((bp5.x)-wb2.x-1)<0.051 &&  Math.abs((bp5.z-wb2.z+7))<0.051)) || (Math.abs(((bp6.x)-wb2.x-1)<0.051 &&  Math.abs((bp6.z-wb2.z+7))<0.051)) || (Math.abs(((bp7.x)-wb2.x-1)<0.051 &&  Math.abs((bp7.z-wb2.z+7))<0.051)) ||(Math.abs(((bp8.x)-wb2.x-1)<0.051 &&  Math.abs((bp8.z-wb2.z+7))<0.051))){
            //bishop2 right
                   
               select3.position.set(px+0.45,0.2,pz-1.35+1.75)
               layer.add(select3)

        }
        if( (Math.abs(((bp1.x)-wb1.x-1.05)<0.051 &&  Math.abs((bp1.z-wb1.z+7))<0.051)) || (Math.abs(((bp2.x)-wb1.x-1.05)<0.051 &&  Math.abs((bp2.z-wb1.z+7))<0.051)) || (Math.abs(((bp3.x)-wb1.x-1.05)<0.051 &&  Math.abs((bp3.z-wb1.z+7))<0.051)) || (Math.abs(((bp4.x)-wb1.x-1.05)<0.051 &&  Math.abs((bp4.z-wb1.z+7))<0.051)) || (Math.abs(((bp5.x)-wb1.x-1.05)<0.051 &&  Math.abs((bp5.z-wb1.z+7))<0.051)) || (Math.abs(((bp6.x)-wb1.x-1.05)<0.051 &&  Math.abs((bp6.z-wb1.z+7))<0.051)) || (Math.abs(((bp7.x)-wb1.x-1.05)<0.051 &&  Math.abs((bp7.z-wb1.z+7))<0.051)) ||(Math.abs(((bp8.x)-wb1.x-1.05)<0.051 &&  Math.abs((bp8.z-wb1.z+7))<0.051))){
            //bishop1 right
            select3.position.set(px+0.45,0.2,pz-1.35+1.75)
            layer.add(select3)
            
        }
        
        if((Math.abs(((bp1.x)-wb1.x-3.05)<0.051 && Math.abs(((bp1.x)-wb1.x-3.05)>(-0.051)&& Math.abs((bp1.z-wb1.z+7))<0.051)))|| (Math.abs(((bp2.x)-wb1.x-3.05)<0.051 &&  Math.abs((bp2.z-wb1.z+7))<0.051)) && Math.abs(((bp2.x)-wb1.x-3.05)>(-0.051)) || (Math.abs(((bp3.x)-wb1.x-3.05)<0.051 && Math.abs((bp3.z-wb1.z+7))<0.051) && Math.abs(((bp3.x)-wb1.x-3.05)>(-0.051))) || (Math.abs(((bp4.x)-wb1.x-3.05)<0.051 && Math.abs((bp4.z-wb1.z+7))<0.051) && Math.abs(((bp4.x)-wb1.x-3.05)>(-0.051))) || (Math.abs(((bp5.x)-wb1.x-3.05)<0.051 && Math.abs((bp5.z-wb1.z+7))<0.051) && Math.abs(((bp5.x)-wb1.x-3.05)>(-0.051)))|| (Math.abs(((bp6.x)-wb1.x-3.05)<0.051 && Math.abs((bp6.z-wb1.z+7))<0.051)&& Math.abs(((bp6.x)-wb1.x-3.05)>(-0.051)))|| (Math.abs(((bp7.x)-wb1.x-3.05)<0.051 && Math.abs((bp7.z-wb1.z+7))<0.051)&& Math.abs(((bp7.x)-wb1.x-3.05)>(-0.051))) || (Math.abs(((bp8.x)-wb1.x-3.05)<0.051 && Math.abs((bp8.z-wb1.z+7))<0.051)&& Math.abs(((bp8.x)-wb1.x-3.05)>(-0.051)))){
            //bishop1 left
            select2.position.set(px-0.75-0.8,0.2,pz-1.35+1.75)
               layer.add(select2)
            }


            
            if((Math.abs(((bp1.x)-wk2.x-4.05)<0.051 && Math.abs(((bp1.x)-wk2.x-4.05)>(-0.051)&& Math.abs((bp1.z-wk2.z+7))<0.051)))|| (Math.abs(((bp2.x)-wk2.x-4.05)<0.051 &&  Math.abs((bp2.z-wk2.z+7))<0.051)) && Math.abs(((bp2.x)-wk2.x-4.05)>(-0.051)) || (Math.abs(((bp3.x)-wk2.x-4.05)<0.051 && Math.abs((bp3.z-wk2.z+7))<0.051) && Math.abs(((bp3.x)-wk2.x-4.05)>(-0.051))) || (Math.abs(((bp4.x)-wk2.x-4.05)<0.051 && Math.abs((bp4.z-wk2.z+7))<0.051) && Math.abs(((bp4.x)-wk2.x-4.05)>(-0.051))) || (Math.abs(((bp5.x)-wk2.x-4.05)<0.051 && Math.abs((bp5.z-wk2.z+7))<0.051) && Math.abs(((bp5.x)-wk2.x-4.05)>(-0.051)))|| (Math.abs(((bp6.x)-wk2.x-4.05)<0.051 && Math.abs((bp6.z-wk2.z+7))<0.051)&& Math.abs(((bp6.x)-wk2.x-4.05)>(-0.051)))|| (Math.abs(((bp7.x)-wk2.x-4.05)<0.051 && Math.abs((bp7.z-wk2.z+7))<0.051)&& Math.abs(((bp7.x)-wk2.x-4.05)>(-0.051))) || (Math.abs(((bp8.x)-wk2.x-4.05)<0.051 && Math.abs((bp8.z-wk2.z+7))<0.051)&& Math.abs(((bp8.x)-wk2.x-4.05)>(-0.051)))){
                //knight2 left
                
                select2.position.set(px-0.75-0.8,0.2,pz-1.35+1.75)
                layer.add(select2)
            }

            
            
            if( (Math.abs(((bp1.x)-wk2.x-2.05)<0.051 &&  Math.abs((bp1.z-wk2.z+7))<0.051)) || (Math.abs(((bp2.x)-wk2.x-2.05)<0.051 &&  Math.abs((bp2.z-wk2.z+7))<0.051)) || (Math.abs(((bp3.x)-wk2.x-2.05)<0.051 &&  Math.abs((bp3.z-wk2.z+7))<0.051)) || (Math.abs(((bp4.x)-wk2.x-2.05)<0.051 &&  Math.abs((bp4.z-wk2.z+7))<0.051)) || (Math.abs(((bp5.x)-wk2.x-2.05)<0.051 &&  Math.abs((bp5.z-wk2.z+7))<0.051)) || (Math.abs(((bp6.x)-wk2.x-2.05)<0.051 &&  Math.abs((bp6.z-wk2.z+7))<0.051)) || (Math.abs(((bp7.x)-wk2.x-2.05)<0.051 &&  Math.abs((bp7.z-wk2.z+7))<0.051)) ||(Math.abs(((bp8.x)-wk2.x-2.05)<0.051 &&  Math.abs((bp8.z-wk2.z+7))<0.051))){
                //knight2 right
                
                select3.position.set(px+0.45,0.2,pz-1.35+1.75)
                layer.add(select3)
                
            }
  
        if( (Math.abs(((bp1.x)-wk1.x-2.05)<0.051 &&  Math.abs((bp1.z-wk1.z+7))<0.051)) || (Math.abs(((bp2.x)-wk1.x-2.05)<0.051 &&  Math.abs((bp2.z-wk1.z+7))<0.051)) || (Math.abs(((bp3.x)-wk1.x-2.05)<0.051 &&  Math.abs((bp3.z-wk1.z+7))<0.051)) || (Math.abs(((bp4.x)-wk1.x-2.05)<0.051 &&  Math.abs((bp4.z-wk1.z+7))<0.051)) || (Math.abs(((bp5.x)-wk1.x-2.05)<0.051 &&  Math.abs((bp5.z-wk1.z+7))<0.051)) || (Math.abs(((bp6.x)-wk1.x-2.05)<0.051 &&  Math.abs((bp6.z-wk1.z+7))<0.051)) || (Math.abs(((bp7.x)-wk1.x-2.05)<0.051 &&  Math.abs((bp7.z-wk1.z+7))<0.051)) ||(Math.abs(((bp8.x)-wk1.x-2.05)<0.051 &&  Math.abs((bp8.z-wk1.z+7))<0.051))){
            //knight1 right
            select3.position.set(px+0.45,0.2,pz-1.35+1.75)
            layer.add(select3)
            
        }
        
        if((Math.abs(((bp1.x)-wk1.x-4.05)<0.051 && Math.abs(((bp1.x)-wk1.x-4.05)>(-0.051)&& Math.abs((bp1.z-wk1.z+7))<0.051)))|| (Math.abs(((bp2.x)-wk1.x-4.05)<0.051 &&  Math.abs((bp2.z-wk1.z+7))<0.051)) && Math.abs(((bp2.x)-wk1.x-4.05)>(-0.051)) || (Math.abs(((bp3.x)-wk1.x-4.05)<0.051 && Math.abs((bp3.z-wk1.z+7))<0.051) && Math.abs(((bp3.x)-wk1.x-4.05)>(-0.051))) || (Math.abs(((bp4.x)-wk1.x-4.05)<0.051 && Math.abs((bp4.z-wk1.z+7))<0.051) && Math.abs(((bp4.x)-wk1.x-4.05)>(-0.051))) || (Math.abs(((bp5.x)-wk1.x-4.05)<0.051 && Math.abs((bp5.z-wk1.z+7))<0.051) && Math.abs(((bp5.x)-wk1.x-4.05)>(-0.051)))|| (Math.abs(((bp6.x)-wk1.x-4.05)<0.051 && Math.abs((bp6.z-wk1.z+7))<0.051)&& Math.abs(((bp6.x)-wk1.x-4.05)>(-0.051)))|| (Math.abs(((bp7.x)-wk1.x-4.05)<0.051 && Math.abs((bp7.z-wk1.z+7))<0.051)&& Math.abs(((bp7.x)-wk1.x-4.05)>(-0.051))) || (Math.abs(((bp8.x)-wk1.x-4.05)<0.051 && Math.abs((bp8.z-wk1.z+7))<0.051)&& Math.abs(((bp8.x)-wk1.x-4.05)>(-0.051)))){
            //knight1 left
            select2.position.set(px-0.75-0.8,0.2,pz-1.35+1.75)
               layer.add(select2)
            }
     

    
        if((Math.abs((bp2.x-1)-wp1.x)<0.051 && Math.abs((bp2.z-wp1.z+6))<0.051) || (Math.abs((bp2.x-1)-wp2.x)<0.051 && Math.abs((bp2.z-wp2.z+6))<0.051) ||(Math.abs((bp2.x-1)-wp3.x)<0.051 && Math.abs((bp2.z-wp3.z+6))<0.051) ||(Math.abs((bp2.x-1)-wp4.x)<0.051 && Math.abs((bp2.z-wp4.z+6))<0.051) ||(Math.abs((bp2.x-1)-wp5.x)<0.051 && Math.abs((bp2.z-wp5.z+6))<0.051) ||(Math.abs((bp2.x-1)-wp6.x)<0.051 && Math.abs((bp2.z-wp6.z+6))<0.051) ||(Math.abs((bp2.x-1)-wp7.x)<0.051 && Math.abs((bp2.z-wp7.z+6))<0.051) ||(Math.abs((bp2.x-1)-wp8.x)<0.051 && Math.abs((bp2.z-wp8.z+6))<0.051) ){
            select2.position.set(px-0.75-0.8,0.2,pz-1.35+1.75)
            layer.add(select2)
        }
        if((Math.abs((bp3.x-1)-wp1.x)<0.051 && Math.abs((bp3.z-wp1.z+6))<0.051) || (Math.abs((bp3.x-1)-wp2.x)<0.051 && Math.abs((bp3.z-wp2.z+6))<0.051) ||(Math.abs((bp3.x-1)-wp3.x)<0.051 && Math.abs((bp3.z-wp3.z+6))<0.051) ||(Math.abs((bp3.x-1)-wp4.x)<0.051 && Math.abs((bp3.z-wp4.z+6))<0.051) ||(Math.abs((bp3.x-1)-wp5.x)<0.051 && Math.abs((bp3.z-wp5.z+6))<0.051) ||(Math.abs((bp3.x-1)-wp6.x)<0.051 && Math.abs((bp3.z-wp6.z+6))<0.051) ||(Math.abs((bp3.x-1)-wp7.x)<0.051 && Math.abs((bp3.z-wp7.z+6))<0.051) ||(Math.abs((bp3.x-1)-wp8.x)<0.051 && Math.abs((bp3.z-wp8.z+6))<0.051) ){
            select2.position.set(px-0.75-0.8,0.2,pz-1.35+1.75)
            layer.add(select2)
        }
        if((Math.abs((bp4.x-1)-wp1.x)<0.051 && Math.abs((bp4.z-wp1.z+6))<0.051) || (Math.abs((bp4.x-1)-wp2.x)<0.051 && Math.abs((bp4.z-wp2.z+6))<0.051) ||(Math.abs((bp4.x-1)-wp3.x)<0.051 && Math.abs((bp4.z-wp3.z+6))<0.051) ||(Math.abs((bp4.x-1)-wp4.x)<0.051 && Math.abs((bp4.z-wp4.z+6))<0.051) ||(Math.abs((bp4.x-1)-wp5.x)<0.051 && Math.abs((bp4.z-wp5.z+6))<0.051) ||(Math.abs((bp4.x-1)-wp6.x)<0.051 && Math.abs((bp4.z-wp6.z+6))<0.051) ||(Math.abs((bp4.x-1)-wp7.x)<0.051 && Math.abs((bp4.z-wp7.z+6))<0.051) ||(Math.abs((bp4.x-1)-wp8.x)<0.051 && Math.abs((bp4.z-wp8.z+6))<0.051) ){
            select2.position.set(px-0.75-0.8,0.2,pz-1.35+1.75)
            layer.add(select2)
        }
        if((Math.abs((bp5.x-1)-wp1.x)<0.051 && Math.abs((bp5.z-wp1.z+6))<0.051) || (Math.abs((bp5.x-1)-wp2.x)<0.051 && Math.abs((bp5.z-wp2.z+6))<0.051) ||(Math.abs((bp5.x-1)-wp3.x)<0.051 && Math.abs((bp5.z-wp3.z+6))<0.051) ||(Math.abs((bp5.x-1)-wp4.x)<0.051 && Math.abs((bp5.z-wp4.z+6))<0.051) ||(Math.abs((bp5.x-1)-wp5.x)<0.051 && Math.abs((bp5.z-wp5.z+6))<0.051) ||(Math.abs((bp5.x-1)-wp6.x)<0.051 && Math.abs((bp5.z-wp6.z+6))<0.051) ||(Math.abs((bp5.x-1)-wp7.x)<0.051 && Math.abs((bp5.z-wp7.z+6))<0.051) ||(Math.abs((bp5.x-1)-wp8.x)<0.051 && Math.abs((bp5.z-wp8.z+6))<0.051) ){
            select2.position.set(px-0.75-0.8,0.2,pz-1.35+1.75)
            layer.add(select2)
        }
        if((Math.abs((bp6.x-1)-wp1.x)<0.051 && Math.abs((bp6.z-wp1.z+6))<0.051) || (Math.abs((bp6.x-1)-wp2.x)<0.051 && Math.abs((bp6.z-wp2.z+6))<0.051) ||(Math.abs((bp6.x-1)-wp3.x)<0.051 && Math.abs((bp6.z-wp3.z+6))<0.051) ||(Math.abs((bp6.x-1)-wp4.x)<0.051 && Math.abs((bp6.z-wp4.z+6))<0.051) ||(Math.abs((bp6.x-1)-wp5.x)<0.051 && Math.abs((bp6.z-wp5.z+6))<0.051) ||(Math.abs((bp6.x-1)-wp6.x)<0.051 && Math.abs((bp6.z-wp6.z+6))<0.051) ||(Math.abs((bp6.x-1)-wp7.x)<0.051 && Math.abs((bp6.z-wp7.z+6))<0.051) ||(Math.abs((bp6.x-1)-wp8.x)<0.051 && Math.abs((bp6.z-wp8.z+6))<0.051) ){
            select2.position.set(px-0.75-0.8,0.2,pz-1.35+1.75)
            layer.add(select2)
        }
        if((Math.abs((bp7.x-1)-wp1.x)<0.051 && Math.abs((bp7.z-wp1.z+6))<0.051) || (Math.abs((bp7.x-1)-wp2.x)<0.051 && Math.abs((bp7.z-wp2.z+6))<0.051) ||(Math.abs((bp7.x-1)-wp3.x)<0.051 && Math.abs((bp7.z-wp3.z+6))<0.051) ||(Math.abs((bp7.x-1)-wp4.x)<0.051 && Math.abs((bp7.z-wp4.z+6))<0.051) ||(Math.abs((bp7.x-1)-wp5.x)<0.051 && Math.abs((bp7.z-wp5.z+6))<0.051) ||(Math.abs((bp7.x-1)-wp6.x)<0.051 && Math.abs((bp7.z-wp6.z+6))<0.051) ||(Math.abs((bp7.x-1)-wp7.x)<0.051 && Math.abs((bp7.z-wp7.z+6))<0.051) ||(Math.abs((bp7.x-1)-wp8.x)<0.051 && Math.abs((bp7.z-wp8.z+6))<0.051) ){
            select2.position.set(px-0.75-0.8,0.2,pz-1.35+1.75)
            layer.add(select2)
        }
        if((Math.abs((bp8.x-1)-wp1.x)<0.051 && Math.abs((bp8.z-wp1.z+6))<0.051) || (Math.abs((bp8.x-1)-wp2.x)<0.051 && Math.abs((bp8.z-wp2.z+6))<0.051) ||(Math.abs((bp8.x-1)-wp3.x)<0.051 && Math.abs((bp8.z-wp3.z+6))<0.051) ||(Math.abs((bp8.x-1)-wp4.x)<0.051 && Math.abs((bp8.z-wp4.z+6))<0.051) ||(Math.abs((bp8.x-1)-wp5.x)<0.051 && Math.abs((bp8.z-wp5.z+6))<0.051) ||(Math.abs((bp8.x-1)-wp6.x)<0.051 && Math.abs((bp8.z-wp6.z+6))<0.051) ||(Math.abs((bp8.x-1)-wp7.x)<0.051 && Math.abs((bp8.z-wp7.z+6))<0.051) ||(Math.abs((bp8.x-1)-wp8.x)<0.051 && Math.abs((bp8.z-wp8.z+6))<0.051) ){
            select2.position.set(px-0.75-0.8,0.2,pz-1.35+1.75)
            layer.add(select2)
        }




        if((Math.abs((bp1.x+1)-wp1.x)<0.051 && Math.abs((bp1.z-wp1.z+6))<0.051) ||(Math.abs((bp1.x+1)-wp2.x)<0.051 && Math.abs((bp1.z-wp2.z+6))<0.051) ||(Math.abs((bp1.x+1)-wp3.x)<0.051 && Math.abs((bp1.z-wp3.z+6))<0.051) || (Math.abs((bp1.x+1)-wp4.x)<0.051 && Math.abs((bp1.z-wp4.z+6))<0.051) || (Math.abs((bp1.x+1)-wp5.x)<0.051 && Math.abs((bp1.z-wp5.z+6))<0.051) || (Math.abs((bp1.x+1)-wp6.x)<0.051 && Math.abs((bp1.z-wp6.z+6))<0.051) || (Math.abs((bp1.x+1)-wp7.x)<0.051 && Math.abs((bp1.z-wp7.z+6))<0.051)|| (Math.abs((bp1.x+1)-wp8.x)<0.051 && Math.abs((bp1.z-wp8.z+6))<0.051)){
            select3.position.set(px+0.45,0.2,pz-1.35+1.75)
            layer.add(select3)
        }
        if((Math.abs((bp2.x+1)-wp1.x)<0.051 && Math.abs((bp2.z-wp1.z+6))<0.051) ||(Math.abs((bp2.x+1)-wp2.x)<0.051 && Math.abs((bp2.z-wp2.z+6))<0.051) ||(Math.abs((bp2.x+1)-wp3.x)<0.051 && Math.abs((bp2.z-wp3.z+6))<0.051) || (Math.abs((bp2.x+1)-wp4.x)<0.051 && Math.abs((bp2.z-wp4.z+6))<0.051) || (Math.abs((bp2.x+1)-wp5.x)<0.051 && Math.abs((bp2.z-wp5.z+6))<0.051) || (Math.abs((bp2.x+1)-wp6.x)<0.051 && Math.abs((bp2.z-wp6.z+6))<0.051) || (Math.abs((bp2.x+1)-wp7.x)<0.051 && Math.abs((bp2.z-wp7.z+6))<0.051)|| (Math.abs((bp2.x+1)-wp8.x)<0.051 && Math.abs((bp2.z-wp8.z+6))<0.051)){
            select3.position.set(px+0.45,0.2,pz-1.35+1.75)
            layer.add(select3)
        }
        if((Math.abs((bp3.x+1)-wp1.x)<0.051 && Math.abs((bp3.z-wp1.z+6))<0.051) ||(Math.abs((bp3.x+1)-wp2.x)<0.051 && Math.abs((bp3.z-wp2.z+6))<0.051) ||(Math.abs((bp3.x+1)-wp3.x)<0.051 && Math.abs((bp3.z-wp3.z+6))<0.051) || (Math.abs((bp3.x+1)-wp4.x)<0.051 && Math.abs((bp3.z-wp4.z+6))<0.051) || (Math.abs((bp3.x+1)-wp5.x)<0.051 && Math.abs((bp3.z-wp5.z+6))<0.051) || (Math.abs((bp3.x+1)-wp6.x)<0.051 && Math.abs((bp3.z-wp6.z+6))<0.051) || (Math.abs((bp3.x+1)-wp7.x)<0.051 && Math.abs((bp3.z-wp7.z+6))<0.051)|| (Math.abs((bp3.x+1)-wp8.x)<0.051 && Math.abs((bp3.z-wp8.z+6))<0.051)){
            select3.position.set(px+0.45,0.2,pz-1.35+1.75)
            layer.add(select3)
        }
        if((Math.abs((bp4.x+1)-wp1.x)<0.051 && Math.abs((bp4.z-wp1.z+6))<0.051) ||(Math.abs((bp4.x+1)-wp2.x)<0.051 && Math.abs((bp4.z-wp2.z+6))<0.051) ||(Math.abs((bp4.x+1)-wp3.x)<0.051 && Math.abs((bp4.z-wp3.z+6))<0.051) || (Math.abs((bp4.x+1)-wp4.x)<0.051 && Math.abs((bp4.z-wp4.z+6))<0.051) || (Math.abs((bp4.x+1)-wp5.x)<0.051 && Math.abs((bp4.z-wp5.z+6))<0.051) || (Math.abs((bp4.x+1)-wp6.x)<0.051 && Math.abs((bp4.z-wp6.z+6))<0.051) || (Math.abs((bp4.x+1)-wp7.x)<0.051 && Math.abs((bp4.z-wp7.z+6))<0.051)|| (Math.abs((bp4.x+1)-wp8.x)<0.051 && Math.abs((bp4.z-wp8.z+6))<0.051)){
            select3.position.set(px+0.45,0.2,pz-1.35+1.75)
            layer.add(select3)
        }
        if((Math.abs((bp5.x+1)-wp1.x)<0.051 && Math.abs((bp5.z-wp1.z+6))<0.051) ||(Math.abs((bp5.x+1)-wp2.x)<0.051 && Math.abs((bp5.z-wp2.z+6))<0.051) ||(Math.abs((bp5.x+1)-wp3.x)<0.051 && Math.abs((bp5.z-wp3.z+6))<0.051) || (Math.abs((bp5.x+1)-wp4.x)<0.051 && Math.abs((bp5.z-wp4.z+6))<0.051) || (Math.abs((bp5.x+1)-wp5.x)<0.051 && Math.abs((bp5.z-wp5.z+6))<0.051) || (Math.abs((bp5.x+1)-wp6.x)<0.051 && Math.abs((bp5.z-wp6.z+6))<0.051) || (Math.abs((bp5.x+1)-wp7.x)<0.051 && Math.abs((bp5.z-wp7.z+6))<0.051)|| (Math.abs((bp5.x+1)-wp8.x)<0.051 && Math.abs((bp5.z-wp8.z+6))<0.051)){
            select3.position.set(px+0.45,0.2,pz-1.35+1.75)
            layer.add(select3)
        }
        if((Math.abs((bp6.x+1)-wp1.x)<0.051 && Math.abs((bp6.z-wp1.z+6))<0.051) ||(Math.abs((bp6.x+1)-wp2.x)<0.051 && Math.abs((bp6.z-wp2.z+6))<0.051) ||(Math.abs((bp6.x+1)-wp3.x)<0.051 && Math.abs((bp6.z-wp3.z+6))<0.051) || (Math.abs((bp6.x+1)-wp4.x)<0.051 && Math.abs((bp6.z-wp4.z+6))<0.051) || (Math.abs((bp6.x+1)-wp5.x)<0.051 && Math.abs((bp6.z-wp5.z+6))<0.051) || (Math.abs((bp6.x+1)-wp6.x)<0.051 && Math.abs((bp6.z-wp6.z+6))<0.051) || (Math.abs((bp6.x+1)-wp7.x)<0.051 && Math.abs((bp6.z-wp7.z+6))<0.051)|| (Math.abs((bp6.x+1)-wp8.x)<0.051 && Math.abs((bp6.z-wp8.z+6))<0.051)){
            select3.position.set(px+0.45,0.2,pz-1.35+1.75)
            layer.add(select3)
        }
        if((Math.abs((bp7.x+1)-wp1.x)<0.051 && Math.abs((bp7.z-wp1.z+6))<0.051) ||(Math.abs((bp7.x+1)-wp2.x)<0.051 && Math.abs((bp7.z-wp2.z+6))<0.051) ||(Math.abs((bp7.x+1)-wp3.x)<0.051 && Math.abs((bp7.z-wp3.z+6))<0.051) || (Math.abs((bp7.x+1)-wp4.x)<0.051 && Math.abs((bp7.z-wp4.z+6))<0.051) || (Math.abs((bp7.x+1)-wp5.x)<0.051 && Math.abs((bp7.z-wp5.z+6))<0.051) || (Math.abs((bp7.x+1)-wp6.x)<0.051 && Math.abs((bp7.z-wp6.z+6))<0.051) || (Math.abs((bp7.x+1)-wp7.x)<0.051 && Math.abs((bp7.z-wp7.z+6))<0.051)|| (Math.abs((bp7.x+1)-wp8.x)<0.051 && Math.abs((bp7.z-wp8.z+6))<0.051)){
            select3.position.set(px+0.45,0.2,pz-1.35+1.75)
            layer.add(select3)
        }
        if((Math.abs((bp8.x+1)-wp1.x)<0.051 && Math.abs((bp8.z-wp1.z+6))<0.051) ||(Math.abs((bp8.x+1)-wp2.x)<0.051 && Math.abs((bp8.z-wp2.z+6))<0.051) ||(Math.abs((bp8.x+1)-wp3.x)<0.051 && Math.abs((bp8.z-wp3.z+6))<0.051) || (Math.abs((bp8.x+1)-wp4.x)<0.051 && Math.abs((bp8.z-wp4.z+6))<0.051) || (Math.abs((bp8.x+1)-wp5.x)<0.051 && Math.abs((bp8.z-wp5.z+6))<0.051) || (Math.abs((bp8.x+1)-wp6.x)<0.051 && Math.abs((bp8.z-wp6.z+6))<0.051) || (Math.abs((bp8.x+1)-wp7.x)<0.051 && Math.abs((bp8.z-wp7.z+6))<0.051)|| (Math.abs((bp8.x+1)-wp8.x)<0.051 && Math.abs((bp8.z-wp8.z+6))<0.051)){
            select3.position.set(px+0.45,0.2,pz-1.35+1.75)
            layer.add(select3)
        }


  //         if( (Math.abs(((bp1.x)-wq.x+0.95)<0.051 &&  Math.abs((bp1.z-wq.z+7.1))<0.051)) || (Math.abs(((bp2.x)-wq.x+0.95)<0.051 &&  Math.abs((bp2.z-wq.z+7.1))<0.051)) || (Math.abs(((bp3.x)-wq.x+0.95)<0.051 &&  Math.abs((bp3.z-wq.z+7.1))<0.051)) || (Math.abs(((bp4.x)-wq.x+0.95)<0.051 &&  Math.abs((bp4.z-wq.z+7.1))<0.051)) || (Math.abs(((bp5.x)-wq.x+0.95)<0.051 &&  Math.abs((bp5.z-wq.z+7.1))<0.051)) || (Math.abs(((bp6.x)-wq.x+0.95)<0.051 &&  Math.abs((bp6.z-wq.z+7.1))<0.051)) || (Math.abs(((bp7.x)-wq.x+0.95)<0.051 &&  Math.abs((bp7.z-wq.z+7.1))<0.051)) ||(Math.abs(((bp8.x)-wq.x+0.95)<0.051 &&  Math.abs((bp8.z-wq.z+7.1))<0.051))){
    //             //queen right
    //         select3.position.set(px+0.45,0.2,pz-1.35+1.75)
    //         layer.add(select3)
            
    //     }

        // console.log((-wq.x-0.05) + "  wq1 "+ wki.z);
        // console.log((bp2.x) + " "+(bp2.z+7));
        
        
    //     if( (Math.abs(((bp1.x)-wq.x-0.05)<0.051 &&  Math.abs((bp1.z-wq.z+7))<0.051)) || (Math.abs(((bp2.x)-wq.x-0.05)<0.051 &&  Math.abs((bp2.z-wq.z+7))<0.051)) || (Math.abs(((bp3.x)-wq.x-0.05)<0.051 &&  Math.abs((bp3.z-wq.z+7))<0.051)) || (Math.abs(((bp4.x)-wq.x-0.05)<0.051 &&  Math.abs((bp4.z-wq.z+7))<0.051)) || (Math.abs(((bp5.x)-wq.x-0.05)<0.051 &&  Math.abs((bp5.z-wq.z+7))<0.051)) || (Math.abs(((bp6.x)-wq.x-0.05)<0.051 &&  Math.abs((bp6.z-wq.z+7))<0.051)) || (Math.abs(((bp7.x)-wq.x-0.05)<0.051 &&  Math.abs((bp7.z-wq.z+7))<0.051)) ||(Math.abs(((bp8.x)-wq.x-0.05)<0.051 &&  Math.abs((bp8.z-wq.z+7))<0.051))){
    //         //queen left
    //     select2.position.set(px-0.75-0.8,0.2,pz-1.35+1.75)
    //     layer.add(select2)
        
    // }

        //     if( (Math.abs(((bp1.x)-wki.x+0.95)<0.051 &&  Math.abs((bp1.z-wki.z+7.1))<0.051)) || (Math.abs(((bp2.x)-wki.x+0.95)<0.051 &&  Math.abs((bp2.z-wki.z+7.1))<0.051)) || (Math.abs(((bp3.x)-wki.x+0.95)<0.051 &&  Math.abs((bp3.z-wki.z+7.1))<0.051)) || (Math.abs(((bp4.x)-wki.x+0.95)<0.051 &&  Math.abs((bp4.z-wki.z+7.1))<0.051)) || (Math.abs(((bp5.x)-wki.x+0.95)<0.051 &&  Math.abs((bp5.z-wki.z+7.1))<0.051)) || (Math.abs(((bp6.x)-wki.x+0.95)<0.051 &&  Math.abs((bp6.z-wki.z+7.1))<0.051)) || (Math.abs(((bp7.x)-wki.x+0.95)<0.051 &&  Math.abs((bp7.z-wki.z+7.1))<0.051)) ||(Math.abs(((bp8.x)-wki.x+0.95)<0.051 &&  Math.abs((bp8.z-wki.z+7.1))<0.051))){
        //         //king right
        //     select3.position.set(px+0.45,0.2,pz-1.35+1.75)
        //     layer.add(select3)
            
        // }
        
        
    //     if( (Math.abs(((bp1.x)-wki.x-1.05)<0.051 &&  Math.abs((bp1.z-wki.z+7.1))<0.051)) || (Math.abs(((bp2.x)-wki.x-1.05)<0.051 &&  Math.abs((bp2.z-wki.z+7.1))<0.051)) || (Math.abs(((bp3.x)-wki.x-1.05)<0.051 &&  Math.abs((bp3.z-wki.z+7.1))<0.051)) || (Math.abs(((bp4.x)-wki.x-1.05)<0.051 &&  Math.abs((bp4.z-wki.z+7.1))<0.051)) || (Math.abs(((bp5.x)-wki.x-1.05)<0.051 &&  Math.abs((bp5.z-wki.z+7.1))<0.051)) || (Math.abs(((bp6.x)-wki.x-1.05)<0.051 &&  Math.abs((bp6.z-wki.z+7.1))<0.051)) || (Math.abs(((bp7.x)-wki.x-1.05)<0.051 &&  Math.abs((bp7.z-wki.z+7.1))<0.051)) ||(Math.abs(((bp8.x)-wki.x-1.05)<0.051 &&  Math.abs((bp8.z-wki.z+7.1))<0.051))){
    //         //king left
    //     select2.position.set(px-0.75-0.8,0.2,pz-1.35+1.75)
    //     layer.add(select2)
        
    // }





       
        domEvents.addEventListener(select, 'click', () => {
            obj.position.set(px, -0.8, pz + 1)

            if (t == 'a') {

                bp1 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
                console.log(bp1.x);

                if (((Math.abs(bp1.x - wp1.x) < 0.05) && (Math.abs(bp1.z - wp1.z + 5) < 0.05))) {
                    console.log("collision");

                }
                if (((Math.abs(bp1.x - wp2.x) < 0.05) && (Math.abs(bp1.z - wp2.z + 5) < 0.05))) {
                    console.log("collision");

                }
                if (((Math.abs(bp1.x - wp3.x) < 0.05) && (Math.abs(bp1.z - wp3.z + 5) < 0.05))) {
                    console.log("collision");

                }
                if (((Math.abs(bp1.x - wp4.x) < 0.05) && (Math.abs(bp1.z - wp4.z + 5) < 0.05))) {
                    console.log("collision");

                }
                if (((Math.abs(bp1.x - wp5.x) < 0.05) && (Math.abs(bp1.z - wp5.z + 5) < 0.05))) {
                    console.log("collision");

                }
                if (((Math.abs(bp1.x - wp6.x) < 0.05) && (Math.abs(bp1.z - wp6.z + 5) < 0.05))) {
                    console.log("collision");

                }
                if (((Math.abs(bp1.x - wp6.x) < 0.05) && (Math.abs(bp1.z - wp6.z + 5) < 0.05))) {
                    console.log("collision");

                }
                if (((Math.abs(bp1.x - wp7.x) < 0.05) && (Math.abs(bp1.z - wp7.z + 5) < 0.05))) {
                    console.log("collision");

                }
                if ((Math.abs(bp1.x - wp8.x) < 0.05) && (Math.abs(bp1.z - wp8.z + 5) < 0.05)) {
                    console.log("collision");

                }
                if (((Math.abs(bp1.x - wp8.x) < 0.05) && (Math.abs(bp1.z - wp8.z + 5) < 0.05))) {
                    console.log("collision");

                }
                if (((Math.abs(bp1.x + wr1.x + 9.95) < 0.05) && (Math.abs(bp1.z - wr1.z + 6) < 0.05))) {
                    console.log("collision");
                    wrook1.wrrmv()
                }
                if (((Math.abs(bp1.x + wk2.x + 8.95) < 0.05) && (Math.abs(bp1.z - wk2.z + 6) < 0.05))) {
                    console.log("collision");
                    wknight2.wkrmv()

                }
                if (((Math.abs(bp1.x + wb1.x + 7.95) <= 0.05) && (Math.abs(bp1.z - wb1.z + 6) < 0.05))) {
                    console.log("collision");
                    wbishop1.wbrmv();
                }

                if ((Math.abs(bp1.x + wb2.x + 7.95) <= 0.05) && (Math.abs(bp1.z - wb2.z + 6) < 0.05)) {
                    console.log("collision");
                    wbishop2.wbrmv();
                }
                if (((Math.abs(bp1.x + wr2.x + 9.95) < 0.05) && (Math.abs(bp1.z - wr2.z + 6) < 0.05))) {
                    console.log("collision");
                    wrook2.wrrmv()
                }
                if (((Math.abs(bp1.x - wki.x + 5.95) < 0.05) && (Math.abs(bp1.z - wki.z + 6) < 0.05))) {
                    console.log("collision");
                    wking.wkirmv()
                }
                if (((Math.abs(bp1.x - wq.x + 5.95) < 0.05) && (Math.abs(bp1.z - wq.z + 6)) < 0.05)) {
                    console.log("collision");
                    wqueen.wqrmv()
                }

            }
            if (t == 'b') {

                bp2 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }

            }
            if (t == 'c') {

                bp3 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
            }
            if (t == 'd') {

                bp4 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
            }
            if (t == 'e') {

                bp5 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
            }
            if (t == 'f') {

                bp6 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
            }
            if (t == 'g') {

                bp7 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
            }
            if (t == 'h') {

                bp8 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
            }

            
            rmvLyr()

            domEvents.removeEventListener(select, 'click')

            turn = 'w';
            clicked = false;
        })
       
    }
    board.add(layer)

}

function Brook_onClick(px, pz, obj, t) {
    plane_geo = new THREE.PlaneGeometry(0.8, 0.8);
    plane_mat = new THREE.MeshBasicMaterial({ color: 0xd87d7d })
    let spx, spz;

    // for forward
    for (let i = 0; i < 8; i++) {
        if ((pz + 1.35 + i) < 4) {
            let select = new THREE.Mesh(plane_geo, plane_mat);
            select.position.set(px - 3.45 + 7, 0.2, pz + 1.35 + i)
            select.rotation.x = -90 * (Math.PI / 180)
            select.name = 'select'
            spx = select.getWorldPosition(worldPosition).x
            spz = select.getWorldPosition(worldPosition).z
          
                    layer.add(select)
            
            domEvents.addEventListener(select, 'click', () => {
                let layer_posX = select.getWorldPosition(worldPosition).x;
                let layer_posZ = select.getWorldPosition(worldPosition).z;
                if (layer.getObjectByName('select')) {
                    obj.position.set(px, -0.93, layer_posZ - 0.35)
                    if (t == 'a') {
                        br1 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
                    }
                    else { br2 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z } }


                    if (((Math.abs(br2.x - wp1.x + 4.05) < 0.05) && (Math.abs(br2.z - wp1.z + 6) < 0.05))) {
                        console.log("collision");
                        wpawn1.wprmv()

                    }
                    if (((Math.abs(br1.x - wp1.x + 4.05) < 0.05) && (Math.abs(br1.z - wp1.z + 6) < 0.05))) {
                        console.log("collision");
                        wpawn1.wprmv()

                    }
                    if (((Math.abs(br1.x - wp2.x + 4.05) < 0.05) && (Math.abs(br1.z - wp2.z + 6) < 0.05))) {
                        console.log("collision");
                        wpawn2.wprmv()
                    }
                    if (((Math.abs(br2.x - wp2.x + 4.05) < 0.05) && (Math.abs(br2.z - wp2.z + 6) < 0.05))) {
                        console.log("collision");
                        wpawn2.wprmv()
                    }

                    if (((Math.abs(br1.x - wp3.x + 4.05) < 0.05) && (Math.abs(br1.z - wp3.z + 6) < 0.05))) {
                        console.log("collision");
                        wpawn3.wprmv()
                    }
                    if (((Math.abs(br2.x - wp3.x + 4.05) < 0.05) && (Math.abs(br2.z - wp3.z + 6) < 0.05))) {
                        console.log("collision");
                        wpawn3.wprmv()
                    }

                    if (((Math.abs(br1.x - wp4.x + 4.05) < 0.05) && (Math.abs(br1.z - wp4.z + 6) < 0.05))) {
                        console.log("collision");
                        wpawn4.wprmv()

                    }
                    if (((Math.abs(br2.x - wp4.x + 4.05) < 0.05) && (Math.abs(br2.z - wp4.z + 6) < 0.05))) {
                        console.log("collision");
                        wpawn4.wprmv()

                    }
                    if (((Math.abs(br1.x - wp5.x + 4.05) < 0.05) && (Math.abs(br1.z - wp5.z + 6) < 0.05))) {
                        console.log("collision");
                        wpawn5.wprmv()

                    }
                    if (((Math.abs(br2.x - wp5.x + 4.05) < 0.05) && (Math.abs(br2.z - wp5.z + 6) < 0.05))) {
                        console.log("collision");
                        wpawn5.wprmv()

                    }
                    if (((Math.abs(br1.x - wp6.x + 4.05) < 0.05) && (Math.abs(br1.z - wp6.z + 6) < 0.05))) {
                        console.log("collision");
                        wpawn6.wprmv()

                    }
                    if (((Math.abs(br2.x - wp6.x + 4.05) < 0.05) && (Math.abs(br2.z - wp6.z + 6) < 0.05))) {
                        console.log("collision");
                        wpawn6.wprmv()

                    }

                    if (((Math.abs(br1.x - wp7.x + 4.05) < 0.05) && (Math.abs(br1.z - wp7.z + 6) < 0.05))) {
                        console.log("collision");
                        wpawn7.wprmv()

                    }
                    if (((Math.abs(br2.x - wp7.x + 4.05) < 0.05) && (Math.abs(br2.z - wp7.z + 6) < 0.05))) {
                        console.log("collision");
                        wpawn7.wprmv()

                    }
                    if ((Math.abs(br1.x - wp8.x + 4.05) < 0.05) && (Math.abs(br1.z - wp8.z + 6) < 0.05)) {
                        console.log("collision");
                        wpawn8.wprmv()

                    }
                    if ((Math.abs(br2.x - wp8.x + 4.05) < 0.05) && (Math.abs(br2.z - wp8.z + 6) < 0.05)) {
                        console.log("collision");
                        wpawn8.wprmv()

                    }





                    if (((Math.abs(br1.x - wr1.x) < 0.05) && (Math.abs(br1.z - wr1.z + 7) < 0.05))) {
                        console.log("collision");
                        wrook1.wrrmv()
                    }
                    if (((Math.abs(br1.x - wr2.x) < 0.05) && (Math.abs(br1.z - wr2.z + 7) < 0.05))) {
                        console.log("collision");
                        wrook2.wrrmv()
                    }
                    if (((Math.abs(br2.x - wr1.x) < 0.05) && (Math.abs(br2.z - wr1.z + 7) < 0.05))) {
                        console.log("collision");
                        wrook1.wrrmv()
                    }
                    if (((Math.abs(br2.x - wr2.x) < 0.05) && (Math.abs(br2.z - wr2.z + 7) < 0.05))) {
                        console.log("collision");
                        wrook2.wrrmv()
                    }




                    if (((Math.abs(br1.x - wb1.x + 2) <= 0.05) && (Math.abs(br1.z - wb1.z + 7) < 0.05))) {
                        console.log("collision");
                        wbishop1.wbrmv();
                    }

                    if ((Math.abs(br1.x - wb2.x + 2) <= 0.05) && (Math.abs(br1.z - wb2.z + 7) < 0.05)) {
                        console.log("collision");
                        wbishop2.wbrmv();
                    }
                    if (((Math.abs(br1.x - wk2.x + 1) < 0.05) && (Math.abs(br1.z - wk2.z + 7) < 0.05))) {
                        console.log("collision");
                        wknight2.wkrmv()

                    }

                    if (((Math.abs(br1.x - wk1.x + 1) < 0.05) && (Math.abs(br1.z - wk1.z + 7) < 0.05))) {
                        console.log("collision");
                        wknight1.wkrmv()

                    }



                    if (((Math.abs(br2.x - wb1.x + 2) <= 0.05) && (Math.abs(br2.z - wb1.z + 7) < 0.05))) {
                        console.log("collision");
                        wbishop1.wbrmv();
                    }
                    if ((Math.abs(br2.x - wb2.x + 2) <= 0.05) && (Math.abs(br2.z - wb2.z + 7) < 0.05)) {
                        console.log("collision");
                        wbishop2.wbrmv();
                    }



                    if (((Math.abs(br2.x - wk2.x + 1) < 0.05) && (Math.abs(br2.z - wk2.z + 7) < 0.05))) {
                        console.log("collision");
                        wknight2.wkrmv()

                    }

                    if (((Math.abs(br2.x - wk1.x + 1) < 0.05) && (Math.abs(br2.z - wk1.z + 7) < 0.05))) {
                        console.log("collision");
                        wknight2.wkrmv()

                    }




                    if (((Math.abs(br1.x - wq.x + 4.05) < 0.05) && (Math.abs(br1.z - wq.z + 7.2) < 0.05))) {
                        console.log("collision");
                        wqueen.wqrmv()
                    }
                    if (((Math.abs(br2.x - wq.x + 4.05) < 0.05) && (Math.abs(br2.z - wq.z + 7.2) < 0.05))) {
                        console.log("collision");
                        wqueen.wqrmv()
                    }


                    if (((Math.abs(br1.x - wki.x + 3) < 0.05) && (Math.abs(br1.z - wki.z + 7) < 0.05))) {
                        console.log("collision");
                        wking.wkirmv()
                        endw=0;
                    }
                    if (((Math.abs(br2.x - wki.x + 3) < 0.05) && (Math.abs(br2.z - wki.z + 7) < 0.05))) {
                        console.log("collision");
                        wking.wkirmv()
                        endw=0;

                    }



                }
                rmvLyr()
                turn = 'w';

                clicked = false;


            })



        } else break
    }
    // for right
    for (let i = 0; i < 8; i++) {
        if ((px - 2.45 + 7 + i) < 4) {
            let select = new THREE.Mesh(plane_geo, plane_mat);
            select.position.set(px - 2.45 + 7 + i, 0.2, pz + 0.35)
            select.name = 'select'
            select.rotation.x = -90 * (Math.PI / 180)
            spx=select.getWorldPosition(worldPosition).x
            spz=select.getWorldPosition(worldPosition).z
            // if((Math.abs(spx-bk2.x)<=2.56 && Math.abs(spz-bk2.z) <= 0.5)){
            //     break;
            // }
           
            // if(Math.abs(spx-wp3.x)>0.8 && Math.abs(spz-wp3.z)<0.55){
            //     break
            // }
            // else 
            // {
                layer.add(select);
            // }
            domEvents.addEventListener(select, 'click', () => {
                let layer_posX = select.getWorldPosition(worldPosition).x;
                let layer_posZ = select.getWorldPosition(worldPosition).z;
                if (layer.getObjectByName('select')) {
                    obj.position.set(layer_posX - 3.55, -0.93, layer_posZ - 0.35)
                    if (t == 'a') {
                        br1 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
                    }
                    else { br2 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z } }

                    if (((Math.abs(br2.x - wp1.x + 4.05) < 0.05) && (Math.abs(br2.z - wp1.z + 6) < 0.05))) {
                        console.log("collision");
                        wpawn1.wprmv()
                    }
                    if (((Math.abs(br1.x - wp1.x + 4.05) < 0.05) && (Math.abs(br1.z - wp1.z + 6) < 0.05))) {
                        console.log("collision");
                        wpawn1.wprmv()
                    }
                    if (((Math.abs(br1.x - wp2.x + 4.05) < 0.05) && (Math.abs(br1.z - wp2.z + 6) < 0.05))) {
                        console.log("collision");
                        wpawn2.wprmv()
                    }
                    if (((Math.abs(br2.x - wp2.x + 4.05) < 0.05) && (Math.abs(br2.z - wp2.z + 6) < 0.05))) {
                        console.log("collision");
                        wpawn2.wprmv()
                    }

                    if (((Math.abs(br1.x - wp3.x + 4.05) < 0.05) && (Math.abs(br1.z - wp3.z + 6) < 0.05))) {
                        console.log("collision");
                        wpawn3.wprmv()
                    }
                    if (((Math.abs(br2.x - wp3.x + 4.05) < 0.05) && (Math.abs(br2.z - wp3.z + 6) < 0.05))) {
                        console.log("collision");
                        wpawn3.wprmv()
                    }

                    if (((Math.abs(br1.x - wp4.x + 4.05) < 0.05) && (Math.abs(br1.z - wp4.z + 6) < 0.05))) {
                        console.log("collision");
                        wpawn4.wprmv()
                    }
                    if (((Math.abs(br2.x - wp4.x + 4.05) < 0.05) && (Math.abs(br2.z - wp4.z + 6) < 0.05))) {
                        console.log("collision");
                        wpawn4.wprmv()
                    }
                    if (((Math.abs(br1.x - wp5.x + 4.05) < 0.05) && (Math.abs(br1.z - wp5.z + 6) < 0.05))) {
                        console.log("collision");
                        wpawn5.wprmv()
                    }
                    if (((Math.abs(br2.x - wp5.x + 4.05) < 0.05) && (Math.abs(br2.z - wp5.z + 6) < 0.05))) {
                        console.log("collision");
                        wpawn5.wprmv()
                    }
                    if (((Math.abs(br1.x - wp6.x + 4.05) < 0.05) && (Math.abs(br1.z - wp6.z + 6) < 0.05))) {
                        console.log("collision");
                        wpawn6.wprmv()
                    }
                    if (((Math.abs(br2.x - wp6.x + 4.05) < 0.05) && (Math.abs(br2.z - wp6.z + 6) < 0.05))) {
                        console.log("collision");
                        wpawn6.wprmv()
                    }

                    if (((Math.abs(br1.x - wp7.x + 4.05) < 0.05) && (Math.abs(br1.z - wp7.z + 6) < 0.05))) {
                        console.log("collision");
                        wpawn7.wprmv()
                    }
                    if (((Math.abs(br2.x - wp7.x + 4.05) < 0.05) && (Math.abs(br2.z - wp7.z + 6) < 0.05))) {
                        console.log("collision");
                        wpawn7.wprmv()

                    }
                    if ((Math.abs(br1.x - wp8.x + 4.05) < 0.05) && (Math.abs(br1.z - wp8.z + 6) < 0.05)) {
                        console.log("collision");
                        wpawn8.wprmv()

                    }
                    if ((Math.abs(br2.x - wp8.x + 4.05) < 0.05) && (Math.abs(br2.z - wp8.z + 6) < 0.05)) {
                        console.log("collision");
                        wpawn8.wprmv()

                    }




                    if (((Math.abs(br1.x - wr1.x) < 0.05) && (Math.abs(br1.z - wr1.z + 7) < 0.05))) {
                        console.log("collision");
                        wrook1.wrrmv()
                    }
                    if (((Math.abs(br1.x - wr2.x) < 0.05) && (Math.abs(br1.z - wr2.z + 7) < 0.05))) {
                        console.log("collision");
                        wrook2.wrrmv()
                    }
                    if (((Math.abs(br1.x - wb1.x + 2) <= 0.05) && (Math.abs(br1.z - wb1.z + 7) < 0.05))) {
                        console.log("collision");
                        wbishop1.wbrmv();
                    }
                    if ((Math.abs(br1.x - wb2.x + 2) <= 0.05) && (Math.abs(br1.z - wb2.z + 7) < 0.05)) {
                        console.log("collision");
                        wbishop2.wbrmv();
                    }
                    if (((Math.abs(br1.x - wk2.x + 1) < 0.05) && (Math.abs(br1.z - wk2.z + 7) < 0.05))) {
                        console.log("collision");
                        wknight2.wkrmv()

                    }

                    if (((Math.abs(br1.x - wk1.x + 1) < 0.05) && (Math.abs(br1.z - wk1.z + 7) < 0.05))) {
                        console.log("collision");
                        wknight1.wkrmv()

                    }






                    if (((Math.abs(br2.x - wr1.x) < 0.05) && (Math.abs(br2.z - wr1.z + 7) < 0.05))) {
                        console.log("collision");
                        wrook1.wrrmv()
                    }
                    if (((Math.abs(br2.x - wr2.x) < 0.05) && (Math.abs(br2.z - wr2.z + 7) < 0.05))) {
                        console.log("collision");
                        wrook2.wrrmv()
                    }
                    if (((Math.abs(br2.x - wb1.x + 2) <= 0.05) && (Math.abs(br2.z - wb1.z + 7) < 0.05))) {
                        console.log("collision");
                        wbishop1.wbrmv();
                    }
                    if ((Math.abs(br2.x - wb2.x + 2) <= 0.05) && (Math.abs(br2.z - wb2.z + 7) < 0.05)) {
                        console.log("collision");
                        wbishop2.wbrmv();
                    }
                    if (((Math.abs(br2.x - wk2.x + 1) < 0.05) && (Math.abs(br2.z - wk2.z + 7) < 0.05))) {
                        console.log("collision");
                        wknight2.wkrmv()

                    }

                    if (((Math.abs(br2.x - wk1.x + 1) < 0.05) && (Math.abs(br2.z - wk1.z + 7) < 0.05))) {
                        console.log("collision");
                        wknight1.wkrmv()

                    }




                    if (((Math.abs(br1.x - wq.x + 4.05) <= 0.051) && (Math.abs(br1.z - wq.z + 7.2) <= 0.1))) {
                        console.log("collision");
                        wqueen.wqrmv()
                    }
                    if (((Math.abs(br2.x - wq.x + 4.05) <= 0.051) && (Math.abs(br2.z - wq.z + 7.2) <= 0.1))) {
                        console.log("collision");
                        wqueen.wqrmv()
                    }

                    if (((Math.abs(br1.x - wki.x + 3) < 0.05) && (Math.abs(br1.z - wki.z + 7) < 0.05))) {
                        console.log("collision");
                        wking.wkirmv()
                        endw=0;

                    }
                    if (((Math.abs(br2.x - wki.x + 3) < 0.05) && (Math.abs(br2.z - wki.z + 7) < 0.05))) {
                        console.log("collision");
                        wking.wkirmv()
                        endw=0;

                    }


                }
                rmvLyr()
                turn = 'w';

                clicked = false;


            })
        } else break;
    }
    //for left
    for (let i = 0; i < 8; i++) {
        if ((px - 4.95 + 7.45 - i) > -4) {
            let select = new THREE.Mesh(plane_geo, plane_mat);
            select.position.set(px - 4.95 + 7.45 - i, 0.2, pz + 0.35)
            select.name = 'select'
            layer.add(select)
            select.rotation.x = -90 * (Math.PI / 180)
            domEvents.addEventListener(select, 'click', () => {
                let layer_posX = select.getWorldPosition(worldPosition).x;
                let layer_posZ = select.getWorldPosition(worldPosition).z;
                if (layer.getObjectByName('select')) {
                    obj.position.set(layer_posX - 3.55, -0.93, layer_posZ - 0.35)
                    if (t == 'a') {
                        br1 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
                    }
                    else { br2 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z } }


                    if (((Math.abs(br2.x - wp1.x + 4.1) < 0.05) && (Math.abs(br2.z - wp1.z + 6) < 0.05))) {
                        console.log("collision");
                        wpawn1.wprmv()

                    }
                    if (((Math.abs(br1.x - wp1.x + 4.1) < 0.05) && (Math.abs(br1.z - wp1.z + 6) < 0.05))) {
                        console.log("collision");
                        wpawn1.wprmv()

                    }
                    if (((Math.abs(br1.x - wp2.x + 4.1) < 0.05) && (Math.abs(br1.z - wp2.z + 6) < 0.05))) {
                        console.log("collision");
                        wpawn2.wprmv()
                    }
                    if (((Math.abs(br2.x - wp2.x + 4.1) < 0.05) && (Math.abs(br2.z - wp2.z + 6) < 0.05))) {
                        console.log("collision");
                        wpawn2.wprmv()
                    }

                    if (((Math.abs(br1.x - wp3.x + 4.1) < 0.05) && (Math.abs(br1.z - wp3.z + 6) < 0.05))) {
                        console.log("collision");
                        wpawn3.wprmv()
                    }
                    if (((Math.abs(br2.x - wp3.x + 4.1) < 0.05) && (Math.abs(br2.z - wp3.z + 6) < 0.05))) {
                        console.log("collision");
                        wpawn3.wprmv()
                    }

                    if (((Math.abs(br1.x - wp4.x + 4.1) < 0.05) && (Math.abs(br1.z - wp4.z + 6) < 0.05))) {
                        console.log("collision");
                        wpawn4.wprmv()

                    }
                    if (((Math.abs(br2.x - wp4.x + 4.1) < 0.05) && (Math.abs(br2.z - wp4.z + 6) < 0.05))) {
                        console.log("collision");
                        wpawn4.wprmv()

                    }
                    if (((Math.abs(br1.x - wp5.x + 4.1) < 0.05) && (Math.abs(br1.z - wp5.z + 6) < 0.05))) {
                        console.log("collision");
                        wpawn5.wprmv()

                    }
                    if (((Math.abs(br2.x - wp5.x + 4.1) < 0.05) && (Math.abs(br2.z - wp5.z + 6) < 0.05))) {
                        console.log("collision");
                        wpawn5.wprmv()

                    }
                    if (((Math.abs(br1.x - wp6.x + 4.1) < 0.05) && (Math.abs(br1.z - wp6.z + 6) < 0.05))) {
                        console.log("collision");
                        wpawn6.wprmv()

                    }
                    if (((Math.abs(br2.x - wp6.x + 4.1) < 0.05) && (Math.abs(br2.z - wp6.z + 6) < 0.05))) {
                        console.log("collision");
                        wpawn6.wprmv()

                    }

                    if (((Math.abs(br1.x - wp7.x + 4.1) < 0.05) && (Math.abs(br1.z - wp7.z + 6) < 0.05))) {
                        console.log("collision");
                        wpawn7.wprmv()

                    }
                    if (((Math.abs(br2.x - wp7.x + 4.1) < 0.05) && (Math.abs(br2.z - wp7.z + 6) < 0.05))) {
                        console.log("collision");
                        wpawn7.wprmv()

                    }
                    if ((Math.abs(br1.x - wp8.x + 4.1) < 0.05) && (Math.abs(br1.z - wp8.z + 6) < 0.05)) {
                        console.log("collision");
                        wpawn8.wprmv()

                    }
                    if ((Math.abs(br2.x - wp8.x + 4.1) < 0.05) && (Math.abs(br2.z - wp8.z + 6) < 0.05)) {
                        console.log("collision");
                        wpawn8.wprmv()

                    }



                    if (((Math.abs(br1.x - wr1.x) < 0.05) && (Math.abs(br1.z - wr1.z + 7) < 0.05))) {
                        console.log("collision");
                        wrook1.wrrmv()
                    }
                    if (((Math.abs(br1.x - wr2.x) < 0.05) && (Math.abs(br1.z - wr2.z + 7) < 0.05))) {
                        console.log("collision");
                        wrook2.wrrmv()
                    }
                    if (((Math.abs(br1.x - wb1.x + 2) <= 0.05) && (Math.abs(br1.z - wb1.z + 7) < 0.05))) {
                        console.log("collision");
                        wbishop1.wbrmv();
                    }
                    if ((Math.abs(br1.x - wb2.x + 2) <= 0.05) && (Math.abs(br1.z - wb2.z + 7) < 0.05)) {
                        console.log("collision");
                        wbishop2.wbrmv();
                    }
                    if (((Math.abs(br1.x - wk2.x + 1) < 0.05) && (Math.abs(br1.z - wk2.z + 7) < 0.05))) {
                        console.log("collision");
                        wknight2.wkrmv()

                    }

                    if (((Math.abs(br1.x - wk1.x + 1) < 0.05) && (Math.abs(br1.z - wk1.z + 7) < 0.05))) {
                        console.log("collision");
                        wknight1.wkrmv()

                    }



                    if (((Math.abs(br2.x - wr1.x) < 0.05) && (Math.abs(br2.z - wr1.z + 7) < 0.05))) {
                        console.log("collision");
                        wrook1.wrrmv()
                    }
                    if (((Math.abs(br2.x - wr2.x) < 0.05) && (Math.abs(br2.z - wr2.z + 7) < 0.05))) {
                        console.log("collision");
                        wrook2.wrrmv()
                    }
                    if (((Math.abs(br2.x - wb1.x + 2) <= 0.05) && (Math.abs(br2.z - wb1.z + 7) < 0.05))) {
                        console.log("collision");
                        wbishop1.wbrmv();
                    }
                    if ((Math.abs(br2.x - wb2.x + 2) <= 0.05) && (Math.abs(br2.z - wb2.z + 7) < 0.05)) {
                        console.log("collision");
                        wbishop2.wbrmv();
                    }
                    if (((Math.abs(br2.x - wk2.x + 1) < 0.05) && (Math.abs(br2.z - wk2.z + 7) < 0.05))) {
                        console.log("collision");
                        wknight2.wkrmv()

                    }

                    if (((Math.abs(br2.x - wk1.x + 1) < 0.05) && (Math.abs(br2.z - wk1.z + 7) < 0.05))) {
                        console.log("collision");
                        wknight1.wkrmv()

                    }

console.log(br1.x + " "+br1.z);
console.log(wki.x + " "+wki.z);


                    if (((Math.abs(br1.x - wq.x + 4.05) <= 0.051) && (Math.abs(br1.z - wq.z + 7.2) <= 0.1))) {
                        console.log("collision");
                        wqueen.wqrmv()
                    }
                    if (((Math.abs(br2.x - wq.x + 4.05) <= 0.051) && (Math.abs(br2.z - wq.z + 7.2) <= 0.1))) {
                        console.log("collision");
                        wqueen.wqrmv()
                    }

                    if (((Math.abs(br1.x - wki.x + 3) < 0.05) && (Math.abs(br1.z - wki.z + 7) < 0.05))) {
                        console.log("collision");
                        wking.wkirmv()
                        endw=0;

                    }
                    if (((Math.abs(br2.x - wki.x + 3) < 0.05) && (Math.abs(br2.z - wki.z + 7) < 0.05))) {
                        console.log("collision");
                        wking.wkirmv()
                        endw=0;

                    }


                }
                rmvLyr()
                turn = 'w';

                clicked = false;


            })

        } else break;
    }
    //for back
    for (let i = 0; i < 8; i++) {
        if ((pz - 0.75 - i) > -4) {
            let select = new THREE.Mesh(plane_geo, plane_mat);
            select.position.set(px - 3.45 + 7, 0.2, pz - 0.65 - i)
            select.name = 'select'
            layer.add(select)
            select.rotation.x = -90 * (Math.PI / 180)
            domEvents.addEventListener(select, 'click', () => {
                let layer_posX = select.getWorldPosition(worldPosition).x;
                let layer_posZ = select.getWorldPosition(worldPosition).z;
                if (layer.getObjectByName('select')) {
                    obj.position.set(px, -0.93, layer_posZ - 0.35)
                    if (t == 'a') {
                        br1 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
                    }
                    else { br2 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z } }


                    // Pawn
                    if (((Math.abs(br2.x - wp1.x + 4.05) < 0.05) && (Math.abs(br2.z - wp1.z + 6) < 0.05))) {
                        console.log("collision");
                        wpawn1.wprmv()

                    }
                    if (((Math.abs(br1.x - wp1.x + 4.05) < 0.05) && (Math.abs(br1.z - wp1.z + 6) < 0.05))) {
                        console.log("collision");
                        wpawn1.wprmv()

                    }
                    if (((Math.abs(br1.x - wp2.x + 4.05) < 0.05) && (Math.abs(br1.z - wp2.z + 6) < 0.05))) {
                        console.log("collision");
                        wpawn2.wprmv()
                    }
                    if (((Math.abs(br2.x - wp2.x + 4.05) < 0.05) && (Math.abs(br2.z - wp2.z + 6) < 0.05))) {
                        console.log("collision");
                        wpawn2.wprmv()
                    }

                    if (((Math.abs(br1.x - wp3.x + 4.05) < 0.05) && (Math.abs(br1.z - wp3.z + 6) < 0.05))) {
                        console.log("collision");
                        wpawn3.wprmv()
                    }
                    if (((Math.abs(br2.x - wp3.x + 4.05) < 0.05) && (Math.abs(br2.z - wp3.z + 6) < 0.05))) {
                        console.log("collision");
                        wpawn3.wprmv()
                    }

                    if (((Math.abs(br1.x - wp4.x + 4.05) < 0.05) && (Math.abs(br1.z - wp4.z + 6) < 0.05))) {
                        console.log("collision");
                        wpawn4.wprmv()

                    }
                    if (((Math.abs(br2.x - wp4.x + 4.05) < 0.05) && (Math.abs(br2.z - wp4.z + 6) < 0.05))) {
                        console.log("collision");
                        wpawn4.wprmv()

                    }
                    if (((Math.abs(br1.x - wp5.x + 4.05) < 0.05) && (Math.abs(br1.z - wp5.z + 6) < 0.05))) {
                        console.log("collision");
                        wpawn5.wprmv()

                    }
                    if (((Math.abs(br2.x - wp5.x + 4.05) < 0.05) && (Math.abs(br2.z - wp5.z + 6) < 0.05))) {
                        console.log("collision");
                        wpawn5.wprmv()

                    }
                    if (((Math.abs(br1.x - wp6.x + 4.05) < 0.05) && (Math.abs(br1.z - wp6.z + 6) < 0.05))) {
                        console.log("collision");
                        wpawn6.wprmv()

                    }
                    if (((Math.abs(br2.x - wp6.x + 4.05) < 0.05) && (Math.abs(br2.z - wp6.z + 6) < 0.05))) {
                        console.log("collision");
                        wpawn6.wprmv()

                    }

                    if (((Math.abs(br1.x - wp7.x + 4.05) < 0.05) && (Math.abs(br1.z - wp7.z + 6) < 0.05))) {
                        console.log("collision");
                        wpawn7.wprmv()

                    }
                    if (((Math.abs(br2.x - wp7.x + 4.05) < 0.05) && (Math.abs(br2.z - wp7.z + 6) < 0.05))) {
                        console.log("collision");
                        wpawn7.wprmv()

                    }
                    if ((Math.abs(br1.x - wp8.x + 4.05) < 0.05) && (Math.abs(br1.z - wp8.z + 6) < 0.05)) {
                        console.log("collision");
                        wpawn8.wprmv()

                    }
                    if ((Math.abs(br2.x - wp8.x + 4.05) < 0.05) && (Math.abs(br2.z - wp8.z + 6) < 0.05)) {
                        console.log("collision");
                        wpawn8.wprmv()

                    }


                    //Rook

                    if (((Math.abs(br1.x - wr1.x) < 0.05) && (Math.abs(br1.z - wr1.z + 7) < 0.05))) {
                        console.log("collision");
                        wrook1.wrrmv()
                    }
                    if (((Math.abs(br1.x - wr2.x) < 0.05) && (Math.abs(br1.z - wr2.z + 7) < 0.05))) {
                        console.log("collision");
                        wrook2.wrrmv()
                    }

                    if (((Math.abs(br2.x - wr1.x) < 0.05) && (Math.abs(br2.z - wr1.z + 7) < 0.05))) {
                        console.log("collision");
                        wrook1.wrrmv()
                    }
                    if (((Math.abs(br2.x - wr2.x) < 0.05) && (Math.abs(br2.z - wr2.z + 7) < 0.05))) {
                        console.log("collision");
                        wrook2.wrrmv()
                    }

                    //bishop

                    if (((Math.abs(br1.x - wb1.x + 2) <= 0.05) && (Math.abs(br1.z - wb1.z + 7) < 0.05))) {
                        console.log("collision");
                        wbishop1.wbrmv();
                    }
                    if ((Math.abs(br1.x - wb2.x + 2) <= 0.05) && (Math.abs(br1.z - wb2.z + 7) < 0.05)) {
                        console.log("collision");
                        wbishop2.wbrmv();
                    }
                    if (((Math.abs(br2.x - wb1.x + 2) <= 0.05) && (Math.abs(br2.z - wb1.z + 7) < 0.05))) {
                        console.log("collision");
                        wbishop1.wbrmv();
                    }
                    if ((Math.abs(br2.x - wb2.x + 2) <= 0.05) && (Math.abs(br2.z - wb2.z + 7) < 0.05)) {
                        console.log("collision");
                        wbishop2.wbrmv();
                    }

                    //knight
                    if (((Math.abs(br1.x - wk2.x + 1) < 0.05) && (Math.abs(br1.z - wk2.z + 7) < 0.05))) {
                        console.log("collision");
                        wknight2.wkrmv()

                    }

                    if (((Math.abs(br1.x - wk1.x + 1) < 0.05) && (Math.abs(br1.z - wk1.z + 7) < 0.05))) {
                        console.log("collision");
                        wknight1.wkrmv()

                    }

                    if (((Math.abs(br2.x - wk2.x + 1) < 0.05) && (Math.abs(br2.z - wk2.z + 7) < 0.05))) {
                        console.log("collision");
                        wknight2.wkrmv()

                    }

                    if (((Math.abs(br2.x - wk1.x + 1) < 0.05) && (Math.abs(br2.z - wk1.z + 7) < 0.05))) {
                        console.log("collision");
                        wknight1.wkrmv()

                    }





                    if (((Math.abs(br1.x - wq.x + 4.05) <= 0.051) && (Math.abs(br1.z - wq.z + 7.1) < 0.1))) {
                        console.log("collision");
                        wqueen.wqrmv()
                    }
                    if (((Math.abs(br2.x - wq.x + 4.05) <= 0.051) && (Math.abs(br2.z - wq.z + 7.1) < 0.1))) {
                        console.log("collision");
                        wqueen.wqrmv()
                    }


                    if (((Math.abs(br1.x - wki.x + 3) < 0.05) && (Math.abs(br1.z - wki.z + 7) < 0.05))) {
                        console.log("collision");
                        wking.wkirmv()
                        endw=0;

                    }
                    if (((Math.abs(br2.x - wki.x + 3) < 0.05) && (Math.abs(br2.z - wki.z + 7) < 0.05))) {
                        console.log("collision");
                        wking.wkirmv()
                        endw=0;

                    }


                }
                rmvLyr()
                turn = 'w';

                clicked = false;


            })

        } else break
    }

    board.add(layer)
}

function Bknight_onClick(px, pz, obj, t) {
    plane_geo = new THREE.PlaneGeometry(0.8, 0.8);
    plane_mat = new THREE.MeshBasicMaterial({ color: 0xd87d7d })

    //front left
    if ((px + 1.55) > -4 && (pz + 2.35) < 4) {

        let select1 = new THREE.Mesh(plane_geo, plane_mat);
        select1.position.set(px + 1.55, 0.2, pz + 2.35)
        select1.rotation.x = -90 * (Math.PI / 180)
        layer.add(select1)
        domEvents.addEventListener(select1, 'click', () => {
            let layer_posX = select1.getWorldPosition(worldPosition).x;
            let layer_posZ = select1.getWorldPosition(worldPosition).z;
            obj.position.set(layer_posX - 2.55, -0.7, layer_posZ - 0.35)
            if (t == 'a') {
                bk1 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
            }
            else { bk2 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z } }



            if (((Math.abs(bk2.x - wp1.x + 3.05) < 0.05) && (Math.abs(bk2.z - wp1.z + 6) < 0.05))) {
                console.log("collision");
                wpawn1.wprmv()

            }
            if (((Math.abs(bk1.x - wp1.x + 3.05) < 0.05) && (Math.abs(bk1.z - wp1.z + 6) < 0.05))) {
                console.log("collision");
                wpawn1.wprmv()

            }
            if (((Math.abs(bk1.x - wp2.x + 3.05) < 0.05) && (Math.abs(bk1.z - wp2.z + 6) < 0.05))) {
                console.log("collision");
                wpawn2.wprmv()
            }
            if (((Math.abs(bk2.x - wp2.x + 3.05) < 0.05) && (Math.abs(bk2.z - wp2.z + 6) < 0.05))) {
                console.log("collision");
                wpawn2.wprmv()
            }

            if (((Math.abs(bk1.x - wp3.x + 3.05) < 0.05) && (Math.abs(bk1.z - wp3.z + 6) < 0.05))) {
                console.log("collision");
                wpawn3.wprmv()
            }
            if (((Math.abs(bk2.x - wp3.x + 3.05) < 0.05) && (Math.abs(bk2.z - wp3.z + 6) < 0.05))) {
                console.log("collision");
                wpawn3.wprmv()
            }

            if (((Math.abs(bk1.x - wp4.x + 3.05) < 0.05) && (Math.abs(bk1.z - wp4.z + 6) < 0.05))) {
                console.log("collision");
                wpawn4.wprmv()

            }
            if (((Math.abs(bk2.x - wp4.x + 3.05) < 0.05) && (Math.abs(bk2.z - wp4.z + 6) < 0.05))) {
                console.log("collision");
                wpawn4.wprmv()

            }
            if (((Math.abs(bk1.x - wp5.x + 3.05) < 0.05) && (Math.abs(bk1.z - wp5.z + 6) < 0.05))) {
                console.log("collision");
                wpawn5.wprmv()

            }
            if (((Math.abs(bk2.x - wp5.x + 3.05) < 0.05) && (Math.abs(bk2.z - wp5.z + 6) < 0.05))) {
                console.log("collision");
                wpawn5.wprmv()

            }
            if (((Math.abs(bk1.x - wp6.x + 3.05) < 0.05) && (Math.abs(bk1.z - wp6.z + 6) < 0.05))) {
                console.log("collision");
                wpawn6.wprmv()

            }
            if (((Math.abs(bk2.x - wp6.x + 3.05) < 0.05) && (Math.abs(bk2.z - wp6.z + 6) < 0.05))) {
                console.log("collision");
                wpawn6.wprmv()

            }

            if (((Math.abs(bk1.x - wp7.x + 3.05) < 0.05) && (Math.abs(bk1.z - wp7.z + 6) < 0.05))) {
                console.log("collision");
                wpawn7.wprmv()

            }
            if (((Math.abs(bk2.x - wp7.x + 3.05) < 0.05) && (Math.abs(bk2.z - wp7.z + 6) < 0.05))) {
                console.log("collision");
                wpawn7.wprmv()

            }
            if ((Math.abs(bk1.x - wp8.x + 3.05) < 0.05) && (Math.abs(bk1.z - wp8.z + 6) < 0.05)) {
                console.log("collision");
                wpawn8.wprmv()

            }
            if ((Math.abs(bk2.x - wp8.x + 3.05) < 0.05) && (Math.abs(bk2.z - wp8.z + 6) < 0.05)) {
                console.log("collision");
                wpawn8.wprmv()

            }




            if (((Math.abs(bk1.x - wr1.x - 1) < 0.05) && (Math.abs(bk1.z - wr1.z + 7) < 0.05))) {
                console.log("collision");
                wrook1.wrrmv()
            }
            if (((Math.abs(bk1.x - wr2.x - 1) < 0.05) && (Math.abs(bk1.z - wr2.z + 7) < 0.05))) {
                console.log("collision");
                wrook2.wrrmv()
            }
            if (((Math.abs(bk2.x - wr1.x - 1) < 0.05) && (Math.abs(bk2.z - wr1.z + 7) < 0.05))) {
                console.log("collision");
                wrook1.wrrmv()
            }
            if (((Math.abs(bk2.x - wr2.x - 1) < 0.05) && (Math.abs(bk2.z - wr2.z + 7) < 0.05))) {
                console.log("collision");
                wrook2.wrrmv()
            }



            if (((Math.abs(bk1.x - wb1.x + 1) <= 0.05) && (Math.abs(bk1.z - wb1.z + 7) < 0.05))) {
                console.log("collision");
                wbishop1.wbrmv();
            }
            if ((Math.abs(bk1.x - wb2.x + 1) <= 0.05) && (Math.abs(bk1.z - wb2.z + 7) < 0.05)) {
                console.log("collision");
                wbishop2.wbrmv();
            }
            if (((Math.abs(bk2.x - wb1.x + 1) <= 0.05) && (Math.abs(bk2.z - wb1.z + 7) < 0.05))) {
                console.log("collision");
                wbishop1.wbrmv();
            }
            if ((Math.abs(bk2.x - wb2.x + 1) <= 0.05) && (Math.abs(bk2.z - wb2.z + 7) < 0.05)) {
                console.log("collision");
                wbishop2.wbrmv();
            }


            if (((Math.abs(bk1.x - wk2.x) < 0.05) && (Math.abs(bk1.z - wk2.z + 7) < 0.05))) {
                console.log("collision");
                wknight2.wkrmv()
            }

            if (((Math.abs(bk1.x - wk1.x) < 0.05) && (Math.abs(bk1.z - wk1.z + 7) < 0.05))) {
                console.log("collision");
                wknight1.wkrmv()
            }

            if (((Math.abs(bk2.x - wk2.x) < 0.05) && (Math.abs(bk2.z - wk2.z + 7) < 0.05))) {
                console.log("collision");
                wknight2.wkrmv()

            }

            if (((Math.abs(bk2.x - wk1.x) < 0.05) && (Math.abs(bk2.z - wk1.z + 7) < 0.05))) {
                console.log("collision");
                wknight2.wkrmv()

            }

            if (((Math.abs(bk1.x - wq.x + 4.05) < 0.05) && (Math.abs(bk1.z - wq.z + 7.1) < 0.05))) {
                console.log("collision");
                wqueen.wqrmv()
            }
            if (((Math.abs(bk1.x - wq.x + 4.05) < 0.05) && (Math.abs(bk1.z - wq.z + 7.1) < 0.05))) {
                console.log("collision");
                wqueen.wqrmv()
            }
            if (((Math.abs(bk2.x - wq.x + 4) < 0.05) && (Math.abs(bk2.z - wq.z + 7.24) < 0.05))) {
                console.log("collision");
                wqueen.wqrmv()
            }

            if (((Math.abs(bk2.x - wq.x + 4) < 0.05) && (Math.abs(bk2.z - wq.z + 7.24) < 0.05))) {
                console.log("collision");
                wqueen.wqrmv()
            }


            if (((Math.abs(bk1.x - wq.x + 3.05) < 0.05) && (Math.abs(bk1.z - wq.z + 7.15) < 0.05))) {
                console.log("collision");
                wqueen.wqrmv()
            }
            if (((Math.abs(bk2.x - wq.x + 3.05) < 0.05) && (Math.abs(bk2.z - wq.z + 7.15) < 0.05))) {
                console.log("collision");
                wqueen.wqrmv()
            }


            if (((Math.abs(bk1.x - wki.x + 2) < 0.05) && (Math.abs(bk1.z - wki.z + 7) < 0.05))) {
                console.log("collision");
                wking.wkirmv()
                        endw=0;

            }
            if (((Math.abs(bk2.x - wki.x + 2) < 0.05) && (Math.abs(bk2.z - wki.z + 7) < 0.05))) {
                console.log("collision");
                wking.wkirmv()
                        endw=0;

            }
            rmvLyr()
            turn = 'w';

            domEvents.removeEventListener(select1, 'click');



            clicked = false;


        })
    }

    //front right
    if ((px + 3.55) < 4 && (pz + 2.35) < 4) {
        let select2 = new THREE.Mesh(plane_geo, plane_mat);
        select2.position.set(px + 3.55, 0.2, pz + 2.35)
        select2.rotation.x = -90 * (Math.PI / 180)
        layer.add(select2)
        domEvents.addEventListener(select2, 'click', () => {

            let layer_posX = select2.getWorldPosition(worldPosition).x;
            let layer_posZ = select2.getWorldPosition(worldPosition).z;

            obj.position.set(layer_posX - 2.55, -0.7, layer_posZ - 0.35)
            if (t == 'a') {
                bk1 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
            }
            else { bk2 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z } }


            if (((Math.abs(bk2.x - wp1.x + 3.05) < 0.05) && (Math.abs(bk2.z - wp1.z + 6) < 0.05))) {
                console.log("collision");
                wpawn1.wprmv()

            }
            if (((Math.abs(bk1.x - wp1.x + 3.05) < 0.05) && (Math.abs(bk1.z - wp1.z + 6) < 0.05))) {
                console.log("collision");
                wpawn1.wprmv()

            }
            if (((Math.abs(bk1.x - wp2.x + 3.05) < 0.05) && (Math.abs(bk1.z - wp2.z + 6) < 0.05))) {
                console.log("collision");
                wpawn2.wprmv()
            }
            if (((Math.abs(bk2.x - wp2.x + 3.05) < 0.05) && (Math.abs(bk2.z - wp2.z + 6) < 0.05))) {
                console.log("collision");
                wpawn2.wprmv()
            }

            if (((Math.abs(bk1.x - wp3.x + 3.05) < 0.05) && (Math.abs(bk1.z - wp3.z + 6) < 0.05))) {
                console.log("collision");
                wpawn3.wprmv()
            }
            if (((Math.abs(bk2.x - wp3.x + 3.05) < 0.05) && (Math.abs(bk2.z - wp3.z + 6) < 0.05))) {
                console.log("collision");
                wpawn3.wprmv()
            }

            if (((Math.abs(bk1.x - wp4.x + 3.05) < 0.05) && (Math.abs(bk1.z - wp4.z + 6) < 0.05))) {
                console.log("collision");
                wpawn4.wprmv()

            }
            if (((Math.abs(bk2.x - wp4.x + 3.05) < 0.05) && (Math.abs(bk2.z - wp4.z + 6) < 0.05))) {
                console.log("collision");
                wpawn4.wprmv()

            }
            if (((Math.abs(bk1.x - wp5.x + 3.05) < 0.05) && (Math.abs(bk1.z - wp5.z + 6) < 0.05))) {
                console.log("collision");
                wpawn5.wprmv()

            }
            if (((Math.abs(bk2.x - wp5.x + 3.05) < 0.05) && (Math.abs(bk2.z - wp5.z + 6) < 0.05))) {
                console.log("collision");
                wpawn5.wprmv()

            }
            if (((Math.abs(bk1.x - wp6.x + 3.05) < 0.05) && (Math.abs(bk1.z - wp6.z + 6) < 0.05))) {
                console.log("collision");
                wpawn6.wprmv()

            }
            if (((Math.abs(bk2.x - wp6.x + 3.05) < 0.05) && (Math.abs(bk2.z - wp6.z + 6) < 0.05))) {
                console.log("collision");
                wpawn6.wprmv()

            }

            if (((Math.abs(bk1.x - wp7.x + 3.05) < 0.05) && (Math.abs(bk1.z - wp7.z + 6) < 0.05))) {
                console.log("collision");
                wpawn7.wprmv()

            }
            if (((Math.abs(bk2.x - wp7.x + 3.05) < 0.05) && (Math.abs(bk2.z - wp7.z + 6) < 0.05))) {
                console.log("collision");
                wpawn7.wprmv()

            }
            if ((Math.abs(bk1.x - wp8.x + 3.05) < 0.05) && (Math.abs(bk1.z - wp8.z + 6) < 0.05)) {
                console.log("collision");
                wpawn8.wprmv()

            }
            if ((Math.abs(bk2.x - wp8.x + 3.05) < 0.05) && (Math.abs(bk2.z - wp8.z + 6) < 0.05)) {
                console.log("collision");
                wpawn8.wprmv()

            }




            if (((Math.abs(bk1.x - wr1.x - 1) < 0.05) && (Math.abs(bk1.z - wr1.z + 7) < 0.05))) {
                console.log("collision");
                wrook1.wrrmv()
            }
            if (((Math.abs(bk1.x - wr2.x - 1) < 0.05) && (Math.abs(bk1.z - wr2.z + 7) < 0.05))) {
                console.log("collision");
                wrook2.wrrmv()
            }
            if (((Math.abs(bk2.x - wr1.x - 1) < 0.05) && (Math.abs(bk2.z - wr1.z + 7) < 0.05))) {
                console.log("collision");
                wrook1.wrrmv()
            }
            if (((Math.abs(bk2.x - wr2.x - 1) < 0.05) && (Math.abs(bk2.z - wr2.z + 7) < 0.05))) {
                console.log("collision");
                wrook2.wrrmv()
            }



            if (((Math.abs(bk1.x - wb1.x + 1) <= 0.05) && (Math.abs(bk1.z - wb1.z + 7) < 0.05))) {
                console.log("collision");
                wbishop1.wbrmv();
            }
            if ((Math.abs(bk1.x - wb2.x + 1) <= 0.05) && (Math.abs(bk1.z - wb2.z + 7) < 0.05)) {
                console.log("collision");
                wbishop2.wbrmv();
            }
            if (((Math.abs(bk2.x - wb1.x + 1) <= 0.05) && (Math.abs(bk2.z - wb1.z + 7) < 0.05))) {
                console.log("collision");
                wbishop1.wbrmv();
            }
            if ((Math.abs(bk2.x - wb2.x + 1) <= 0.05) && (Math.abs(bk2.z - wb2.z + 7) < 0.05)) {
                console.log("collision");
                wbishop2.wbrmv();
            }


            if (((Math.abs(bk1.x - wk2.x) < 0.05) && (Math.abs(bk1.z - wk2.z + 7) < 0.05))) {
                console.log("collision");
                wknight2.wkrmv()
            }

            if (((Math.abs(bk1.x - wk1.x) < 0.05) && (Math.abs(bk1.z - wk1.z + 7) < 0.05))) {
                console.log("collision");
                wknight1.wkrmv()
            }

            if (((Math.abs(bk2.x - wk2.x) < 0.05) && (Math.abs(bk2.z - wk2.z + 7) < 0.05))) {
                console.log("collision");
                wknight2.wkrmv()

            }

            if (((Math.abs(bk2.x - wk1.x) < 0.05) && (Math.abs(bk2.z - wk1.z + 7) < 0.05))) {
                console.log("collision");
                wknight2.wkrmv()

            }
            if (((Math.abs(bk1.x - wq.x + 3.05) < 0.05) && (Math.abs(bk1.z - wq.z + 7.15) < 0.05))) {
                console.log("collision");
                wqueen.wqrmv()
            }
            if (((Math.abs(bk2.x - wq.x + 3.05) < 0.05) && (Math.abs(bk2.z - wq.z + 7.15) < 0.05))) {
                console.log("collision");
                wqueen.wqrmv()
            }

            if (((Math.abs(bk1.x - wki.x + 2) < 0.05) && (Math.abs(bk1.z - wki.z + 7) < 0.05))) {
                console.log("collision");
                wking.wkirmv()
                        endw=0;

            }
            if (((Math.abs(bk2.x - wki.x + 2) < 0.05) && (Math.abs(bk2.z - wki.z + 7) < 0.05))) {
                console.log("collision");
                wking.wkirmv()
                        endw=0;

            }
            rmvLyr()
            turn = 'w';
            domEvents.removeEventListener(select2, 'click');


            clicked = false;


        })
    }

    //left back
    if ((px + 0.55) > -4 && (pz + 1.35) < 4) {
        let select3 = new THREE.Mesh(plane_geo, plane_mat);
        select3.position.set(px + 0.55, 0.2, pz + 1.35)
        select3.rotation.x = -90 * (Math.PI / 180)


        layer.add(select3)
        domEvents.addEventListener(select3, 'click', () => {
            let layer_posX = select3.getWorldPosition(worldPosition).x;
            let layer_posZ = select3.getWorldPosition(worldPosition).z;

            obj.position.set(layer_posX - 2.55, -0.7, layer_posZ - 0.35)
            if (t == 'a') {
                bk1 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
            }
            else { bk2 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z } }

            if (((Math.abs(bk2.x - wp1.x + 3.05) < 0.05) && (Math.abs(bk2.z - wp1.z + 6) < 0.05))) {
                console.log("collision");
                wpawn1.wprmv()

            }
            if (((Math.abs(bk1.x - wp1.x + 3.05) < 0.05) && (Math.abs(bk1.z - wp1.z + 6) < 0.05))) {
                console.log("collision");
                wpawn1.wprmv()

            }
            if (((Math.abs(bk1.x - wp2.x + 3.05) < 0.05) && (Math.abs(bk1.z - wp2.z + 6) < 0.05))) {
                console.log("collision");
                wpawn2.wprmv()
            }
            if (((Math.abs(bk2.x - wp2.x + 3.05) < 0.05) && (Math.abs(bk2.z - wp2.z + 6) < 0.05))) {
                console.log("collision");
                wpawn2.wprmv()
            }

            if (((Math.abs(bk1.x - wp3.x + 3.05) < 0.05) && (Math.abs(bk1.z - wp3.z + 6) < 0.05))) {
                console.log("collision");
                wpawn3.wprmv()
            }
            if (((Math.abs(bk2.x - wp3.x + 3.05) < 0.05) && (Math.abs(bk2.z - wp3.z + 6) < 0.05))) {
                console.log("collision");
                wpawn3.wprmv()
            }

            if (((Math.abs(bk1.x - wp4.x + 3.05) < 0.05) && (Math.abs(bk1.z - wp4.z + 6) < 0.05))) {
                console.log("collision");
                wpawn4.wprmv()

            }
            if (((Math.abs(bk2.x - wp4.x + 3.05) < 0.05) && (Math.abs(bk2.z - wp4.z + 6) < 0.05))) {
                console.log("collision");
                wpawn4.wprmv()

            }
            if (((Math.abs(bk1.x - wp5.x + 3.05) < 0.05) && (Math.abs(bk1.z - wp5.z + 6) < 0.05))) {
                console.log("collision");
                wpawn5.wprmv()

            }
            if (((Math.abs(bk2.x - wp5.x + 3.05) < 0.05) && (Math.abs(bk2.z - wp5.z + 6) < 0.05))) {
                console.log("collision");
                wpawn5.wprmv()

            }
            if (((Math.abs(bk1.x - wp6.x + 3.05) < 0.05) && (Math.abs(bk1.z - wp6.z + 6) < 0.05))) {
                console.log("collision");
                wpawn6.wprmv()

            }
            if (((Math.abs(bk2.x - wp6.x + 3.05) < 0.05) && (Math.abs(bk2.z - wp6.z + 6) < 0.05))) {
                console.log("collision");
                wpawn6.wprmv()

            }

            if (((Math.abs(bk1.x - wp7.x + 3.05) < 0.05) && (Math.abs(bk1.z - wp7.z + 6) < 0.05))) {
                console.log("collision");
                wpawn7.wprmv()

            }
            if (((Math.abs(bk2.x - wp7.x + 3.05) < 0.05) && (Math.abs(bk2.z - wp7.z + 6) < 0.05))) {
                console.log("collision");
                wpawn7.wprmv()

            }
            if ((Math.abs(bk1.x - wp8.x + 3.05) < 0.05) && (Math.abs(bk1.z - wp8.z + 6) < 0.05)) {
                console.log("collision");
                wpawn8.wprmv()

            }
            if ((Math.abs(bk2.x - wp8.x + 3.05) < 0.05) && (Math.abs(bk2.z - wp8.z + 6) < 0.05)) {
                console.log("collision");
                wpawn8.wprmv()

            }




            if (((Math.abs(bk1.x - wr1.x - 1) < 0.05) && (Math.abs(bk1.z - wr1.z + 7) < 0.05))) {
                console.log("collision");
                wrook1.wrrmv()
            }
            if (((Math.abs(bk1.x - wr2.x - 1) < 0.05) && (Math.abs(bk1.z - wr2.z + 7) < 0.05))) {
                console.log("collision");
                wrook2.wrrmv()
            }
            if (((Math.abs(bk2.x - wr1.x - 1) < 0.05) && (Math.abs(bk2.z - wr1.z + 7) < 0.05))) {
                console.log("collision");
                wrook1.wrrmv()
            }
            if (((Math.abs(bk2.x - wr2.x - 1) < 0.05) && (Math.abs(bk2.z - wr2.z + 7) < 0.05))) {
                console.log("collision");
                wrook2.wrrmv()
            }



            if (((Math.abs(bk1.x - wb1.x + 1) <= 0.05) && (Math.abs(bk1.z - wb1.z + 7) < 0.05))) {
                console.log("collision");
                wbishop1.wbrmv();
            }
            if ((Math.abs(bk1.x - wb2.x + 1) <= 0.05) && (Math.abs(bk1.z - wb2.z + 7) < 0.05)) {
                console.log("collision");
                wbishop2.wbrmv();
            }
            if (((Math.abs(bk2.x - wb1.x + 1) <= 0.05) && (Math.abs(bk2.z - wb1.z + 7) < 0.05))) {
                console.log("collision");
                wbishop1.wbrmv();
            }
            if ((Math.abs(bk2.x - wb2.x + 1) <= 0.05) && (Math.abs(bk2.z - wb2.z + 7) < 0.05)) {
                console.log("collision");
                wbishop2.wbrmv();
            }


            if (((Math.abs(bk1.x - wk2.x) < 0.05) && (Math.abs(bk1.z - wk2.z + 7) < 0.05))) {
                console.log("collision");
                wknight2.wkrmv()
            }

            if (((Math.abs(bk1.x - wk1.x) < 0.05) && (Math.abs(bk1.z - wk1.z + 7) < 0.05))) {
                console.log("collision");
                wknight1.wkrmv()
            }

            if (((Math.abs(bk2.x - wk2.x) < 0.05) && (Math.abs(bk2.z - wk2.z + 7) < 0.05))) {
                console.log("collision");
                wknight2.wkrmv()

            }

            if (((Math.abs(bk2.x - wk1.x) < 0.05) && (Math.abs(bk2.z - wk1.z + 7) < 0.05))) {
                console.log("collision");
                wknight2.wkrmv()

            }
            if (((Math.abs(bk1.x - wq.x + 3.05) < 0.05) && (Math.abs(bk1.z - wq.z + 7.15) < 0.05))) {
                console.log("collision");
                wqueen.wqrmv()
            }
            if (((Math.abs(bk2.x - wq.x + 3.05) < 0.05) && (Math.abs(bk2.z - wq.z + 7.15) < 0.05))) {
                console.log("collision");
                wqueen.wqrmv()
            }

            if (((Math.abs(bk1.x - wki.x + 2) < 0.05) && (Math.abs(bk1.z - wki.z + 7) < 0.05))) {
                console.log("collision");
                wking.wkirmv()
                        endw=0;

            }
            if (((Math.abs(bk2.x - wki.x + 2) < 0.05) && (Math.abs(bk2.z - wki.z + 7) < 0.05))) {
                console.log("collision");
                wking.wkirmv()
                        endw=0;

            }
            rmvLyr()
            turn = 'w';
            domEvents.removeEventListener(select3, 'click');


            clicked = false;


        })

    }
    //left front
    if ((px + 0.55) > -4 && (pz + -0.65) > -4) {
        let select4 = new THREE.Mesh(plane_geo, plane_mat);
        select4.position.set(px + 0.55, 0.2, pz + -0.65)
        select4.rotation.x = -90 * (Math.PI / 180)
        console.log("4");

        layer.add(select4)
        domEvents.addEventListener(select4, 'click', () => {

            let layer_posX = select4.getWorldPosition(worldPosition).x;
            let layer_posZ = select4.getWorldPosition(worldPosition).z;

            obj.position.set(layer_posX - 2.55, -0.7, layer_posZ - 0.35)
            if (t == 'a') {
                bk1 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
            }
            else { bk2 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z } }


            if (((Math.abs(bk2.x - wp1.x + 3.05) < 0.05) && (Math.abs(bk2.z - wp1.z + 6) < 0.05))) {
                console.log("collision");
                wpawn1.wprmv()

            }
            if (((Math.abs(bk1.x - wp1.x + 3.05) < 0.05) && (Math.abs(bk1.z - wp1.z + 6) < 0.05))) {
                console.log("collision");
                wpawn1.wprmv()

            }
            if (((Math.abs(bk1.x - wp2.x + 3.05) < 0.05) && (Math.abs(bk1.z - wp2.z + 6) < 0.05))) {
                console.log("collision");
                wpawn2.wprmv()
            }
            if (((Math.abs(bk2.x - wp2.x + 3.05) < 0.05) && (Math.abs(bk2.z - wp2.z + 6) < 0.05))) {
                console.log("collision");
                wpawn2.wprmv()
            }

            if (((Math.abs(bk1.x - wp3.x + 3.05) < 0.05) && (Math.abs(bk1.z - wp3.z + 6) < 0.05))) {
                console.log("collision");
                wpawn3.wprmv()
            }
            if (((Math.abs(bk2.x - wp3.x + 3.05) < 0.05) && (Math.abs(bk2.z - wp3.z + 6) < 0.05))) {
                console.log("collision");
                wpawn3.wprmv()
            }

            if (((Math.abs(bk1.x - wp4.x + 3.05) < 0.05) && (Math.abs(bk1.z - wp4.z + 6) < 0.05))) {
                console.log("collision");
                wpawn4.wprmv()

            }
            if (((Math.abs(bk2.x - wp4.x + 3.05) < 0.05) && (Math.abs(bk2.z - wp4.z + 6) < 0.05))) {
                console.log("collision");
                wpawn4.wprmv()

            }
            if (((Math.abs(bk1.x - wp5.x + 3.05) < 0.05) && (Math.abs(bk1.z - wp5.z + 6) < 0.05))) {
                console.log("collision");
                wpawn5.wprmv()

            }
            if (((Math.abs(bk2.x - wp5.x + 3.05) < 0.05) && (Math.abs(bk2.z - wp5.z + 6) < 0.05))) {
                console.log("collision");
                wpawn5.wprmv()

            }
            if (((Math.abs(bk1.x - wp6.x + 3.05) < 0.05) && (Math.abs(bk1.z - wp6.z + 6) < 0.05))) {
                console.log("collision");
                wpawn6.wprmv()

            }
            if (((Math.abs(bk2.x - wp6.x + 3.05) < 0.05) && (Math.abs(bk2.z - wp6.z + 6) < 0.05))) {
                console.log("collision");
                wpawn6.wprmv()

            }

            if (((Math.abs(bk1.x - wp7.x + 3.05) < 0.05) && (Math.abs(bk1.z - wp7.z + 6) < 0.05))) {
                console.log("collision");
                wpawn7.wprmv()

            }
            if (((Math.abs(bk2.x - wp7.x + 3.05) < 0.05) && (Math.abs(bk2.z - wp7.z + 6) < 0.05))) {
                console.log("collision");
                wpawn7.wprmv()

            }
            if ((Math.abs(bk1.x - wp8.x + 3.05) < 0.05) && (Math.abs(bk1.z - wp8.z + 6) < 0.05)) {
                console.log("collision");
                wpawn8.wprmv()

            }
            if ((Math.abs(bk2.x - wp8.x + 3.05) < 0.05) && (Math.abs(bk2.z - wp8.z + 6) < 0.05)) {
                console.log("collision");
                wpawn8.wprmv()

            }




            if (((Math.abs(bk1.x - wr1.x - 1) < 0.05) && (Math.abs(bk1.z - wr1.z + 7) < 0.05))) {
                console.log("collision");
                wrook1.wrrmv()
            }
            if (((Math.abs(bk1.x - wr2.x - 1) < 0.05) && (Math.abs(bk1.z - wr2.z + 7) < 0.05))) {
                console.log("collision");
                wrook2.wrrmv()
            }
            if (((Math.abs(bk2.x - wr1.x - 1) < 0.05) && (Math.abs(bk2.z - wr1.z + 7) < 0.05))) {
                console.log("collision");
                wrook1.wrrmv()
            }
            if (((Math.abs(bk2.x - wr2.x - 1) < 0.05) && (Math.abs(bk2.z - wr2.z + 7) < 0.05))) {
                console.log("collision");
                wrook2.wrrmv()
            }



            if (((Math.abs(bk1.x - wb1.x + 1) <= 0.05) && (Math.abs(bk1.z - wb1.z + 7) < 0.05))) {
                console.log("collision");
                wbishop1.wbrmv();
            }
            if ((Math.abs(bk1.x - wb2.x + 1) <= 0.05) && (Math.abs(bk1.z - wb2.z + 7) < 0.05)) {
                console.log("collision");
                wbishop2.wbrmv();
            }
            if (((Math.abs(bk2.x - wb1.x + 1) <= 0.05) && (Math.abs(bk2.z - wb1.z + 7) < 0.05))) {
                console.log("collision");
                wbishop1.wbrmv();
            }
            if ((Math.abs(bk2.x - wb2.x + 1) <= 0.05) && (Math.abs(bk2.z - wb2.z + 7) < 0.05)) {
                console.log("collision");
                wbishop2.wbrmv();
            }


            if (((Math.abs(bk1.x - wk2.x) < 0.05) && (Math.abs(bk1.z - wk2.z + 7) < 0.05))) {
                console.log("collision");
                wknight2.wkrmv()
            }

            if (((Math.abs(bk1.x - wk1.x) < 0.05) && (Math.abs(bk1.z - wk1.z + 7) < 0.05))) {
                console.log("collision");
                wknight1.wkrmv()
            }

            if (((Math.abs(bk2.x - wk2.x) < 0.05) && (Math.abs(bk2.z - wk2.z + 7) < 0.05))) {
                console.log("collision");
                wknight2.wkrmv()

            }

            if (((Math.abs(bk2.x - wk1.x) < 0.05) && (Math.abs(bk2.z - wk1.z + 7) < 0.05))) {
                console.log("collision");
                wknight2.wkrmv()

            }

            if (((Math.abs(bk1.x - wq.x + 3.05) < 0.05) && (Math.abs(bk1.z - wq.z + 7.15) < 0.05))) {
                console.log("collision");
                wqueen.wqrmv()
            }
            if (((Math.abs(bk2.x - wq.x + 3.05) < 0.05) && (Math.abs(bk2.z - wq.z + 7.15) < 0.05))) {
                console.log("collision");
                wqueen.wqrmv()
            }

            if (((Math.abs(bk1.x - wki.x + 2) < 0.05) && (Math.abs(bk1.z - wki.z + 7) < 0.05))) {
                console.log("collision");
                wking.wkirmv()
                endw=0;

            }
            if (((Math.abs(bk2.x - wki.x + 2) < 0.05) && (Math.abs(bk2.z - wki.z + 7) < 0.05))) {
                console.log("collision");
                wking.wkirmv()
                endw=0;

            }

            rmvLyr()
            turn = 'w';
            domEvents.removeEventListener(select4, 'click');


            clicked = false;


        })
    }
    //right back
    if ((px + 4.55) < 4 && (pz + 1.35) < 4) {
        let select5 = new THREE.Mesh(plane_geo, plane_mat);
        select5.position.set(px + 4.55, 0.2, pz + 1.35)
        select5.rotation.x = -90 * (Math.PI / 180)
        console.log("5");

        layer.add(select5)
        domEvents.addEventListener(select5, 'click', () => {
            let layer_posX = select5.getWorldPosition(worldPosition).x;
            let layer_posZ = select5.getWorldPosition(worldPosition).z;

            obj.position.set(layer_posX - 2.55, -0.7, layer_posZ - 0.35)
            if (t == 'a') {
                bk1 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
            }
            else { bk2 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z } }

            if (((Math.abs(bk2.x - wp1.x + 3.05) < 0.05) && (Math.abs(bk2.z - wp1.z + 6) < 0.05))) {
                console.log("collision");
                wpawn1.wprmv()

            }
            if (((Math.abs(bk1.x - wp1.x + 3.05) < 0.05) && (Math.abs(bk1.z - wp1.z + 6) < 0.05))) {
                console.log("collision");
                wpawn1.wprmv()

            }
            if (((Math.abs(bk1.x - wp2.x + 3.05) < 0.05) && (Math.abs(bk1.z - wp2.z + 6) < 0.05))) {
                console.log("collision");
                wpawn2.wprmv()
            }
            if (((Math.abs(bk2.x - wp2.x + 3.05) < 0.05) && (Math.abs(bk2.z - wp2.z + 6) < 0.05))) {
                console.log("collision");
                wpawn2.wprmv()
            }

            if (((Math.abs(bk1.x - wp3.x + 3.05) < 0.05) && (Math.abs(bk1.z - wp3.z + 6) < 0.05))) {
                console.log("collision");
                wpawn3.wprmv()
            }
            if (((Math.abs(bk2.x - wp3.x + 3.05) < 0.05) && (Math.abs(bk2.z - wp3.z + 6) < 0.05))) {
                console.log("collision");
                wpawn3.wprmv()
            }

            if (((Math.abs(bk1.x - wp4.x + 3.05) < 0.05) && (Math.abs(bk1.z - wp4.z + 6) < 0.05))) {
                console.log("collision");
                wpawn4.wprmv()

            }
            if (((Math.abs(bk2.x - wp4.x + 3.05) < 0.05) && (Math.abs(bk2.z - wp4.z + 6) < 0.05))) {
                console.log("collision");
                wpawn4.wprmv()

            }
            if (((Math.abs(bk1.x - wp5.x + 3.05) < 0.05) && (Math.abs(bk1.z - wp5.z + 6) < 0.05))) {
                console.log("collision");
                wpawn5.wprmv()

            }
            if (((Math.abs(bk2.x - wp5.x + 3.05) < 0.05) && (Math.abs(bk2.z - wp5.z + 6) < 0.05))) {
                console.log("collision");
                wpawn5.wprmv()

            }
            if (((Math.abs(bk1.x - wp6.x + 3.05) < 0.05) && (Math.abs(bk1.z - wp6.z + 6) < 0.05))) {
                console.log("collision");
                wpawn6.wprmv()

            }
            if (((Math.abs(bk2.x - wp6.x + 3.05) < 0.05) && (Math.abs(bk2.z - wp6.z + 6) < 0.05))) {
                console.log("collision");
                wpawn6.wprmv()

            }

            if (((Math.abs(bk1.x - wp7.x + 3.05) < 0.05) && (Math.abs(bk1.z - wp7.z + 6) < 0.05))) {
                console.log("collision");
                wpawn7.wprmv()

            }
            if (((Math.abs(bk2.x - wp7.x + 3.05) < 0.05) && (Math.abs(bk2.z - wp7.z + 6) < 0.05))) {
                console.log("collision");
                wpawn7.wprmv()

            }
            if ((Math.abs(bk1.x - wp8.x + 3.05) < 0.05) && (Math.abs(bk1.z - wp8.z + 6) < 0.05)) {
                console.log("collision");
                wpawn8.wprmv()

            }
            if ((Math.abs(bk2.x - wp8.x + 3.05) < 0.05) && (Math.abs(bk2.z - wp8.z + 6) < 0.05)) {
                console.log("collision");
                wpawn8.wprmv()

            }




            if (((Math.abs(bk1.x - wr1.x - 1) < 0.05) && (Math.abs(bk1.z - wr1.z + 7) < 0.05))) {
                console.log("collision");
                wrook1.wrrmv()
            }
            if (((Math.abs(bk1.x - wr2.x - 1) < 0.05) && (Math.abs(bk1.z - wr2.z + 7) < 0.05))) {
                console.log("collision");
                wrook2.wrrmv()
            }
            if (((Math.abs(bk2.x - wr1.x - 1) < 0.05) && (Math.abs(bk2.z - wr1.z + 7) < 0.05))) {
                console.log("collision");
                wrook1.wrrmv()
            }
            if (((Math.abs(bk2.x - wr2.x - 1) < 0.05) && (Math.abs(bk2.z - wr2.z + 7) < 0.05))) {
                console.log("collision");
                wrook2.wrrmv()
            }



            if (((Math.abs(bk1.x - wb1.x + 1) <= 0.05) && (Math.abs(bk1.z - wb1.z + 7) < 0.05))) {
                console.log("collision");
                wbishop1.wbrmv();
            }
            if ((Math.abs(bk1.x - wb2.x + 1) <= 0.05) && (Math.abs(bk1.z - wb2.z + 7) < 0.05)) {
                console.log("collision");
                wbishop2.wbrmv();
            }
            if (((Math.abs(bk2.x - wb1.x + 1) <= 0.05) && (Math.abs(bk2.z - wb1.z + 7) < 0.05))) {
                console.log("collision");
                wbishop1.wbrmv();
            }
            if ((Math.abs(bk2.x - wb2.x + 1) <= 0.05) && (Math.abs(bk2.z - wb2.z + 7) < 0.05)) {
                console.log("collision");
                wbishop2.wbrmv();
            }


            if (((Math.abs(bk1.x - wk2.x) < 0.05) && (Math.abs(bk1.z - wk2.z + 7) < 0.05))) {
                console.log("collision");
                wknight2.wkrmv()
            }

            if (((Math.abs(bk1.x - wk1.x) < 0.05) && (Math.abs(bk1.z - wk1.z + 7) < 0.05))) {
                console.log("collision");
                wknight1.wkrmv()
            }

            if (((Math.abs(bk2.x - wk2.x) < 0.05) && (Math.abs(bk2.z - wk2.z + 7) < 0.05))) {
                console.log("collision");
                wknight2.wkrmv()

            }

            if (((Math.abs(bk2.x - wk1.x) < 0.05) && (Math.abs(bk2.z - wk1.z + 7) < 0.05))) {
                console.log("collision");
                wknight2.wkrmv()

            }

            if (((Math.abs(bk1.x - wq.x + 3.05) < 0.05) && (Math.abs(bk1.z - wq.z + 7.15) < 0.05))) {
                console.log("collision");
                wqueen.wqrmv()
            }
            if (((Math.abs(bk2.x - wq.x + 3.05) < 0.05) && (Math.abs(bk2.z - wq.z + 7.15) < 0.05))) {
                console.log("collision");
                wqueen.wqrmv()
            }

            if (((Math.abs(bk1.x - wki.x + 2) < 0.05) && (Math.abs(bk1.z - wki.z + 7) < 0.05))) {
                console.log("collision");
                wking.wkirmv()
                        endw=0;

            }
            if (((Math.abs(bk2.x - wki.x + 2) < 0.05) && (Math.abs(bk2.z - wki.z + 7) < 0.05))) {
                console.log("collision");
                wking.wkirmv()
                        endw=0;

            }
            rmvLyr()
            turn = 'w';
            domEvents.removeEventListener(select5, 'click');


            clicked = false;


        })

    }
    //right front
    if ((px + 4.55) < 4 && (pz + -0.65) > -4) {
        let select6 = new THREE.Mesh(plane_geo, plane_mat);
        select6.rotation.x = -90 * (Math.PI / 180)
        select6.position.set(px + 4.55, 0.2, pz + -0.65)
        layer.add(select6)

        domEvents.addEventListener(select6, 'click', () => {

            let layer_posX = select6.getWorldPosition(worldPosition).x;
            let layer_posZ = select6.getWorldPosition(worldPosition).z;

            obj.position.set(layer_posX - 2.55, -0.7, layer_posZ - 0.35)
            if (t == 'a') {
                bk1 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
            }
            else { bk2 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z } }

            if (((Math.abs(bk2.x - wp1.x + 3.05) < 0.05) && (Math.abs(bk2.z - wp1.z + 6) < 0.05))) {
                console.log("collision");
                wpawn1.wprmv()

            }
            if (((Math.abs(bk1.x - wp1.x + 3.05) < 0.05) && (Math.abs(bk1.z - wp1.z + 6) < 0.05))) {
                console.log("collision");
                wpawn1.wprmv()

            }
            if (((Math.abs(bk1.x - wp2.x + 3.05) < 0.05) && (Math.abs(bk1.z - wp2.z + 6) < 0.05))) {
                console.log("collision");
                wpawn2.wprmv()
            }
            if (((Math.abs(bk2.x - wp2.x + 3.05) < 0.05) && (Math.abs(bk2.z - wp2.z + 6) < 0.05))) {
                console.log("collision");
                wpawn2.wprmv()
            }

            if (((Math.abs(bk1.x - wp3.x + 3.05) < 0.05) && (Math.abs(bk1.z - wp3.z + 6) < 0.05))) {
                console.log("collision");
                wpawn3.wprmv()
            }
            if (((Math.abs(bk2.x - wp3.x + 3.05) < 0.05) && (Math.abs(bk2.z - wp3.z + 6) < 0.05))) {
                console.log("collision");
                wpawn3.wprmv()
            }

            if (((Math.abs(bk1.x - wp4.x + 3.05) < 0.05) && (Math.abs(bk1.z - wp4.z + 6) < 0.05))) {
                console.log("collision");
                wpawn4.wprmv()

            }
            if (((Math.abs(bk2.x - wp4.x + 3.05) < 0.05) && (Math.abs(bk2.z - wp4.z + 6) < 0.05))) {
                console.log("collision");
                wpawn4.wprmv()

            }
            if (((Math.abs(bk1.x - wp5.x + 3.05) < 0.05) && (Math.abs(bk1.z - wp5.z + 6) < 0.05))) {
                console.log("collision");
                wpawn5.wprmv()

            }
            if (((Math.abs(bk2.x - wp5.x + 3.05) < 0.05) && (Math.abs(bk2.z - wp5.z + 6) < 0.05))) {
                console.log("collision");
                wpawn5.wprmv()

            }
            if (((Math.abs(bk1.x - wp6.x + 3.05) < 0.05) && (Math.abs(bk1.z - wp6.z + 6) < 0.05))) {
                console.log("collision");
                wpawn6.wprmv()

            }
            if (((Math.abs(bk2.x - wp6.x + 3.05) < 0.05) && (Math.abs(bk2.z - wp6.z + 6) < 0.05))) {
                console.log("collision");
                wpawn6.wprmv()

            }

            if (((Math.abs(bk1.x - wp7.x + 3.05) < 0.05) && (Math.abs(bk1.z - wp7.z + 6) < 0.05))) {
                console.log("collision");
                wpawn7.wprmv()

            }
            if (((Math.abs(bk2.x - wp7.x + 3.05) < 0.05) && (Math.abs(bk2.z - wp7.z + 6) < 0.05))) {
                console.log("collision");
                wpawn7.wprmv()

            }
            if ((Math.abs(bk1.x - wp8.x + 3.05) < 0.05) && (Math.abs(bk1.z - wp8.z + 6) < 0.05)) {
                console.log("collision");
                wpawn8.wprmv()

            }
            if ((Math.abs(bk2.x - wp8.x + 3.05) < 0.05) && (Math.abs(bk2.z - wp8.z + 6) < 0.05)) {
                console.log("collision");
                wpawn8.wprmv()

            }




            if (((Math.abs(bk1.x - wr1.x - 1) < 0.05) && (Math.abs(bk1.z - wr1.z + 7) < 0.05))) {
                console.log("collision");
                wrook1.wrrmv()
            }
            if (((Math.abs(bk1.x - wr2.x - 1) < 0.05) && (Math.abs(bk1.z - wr2.z + 7) < 0.05))) {
                console.log("collision");
                wrook2.wrrmv()
            }
            if (((Math.abs(bk2.x - wr1.x - 1) < 0.05) && (Math.abs(bk2.z - wr1.z + 7) < 0.05))) {
                console.log("collision");
                wrook1.wrrmv()
            }
            if (((Math.abs(bk2.x - wr2.x - 1) < 0.05) && (Math.abs(bk2.z - wr2.z + 7) < 0.05))) {
                console.log("collision");
                wrook2.wrrmv()
            }



            if (((Math.abs(bk1.x - wb1.x + 1) <= 0.05) && (Math.abs(bk1.z - wb1.z + 7) < 0.05))) {
                console.log("collision");
                wbishop1.wbrmv();
            }
            if ((Math.abs(bk1.x - wb2.x + 1) <= 0.05) && (Math.abs(bk1.z - wb2.z + 7) < 0.05)) {
                console.log("collision");
                wbishop2.wbrmv();
            }
            if (((Math.abs(bk2.x - wb1.x + 1) <= 0.05) && (Math.abs(bk2.z - wb1.z + 7) < 0.05))) {
                console.log("collision");
                wbishop1.wbrmv();
            }
            if ((Math.abs(bk2.x - wb2.x + 1) <= 0.05) && (Math.abs(bk2.z - wb2.z + 7) < 0.05)) {
                console.log("collision");
                wbishop2.wbrmv();
            }


            if (((Math.abs(bk1.x - wk2.x) < 0.05) && (Math.abs(bk1.z - wk2.z + 7) < 0.05))) {
                console.log("collision");
                wknight2.wkrmv()
            }

            if (((Math.abs(bk1.x - wk1.x) < 0.05) && (Math.abs(bk1.z - wk1.z + 7) < 0.05))) {
                console.log("collision");
                wknight1.wkrmv()
            }

            if (((Math.abs(bk2.x - wk2.x) < 0.05) && (Math.abs(bk2.z - wk2.z + 7) < 0.05))) {
                console.log("collision");
                wknight2.wkrmv()

            }

            if (((Math.abs(bk2.x - wk1.x) < 0.05) && (Math.abs(bk2.z - wk1.z + 7) < 0.05))) {
                console.log("collision");
                wknight2.wkrmv()

            }

            if (((Math.abs(bk1.x - wq.x + 3.05) < 0.05) && (Math.abs(bk1.z - wq.z + 7.15) < 0.05))) {
                console.log("collision");
                wqueen.wqrmv()
            }
            if (((Math.abs(bk2.x - wq.x + 3.05) < 0.05) && (Math.abs(bk2.z - wq.z + 7.15) < 0.05))) {
                console.log("collision");
                wqueen.wqrmv()
            }
            if (((Math.abs(bk1.x - wki.x + 2) < 0.05) && (Math.abs(bk1.z - wki.z + 7) < 0.05))) {
                console.log("collision");
                wking.wkirmv()
                        endw=0;

            }
            if (((Math.abs(bk2.x - wki.x + 2) < 0.05) && (Math.abs(bk2.z - wki.z + 7) < 0.05))) {
                console.log("collision");
                wking.wkirmv()
                        endw=0;

            }

            rmvLyr()
            turn = 'w';
            domEvents.removeEventListener(select6, 'click');


            clicked = false;


        })

    }

    //front left
    if ((px + 1.55) > -4 && (pz + 2.35 - 4) > -4) {
        let select7 = new THREE.Mesh(plane_geo, plane_mat);
        select7.rotation.x = -90 * (Math.PI / 180)
        select7.position.set(px + 1.55, 0.2, pz + 2.35 - 4)
        layer.add(select7)

        domEvents.addEventListener(select7, 'click', () => {
            console.log("7");
            let layer_posX = select7.getWorldPosition(worldPosition).x;
            let layer_posZ = select7.getWorldPosition(worldPosition).z;

            obj.position.set(layer_posX - 2.55, -0.7, layer_posZ - 0.35)
            if (t == 'a') {
                bk1 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
            }
            else { bk2 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z } }

            if (((Math.abs(bk2.x - wp1.x + 3.05) < 0.05) && (Math.abs(bk2.z - wp1.z + 6) < 0.05))) {
                console.log("collision");
                wpawn1.wprmv()

            }
            if (((Math.abs(bk1.x - wp1.x + 3.05) < 0.05) && (Math.abs(bk1.z - wp1.z + 6) < 0.05))) {
                console.log("collision");
                wpawn1.wprmv()

            }
            if (((Math.abs(bk1.x - wp2.x + 3.05) < 0.05) && (Math.abs(bk1.z - wp2.z + 6) < 0.05))) {
                console.log("collision");
                wpawn2.wprmv()
            }
            if (((Math.abs(bk2.x - wp2.x + 3.05) < 0.05) && (Math.abs(bk2.z - wp2.z + 6) < 0.05))) {
                console.log("collision");
                wpawn2.wprmv()
            }

            if (((Math.abs(bk1.x - wp3.x + 3.05) < 0.05) && (Math.abs(bk1.z - wp3.z + 6) < 0.05))) {
                console.log("collision");
                wpawn3.wprmv()
            }
            if (((Math.abs(bk2.x - wp3.x + 3.05) < 0.05) && (Math.abs(bk2.z - wp3.z + 6) < 0.05))) {
                console.log("collision");
                wpawn3.wprmv()
            }

            if (((Math.abs(bk1.x - wp4.x + 3.05) < 0.05) && (Math.abs(bk1.z - wp4.z + 6) < 0.05))) {
                console.log("collision");
                wpawn4.wprmv()

            }
            if (((Math.abs(bk2.x - wp4.x + 3.05) < 0.05) && (Math.abs(bk2.z - wp4.z + 6) < 0.05))) {
                console.log("collision");
                wpawn4.wprmv()

            }
            if (((Math.abs(bk1.x - wp5.x + 3.05) < 0.05) && (Math.abs(bk1.z - wp5.z + 6) < 0.05))) {
                console.log("collision");
                wpawn5.wprmv()

            }
            if (((Math.abs(bk2.x - wp5.x + 3.05) < 0.05) && (Math.abs(bk2.z - wp5.z + 6) < 0.05))) {
                console.log("collision");
                wpawn5.wprmv()

            }
            if (((Math.abs(bk1.x - wp6.x + 3.05) < 0.05) && (Math.abs(bk1.z - wp6.z + 6) < 0.05))) {
                console.log("collision");
                wpawn6.wprmv()

            }
            if (((Math.abs(bk2.x - wp6.x + 3.05) < 0.05) && (Math.abs(bk2.z - wp6.z + 6) < 0.05))) {
                console.log("collision");
                wpawn6.wprmv()

            }

            if (((Math.abs(bk1.x - wp7.x + 3.05) < 0.05) && (Math.abs(bk1.z - wp7.z + 6) < 0.05))) {
                console.log("collision");
                wpawn7.wprmv()

            }
            if (((Math.abs(bk2.x - wp7.x + 3.05) < 0.05) && (Math.abs(bk2.z - wp7.z + 6) < 0.05))) {
                console.log("collision");
                wpawn7.wprmv()

            }
            if ((Math.abs(bk1.x - wp8.x + 3.05) < 0.05) && (Math.abs(bk1.z - wp8.z + 6) < 0.05)) {
                console.log("collision");
                wpawn8.wprmv()

            }
            if ((Math.abs(bk2.x - wp8.x + 3.05) < 0.05) && (Math.abs(bk2.z - wp8.z + 6) < 0.05)) {
                console.log("collision");
                wpawn8.wprmv()

            }




            if (((Math.abs(bk1.x - wr1.x - 1) < 0.05) && (Math.abs(bk1.z - wr1.z + 7) < 0.05))) {
                console.log("collision");
                wrook1.wrrmv()
            }
            if (((Math.abs(bk1.x - wr2.x - 1) < 0.05) && (Math.abs(bk1.z - wr2.z + 7) < 0.05))) {
                console.log("collision");
                wrook2.wrrmv()
            }
            if (((Math.abs(bk2.x - wr1.x - 1) < 0.05) && (Math.abs(bk2.z - wr1.z + 7) < 0.05))) {
                console.log("collision");
                wrook1.wrrmv()
            }
            if (((Math.abs(bk2.x - wr2.x - 1) < 0.05) && (Math.abs(bk2.z - wr2.z + 7) < 0.05))) {
                console.log("collision");
                wrook2.wrrmv()
            }



            if (((Math.abs(bk1.x - wb1.x + 1) <= 0.05) && (Math.abs(bk1.z - wb1.z + 7) < 0.05))) {
                console.log("collision");
                wbishop1.wbrmv();
            }
            if ((Math.abs(bk1.x - wb2.x + 1) <= 0.05) && (Math.abs(bk1.z - wb2.z + 7) < 0.05)) {
                console.log("collision");
                wbishop2.wbrmv();
            }
            if (((Math.abs(bk2.x - wb1.x + 1) <= 0.05) && (Math.abs(bk2.z - wb1.z + 7) < 0.05))) {
                console.log("collision");
                wbishop1.wbrmv();
            }
            if ((Math.abs(bk2.x - wb2.x + 1) <= 0.05) && (Math.abs(bk2.z - wb2.z + 7) < 0.05)) {
                console.log("collision");
                wbishop2.wbrmv();
            }


            if (((Math.abs(bk1.x - wk2.x) < 0.05) && (Math.abs(bk1.z - wk2.z + 7) < 0.05))) {
                console.log("collision");
                wknight2.wkrmv()
            }

            if (((Math.abs(bk1.x - wk1.x) < 0.05) && (Math.abs(bk1.z - wk1.z + 7) < 0.05))) {
                console.log("collision");
                wknight1.wkrmv()
            }

            if (((Math.abs(bk2.x - wk2.x) < 0.05) && (Math.abs(bk2.z - wk2.z + 7) < 0.05))) {
                console.log("collision");
                wknight2.wkrmv()

            }

            if (((Math.abs(bk2.x - wk1.x) < 0.05) && (Math.abs(bk2.z - wk1.z + 7) < 0.05))) {
                console.log("collision");
                wknight2.wkrmv()

            }

            if (((Math.abs(bk1.x - wq.x + 3.05) < 0.05) && (Math.abs(bk1.z - wq.z + 7.15) < 0.05))) {
                console.log("collision");
                wqueen.wqrmv()
            }
            if (((Math.abs(bk2.x - wq.x + 3.05) < 0.05) && (Math.abs(bk2.z - wq.z + 7.15) < 0.05))) {
                console.log("collision");
                wqueen.wqrmv()
            }

            if (((Math.abs(bk1.x - wki.x + 2) < 0.05) && (Math.abs(bk1.z - wki.z + 7) < 0.05))) {
                console.log("collision");
                wking.wkirmv()
                        endw=0;

            }
            if (((Math.abs(bk2.x - wki.x + 2) < 0.05) && (Math.abs(bk2.z - wki.z + 7) < 0.05))) {
                console.log("collision");
                wking.wkirmv()
                        endw=0;

            }

            rmvLyr()
            turn = 'w';
            domEvents.removeEventListener(select7, 'click');


            clicked = false;


        })
    }
    //front right
    if ((px + 3.55) < 4 && (pz + 1.35 - 3) > -4) {
        let select8 = new THREE.Mesh(plane_geo, plane_mat);
        select8.rotation.x = -90 * (Math.PI / 180)
        select8.position.set(px + 3.55, 0.2, pz + 1.35 - 3)
        layer.add(select8)


        domEvents.addEventListener(select8, 'click', () => {
            let layer_posX = select8.getWorldPosition(worldPosition).x;
            let layer_posZ = select8.getWorldPosition(worldPosition).z;

            obj.position.set(layer_posX - 2.55, -0.7, layer_posZ - 0.35)
            if (t == 'a') {
                bk1 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
            }
            else { bk2 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z } }

            if (((Math.abs(bk2.x - wp1.x + 3.05) < 0.05) && (Math.abs(bk2.z - wp1.z + 6) < 0.05))) {
                console.log("collision");
                wpawn1.wprmv()

            }
            if (((Math.abs(bk1.x - wp1.x + 3.05) < 0.05) && (Math.abs(bk1.z - wp1.z + 6) < 0.05))) {
                console.log("collision");
                wpawn1.wprmv()

            }
            if (((Math.abs(bk1.x - wp2.x + 3.05) < 0.05) && (Math.abs(bk1.z - wp2.z + 6) < 0.05))) {
                console.log("collision");
                wpawn2.wprmv()
            }
            if (((Math.abs(bk2.x - wp2.x + 3.05) < 0.05) && (Math.abs(bk2.z - wp2.z + 6) < 0.05))) {
                console.log("collision");
                wpawn2.wprmv()
            }

            if (((Math.abs(bk1.x - wp3.x + 3.05) < 0.05) && (Math.abs(bk1.z - wp3.z + 6) < 0.05))) {
                console.log("collision");
                wpawn3.wprmv()
            }
            if (((Math.abs(bk2.x - wp3.x + 3.05) < 0.05) && (Math.abs(bk2.z - wp3.z + 6) < 0.05))) {
                console.log("collision");
                wpawn3.wprmv()
            }

            if (((Math.abs(bk1.x - wp4.x + 3.05) < 0.05) && (Math.abs(bk1.z - wp4.z + 6) < 0.05))) {
                console.log("collision");
                wpawn4.wprmv()

            }
            if (((Math.abs(bk2.x - wp4.x + 3.05) < 0.05) && (Math.abs(bk2.z - wp4.z + 6) < 0.05))) {
                console.log("collision");
                wpawn4.wprmv()

            }
            if (((Math.abs(bk1.x - wp5.x + 3.05) < 0.05) && (Math.abs(bk1.z - wp5.z + 6) < 0.05))) {
                console.log("collision");
                wpawn5.wprmv()

            }
            if (((Math.abs(bk2.x - wp5.x + 3.05) < 0.05) && (Math.abs(bk2.z - wp5.z + 6) < 0.05))) {
                console.log("collision");
                wpawn5.wprmv()

            }
            if (((Math.abs(bk1.x - wp6.x + 3.05) < 0.05) && (Math.abs(bk1.z - wp6.z + 6) < 0.05))) {
                console.log("collision");
                wpawn6.wprmv()

            }
            if (((Math.abs(bk2.x - wp6.x + 3.05) < 0.05) && (Math.abs(bk2.z - wp6.z + 6) < 0.05))) {
                console.log("collision");
                wpawn6.wprmv()

            }

            if (((Math.abs(bk1.x - wp7.x + 3.05) < 0.05) && (Math.abs(bk1.z - wp7.z + 6) < 0.05))) {
                console.log("collision");
                wpawn7.wprmv()

            }
            if (((Math.abs(bk2.x - wp7.x + 3.05) < 0.05) && (Math.abs(bk2.z - wp7.z + 6) < 0.05))) {
                console.log("collision");
                wpawn7.wprmv()

            }
            if ((Math.abs(bk1.x - wp8.x + 3.05) < 0.05) && (Math.abs(bk1.z - wp8.z + 6) < 0.05)) {
                console.log("collision");
                wpawn8.wprmv()

            }
            if ((Math.abs(bk2.x - wp8.x + 3.05) < 0.05) && (Math.abs(bk2.z - wp8.z + 6) < 0.05)) {
                console.log("collision");
                wpawn8.wprmv()

            }




            if (((Math.abs(bk1.x - wr1.x - 1) < 0.05) && (Math.abs(bk1.z - wr1.z + 7) < 0.05))) {
                console.log("collision");
                wrook1.wrrmv()
            }
            if (((Math.abs(bk1.x - wr2.x - 1) < 0.05) && (Math.abs(bk1.z - wr2.z + 7) < 0.05))) {
                console.log("collision");
                wrook2.wrrmv()
            }
            if (((Math.abs(bk2.x - wr1.x - 1) < 0.05) && (Math.abs(bk2.z - wr1.z + 7) < 0.05))) {
                console.log("collision");
                wrook1.wrrmv()
            }
            if (((Math.abs(bk2.x - wr2.x - 1) < 0.05) && (Math.abs(bk2.z - wr2.z + 7) < 0.05))) {
                console.log("collision");
                wrook2.wrrmv()
            }



            if (((Math.abs(bk1.x - wb1.x + 1) <= 0.05) && (Math.abs(bk1.z - wb1.z + 7) < 0.05))) {
                console.log("collision");
                wbishop1.wbrmv();
            }
            if ((Math.abs(bk1.x - wb2.x + 1) <= 0.05) && (Math.abs(bk1.z - wb2.z + 7) < 0.05)) {
                console.log("collision");
                wbishop2.wbrmv();
            }
            if (((Math.abs(bk2.x - wb1.x + 1) <= 0.05) && (Math.abs(bk2.z - wb1.z + 7) < 0.05))) {
                console.log("collision");
                wbishop1.wbrmv();
            }
            if ((Math.abs(bk2.x - wb2.x + 1) <= 0.05) && (Math.abs(bk2.z - wb2.z + 7) < 0.05)) {
                console.log("collision");
                wbishop2.wbrmv();
            }


            if (((Math.abs(bk1.x - wk2.x) < 0.05) && (Math.abs(bk1.z - wk2.z + 7) < 0.05))) {
                console.log("collision");
                wknight2.wkrmv()
            }

            if (((Math.abs(bk1.x - wk1.x) < 0.05) && (Math.abs(bk1.z - wk1.z + 7) < 0.05))) {
                console.log("collision");
                wknight1.wkrmv()
            }

            if (((Math.abs(bk2.x - wk2.x) < 0.05) && (Math.abs(bk2.z - wk2.z + 7) < 0.05))) {
                console.log("collision");
                wknight2.wkrmv()

            }

            if (((Math.abs(bk2.x - wk1.x) < 0.05) && (Math.abs(bk2.z - wk1.z + 7) < 0.05))) {
                console.log("collision");
                wknight2.wkrmv()

            }
            if (((Math.abs(bk1.x - wq.x + 3.05) < 0.05) && (Math.abs(bk1.z - wq.z + 7.15) < 0.05))) {
                console.log("collision");
                wqueen.wqrmv()
            }
            if (((Math.abs(bk2.x - wq.x + 3.05) < 0.05) && (Math.abs(bk2.z - wq.z + 7.15) < 0.05))) {
                console.log("collision");
                wqueen.wqrmv()
            }

            if (((Math.abs(bk1.x - wki.x + 2) < 0.05) && (Math.abs(bk1.z - wki.z + 7) < 0.05))) {
                console.log("collision");
                wking.wkirmv()
                        endw=0;

            }
            if (((Math.abs(bk2.x - wki.x + 2) < 0.05) && (Math.abs(bk2.z - wki.z + 7) < 0.05))) {
                console.log("collision");
                wking.wkirmv()
                        endw=0;

            }

            rmvLyr()
            turn = 'w';
            domEvents.removeEventListener(select8, 'click', true);


            clicked = false;


        })
    }

    board.add(layer)

}

function Bbishop_onClick(px, pz, obj, t) {
    plane_geo = new THREE.PlaneGeometry(0.8, 0.8);
    plane_mat = new THREE.MeshBasicMaterial({ color: 0xd87d7d })

    //front right

    for (i = 0; i < 8; i++) {
        if ((pz + 1.35 + i) < 4 && (px - 2.45 + 5 + i) < 4) {
            let s = new THREE.Mesh(plane_geo, plane_mat);
            s.position.set(px - 2.45 + 5 + i, 0.2, pz + 1.35 + i);
            s.rotation.x = -90 * (Math.PI / 180)
            s.name = 'select'
            layer.add(s);
            domEvents.addEventListener(s, 'click', () => {
                let layer_posX = s.getWorldPosition(worldPosition).x;
                let layer_posZ = s.getWorldPosition(worldPosition).z;

                obj.position.set(layer_posX - 1.55, -0.7, layer_posZ - 0.35)
                if (t == 'a') {
                    bb1 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
                }
                else { bb2 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z } }



                if (((Math.abs(bb2.x - wp1.x + 2.05) < 0.05) && (Math.abs(bb2.z - wp1.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn1.wprmv()

                }
                if (((Math.abs(bb1.x - wp1.x + 2.05) < 0.05) && (Math.abs(bb1.z - wp1.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn1.wprmv()

                }
                if (((Math.abs(bb1.x - wp2.x + 2.05) < 0.05) && (Math.abs(bb1.z - wp2.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn2.wprmv()
                }
                if (((Math.abs(bb2.x - wp2.x + 2.05) < 0.05) && (Math.abs(bb2.z - wp2.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn2.wprmv()
                }

                if (((Math.abs(bb1.x - wp3.x + 2.05) < 0.05) && (Math.abs(bb1.z - wp3.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn3.wprmv()
                }
                if (((Math.abs(bb2.x - wp3.x + 2.05) < 0.05) && (Math.abs(bb2.z - wp3.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn3.wprmv()
                }

                if (((Math.abs(bb1.x - wp4.x + 2.05) < 0.05) && (Math.abs(bb1.z - wp4.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn4.wprmv()

                }
                if (((Math.abs(bb2.x - wp4.x + 2.05) < 0.05) && (Math.abs(bb2.z - wp4.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn4.wprmv()

                }
                if (((Math.abs(bb1.x - wp5.x + 2.05) < 0.05) && (Math.abs(bb1.z - wp5.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn5.wprmv()

                }
                if (((Math.abs(bb2.x - wp5.x + 2.05) < 0.05) && (Math.abs(bb2.z - wp5.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn5.wprmv()

                }
                if (((Math.abs(bb1.x - wp6.x + 2.05) < 0.05) && (Math.abs(bb1.z - wp6.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn6.wprmv()

                }
                if (((Math.abs(bb2.x - wp6.x + 2.05) < 0.05) && (Math.abs(bb2.z - wp6.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn6.wprmv()

                }

                if (((Math.abs(bb1.x - wp7.x + 2.05) < 0.05) && (Math.abs(bb1.z - wp7.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn7.wprmv()

                }
                if (((Math.abs(bb2.x - wp7.x + 2.05) < 0.05) && (Math.abs(bb2.z - wp7.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn7.wprmv()

                }
                if ((Math.abs(bb1.x - wp8.x + 2.05) < 0.05) && (Math.abs(bb1.z - wp8.z + 6) < 0.05)) {
                    console.log("collision");
                    wpawn8.wprmv()

                }
                if ((Math.abs(bb2.x - wp8.x + 2.05) < 0.05) && (Math.abs(bb2.z - wp8.z + 6) < 0.05)) {
                    console.log("collision");
                    wpawn8.wprmv()

                }



                if (((Math.abs(bb1.x - wr1.x - 2) < 0.05) && (Math.abs(bb1.z - wr1.z + 7) < 0.05))) {
                    console.log("collision");
                    wrook1.wrrmv()
                }
                if (((Math.abs(bb1.x - wr2.x - 2) < 0.05) && (Math.abs(bb1.z - wr2.z + 7) < 0.05))) {
                    console.log("collision");
                    wrook2.wrrmv()
                }
                if (((Math.abs(bb2.x - wr1.x - 2) < 0.05) && (Math.abs(bb2.z - wr1.z + 7) < 0.05))) {
                    console.log("collision");
                    wrook1.wrrmv()
                }
                if (((Math.abs(bb2.x - wr2.x - 2) < 0.05) && (Math.abs(bb2.z - wr2.z + 7) < 0.05))) {
                    console.log("collision");
                    wrook2.wrrmv()
                }



                if (((Math.abs(bb1.x - wb1.x + 0.05) <= 0.05) && (Math.abs(bb1.z - wb1.z + 7) < 0.05))) {
                    console.log("collision");
                    wbishop1.wbrmv();
                }
                if ((Math.abs(bb1.x - wb2.x + 0.05) <= 0.05) && (Math.abs(bb1.z - wb2.z + 7) < 0.05)) {
                    console.log("collision");
                    wbishop2.wbrmv();
                }
                if (((Math.abs(bb2.x - wb1.x + 0.05) <= 0.05) && (Math.abs(bb2.z - wb1.z + 7) < 0.05))) {
                    console.log("collision");
                    wbishop1.wbrmv();
                }
                if ((Math.abs(bb2.x - wb2.x + 0.05) <= 0.05) && (Math.abs(bb2.z - wb2.z + 7) < 0.05)) {
                    console.log("collision");
                    wbishop2.wbrmv();
                }


                if (((Math.abs(bb1.x - wk2.x - 1) < 0.05) && (Math.abs(bb1.z - wk2.z + 7.1) < 0.05))) {
                    console.log("collision");
                    wknight2.wkrmv()
                }

                if (((Math.abs(bb1.x - wk1.x - 1) < 0.05) && (Math.abs(bb1.z - wk1.z + 7.1) < 0.05))) {
                    console.log("collision");
                    wknight1.wkrmv()
                }

                if (((Math.abs(bb2.x - wk2.x - 1) < 0.05) && (Math.abs(bb2.z - wk2.z + 7.1) < 0.05))) {
                    console.log("collision");
                    wknight2.wkrmv()

                }

                if (((Math.abs(bb2.x - wk1.x - 1) < 0.05) && (Math.abs(bb2.z - wk1.z + 7.1) < 0.05))) {
                    console.log("collision");
                    wknight2.wkrmv()

                }


                if (((Math.abs(bb1.x - wq.x + 2) <= 0.051) && (Math.abs(bb1.z - wq.z + 7.2) < 0.1))) {
                    console.log("collision");
                    wqueen.wqrmv()
                }
                if (((Math.abs(bb2.x - wq.x + 2) <= 0.051) && (Math.abs(bb2.z - wq.z + 7.2) < 0.1))) {
                    console.log("collision");
                    wqueen.wqrmv()
                }

                if (((Math.abs(bb1.x - wki.x + 1.05) < 0.05) && (Math.abs(bb1.z - wki.z + 7) < 0.05))) {
                    console.log("collision");
                    wking.wkirmv()
                        endw=0;

                }
                if (((Math.abs(bb2.x - wki.x + 1.05) < 0.05) && (Math.abs(bb2.z - wki.z + 7) < 0.05))) {
                    console.log("collision");
                    wking.wkirmv()
                        endw=0;

                }

                rmvLyr()
                turn = 'w';

                clicked = false;
            })


        }
    }

    //front left
    for (let i = 0; i < 8; i++) {
        if ((pz + 1.35 + i) < 4 && (px - 4.95 + 5.45 - i) > -4) {
            let select = new THREE.Mesh(plane_geo, plane_mat);
            select.position.set(px - 4.95 + 5.45 - i, 0.2, pz + 1.35 + i)
            layer.add(select)
            select.name = 'select'
            select.rotation.x = -90 * (Math.PI / 180)
            domEvents.addEventListener(select, 'click', () => {

                let layer_posX = select.getWorldPosition(worldPosition).x;
                let layer_posZ = select.getWorldPosition(worldPosition).z;

                obj.position.set(layer_posX - 1.55, -0.7, layer_posZ - 0.35)
                if (t == 'a') {
                    bb1 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
                }
                else { bb2 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z } }

                if (((Math.abs(bb2.x - wp1.x + 2.05) < 0.05) && (Math.abs(bb2.z - wp1.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn1.wprmv()

                }
                if (((Math.abs(bb1.x - wp1.x + 2.05) < 0.05) && (Math.abs(bb1.z - wp1.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn1.wprmv()

                }
                if (((Math.abs(bb1.x - wp2.x + 2.05) < 0.05) && (Math.abs(bb1.z - wp2.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn2.wprmv()
                }
                if (((Math.abs(bb2.x - wp2.x + 2.05) < 0.05) && (Math.abs(bb2.z - wp2.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn2.wprmv()
                }

                if (((Math.abs(bb1.x - wp3.x + 2.05) < 0.05) && (Math.abs(bb1.z - wp3.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn3.wprmv()
                }
                if (((Math.abs(bb2.x - wp3.x + 2.05) < 0.05) && (Math.abs(bb2.z - wp3.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn3.wprmv()
                }

                if (((Math.abs(bb1.x - wp4.x + 2.05) < 0.05) && (Math.abs(bb1.z - wp4.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn4.wprmv()

                }
                if (((Math.abs(bb2.x - wp4.x + 2.05) < 0.05) && (Math.abs(bb2.z - wp4.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn4.wprmv()

                }
                if (((Math.abs(bb1.x - wp5.x + 2.05) < 0.05) && (Math.abs(bb1.z - wp5.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn5.wprmv()

                }
                if (((Math.abs(bb2.x - wp5.x + 2.05) < 0.05) && (Math.abs(bb2.z - wp5.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn5.wprmv()

                }
                if (((Math.abs(bb1.x - wp6.x + 2.05) < 0.05) && (Math.abs(bb1.z - wp6.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn6.wprmv()

                }
                if (((Math.abs(bb2.x - wp6.x + 2.05) < 0.05) && (Math.abs(bb2.z - wp6.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn6.wprmv()

                }

                if (((Math.abs(bb1.x - wp7.x + 2.05) < 0.05) && (Math.abs(bb1.z - wp7.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn7.wprmv()

                }
                if (((Math.abs(bb2.x - wp7.x + 2.05) < 0.05) && (Math.abs(bb2.z - wp7.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn7.wprmv()

                }
                if ((Math.abs(bb1.x - wp8.x + 2.05) < 0.05) && (Math.abs(bb1.z - wp8.z + 6) < 0.05)) {
                    console.log("collision");
                    wpawn8.wprmv()

                }
                if ((Math.abs(bb2.x - wp8.x + 2.05) < 0.05) && (Math.abs(bb2.z - wp8.z + 6) < 0.05)) {
                    console.log("collision");
                    wpawn8.wprmv()

                }



                if (((Math.abs(bb1.x - wr1.x - 2) < 0.05) && (Math.abs(bb1.z - wr1.z + 7) < 0.05))) {
                    console.log("collision");
                    wrook1.wrrmv()
                }
                if (((Math.abs(bb1.x - wr2.x - 2) < 0.05) && (Math.abs(bb1.z - wr2.z + 7) < 0.05))) {
                    console.log("collision");
                    wrook2.wrrmv()
                }
                if (((Math.abs(bb2.x - wr1.x - 2) < 0.05) && (Math.abs(bb2.z - wr1.z + 7) < 0.05))) {
                    console.log("collision");
                    wrook1.wrrmv()
                }
                if (((Math.abs(bb2.x - wr2.x - 2) < 0.05) && (Math.abs(bb2.z - wr2.z + 7) < 0.05))) {
                    console.log("collision");
                    wrook2.wrrmv()
                }



                if (((Math.abs(bb1.x - wb1.x + 0.05) <= 0.05) && (Math.abs(bb1.z - wb1.z + 7) < 0.05))) {
                    console.log("collision");
                    wbishop1.wbrmv();
                }
                if ((Math.abs(bb1.x - wb2.x + 0.05) <= 0.05) && (Math.abs(bb1.z - wb2.z + 7) < 0.05)) {
                    console.log("collision");
                    wbishop2.wbrmv();
                }
                if (((Math.abs(bb2.x - wb1.x + 0.05) <= 0.05) && (Math.abs(bb2.z - wb1.z + 7) < 0.05))) {
                    console.log("collision");
                    wbishop1.wbrmv();
                }
                if ((Math.abs(bb2.x - wb2.x + 0.05) <= 0.05) && (Math.abs(bb2.z - wb2.z + 7) < 0.05)) {
                    console.log("collision");
                    wbishop2.wbrmv();
                }


                if (((Math.abs(bb1.x - wk2.x - 1) < 0.05) && (Math.abs(bb1.z - wk2.z + 7.1) < 0.05))) {
                    console.log("collision");
                    wknight2.wkrmv()
                }

                if (((Math.abs(bb1.x - wk1.x - 1) < 0.05) && (Math.abs(bb1.z - wk1.z + 7.1) < 0.05))) {
                    console.log("collision");
                    wknight1.wkrmv()
                }

                if (((Math.abs(bb2.x - wk2.x - 1) < 0.05) && (Math.abs(bb2.z - wk2.z + 7.1) < 0.05))) {
                    console.log("collision");
                    wknight2.wkrmv()

                }

                if (((Math.abs(bb2.x - wk1.x - 1) < 0.05) && (Math.abs(bb2.z - wk1.z + 7.1) < 0.05))) {
                    console.log("collision");
                    wknight2.wkrmv()

                }

                if (((Math.abs(bb1.x - wq.x + 2.1) <= 0.051) && (Math.abs(bb1.z - wq.z + 7.15) < 0.1))) {
                    console.log("collision");
                    wqueen.wqrmv()
                }
                if (((Math.abs(bb2.x - wq.x + 2.1) <= 0.051) && (Math.abs(bb2.z - wq.z + 7.15) < 0.1))) {
                    console.log("collision");
                    wqueen.wqrmv()
                }


                if (((Math.abs(bb1.x - wki.x + 1.05) < 0.05) && (Math.abs(bb1.z - wki.z + 7) < 0.05))) {
                    console.log("collision");
                    wking.wkirmv()
                        endw=0;

                }
                if (((Math.abs(bb2.x - wki.x + 1.05) < 0.05) && (Math.abs(bb2.z - wki.z + 7) < 0.05))) {
                    console.log("collision");
                    wking.wkirmv()
                        endw=0;

                }

                rmvLyr()
                turn = 'w';

                clicked = false;
            })

        } else break
    }

    //back right
    for (let i = 0; i < 8; i++) {
        if ((pz + 0.35 - i) > -4 && (px - 2.45 + 4 + i) < 4) {
            let select = new THREE.Mesh(plane_geo, plane_mat);
            select.position.set(px - 2.45 + 4 + i, 0.2, pz + 0.35 - i)
            layer.add(select)
            select.name = 'select'
            select.rotation.x = -90 * (Math.PI / 180)
            domEvents.addEventListener(select, 'click', () => {

                let layer_posX = select.getWorldPosition(worldPosition).x;
                let layer_posZ = select.getWorldPosition(worldPosition).z;
                obj.position.set(layer_posX - 1.55, -0.7, layer_posZ - 0.35)
                if (t == 'a') {
                    bb1 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
                }
                else { bb2 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z } }

                if (((Math.abs(bb2.x - wp1.x + 2.05) < 0.05) && (Math.abs(bb2.z - wp1.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn1.wprmv()

                }
                if (((Math.abs(bb1.x - wp1.x + 2.05) < 0.05) && (Math.abs(bb1.z - wp1.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn1.wprmv()

                }
                if (((Math.abs(bb1.x - wp2.x + 2.05) < 0.05) && (Math.abs(bb1.z - wp2.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn2.wprmv()
                }
                if (((Math.abs(bb2.x - wp2.x + 2.05) < 0.05) && (Math.abs(bb2.z - wp2.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn2.wprmv()
                }

                if (((Math.abs(bb1.x - wp3.x + 2.05) < 0.05) && (Math.abs(bb1.z - wp3.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn3.wprmv()
                }
                if (((Math.abs(bb2.x - wp3.x + 2.05) < 0.05) && (Math.abs(bb2.z - wp3.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn3.wprmv()
                }

                if (((Math.abs(bb1.x - wp4.x + 2.05) < 0.05) && (Math.abs(bb1.z - wp4.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn4.wprmv()

                }
                if (((Math.abs(bb2.x - wp4.x + 2.05) < 0.05) && (Math.abs(bb2.z - wp4.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn4.wprmv()

                }
                if (((Math.abs(bb1.x - wp5.x + 2.05) < 0.05) && (Math.abs(bb1.z - wp5.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn5.wprmv()

                }
                if (((Math.abs(bb2.x - wp5.x + 2.05) < 0.05) && (Math.abs(bb2.z - wp5.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn5.wprmv()

                }
                if (((Math.abs(bb1.x - wp6.x + 2.05) < 0.05) && (Math.abs(bb1.z - wp6.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn6.wprmv()

                }
                if (((Math.abs(bb2.x - wp6.x + 2.05) < 0.05) && (Math.abs(bb2.z - wp6.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn6.wprmv()

                }

                if (((Math.abs(bb1.x - wp7.x + 2.05) < 0.05) && (Math.abs(bb1.z - wp7.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn7.wprmv()

                }
                if (((Math.abs(bb2.x - wp7.x + 2.05) < 0.05) && (Math.abs(bb2.z - wp7.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn7.wprmv()

                }
                if ((Math.abs(bb1.x - wp8.x + 2.05) < 0.05) && (Math.abs(bb1.z - wp8.z + 6) < 0.05)) {
                    console.log("collision");
                    wpawn8.wprmv()

                }
                if ((Math.abs(bb2.x - wp8.x + 2.05) < 0.05) && (Math.abs(bb2.z - wp8.z + 6) < 0.05)) {
                    console.log("collision");
                    wpawn8.wprmv()

                }



                if (((Math.abs(bb1.x - wr1.x - 2) < 0.05) && (Math.abs(bb1.z - wr1.z + 7) < 0.05))) {
                    console.log("collision");
                    wrook1.wrrmv()
                }
                if (((Math.abs(bb1.x - wr2.x - 2) < 0.05) && (Math.abs(bb1.z - wr2.z + 7) < 0.05))) {
                    console.log("collision");
                    wrook2.wrrmv()
                }
                if (((Math.abs(bb2.x - wr1.x - 2) < 0.05) && (Math.abs(bb2.z - wr1.z + 7) < 0.05))) {
                    console.log("collision");
                    wrook1.wrrmv()
                }
                if (((Math.abs(bb2.x - wr2.x - 2) < 0.05) && (Math.abs(bb2.z - wr2.z + 7) < 0.05))) {
                    console.log("collision");
                    wrook2.wrrmv()
                }

                if (((Math.abs(bb1.x - wb1.x + 0.05) <= 0.05) && (Math.abs(bb1.z - wb1.z + 7) < 0.05))) {
                    console.log("collision");
                    wbishop1.wbrmv();
                }
                if ((Math.abs(bb1.x - wb2.x + 0.05) <= 0.05) && (Math.abs(bb1.z - wb2.z + 7) < 0.05)) {
                    console.log("collision");
                    wbishop2.wbrmv();
                }
                if (((Math.abs(bb2.x - wb1.x + 0.05) <= 0.05) && (Math.abs(bb2.z - wb1.z + 7) < 0.05))) {
                    console.log("collision");
                    wbishop1.wbrmv();
                }
                if ((Math.abs(bb2.x - wb2.x + 0.05) <= 0.05) && (Math.abs(bb2.z - wb2.z + 7) < 0.05)) {
                    console.log("collision");
                    wbishop2.wbrmv();
                }


                if (((Math.abs(bb1.x - wk2.x - 1) < 0.05) && (Math.abs(bb1.z - wk2.z + 7.1) < 0.05))) {
                    console.log("collision");
                    wknight2.wkrmv()
                }

                if (((Math.abs(bb1.x - wk1.x - 1) < 0.05) && (Math.abs(bb1.z - wk1.z + 7.1) < 0.05))) {
                    console.log("collision");
                    wknight1.wkrmv()
                }

                if (((Math.abs(bb2.x - wk2.x - 1) < 0.05) && (Math.abs(bb2.z - wk2.z + 7.1) < 0.05))) {
                    console.log("collision");
                    wknight2.wkrmv()

                }

                if (((Math.abs(bb2.x - wk1.x - 1) < 0.05) && (Math.abs(bb2.z - wk1.z + 7.1) < 0.05))) {
                    console.log("collision");
                    wknight2.wkrmv()

                }

                if (((Math.abs(bb1.x - wq.x + 2) <= 0.051) && (Math.abs(bb1.z - wq.z + 7.2) < 0.1))) {
                    console.log("collision");
                    wqueen.wqrmv()
                }
                if (((Math.abs(bb2.x - wq.x + 2) <= 0.051) && (Math.abs(bb2.z - wq.z + 7.2) < 0.1))) {
                    console.log("collision");
                    wqueen.wqrmv()
                }

                if (((Math.abs(bb1.x - wki.x + 1.05) < 0.05) && (Math.abs(bb1.z - wki.z + 7) < 0.05))) {
                    console.log("collision");
                    wking.wkirmv()
                        endw=0;

                }
                if (((Math.abs(bb2.x - wki.x + 1.05) < 0.05) && (Math.abs(bb2.z - wki.z + 7) < 0.05))) {
                    console.log("collision");
                    wking.wkirmv()
                        endw=0;

                }
                rmvLyr()
                turn = 'w'
                clicked = false;
            })

        } else break
    }

    //back left
    for (let i = 0; i < 8; i++) {
        if ((pz - 0.65 - i) > -4 && (px - 3.95 + 4.45 - i) > -4) {
            let select = new THREE.Mesh(plane_geo, plane_mat);
            select.position.set(px - 3.95 + 4.45 - i, 0.2, pz + -0.65 - i)
            layer.add(select)
            select.name = 'select'
            select.rotation.x = -90 * (Math.PI / 180)
            domEvents.addEventListener(select, 'click', () => {
                let layer_posX = select.getWorldPosition(worldPosition).x;
                let layer_posZ = select.getWorldPosition(worldPosition).z;

                obj.position.set(layer_posX - 1.55, -0.7, layer_posZ - 0.35)
                if (t == 'a') {
                    bb1 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
                }
                else { bb2 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z } }


                if (((Math.abs(bb2.x - wp1.x + 2.05) < 0.05) && (Math.abs(bb2.z - wp1.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn1.wprmv()

                }
                if (((Math.abs(bb1.x - wp1.x + 2.05) < 0.05) && (Math.abs(bb1.z - wp1.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn1.wprmv()

                }
                if (((Math.abs(bb1.x - wp2.x + 2.05) < 0.05) && (Math.abs(bb1.z - wp2.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn2.wprmv()
                }
                if (((Math.abs(bb2.x - wp2.x + 2.05) < 0.05) && (Math.abs(bb2.z - wp2.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn2.wprmv()
                }

                if (((Math.abs(bb1.x - wp3.x + 2.05) < 0.05) && (Math.abs(bb1.z - wp3.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn3.wprmv()
                }
                if (((Math.abs(bb2.x - wp3.x + 2.05) < 0.05) && (Math.abs(bb2.z - wp3.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn3.wprmv()
                }

                if (((Math.abs(bb1.x - wp4.x + 2.05) < 0.05) && (Math.abs(bb1.z - wp4.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn4.wprmv()

                }
                if (((Math.abs(bb2.x - wp4.x + 2.05) < 0.05) && (Math.abs(bb2.z - wp4.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn4.wprmv()

                }
                if (((Math.abs(bb1.x - wp5.x + 2.05) < 0.05) && (Math.abs(bb1.z - wp5.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn5.wprmv()

                }
                if (((Math.abs(bb2.x - wp5.x + 2.05) < 0.05) && (Math.abs(bb2.z - wp5.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn5.wprmv()

                }
                if (((Math.abs(bb1.x - wp6.x + 2.05) < 0.05) && (Math.abs(bb1.z - wp6.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn6.wprmv()

                }
                if (((Math.abs(bb2.x - wp6.x + 2.05) < 0.05) && (Math.abs(bb2.z - wp6.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn6.wprmv()

                }

                if (((Math.abs(bb1.x - wp7.x + 2.05) < 0.05) && (Math.abs(bb1.z - wp7.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn7.wprmv()

                }
                if (((Math.abs(bb2.x - wp7.x + 2.05) < 0.05) && (Math.abs(bb2.z - wp7.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn7.wprmv()

                }
                if ((Math.abs(bb1.x - wp8.x + 2.05) < 0.05) && (Math.abs(bb1.z - wp8.z + 6) < 0.05)) {
                    console.log("collision");
                    wpawn8.wprmv()

                }
                if ((Math.abs(bb2.x - wp8.x + 2.05) < 0.05) && (Math.abs(bb2.z - wp8.z + 6) < 0.05)) {
                    console.log("collision");
                    wpawn8.wprmv()

                }



                if (((Math.abs(bb1.x - wr1.x - 2) < 0.05) && (Math.abs(bb1.z - wr1.z + 7) < 0.05))) {
                    console.log("collision");
                    wrook1.wrrmv()
                }
                if (((Math.abs(bb1.x - wr2.x - 2) < 0.05) && (Math.abs(bb1.z - wr2.z + 7) < 0.05))) {
                    console.log("collision");
                    wrook2.wrrmv()
                }
                if (((Math.abs(bb2.x - wr1.x - 2) < 0.05) && (Math.abs(bb2.z - wr1.z + 7) < 0.05))) {
                    console.log("collision");
                    wrook1.wrrmv()
                }
                if (((Math.abs(bb2.x - wr2.x - 2) < 0.05) && (Math.abs(bb2.z - wr2.z + 7) < 0.05))) {
                    console.log("collision");
                    wrook2.wrrmv()
                }



                if (((Math.abs(bb1.x - wb1.x + 0.05) <= 0.05) && (Math.abs(bb1.z - wb1.z + 7) < 0.05))) {
                    console.log("collision");
                    wbishop1.wbrmv();
                }
                if ((Math.abs(bb1.x - wb2.x + 0.05) <= 0.05) && (Math.abs(bb1.z - wb2.z + 7) < 0.05)) {
                    console.log("collision");
                    wbishop2.wbrmv();
                }
                if (((Math.abs(bb2.x - wb1.x + 0.05) <= 0.05) && (Math.abs(bb2.z - wb1.z + 7) < 0.05))) {
                    console.log("collision");
                    wbishop1.wbrmv();
                }
                if ((Math.abs(bb2.x - wb2.x + 0.05) <= 0.05) && (Math.abs(bb2.z - wb2.z + 7) < 0.05)) {
                    console.log("collision");
                    wbishop2.wbrmv();
                }


                if (((Math.abs(bb1.x - wk2.x - 1) < 0.05) && (Math.abs(bb1.z - wk2.z + 7.1) < 0.05))) {
                    console.log("collision");
                    wknight2.wkrmv()
                }

                if (((Math.abs(bb1.x - wk1.x - 1) < 0.05) && (Math.abs(bb1.z - wk1.z + 7.1) < 0.05))) {
                    console.log("collision");
                    wknight1.wkrmv()
                }

                if (((Math.abs(bb2.x - wk2.x - 1) < 0.05) && (Math.abs(bb2.z - wk2.z + 7.1) < 0.05))) {
                    console.log("collision");
                    wknight2.wkrmv()

                }

                if (((Math.abs(bb2.x - wk1.x - 1) < 0.05) && (Math.abs(bb2.z - wk1.z + 7.1) < 0.05))) {
                    console.log("collision");
                    wknight2.wkrmv()

                }

                if (((Math.abs(bb1.x - wq.x + 2.1) <= 0.051) && (Math.abs(bb1.z - wq.z + 7.15) < 0.1))) {
                    console.log("collision");
                    wqueen.wqrmv()
                }
                if (((Math.abs(bb2.x - wq.x + 2.1) <= 0.051) && (Math.abs(bb2.z - wq.z + 7.15) < 0.1))) {
                    console.log("collision");
                    wqueen.wqrmv()
                }
                if (((Math.abs(bb1.x - wki.x + 1.05) < 0.05) && (Math.abs(bb1.z - wki.z + 7) < 0.05))) {
                    console.log("collision");
                    wking.wkirmv()
                        endw=0;

                }
                if (((Math.abs(bb2.x - wki.x + 1.05) < 0.05) && (Math.abs(bb2.z - wki.z + 7) < 0.05))) {
                    console.log("collision");
                    wking.wkirmv()
                        endw=0;

                }

                rmvLyr()
                turn = 'w'
                clicked = false;
            })

        } else break
    }

    board.add(layer)

}


function Bqueen_onClick(px, pz, obj) {
    plane_geo = new THREE.PlaneGeometry(0.8, 0.8);
    plane_mat = new THREE.MeshBasicMaterial({ color: 0xd87d7d })

    // for forward
    for (let i = 0; i < 8; i++) {
        if ((pz + 1.35 + i) < 4) {
            let select = new THREE.Mesh(plane_geo, plane_mat);
            select.position.set(px - 0.5, 0.2, pz + 1.35 + i)
            layer.add(select)
            select.name = 'select'
            select.rotation.x = -90 * (Math.PI / 180)
            domEvents.addEventListener(select, 'click', () => {
                let layer_posX = select.getWorldPosition(worldPosition).x;
                let layer_posZ = select.getWorldPosition(worldPosition).z;

                obj.position.set(px, -0.7, layer_posZ - 0.35)
                bq = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }




                if (((Math.abs(bq.x - wp1.x) < 0.05) && (Math.abs(bq.z - wp1.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn1.wprmv()

                }

                if (((Math.abs(bq.x - wp2.x) < 0.05) && (Math.abs(bq.z - wp2.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn2.wprmv()
                }


                if (((Math.abs(bq.x - wp3.x) < 0.05) && (Math.abs(bq.z - wp3.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn3.wprmv()
                }


                if (((Math.abs(bq.x - wp4.x) < 0.05) && (Math.abs(bq.z - wp4.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn4.wprmv()

                }

                if (((Math.abs(bq.x - wp5.x) < 0.05) && (Math.abs(bq.z - wp5.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn5.wprmv()

                }

                if (((Math.abs(bq.x - wp6.x) < 0.05) && (Math.abs(bq.z - wp6.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn6.wprmv()

                }


                if (((Math.abs(bq.x - wp7.x) < 0.05) && (Math.abs(bq.z - wp7.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn7.wprmv()

                }

                if ((Math.abs(bq.x - wp8.x) < 0.05) && (Math.abs(bq.z - wp8.z + 6) < 0.05)) {
                    console.log("collision");
                    wpawn8.wprmv()

                }




                if (((Math.abs(bq.x - wr1.x - 4) < 0.05) && (Math.abs(bq.z - wr1.z + 7) < 0.05))) {
                    console.log("collision");
                    wrook1.wrrmv()
                }
                if (((Math.abs(bq.x - wr2.x - 4) < 0.05) && (Math.abs(bq.z - wr2.z + 7) < 0.05))) {
                    console.log("collision");
                    wrook2.wrrmv()
                }
                if (((Math.abs(bq.x - wr1.x - 4) < 0.05) && (Math.abs(bq.z - wr1.z + 7) < 0.05))) {
                    console.log("collision");
                    wrook1.wrrmv()
                }
                if (((Math.abs(bq.x - wr2.x - 4) < 0.05) && (Math.abs(bq.z - wr2.z + 7) < 0.05))) {
                    console.log("collision");
                    wrook2.wrrmv()
                }


                if (((Math.abs(bq.x - wb1.x - 1.95) <= 0.05) && (Math.abs(bq.z - wb1.z + 7) < 0.05))) {
                    console.log("collision");
                    wbishop1.wbrmv();
                }

                if ((Math.abs(bq.x - wb2.x - 1.95) <= 0.05) && (Math.abs(bq.z - wb2.z + 7) < 0.05)) {
                    console.log("collision");
                    wbishop2.wbrmv();
                }
                if (((Math.abs(bq.x - wb1.x - 1.95) <= 0.05) && (Math.abs(bq.z - wb1.z + 7) < 0.05))) {
                    console.log("collision");
                    wbishop1.wbrmv();
                }
                if ((Math.abs(bq.x - wb2.x - 1.95) <= 0.05) && (Math.abs(bq.z - wb2.z + 7) < 0.05)) {
                    console.log("collision");
                    wbishop2.wbrmv();
                }





                if (((Math.abs(bq.x - wk2.x - 3) < 0.05) && (Math.abs(bq.z - wk2.z + 7.1) < 0.05))) {
                    console.log("collision");
                    wknight2.wkrmv()

                }

                if (((Math.abs(bq.x - wk1.x - 3) < 0.05) && (Math.abs(bq.z - wk1.z + 7.1) < 0.05))) {
                    console.log("collision");
                    wknight1.wkrmv()

                }


                if (((Math.abs(bq.x - wk2.x - 3) < 0.05) && (Math.abs(bq.z - wk2.z + 7.1) < 0.05))) {
                    console.log("collision");
                    wknight2.wkrmv()

                }

                if (((Math.abs(bq.x - wk1.x - 3) < 0.05) && (Math.abs(bq.z - wk1.z + 7.1) < 0.05))) {
                    console.log("collision");
                    wknight2.wkrmv()

                }

                if (((Math.abs(bq.x - wq.x) < 0.05) && (Math.abs(bq.z - wq.z + 7.1) < 0.05))) {
                    console.log("collision");
                    wqueen.wqrmv()
                }
                if (((Math.abs(bq.x - wq.x) < 0.05) && (Math.abs(bq.z - wq.z + 7.1) < 0.05))) {
                    console.log("collision");
                    wqueen.wqrmv()
                }


                if (((Math.abs(bq.x - wki.x - 1) < 0.05) && (Math.abs(bq.z - wki.z + 7) < 0.05))) {
                    console.log("collision");
                    wking.wkirmv()
                        endw=0;

                }
                if (((Math.abs(bq.x - wki.x - 1) < 0.05) && (Math.abs(bq.z - wki.z + 7) < 0.05))) {
                    console.log("collision");
                    wking.wkirmv()
                        endw=0;

                }



                rmvLyr()
                turn = 'w';

                clicked = false;
            })



        } else break
    }
    // for right
    for (let i = 0; i < 8; i++) {
        if ((px - 0.5 + i) < 4) {

            let select = new THREE.Mesh(plane_geo, plane_mat);
            select.position.set(px - 0.5 + i, 0.2, pz + 0.35)
            layer.add(select)
            select.name = 'select'
            select.rotation.x = -90 * (Math.PI / 180)
            domEvents.addEventListener(select, 'click', () => {
                let layer_posX = select.getWorldPosition(worldPosition).x;
                let layer_posZ = select.getWorldPosition(worldPosition).z;

                obj.position.set(layer_posX + 0.55, -0.7, pz)
                bq = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }

                if (((Math.abs(bq.x - wp1.x) < 0.05) && (Math.abs(bq.z - wp1.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn1.wprmv()

                }

                if (((Math.abs(bq.x - wp2.x) < 0.05) && (Math.abs(bq.z - wp2.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn2.wprmv()
                }


                if (((Math.abs(bq.x - wp3.x) < 0.05) && (Math.abs(bq.z - wp3.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn3.wprmv()
                }


                if (((Math.abs(bq.x - wp4.x) < 0.05) && (Math.abs(bq.z - wp4.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn4.wprmv()

                }

                if (((Math.abs(bq.x - wp5.x) < 0.05) && (Math.abs(bq.z - wp5.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn5.wprmv()

                }

                if (((Math.abs(bq.x - wp6.x) < 0.05) && (Math.abs(bq.z - wp6.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn6.wprmv()

                }


                if (((Math.abs(bq.x - wp7.x) < 0.05) && (Math.abs(bq.z - wp7.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn7.wprmv()

                }

                if ((Math.abs(bq.x - wp8.x) < 0.05) && (Math.abs(bq.z - wp8.z + 6) < 0.05)) {
                    console.log("collision");
                    wpawn8.wprmv()

                }
                if (((Math.abs(bq.x - wr1.x - 4) < 0.05) && (Math.abs(bq.z - wr1.z + 7) < 0.05))) {
                    console.log("collision");
                    wrook1.wrrmv()
                }
                if (((Math.abs(bq.x - wr2.x - 4) < 0.05) && (Math.abs(bq.z - wr2.z + 7) < 0.05))) {
                    console.log("collision");
                    wrook2.wrrmv()
                }
                if (((Math.abs(bq.x - wr1.x - 4) < 0.05) && (Math.abs(bq.z - wr1.z + 7) < 0.05))) {
                    console.log("collision");
                    wrook1.wrrmv()
                }
                if (((Math.abs(bq.x - wr2.x - 4) < 0.05) && (Math.abs(bq.z - wr2.z + 7) < 0.05))) {
                    console.log("collision");
                    wrook2.wrrmv()
                }



                if (((Math.abs(bq.x - wb1.x - 1.95) <= 0.05) && (Math.abs(bq.z - wb1.z + 7) < 0.05))) {
                    console.log("collision");
                    wbishop1.wbrmv();
                }

                if ((Math.abs(bq.x - wb2.x - 1.95) <= 0.05) && (Math.abs(bq.z - wb2.z + 7) < 0.05)) {
                    console.log("collision");
                    wbishop2.wbrmv();
                }
                if (((Math.abs(bq.x - wb1.x - 1.95) <= 0.05) && (Math.abs(bq.z - wb1.z + 7) < 0.05))) {
                    console.log("collision");
                    wbishop1.wbrmv();
                }
                if ((Math.abs(bq.x - wb2.x - 1.95) <= 0.05) && (Math.abs(bq.z - wb2.z + 7) < 0.05)) {
                    console.log("collision");
                    wbishop2.wbrmv();
                }





                if (((Math.abs(bq.x - wk2.x - 3) < 0.05) && (Math.abs(bq.z - wk2.z + 7.1) < 0.05))) {
                    console.log("collision");
                    wknight2.wkrmv()

                }

                if (((Math.abs(bq.x - wk1.x - 3) < 0.05) && (Math.abs(bq.z - wk1.z + 7.1) < 0.05))) {
                    console.log("collision");
                    wknight1.wkrmv()

                }


                if (((Math.abs(bq.x - wk2.x - 3) < 0.05) && (Math.abs(bq.z - wk2.z + 7.1) < 0.05))) {
                    console.log("collision");
                    wknight2.wkrmv()

                }

                if (((Math.abs(bq.x - wk1.x - 3) < 0.05) && (Math.abs(bq.z - wk1.z + 7.1) < 0.05))) {
                    console.log("collision");
                    wknight2.wkrmv()

                }

                if (((Math.abs(bq.x - wq.x) < 0.05) && (Math.abs(bq.z - wq.z + 7.1) < 0.05))) {
                    console.log("collision");
                    wqueen.wqrmv()
                }
                if (((Math.abs(bq.x - wq.x) < 0.05) && (Math.abs(bq.z - wq.z + 7.1) < 0.05))) {
                    console.log("collision");
                    wqueen.wqrmv()
                }


                if (((Math.abs(bq.x - wki.x - 1) < 0.05) && (Math.abs(bq.z - wki.z + 7) < 0.05))) {
                    console.log("collision");
                    wking.wkirmv()
                        endw=0;

                }
                if (((Math.abs(bq.x - wki.x - 1) < 0.05) && (Math.abs(bq.z - wki.z + 7) < 0.05))) {
                    console.log("collision");
                    wking.wkirmv()
                        endw=0;

                }

                rmvLyr()
                turn = 'w';

                clicked = false;
            })
        } else break;
    }
    //for left
    for (let i = 0; i < 8; i++) {
        if ((px - 0.5 - i) > -4) {
            let select = new THREE.Mesh(plane_geo, plane_mat);
            select.position.set(px - 0.5 - i, 0.2, pz + 0.35)
            layer.add(select)
            select.name = 'select'
            select.rotation.x = -90 * (Math.PI / 180)
            domEvents.addEventListener(select, 'click', () => {
                let layer_posX = select.getWorldPosition(worldPosition).x;
                let layer_posZ = select.getWorldPosition(worldPosition).z;

                obj.position.set(layer_posX + 0.55, -0.7, pz)
                bq = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }

                if (((Math.abs(bq.x - wp1.x) < 0.05) && (Math.abs(bq.z - wp1.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn1.wprmv()

                }

                if (((Math.abs(bq.x - wp2.x) < 0.05) && (Math.abs(bq.z - wp2.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn2.wprmv()
                }


                if (((Math.abs(bq.x - wp3.x) < 0.05) && (Math.abs(bq.z - wp3.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn3.wprmv()
                }


                if (((Math.abs(bq.x - wp4.x) < 0.05) && (Math.abs(bq.z - wp4.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn4.wprmv()

                }

                if (((Math.abs(bq.x - wp5.x) < 0.05) && (Math.abs(bq.z - wp5.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn5.wprmv()

                }

                if (((Math.abs(bq.x - wp6.x) < 0.05) && (Math.abs(bq.z - wp6.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn6.wprmv()

                }


                if (((Math.abs(bq.x - wp7.x) < 0.05) && (Math.abs(bq.z - wp7.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn7.wprmv()

                }

                if ((Math.abs(bq.x - wp8.x) < 0.05) && (Math.abs(bq.z - wp8.z + 6) < 0.05)) {
                    console.log("collision");
                    wpawn8.wprmv()

                }
                if (((Math.abs(bq.x - wr1.x - 4) < 0.05) && (Math.abs(bq.z - wr1.z + 7) < 0.05))) {
                    console.log("collision");
                    wrook1.wrrmv()
                }
                if (((Math.abs(bq.x - wr2.x - 4) < 0.05) && (Math.abs(bq.z - wr2.z + 7) < 0.05))) {
                    console.log("collision");
                    wrook2.wrrmv()
                }
                if (((Math.abs(bq.x - wr1.x - 4) < 0.05) && (Math.abs(bq.z - wr1.z + 7) < 0.05))) {
                    console.log("collision");
                    wrook1.wrrmv()
                }
                if (((Math.abs(bq.x - wr2.x - 4) < 0.05) && (Math.abs(bq.z - wr2.z + 7) < 0.05))) {
                    console.log("collision");
                    wrook2.wrrmv()
                }



                if (((Math.abs(bq.x - wb1.x - 1.95) <= 0.05) && (Math.abs(bq.z - wb1.z + 7) < 0.05))) {
                    console.log("collision");
                    wbishop1.wbrmv();
                }

                if ((Math.abs(bq.x - wb2.x - 1.95) <= 0.05) && (Math.abs(bq.z - wb2.z + 7) < 0.05)) {
                    console.log("collision");
                    wbishop2.wbrmv();
                }
                if (((Math.abs(bq.x - wb1.x - 1.95) <= 0.05) && (Math.abs(bq.z - wb1.z + 7) < 0.05))) {
                    console.log("collision");
                    wbishop1.wbrmv();
                }
                if ((Math.abs(bq.x - wb2.x - 1.95) <= 0.05) && (Math.abs(bq.z - wb2.z + 7) < 0.05)) {
                    console.log("collision");
                    wbishop2.wbrmv();
                }





                if (((Math.abs(bq.x - wk2.x - 3) < 0.05) && (Math.abs(bq.z - wk2.z + 7.1) < 0.05))) {
                    console.log("collision");
                    wknight2.wkrmv()

                }

                if (((Math.abs(bq.x - wk1.x - 3) < 0.05) && (Math.abs(bq.z - wk1.z + 7.1) < 0.05))) {
                    console.log("collision");
                    wknight1.wkrmv()

                }


                if (((Math.abs(bq.x - wk2.x - 3) < 0.05) && (Math.abs(bq.z - wk2.z + 7.1) < 0.05))) {
                    console.log("collision");
                    wknight2.wkrmv()

                }

                if (((Math.abs(bq.x - wk1.x - 3) < 0.05) && (Math.abs(bq.z - wk1.z + 7.1) < 0.05))) {
                    console.log("collision");
                    wknight2.wkrmv()

                }

                if (((Math.abs(bq.x - wq.x) < 0.05) && (Math.abs(bq.z - wq.z + 7.1) < 0.05))) {
                    console.log("collision");
                    wqueen.wqrmv()
                }
                if (((Math.abs(bq.x - wq.x) < 0.05) && (Math.abs(bq.z - wq.z + 7.1) < 0.05))) {
                    console.log("collision");
                    wqueen.wqrmv()
                }


                if (((Math.abs(bq.x - wki.x - 1) < 0.05) && (Math.abs(bq.z - wki.z + 7) < 0.05))) {
                    console.log("collision");
                    wking.wkirmv()
                        endw=0;

                }
                if (((Math.abs(bq.x - wki.x - 1) < 0.05) && (Math.abs(bq.z - wki.z + 7) < 0.05))) {
                    console.log("collision");
                    wking.wkirmv()
                        endw=0;

                }
                rmvLyr()
                turn = 'w'
                clicked = false;
            })

        } else break;
    }
    //for back
    for (let i = 0; i < 8; i++) {
        if ((pz + -0.65 - i) > -4) {
            let select = new THREE.Mesh(plane_geo, plane_mat);
            select.position.set(px - 0.5, 0.2, pz + -0.65 - i)
            layer.add(select)
            select.name = 'select'
            select.rotation.x = -90 * (Math.PI / 180)
            domEvents.addEventListener(select, 'click', () => {
                let layer_posX = select.getWorldPosition(worldPosition).x;
                let layer_posZ = select.getWorldPosition(worldPosition).z;

                obj.position.set(px, -0.7, layer_posZ - 0.35)
                bq = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }

                if (((Math.abs(bq.x - wp1.x) < 0.05) && (Math.abs(bq.z - wp1.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn1.wprmv()

                }

                if (((Math.abs(bq.x - wp2.x) < 0.05) && (Math.abs(bq.z - wp2.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn2.wprmv()
                }


                if (((Math.abs(bq.x - wp3.x) < 0.05) && (Math.abs(bq.z - wp3.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn3.wprmv()
                }


                if (((Math.abs(bq.x - wp4.x) < 0.05) && (Math.abs(bq.z - wp4.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn4.wprmv()

                }

                if (((Math.abs(bq.x - wp5.x) < 0.05) && (Math.abs(bq.z - wp5.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn5.wprmv()

                }

                if (((Math.abs(bq.x - wp6.x) < 0.05) && (Math.abs(bq.z - wp6.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn6.wprmv()

                }


                if (((Math.abs(bq.x - wp7.x) < 0.05) && (Math.abs(bq.z - wp7.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn7.wprmv()

                }

                if ((Math.abs(bq.x - wp8.x) < 0.05) && (Math.abs(bq.z - wp8.z + 6) < 0.05)) {
                    console.log("collision");
                    wpawn8.wprmv()

                }
                if (((Math.abs(bq.x - wr1.x - 4) < 0.05) && (Math.abs(bq.z - wr1.z + 7) < 0.05))) {
                    console.log("collision");
                    wrook1.wrrmv()
                }
                if (((Math.abs(bq.x - wr2.x - 4) < 0.05) && (Math.abs(bq.z - wr2.z + 7) < 0.05))) {
                    console.log("collision");
                    wrook2.wrrmv()
                }
                if (((Math.abs(bq.x - wr1.x - 4) < 0.05) && (Math.abs(bq.z - wr1.z + 7) < 0.05))) {
                    console.log("collision");
                    wrook1.wrrmv()
                }
                if (((Math.abs(bq.x - wr2.x - 4) < 0.05) && (Math.abs(bq.z - wr2.z + 7) < 0.05))) {
                    console.log("collision");
                    wrook2.wrrmv()
                }



                if (((Math.abs(bq.x - wb1.x - 1.95) <= 0.05) && (Math.abs(bq.z - wb1.z + 7) < 0.05))) {
                    console.log("collision");
                    wbishop1.wbrmv();
                }

                if ((Math.abs(bq.x - wb2.x - 1.95) <= 0.05) && (Math.abs(bq.z - wb2.z + 7) < 0.05)) {
                    console.log("collision");
                    wbishop2.wbrmv();
                }
                if (((Math.abs(bq.x - wb1.x - 1.95) <= 0.05) && (Math.abs(bq.z - wb1.z + 7) < 0.05))) {
                    console.log("collision");
                    wbishop1.wbrmv();
                }
                if ((Math.abs(bq.x - wb2.x - 1.95) <= 0.05) && (Math.abs(bq.z - wb2.z + 7) < 0.05)) {
                    console.log("collision");
                    wbishop2.wbrmv();
                }





                if (((Math.abs(bq.x - wk2.x - 3) < 0.05) && (Math.abs(bq.z - wk2.z + 7.1) < 0.05))) {
                    console.log("collision");
                    wknight2.wkrmv()

                }

                if (((Math.abs(bq.x - wk1.x - 3) < 0.05) && (Math.abs(bq.z - wk1.z + 7.1) < 0.05))) {
                    console.log("collision");
                    wknight1.wkrmv()

                }


                if (((Math.abs(bq.x - wk2.x - 3) < 0.05) && (Math.abs(bq.z - wk2.z + 7.1) < 0.05))) {
                    console.log("collision");
                    wknight2.wkrmv()

                }

                if (((Math.abs(bq.x - wk1.x - 3) < 0.05) && (Math.abs(bq.z - wk1.z + 7.1) < 0.05))) {
                    console.log("collision");
                    wknight2.wkrmv()

                }

                if (((Math.abs(bq.x - wq.x) < 0.05) && (Math.abs(bq.z - wq.z + 7.1) < 0.05))) {
                    console.log("collision");
                    wqueen.wqrmv()
                }
                if (((Math.abs(bq.x - wq.x) < 0.05) && (Math.abs(bq.z - wq.z + 7.1) < 0.05))) {
                    console.log("collision");
                    wqueen.wqrmv()
                }


                if (((Math.abs(bq.x - wki.x - 1) < 0.05) && (Math.abs(bq.z - wki.z + 7) < 0.05))) {
                    console.log("collision");
                    wking.wkirmv()
                        endw=0;

                }
                if (((Math.abs(bq.x - wki.x - 1) < 0.05) && (Math.abs(bq.z - wki.z + 7) < 0.05))) {
                    console.log("collision");
                    wking.wkirmv()
                        endw=0;

                }

                rmvLyr()
                turn = 'w'
                clicked = false;
            })

        } else break
    }

    for (i = 0; i < 8; i++) {
        if ((pz + 1.35 + i) < 4 && (px + 0.5 + i) < 4) {
            let select = new THREE.Mesh(plane_geo, plane_mat);
            select.position.set(px + 0.5 + i, 0.2, pz + 1.35 + i);
            select.rotation.x = -90 * (Math.PI / 180)
            layer.add(select)
            select.name = 'select';
            domEvents.addEventListener(select, 'click', () => {
                let layer_posX = select.getWorldPosition(worldPosition).x;
                let layer_posZ = select.getWorldPosition(worldPosition).z;

                obj.position.set(layer_posX + 0.55, -0.7, layer_posZ - 0.35)
                bq = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }

                if (((Math.abs(bq.x - wp1.x) < 0.05) && (Math.abs(bq.z - wp1.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn1.wprmv()

                }

                if (((Math.abs(bq.x - wp2.x) < 0.05) && (Math.abs(bq.z - wp2.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn2.wprmv()
                }


                if (((Math.abs(bq.x - wp3.x) < 0.05) && (Math.abs(bq.z - wp3.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn3.wprmv()
                }


                if (((Math.abs(bq.x - wp4.x) < 0.05) && (Math.abs(bq.z - wp4.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn4.wprmv()

                }

                if (((Math.abs(bq.x - wp5.x) < 0.05) && (Math.abs(bq.z - wp5.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn5.wprmv()

                }

                if (((Math.abs(bq.x - wp6.x) < 0.05) && (Math.abs(bq.z - wp6.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn6.wprmv()

                }


                if (((Math.abs(bq.x - wp7.x) < 0.05) && (Math.abs(bq.z - wp7.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn7.wprmv()

                }

                if ((Math.abs(bq.x - wp8.x) < 0.05) && (Math.abs(bq.z - wp8.z + 6) < 0.05)) {
                    console.log("collision");
                    wpawn8.wprmv()

                }
                if (((Math.abs(bq.x - wr1.x - 4) < 0.05) && (Math.abs(bq.z - wr1.z + 7) < 0.05))) {
                    console.log("collision");
                    wrook1.wrrmv()
                }
                if (((Math.abs(bq.x - wr2.x - 4) < 0.05) && (Math.abs(bq.z - wr2.z + 7) < 0.05))) {
                    console.log("collision");
                    wrook2.wrrmv()
                }
                if (((Math.abs(bq.x - wr1.x - 4) < 0.05) && (Math.abs(bq.z - wr1.z + 7) < 0.05))) {
                    console.log("collision");
                    wrook1.wrrmv()
                }
                if (((Math.abs(bq.x - wr2.x - 4) < 0.05) && (Math.abs(bq.z - wr2.z + 7) < 0.05))) {
                    console.log("collision");
                    wrook2.wrrmv()
                }



                if (((Math.abs(bq.x - wb1.x - 1.95) <= 0.05) && (Math.abs(bq.z - wb1.z + 7) < 0.05))) {
                    console.log("collision");
                    wbishop1.wbrmv();
                }

                if ((Math.abs(bq.x - wb2.x - 1.95) <= 0.05) && (Math.abs(bq.z - wb2.z + 7) < 0.05)) {
                    console.log("collision");
                    wbishop2.wbrmv();
                }
                if (((Math.abs(bq.x - wb1.x - 1.95) <= 0.05) && (Math.abs(bq.z - wb1.z + 7) < 0.05))) {
                    console.log("collision");
                    wbishop1.wbrmv();
                }
                if ((Math.abs(bq.x - wb2.x - 1.95) <= 0.05) && (Math.abs(bq.z - wb2.z + 7) < 0.05)) {
                    console.log("collision");
                    wbishop2.wbrmv();
                }





                if (((Math.abs(bq.x - wk2.x - 3) < 0.05) && (Math.abs(bq.z - wk2.z + 7.1) < 0.05))) {
                    console.log("collision");
                    wknight2.wkrmv()

                }

                if (((Math.abs(bq.x - wk1.x - 3) < 0.05) && (Math.abs(bq.z - wk1.z + 7.1) < 0.05))) {
                    console.log("collision");
                    wknight1.wkrmv()

                }


                if (((Math.abs(bq.x - wk2.x - 3) < 0.05) && (Math.abs(bq.z - wk2.z + 7.1) < 0.05))) {
                    console.log("collision");
                    wknight2.wkrmv()

                }

                if (((Math.abs(bq.x - wk1.x - 3) < 0.05) && (Math.abs(bq.z - wk1.z + 7.1) < 0.05))) {
                    console.log("collision");
                    wknight2.wkrmv()

                }

                if (((Math.abs(bq.x - wq.x) < 0.05) && (Math.abs(bq.z - wq.z + 7.1) < 0.05))) {
                    console.log("collision");
                    wqueen.wqrmv()
                }
                if (((Math.abs(bq.x - wq.x) < 0.05) && (Math.abs(bq.z - wq.z + 7.1) < 0.05))) {
                    console.log("collision");
                    wqueen.wqrmv()
                }


                if (((Math.abs(bq.x - wki.x - 1) < 0.05) && (Math.abs(bq.z - wki.z + 7) < 0.05))) {
                    console.log("collision");
                    wking.wkirmv()
                        endw=0;

                }
                if (((Math.abs(bq.x - wki.x - 1) < 0.05) && (Math.abs(bq.z - wki.z + 7) < 0.05))) {
                    console.log("collision");
                    wking.wkirmv()
                        endw=0;

                }
                rmvLyr()
                turn = 'w'
                clicked = false;
            })
        }
    }

    for (let i = 0; i < 8; i++) {
        if ((pz + 1.35 + i) < 4 && (px - 1.5 - i) > -4) {
            let select = new THREE.Mesh(plane_geo, plane_mat);
            select.position.set(px - 1.5 - i, 0.2, pz + 1.35 + i)
            select.rotation.x = -90 * (Math.PI / 180)
            layer.add(select)
            select.name = 'select'
            domEvents.addEventListener(select, 'click', () => {
                let layer_posX = select.getWorldPosition(worldPosition).x;
                let layer_posZ = select.getWorldPosition(worldPosition).z;

                obj.position.set(layer_posX + 0.55, -0.7, layer_posZ - 0.35)
                bq = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }

                if (((Math.abs(bq.x - wp1.x) < 0.05) && (Math.abs(bq.z - wp1.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn1.wprmv()

                }

                if (((Math.abs(bq.x - wp2.x) < 0.05) && (Math.abs(bq.z - wp2.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn2.wprmv()
                }


                if (((Math.abs(bq.x - wp3.x) < 0.05) && (Math.abs(bq.z - wp3.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn3.wprmv()
                }


                if (((Math.abs(bq.x - wp4.x) < 0.05) && (Math.abs(bq.z - wp4.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn4.wprmv()

                }

                if (((Math.abs(bq.x - wp5.x) < 0.05) && (Math.abs(bq.z - wp5.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn5.wprmv()

                }

                if (((Math.abs(bq.x - wp6.x) < 0.05) && (Math.abs(bq.z - wp6.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn6.wprmv()

                }


                if (((Math.abs(bq.x - wp7.x) < 0.05) && (Math.abs(bq.z - wp7.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn7.wprmv()

                }

                if ((Math.abs(bq.x - wp8.x) < 0.05) && (Math.abs(bq.z - wp8.z + 6) < 0.05)) {
                    console.log("collision");
                    wpawn8.wprmv()

                }
                if (((Math.abs(bq.x - wr1.x - 4) < 0.05) && (Math.abs(bq.z - wr1.z + 7) < 0.05))) {
                    console.log("collision");
                    wrook1.wrrmv()
                }
                if (((Math.abs(bq.x - wr2.x - 4) < 0.05) && (Math.abs(bq.z - wr2.z + 7) < 0.05))) {
                    console.log("collision");
                    wrook2.wrrmv()
                }
                if (((Math.abs(bq.x - wr1.x - 4) < 0.05) && (Math.abs(bq.z - wr1.z + 7) < 0.05))) {
                    console.log("collision");
                    wrook1.wrrmv()
                }
                if (((Math.abs(bq.x - wr2.x - 4) < 0.05) && (Math.abs(bq.z - wr2.z + 7) < 0.05))) {
                    console.log("collision");
                    wrook2.wrrmv()
                }



                if (((Math.abs(bq.x - wb1.x - 1.95) <= 0.05) && (Math.abs(bq.z - wb1.z + 7) < 0.05))) {
                    console.log("collision");
                    wbishop1.wbrmv();
                }

                if ((Math.abs(bq.x - wb2.x - 1.95) <= 0.05) && (Math.abs(bq.z - wb2.z + 7) < 0.05)) {
                    console.log("collision");
                    wbishop2.wbrmv();
                }
                if (((Math.abs(bq.x - wb1.x - 1.95) <= 0.05) && (Math.abs(bq.z - wb1.z + 7) < 0.05))) {
                    console.log("collision");
                    wbishop1.wbrmv();
                }
                if ((Math.abs(bq.x - wb2.x - 1.95) <= 0.05) && (Math.abs(bq.z - wb2.z + 7) < 0.05)) {
                    console.log("collision");
                    wbishop2.wbrmv();
                }





                if (((Math.abs(bq.x - wk2.x - 3) < 0.05) && (Math.abs(bq.z - wk2.z + 7.1) < 0.05))) {
                    console.log("collision");
                    wknight2.wkrmv()

                }

                if (((Math.abs(bq.x - wk1.x - 3) < 0.05) && (Math.abs(bq.z - wk1.z + 7.1) < 0.05))) {
                    console.log("collision");
                    wknight1.wkrmv()

                }


                if (((Math.abs(bq.x - wk2.x - 3) < 0.05) && (Math.abs(bq.z - wk2.z + 7.1) < 0.05))) {
                    console.log("collision");
                    wknight2.wkrmv()

                }

                if (((Math.abs(bq.x - wk1.x - 3) < 0.05) && (Math.abs(bq.z - wk1.z + 7.1) < 0.05))) {
                    console.log("collision");
                    wknight2.wkrmv()

                }

                if (((Math.abs(bq.x - wq.x) < 0.05) && (Math.abs(bq.z - wq.z + 7.1) < 0.05))) {
                    console.log("collision");
                    wqueen.wqrmv()
                }
                if (((Math.abs(bq.x - wq.x) < 0.05) && (Math.abs(bq.z - wq.z + 7.1) < 0.05))) {
                    console.log("collision");
                    wqueen.wqrmv()
                }


                if (((Math.abs(bq.x - wki.x - 1) < 0.05) && (Math.abs(bq.z - wki.z + 7) < 0.05))) {
                    console.log("collision");
                    wking.wkirmv()
                        endw=0;

                }
                if (((Math.abs(bq.x - wki.x - 1) < 0.05) && (Math.abs(bq.z - wki.z + 7) < 0.05))) {
                    console.log("collision");
                    wking.wkirmv()
                        endw=0;

                }
                rmvLyr()
                turn = 'w'
                clicked = false;
            })

        } else break
    }

    for (let i = 0; i < 8; i++) {
        if ((pz + 0.35 - i) > -4 && (px - 0.5 + i) < 4) {
            let select = new THREE.Mesh(plane_geo, plane_mat);
            layer.add(select)
            select.name = 'select'
            select.rotation.x = -90 * (Math.PI / 180)
            select.position.set(px - 0.5 + i, 0.2, pz + 0.35 - i)
            domEvents.addEventListener(select, 'click', () => {
                let layer_posX = select.getWorldPosition(worldPosition).x;
                let layer_posZ = select.getWorldPosition(worldPosition).z;

                obj.position.set(layer_posX + 0.55, -0.7, layer_posZ - 0.35)
                bq = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }

                if (((Math.abs(bq.x - wp1.x) < 0.05) && (Math.abs(bq.z - wp1.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn1.wprmv()

                }

                if (((Math.abs(bq.x - wp2.x) < 0.05) && (Math.abs(bq.z - wp2.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn2.wprmv()
                }


                if (((Math.abs(bq.x - wp3.x) < 0.05) && (Math.abs(bq.z - wp3.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn3.wprmv()
                }


                if (((Math.abs(bq.x - wp4.x) < 0.05) && (Math.abs(bq.z - wp4.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn4.wprmv()

                }

                if (((Math.abs(bq.x - wp5.x) < 0.05) && (Math.abs(bq.z - wp5.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn5.wprmv()

                }

                if (((Math.abs(bq.x - wp6.x) < 0.05) && (Math.abs(bq.z - wp6.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn6.wprmv()

                }


                if (((Math.abs(bq.x - wp7.x) < 0.05) && (Math.abs(bq.z - wp7.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn7.wprmv()

                }

                if ((Math.abs(bq.x - wp8.x) < 0.05) && (Math.abs(bq.z - wp8.z + 6) < 0.05)) {
                    console.log("collision");
                    wpawn8.wprmv()

                }
                if (((Math.abs(bq.x - wr1.x - 4) < 0.05) && (Math.abs(bq.z - wr1.z + 7) < 0.05))) {
                    console.log("collision");
                    wrook1.wrrmv()
                }
                if (((Math.abs(bq.x - wr2.x - 4) < 0.05) && (Math.abs(bq.z - wr2.z + 7) < 0.05))) {
                    console.log("collision");
                    wrook2.wrrmv()
                }
                if (((Math.abs(bq.x - wr1.x - 4) < 0.05) && (Math.abs(bq.z - wr1.z + 7) < 0.05))) {
                    console.log("collision");
                    wrook1.wrrmv()
                }
                if (((Math.abs(bq.x - wr2.x - 4) < 0.05) && (Math.abs(bq.z - wr2.z + 7) < 0.05))) {
                    console.log("collision");
                    wrook2.wrrmv()
                }



                if (((Math.abs(bq.x - wb1.x - 1.95) <= 0.05) && (Math.abs(bq.z - wb1.z + 7) < 0.05))) {
                    console.log("collision");
                    wbishop1.wbrmv();
                }

                if ((Math.abs(bq.x - wb2.x - 1.95) <= 0.05) && (Math.abs(bq.z - wb2.z + 7) < 0.05)) {
                    console.log("collision");
                    wbishop2.wbrmv();
                }
                if (((Math.abs(bq.x - wb1.x - 1.95) <= 0.05) && (Math.abs(bq.z - wb1.z + 7) < 0.05))) {
                    console.log("collision");
                    wbishop1.wbrmv();
                }
                if ((Math.abs(bq.x - wb2.x - 1.95) <= 0.05) && (Math.abs(bq.z - wb2.z + 7) < 0.05)) {
                    console.log("collision");
                    wbishop2.wbrmv();
                }





                if (((Math.abs(bq.x - wk2.x - 3) < 0.05) && (Math.abs(bq.z - wk2.z + 7.1) < 0.05))) {
                    console.log("collision");
                    wknight2.wkrmv()

                }

                if (((Math.abs(bq.x - wk1.x - 3) < 0.05) && (Math.abs(bq.z - wk1.z + 7.1) < 0.05))) {
                    console.log("collision");
                    wknight1.wkrmv()

                }


                if (((Math.abs(bq.x - wk2.x - 3) < 0.05) && (Math.abs(bq.z - wk2.z + 7.1) < 0.05))) {
                    console.log("collision");
                    wknight2.wkrmv()

                }

                if (((Math.abs(bq.x - wk1.x - 3) < 0.05) && (Math.abs(bq.z - wk1.z + 7.1) < 0.05))) {
                    console.log("collision");
                    wknight2.wkrmv()

                }

                if (((Math.abs(bq.x - wq.x) < 0.05) && (Math.abs(bq.z - wq.z + 7.1) < 0.05))) {
                    console.log("collision");
                    wqueen.wqrmv()
                }
                if (((Math.abs(bq.x - wq.x) < 0.05) && (Math.abs(bq.z - wq.z + 7.1) < 0.05))) {
                    console.log("collision");
                    wqueen.wqrmv()
                }


                if (((Math.abs(bq.x - wki.x - 1) < 0.05) && (Math.abs(bq.z - wki.z + 7) < 0.05))) {
                    console.log("collision");
                    wking.wkirmv()
                        endw=0;

                }
                if (((Math.abs(bq.x - wki.x - 1) < 0.05) && (Math.abs(bq.z - wki.z + 7) < 0.05))) {
                    console.log("collision");
                    wking.wkirmv()
                        endw=0;

                }

                rmvLyr()
                turn = 'w'
                clicked = false;
            })

        } else break
    }

    for (let i = 0; i < 8; i++) {
        if ((pz - 0.65 - i) > -4 && (px - 1.5 - i) > -4) {
            let select = new THREE.Mesh(plane_geo, plane_mat);
            select.position.set(px - 1.5 - i, 0.2, pz - 0.65 - i)
            layer.add(select)
            select.name = 'select'
            select.rotation.x = -90 * (Math.PI / 180)
            domEvents.addEventListener(select, 'click', () => {
                let layer_posX = select.getWorldPosition(worldPosition).x;
                let layer_posZ = select.getWorldPosition(worldPosition).z;

                obj.position.set(layer_posX + 0.55, -0.7, layer_posZ - 0.35)
                bq = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }

                if (((Math.abs(bq.x - wp1.x) < 0.05) && (Math.abs(bq.z - wp1.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn1.wprmv()

                }

                if (((Math.abs(bq.x - wp2.x) < 0.05) && (Math.abs(bq.z - wp2.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn2.wprmv()
                }


                if (((Math.abs(bq.x - wp3.x) < 0.05) && (Math.abs(bq.z - wp3.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn3.wprmv()
                }


                if (((Math.abs(bq.x - wp4.x) < 0.05) && (Math.abs(bq.z - wp4.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn4.wprmv()

                }

                if (((Math.abs(bq.x - wp5.x) < 0.05) && (Math.abs(bq.z - wp5.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn5.wprmv()

                }

                if (((Math.abs(bq.x - wp6.x) < 0.05) && (Math.abs(bq.z - wp6.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn6.wprmv()

                }


                if (((Math.abs(bq.x - wp7.x) < 0.05) && (Math.abs(bq.z - wp7.z + 6) < 0.05))) {
                    console.log("collision");
                    wpawn7.wprmv()

                }

                if ((Math.abs(bq.x - wp8.x) < 0.05) && (Math.abs(bq.z - wp8.z + 6) < 0.05)) {
                    console.log("collision");
                    wpawn8.wprmv()

                }
                if (((Math.abs(bq.x - wr1.x - 4) < 0.05) && (Math.abs(bq.z - wr1.z + 7) < 0.05))) {
                    console.log("collision");
                    wrook1.wrrmv()
                }
                if (((Math.abs(bq.x - wr2.x - 4) < 0.05) && (Math.abs(bq.z - wr2.z + 7) < 0.05))) {
                    console.log("collision");
                    wrook2.wrrmv()
                }
                if (((Math.abs(bq.x - wr1.x - 4) < 0.05) && (Math.abs(bq.z - wr1.z + 7) < 0.05))) {
                    console.log("collision");
                    wrook1.wrrmv()
                }
                if (((Math.abs(bq.x - wr2.x - 4) < 0.05) && (Math.abs(bq.z - wr2.z + 7) < 0.05))) {
                    console.log("collision");
                    wrook2.wrrmv()
                }



                if (((Math.abs(bq.x - wb1.x - 1.95) <= 0.05) && (Math.abs(bq.z - wb1.z + 7) < 0.05))) {
                    console.log("collision");
                    wbishop1.wbrmv();
                }

                if ((Math.abs(bq.x - wb2.x - 1.95) <= 0.05) && (Math.abs(bq.z - wb2.z + 7) < 0.05)) {
                    console.log("collision");
                    wbishop2.wbrmv();
                }
                if (((Math.abs(bq.x - wb1.x - 1.95) <= 0.05) && (Math.abs(bq.z - wb1.z + 7) < 0.05))) {
                    console.log("collision");
                    wbishop1.wbrmv();
                }
                if ((Math.abs(bq.x - wb2.x - 1.95) <= 0.05) && (Math.abs(bq.z - wb2.z + 7) < 0.05)) {
                    console.log("collision");
                    wbishop2.wbrmv();
                }





                if (((Math.abs(bq.x - wk2.x - 3) < 0.05) && (Math.abs(bq.z - wk2.z + 7.1) < 0.05))) {
                    console.log("collision");
                    wknight2.wkrmv()

                }

                if (((Math.abs(bq.x - wk1.x - 3) < 0.05) && (Math.abs(bq.z - wk1.z + 7.1) < 0.05))) {
                    console.log("collision");
                    wknight1.wkrmv()

                }


                if (((Math.abs(bq.x - wk2.x - 3) < 0.05) && (Math.abs(bq.z - wk2.z + 7.1) < 0.05))) {
                    console.log("collision");
                    wknight2.wkrmv()

                }

                if (((Math.abs(bq.x - wk1.x - 3) < 0.05) && (Math.abs(bq.z - wk1.z + 7.1) < 0.05))) {
                    console.log("collision");
                    wknight2.wkrmv()

                }

                if (((Math.abs(bq.x - wq.x) < 0.05) && (Math.abs(bq.z - wq.z + 7.1) < 0.05))) {
                    console.log("collision");
                    wqueen.wqrmv()
                }
                if (((Math.abs(bq.x - wq.x) < 0.05) && (Math.abs(bq.z - wq.z + 7.1) < 0.05))) {
                    console.log("collision");
                    wqueen.wqrmv()
                }


                if (((Math.abs(bq.x - wki.x - 1) < 0.05) && (Math.abs(bq.z - wki.z + 7) < 0.05))) {
                    console.log("collision");
                    wking.wkirmv()
                        endw=0;

                }
                if (((Math.abs(bq.x - wki.x - 1) < 0.05) && (Math.abs(bq.z - wki.z + 7) < 0.05))) {
                    console.log("collision");
                    wking.wkirmv()
                        endw=0;

                }
                rmvLyr()
                turn = 'w'
                clicked = false;
            })

        } else break
    }
    board.add(layer)
}

function Bking_onClick(px, pz, obj) {
    plane_geo = new THREE.PlaneGeometry(0.8, 0.8);
    plane_mat = new THREE.MeshBasicMaterial({ color: 0xd87d7d })

    // left
    if ((px - 0.55) > -4) {
        let select = new THREE.Mesh(plane_geo, plane_mat);
        select.position.set(px - 0.5, 0.2, pz + 0.35)
        select.rotation.x = -90 * (Math.PI / 180)
        layer.add(select)

        domEvents.addEventListener(select, 'click', () => {
            obj.position.set(px - 1, -0.7, pz)
            bki = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }


            if (((Math.abs(bki.x - wp1.x + 1.05) < 0.05) && (Math.abs(bki.z - wp1.z + 6) < 0.05))) {
                console.log("collision");
                wpawn1.wprmv()

            }

            if (((Math.abs(bki.x - wp2.x + 1.05) < 0.05) && (Math.abs(bki.z - wp2.z + 6) < 0.05))) {
                console.log("collision");
                wpawn2.wprmv()
            }


            if (((Math.abs(bki.x - wp3.x + 1.05) < 0.05) && (Math.abs(bki.z - wp3.z + 6) < 0.05))) {
                console.log("collision");
                wpawn3.wprmv()
            }


            if (((Math.abs(bki.x - wp4.x + 1.05) < 0.05) && (Math.abs(bki.z - wp4.z + 6) < 0.05))) {
                console.log("collision");
                wpawn4.wprmv()

            }

            if (((Math.abs(bki.x - wp5.x + 1.05) < 0.05) && (Math.abs(bki.z - wp5.z + 6) < 0.05))) {
                console.log("collision");
                wpawn5.wprmv()

            }

            if (((Math.abs(bki.x - wp6.x + 1.05) < 0.05) && (Math.abs(bki.z - wp6.z + 6) < 0.05))) {
                console.log("collision");
                wpawn6.wprmv()

            }


            if (((Math.abs(bki.x - wp7.x + 1.05) < 0.05) && (Math.abs(bki.z - wp7.z + 6) < 0.05))) {
                console.log("collision");
                wpawn7.wprmv()

            }

            if ((Math.abs(bki.x - wp8.x + 1.05) < 0.05) && (Math.abs(bki.z - wp8.z + 6) < 0.05)) {
                console.log("collision");
                wpawn8.wprmv()

            }



            if (((Math.abs(bki.x - wr1.x - 3) < 0.05) && (Math.abs(bki.z - wr1.z + 7) < 0.05))) {
                console.log("collision");
                wrook1.wrrmv()
            }
            if (((Math.abs(bki.x - wr2.x - 3) < 0.05) && (Math.abs(bki.z - wr2.z + 7) < 0.05))) {
                console.log("collision");
                wrook2.wrrmv()
            }
            if (((Math.abs(bki.x - wr1.x - 3) < 0.05) && (Math.abs(bki.z - wr1.z + 7) < 0.05))) {
                console.log("collision");
                wrook1.wrrmv()
            }
            if (((Math.abs(bki.x - wr2.x - 3) < 0.05) && (Math.abs(bki.z - wr2.z + 7) < 0.05))) {
                console.log("collision");
                wrook2.wrrmv()
            }





            if (((Math.abs(bki.x - wb1.x - 1) <= 0.05) && (Math.abs(bki.z - wb1.z + 7) < 0.05))) {
                console.log("collision");
                wbishop1.wbrmv();
            }

            if ((Math.abs(bki.x - wb2.x - 1) <= 0.05) && (Math.abs(bki.z - wb2.z + 7) < 0.05)) {
                console.log("collision");
                wbishop2.wbrmv();
            }
            if (((Math.abs(bki.x - wb1.x - 1) <= 0.05) && (Math.abs(bki.z - wb1.z + 7) < 0.05))) {
                console.log("collision");
                wbishop1.wbrmv();
            }
            if ((Math.abs(bki.x - wb2.x - 1) <= 0.05) && (Math.abs(bki.z - wb2.z + 7) < 0.05)) {
                console.log("collision");
                wbishop2.wbrmv();
            }




            if (((Math.abs(bki.x - wk2.x - 2) < 0.05) && (Math.abs(bki.z - wk2.z + 7) < 0.05))) {
                console.log("collision");
                wknight2.wkrmv()

            }

            if (((Math.abs(bki.x - wk1.x - 2) < 0.05) && (Math.abs(bki.z - wk1.z + 7) < 0.05))) {
                console.log("collision");
                wknight1.wkrmv()

            }


            if (((Math.abs(bki.x - wk2.x - 2) < 0.05) && (Math.abs(bki.z - wk2.z + 7) < 0.05))) {
                console.log("collision");
                wknight2.wkrmv()

            }

            if (((Math.abs(bki.x - wk1.x - 2) < 0.05) && (Math.abs(bki.z - wk1.z + 7) < 0.05))) {
                console.log("collision");
                wknight2.wkrmv()

            }




            if (((Math.abs(bki.x - wq.x + 1.05) < 0.05) && (Math.abs(bki.z - wq.z + 7.1) < 0.05))) {
                console.log("collision");
                wqueen.wqrmv()
            }
            if (((Math.abs(bki.x - wq.x + 1.05) < 0.05) && (Math.abs(bki.z - wq.z + 7.1) < 0.05))) {
                console.log("collision");
                wqueen.wqrmv()
            }




            rmvLyr()
            select.removeEventListener(select, 'click')

            turn = 'w';
            clicked = false;
        })
    }

    if ((px + 1.45) < 4) {
        let select1 = new THREE.Mesh(plane_geo, plane_mat);
        select1.position.set(px + 1.5, 0.2, pz + 0.35)
        select1.rotation.x = -90 * (Math.PI / 180)
        layer.add(select1)

        domEvents.addEventListener(select1, 'click', () => {

            obj.position.set(px + 1, -0.8, pz)
            bki = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }

            if (((Math.abs(bki.x - wp1.x + 1.05) < 0.05) && (Math.abs(bki.z - wp1.z + 6) < 0.05))) {
                console.log("collision");
                wpawn1.wprmv()

            }

            if (((Math.abs(bki.x - wp2.x + 1.05) < 0.05) && (Math.abs(bki.z - wp2.z + 6) < 0.05))) {
                console.log("collision");
                wpawn2.wprmv()
            }


            if (((Math.abs(bki.x - wp3.x + 1.05) < 0.05) && (Math.abs(bki.z - wp3.z + 6) < 0.05))) {
                console.log("collision");
                wpawn3.wprmv()
            }


            if (((Math.abs(bki.x - wp4.x + 1.05) < 0.05) && (Math.abs(bki.z - wp4.z + 6) < 0.05))) {
                console.log("collision");
                wpawn4.wprmv()

            }

            if (((Math.abs(bki.x - wp5.x + 1.05) < 0.05) && (Math.abs(bki.z - wp5.z + 6) < 0.05))) {
                console.log("collision");
                wpawn5.wprmv()

            }

            if (((Math.abs(bki.x - wp6.x + 1.05) < 0.05) && (Math.abs(bki.z - wp6.z + 6) < 0.05))) {
                console.log("collision");
                wpawn6.wprmv()

            }


            if (((Math.abs(bki.x - wp7.x + 1.05) < 0.05) && (Math.abs(bki.z - wp7.z + 6) < 0.05))) {
                console.log("collision");
                wpawn7.wprmv()

            }

            if ((Math.abs(bki.x - wp8.x + 1.05) < 0.05) && (Math.abs(bki.z - wp8.z + 6) < 0.05)) {
                console.log("collision");
                wpawn8.wprmv()

            }



            if (((Math.abs(bki.x - wr1.x - 3) < 0.05) && (Math.abs(bki.z - wr1.z + 7) < 0.05))) {
                console.log("collision");
                wrook1.wrrmv()
            }
            if (((Math.abs(bki.x - wr2.x - 3) < 0.05) && (Math.abs(bki.z - wr2.z + 7) < 0.05))) {
                console.log("collision");
                wrook2.wrrmv()
            }
            if (((Math.abs(bki.x - wr1.x - 3) < 0.05) && (Math.abs(bki.z - wr1.z + 7) < 0.05))) {
                console.log("collision");
                wrook1.wrrmv()
            }
            if (((Math.abs(bki.x - wr2.x - 3) < 0.05) && (Math.abs(bki.z - wr2.z + 7) < 0.05))) {
                console.log("collision");
                wrook2.wrrmv()
            }





            if (((Math.abs(bki.x - wb1.x - 1) <= 0.05) && (Math.abs(bki.z - wb1.z + 7) < 0.05))) {
                console.log("collision");
                wbishop1.wbrmv();
            }

            if ((Math.abs(bki.x - wb2.x - 1) <= 0.05) && (Math.abs(bki.z - wb2.z + 7) < 0.05)) {
                console.log("collision");
                wbishop2.wbrmv();
            }
            if (((Math.abs(bki.x - wb1.x - 1) <= 0.05) && (Math.abs(bki.z - wb1.z + 7) < 0.05))) {
                console.log("collision");
                wbishop1.wbrmv();
            }
            if ((Math.abs(bki.x - wb2.x - 1) <= 0.05) && (Math.abs(bki.z - wb2.z + 7) < 0.05)) {
                console.log("collision");
                wbishop2.wbrmv();
            }




            if (((Math.abs(bki.x - wk2.x - 2) < 0.05) && (Math.abs(bki.z - wk2.z + 7) < 0.05))) {
                console.log("collision");
                wknight2.wkrmv()

            }

            if (((Math.abs(bki.x - wk1.x - 2) < 0.05) && (Math.abs(bki.z - wk1.z + 7) < 0.05))) {
                console.log("collision");
                wknight1.wkrmv()

            }


            if (((Math.abs(bki.x - wk2.x - 2) < 0.05) && (Math.abs(bki.z - wk2.z + 7) < 0.05))) {
                console.log("collision");
                wknight2.wkrmv()

            }

            if (((Math.abs(bki.x - wk1.x - 2) < 0.05) && (Math.abs(bki.z - wk1.z + 7) < 0.05))) {
                console.log("collision");
                wknight2.wkrmv()

            }




            if (((Math.abs(bki.x - wq.x + 1.05) < 0.05) && (Math.abs(bki.z - wq.z + 7.1) < 0.05))) {
                console.log("collision");
                wqueen.wqrmv()
            }
            if (((Math.abs(bki.x - wq.x + 1.05) < 0.05) && (Math.abs(bki.z - wq.z + 7.1) < 0.05))) {
                console.log("collision");
                wqueen.wqrmv()
            }


            rmvLyr()
            select1.removeEventListener(select1, 'click')

            turn = 'w'
            clicked = false;
        })
    }

    if ((px + 1.45) < 4 && (pz + 1.35) < 4) {
        let select2 = new THREE.Mesh(plane_geo, plane_mat);
        select2.position.set(px + 1.5, 0.2, pz + 1.35)
        select2.rotation.x = -90 * (Math.PI / 180)
        layer.add(select2)

        domEvents.addEventListener(select2, 'click', () => {

            obj.position.set(px + 1, -0.8, pz + 1)
            bki = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
            if (((Math.abs(bki.x - wp1.x + 1.05) < 0.05) && (Math.abs(bki.z - wp1.z + 6) < 0.05))) {
                console.log("collision");
                wpawn1.wprmv()

            }

            if (((Math.abs(bki.x - wp2.x + 1.05) < 0.05) && (Math.abs(bki.z - wp2.z + 6) < 0.05))) {
                console.log("collision");
                wpawn2.wprmv()
            }


            if (((Math.abs(bki.x - wp3.x + 1.05) < 0.05) && (Math.abs(bki.z - wp3.z + 6) < 0.05))) {
                console.log("collision");
                wpawn3.wprmv()
            }


            if (((Math.abs(bki.x - wp4.x + 1.05) < 0.05) && (Math.abs(bki.z - wp4.z + 6) < 0.05))) {
                console.log("collision");
                wpawn4.wprmv()

            }

            if (((Math.abs(bki.x - wp5.x + 1.05) < 0.05) && (Math.abs(bki.z - wp5.z + 6) < 0.05))) {
                console.log("collision");
                wpawn5.wprmv()

            }

            if (((Math.abs(bki.x - wp6.x + 1.05) < 0.05) && (Math.abs(bki.z - wp6.z + 6) < 0.05))) {
                console.log("collision");
                wpawn6.wprmv()

            }


            if (((Math.abs(bki.x - wp7.x + 1.05) < 0.05) && (Math.abs(bki.z - wp7.z + 6) < 0.05))) {
                console.log("collision");
                wpawn7.wprmv()

            }

            if ((Math.abs(bki.x - wp8.x + 1.05) < 0.05) && (Math.abs(bki.z - wp8.z + 6) < 0.05)) {
                console.log("collision");
                wpawn8.wprmv()

            }



            if (((Math.abs(bki.x - wr1.x - 3) < 0.05) && (Math.abs(bki.z - wr1.z + 7) < 0.05))) {
                console.log("collision");
                wrook1.wrrmv()
            }
            if (((Math.abs(bki.x - wr2.x - 3) < 0.05) && (Math.abs(bki.z - wr2.z + 7) < 0.05))) {
                console.log("collision");
                wrook2.wrrmv()
            }
            if (((Math.abs(bki.x - wr1.x - 3) < 0.05) && (Math.abs(bki.z - wr1.z + 7) < 0.05))) {
                console.log("collision");
                wrook1.wrrmv()
            }
            if (((Math.abs(bki.x - wr2.x - 3) < 0.05) && (Math.abs(bki.z - wr2.z + 7) < 0.05))) {
                console.log("collision");
                wrook2.wrrmv()
            }





            if (((Math.abs(bki.x - wb1.x - 1) <= 0.05) && (Math.abs(bki.z - wb1.z + 7) < 0.05))) {
                console.log("collision");
                wbishop1.wbrmv();
            }

            if ((Math.abs(bki.x - wb2.x - 1) <= 0.05) && (Math.abs(bki.z - wb2.z + 7) < 0.05)) {
                console.log("collision");
                wbishop2.wbrmv();
            }
            if (((Math.abs(bki.x - wb1.x - 1) <= 0.05) && (Math.abs(bki.z - wb1.z + 7) < 0.05))) {
                console.log("collision");
                wbishop1.wbrmv();
            }
            if ((Math.abs(bki.x - wb2.x - 1) <= 0.05) && (Math.abs(bki.z - wb2.z + 7) < 0.05)) {
                console.log("collision");
                wbishop2.wbrmv();
            }




            if (((Math.abs(bki.x - wk2.x - 2) < 0.05) && (Math.abs(bki.z - wk2.z + 7) < 0.05))) {
                console.log("collision");
                wknight2.wkrmv()

            }

            if (((Math.abs(bki.x - wk1.x - 2) < 0.05) && (Math.abs(bki.z - wk1.z + 7) < 0.05))) {
                console.log("collision");
                wknight1.wkrmv()

            }


            if (((Math.abs(bki.x - wk2.x - 2) < 0.05) && (Math.abs(bki.z - wk2.z + 7) < 0.05))) {
                console.log("collision");
                wknight2.wkrmv()

            }

            if (((Math.abs(bki.x - wk1.x - 2) < 0.05) && (Math.abs(bki.z - wk1.z + 7) < 0.05))) {
                console.log("collision");
                wknight2.wkrmv()

            }




            if (((Math.abs(bki.x - wq.x + 1.05) < 0.05) && (Math.abs(bki.z - wq.z + 7.1) < 0.05))) {
                console.log("collision");
                wqueen.wqrmv()
            }
            if (((Math.abs(bki.x - wq.x + 1.05) < 0.05) && (Math.abs(bki.z - wq.z + 7.1) < 0.05))) {
                console.log("collision");
                wqueen.wqrmv()
            }


            rmvLyr()
            select2.removeEventListener(select2, 'click')

            turn = 'w'
            clicked = false;
        })
    }

    if ((px - 0.5) > -4 && (pz + 1.35) < 4) {
        let select3 = new THREE.Mesh(plane_geo, plane_mat);
        select3.position.set(px - 0.5, 0.2, pz + 1.35)
        layer.add(select3)

        select3.rotation.x = -90 * (Math.PI / 180)
        domEvents.addEventListener(select3, 'click', () => {

            obj.position.set(px - 1, -0.8, pz + 1)
            bki = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }

            if (((Math.abs(bki.x - wp1.x + 1.05) < 0.05) && (Math.abs(bki.z - wp1.z + 6) < 0.05))) {
                console.log("collision");
                wpawn1.wprmv()

            }

            if (((Math.abs(bki.x - wp2.x + 1.05) < 0.05) && (Math.abs(bki.z - wp2.z + 6) < 0.05))) {
                console.log("collision");
                wpawn2.wprmv()
            }


            if (((Math.abs(bki.x - wp3.x + 1.05) < 0.05) && (Math.abs(bki.z - wp3.z + 6) < 0.05))) {
                console.log("collision");
                wpawn3.wprmv()
            }


            if (((Math.abs(bki.x - wp4.x + 1.05) < 0.05) && (Math.abs(bki.z - wp4.z + 6) < 0.05))) {
                console.log("collision");
                wpawn4.wprmv()

            }

            if (((Math.abs(bki.x - wp5.x + 1.05) < 0.05) && (Math.abs(bki.z - wp5.z + 6) < 0.05))) {
                console.log("collision");
                wpawn5.wprmv()

            }

            if (((Math.abs(bki.x - wp6.x + 1.05) < 0.05) && (Math.abs(bki.z - wp6.z + 6) < 0.05))) {
                console.log("collision");
                wpawn6.wprmv()

            }


            if (((Math.abs(bki.x - wp7.x + 1.05) < 0.05) && (Math.abs(bki.z - wp7.z + 6) < 0.05))) {
                console.log("collision");
                wpawn7.wprmv()

            }

            if ((Math.abs(bki.x - wp8.x + 1.05) < 0.05) && (Math.abs(bki.z - wp8.z + 6) < 0.05)) {
                console.log("collision");
                wpawn8.wprmv()

            }



            if (((Math.abs(bki.x - wr1.x - 3) < 0.05) && (Math.abs(bki.z - wr1.z + 7) < 0.05))) {
                console.log("collision");
                wrook1.wrrmv()
            }
            if (((Math.abs(bki.x - wr2.x - 3) < 0.05) && (Math.abs(bki.z - wr2.z + 7) < 0.05))) {
                console.log("collision");
                wrook2.wrrmv()
            }
            if (((Math.abs(bki.x - wr1.x - 3) < 0.05) && (Math.abs(bki.z - wr1.z + 7) < 0.05))) {
                console.log("collision");
                wrook1.wrrmv()
            }
            if (((Math.abs(bki.x - wr2.x - 3) < 0.05) && (Math.abs(bki.z - wr2.z + 7) < 0.05))) {
                console.log("collision");
                wrook2.wrrmv()
            }





            if (((Math.abs(bki.x - wb1.x - 1) <= 0.05) && (Math.abs(bki.z - wb1.z + 7) < 0.05))) {
                console.log("collision");
                wbishop1.wbrmv();
            }

            if ((Math.abs(bki.x - wb2.x - 1) <= 0.05) && (Math.abs(bki.z - wb2.z + 7) < 0.05)) {
                console.log("collision");
                wbishop2.wbrmv();
            }
            if (((Math.abs(bki.x - wb1.x - 1) <= 0.05) && (Math.abs(bki.z - wb1.z + 7) < 0.05))) {
                console.log("collision");
                wbishop1.wbrmv();
            }
            if ((Math.abs(bki.x - wb2.x - 1) <= 0.05) && (Math.abs(bki.z - wb2.z + 7) < 0.05)) {
                console.log("collision");
                wbishop2.wbrmv();
            }




            if (((Math.abs(bki.x - wk2.x - 2) < 0.05) && (Math.abs(bki.z - wk2.z + 7) < 0.05))) {
                console.log("collision");
                wknight2.wkrmv()

            }

            if (((Math.abs(bki.x - wk1.x - 2) < 0.05) && (Math.abs(bki.z - wk1.z + 7) < 0.05))) {
                console.log("collision");
                wknight1.wkrmv()

            }


            if (((Math.abs(bki.x - wk2.x - 2) < 0.05) && (Math.abs(bki.z - wk2.z + 7) < 0.05))) {
                console.log("collision");
                wknight2.wkrmv()

            }

            if (((Math.abs(bki.x - wk1.x - 2) < 0.05) && (Math.abs(bki.z - wk1.z + 7) < 0.05))) {
                console.log("collision");
                wknight2.wkrmv()

            }




            if (((Math.abs(bki.x - wq.x + 1.05) < 0.05) && (Math.abs(bki.z - wq.z + 7.1) < 0.05))) {
                console.log("collision");
                wqueen.wqrmv()
            }
            if (((Math.abs(bki.x - wq.x + 1.05) < 0.05) && (Math.abs(bki.z - wq.z + 7.1) < 0.05))) {
                console.log("collision");
                wqueen.wqrmv()
            }

            rmvLyr()
            select3.removeEventListener(select3, 'click')

            turn = 'w'
            clicked = false;
        })
    }

    if ((pz + 1.35) < 4) {
        let select4 = new THREE.Mesh(plane_geo, plane_mat);

        select4.position.set(px + 0.5, 0.2, pz + 1.35)
        select4.rotation.x = -90 * (Math.PI / 180)
        layer.add(select4)
        domEvents.addEventListener(select4, 'click', () => {

            obj.position.set(px, -0.8, pz + 1)
            bki = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
            if (((Math.abs(bki.x - wp1.x + 1.05) < 0.05) && (Math.abs(bki.z - wp1.z + 6) < 0.05))) {
                console.log("collision");
                wpawn1.wprmv()

            }

            if (((Math.abs(bki.x - wp2.x + 1.05) < 0.05) && (Math.abs(bki.z - wp2.z + 6) < 0.05))) {
                console.log("collision");
                wpawn2.wprmv()
            }


            if (((Math.abs(bki.x - wp3.x + 1.05) < 0.05) && (Math.abs(bki.z - wp3.z + 6) < 0.05))) {
                console.log("collision");
                wpawn3.wprmv()
            }


            if (((Math.abs(bki.x - wp4.x + 1.05) < 0.05) && (Math.abs(bki.z - wp4.z + 6) < 0.05))) {
                console.log("collision");
                wpawn4.wprmv()

            }

            if (((Math.abs(bki.x - wp5.x + 1.05) < 0.05) && (Math.abs(bki.z - wp5.z + 6) < 0.05))) {
                console.log("collision");
                wpawn5.wprmv()

            }

            if (((Math.abs(bki.x - wp6.x + 1.05) < 0.05) && (Math.abs(bki.z - wp6.z + 6) < 0.05))) {
                console.log("collision");
                wpawn6.wprmv()

            }


            if (((Math.abs(bki.x - wp7.x + 1.05) < 0.05) && (Math.abs(bki.z - wp7.z + 6) < 0.05))) {
                console.log("collision");
                wpawn7.wprmv()

            }

            if ((Math.abs(bki.x - wp8.x + 1.05) < 0.05) && (Math.abs(bki.z - wp8.z + 6) < 0.05)) {
                console.log("collision");
                wpawn8.wprmv()

            }



            if (((Math.abs(bki.x - wr1.x - 3) < 0.05) && (Math.abs(bki.z - wr1.z + 7) < 0.05))) {
                console.log("collision");
                wrook1.wrrmv()
            }
            if (((Math.abs(bki.x - wr2.x - 3) < 0.05) && (Math.abs(bki.z - wr2.z + 7) < 0.05))) {
                console.log("collision");
                wrook2.wrrmv()
            }
            if (((Math.abs(bki.x - wr1.x - 3) < 0.05) && (Math.abs(bki.z - wr1.z + 7) < 0.05))) {
                console.log("collision");
                wrook1.wrrmv()
            }
            if (((Math.abs(bki.x - wr2.x - 3) < 0.05) && (Math.abs(bki.z - wr2.z + 7) < 0.05))) {
                console.log("collision");
                wrook2.wrrmv()
            }





            if (((Math.abs(bki.x - wb1.x - 1) <= 0.05) && (Math.abs(bki.z - wb1.z + 7) < 0.05))) {
                console.log("collision");
                wbishop1.wbrmv();
            }

            if ((Math.abs(bki.x - wb2.x - 1) <= 0.05) && (Math.abs(bki.z - wb2.z + 7) < 0.05)) {
                console.log("collision");
                wbishop2.wbrmv();
            }
            if (((Math.abs(bki.x - wb1.x - 1) <= 0.05) && (Math.abs(bki.z - wb1.z + 7) < 0.05))) {
                console.log("collision");
                wbishop1.wbrmv();
            }
            if ((Math.abs(bki.x - wb2.x - 1) <= 0.05) && (Math.abs(bki.z - wb2.z + 7) < 0.05)) {
                console.log("collision");
                wbishop2.wbrmv();
            }




            if (((Math.abs(bki.x - wk2.x - 2) < 0.05) && (Math.abs(bki.z - wk2.z + 7) < 0.05))) {
                console.log("collision");
                wknight2.wkrmv()

            }

            if (((Math.abs(bki.x - wk1.x - 2) < 0.05) && (Math.abs(bki.z - wk1.z + 7) < 0.05))) {
                console.log("collision");
                wknight1.wkrmv()

            }


            if (((Math.abs(bki.x - wk2.x - 2) < 0.05) && (Math.abs(bki.z - wk2.z + 7) < 0.05))) {
                console.log("collision");
                wknight2.wkrmv()

            }

            if (((Math.abs(bki.x - wk1.x - 2) < 0.05) && (Math.abs(bki.z - wk1.z + 7) < 0.05))) {
                console.log("collision");
                wknight2.wkrmv()

            }




            if (((Math.abs(bki.x - wq.x + 1.05) < 0.05) && (Math.abs(bki.z - wq.z + 7.1) < 0.05))) {
                console.log("collision");
                wqueen.wqrmv()
            }
            if (((Math.abs(bki.x - wq.x + 1.05) < 0.05) && (Math.abs(bki.z - wq.z + 7.1) < 0.05))) {
                console.log("collision");
                wqueen.wqrmv()
            }


            rmvLyr()
            select4.removeEventListener(select4, 'click')

            turn = 'w'
            clicked = false;
        })
    }

    if ((pz - 0.65) > -4) {
        let select5 = new THREE.Mesh(plane_geo, plane_mat);
        select5.position.set(px + 0.5, 0.2, pz - 0.65)
        select5.rotation.x = -90 * (Math.PI / 180)
        layer.add(select5)
        domEvents.addEventListener(select5, 'click', () => {

            obj.position.set(px, -0.8, pz - 1)
            bki = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
            if (((Math.abs(bki.x - wp1.x + 1.05) < 0.05) && (Math.abs(bki.z - wp1.z + 6) < 0.05))) {
                console.log("collision");
                wpawn1.wprmv()

            }

            if (((Math.abs(bki.x - wp2.x + 1.05) < 0.05) && (Math.abs(bki.z - wp2.z + 6) < 0.05))) {
                console.log("collision");
                wpawn2.wprmv()
            }


            if (((Math.abs(bki.x - wp3.x + 1.05) < 0.05) && (Math.abs(bki.z - wp3.z + 6) < 0.05))) {
                console.log("collision");
                wpawn3.wprmv()
            }


            if (((Math.abs(bki.x - wp4.x + 1.05) < 0.05) && (Math.abs(bki.z - wp4.z + 6) < 0.05))) {
                console.log("collision");
                wpawn4.wprmv()

            }

            if (((Math.abs(bki.x - wp5.x + 1.05) < 0.05) && (Math.abs(bki.z - wp5.z + 6) < 0.05))) {
                console.log("collision");
                wpawn5.wprmv()

            }

            if (((Math.abs(bki.x - wp6.x + 1.05) < 0.05) && (Math.abs(bki.z - wp6.z + 6) < 0.05))) {
                console.log("collision");
                wpawn6.wprmv()

            }


            if (((Math.abs(bki.x - wp7.x + 1.05) < 0.05) && (Math.abs(bki.z - wp7.z + 6) < 0.05))) {
                console.log("collision");
                wpawn7.wprmv()

            }

            if ((Math.abs(bki.x - wp8.x + 1.05) < 0.05) && (Math.abs(bki.z - wp8.z + 6) < 0.05)) {
                console.log("collision");
                wpawn8.wprmv()

            }



            if (((Math.abs(bki.x - wr1.x - 3) < 0.05) && (Math.abs(bki.z - wr1.z + 7) < 0.05))) {
                console.log("collision");
                wrook1.wrrmv()
            }
            if (((Math.abs(bki.x - wr2.x - 3) < 0.05) && (Math.abs(bki.z - wr2.z + 7) < 0.05))) {
                console.log("collision");
                wrook2.wrrmv()
            }
            if (((Math.abs(bki.x - wr1.x - 3) < 0.05) && (Math.abs(bki.z - wr1.z + 7) < 0.05))) {
                console.log("collision");
                wrook1.wrrmv()
            }
            if (((Math.abs(bki.x - wr2.x - 3) < 0.05) && (Math.abs(bki.z - wr2.z + 7) < 0.05))) {
                console.log("collision");
                wrook2.wrrmv()
            }





            if (((Math.abs(bki.x - wb1.x - 1) <= 0.05) && (Math.abs(bki.z - wb1.z + 7) < 0.05))) {
                console.log("collision");
                wbishop1.wbrmv();
            }

            if ((Math.abs(bki.x - wb2.x - 1) <= 0.05) && (Math.abs(bki.z - wb2.z + 7) < 0.05)) {
                console.log("collision");
                wbishop2.wbrmv();
            }
            if (((Math.abs(bki.x - wb1.x - 1) <= 0.05) && (Math.abs(bki.z - wb1.z + 7) < 0.05))) {
                console.log("collision");
                wbishop1.wbrmv();
            }
            if ((Math.abs(bki.x - wb2.x - 1) <= 0.05) && (Math.abs(bki.z - wb2.z + 7) < 0.05)) {
                console.log("collision");
                wbishop2.wbrmv();
            }




            if (((Math.abs(bki.x - wk2.x - 2) < 0.05) && (Math.abs(bki.z - wk2.z + 7) < 0.05))) {
                console.log("collision");
                wknight2.wkrmv()

            }

            if (((Math.abs(bki.x - wk1.x - 2) < 0.05) && (Math.abs(bki.z - wk1.z + 7) < 0.05))) {
                console.log("collision");
                wknight1.wkrmv()

            }


            if (((Math.abs(bki.x - wk2.x - 2) < 0.05) && (Math.abs(bki.z - wk2.z + 7) < 0.05))) {
                console.log("collision");
                wknight2.wkrmv()

            }

            if (((Math.abs(bki.x - wk1.x - 2) < 0.05) && (Math.abs(bki.z - wk1.z + 7) < 0.05))) {
                console.log("collision");
                wknight2.wkrmv()

            }




            if (((Math.abs(bki.x - wq.x + 1.05) < 0.05) && (Math.abs(bki.z - wq.z + 7.1) < 0.05))) {
                console.log("collision");
                wqueen.wqrmv()
            }
            if (((Math.abs(bki.x - wq.x + 1.05) < 0.05) && (Math.abs(bki.z - wq.z + 7.1) < 0.05))) {
                console.log("collision");
                wqueen.wqrmv()
            }


            for (let i = layer.children.length; i >= 0; i--) {
                layer.remove(layer.children[i])
            }
            select5.removeEventListener(select5, 'click')

            turn = 'w'
            clicked = false;
        })
    }

    if ((px - 0.5) > -4 && (pz - 0.65) > -4) {
        let select6 = new THREE.Mesh(plane_geo, plane_mat);
        select6.position.set(px - 0.5, 0.2, pz - 0.65)
        select6.rotation.x = -90 * (Math.PI / 180)
        layer.add(select6)
        domEvents.addEventListener(select6, 'click', () => {

            obj.position.set(px - 1, -0.8, pz - 1)
            bki = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
            if (((Math.abs(bki.x - wp1.x + 1.05) < 0.05) && (Math.abs(bki.z - wp1.z + 6) < 0.05))) {
                console.log("collision");
                wpawn1.wprmv()

            }

            if (((Math.abs(bki.x - wp2.x + 1.05) < 0.05) && (Math.abs(bki.z - wp2.z + 6) < 0.05))) {
                console.log("collision");
                wpawn2.wprmv()
            }


            if (((Math.abs(bki.x - wp3.x + 1.05) < 0.05) && (Math.abs(bki.z - wp3.z + 6) < 0.05))) {
                console.log("collision");
                wpawn3.wprmv()
            }


            if (((Math.abs(bki.x - wp4.x + 1.05) < 0.05) && (Math.abs(bki.z - wp4.z + 6) < 0.05))) {
                console.log("collision");
                wpawn4.wprmv()

            }

            if (((Math.abs(bki.x - wp5.x + 1.05) < 0.05) && (Math.abs(bki.z - wp5.z + 6) < 0.05))) {
                console.log("collision");
                wpawn5.wprmv()

            }

            if (((Math.abs(bki.x - wp6.x + 1.05) < 0.05) && (Math.abs(bki.z - wp6.z + 6) < 0.05))) {
                console.log("collision");
                wpawn6.wprmv()

            }


            if (((Math.abs(bki.x - wp7.x + 1.05) < 0.05) && (Math.abs(bki.z - wp7.z + 6) < 0.05))) {
                console.log("collision");
                wpawn7.wprmv()

            }

            if ((Math.abs(bki.x - wp8.x + 1.05) < 0.05) && (Math.abs(bki.z - wp8.z + 6) < 0.05)) {
                console.log("collision");
                wpawn8.wprmv()

            }



            if (((Math.abs(bki.x - wr1.x - 3) < 0.05) && (Math.abs(bki.z - wr1.z + 7) < 0.05))) {
                console.log("collision");
                wrook1.wrrmv()
            }
            if (((Math.abs(bki.x - wr2.x - 3) < 0.05) && (Math.abs(bki.z - wr2.z + 7) < 0.05))) {
                console.log("collision");
                wrook2.wrrmv()
            }
            if (((Math.abs(bki.x - wr1.x - 3) < 0.05) && (Math.abs(bki.z - wr1.z + 7) < 0.05))) {
                console.log("collision");
                wrook1.wrrmv()
            }
            if (((Math.abs(bki.x - wr2.x - 3) < 0.05) && (Math.abs(bki.z - wr2.z + 7) < 0.05))) {
                console.log("collision");
                wrook2.wrrmv()
            }





            if (((Math.abs(bki.x - wb1.x - 1) <= 0.05) && (Math.abs(bki.z - wb1.z + 7) < 0.05))) {
                console.log("collision");
                wbishop1.wbrmv();
            }

            if ((Math.abs(bki.x - wb2.x - 1) <= 0.05) && (Math.abs(bki.z - wb2.z + 7) < 0.05)) {
                console.log("collision");
                wbishop2.wbrmv();
            }
            if (((Math.abs(bki.x - wb1.x - 1) <= 0.05) && (Math.abs(bki.z - wb1.z + 7) < 0.05))) {
                console.log("collision");
                wbishop1.wbrmv();
            }
            if ((Math.abs(bki.x - wb2.x - 1) <= 0.05) && (Math.abs(bki.z - wb2.z + 7) < 0.05)) {
                console.log("collision");
                wbishop2.wbrmv();
            }




            if (((Math.abs(bki.x - wk2.x - 2) < 0.05) && (Math.abs(bki.z - wk2.z + 7) < 0.05))) {
                console.log("collision");
                wknight2.wkrmv()

            }

            if (((Math.abs(bki.x - wk1.x - 2) < 0.05) && (Math.abs(bki.z - wk1.z + 7) < 0.05))) {
                console.log("collision");
                wknight1.wkrmv()

            }


            if (((Math.abs(bki.x - wk2.x - 2) < 0.05) && (Math.abs(bki.z - wk2.z + 7) < 0.05))) {
                console.log("collision");
                wknight2.wkrmv()

            }

            if (((Math.abs(bki.x - wk1.x - 2) < 0.05) && (Math.abs(bki.z - wk1.z + 7) < 0.05))) {
                console.log("collision");
                wknight2.wkrmv()

            }




            if (((Math.abs(bki.x - wq.x + 1.05) < 0.05) && (Math.abs(bki.z - wq.z + 7.1) < 0.05))) {
                console.log("collision");
                wqueen.wqrmv()
            }
            if (((Math.abs(bki.x - wq.x + 1.05) < 0.05) && (Math.abs(bki.z - wq.z + 7.1) < 0.05))) {
                console.log("collision");
                wqueen.wqrmv()
            }


            rmvLyr()
            select6.removeEventListener(select6, 'click')

            turn = 'w'
            clicked = false;
        })

    }

    if ((px + 1.5) < 4 && (pz - 0.65) > - 4) {
        let select7 = new THREE.Mesh(plane_geo, plane_mat);
        select7.position.set(px + 1.5, 0.2, pz - 0.65)
        select7.rotation.x = -90 * (Math.PI / 180)
        layer.add(select7)
        domEvents.addEventListener(select7, 'click', () => {

            obj.position.set(px + 1, -0.8, pz - 1)
            bki = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }

            if (((Math.abs(bki.x - wp1.x + 1.05) < 0.05) && (Math.abs(bki.z - wp1.z + 6) < 0.05))) {
                console.log("collision");
                wpawn1.wprmv()

            }

            if (((Math.abs(bki.x - wp2.x + 1.05) < 0.05) && (Math.abs(bki.z - wp2.z + 6) < 0.05))) {
                console.log("collision");
                wpawn2.wprmv()
            }


            if (((Math.abs(bki.x - wp3.x + 1.05) < 0.05) && (Math.abs(bki.z - wp3.z + 6) < 0.05))) {
                console.log("collision");
                wpawn3.wprmv()
            }


            if (((Math.abs(bki.x - wp4.x + 1.05) < 0.05) && (Math.abs(bki.z - wp4.z + 6) < 0.05))) {
                console.log("collision");
                wpawn4.wprmv()

            }

            if (((Math.abs(bki.x - wp5.x + 1.05) < 0.05) && (Math.abs(bki.z - wp5.z + 6) < 0.05))) {
                console.log("collision");
                wpawn5.wprmv()

            }

            if (((Math.abs(bki.x - wp6.x + 1.05) < 0.05) && (Math.abs(bki.z - wp6.z + 6) < 0.05))) {
                console.log("collision");
                wpawn6.wprmv()

            }


            if (((Math.abs(bki.x - wp7.x + 1.05) < 0.05) && (Math.abs(bki.z - wp7.z + 6) < 0.05))) {
                console.log("collision");
                wpawn7.wprmv()

            }

            if ((Math.abs(bki.x - wp8.x + 1.05) < 0.05) && (Math.abs(bki.z - wp8.z + 6) < 0.05)) {
                console.log("collision");
                wpawn8.wprmv()

            }



            if (((Math.abs(bki.x - wr1.x - 3) < 0.05) && (Math.abs(bki.z - wr1.z + 7) < 0.05))) {
                console.log("collision");
                wrook1.wrrmv()
            }
            if (((Math.abs(bki.x - wr2.x - 3) < 0.05) && (Math.abs(bki.z - wr2.z + 7) < 0.05))) {
                console.log("collision");
                wrook2.wrrmv()
            }
            if (((Math.abs(bki.x - wr1.x - 3) < 0.05) && (Math.abs(bki.z - wr1.z + 7) < 0.05))) {
                console.log("collision");
                wrook1.wrrmv()
            }
            if (((Math.abs(bki.x - wr2.x - 3) < 0.05) && (Math.abs(bki.z - wr2.z + 7) < 0.05))) {
                console.log("collision");
                wrook2.wrrmv()
            }





            if (((Math.abs(bki.x - wb1.x - 1) <= 0.05) && (Math.abs(bki.z - wb1.z + 7) < 0.05))) {
                console.log("collision");
                wbishop1.wbrmv();
            }

            if ((Math.abs(bki.x - wb2.x - 1) <= 0.05) && (Math.abs(bki.z - wb2.z + 7) < 0.05)) {
                console.log("collision");
                wbishop2.wbrmv();
            }
            if (((Math.abs(bki.x - wb1.x - 1) <= 0.05) && (Math.abs(bki.z - wb1.z + 7) < 0.05))) {
                console.log("collision");
                wbishop1.wbrmv();
            }
            if ((Math.abs(bki.x - wb2.x - 1) <= 0.05) && (Math.abs(bki.z - wb2.z + 7) < 0.05)) {
                console.log("collision");
                wbishop2.wbrmv();
            }




            if (((Math.abs(bki.x - wk2.x - 2) < 0.05) && (Math.abs(bki.z - wk2.z + 7) < 0.05))) {
                console.log("collision");
                wknight2.wkrmv()

            }

            if (((Math.abs(bki.x - wk1.x - 2) < 0.05) && (Math.abs(bki.z - wk1.z + 7) < 0.05))) {
                console.log("collision");
                wknight1.wkrmv()

            }


            if (((Math.abs(bki.x - wk2.x - 2) < 0.05) && (Math.abs(bki.z - wk2.z + 7) < 0.05))) {
                console.log("collision");
                wknight2.wkrmv()

            }

            if (((Math.abs(bki.x - wk1.x - 2) < 0.05) && (Math.abs(bki.z - wk1.z + 7) < 0.05))) {
                console.log("collision");
                wknight2.wkrmv()

            }




            if (((Math.abs(bki.x - wq.x + 1.05) < 0.05) && (Math.abs(bki.z - wq.z + 7.1) < 0.05))) {
                console.log("collision");
                wqueen.wqrmv()
            }
            if (((Math.abs(bki.x - wq.x + 1.05) < 0.05) && (Math.abs(bki.z - wq.z + 7.1) < 0.05))) {
                console.log("collision");
                wqueen.wqrmv()
            }

            rmvLyr()
            select7.removeEventListener(select7, 'click')
            turn = 'w'
            clicked = false;
        })
    }
    board.add(layer)
}


function Wpawn_onClick(px, pz, obj, t) {

    plane_geo = new THREE.PlaneGeometry(0.8, 0.8);
    plane_mat = new THREE.MeshBasicMaterial({ color: 0xd87d7d })

    if (pz == 8.25) {
        let select = new THREE.Mesh(plane_geo, plane_mat);
        select.position.set(px - 0.5, 0.2, pz - 7.6)
        select.rotation.x = -90 * (Math.PI / 180)
        select.name = 'select'
        let select2 = new THREE.Mesh(plane_geo, plane_mat);
        select2.position.set(px - 0.5, 0.2, pz - 6.6)
        select2.rotation.x = -90 * (Math.PI / 180)
        select2.name = 'select'
        layer.add(select)
        layer.add(select2)
        domEvents.addEventListener(select2, 'click', () => {
            if (layer.getObjectByName('select')) {
                obj.position.set(px, -0.8, pz - 1)
                if (t == 'a') {
                    wp1 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
                }
                if (t == 'b') {

                    wp2 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
                }
                if (t == 'c') {

                    wp3 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
                }
                if (t == 'd') {

                    wp4 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
                }
                if (t == 'e') {

                    wp5 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
                }
                if (t == 'f') {

                    wp6 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
                }
                if (t == 'g') {

                    wp7 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
                }
                if (t == 'h') {

                    wp8 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
                }


            }
            rmvLyr()
            domEvents.removeEventListener(select2, 'click')
            domEvents.removeEventListener(select, 'click')
            turn = 'b'

            clicked = false;
        })

        domEvents.addEventListener(select, 'click', () => {

            if (layer.getObjectByName('select')) {
                obj.position.set(px, -0.8, pz - 2)
                // console.log(bp2.x + " " + bp2.z);
                // console.log(wp2.x+" "+wp2.z)
                if (t == 'a') {
                    // console.log(wp1.x+" "+wp1.z);

                    wp1 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
                    // console.log(wp1.x);

                }
                if (t == 'b') {

                    wp2 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
                }
                if (t == 'c') {

                    wp3 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
                }
                if (t == 'd') {

                    wp4 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
                }
                if (t == 'e') {

                    wp5 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
                }
                if (t == 'f') {

                    wp6 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
                }
                if (t == 'g') {

                    wp7 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
                }
                if (t == 'h') {

                    wp8 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
                }


            }
            rmvLyr()
            domEvents.removeEventListener(select, 'click')
            domEvents.removeEventListener(select2, 'click')
            turn = 'b'
            clicked = false;

        })
    }
    else {
       
        let select = new THREE.Mesh(plane_geo, plane_mat);
        let select2 = new THREE.Mesh(plane_geo, plane_mat);
        let select3 = new THREE.Mesh(plane_geo, plane_mat);
        select.position.set(px - 0.5, 0.2, pz - 6.6)
        select.rotation.x = -90 * (Math.PI / 180)
        select2.rotation.x = -90 * (Math.PI / 180)
        select3.rotation.x = -90 * (Math.PI / 180)
        layer.add(select)
        
        if((Math.abs((wp1.x+1)-bp1.x)<0.051 && Math.abs((wp1.z-bp1.z-6))<0.051) || (Math.abs((wp1.x+1)-bp2.x)<0.051 && Math.abs((wp1.z-bp2.z-6))<0.051) ||(Math.abs((wp1.x+1)-bp3.x)<0.051 && Math.abs((wp1.z-bp3.z-6))<0.051) ||(Math.abs((wp1.x+1)-bp4.x)<0.051 && Math.abs((wp1.z-bp4.z-6))<0.051) ||(Math.abs((wp1.x+1)-bp5.x)<0.051 && Math.abs((wp1.z-bp5.z-6))<0.051) ||(Math.abs((wp1.x+1)-bp6.x)<0.051 && Math.abs((wp1.z-bp6.z-6))<0.051) ||(Math.abs((wp1.x+1)-bp7.x)<0.051 && Math.abs((wp1.z-bp7.z-6))<0.051) ||(Math.abs((wp1.x+1)-bp8.x)<0.051 && Math.abs((wp1.z-bp8.z-6))<0.051) ){
           //right
            select2.position.set(px+0.45,0.2,pz-6.6)
            layer.add(select2)
        }
        if((Math.abs((wp1.x-1)-bp1.x)<0.051 && Math.abs((wp1.z-bp1.z-6))<0.051) || (Math.abs((wp1.x-1)-bp2.x)<0.051 && Math.abs((wp1.z-bp2.z-6))<0.051) ||(Math.abs((wp1.x-1)-bp3.x)<0.051 && Math.abs((wp1.z-bp3.z-6))<0.051) ||(Math.abs((wp1.x-1)-bp4.x)<0.051 && Math.abs((wp1.z-bp4.z-6))<0.051) ||(Math.abs((wp1.x-1)-bp5.x)<0.051 && Math.abs((wp1.z-bp5.z-6))<0.051) ||(Math.abs((wp1.x-1)-bp6.x)<0.051 && Math.abs((wp1.z-bp6.z-6))<0.051) ||(Math.abs((wp1.x-1)-bp7.x)<0.051 && Math.abs((wp1.z-bp7.z-6))<0.051) ||(Math.abs((wp1.x-1)-bp8.x)<0.051 && Math.abs((wp1.z-bp8.z-6))<0.051) ){
            // left
            select3.position.set(px-1.45,0.2,pz-6.6)
            layer.add(select3)
        }
        
        if((Math.abs((wp2.x-1)-bp1.x)<0.051 && Math.abs((wp2.z-bp1.z-6))<0.051) || (Math.abs((wp2.x-1)-bp2.x)<0.051 && Math.abs((wp2.z-bp2.z-6))<0.051) ||(Math.abs((wp2.x-1)-bp3.x)<0.051 && Math.abs((wp2.z-bp3.z-6))<0.051) ||(Math.abs((wp2.x-1)-bp4.x)<0.051 && Math.abs((wp2.z-bp4.z-6))<0.051) ||(Math.abs((wp2.x-1)-bp5.x)<0.051 && Math.abs((wp2.z-bp5.z-6))<0.051) ||(Math.abs((wp2.x-1)-bp6.x)<0.051 && Math.abs((wp2.z-bp6.z-6))<0.051) ||(Math.abs((wp2.x-1)-bp7.x)<0.051 && Math.abs((wp2.z-bp7.z-6))<0.051) ||(Math.abs((wp2.x-1)-bp8.x)<0.051 && Math.abs((wp2.z-bp8.z-6))<0.051) ){
           //left
            select3.position.set(px-1.45,0.2,pz-6.6)
            layer.add(select3)
        }
        if((Math.abs((wp2.x+1)-bp1.x)<0.051 && Math.abs((wp2.z-bp1.z-6))<0.051) || (Math.abs((wp2.x+1)-bp2.x)<0.051 && Math.abs((wp2.z-bp2.z-6))<0.051) ||(Math.abs((wp2.x+1)-bp3.x)<0.051 && Math.abs((wp2.z-bp3.z-6))<0.051) ||(Math.abs((wp2.x+1)-bp4.x)<0.051 && Math.abs((wp2.z-bp4.z-6))<0.051) ||(Math.abs((wp2.x+1)-bp5.x)<0.051 && Math.abs((wp2.z-bp5.z-6))<0.051) ||(Math.abs((wp2.x+1)-bp6.x)<0.051 && Math.abs((wp2.z-bp6.z-6))<0.051) ||(Math.abs((wp2.x+1)-bp7.x)<0.051 && Math.abs((wp2.z-bp7.z-6))<0.051) ||(Math.abs((wp2.x+1)-bp8.x)<0.051 && Math.abs((wp2.z-bp8.z-6))<0.051) ){
           //right
            select2.position.set(px+0.45,0.2,pz-6.6)
            layer.add(select2)
        }

        if((Math.abs((wp3.x-1)-bp1.x)<0.051 && Math.abs((wp3.z-bp1.z-6))<0.051) || (Math.abs((wp3.x-1)-bp2.x)<0.051 && Math.abs((wp3.z-bp2.z-6))<0.051) ||(Math.abs((wp3.x-1)-bp3.x)<0.051 && Math.abs((wp3.z-bp3.z-6))<0.051) ||(Math.abs((wp3.x-1)-bp4.x)<0.051 && Math.abs((wp3.z-bp4.z-6))<0.051) ||(Math.abs((wp3.x-1)-bp5.x)<0.051 && Math.abs((wp3.z-bp5.z-6))<0.051) ||(Math.abs((wp3.x-1)-bp6.x)<0.051 && Math.abs((wp3.z-bp6.z-6))<0.051) ||(Math.abs((wp3.x-1)-bp7.x)<0.051 && Math.abs((wp3.z-bp7.z-6))<0.051) ||(Math.abs((wp3.x-1)-bp8.x)<0.051 && Math.abs((wp3.z-bp8.z-6))<0.051) ){
           //left
           console.log("hi");
            select3.position.set(px-1.45,0.2,pz-6.6)
            layer.add(select3)
        }
        if((Math.abs((wp3.x+1)-bp1.x)<0.051 && Math.abs((wp3.z-bp1.z-6))<0.051) || (Math.abs((wp3.x+1)-bp2.x)<0.051 && Math.abs((wp3.z-bp2.z-6))<0.051) ||(Math.abs((wp3.x+1)-bp3.x)<0.051 && Math.abs((wp3.z-bp3.z-6))<0.051) ||(Math.abs((wp3.x+1)-bp4.x)<0.051 && Math.abs((wp3.z-bp4.z-6))<0.051) ||(Math.abs((wp3.x+1)-bp5.x)<0.051 && Math.abs((wp3.z-bp5.z-6))<0.051) ||(Math.abs((wp3.x+1)-bp6.x)<0.051 && Math.abs((wp3.z-bp6.z-6))<0.051) ||(Math.abs((wp3.x+1)-bp7.x)<0.051 && Math.abs((wp3.z-bp7.z-6))<0.051) ||(Math.abs((wp3.x+1)-bp8.x)<0.051 && Math.abs((wp3.z-bp8.z-6))<0.051) ){
           //right
            select2.position.set(px+0.45,0.2,pz-6.6)
            layer.add(select2)
        }
        if((Math.abs((wp4.x-1)-bp1.x)<0.051 && Math.abs((wp4.z-bp1.z-6))<0.051) || (Math.abs((wp4.x-1)-bp2.x)<0.051 && Math.abs((wp4.z-bp2.z-6))<0.051) ||(Math.abs((wp4.x-1)-bp3.x)<0.051 && Math.abs((wp4.z-bp3.z-6))<0.051) ||(Math.abs((wp4.x-1)-bp4.x)<0.051 && Math.abs((wp4.z-bp4.z-6))<0.051) ||(Math.abs((wp4.x-1)-bp5.x)<0.051 && Math.abs((wp4.z-bp5.z-6))<0.051) ||(Math.abs((wp4.x-1)-bp6.x)<0.051 && Math.abs((wp4.z-bp6.z-6))<0.051) ||(Math.abs((wp4.x-1)-bp7.x)<0.051 && Math.abs((wp4.z-bp7.z-6))<0.051) ||(Math.abs((wp4.x-1)-bp8.x)<0.051 && Math.abs((wp4.z-bp8.z-6))<0.051) ){
           //left
           console.log("hi");
            select3.position.set(px-1.45,0.2,pz-6.6)
            layer.add(select3)
        }
        if((Math.abs((wp4.x+1)-bp1.x)<0.051 && Math.abs((wp4.z-bp1.z-6))<0.051) || (Math.abs((wp4.x+1)-bp2.x)<0.051 && Math.abs((wp4.z-bp2.z-6))<0.051) ||(Math.abs((wp4.x+1)-bp3.x)<0.051 && Math.abs((wp4.z-bp3.z-6))<0.051) ||(Math.abs((wp4.x+1)-bp4.x)<0.051 && Math.abs((wp4.z-bp4.z-6))<0.051) ||(Math.abs((wp4.x+1)-bp5.x)<0.051 && Math.abs((wp4.z-bp5.z-6))<0.051) ||(Math.abs((wp4.x+1)-bp6.x)<0.051 && Math.abs((wp4.z-bp6.z-6))<0.051) ||(Math.abs((wp4.x+1)-bp7.x)<0.051 && Math.abs((wp4.z-bp7.z-6))<0.051) ||(Math.abs((wp4.x+1)-bp8.x)<0.051 && Math.abs((wp4.z-bp8.z-6))<0.051) ){
           //right
            select2.position.set(px+0.45,0.2,pz-6.6)
            layer.add(select2)
        }
        if((Math.abs((wp5.x-1)-bp1.x)<0.051 && Math.abs((wp5.z-bp1.z-6))<0.051) || (Math.abs((wp5.x-1)-bp2.x)<0.051 && Math.abs((wp5.z-bp2.z-6))<0.051) ||(Math.abs((wp5.x-1)-bp3.x)<0.051 && Math.abs((wp5.z-bp3.z-6))<0.051) ||(Math.abs((wp5.x-1)-bp4.x)<0.051 && Math.abs((wp5.z-bp4.z-6))<0.051) ||(Math.abs((wp5.x-1)-bp5.x)<0.051 && Math.abs((wp5.z-bp5.z-6))<0.051) ||(Math.abs((wp5.x-1)-bp6.x)<0.051 && Math.abs((wp5.z-bp6.z-6))<0.051) ||(Math.abs((wp5.x-1)-bp7.x)<0.051 && Math.abs((wp5.z-bp7.z-6))<0.051) ||(Math.abs((wp5.x-1)-bp8.x)<0.051 && Math.abs((wp5.z-bp8.z-6))<0.051) ){
           //left
           console.log("hi");
            select3.position.set(px-1.45,0.2,pz-6.6)
            layer.add(select3)
        }
        if((Math.abs((wp5.x+1)-bp1.x)<0.051 && Math.abs((wp5.z-bp1.z-6))<0.051) || (Math.abs((wp5.x+1)-bp2.x)<0.051 && Math.abs((wp5.z-bp2.z-6))<0.051) ||(Math.abs((wp5.x+1)-bp3.x)<0.051 && Math.abs((wp5.z-bp3.z-6))<0.051) ||(Math.abs((wp5.x+1)-bp4.x)<0.051 && Math.abs((wp5.z-bp4.z-6))<0.051) ||(Math.abs((wp5.x+1)-bp5.x)<0.051 && Math.abs((wp5.z-bp5.z-6))<0.051) ||(Math.abs((wp5.x+1)-bp6.x)<0.051 && Math.abs((wp5.z-bp6.z-6))<0.051) ||(Math.abs((wp5.x+1)-bp7.x)<0.051 && Math.abs((wp5.z-bp7.z-6))<0.051) ||(Math.abs((wp5.x+1)-bp8.x)<0.051 && Math.abs((wp5.z-bp8.z-6))<0.051) ){
           //right
            select2.position.set(px+0.45,0.2,pz-6.6)
            layer.add(select2)
        }
        if((Math.abs((wp6.x-1)-bp1.x)<0.051 && Math.abs((wp6.z-bp1.z-6))<0.051) || (Math.abs((wp6.x-1)-bp2.x)<0.051 && Math.abs((wp6.z-bp2.z-6))<0.051) ||(Math.abs((wp6.x-1)-bp3.x)<0.051 && Math.abs((wp6.z-bp3.z-6))<0.051) ||(Math.abs((wp6.x-1)-bp4.x)<0.051 && Math.abs((wp6.z-bp4.z-6))<0.051) ||(Math.abs((wp6.x-1)-bp5.x)<0.051 && Math.abs((wp6.z-bp5.z-6))<0.051) ||(Math.abs((wp6.x-1)-bp6.x)<0.051 && Math.abs((wp6.z-bp6.z-6))<0.051) ||(Math.abs((wp6.x-1)-bp7.x)<0.051 && Math.abs((wp6.z-bp7.z-6))<0.051) ||(Math.abs((wp6.x-1)-bp8.x)<0.051 && Math.abs((wp6.z-bp8.z-6))<0.051) ){
           //left
           console.log("hi");
            select3.position.set(px-1.45,0.2,pz-6.6)
            layer.add(select3)
        }
        if((Math.abs((wp6.x+1)-bp1.x)<0.051 && Math.abs((wp6.z-bp1.z-6))<0.051) || (Math.abs((wp6.x+1)-bp2.x)<0.051 && Math.abs((wp6.z-bp2.z-6))<0.051) ||(Math.abs((wp6.x+1)-bp3.x)<0.051 && Math.abs((wp6.z-bp3.z-6))<0.051) ||(Math.abs((wp6.x+1)-bp4.x)<0.051 && Math.abs((wp6.z-bp4.z-6))<0.051) ||(Math.abs((wp6.x+1)-bp5.x)<0.051 && Math.abs((wp6.z-bp5.z-6))<0.051) ||(Math.abs((wp6.x+1)-bp6.x)<0.051 && Math.abs((wp6.z-bp6.z-6))<0.051) ||(Math.abs((wp6.x+1)-bp7.x)<0.051 && Math.abs((wp6.z-bp7.z-6))<0.051) ||(Math.abs((wp6.x+1)-bp8.x)<0.051 && Math.abs((wp6.z-bp8.z-6))<0.051) ){
           //right
            select2.position.set(px+0.45,0.2,pz-6.6)
            layer.add(select2)
        }
        if((Math.abs((wp7.x-1)-bp1.x)<0.051 && Math.abs((wp7.z-bp1.z-6))<0.051) || (Math.abs((wp7.x-1)-bp2.x)<0.051 && Math.abs((wp7.z-bp2.z-6))<0.051) ||(Math.abs((wp7.x-1)-bp3.x)<0.051 && Math.abs((wp7.z-bp3.z-6))<0.051) ||(Math.abs((wp7.x-1)-bp4.x)<0.051 && Math.abs((wp7.z-bp4.z-6))<0.051) ||(Math.abs((wp7.x-1)-bp5.x)<0.051 && Math.abs((wp7.z-bp5.z-6))<0.051) ||(Math.abs((wp7.x-1)-bp6.x)<0.051 && Math.abs((wp7.z-bp6.z-6))<0.051) ||(Math.abs((wp7.x-1)-bp7.x)<0.051 && Math.abs((wp7.z-bp7.z-6))<0.051) ||(Math.abs((wp7.x-1)-bp8.x)<0.051 && Math.abs((wp7.z-bp8.z-6))<0.051) ){
           //left
           console.log("hi");
            select3.position.set(px-1.45,0.2,pz-6.6)
            layer.add(select3)
        }
        if((Math.abs((wp7.x+1)-bp1.x)<0.051 && Math.abs((wp7.z-bp1.z-6))<0.051) || (Math.abs((wp7.x+1)-bp2.x)<0.051 && Math.abs((wp7.z-bp2.z-6))<0.051) ||(Math.abs((wp7.x+1)-bp3.x)<0.051 && Math.abs((wp7.z-bp3.z-6))<0.051) ||(Math.abs((wp7.x+1)-bp4.x)<0.051 && Math.abs((wp7.z-bp4.z-6))<0.051) ||(Math.abs((wp7.x+1)-bp5.x)<0.051 && Math.abs((wp7.z-bp5.z-6))<0.051) ||(Math.abs((wp7.x+1)-bp6.x)<0.051 && Math.abs((wp7.z-bp6.z-6))<0.051) ||(Math.abs((wp7.x+1)-bp7.x)<0.051 && Math.abs((wp7.z-bp7.z-6))<0.051) ||(Math.abs((wp7.x+1)-bp8.x)<0.051 && Math.abs((wp7.z-bp8.z-6))<0.051) ){
           //right
            select2.position.set(px+0.45,0.2,pz-6.6)
            layer.add(select2)
        }
        if((Math.abs((wp8.x-1)-bp1.x)<0.051 && Math.abs((wp8.z-bp1.z-6))<0.051) || (Math.abs((wp8.x-1)-bp2.x)<0.051 && Math.abs((wp8.z-bp2.z-6))<0.051) ||(Math.abs((wp8.x-1)-bp3.x)<0.051 && Math.abs((wp8.z-bp3.z-6))<0.051) ||(Math.abs((wp8.x-1)-bp4.x)<0.051 && Math.abs((wp8.z-bp4.z-6))<0.051) ||(Math.abs((wp8.x-1)-bp5.x)<0.051 && Math.abs((wp8.z-bp5.z-6))<0.051) ||(Math.abs((wp8.x-1)-bp6.x)<0.051 && Math.abs((wp8.z-bp6.z-6))<0.051) ||(Math.abs((wp8.x-1)-bp7.x)<0.051 && Math.abs((wp8.z-bp7.z-6))<0.051) ||(Math.abs((wp8.x-1)-bp8.x)<0.051 && Math.abs((wp8.z-bp8.z-6))<0.051) ){
           //left
           console.log("hi");
            select3.position.set(px-1.45,0.2,pz-6.6)
            layer.add(select3)
        }
        if((Math.abs((wp8.x+1)-bp1.x)<0.051 && Math.abs((wp8.z-bp1.z-6))<0.051) || (Math.abs((wp8.x+1)-bp2.x)<0.051 && Math.abs((wp8.z-bp2.z-6))<0.051) ||(Math.abs((wp8.x+1)-bp3.x)<0.051 && Math.abs((wp8.z-bp3.z-6))<0.051) ||(Math.abs((wp8.x+1)-bp4.x)<0.051 && Math.abs((wp8.z-bp4.z-6))<0.051) ||(Math.abs((wp8.x+1)-bp5.x)<0.051 && Math.abs((wp8.z-bp5.z-6))<0.051) ||(Math.abs((wp8.x+1)-bp6.x)<0.051 && Math.abs((wp8.z-bp6.z-6))<0.051) ||(Math.abs((wp8.x+1)-bp7.x)<0.051 && Math.abs((wp8.z-bp7.z-6))<0.051) ||(Math.abs((wp8.x+1)-bp8.x)<0.051 && Math.abs((wp8.z-bp8.z-6))<0.051) ){
           //right
            select2.position.set(px+0.45,0.2,pz-6.6)
            layer.add(select2)
        }

       


        if((Math.abs((wp1.x)-br2.x-5.05)<0.051 && Math.abs((wp1.z-br2.z-7)<0.051) && Math.abs((wp1.x)-br2.x-5.05)>(-0.051))|| (Math.abs((wp2.x)-br2.x-5.05)<0.051 &&  Math.abs((wp2.z-br2.z-7)<0.051) && Math.abs((wp2.x)-br2.x-5.05)>(-0.051))  || (Math.abs((wp3.x)-br2.x-5.05)<0.051 && Math.abs((wp3.z-br2.z-7)<0.051) && Math.abs((wp3.x)-br2.x-5.05)>(-0.051) ) || (Math.abs((wp4.x)-br2.x-5.05)<0.051 && Math.abs((wp4.z-br2.z-7)<0.051) && Math.abs((wp4.x)-br2.x-5.05)>(-0.051)) || (Math.abs((wp5.x)-br2.x-5.05)<0.051 && Math.abs((wp5.z-br2.z-7)<0.051) && Math.abs((wp5.x)-br2.x-5.05)>(-0.051))|| (Math.abs((wp6.x)-br2.x-5.05)<0.051 && Math.abs((wp6.z-br2.z-7)<0.051) && Math.abs((wp6.x)-br2.x-5.05)>(-0.051))|| (Math.abs((wp7.x)-br2.x-5.05)<0.051 && Math.abs((wp7.z-br2.z-7)<0.051) && Math.abs((wp7.x)-br2.x-5.05)>(-0.051)) || (Math.abs((wp8.x)-br2.x-5.05)<0.051 && Math.abs((wp8.z-br2.z-7)<0.051) && Math.abs((wp8.x)-br2.x-5.05)>(-0.051))){
             select2.position.set(px-1.45,0.2,pz-6.6)
                layer.add(select2)
             }
             
         if( (Math.abs((wp1.x)-br2.x-3.05)<0.051 &&  Math.abs((wp1.z-br2.z-7))<0.051 && Math.abs(((wp1.x)-br2.x-3.05)>(-0.051))) || (Math.abs((wp2.x)-br2.x-3.05)<0.051 &&  Math.abs((wp2.z-br2.z-7))<0.051 && Math.abs(((wp2.x)-br2.x-3.05)>(-0.051))) || (Math.abs((wp3.x)-br2.x-3.05)<0.051 &&  Math.abs((wp3.z-br2.z-7))<0.051  && Math.abs(((wp3.x)-br2.x-3.05)>(-0.051))) || (Math.abs((wp4.x)-br2.x-3.05)<0.051 &&  Math.abs((wp4.z-br2.z-7))<0.051 && Math.abs(((wp4.x)-br2.x-3.05)>(-0.051))) || (Math.abs((wp5.x)-br2.x-3.05)<0.051 &&  Math.abs((wp5.z-br2.z-7))<0.051 && Math.abs(((wp5.x)-br2.x-3.05)>(-0.051))) || (Math.abs((wp6.x)-br2.x-3.05)<0.051 &&  Math.abs((wp6.z-br2.z-7))<0.051 && Math.abs(((wp6.x)-br2.x-3.05)>(-0.051))) || (Math.abs((wp7.x)-br2.x-3.05)<0.051 &&  Math.abs((wp7.z-br2.z-7))<0.051 && Math.abs(((wp7.x)-br2.x-3.05)>(-0.051))) ||(Math.abs((wp8.x)-br2.x-3.05)<0.051 &&  Math.abs((wp8.z-br2.z-7))<0.051 && Math.abs(((wp8.x)-br2.x-3.05)>(-0.051)))){
                 //rook2 right
                 console.log("hii");
                 select3.position.set(px+0.45,0.2,pz-1.35+1.75)
                 layer.add(select3)
                }
                        
                console.log((wp7.x-4.1) +" "+(wp7.z-8));
                console.log(br1.x +" "+br1.z);
            //    console.log((Math.abs((wp7.x)-br1.x-2.05)));
            //     console.log(Math.abs((wp6.z-br1.z-9)));
                // console.log(Math.abs(((wp6.x)-br1.x-2.05)));

                if( (Math.abs((wp1.x)-br1.x-2.05)<0.051 &&  Math.abs((wp1.z-br1.z-9)<0.051) && Math.abs((wp1.x)-br1.x-2.05)>(-0.051) ) || (Math.abs((wp2.x)-br1.x-2.05)<0.051 &&  Math.abs((wp2.z-br1.z-9)<0.051) && Math.abs((wp2.x)-br1.x-2.05)>(-0.051)) || (Math.abs((wp3.x)-br1.x-2.05)<0.051 &&  Math.abs((wp3.z-br1.z-9)<0.051) && Math.abs((wp3.x)-br1.x-2.05)>(-0.051)) || (Math.abs((wp4.x)-br1.x-2.05)<0.051 &&  Math.abs((wp4.z-br1.z-9)<0.051) && Math.abs((wp4.x)-br1.x-2.05)>(-0.051)) || (Math.abs((wp5.x)-br1.x-2.05)<0.051 &&  Math.abs((wp5.z-br1.z-9)<0.051) && Math.abs((wp5.x)-br1.x-2.05)>(-0.051)) || (Math.abs((wp6.x)-br1.x-2.05)<0.051 &&  Math.abs((wp6.z-br1.z-9)<0.051) && Math.abs((wp6.x)-br1.x-2.05)>(-0.051)) || (Math.abs((wp7.x)-br1.x-2.05)<0.051 &&  Math.abs((wp7.z-br1.z-9)<0.051) && Math.abs((wp7.x)-br1.x-2.05)>(-0.051)) ||(Math.abs((wp8.x)-br1.x-2.05)<0.051 &&  Math.abs((wp8.z-br1.z-9)<0.051) && Math.abs((wp8.x)-br1.x-2.05)>(-0.051))){
                    //rook1 right
                    //not working
                  console.log("hii");
                  console.log(pz-1.35+1.75);
                       select3.position.set(px+0.45,0.2,pz-1.35+1.75)
                       layer.add(select3)
        
                }
                if((Math.abs((wp1.x)-br1.x-4.1)<0.051 && Math.abs((wp1.x)-br1.x-4.1)>(-0051)&& Math.abs((wp1.z-br1.z+7))<-0.051)|| (Math.abs((wp2.x)-br1.x-4.1)<0.051 &&  Math.abs((wp2.z-br1.z+7))<0.051)&& Math.abs((wp2.x)-br1.x-4.1)>(-0.051) || (Math.abs((wp3.x)-br1.x-4.1)<0.051 && Math.abs((wp3.z-br1.z+7))<0.051)&& Math.abs((wp3.x)-br1.x-4.1)>(-0.051) || (Math.abs((wp4.x)-br1.x-4.1)<0.051 && Math.abs((wp4.z-br1.z+7))<0.051)&& Math.abs((wp4.x)-br1.x-4.1)>(-0.051) || (Math.abs((wp5.x)-br1.x-4.1)<0.051 && Math.abs((wp5.z-br1.z+7))<0.051)&& Math.abs((wp5.x)-br1.x-4.1)>(-0.051) || (Math.abs((wp6.x)-br1.x-4.1)<0.051 && Math.abs((wp6.z-br1.z+7))<0.051&& Math.abs(((wp6.x)-br1.x-4.1)>(-0.051)))|| (Math.abs((wp7.x)-br1.x-4.1)<0.051 && Math.abs((wp7.z-br1.z+7))<0.051&& Math.abs(((wp7.x)-br1.x-4.1)>(-0.051))) || (Math.abs((wp8.x)-br1.x-4.1)<0.051 && Math.abs((wp8.z-br1.z+7))<0.051&& Math.abs(((wp8.x)-br1.x-4.1)>(-0.051)))){
                    //rook1 left
                   console.log("hii");
                    select2.position.set(px-0.75-0.8,0.2,pz-1.35+1.75)
                       layer.add(select2)
                    }
     
     
                 
                 
                 
                 if((Math.abs(((bp1.x)-wb2.x-3.05)<0.051 && Math.abs(((bp1.x)-wb2.x-3.05)>(-0.051)&& Math.abs((bp1.z-wb2.z+7))<0.051)))|| (Math.abs(((bp2.x)-wb2.x-3.05)<0.051 &&  Math.abs((bp2.z-wb2.z+7))<0.051)) && Math.abs(((bp2.x)-wb2.x-3.05)>(-0.051)) || (Math.abs(((bp3.x)-wb2.x-3.05)<0.051 && Math.abs((bp3.z-wb2.z+7))<0.051) && Math.abs(((bp3.x)-wb2.x-3.05)>(-0.051))) || (Math.abs(((bp4.x)-wb2.x-3.05)<0.051 && Math.abs((bp4.z-wb2.z+7))<0.051) && Math.abs(((bp4.x)-wb2.x-3.05)>(-0.051))) || (Math.abs(((bp5.x)-wb2.x-3.05)<0.051 && Math.abs((bp5.z-wb2.z+7))<0.051) && Math.abs(((bp5.x)-wb2.x-3.05)>(-0.051)))|| (Math.abs(((bp6.x)-wb2.x-3.05)<0.051 && Math.abs((bp6.z-wb2.z+7))<0.051)&& Math.abs(((bp6.x)-wb2.x-3.05)>(-0.051)))|| (Math.abs(((bp7.x)-wb2.x-3.05)<0.051 && Math.abs((bp7.z-wb2.z+7))<0.051)&& Math.abs(((bp7.x)-wb2.x-3.05)>(-0.051))) || (Math.abs(((bp8.x)-wb2.x-3.05)<0.051 && Math.abs((bp8.z-wb2.z+7))<0.051)&& Math.abs(((bp8.x)-wb2.x-3.05)>(-0.051)))){
                     //bishop2 left
                     
                     select2.position.set(px-0.75-0.8,0.2,pz-1.35+1.75)
                     layer.add(select2)
                 }
                 
                 
             if( (Math.abs(((bp1.x)-wb2.x-1)<0.051 &&  Math.abs((bp1.z-wb2.z+7))<0.051)) || (Math.abs(((bp2.x)-wb2.x-1)<0.051 &&  Math.abs((bp2.z-wb2.z+7))<0.051)) || (Math.abs(((bp3.x)-wb2.x-1)<0.051 &&  Math.abs((bp3.z-wb2.z+7))<0.051)) || (Math.abs(((bp4.x)-wb2.x-1)<0.051 &&  Math.abs((bp4.z-wb2.z+7))<0.051)) || (Math.abs(((bp5.x)-wb2.x-1)<0.051 &&  Math.abs((bp5.z-wb2.z+7))<0.051)) || (Math.abs(((bp6.x)-wb2.x-1)<0.051 &&  Math.abs((bp6.z-wb2.z+7))<0.051)) || (Math.abs(((bp7.x)-wb2.x-1)<0.051 &&  Math.abs((bp7.z-wb2.z+7))<0.051)) ||(Math.abs(((bp8.x)-wb2.x-1)<0.051 &&  Math.abs((bp8.z-wb2.z+7))<0.051))){
                 //bishop2 right
                        
                    select3.position.set(px+0.45,0.2,pz-1.35+1.75)
                    layer.add(select3)
     
             }
             if( (Math.abs(((bp1.x)-wb1.x-1.05)<0.051 &&  Math.abs((bp1.z-wb1.z+7))<0.051)) || (Math.abs(((bp2.x)-wb1.x-1.05)<0.051 &&  Math.abs((bp2.z-wb1.z+7))<0.051)) || (Math.abs(((bp3.x)-wb1.x-1.05)<0.051 &&  Math.abs((bp3.z-wb1.z+7))<0.051)) || (Math.abs(((bp4.x)-wb1.x-1.05)<0.051 &&  Math.abs((bp4.z-wb1.z+7))<0.051)) || (Math.abs(((bp5.x)-wb1.x-1.05)<0.051 &&  Math.abs((bp5.z-wb1.z+7))<0.051)) || (Math.abs(((bp6.x)-wb1.x-1.05)<0.051 &&  Math.abs((bp6.z-wb1.z+7))<0.051)) || (Math.abs(((bp7.x)-wb1.x-1.05)<0.051 &&  Math.abs((bp7.z-wb1.z+7))<0.051)) ||(Math.abs(((bp8.x)-wb1.x-1.05)<0.051 &&  Math.abs((bp8.z-wb1.z+7))<0.051))){
                 //bishop1 right
                 select3.position.set(px+0.45,0.2,pz-1.35+1.75)
                 layer.add(select3)
                 
             }
             
             if((Math.abs(((bp1.x)-wb1.x-3.05)<0.051 && Math.abs(((bp1.x)-wb1.x-3.05)>(-0.051)&& Math.abs((bp1.z-wb1.z+7))<0.051)))|| (Math.abs(((bp2.x)-wb1.x-3.05)<0.051 &&  Math.abs((bp2.z-wb1.z+7))<0.051)) && Math.abs(((bp2.x)-wb1.x-3.05)>(-0.051)) || (Math.abs(((bp3.x)-wb1.x-3.05)<0.051 && Math.abs((bp3.z-wb1.z+7))<0.051) && Math.abs(((bp3.x)-wb1.x-3.05)>(-0.051))) || (Math.abs(((bp4.x)-wb1.x-3.05)<0.051 && Math.abs((bp4.z-wb1.z+7))<0.051) && Math.abs(((bp4.x)-wb1.x-3.05)>(-0.051))) || (Math.abs(((bp5.x)-wb1.x-3.05)<0.051 && Math.abs((bp5.z-wb1.z+7))<0.051) && Math.abs(((bp5.x)-wb1.x-3.05)>(-0.051)))|| (Math.abs(((bp6.x)-wb1.x-3.05)<0.051 && Math.abs((bp6.z-wb1.z+7))<0.051)&& Math.abs(((bp6.x)-wb1.x-3.05)>(-0.051)))|| (Math.abs(((bp7.x)-wb1.x-3.05)<0.051 && Math.abs((bp7.z-wb1.z+7))<0.051)&& Math.abs(((bp7.x)-wb1.x-3.05)>(-0.051))) || (Math.abs(((bp8.x)-wb1.x-3.05)<0.051 && Math.abs((bp8.z-wb1.z+7))<0.051)&& Math.abs(((bp8.x)-wb1.x-3.05)>(-0.051)))){
                 //bishop1 left
                 select2.position.set(px-0.75-0.8,0.2,pz-1.35+1.75)
                    layer.add(select2)
                 }
     
     
                 
            if((Math.abs(((bp1.x)-wk2.x-4.05)<0.051 && Math.abs(((bp1.x)-wk2.x-4.05)>(-0.051)&& Math.abs((bp1.z-wk2.z+7))<0.051)))|| (Math.abs(((bp2.x)-wk2.x-4.05)<0.051 &&  Math.abs((bp2.z-wk2.z+7))<0.051)) && Math.abs(((bp2.x)-wk2.x-4.05)>(-0.051)) || (Math.abs(((bp3.x)-wk2.x-4.05)<0.051 && Math.abs((bp3.z-wk2.z+7))<0.051) && Math.abs(((bp3.x)-wk2.x-4.05)>(-0.051))) || (Math.abs(((bp4.x)-wk2.x-4.05)<0.051 && Math.abs((bp4.z-wk2.z+7))<0.051) && Math.abs(((bp4.x)-wk2.x-4.05)>(-0.051))) || (Math.abs(((bp5.x)-wk2.x-4.05)<0.051 && Math.abs((bp5.z-wk2.z+7))<0.051) && Math.abs(((bp5.x)-wk2.x-4.05)>(-0.051)))|| (Math.abs(((bp6.x)-wk2.x-4.05)<0.051 && Math.abs((bp6.z-wk2.z+7))<0.051)&& Math.abs(((bp6.x)-wk2.x-4.05)>(-0.051)))|| (Math.abs(((bp7.x)-wk2.x-4.05)<0.051 && Math.abs((bp7.z-wk2.z+7))<0.051)&& Math.abs(((bp7.x)-wk2.x-4.05)>(-0.051))) || (Math.abs(((bp8.x)-wk2.x-4.05)<0.051 && Math.abs((bp8.z-wk2.z+7))<0.051)&& Math.abs(((bp8.x)-wk2.x-4.05)>(-0.051)))){
                     //knight2 left
                     
                     select2.position.set(px-0.75-0.8,0.2,pz-1.35+1.75)
                     layer.add(select2)
                 }
     
                 
                 
            if( (Math.abs(((bp1.x)-wk2.x-2.05)<0.051 &&  Math.abs((bp1.z-wk2.z+7))<0.051)) || (Math.abs(((bp2.x)-wk2.x-2.05)<0.051 &&  Math.abs((bp2.z-wk2.z+7))<0.051)) || (Math.abs(((bp3.x)-wk2.x-2.05)<0.051 &&  Math.abs((bp3.z-wk2.z+7))<0.051)) || (Math.abs(((bp4.x)-wk2.x-2.05)<0.051 &&  Math.abs((bp4.z-wk2.z+7))<0.051)) || (Math.abs(((bp5.x)-wk2.x-2.05)<0.051 &&  Math.abs((bp5.z-wk2.z+7))<0.051)) || (Math.abs(((bp6.x)-wk2.x-2.05)<0.051 &&  Math.abs((bp6.z-wk2.z+7))<0.051)) || (Math.abs(((bp7.x)-wk2.x-2.05)<0.051 &&  Math.abs((bp7.z-wk2.z+7))<0.051)) ||(Math.abs(((bp8.x)-wk2.x-2.05)<0.051 &&  Math.abs((bp8.z-wk2.z+7))<0.051))){
                     //knight2 right
                     
                     select3.position.set(px+0.45,0.2,pz-1.35+1.75)
                     layer.add(select3)
                     
                 }
       
            if( (Math.abs(((bp1.x)-wk1.x-2.05)<0.051 &&  Math.abs((bp1.z-wk1.z+7))<0.051)) || (Math.abs(((bp2.x)-wk1.x-2.05)<0.051 &&  Math.abs((bp2.z-wk1.z+7))<0.051)) || (Math.abs(((bp3.x)-wk1.x-2.05)<0.051 &&  Math.abs((bp3.z-wk1.z+7))<0.051)) || (Math.abs(((bp4.x)-wk1.x-2.05)<0.051 &&  Math.abs((bp4.z-wk1.z+7))<0.051)) || (Math.abs(((bp5.x)-wk1.x-2.05)<0.051 &&  Math.abs((bp5.z-wk1.z+7))<0.051)) || (Math.abs(((bp6.x)-wk1.x-2.05)<0.051 &&  Math.abs((bp6.z-wk1.z+7))<0.051)) || (Math.abs(((bp7.x)-wk1.x-2.05)<0.051 &&  Math.abs((bp7.z-wk1.z+7))<0.051)) ||(Math.abs(((bp8.x)-wk1.x-2.05)<0.051 &&  Math.abs((bp8.z-wk1.z+7))<0.051))){
                 //knight1 right
                 select3.position.set(px+0.45,0.2,pz-1.35+1.75)
                 layer.add(select3)
                 
             }
             
            if((Math.abs(((bp1.x)-wk1.x-4.05)<0.051 && Math.abs(((bp1.x)-wk1.x-4.05)>(-0.051)&& Math.abs((bp1.z-wk1.z+7))<0.051)))|| (Math.abs(((bp2.x)-wk1.x-4.05)<0.051 &&  Math.abs((bp2.z-wk1.z+7))<0.051)) && Math.abs(((bp2.x)-wk1.x-4.05)>(-0.051)) || (Math.abs(((bp3.x)-wk1.x-4.05)<0.051 && Math.abs((bp3.z-wk1.z+7))<0.051) && Math.abs(((bp3.x)-wk1.x-4.05)>(-0.051))) || (Math.abs(((bp4.x)-wk1.x-4.05)<0.051 && Math.abs((bp4.z-wk1.z+7))<0.051) && Math.abs(((bp4.x)-wk1.x-4.05)>(-0.051))) || (Math.abs(((bp5.x)-wk1.x-4.05)<0.051 && Math.abs((bp5.z-wk1.z+7))<0.051) && Math.abs(((bp5.x)-wk1.x-4.05)>(-0.051)))|| (Math.abs(((bp6.x)-wk1.x-4.05)<0.051 && Math.abs((bp6.z-wk1.z+7))<0.051)&& Math.abs(((bp6.x)-wk1.x-4.05)>(-0.051)))|| (Math.abs(((bp7.x)-wk1.x-4.05)<0.051 && Math.abs((bp7.z-wk1.z+7))<0.051)&& Math.abs(((bp7.x)-wk1.x-4.05)>(-0.051))) || (Math.abs(((bp8.x)-wk1.x-4.05)<0.051 && Math.abs((bp8.z-wk1.z+7))<0.051)&& Math.abs(((bp8.x)-wk1.x-4.05)>(-0.051)))){
                 //knight1 left
                 select2.position.set(px-0.75-0.8,0.2,pz-1.35+1.75)
                    layer.add(select2)
                 }
       
        domEvents.addEventListener(select, 'click', () => {
            obj.position.set(px, -0.8, pz - 1)
            if (t == 'a') {
                wp1 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
                
            }

            if (t == 'b') {

                wp2 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
            }
            if (t == 'c') {

                wp3 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
            }
            if (t == 'd') {

                wp4 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
            }
            if (t == 'e') {

                wp5 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
            }
            if (t == 'f') {

                wp6 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
            }
            if (t == 'g') {

                wp7 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
            }
            if (t == 'h') {

                wp8 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
            }



            rmvLyr()
            domEvents.removeEventListener(select, 'click')
            turn = 'b'

            clicked = false;
        })
    }
    board.add(layer)

}

function Wrook_onClick(px, pz, obj, t) {
    plane_geo = new THREE.PlaneGeometry(0.8, 0.8);
    plane_mat = new THREE.MeshBasicMaterial({ color: 0xd87d7d })

    // for back
    for (let i = 0; i < 8; i++) {
        if ((pz - 5.75 + i) < 4) {
            let select = new THREE.Mesh(plane_geo, plane_mat);
            select.name = 'select'
            select.position.set(px - 3.5 + 7, 0.2, pz - 5.75 + i)
            select.rotation.x = -90 * (Math.PI / 180)
            layer.add(select)
            domEvents.addEventListener(select, 'click', () => {
                let layer_posX = select.getWorldPosition(worldPosition).x;
                let layer_posZ = select.getWorldPosition(worldPosition).z;

                obj.position.set(px, -0.93, layer_posZ + 6.75)
                if (t == 'a') {
                    wr1 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
                }
                else { wr2 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }; }


                if (((Math.abs(wr2.x - bp1.x + 4.05) < 0.05) && (Math.abs(wr2.z - bp1.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn1.bprmv()

                }
                if (((Math.abs(wr1.x - wp1.x + 4.05) < 0.05) && (Math.abs(wr1.z - wp1.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn1.bprmv()

                }
                if (((Math.abs(wr1.x - bp2.x + 4.05) < 0.05) && (Math.abs(wr1.z - bp2.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn2.bprmv()
                }
                if (((Math.abs(wr2.x - bp2.x + 4.05) < 0.05) && (Math.abs(wr2.z - bp2.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn2.bprmv()
                }

                if (((Math.abs(wr1.x - bp3.x + 4.05) < 0.05) && (Math.abs(wr1.z - bp3.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn3.bprmv()
                }
                if (((Math.abs(wr2.x - bp3.x + 4.05) < 0.05) && (Math.abs(wr2.z - bp3.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn3.bprmv()
                }

                if (((Math.abs(wr1.x - bp4.x + 4.05) < 0.05) && (Math.abs(wr1.z - bp4.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn4.bprmv()

                }
                if (((Math.abs(wr2.x - bp4.x + 4.05) < 0.05) && (Math.abs(wr2.z - bp4.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn4.bprmv()

                }
                if (((Math.abs(wr1.x - bp5.x + 4.05) < 0.05) && (Math.abs(wr1.z - bp5.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn5.bprmv()

                }
                if (((Math.abs(wr2.x - bp5.x + 4.05) < 0.05) && (Math.abs(wr2.z - bp5.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn5.bprmv()

                }
                if (((Math.abs(wr1.x - bp6.x + 4.05) < 0.05) && (Math.abs(wr1.z - bp6.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn6.bprmv()

                }
                if (((Math.abs(wr2.x - bp6.x + 4.05) < 0.05) && (Math.abs(wr2.z - bp6.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn6.bprmv()

                }

                if (((Math.abs(wr1.x - bp7.x + 4.05) < 0.05) && (Math.abs(wr1.z - bp7.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn7.bprmv()

                }
                if (((Math.abs(wr2.x - bp7.x + 4.05) < 0.05) && (Math.abs(wr2.z - bp7.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn7.bprmv()

                }
                if ((Math.abs(wr1.x - bp8.x + 4.05) < 0.05) && (Math.abs(wr1.z - bp8.z - 6) < 0.05)) {
                    console.log("collision");
                    bpawn8.bprmv()

                }
                if ((Math.abs(wr2.x - bp8.x + 4.05) < 0.05) && (Math.abs(wr2.z - bp8.z - 6) < 0.05)) {
                    console.log("collision");
                    bpawn8.bprmv()

                }

                if (((Math.abs(wr1.x - br1.x) < 0.05) && (Math.abs(wr1.z - br1.z - 7) < 0.05))) {
                    console.log("collision");
                    brook1.brrmv()
                }
                if (((Math.abs(wr1.x - br2.x) < 0.05) && (Math.abs(wr1.z - br2.z - 7) < 0.05))) {
                    console.log("collision");
                    brook2.brrmv()
                }

                if (((Math.abs(wr2.x - br1.x) < 0.05) && (Math.abs(wr2.z - br1.z - 7) < 0.05))) {
                    console.log("collision");
                    brook1.brrmv()
                }
                if (((Math.abs(wr2.x - br2.x) < 0.05) && (Math.abs(wr2.z - br2.z - 7) < 0.05))) {
                    console.log("collision");
                    brook2.brrmv()
                }



                if (((Math.abs(wr1.x - bb1.x + 1.95) <= 0.05) && (Math.abs(wr1.z - bb1.z - 7) < 0.05))) {
                    console.log("collision");
                    bbishop1.bbrmv();
                }
                if ((Math.abs(wr1.x - bb2.x + 1.95) <= 0.05) && (Math.abs(wr1.z - bb2.z - 7) < 0.05)) {
                    console.log("collision");
                    bbishop2.bbrmv();
                }
                if (((Math.abs(wr2.x - bb1.x + 1.95) <= 0.05) && (Math.abs(wr2.z - bb1.z - 7) < 0.05))) {
                    console.log("collision");
                    bbishop1.bbrmv();
                }
                if ((Math.abs(wr2.x - bb2.x + 1.95) <= 0.05) && (Math.abs(wr2.z - bb2.z - 7) < 0.05)) {
                    console.log("collision");
                    bbishop2.bbrmv();
                }

                if (((Math.abs(wr1.x - bk2.x + 1) < 0.05) && (Math.abs(wr1.z - bk2.z - 7) < 0.05))) {
                    console.log("collision");
                    bknight2.bkrmv()

                }

                if (((Math.abs(wr1.x - bk1.x + 1) < 0.05) && (Math.abs(wr1.z - bk1.z - 7) < 0.05))) {
                    console.log("collision");
                    bknight1.bkrmv()

                }

                if (((Math.abs(wr2.x - bk2.x + 1) < 0.05) && (Math.abs(wr2.z - bk2.z - 7) < 0.05))) {
                    console.log("collision");
                    bknight2.bkrmv()

                }

                if (((Math.abs(wr2.x - bk1.x + 1) < 0.05) && (Math.abs(wr2.z - bk1.z - 7) < 0.05))) {
                    console.log("collision");
                    bknight1.bkrmv()

                }
                if (((Math.abs(wr1.x - bq.x + 4.05) < 0.05) && (Math.abs(wr1.z - bq.z - 7) < 0.05))) {
                    console.log("collision");
                    bqueen.bqrmv()
                }
                if (((Math.abs(wr2.x - bq.x + 4.05) < 0.05) && (Math.abs(wr2.z - bq.z - 7) < 0.05))) {
                    console.log("collision");
                    bqueen.bqrmv()
                }


                if (((Math.abs(wr1.x - bki.x + 3) < 0.05) && (Math.abs(wr1.z - bki.z - 7) < 0.05))) {
                    console.log("collision");
                    bking.bkirmv()
                        endw=0;

                }
                if (((Math.abs(wr2.x - bki.x + 3) < 0.05) && (Math.abs(wr2.z - bki.z - 7) < 0.05))) {
                    console.log("collision");
                    bking.bkirmv()
                        endw=0;

                }

                rmvLyr()
                turn = 'b'
                clicked = false;
            })

        } else break
    }
    // for right
    for (let i = 0; i < 8; i++) {
        if ((px - 2.45 + 7 + i) < 4) {

            let select = new THREE.Mesh(plane_geo, plane_mat);
            select.name = 'select'
            select.position.set(px - 2.5 + 7 + i, 0.2, pz - 6.75)
            layer.add(select)
            select.rotation.x = -90 * (Math.PI / 180)
            domEvents.addEventListener(select, 'click', () => {


                let layer_posX = select.getWorldPosition(worldPosition).x;
                let layer_posZ = select.getWorldPosition(worldPosition).z;

                obj.position.set(layer_posX - 3.5, -0.93, pz)
                if (t == 'a') {
                    wr1 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
                }
                else { wr2 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }; }

                if (((Math.abs(wr2.x - bp1.x + 4.05) < 0.05) && (Math.abs(wr2.z - bp1.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn1.bprmv()

                }
                if (((Math.abs(wr1.x - wp1.x + 4.05) < 0.05) && (Math.abs(wr1.z - wp1.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn1.bprmv()

                }
                if (((Math.abs(wr1.x - bp2.x + 4.05) < 0.05) && (Math.abs(wr1.z - bp2.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn2.bprmv()
                }
                if (((Math.abs(wr2.x - bp2.x + 4.05) < 0.05) && (Math.abs(wr2.z - bp2.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn2.bprmv()
                }

                if (((Math.abs(wr1.x - bp3.x + 4.05) < 0.05) && (Math.abs(wr1.z - bp3.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn3.bprmv()
                }
                if (((Math.abs(wr2.x - bp3.x + 4.05) < 0.05) && (Math.abs(wr2.z - bp3.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn3.bprmv()
                }

                if (((Math.abs(wr1.x - bp4.x + 4.05) < 0.05) && (Math.abs(wr1.z - bp4.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn4.bprmv()

                }
                if (((Math.abs(wr2.x - bp4.x + 4.05) < 0.05) && (Math.abs(wr2.z - bp4.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn4.bprmv()

                }
                if (((Math.abs(wr1.x - bp5.x + 4.05) < 0.05) && (Math.abs(wr1.z - bp5.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn5.bprmv()

                }
                if (((Math.abs(wr2.x - bp5.x + 4.05) < 0.05) && (Math.abs(wr2.z - bp5.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn5.bprmv()

                }
                if (((Math.abs(wr1.x - bp6.x + 4.05) < 0.05) && (Math.abs(wr1.z - bp6.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn6.bprmv()

                }
                if (((Math.abs(wr2.x - bp6.x + 4.05) < 0.05) && (Math.abs(wr2.z - bp6.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn6.bprmv()

                }

                if (((Math.abs(wr1.x - bp7.x + 4.05) < 0.05) && (Math.abs(wr1.z - bp7.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn7.bprmv()

                }
                if (((Math.abs(wr2.x - bp7.x + 4.05) < 0.05) && (Math.abs(wr2.z - bp7.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn7.bprmv()

                }
                if ((Math.abs(wr1.x - bp8.x + 4.05) < 0.05) && (Math.abs(wr1.z - bp8.z - 6) < 0.05)) {
                    console.log("collision");
                    bpawn8.bprmv()

                }
                if ((Math.abs(wr2.x - bp8.x + 4.05) < 0.05) && (Math.abs(wr2.z - bp8.z - 6) < 0.05)) {
                    console.log("collision");
                    bpawn8.bprmv()

                }

                if (((Math.abs(wr1.x - br1.x) < 0.05) && (Math.abs(wr1.z - br1.z - 7) < 0.05))) {
                    console.log("collision");
                    brook1.brrmv()
                }
                if (((Math.abs(wr1.x - br2.x) < 0.05) && (Math.abs(wr1.z - br2.z - 7) < 0.05))) {
                    console.log("collision");
                    brook2.brrmv()
                }

                if (((Math.abs(wr2.x - br1.x) < 0.05) && (Math.abs(wr2.z - br1.z - 7) < 0.05))) {
                    console.log("collision");
                    brook1.brrmv()
                }
                if (((Math.abs(wr2.x - br2.x) < 0.05) && (Math.abs(wr2.z - br2.z - 7) < 0.05))) {
                    console.log("collision");
                    brook2.brrmv()
                }


                if (((Math.abs(wr1.x - bb1.x + 1.95) <= 0.05) && (Math.abs(wr1.z - bb1.z - 7) < 0.05))) {
                    console.log("collision");
                    bbishop1.bbrmv();
                }
                if ((Math.abs(wr1.x - bb2.x + 1.95) <= 0.05) && (Math.abs(wr1.z - bb2.z - 7) < 0.05)) {
                    console.log("collision");
                    bbishop2.bbrmv();
                }
                if (((Math.abs(wr2.x - bb1.x + 1.95) <= 0.05) && (Math.abs(wr2.z - bb1.z - 7) < 0.05))) {
                    console.log("collision");
                    bbishop1.bbrmv();
                }
                if ((Math.abs(wr2.x - bb2.x + 1.95) <= 0.05) && (Math.abs(wr2.z - bb2.z - 7) < 0.05)) {
                    console.log("collision");
                    bbishop2.bbrmv();
                }

                if (((Math.abs(wr1.x - bk2.x + 1) < 0.05) && (Math.abs(wr1.z - bk2.z - 7) < 0.05))) {
                    console.log("collision");
                    bknight2.bkrmv()

                }

                if (((Math.abs(wr1.x - bk1.x + 1) < 0.05) && (Math.abs(wr1.z - bk1.z - 7) < 0.05))) {
                    console.log("collision");
                    bknight1.bkrmv()

                }

                if (((Math.abs(wr2.x - bk2.x + 1) < 0.05) && (Math.abs(wr2.z - bk2.z - 7) < 0.05))) {
                    console.log("collision");
                    bknight2.bkrmv()

                }

                if (((Math.abs(wr2.x - bk1.x + 1) < 0.05) && (Math.abs(wr2.z - bk1.z - 7) < 0.05))) {
                    console.log("collision");
                    bknight1.bkrmv()

                }

                if (((Math.abs(wr1.x - bq.x + 4.05) < 0.05) && (Math.abs(wr1.z - bq.z - 7) < 0.05))) {
                    console.log("collision");
                    bqueen.bqrmv()
                }
                if (((Math.abs(wr2.x - bq.x + 4.05) < 0.05) && (Math.abs(wr2.z - bq.z - 7) < 0.05))) {
                    console.log("collision");
                    bqueen.bqrmv()
                }


                if (((Math.abs(wr1.x - bki.x + 3) < 0.05) && (Math.abs(wr1.z - bki.z - 7) < 0.05))) {
                    console.log("collision");
                    bking.bkirmv()
                        endw=0;

                }
                if (((Math.abs(wr2.x - bki.x + 3) < 0.05) && (Math.abs(wr2.z - bki.z - 7) < 0.05))) {
                    console.log("collision");
                    bking.bkirmv()
                        endw=0;

                }
                rmvLyr()
                turn = 'b'

                clicked = false;


            })
        } else break;
    }
    // //for left
    for (let i = 0; i < 8; i++) {
        if ((px - 4.95 + 7.45 - i) > -4) {
            let select = new THREE.Mesh(plane_geo, plane_mat);
            select.name = 'select'
            select.position.set(px - 4.95 + 7.45 - i, 0.2, pz - 6.75)
            domEvents.addEventListener(select, 'click', () => {


                let layer_posX = select.getWorldPosition(worldPosition).x;
                let layer_posZ = select.getWorldPosition(worldPosition).z;

                obj.position.set(layer_posX - 3.5, -0.93, pz)
                if (t == 'a') {
                    wr1 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
                }
                else { wr2 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }; }

                if (((Math.abs(wr2.x - bp1.x + 4.05) < 0.05) && (Math.abs(wr2.z - bp1.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn1.bprmv()

                }
                if (((Math.abs(wr1.x - wp1.x + 4.05) < 0.05) && (Math.abs(wr1.z - wp1.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn1.bprmv()

                }
                if (((Math.abs(wr1.x - bp2.x + 4.05) < 0.05) && (Math.abs(wr1.z - bp2.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn2.bprmv()
                }
                if (((Math.abs(wr2.x - bp2.x + 4.05) < 0.05) && (Math.abs(wr2.z - bp2.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn2.bprmv()
                }

                if (((Math.abs(wr1.x - bp3.x + 4.05) < 0.05) && (Math.abs(wr1.z - bp3.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn3.bprmv()
                }
                if (((Math.abs(wr2.x - bp3.x + 4.05) < 0.05) && (Math.abs(wr2.z - bp3.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn3.bprmv()
                }

                if (((Math.abs(wr1.x - bp4.x + 4.05) < 0.05) && (Math.abs(wr1.z - bp4.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn4.bprmv()

                }
                if (((Math.abs(wr2.x - bp4.x + 4.05) < 0.05) && (Math.abs(wr2.z - bp4.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn4.bprmv()

                }
                if (((Math.abs(wr1.x - bp5.x + 4.05) < 0.05) && (Math.abs(wr1.z - bp5.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn5.bprmv()

                }
                if (((Math.abs(wr2.x - bp5.x + 4.05) < 0.05) && (Math.abs(wr2.z - bp5.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn5.bprmv()

                }
                if (((Math.abs(wr1.x - bp6.x + 4.05) < 0.05) && (Math.abs(wr1.z - bp6.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn6.bprmv()

                }
                if (((Math.abs(wr2.x - bp6.x + 4.05) < 0.05) && (Math.abs(wr2.z - bp6.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn6.bprmv()

                }

                if (((Math.abs(wr1.x - bp7.x + 4.05) < 0.05) && (Math.abs(wr1.z - bp7.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn7.bprmv()

                }
                if (((Math.abs(wr2.x - bp7.x + 4.05) < 0.05) && (Math.abs(wr2.z - bp7.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn7.bprmv()

                }
                if ((Math.abs(wr1.x - bp8.x + 4.05) < 0.05) && (Math.abs(wr1.z - bp8.z - 6) < 0.05)) {
                    console.log("collision");
                    bpawn8.bprmv()

                }
                if ((Math.abs(wr2.x - bp8.x + 4.05) < 0.05) && (Math.abs(wr2.z - bp8.z - 6) < 0.05)) {
                    console.log("collision");
                    bpawn8.bprmv()

                }

                if (((Math.abs(wr1.x - br1.x) < 0.05) && (Math.abs(wr1.z - br1.z - 7) < 0.05))) {
                    console.log("collision");
                    brook1.brrmv()
                }
                if (((Math.abs(wr1.x - br2.x) < 0.05) && (Math.abs(wr1.z - br2.z - 7) < 0.05))) {
                    console.log("collision");
                    brook2.brrmv()
                }

                if (((Math.abs(wr2.x - br1.x) < 0.05) && (Math.abs(wr2.z - br1.z - 7) < 0.05))) {
                    console.log("collision");
                    brook1.brrmv()
                }
                if (((Math.abs(wr2.x - br2.x) < 0.05) && (Math.abs(wr2.z - br2.z - 7) < 0.05))) {
                    console.log("collision");
                    brook2.brrmv()
                }



                if (((Math.abs(wr1.x - bb1.x + 1.95) <= 0.05) && (Math.abs(wr1.z - bb1.z - 7) < 0.05))) {
                    console.log("collision");
                    bbishop1.bbrmv();
                }
                if ((Math.abs(wr1.x - bb2.x + 1.95) <= 0.05) && (Math.abs(wr1.z - bb2.z - 7) < 0.05)) {
                    console.log("collision");
                    bbishop2.bbrmv();
                }
                if (((Math.abs(wr2.x - bb1.x + 1.95) <= 0.05) && (Math.abs(wr2.z - bb1.z - 7) < 0.05))) {
                    console.log("collision");
                    bbishop1.bbrmv();
                }
                if ((Math.abs(wr2.x - bb2.x + 1.95) <= 0.05) && (Math.abs(wr2.z - bb2.z - 7) < 0.05)) {
                    console.log("collision");
                    bbishop2.bbrmv();
                }

                if (((Math.abs(wr1.x - bk2.x + 1) < 0.05) && (Math.abs(wr1.z - bk2.z - 7) < 0.05))) {
                    console.log("collision");
                    bknight2.bkrmv()

                }

                if (((Math.abs(wr1.x - bk1.x + 1) < 0.05) && (Math.abs(wr1.z - bk1.z - 7) < 0.05))) {
                    console.log("collision");
                    bknight1.bkrmv()

                }

                if (((Math.abs(wr2.x - bk2.x + 1) < 0.05) && (Math.abs(wr2.z - bk2.z - 7) < 0.05))) {
                    console.log("collision");
                    bknight2.bkrmv()

                }

                if (((Math.abs(wr2.x - bk1.x + 1) < 0.05) && (Math.abs(wr2.z - bk1.z - 7) < 0.05))) {
                    console.log("collision");
                    bknight1.bkrmv()

                }

                if (((Math.abs(wr1.x - bq.x + 4.05) < 0.05) && (Math.abs(wr1.z - bq.z - 7) < 0.05))) {
                    console.log("collision");
                    bqueen.bqrmv()
                }
                if (((Math.abs(wr2.x - bq.x + 4.05) < 0.05) && (Math.abs(wr2.z - bq.z - 7) < 0.05))) {
                    console.log("collision");
                    bqueen.bqrmv()
                }


                if (((Math.abs(wr1.x - bki.x + 3) < 0.05) && (Math.abs(wr1.z - bki.z - 7) < 0.05))) {
                    console.log("collision");
                    bking.bkirmv()
                        endw=0;

                }
                if (((Math.abs(wr2.x - bki.x + 3) < 0.05) && (Math.abs(wr2.z - bki.z - 7) < 0.05))) {
                    console.log("collision");
                    bking.bkirmv()
                        endw=0;

                }

                rmvLyr()
                turn = 'b'

                clicked = false;


            })
            layer.add(select)
            select.rotation.x = -90 * (Math.PI / 180)

        } else break;
    }
    // //for front
    for (let i = 0; i < 8; i++) {
        if ((pz - 7.75 - i) > -4) {
            let select = new THREE.Mesh(plane_geo, plane_mat);
            select.name = 'select'
            layer.add(select)
            select.position.set(px - 3.5 + 7, 0.2, pz - 7.7 - i)
            domEvents.addEventListener(select, 'click', () => {

                let layer_posX = select.getWorldPosition(worldPosition).x;
                let layer_posZ = select.getWorldPosition(worldPosition).z;

                obj.position.set(px, -0.93, layer_posZ + 6.7)
                if (t == 'a') {
                    wr1 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
                }
                else { wr2 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }; }



                if (((Math.abs(wr2.x - bp1.x + 4.05) < 0.05) && (Math.abs(wr2.z - bp1.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn1.bprmv()

                }
                if (((Math.abs(wr1.x - wp1.x + 4.05) < 0.05) && (Math.abs(wr1.z - wp1.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn1.bprmv()

                }
                if (((Math.abs(wr1.x - bp2.x + 4.05) < 0.05) && (Math.abs(wr1.z - bp2.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn2.bprmv()
                }
                if (((Math.abs(wr2.x - bp2.x + 4.05) < 0.05) && (Math.abs(wr2.z - bp2.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn2.bprmv()
                }

                if (((Math.abs(wr1.x - bp3.x + 4.05) < 0.05) && (Math.abs(wr1.z - bp3.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn3.bprmv()
                }
                if (((Math.abs(wr2.x - bp3.x + 4.05) < 0.05) && (Math.abs(wr2.z - bp3.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn3.bprmv()
                }

                if (((Math.abs(wr1.x - bp4.x + 4.05) < 0.05) && (Math.abs(wr1.z - bp4.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn4.bprmv()

                }
                if (((Math.abs(wr2.x - bp4.x + 4.05) < 0.05) && (Math.abs(wr2.z - bp4.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn4.bprmv()

                }
                if (((Math.abs(wr1.x - bp5.x + 4.05) < 0.05) && (Math.abs(wr1.z - bp5.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn5.bprmv()

                }
                if (((Math.abs(wr2.x - bp5.x + 4.05) < 0.05) && (Math.abs(wr2.z - bp5.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn5.bprmv()

                }
                if (((Math.abs(wr1.x - bp6.x + 4.05) < 0.05) && (Math.abs(wr1.z - bp6.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn6.bprmv()

                }
                if (((Math.abs(wr2.x - bp6.x + 4.05) < 0.05) && (Math.abs(wr2.z - bp6.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn6.bprmv()

                }

                if (((Math.abs(wr1.x - bp7.x + 4.05) < 0.05) && (Math.abs(wr1.z - bp7.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn7.bprmv()

                }
                if (((Math.abs(wr2.x - bp7.x + 4.05) < 0.05) && (Math.abs(wr2.z - bp7.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn7.bprmv()

                }
                if ((Math.abs(wr1.x - bp8.x + 4.05) < 0.05) && (Math.abs(wr1.z - bp8.z - 6) < 0.05)) {
                    console.log("collision");
                    bpawn8.bprmv()

                }
                if ((Math.abs(wr2.x - bp8.x + 4.05) < 0.05) && (Math.abs(wr2.z - bp8.z - 6) < 0.05)) {
                    console.log("collision");
                    bpawn8.bprmv()

                }


                if (((Math.abs(wr1.x - br1.x) < 0.05) && (Math.abs(wr1.z - br1.z - 7) < 0.05))) {
                    console.log("collision");
                    brook1.brrmv()
                }
                if (((Math.abs(wr1.x - br2.x) < 0.05) && (Math.abs(wr1.z - br2.z - 7) < 0.05))) {
                    console.log("collision");
                    brook2.brrmv()
                }

                if (((Math.abs(wr2.x - br1.x) < 0.05) && (Math.abs(wr2.z - br1.z - 7) < 0.05))) {
                    console.log("collision");
                    brook1.brrmv()
                }
                if (((Math.abs(wr2.x - br2.x) < 0.05) && (Math.abs(wr2.z - br2.z - 7) < 0.05))) {
                    console.log("collision");
                    brook2.brrmv()
                }



                if (((Math.abs(wr1.x - bb1.x + 1.95) <= 0.05) && (Math.abs(wr1.z - bb1.z - 7) < 0.05))) {
                    console.log("collision");
                    bbishop1.bbrmv();
                }
                if ((Math.abs(wr1.x - bb2.x + 1.95) <= 0.05) && (Math.abs(wr1.z - bb2.z - 7) < 0.05)) {
                    console.log("collision");
                    bbishop2.bbrmv();
                }
                if (((Math.abs(wr2.x - bb1.x + 1.95) <= 0.05) && (Math.abs(wr2.z - bb1.z - 7) < 0.05))) {
                    console.log("collision");
                    bbishop1.bbrmv();
                }
                if ((Math.abs(wr2.x - bb2.x + 1.95) <= 0.05) && (Math.abs(wr2.z - bb2.z - 7) < 0.05)) {
                    console.log("collision");
                    bbishop2.bbrmv();
                }


                if (((Math.abs(wr1.x - bk2.x + 1) < 0.05) && (Math.abs(wr1.z - bk2.z - 7) < 0.05))) {
                    console.log("collision");
                    bknight2.bkrmv()

                }

                if (((Math.abs(wr1.x - bk1.x + 1) < 0.05) && (Math.abs(wr1.z - bk1.z - 7) < 0.05))) {
                    console.log("collision");
                    bknight1.bkrmv()

                }

                if (((Math.abs(wr2.x - bk2.x + 1) < 0.05) && (Math.abs(wr2.z - bk2.z - 7) < 0.05))) {
                    console.log("collision");
                    bknight2.bkrmv()

                }

                if (((Math.abs(wr2.x - bk1.x + 1) < 0.05) && (Math.abs(wr2.z - bk1.z - 7) < 0.05))) {
                    console.log("collision");
                    bknight1.bkrmv()

                }



                if (((Math.abs(wr1.x - bq.x + 4.05) < 0.05) && (Math.abs(wr1.z - bq.z - 7) < 0.05))) {
                    console.log("collision");
                    bqueen.bqrmv()
                }
                if (((Math.abs(wr2.x - bq.x + 4.05) < 0.05) && (Math.abs(wr2.z - bq.z - 7) < 0.05))) {
                    console.log("collision");
                    bqueen.bqrmv()
                }


                if (((Math.abs(wr1.x - bki.x + 3) < 0.05) && (Math.abs(wr1.z - bki.z - 7) < 0.05))) {
                    console.log("collision");
                    bking.bkirmv()
                        endw=0;

                }
                if (((Math.abs(wr2.x - bki.x + 3) < 0.05) && (Math.abs(wr2.z - bki.z - 7) < 0.05))) {
                    console.log("collision");
                    bking.bkirmv()
                        endw=0;

                }
                rmvLyr()
                turn = 'b'

                clicked = false;
            })
            select.rotation.x = -90 * (Math.PI / 180)

        } else break
    }

    board.add(layer)
}

function Wknight_onClick(px, pz, obj, t) {
    plane_geo = new THREE.PlaneGeometry(0.8, 0.8);
    plane_mat = new THREE.MeshBasicMaterial({ color: 0xd87d7d })


    //back and left
    if ((px + 1.5) > -4 && (pz - 7 + 2.35) < 4) {
        let select1 = new THREE.Mesh(plane_geo, plane_mat);
        select1.position.set(px + 1.5, 0.2, pz - 7 + 2.35)
        select1.rotation.x = -90 * (Math.PI / 180)
        layer.add(select1)

        domEvents.addEventListener(select1, 'click', () => {
            let layer_posX = select1.getWorldPosition(worldPosition).x;
            let layer_posZ = select1.getWorldPosition(worldPosition).z;


            obj.position.set(layer_posX - 2.5, -0.7, layer_posZ + 6.65)
            if (t == 'a') {
                wk1 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
            }
            else { wk2 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z } }

            if (((Math.abs(wk2.x - bp1.x + 3.05) < 0.05) && (Math.abs(wk2.z - bp1.z - 6) < 0.05))) {
                console.log("collision");
                bpawn1.bprmv()

            }
            if (((Math.abs(wk1.x - bp1.x + 3.05) < 0.05) && (Math.abs(wk1.z - bp1.z - 6) < 0.05))) {
                console.log("collision");
                bpawn1.bprmv()

            }
            if (((Math.abs(wk1.x - bp2.x + 3.05) < 0.05) && (Math.abs(wk1.z - bp2.z - 6) < 0.05))) {
                console.log("collision");
                bpawn2.bprmv()
            }
            if (((Math.abs(wk2.x - bp2.x + 3.05) < 0.05) && (Math.abs(wk2.z - bp2.z - 6) < 0.05))) {
                console.log("collision");
                bpawn2.bprmv()
            }

            if (((Math.abs(wk1.x - bp3.x + 3.05) < 0.05) && (Math.abs(wk1.z - bp3.z - 6) < 0.05))) {
                console.log("collision");
                bpawn3.bprmv()
            }
            if (((Math.abs(wk2.x - bp3.x + 3.05) < 0.05) && (Math.abs(wk2.z - bp3.z - 6) < 0.05))) {
                console.log("collision");
                bpawn3.bprmv()
            }

            if (((Math.abs(wk1.x - bp4.x + 3.05) < 0.05) && (Math.abs(wk1.z - bp4.z - 6) < 0.05))) {
                console.log("collision");
                bpawn4.bprmv()

            }
            if (((Math.abs(wk2.x - bp4.x + 3.05) < 0.05) && (Math.abs(wk2.z - bp4.z - 6) < 0.05))) {
                console.log("collision");
                bpawn4.bprmv()

            }
            if (((Math.abs(wk1.x - bp5.x + 3.05) < 0.05) && (Math.abs(wk1.z - bp5.z - 6) < 0.05))) {
                console.log("collision");
                bpawn5.bprmv()

            }
            if (((Math.abs(wk2.x - bp5.x + 3.05) < 0.05) && (Math.abs(wk2.z - bp5.z - 6) < 0.05))) {
                console.log("collision");
                bpawn5.bprmv()

            }
            if (((Math.abs(wk1.x - bp6.x + 3.05) < 0.05) && (Math.abs(wk1.z - bp6.z - 6) < 0.05))) {
                console.log("collision");
                bpawn6.bprmv()

            }
            if (((Math.abs(wk2.x - bp6.x + 3.05) < 0.05) && (Math.abs(wk2.z - bp6.z - 6) < 0.05))) {
                console.log("collision");
                bpawn6.bprmv()

            }

            if (((Math.abs(wk1.x - bp7.x + 3.05) < 0.05) && (Math.abs(wk1.z - bp7.z - 6) < 0.05))) {
                console.log("collision");
                bpawn7.bprmv()

            }
            if (((Math.abs(wk2.x - bp7.x + 3.05) < 0.05) && (Math.abs(wk2.z - bp7.z - 6) < 0.05))) {
                console.log("collision");
                bpawn7.bprmv()

            }
            if ((Math.abs(wk1.x - bp8.x + 3.05) < 0.05) && (Math.abs(wk1.z - bp8.z - 6) < 0.05)) {
                console.log("collision");
                bpawn8.bprmv()

            }
            if ((Math.abs(wk2.x - bp8.x + 3.05) < 0.05) && (Math.abs(wk2.z - bp8.z - 6) < 0.05)) {
                console.log("collision");
                bpawn8.bprmv()

            }

            if (((Math.abs(wk1.x - br1.x - 1) < 0.05) && (Math.abs(wk1.z - br1.z - 7) < 0.05))) {
                console.log("collision");
                brook1.brrmv()
            }
            if (((Math.abs(wk1.x - br2.x - 1) < 0.05) && (Math.abs(wk1.z - br2.z - 7) < 0.05))) {
                console.log("collision");
                brook2.brrmv()
            }
            if (((Math.abs(wk2.x - br1.x - 1) < 0.05) && (Math.abs(wk2.z - br1.z - 7) < 0.05))) {
                console.log("collision");
                brook1.brrmv()
            }
            if (((Math.abs(wk2.x - br2.x - 1) < 0.05) && (Math.abs(wk2.z - br2.z - 7) < 0.05))) {
                console.log("collision");
                brook2.brrmv()
            }




            if (((Math.abs(wk1.x - bb1.x + 0.95) <= 0.05) && (Math.abs(wk1.z - bb1.z - 7) < 0.05))) {
                console.log("collision");
                bbishop1.bbrmv();
            }
            if ((Math.abs(wk1.x - bb2.x + 0.95) <= 0.05) && (Math.abs(wk1.z - bb2.z - 7) < 0.05)) {
                console.log("collision");
                bbishop2.bbrmv();
            }
            if (((Math.abs(wk2.x - bb1.x + 0.95) <= 0.05) && (Math.abs(wk2.z - bb1.z - 7) < 0.05))) {
                console.log("collision");
                bbishop1.bbrmv();
            }
            if ((Math.abs(wk2.x - bb2.x + 0.95) <= 0.05) && (Math.abs(wk2.z - bb2.z - 7) < 0.05)) {
                console.log("collision");
                bbishop2.bbrmv();
            }


            if (((Math.abs(wk1.x - bk2.x) < 0.05) && (Math.abs(wk1.z - bk2.z - 7) < 0.05))) {
                console.log("collision");
                bknight2.bkrmv()
            }

            if (((Math.abs(wk1.x - bk1.x) < 0.05) && (Math.abs(wk1.z - bk1.z - 7) < 0.05))) {
                console.log("collision");
                bknight1.bkrmv()
            }

            if (((Math.abs(wk2.x - bk2.x) < 0.05) && (Math.abs(wk2.z - bk2.z - 7) < 0.05))) {
                console.log("collision");
                bknight2.bkrmv()

            }

            if (((Math.abs(wk2.x - bk1.x) < 0.05) && (Math.abs(wk2.z - bk1.z - 7) < 0.05))) {
                console.log("collision");
                bknight2.bkrmv()

            }



            if (((Math.abs(wk1.x - bq.x + 3.05) < 0.05) && (Math.abs(wk1.z - bq.z - 7) < 0.05))) {
                console.log("collision");
                bqueen.bqrmv()
            }
            if (((Math.abs(wk2.x - bq.x + 3.05) < 0.05) && (Math.abs(wk2.z - bq.z - 7) < 0.05))) {
                console.log("collision");
                bqueen.bqrmv()
            }


            if (((Math.abs(wk1.x - bki.x + 2) < 0.05) && (Math.abs(wk1.z - bki.z - 7) < 0.05))) {
                console.log("collision");
                bking.bkirmv()
                        endw=0;

            }
            if (((Math.abs(wk2.x - bki.x + 2) < 0.05) && (Math.abs(wk2.z - bki.z - 7) < 0.05))) {
                console.log("collision");
                bking.bkirmv()
                        endw=0;

            }


            rmvLyr()
            domEvents.removeEventListener(select1, 'click');



            turn = 'b'

            clicked = false;


        })
    }
    //back and right
    if ((px + 3.5) < 4 && (pz - 7 + 2.35) < 4) {
        let select2 = new THREE.Mesh(plane_geo, plane_mat);

        select2.position.set(px + 3.5, 0.2, pz - 7 + 2.35)
        select2.rotation.x = -90 * (Math.PI / 180)

        layer.add(select2)

        domEvents.addEventListener(select2, 'click', () => {
            let layer_posX = select2.getWorldPosition(worldPosition).x;
            let layer_posZ = select2.getWorldPosition(worldPosition).z;


            obj.position.set(layer_posX - 2.5, -0.7, layer_posZ + 6.65)
            if (t == 'a') {
                wk1 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
            }
            else { wk2 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z } }


            if (((Math.abs(wk2.x - bp1.x + 3.05) < 0.05) && (Math.abs(wk2.z - bp1.z - 6) < 0.05))) {
                console.log("collision");
                bpawn1.bprmv()

            }
            if (((Math.abs(wk1.x - bp1.x + 3.05) < 0.05) && (Math.abs(wk1.z - bp1.z - 6) < 0.05))) {
                console.log("collision");
                bpawn1.bprmv()

            }
            if (((Math.abs(wk1.x - bp2.x + 3.05) < 0.05) && (Math.abs(wk1.z - bp2.z - 6) < 0.05))) {
                console.log("collision");
                bpawn2.bprmv()
            }
            if (((Math.abs(wk2.x - bp2.x + 3.05) < 0.05) && (Math.abs(wk2.z - bp2.z - 6) < 0.05))) {
                console.log("collision");
                bpawn2.bprmv()
            }

            if (((Math.abs(wk1.x - bp3.x + 3.05) < 0.05) && (Math.abs(wk1.z - bp3.z - 6) < 0.05))) {
                console.log("collision");
                bpawn3.bprmv()
            }
            if (((Math.abs(wk2.x - bp3.x + 3.05) < 0.05) && (Math.abs(wk2.z - bp3.z - 6) < 0.05))) {
                console.log("collision");
                bpawn3.bprmv()
            }

            if (((Math.abs(wk1.x - bp4.x + 3.05) < 0.05) && (Math.abs(wk1.z - bp4.z - 6) < 0.05))) {
                console.log("collision");
                bpawn4.bprmv()

            }
            if (((Math.abs(wk2.x - bp4.x + 3.05) < 0.05) && (Math.abs(wk2.z - bp4.z - 6) < 0.05))) {
                console.log("collision");
                bpawn4.bprmv()

            }
            if (((Math.abs(wk1.x - bp5.x + 3.05) < 0.05) && (Math.abs(wk1.z - bp5.z - 6) < 0.05))) {
                console.log("collision");
                bpawn5.bprmv()

            }
            if (((Math.abs(wk2.x - bp5.x + 3.05) < 0.05) && (Math.abs(wk2.z - bp5.z - 6) < 0.05))) {
                console.log("collision");
                bpawn5.bprmv()

            }
            if (((Math.abs(wk1.x - bp6.x + 3.05) < 0.05) && (Math.abs(wk1.z - bp6.z - 6) < 0.05))) {
                console.log("collision");
                bpawn6.bprmv()

            }
            if (((Math.abs(wk2.x - bp6.x + 3.05) < 0.05) && (Math.abs(wk2.z - bp6.z - 6) < 0.05))) {
                console.log("collision");
                bpawn6.bprmv()

            }

            if (((Math.abs(wk1.x - bp7.x + 3.05) < 0.05) && (Math.abs(wk1.z - bp7.z - 6) < 0.05))) {
                console.log("collision");
                bpawn7.bprmv()

            }
            if (((Math.abs(wk2.x - bp7.x + 3.05) < 0.05) && (Math.abs(wk2.z - bp7.z - 6) < 0.05))) {
                console.log("collision");
                bpawn7.bprmv()

            }
            if ((Math.abs(wk1.x - bp8.x + 3.05) < 0.05) && (Math.abs(wk1.z - bp8.z - 6) < 0.05)) {
                console.log("collision");
                bpawn8.bprmv()

            }
            if ((Math.abs(wk2.x - bp8.x + 3.05) < 0.05) && (Math.abs(wk2.z - bp8.z - 6) < 0.05)) {
                console.log("collision");
                bpawn8.bprmv()

            }

            if (((Math.abs(wk1.x - br1.x - 1) < 0.05) && (Math.abs(wk1.z - br1.z - 7) < 0.05))) {
                console.log("collision");
                brook1.brrmv()
            }
            if (((Math.abs(wk1.x - br2.x - 1) < 0.05) && (Math.abs(wk1.z - br2.z - 7) < 0.05))) {
                console.log("collision");
                brook2.brrmv()
            }
            if (((Math.abs(wk2.x - br1.x - 1) < 0.05) && (Math.abs(wk2.z - br1.z - 7) < 0.05))) {
                console.log("collision");
                brook1.brrmv()
            }
            if (((Math.abs(wk2.x - br2.x - 1) < 0.05) && (Math.abs(wk2.z - br2.z - 7) < 0.05))) {
                console.log("collision");
                brook2.brrmv()
            }




            if (((Math.abs(wk1.x - bb1.x + 0.95) <= 0.05) && (Math.abs(wk1.z - bb1.z - 7) < 0.05))) {
                console.log("collision");
                bbishop1.bbrmv();
            }
            if ((Math.abs(wk1.x - bb2.x + 0.95) <= 0.05) && (Math.abs(wk1.z - bb2.z - 7) < 0.05)) {
                console.log("collision");
                bbishop2.bbrmv();
            }
            if (((Math.abs(wk2.x - bb1.x + 0.95) <= 0.05) && (Math.abs(wk2.z - bb1.z - 7) < 0.05))) {
                console.log("collision");
                bbishop1.bbrmv();
            }
            if ((Math.abs(wk2.x - bb2.x + 0.95) <= 0.05) && (Math.abs(wk2.z - bb2.z - 7) < 0.05)) {
                console.log("collision");
                bbishop2.bbrmv();
            }


            if (((Math.abs(wk1.x - bk2.x) < 0.05) && (Math.abs(wk1.z - bk2.z - 7) < 0.05))) {
                console.log("collision");
                bknight2.bkrmv()
            }

            if (((Math.abs(wk1.x - bk1.x) < 0.05) && (Math.abs(wk1.z - bk1.z - 7) < 0.05))) {
                console.log("collision");
                bknight1.bkrmv()
            }

            if (((Math.abs(wk2.x - bk2.x) < 0.05) && (Math.abs(wk2.z - bk2.z - 7) < 0.05))) {
                console.log("collision");
                bknight2.bkrmv()

            }

            if (((Math.abs(wk2.x - bk1.x) < 0.05) && (Math.abs(wk2.z - bk1.z - 7) < 0.05))) {
                console.log("collision");
                bknight2.bkrmv()

            }

            if (((Math.abs(wk1.x - bq.x + 3.05) < 0.05) && (Math.abs(wk1.z - bq.z - 7) < 0.05))) {
                console.log("collision");
                bqueen.bqrmv()
            }
            if (((Math.abs(wk2.x - bq.x + 3.05) < 0.05) && (Math.abs(wk2.z - bq.z - 7) < 0.05))) {
                console.log("collision");
                bqueen.bqrmv()
            }


            if (((Math.abs(wk1.x - bki.x + 2) < 0.05) && (Math.abs(wk1.z - bki.z - 7) < 0.05))) {
                console.log("collision");
                bking.bkirmv()
                        endw=0;

            }
            if (((Math.abs(wk2.x - bki.x + 2) < 0.05) && (Math.abs(wk2.z - bki.z - 7) < 0.05))) {
                console.log("collision");
                bking.bkirmv()
                        endw=0;

            }

            rmvLyr()
            domEvents.removeEventListener(select2, 'click');


            turn = 'b'

            clicked = false;


        })
    }
    //left and back
    if ((px + 0.55) > -4 && (pz - 7 + 1.35) < 4) {
        let select3 = new THREE.Mesh(plane_geo, plane_mat);
        select3.position.set(px + 0.55, 0.2, pz - 7 + 1.35)
        select3.rotation.x = -90 * (Math.PI / 180)
        layer.add(select3)
        domEvents.addEventListener(select3, 'click', () => {
            let layer_posX = select3.getWorldPosition(worldPosition).x;
            let layer_posZ = select3.getWorldPosition(worldPosition).z;


            obj.position.set(layer_posX - 2.5, -0.7, layer_posZ + 6.75)
            if (t == 'a') {
                wk1 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
            }
            else { wk2 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z } }

            if (((Math.abs(wk2.x - bp1.x + 3.05) < 0.05) && (Math.abs(wk2.z - bp1.z - 6) < 0.05))) {
                console.log("collision");
                bpawn1.bprmv()

            }
            if (((Math.abs(wk1.x - bp1.x + 3.05) < 0.05) && (Math.abs(wk1.z - bp1.z - 6) < 0.05))) {
                console.log("collision");
                bpawn1.bprmv()

            }
            if (((Math.abs(wk1.x - bp2.x + 3.05) < 0.05) && (Math.abs(wk1.z - bp2.z - 6) < 0.05))) {
                console.log("collision");
                bpawn2.bprmv()
            }
            if (((Math.abs(wk2.x - bp2.x + 3.05) < 0.05) && (Math.abs(wk2.z - bp2.z - 6) < 0.05))) {
                console.log("collision");
                bpawn2.bprmv()
            }

            if (((Math.abs(wk1.x - bp3.x + 3.05) < 0.05) && (Math.abs(wk1.z - bp3.z - 6) < 0.05))) {
                console.log("collision");
                bpawn3.bprmv()
            }
            if (((Math.abs(wk2.x - bp3.x + 3.05) < 0.05) && (Math.abs(wk2.z - bp3.z - 6) < 0.05))) {
                console.log("collision");
                bpawn3.bprmv()
            }

            if (((Math.abs(wk1.x - bp4.x + 3.05) < 0.05) && (Math.abs(wk1.z - bp4.z - 6) < 0.05))) {
                console.log("collision");
                bpawn4.bprmv()

            }
            if (((Math.abs(wk2.x - bp4.x + 3.05) < 0.05) && (Math.abs(wk2.z - bp4.z - 6) < 0.05))) {
                console.log("collision");
                bpawn4.bprmv()

            }
            if (((Math.abs(wk1.x - bp5.x + 3.05) < 0.05) && (Math.abs(wk1.z - bp5.z - 6) < 0.05))) {
                console.log("collision");
                bpawn5.bprmv()

            }
            if (((Math.abs(wk2.x - bp5.x + 3.05) < 0.05) && (Math.abs(wk2.z - bp5.z - 6) < 0.05))) {
                console.log("collision");
                bpawn5.bprmv()

            }
            if (((Math.abs(wk1.x - bp6.x + 3.05) < 0.05) && (Math.abs(wk1.z - bp6.z - 6) < 0.05))) {
                console.log("collision");
                bpawn6.bprmv()

            }
            if (((Math.abs(wk2.x - bp6.x + 3.05) < 0.05) && (Math.abs(wk2.z - bp6.z - 6) < 0.05))) {
                console.log("collision");
                bpawn6.bprmv()

            }

            if (((Math.abs(wk1.x - bp7.x + 3.05) < 0.05) && (Math.abs(wk1.z - bp7.z - 6) < 0.05))) {
                console.log("collision");
                bpawn7.bprmv()

            }
            if (((Math.abs(wk2.x - bp7.x + 3.05) < 0.05) && (Math.abs(wk2.z - bp7.z - 6) < 0.05))) {
                console.log("collision");
                bpawn7.bprmv()

            }
            if ((Math.abs(wk1.x - bp8.x + 3.05) < 0.05) && (Math.abs(wk1.z - bp8.z - 6) < 0.05)) {
                console.log("collision");
                bpawn8.bprmv()

            }
            if ((Math.abs(wk2.x - bp8.x + 3.05) < 0.05) && (Math.abs(wk2.z - bp8.z - 6) < 0.05)) {
                console.log("collision");
                bpawn8.bprmv()

            }


            if (((Math.abs(wk1.x - br1.x - 1) < 0.05) && (Math.abs(wk1.z - br1.z - 7) < 0.05))) {
                console.log("collision");
                brook1.brrmv()
            }
            if (((Math.abs(wk1.x - br2.x - 1) < 0.05) && (Math.abs(wk1.z - br2.z - 7) < 0.05))) {
                console.log("collision");
                brook2.brrmv()
            }
            if (((Math.abs(wk2.x - br1.x - 1) < 0.05) && (Math.abs(wk2.z - br1.z - 7) < 0.05))) {
                console.log("collision");
                brook1.brrmv()
            }
            if (((Math.abs(wk2.x - br2.x - 1) < 0.05) && (Math.abs(wk2.z - br2.z - 7) < 0.05))) {
                console.log("collision");
                brook2.brrmv()
            }




            if (((Math.abs(wk1.x - bb1.x + 0.95) <= 0.05) && (Math.abs(wk1.z - bb1.z - 7) < 0.05))) {
                console.log("collision");
                bbishop1.bbrmv();
            }
            if ((Math.abs(wk1.x - bb2.x + 0.95) <= 0.05) && (Math.abs(wk1.z - bb2.z - 7) < 0.05)) {
                console.log("collision");
                bbishop2.bbrmv();
            }
            if (((Math.abs(wk2.x - bb1.x + 0.95) <= 0.05) && (Math.abs(wk2.z - bb1.z - 7) < 0.05))) {
                console.log("collision");
                bbishop1.bbrmv();
            }
            if ((Math.abs(wk2.x - bb2.x + 0.95) <= 0.05) && (Math.abs(wk2.z - bb2.z - 7) < 0.05)) {
                console.log("collision");
                bbishop2.bbrmv();
            }


            if (((Math.abs(wk1.x - bk2.x) < 0.05) && (Math.abs(wk1.z - bk2.z - 7) < 0.05))) {
                console.log("collision");
                bknight2.bkrmv()
            }

            if (((Math.abs(wk1.x - bk1.x) < 0.05) && (Math.abs(wk1.z - bk1.z - 7) < 0.05))) {
                console.log("collision");
                bknight1.bkrmv()
            }

            if (((Math.abs(wk2.x - bk2.x) < 0.05) && (Math.abs(wk2.z - bk2.z - 7) < 0.05))) {
                console.log("collision");
                bknight2.bkrmv()

            }

            if (((Math.abs(wk2.x - bk1.x) < 0.05) && (Math.abs(wk2.z - bk1.z - 7) < 0.05))) {
                console.log("collision");
                bknight2.bkrmv()

            }

            if (((Math.abs(wk1.x - bq.x + 3.05) < 0.05) && (Math.abs(wk1.z - bq.z - 7) < 0.05))) {
                console.log("collision");
                bqueen.bqrmv()
            }
            if (((Math.abs(wk2.x - bq.x + 3.05) < 0.05) && (Math.abs(wk2.z - bq.z - 7) < 0.05))) {
                console.log("collision");
                bqueen.bqrmv()
            }


            if (((Math.abs(wk1.x - bki.x + 2) < 0.05) && (Math.abs(wk1.z - bki.z - 7) < 0.05))) {
                console.log("collision");
                bking.bkirmv()
                        endw=0;

            }
            if (((Math.abs(wk2.x - bki.x + 2) < 0.05) && (Math.abs(wk2.z - bki.z - 7) < 0.05))) {
                console.log("collision");
                bking.bkirmv()
                        endw=0;

            }

            rmvLyr()
            domEvents.removeEventListener(select3, 'click');


            turn = 'b'

            clicked = false;


        })

    } //left and front
    if ((px + 0.55) > -4 && (pz + -0.65 - 7) > -4) {
        let select4 = new THREE.Mesh(plane_geo, plane_mat);
        select4.position.set(px + 0.55, 0.2, pz + -0.65 - 7)
        select4.rotation.x = -90 * (Math.PI / 180)
        layer.add(select4)

        domEvents.addEventListener(select4, 'click', () => {
            let layer_posX = select4.getWorldPosition(worldPosition).x;
            let layer_posZ = select4.getWorldPosition(worldPosition).z;


            obj.position.set(layer_posX - 2.5, -0.7, layer_posZ + 6.65)
            if (t == 'a') {
                wk1 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
            }
            else { wk2 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z } }

            if (((Math.abs(wk2.x - bp1.x + 3.05) < 0.05) && (Math.abs(wk2.z - bp1.z - 6) < 0.05))) {
                console.log("collision");
                bpawn1.bprmv()

            }
            if (((Math.abs(wk1.x - bp1.x + 3.05) < 0.05) && (Math.abs(wk1.z - bp1.z - 6) < 0.05))) {
                console.log("collision");
                bpawn1.bprmv()

            }
            if (((Math.abs(wk1.x - bp2.x + 3.05) < 0.05) && (Math.abs(wk1.z - bp2.z - 6) < 0.05))) {
                console.log("collision");
                bpawn2.bprmv()
            }
            if (((Math.abs(wk2.x - bp2.x + 3.05) < 0.05) && (Math.abs(wk2.z - bp2.z - 6) < 0.05))) {
                console.log("collision");
                bpawn2.bprmv()
            }

            if (((Math.abs(wk1.x - bp3.x + 3.05) < 0.05) && (Math.abs(wk1.z - bp3.z - 6) < 0.05))) {
                console.log("collision");
                bpawn3.bprmv()
            }
            if (((Math.abs(wk2.x - bp3.x + 3.05) < 0.05) && (Math.abs(wk2.z - bp3.z - 6) < 0.05))) {
                console.log("collision");
                bpawn3.bprmv()
            }

            if (((Math.abs(wk1.x - bp4.x + 3.05) < 0.05) && (Math.abs(wk1.z - bp4.z - 6) < 0.05))) {
                console.log("collision");
                bpawn4.bprmv()

            }
            if (((Math.abs(wk2.x - bp4.x + 3.05) < 0.05) && (Math.abs(wk2.z - bp4.z - 6) < 0.05))) {
                console.log("collision");
                bpawn4.bprmv()

            }
            if (((Math.abs(wk1.x - bp5.x + 3.05) < 0.05) && (Math.abs(wk1.z - bp5.z - 6) < 0.05))) {
                console.log("collision");
                bpawn5.bprmv()

            }
            if (((Math.abs(wk2.x - bp5.x + 3.05) < 0.05) && (Math.abs(wk2.z - bp5.z - 6) < 0.05))) {
                console.log("collision");
                bpawn5.bprmv()

            }
            if (((Math.abs(wk1.x - bp6.x + 3.05) < 0.05) && (Math.abs(wk1.z - bp6.z - 6) < 0.05))) {
                console.log("collision");
                bpawn6.bprmv()

            }
            if (((Math.abs(wk2.x - bp6.x + 3.05) < 0.05) && (Math.abs(wk2.z - bp6.z - 6) < 0.05))) {
                console.log("collision");
                bpawn6.bprmv()

            }

            if (((Math.abs(wk1.x - bp7.x + 3.05) < 0.05) && (Math.abs(wk1.z - bp7.z - 6) < 0.05))) {
                console.log("collision");
                bpawn7.bprmv()

            }
            if (((Math.abs(wk2.x - bp7.x + 3.05) < 0.05) && (Math.abs(wk2.z - bp7.z - 6) < 0.05))) {
                console.log("collision");
                bpawn7.bprmv()

            }
            if ((Math.abs(wk1.x - bp8.x + 3.05) < 0.05) && (Math.abs(wk1.z - bp8.z - 6) < 0.05)) {
                console.log("collision");
                bpawn8.bprmv()

            }
            if ((Math.abs(wk2.x - bp8.x + 3.05) < 0.05) && (Math.abs(wk2.z - bp8.z - 6) < 0.05)) {
                console.log("collision");
                bpawn8.bprmv()

            }

            if (((Math.abs(wk1.x - br1.x - 1) < 0.05) && (Math.abs(wk1.z - br1.z - 7) < 0.05))) {
                console.log("collision");
                brook1.brrmv()
            }
            if (((Math.abs(wk1.x - br2.x - 1) < 0.05) && (Math.abs(wk1.z - br2.z - 7) < 0.05))) {
                console.log("collision");
                brook2.brrmv()
            }
            if (((Math.abs(wk2.x - br1.x - 1) < 0.05) && (Math.abs(wk2.z - br1.z - 7) < 0.05))) {
                console.log("collision");
                brook1.brrmv()
            }
            if (((Math.abs(wk2.x - br2.x - 1) < 0.05) && (Math.abs(wk2.z - br2.z - 7) < 0.05))) {
                console.log("collision");
                brook2.brrmv()
            }




            if (((Math.abs(wk1.x - bb1.x + 0.95) <= 0.05) && (Math.abs(wk1.z - bb1.z - 7) < 0.05))) {
                console.log("collision");
                bbishop1.bbrmv();
            }
            if ((Math.abs(wk1.x - bb2.x + 0.95) <= 0.05) && (Math.abs(wk1.z - bb2.z - 7) < 0.05)) {
                console.log("collision");
                bbishop2.bbrmv();
            }
            if (((Math.abs(wk2.x - bb1.x + 0.95) <= 0.05) && (Math.abs(wk2.z - bb1.z - 7) < 0.05))) {
                console.log("collision");
                bbishop1.bbrmv();
            }
            if ((Math.abs(wk2.x - bb2.x + 0.95) <= 0.05) && (Math.abs(wk2.z - bb2.z - 7) < 0.05)) {
                console.log("collision");
                bbishop2.bbrmv();
            }


            if (((Math.abs(wk1.x - bk2.x) < 0.05) && (Math.abs(wk1.z - bk2.z - 7) < 0.05))) {
                console.log("collision");
                bknight2.bkrmv()
            }

            if (((Math.abs(wk1.x - bk1.x) < 0.05) && (Math.abs(wk1.z - bk1.z - 7) < 0.05))) {
                console.log("collision");
                bknight1.bkrmv()
            }

            if (((Math.abs(wk2.x - bk2.x) < 0.05) && (Math.abs(wk2.z - bk2.z - 7) < 0.05))) {
                console.log("collision");
                bknight2.bkrmv()

            }

            if (((Math.abs(wk2.x - bk1.x) < 0.05) && (Math.abs(wk2.z - bk1.z - 7) < 0.05))) {
                console.log("collision");
                bknight2.bkrmv()

            }
            if (((Math.abs(wk1.x - bq.x + 3.05) < 0.05) && (Math.abs(wk1.z - bq.z - 7) < 0.05))) {
                console.log("collision");
                bqueen.bqrmv()
            }
            if (((Math.abs(wk2.x - bq.x + 3.05) < 0.05) && (Math.abs(wk2.z - bq.z - 7) < 0.05))) {
                console.log("collision");
                bqueen.bqrmv()
            }


            if (((Math.abs(wk1.x - bki.x + 2) < 0.05) && (Math.abs(wk1.z - bki.z - 7) < 0.05))) {
                console.log("collision");
                bking.bkirmv()
                        endw=0;

            }
            if (((Math.abs(wk2.x - bki.x + 2) < 0.05) && (Math.abs(wk2.z - bki.z - 7) < 0.05))) {
                console.log("collision");
                bking.bkirmv()
                        endw=0;

            }

            rmvLyr()
            domEvents.removeEventListener(select4, 'click');

            turn = 'b'

            clicked = false;


        })

    }  //right and back
    if ((px + 4.55) < 4 && (pz + -5.65) < 4) {
        let select5 = new THREE.Mesh(plane_geo, plane_mat);
        select5.position.set(px + 4.55, 0.2, pz + -5.65)
        select5.rotation.x = -90 * (Math.PI / 180)
        layer.add(select5)

        domEvents.addEventListener(select5, 'click', () => {
            let layer_posX = select5.getWorldPosition(worldPosition).x;
            let layer_posZ = select5.getWorldPosition(worldPosition).z;


            obj.position.set(layer_posX - 2.5, -0.7, layer_posZ + 6.75)
            if (t == 'a') {
                wk1 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
            }
            else { wk2 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z } }

            if (((Math.abs(wk2.x - bp1.x + 3.05) < 0.05) && (Math.abs(wk2.z - bp1.z - 6) < 0.05))) {
                console.log("collision");
                bpawn1.bprmv()

            }
            if (((Math.abs(wk1.x - bp1.x + 3.05) < 0.05) && (Math.abs(wk1.z - bp1.z - 6) < 0.05))) {
                console.log("collision");
                bpawn1.bprmv()

            }
            if (((Math.abs(wk1.x - bp2.x + 3.05) < 0.05) && (Math.abs(wk1.z - bp2.z - 6) < 0.05))) {
                console.log("collision");
                bpawn2.bprmv()
            }
            if (((Math.abs(wk2.x - bp2.x + 3.05) < 0.05) && (Math.abs(wk2.z - bp2.z - 6) < 0.05))) {
                console.log("collision");
                bpawn2.bprmv()
            }

            if (((Math.abs(wk1.x - bp3.x + 3.05) < 0.05) && (Math.abs(wk1.z - bp3.z - 6) < 0.05))) {
                console.log("collision");
                bpawn3.bprmv()
            }
            if (((Math.abs(wk2.x - bp3.x + 3.05) < 0.05) && (Math.abs(wk2.z - bp3.z - 6) < 0.05))) {
                console.log("collision");
                bpawn3.bprmv()
            }

            if (((Math.abs(wk1.x - bp4.x + 3.05) < 0.05) && (Math.abs(wk1.z - bp4.z - 6) < 0.05))) {
                console.log("collision");
                bpawn4.bprmv()

            }
            if (((Math.abs(wk2.x - bp4.x + 3.05) < 0.05) && (Math.abs(wk2.z - bp4.z - 6) < 0.05))) {
                console.log("collision");
                bpawn4.bprmv()

            }
            if (((Math.abs(wk1.x - bp5.x + 3.05) < 0.05) && (Math.abs(wk1.z - bp5.z - 6) < 0.05))) {
                console.log("collision");
                bpawn5.bprmv()

            }
            if (((Math.abs(wk2.x - bp5.x + 3.05) < 0.05) && (Math.abs(wk2.z - bp5.z - 6) < 0.05))) {
                console.log("collision");
                bpawn5.bprmv()

            }
            if (((Math.abs(wk1.x - bp6.x + 3.05) < 0.05) && (Math.abs(wk1.z - bp6.z - 6) < 0.05))) {
                console.log("collision");
                bpawn6.bprmv()

            }
            if (((Math.abs(wk2.x - bp6.x + 3.05) < 0.05) && (Math.abs(wk2.z - bp6.z - 6) < 0.05))) {
                console.log("collision");
                bpawn6.bprmv()

            }

            if (((Math.abs(wk1.x - bp7.x + 3.05) < 0.05) && (Math.abs(wk1.z - bp7.z - 6) < 0.05))) {
                console.log("collision");
                bpawn7.bprmv()

            }
            if (((Math.abs(wk2.x - bp7.x + 3.05) < 0.05) && (Math.abs(wk2.z - bp7.z - 6) < 0.05))) {
                console.log("collision");
                bpawn7.bprmv()

            }
            if ((Math.abs(wk1.x - bp8.x + 3.05) < 0.05) && (Math.abs(wk1.z - bp8.z - 6) < 0.05)) {
                console.log("collision");
                bpawn8.bprmv()

            }
            if ((Math.abs(wk2.x - bp8.x + 3.05) < 0.05) && (Math.abs(wk2.z - bp8.z - 6) < 0.05)) {
                console.log("collision");
                bpawn8.bprmv()

            }

            if (((Math.abs(wk1.x - br1.x - 1) < 0.05) && (Math.abs(wk1.z - br1.z - 7) < 0.05))) {
                console.log("collision");
                brook1.brrmv()
            }
            if (((Math.abs(wk1.x - br2.x - 1) < 0.05) && (Math.abs(wk1.z - br2.z - 7) < 0.05))) {
                console.log("collision");
                brook2.brrmv()
            }
            if (((Math.abs(wk2.x - br1.x - 1) < 0.05) && (Math.abs(wk2.z - br1.z - 7) < 0.05))) {
                console.log("collision");
                brook1.brrmv()
            }
            if (((Math.abs(wk2.x - br2.x - 1) < 0.05) && (Math.abs(wk2.z - br2.z - 7) < 0.05))) {
                console.log("collision");
                brook2.brrmv()
            }




            if (((Math.abs(wk1.x - bb1.x + 0.95) <= 0.05) && (Math.abs(wk1.z - bb1.z - 7) < 0.05))) {
                console.log("collision");
                bbishop1.bbrmv();
            }
            if ((Math.abs(wk1.x - bb2.x + 0.95) <= 0.05) && (Math.abs(wk1.z - bb2.z - 7) < 0.05)) {
                console.log("collision");
                bbishop2.bbrmv();
            }
            if (((Math.abs(wk2.x - bb1.x + 0.95) <= 0.05) && (Math.abs(wk2.z - bb1.z - 7) < 0.05))) {
                console.log("collision");
                bbishop1.bbrmv();
            }
            if ((Math.abs(wk2.x - bb2.x + 0.95) <= 0.05) && (Math.abs(wk2.z - bb2.z - 7) < 0.05)) {
                console.log("collision");
                bbishop2.bbrmv();
            }


            if (((Math.abs(wk1.x - bk2.x) < 0.05) && (Math.abs(wk1.z - bk2.z - 7) < 0.05))) {
                console.log("collision");
                bknight2.bkrmv()
            }

            if (((Math.abs(wk1.x - bk1.x) < 0.05) && (Math.abs(wk1.z - bk1.z - 7) < 0.05))) {
                console.log("collision");
                bknight1.bkrmv()
            }

            if (((Math.abs(wk2.x - bk2.x) < 0.05) && (Math.abs(wk2.z - bk2.z - 7) < 0.05))) {
                console.log("collision");
                bknight2.bkrmv()

            }

            if (((Math.abs(wk2.x - bk1.x) < 0.05) && (Math.abs(wk2.z - bk1.z - 7) < 0.05))) {
                console.log("collision");
                bknight2.bkrmv()

            }

            if (((Math.abs(wk1.x - bq.x + 3.05) < 0.05) && (Math.abs(wk1.z - bq.z - 7) < 0.05))) {
                console.log("collision");
                bqueen.bqrmv()
            }
            if (((Math.abs(wk2.x - bq.x + 3.05) < 0.05) && (Math.abs(wk2.z - bq.z - 7) < 0.05))) {
                console.log("collision");
                bqueen.bqrmv()
            }


            if (((Math.abs(wk1.x - bki.x + 2) < 0.05) && (Math.abs(wk1.z - bki.z - 7) < 0.05))) {
                console.log("collision");
                bking.bkirmv()
                        endw=0;

            }
            if (((Math.abs(wk2.x - bki.x + 2) < 0.05) && (Math.abs(wk2.z - bki.z - 7) < 0.05))) {
                console.log("collision");
                bking.bkirmv()
                        endw=0;

            }
            for (let i = layer.children.length; i >= 0; i--) {
                layer.remove(layer.children[i])
            }rmvLyr()
            domEvents.removeEventListener(select5, 'click');

            turn = 'b'

            clicked = false;


        })
    } //right and front
    if ((px + 4.5) < 4 && (pz + -0.65 - 7) > -4) {
        let select6 = new THREE.Mesh(plane_geo, plane_mat);
        select6.position.set(px + 4.5, 0.2, pz + -0.65 - 7)
        select6.rotation.x = -90 * (Math.PI / 180)
        layer.add(select6)

        domEvents.addEventListener(select6, 'click', () => {
            let layer_posX = select6.getWorldPosition(worldPosition).x;
            let layer_posZ = select6.getWorldPosition(worldPosition).z;


            obj.position.set(layer_posX - 2.5, -0.7, layer_posZ + 6.75)
            if (t == 'a') {
                wk1 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
            }
            else { wk2 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z } }

            if (((Math.abs(wk2.x - bp1.x + 3.05) < 0.05) && (Math.abs(wk2.z - bp1.z - 6) < 0.05))) {
                console.log("collision");
                bpawn1.bprmv()

            }
            if (((Math.abs(wk1.x - bp1.x + 3.05) < 0.05) && (Math.abs(wk1.z - bp1.z - 6) < 0.05))) {
                console.log("collision");
                bpawn1.bprmv()

            }
            if (((Math.abs(wk1.x - bp2.x + 3.05) < 0.05) && (Math.abs(wk1.z - bp2.z - 6) < 0.05))) {
                console.log("collision");
                bpawn2.bprmv()
            }
            if (((Math.abs(wk2.x - bp2.x + 3.05) < 0.05) && (Math.abs(wk2.z - bp2.z - 6) < 0.05))) {
                console.log("collision");
                bpawn2.bprmv()
            }

            if (((Math.abs(wk1.x - bp3.x + 3.05) < 0.05) && (Math.abs(wk1.z - bp3.z - 6) < 0.05))) {
                console.log("collision");
                bpawn3.bprmv()
            }
            if (((Math.abs(wk2.x - bp3.x + 3.05) < 0.05) && (Math.abs(wk2.z - bp3.z - 6) < 0.05))) {
                console.log("collision");
                bpawn3.bprmv()
            }

            if (((Math.abs(wk1.x - bp4.x + 3.05) < 0.05) && (Math.abs(wk1.z - bp4.z - 6) < 0.05))) {
                console.log("collision");
                bpawn4.bprmv()

            }
            if (((Math.abs(wk2.x - bp4.x + 3.05) < 0.05) && (Math.abs(wk2.z - bp4.z - 6) < 0.05))) {
                console.log("collision");
                bpawn4.bprmv()

            }
            if (((Math.abs(wk1.x - bp5.x + 3.05) < 0.05) && (Math.abs(wk1.z - bp5.z - 6) < 0.05))) {
                console.log("collision");
                bpawn5.bprmv()

            }
            if (((Math.abs(wk2.x - bp5.x + 3.05) < 0.05) && (Math.abs(wk2.z - bp5.z - 6) < 0.05))) {
                console.log("collision");
                bpawn5.bprmv()

            }
            if (((Math.abs(wk1.x - bp6.x + 3.05) < 0.05) && (Math.abs(wk1.z - bp6.z - 6) < 0.05))) {
                console.log("collision");
                bpawn6.bprmv()

            }
            if (((Math.abs(wk2.x - bp6.x + 3.05) < 0.05) && (Math.abs(wk2.z - bp6.z - 6) < 0.05))) {
                console.log("collision");
                bpawn6.bprmv()

            }

            if (((Math.abs(wk1.x - bp7.x + 3.05) < 0.05) && (Math.abs(wk1.z - bp7.z - 6) < 0.05))) {
                console.log("collision");
                bpawn7.bprmv()

            }
            if (((Math.abs(wk2.x - bp7.x + 3.05) < 0.05) && (Math.abs(wk2.z - bp7.z - 6) < 0.05))) {
                console.log("collision");
                bpawn7.bprmv()

            }
            if ((Math.abs(wk1.x - bp8.x + 3.05) < 0.05) && (Math.abs(wk1.z - bp8.z - 6) < 0.05)) {
                console.log("collision");
                bpawn8.bprmv()

            }
            if ((Math.abs(wk2.x - bp8.x + 3.05) < 0.05) && (Math.abs(wk2.z - bp8.z - 6) < 0.05)) {
                console.log("collision");
                bpawn8.bprmv()

            }
            if (((Math.abs(wk1.x - bq.x + 3.05) < 0.05) && (Math.abs(wk1.z - bq.z - 7) < 0.05))) {
                console.log("collision");
                bqueen.bqrmv()
            }
            if (((Math.abs(wk2.x - bq.x + 3.05) < 0.05) && (Math.abs(wk2.z - bq.z - 7) < 0.05))) {
                console.log("collision");
                bqueen.bqrmv()
            }


            if (((Math.abs(wk1.x - bki.x + 2) < 0.05) && (Math.abs(wk1.z - bki.z - 7) < 0.05))) {
                console.log("collision");
                bking.bkirmv()
                        endw=0;

            }
            if (((Math.abs(wk2.x - bki.x + 2) < 0.05) && (Math.abs(wk2.z - bki.z - 7) < 0.05))) {
                console.log("collision");
                bking.bkirmv()
                        endw=0;

            }
            rmvLyr()
            domEvents.removeEventListener(select6, 'click');

            turn = 'b'

            clicked = false;


        })

    }  //front and left
    if ((px + 1.5) > -4 && (pz - 8.75) > -4) {
        let select7 = new THREE.Mesh(plane_geo, plane_mat);
        select7.position.set(px + 1.5, 0.2, pz - 8.75)
        select7.rotation.x = -90 * (Math.PI / 180)
        layer.add(select7)

        domEvents.addEventListener(select7, 'click', () => {
            let layer_posX = select7.getWorldPosition(worldPosition).x;
            let layer_posZ = select7.getWorldPosition(worldPosition).z;

            obj.position.set(layer_posX - 2.5, -0.7, layer_posZ + 6.75)

            if (t == 'a') {
                wk1 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
            }
            else {
                wk2 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
            }

            if (((Math.abs(wk2.x - bp1.x + 3.05) < 0.05) && (Math.abs(wk2.z - bp1.z - 6) < 0.05))) {
                console.log("collision");
                bpawn1.bprmv()

            }
            if (((Math.abs(wk1.x - bp1.x + 3.05) < 0.05) && (Math.abs(wk1.z - bp1.z - 6) < 0.05))) {
                console.log("collision");
                bpawn1.bprmv()

            }
            if (((Math.abs(wk1.x - bp2.x + 3.05) < 0.05) && (Math.abs(wk1.z - bp2.z - 6) < 0.05))) {
                console.log("collision");
                bpawn2.bprmv()
            }
            if (((Math.abs(wk2.x - bp2.x + 3.05) < 0.05) && (Math.abs(wk2.z - bp2.z - 6) < 0.05))) {
                console.log("collision");
                bpawn2.bprmv()
            }

            if (((Math.abs(wk1.x - bp3.x + 3.05) < 0.05) && (Math.abs(wk1.z - bp3.z - 6) < 0.05))) {
                console.log("collision");
                bpawn3.bprmv()
            }
            if (((Math.abs(wk2.x - bp3.x + 3.05) < 0.05) && (Math.abs(wk2.z - bp3.z - 6) < 0.05))) {
                console.log("collision");
                bpawn3.bprmv()
            }

            if (((Math.abs(wk1.x - bp4.x + 3.05) < 0.05) && (Math.abs(wk1.z - bp4.z - 6) < 0.05))) {
                console.log("collision");
                bpawn4.bprmv()

            }
            if (((Math.abs(wk2.x - bp4.x + 3.05) < 0.05) && (Math.abs(wk2.z - bp4.z - 6) < 0.05))) {
                console.log("collision");
                bpawn4.bprmv()

            }
            if (((Math.abs(wk1.x - bp5.x + 3.05) < 0.05) && (Math.abs(wk1.z - bp5.z - 6) < 0.05))) {
                console.log("collision");
                bpawn5.bprmv()

            }
            if (((Math.abs(wk2.x - bp5.x + 3.05) < 0.05) && (Math.abs(wk2.z - bp5.z - 6) < 0.05))) {
                console.log("collision");
                bpawn5.bprmv()

            }
            if (((Math.abs(wk1.x - bp6.x + 3.05) < 0.05) && (Math.abs(wk1.z - bp6.z - 6) < 0.05))) {
                console.log("collision");
                bpawn6.bprmv()

            }
            if (((Math.abs(wk2.x - bp6.x + 3.05) < 0.05) && (Math.abs(wk2.z - bp6.z - 6) < 0.05))) {
                console.log("collision");
                bpawn6.bprmv()

            }

            if (((Math.abs(wk1.x - bp7.x + 3.05) < 0.05) && (Math.abs(wk1.z - bp7.z - 6) < 0.05))) {
                console.log("collision");
                bpawn7.bprmv()

            }
            if (((Math.abs(wk2.x - bp7.x + 3.05) < 0.05) && (Math.abs(wk2.z - bp7.z - 6) < 0.05))) {
                console.log("collision");
                bpawn7.bprmv()

            }
            if ((Math.abs(wk1.x - bp8.x + 3.05) < 0.05) && (Math.abs(wk1.z - bp8.z - 6) < 0.05)) {
                console.log("collision");
                bpawn8.bprmv()

            }
            if ((Math.abs(wk2.x - bp8.x + 3.05) < 0.05) && (Math.abs(wk2.z - bp8.z - 6) < 0.05)) {
                console.log("collision");
                bpawn8.bprmv()

            }



            if (((Math.abs(wk1.x - br1.x - 1) < 0.05) && (Math.abs(wk1.z - br1.z - 7) < 0.05))) {
                console.log("collision");
                brook1.brrmv()
            }
            if (((Math.abs(wk1.x - br2.x - 1) < 0.05) && (Math.abs(wk1.z - br2.z - 7) < 0.05))) {
                console.log("collision");
                brook2.brrmv()
            }
            if (((Math.abs(wk2.x - br1.x - 1) < 0.05) && (Math.abs(wk2.z - br1.z - 7) < 0.05))) {
                console.log("collision");
                brook1.brrmv()
            }
            if (((Math.abs(wk2.x - br2.x - 1) < 0.05) && (Math.abs(wk2.z - br2.z - 7) < 0.05))) {
                console.log("collision");
                brook2.brrmv()
            }




            if (((Math.abs(wk1.x - bb1.x + 0.95) <= 0.05) && (Math.abs(wk1.z - bb1.z - 7) < 0.05))) {
                console.log("collision");
                bbishop1.bbrmv();
            }
            if ((Math.abs(wk1.x - bb2.x + 0.95) <= 0.05) && (Math.abs(wk1.z - bb2.z - 7) < 0.05)) {
                console.log("collision");
                bbishop2.bbrmv();
            }
            if (((Math.abs(wk2.x - bb1.x + 0.95) <= 0.05) && (Math.abs(wk2.z - bb1.z - 7) < 0.05))) {
                console.log("collision");
                bbishop1.bbrmv();
            }
            if ((Math.abs(wk2.x - bb2.x + 0.95) <= 0.05) && (Math.abs(wk2.z - bb2.z - 7) < 0.05)) {
                console.log("collision");
                bbishop2.bbrmv();
            }


            if (((Math.abs(wk1.x - bk2.x) < 0.05) && (Math.abs(wk1.z - bk2.z - 7) < 0.05))) {
                console.log("collision");
                bknight2.bkrmv()
            }

            if (((Math.abs(wk1.x - bk1.x) < 0.05) && (Math.abs(wk1.z - bk1.z - 7) < 0.05))) {
                console.log("collision");
                bknight1.bkrmv()
            }

            if (((Math.abs(wk2.x - bk2.x) < 0.05) && (Math.abs(wk2.z - bk2.z - 7) < 0.05))) {
                console.log("collision");
                bknight2.bkrmv()

            }

            if (((Math.abs(wk2.x - bk1.x) < 0.05) && (Math.abs(wk2.z - bk1.z - 7) < 0.05))) {
                console.log("collision");
                bknight2.bkrmv()

            }

            if (((Math.abs(wk1.x - bq.x + 3.05) < 0.05) && (Math.abs(wk1.z - bq.z - 7) < 0.05))) {
                console.log("collision");
                bqueen.bqrmv()
            }
            if (((Math.abs(wk2.x - bq.x + 3.05) < 0.05) && (Math.abs(wk2.z - bq.z - 7) < 0.05))) {
                console.log("collision");
                bqueen.bqrmv()
            }


            if (((Math.abs(wk1.x - bki.x + 2) < 0.05) && (Math.abs(wk1.z - bki.z - 7) < 0.05))) {
                console.log("collision");
                bking.bkirmv()
                        endw=0;

            }
            if (((Math.abs(wk2.x - bki.x + 2) < 0.05) && (Math.abs(wk2.z - bki.z - 7) < 0.05))) {
                console.log("collision");
                bking.bkirmv()
                        endw=0;

            }
            rmvLyr()
            domEvents.removeEventListener(select7, 'click');

            turn = 'b'

            clicked = false;

        })
    }
    //front and right
    if ((px + 3.5) < 4 && (pz + 1.25 - 3 - 7) > -4) {
        let select8 = new THREE.Mesh(plane_geo, plane_mat);
        select8.position.set(px + 3.5, 0.1, pz + 1.25 - 3 - 7)
        select8.rotation.x = -90 * (Math.PI / 180)
        layer.add(select8)

        domEvents.addEventListener(select8, 'click', () => {
            let layer_posX = select8.getWorldPosition(worldPosition).x;
            let layer_posZ = select8.getWorldPosition(worldPosition).z;


            obj.position.set(layer_posX - 2.5, -0.7, layer_posZ + 6.75)
            if (t == 'a') {
                wk1 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
            }
            else { wk2 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z } }


            if (((Math.abs(wk2.x - bp1.x + 3.05) < 0.05) && (Math.abs(wk2.z - bp1.z - 6) < 0.05))) {
                console.log("collision");
                bpawn1.bprmv()

            }
            if (((Math.abs(wk1.x - bp1.x + 3.05) < 0.05) && (Math.abs(wk1.z - bp1.z - 6) < 0.05))) {
                console.log("collision");
                bpawn1.bprmv()

            }
            if (((Math.abs(wk1.x - bp2.x + 3.05) < 0.05) && (Math.abs(wk1.z - bp2.z - 6) < 0.05))) {
                console.log("collision");
                bpawn2.bprmv()
            }
            if (((Math.abs(wk2.x - bp2.x + 3.05) < 0.05) && (Math.abs(wk2.z - bp2.z - 6) < 0.05))) {
                console.log("collision");
                bpawn2.bprmv()
            }

            if (((Math.abs(wk1.x - bp3.x + 3.05) < 0.05) && (Math.abs(wk1.z - bp3.z - 6) < 0.05))) {
                console.log("collision");
                bpawn3.bprmv()
            }
            if (((Math.abs(wk2.x - bp3.x + 3.05) < 0.05) && (Math.abs(wk2.z - bp3.z - 6) < 0.05))) {
                console.log("collision");
                bpawn3.bprmv()
            }

            if (((Math.abs(wk1.x - bp4.x + 3.05) < 0.05) && (Math.abs(wk1.z - bp4.z - 6) < 0.05))) {
                console.log("collision");
                bpawn4.bprmv()

            }
            if (((Math.abs(wk2.x - bp4.x + 3.05) < 0.05) && (Math.abs(wk2.z - bp4.z - 6) < 0.05))) {
                console.log("collision");
                bpawn4.bprmv()

            }
            if (((Math.abs(wk1.x - bp5.x + 3.05) < 0.05) && (Math.abs(wk1.z - bp5.z - 6) < 0.05))) {
                console.log("collision");
                bpawn5.bprmv()

            }
            if (((Math.abs(wk2.x - bp5.x + 3.05) < 0.05) && (Math.abs(wk2.z - bp5.z - 6) < 0.05))) {
                console.log("collision");
                bpawn5.bprmv()

            }
            if (((Math.abs(wk1.x - bp6.x + 3.05) < 0.05) && (Math.abs(wk1.z - bp6.z - 6) < 0.05))) {
                console.log("collision");
                bpawn6.bprmv()

            }
            if (((Math.abs(wk2.x - bp6.x + 3.05) < 0.05) && (Math.abs(wk2.z - bp6.z - 6) < 0.05))) {
                console.log("collision");
                bpawn6.bprmv()

            }

            if (((Math.abs(wk1.x - bp7.x + 3.05) < 0.05) && (Math.abs(wk1.z - bp7.z - 6) < 0.05))) {
                console.log("collision");
                bpawn7.bprmv()

            }
            if (((Math.abs(wk2.x - bp7.x + 3.05) < 0.05) && (Math.abs(wk2.z - bp7.z - 6) < 0.05))) {
                console.log("collision");
                bpawn7.bprmv()

            }
            if ((Math.abs(wk1.x - bp8.x + 3.05) < 0.05) && (Math.abs(wk1.z - bp8.z - 6) < 0.05)) {
                console.log("collision");
                bpawn8.bprmv()

            }
            if ((Math.abs(wk2.x - bp8.x + 3.05) < 0.05) && (Math.abs(wk2.z - bp8.z - 6) < 0.05)) {
                console.log("collision");
                bpawn8.bprmv()

            }

            if (((Math.abs(wk1.x - br1.x - 1) < 0.05) && (Math.abs(wk1.z - br1.z - 7) < 0.05))) {
                console.log("collision");
                brook1.brrmv()
            }
            if (((Math.abs(wk1.x - br2.x - 1) < 0.05) && (Math.abs(wk1.z - br2.z - 7) < 0.05))) {
                console.log("collision");
                brook2.brrmv()
            }
            if (((Math.abs(wk2.x - br1.x - 1) < 0.05) && (Math.abs(wk2.z - br1.z - 7) < 0.05))) {
                console.log("collision");
                brook1.brrmv()
            }
            if (((Math.abs(wk2.x - br2.x - 1) < 0.05) && (Math.abs(wk2.z - br2.z - 7) < 0.05))) {
                console.log("collision");
                brook2.brrmv()
            }




            if (((Math.abs(wk1.x - bb1.x + 0.95) <= 0.05) && (Math.abs(wk1.z - bb1.z - 7) < 0.05))) {
                console.log("collision");
                bbishop1.bbrmv();
            }
            if ((Math.abs(wk1.x - bb2.x + 0.95) <= 0.05) && (Math.abs(wk1.z - bb2.z - 7) < 0.05)) {
                console.log("collision");
                bbishop2.bbrmv();
            }
            if (((Math.abs(wk2.x - bb1.x + 0.95) <= 0.05) && (Math.abs(wk2.z - bb1.z - 7) < 0.05))) {
                console.log("collision");
                bbishop1.bbrmv();
            }
            if ((Math.abs(wk2.x - bb2.x + 0.95) <= 0.05) && (Math.abs(wk2.z - bb2.z - 7) < 0.05)) {
                console.log("collision");
                bbishop2.bbrmv();
            }


            if (((Math.abs(wk1.x - bk2.x) < 0.05) && (Math.abs(wk1.z - bk2.z - 7) < 0.05))) {
                console.log("collision");
                bknight2.bkrmv()
            }

            if (((Math.abs(wk1.x - bk1.x) < 0.05) && (Math.abs(wk1.z - bk1.z - 7) < 0.05))) {
                console.log("collision");
                bknight1.bkrmv()
            }

            if (((Math.abs(wk2.x - bk2.x) < 0.05) && (Math.abs(wk2.z - bk2.z - 7) < 0.05))) {
                console.log("collision");
                bknight2.bkrmv()

            }

            if (((Math.abs(wk2.x - bk1.x) < 0.05) && (Math.abs(wk2.z - bk1.z - 7) < 0.05))) {
                console.log("collision");
                bknight2.bkrmv()

            }
            if (((Math.abs(wk1.x - bq.x + 3.05) < 0.05) && (Math.abs(wk1.z - bq.z - 7) < 0.05))) {
                console.log("collision");
                bqueen.bqrmv()
            }
            if (((Math.abs(wk2.x - bq.x + 3.05) < 0.05) && (Math.abs(wk2.z - bq.z - 7) < 0.05))) {
                console.log("collision");
                bqueen.bqrmv()
            }


            if (((Math.abs(wk1.x - bki.x + 2) < 0.05) && (Math.abs(wk1.z - bki.z - 7) < 0.05))) {
                console.log("collision");
                bking.bkirmv()
                        endw=0;

            }
            if (((Math.abs(wk2.x - bki.x + 2) < 0.05) && (Math.abs(wk2.z - bki.z - 7) < 0.05))) {
                console.log("collision");
                bking.bkirmv()
                        endw=0;

            }

            rmvLyr()
            domEvents.removeEventListener(select8, 'click');

            turn = 'b'

            clicked = false;


        })
    }

    board.add(layer)

}

function Wbishop_onClick(px, pz, obj, t) {
    plane_geo = new THREE.PlaneGeometry(0.8, 0.8);
    plane_mat = new THREE.MeshBasicMaterial({ color: 0xd87d7d })
    for (i = 0; i < 8; i++) {
        if ((pz + 1.35 - 7 + i) < 4 && (px - 2.45 + 5 + i) < 4) {
            let s = new THREE.Mesh(plane_geo, plane_mat);
            s.position.set(px - 2.45 + 5 + i, 0.2, pz + 1.25 - 7 + i);
            s.rotation.x = -90 * (Math.PI / 180)
            s.name = 'select'
            domEvents.addEventListener(s, 'click', () => {
                let layer_posX = s.getWorldPosition(worldPosition).x;
                let layer_posZ = s.getWorldPosition(worldPosition).z;

                obj.position.set(layer_posX - 1.5, -0.7, layer_posZ + 6.75)
                if (t == 'a') {
                    wb1 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
                }
                else { wb2 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z } }

                if (((Math.abs(wb2.x - bp1.x + 2.05) < 0.05) && (Math.abs(wb2.z - bp1.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn1.bprmv()

                }
                if (((Math.abs(wb1.x - bp1.x + 2.05) < 0.05) && (Math.abs(wb1.z - bp1.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn1.bprmv()

                }
                if (((Math.abs(wb1.x - bp2.x + 2.05) < 0.05) && (Math.abs(wb1.z - bp2.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn2.bprmv()
                }
                if (((Math.abs(wb2.x - bp2.x + 2.05) < 0.05) && (Math.abs(wb2.z - bp2.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn2.bprmv()
                }

                if (((Math.abs(wb1.x - bp3.x + 2.05) < 0.05) && (Math.abs(wb1.z - bp3.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn3.bprmv()
                }
                if (((Math.abs(wb2.x - bp3.x + 2.05) < 0.05) && (Math.abs(wb2.z - bp3.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn3.bprmv()
                }

                if (((Math.abs(wb1.x - bp4.x + 2.05) < 0.05) && (Math.abs(wb1.z - bp4.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn4.bprmv()

                }
                if (((Math.abs(wb2.x - bp4.x + 2.05) < 0.05) && (Math.abs(wb2.z - bp4.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn4.bprmv()

                }
                if (((Math.abs(wb1.x - bp5.x + 2.05) < 0.05) && (Math.abs(wb1.z - bp5.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn5.bprmv()

                }
                if (((Math.abs(wb2.x - bp5.x + 2.05) < 0.05) && (Math.abs(wb2.z - bp5.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn5.bprmv()

                }
                if (((Math.abs(wb1.x - bp6.x + 2.05) < 0.05) && (Math.abs(wb1.z - bp6.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn6.bprmv()

                }
                if (((Math.abs(wb2.x - bp6.x + 2.05) < 0.05) && (Math.abs(wb2.z - bp6.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn6.bprmv()

                }

                if (((Math.abs(wb1.x - bp7.x + 2.05) < 0.05) && (Math.abs(wb1.z - bp7.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn7.bprmv()

                }
                if (((Math.abs(wb2.x - bp7.x + 2.05) < 0.05) && (Math.abs(wb2.z - bp7.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn7.bprmv()

                }
                if ((Math.abs(wb1.x - bp8.x + 2.05) < 0.05) && (Math.abs(wb1.z - bp8.z - 6) < 0.05)) {
                    console.log("collision");
                    bpawn8.bprmv()

                }
                if ((Math.abs(wb2.x - bp8.x + 2.05) < 0.05) && (Math.abs(wb2.z - bp8.z - 6) < 0.05)) {
                    console.log("collision");
                    bpawn8.bprmv()

                }



                if (((Math.abs(wb1.x - br1.x - 2) < 0.05) && (Math.abs(wb1.z - br1.z - 7) < 0.05))) {
                    console.log("collision");
                    brook1.brrmv()
                }
                if (((Math.abs(wb1.x - br2.x - 2) < 0.05) && (Math.abs(wb1.z - br2.z - 7) < 0.05))) {
                    console.log("collision");
                    brook2.brrmv()
                }
                if (((Math.abs(wb2.x - br1.x - 2) < 0.05) && (Math.abs(wb2.z - br1.z - 7) < 0.05))) {
                    console.log("collision");
                    brook1.brrmv()
                }
                if (((Math.abs(wb2.x - br2.x - 2) < 0.05) && (Math.abs(wb2.z - br2.z - 7) < 0.05))) {
                    console.log("collision");
                    brook2.brrmv()
                }



                if (((Math.abs(wb1.x - bb1.x - 0.05) <= 0.05) && (Math.abs(wb1.z - bb1.z - 7) < 0.05))) {
                    console.log("collision");
                    wbishop1.wbrmv();
                }
                if ((Math.abs(wb1.x - bb2.x - 0.05) <= 0.05) && (Math.abs(wb1.z - bb2.z - 7) < 0.05)) {
                    console.log("collision");
                    wbishop2.wbrmv();
                }
                if (((Math.abs(wb2.x - bb1.x - 0.05) <= 0.05) && (Math.abs(wb2.z - bb1.z - 7) < 0.05))) {
                    console.log("collision");
                    wbishop1.wbrmv();
                }
                if ((Math.abs(wb2.x - bb2.x - 0.05) <= 0.05) && (Math.abs(wb2.z - bb2.z - 7) < 0.05)) {
                    console.log("collision");
                    wbishop2.wbrmv();
                }



                if (((Math.abs(wb1.x - bk2.x - 1) < 0.05) && (Math.abs(wb1.z - bk2.z - 7.1) < 0.05))) {
                    console.log("collision");
                    wknight2.wkrmv()
                }

                if (((Math.abs(wb1.x - bk1.x - 1) < 0.05) && (Math.abs(wb1.z - bk1.z - 7.1) < 0.05))) {
                    console.log("collision");
                    wknight1.wkrmv()
                }

                if (((Math.abs(wb2.x - bk2.x - 1) < 0.05) && (Math.abs(wb2.z - bk2.z - 7.1) < 0.05))) {
                    console.log("collision");
                    wknight2.wkrmv()

                }

                if (((Math.abs(wb2.x - bk1.x - 1) < 0.05) && (Math.abs(wb2.z - bk1.z - 7.1) < 0.05))) {
                    console.log("collision");
                    wknight2.wkrmv()

                }



                if (((Math.abs(wb1.x - bq.x + 1.95) <= 0.051) && (Math.abs(wb1.z - bq.z - 7) < 0.1))) {
                    console.log("collision");
                    bqueen.bqrmv()
                }
                if (((Math.abs(wb2.x - bq.x + 1.95) <= 0.051) && (Math.abs(wb2.z - bq.z - 7) < 0.1))) {
                    console.log("collision");
                    bqueen.bqrmv()
                }


                if (((Math.abs(wb1.x - bki.x + 0.95) < 0.05) && (Math.abs(wb1.z - bki.z - 7) < 0.05))) {
                    console.log("collision");
                    bking.bkirmv()
                        endw=0;

                }
                if (((Math.abs(wb2.x - bki.x + 0.95) < 0.05) && (Math.abs(wb2.z - bki.z - 7) < 0.05))) {
                    console.log("collision");
                    bking.bkirmv()
                        endw=0;

                }



                rmvLyr()
                turn = 'b'

                clicked = false;
            })
            layer.add(s);
        }
    }

    for (let i = 0; i < 8; i++) {
        if ((pz + 1.35 - 7 + i) < 4 && (px - 4.95 + 5.45 - i) > -4) {
            let select = new THREE.Mesh(plane_geo, plane_mat);
            select.name = 'select'
            select.position.set(px - 4.95 + 5.45 - i, 0.2, pz - 7 + 1.25 + i)
            layer.add(select)
            select.rotation.x = -90 * (Math.PI / 180)
            domEvents.addEventListener(select, 'click', () => {
                let layer_posX = select.getWorldPosition(worldPosition).x;
                let layer_posZ = select.getWorldPosition(worldPosition).z;

                obj.position.set(layer_posX - 1.5, -0.7, layer_posZ + 6.75)
                if (t == 'a') {
                    wb1 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
                }
                else { wb2 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z } }
                if (((Math.abs(wb2.x - bp1.x + 2.05) < 0.05) && (Math.abs(wb2.z - bp1.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn1.bprmv()

                }
                if (((Math.abs(wb1.x - bp1.x + 2.05) < 0.05) && (Math.abs(wb1.z - bp1.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn1.bprmv()

                }
                if (((Math.abs(wb1.x - bp2.x + 2.05) < 0.05) && (Math.abs(wb1.z - bp2.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn2.bprmv()
                }
                if (((Math.abs(wb2.x - bp2.x + 2.05) < 0.05) && (Math.abs(wb2.z - bp2.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn2.bprmv()
                }

                if (((Math.abs(wb1.x - bp3.x + 2.05) < 0.05) && (Math.abs(wb1.z - bp3.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn3.bprmv()
                }
                if (((Math.abs(wb2.x - bp3.x + 2.05) < 0.05) && (Math.abs(wb2.z - bp3.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn3.bprmv()
                }

                if (((Math.abs(wb1.x - bp4.x + 2.05) < 0.05) && (Math.abs(wb1.z - bp4.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn4.bprmv()

                }
                if (((Math.abs(wb2.x - bp4.x + 2.05) < 0.05) && (Math.abs(wb2.z - bp4.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn4.bprmv()

                }
                if (((Math.abs(wb1.x - bp5.x + 2.05) < 0.05) && (Math.abs(wb1.z - bp5.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn5.bprmv()

                }
                if (((Math.abs(wb2.x - bp5.x + 2.05) < 0.05) && (Math.abs(wb2.z - bp5.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn5.bprmv()

                }
                if (((Math.abs(wb1.x - bp6.x + 2.05) < 0.05) && (Math.abs(wb1.z - bp6.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn6.bprmv()

                }
                if (((Math.abs(wb2.x - bp6.x + 2.05) < 0.05) && (Math.abs(wb2.z - bp6.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn6.bprmv()

                }

                if (((Math.abs(wb1.x - bp7.x + 2.05) < 0.05) && (Math.abs(wb1.z - bp7.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn7.bprmv()

                }
                if (((Math.abs(wb2.x - bp7.x + 2.05) < 0.05) && (Math.abs(wb2.z - bp7.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn7.bprmv()

                }
                if ((Math.abs(wb1.x - bp8.x + 2.05) < 0.05) && (Math.abs(wb1.z - bp8.z - 6) < 0.05)) {
                    console.log("collision");
                    bpawn8.bprmv()

                }
                if ((Math.abs(wb2.x - bp8.x + 2.05) < 0.05) && (Math.abs(wb2.z - bp8.z - 6) < 0.05)) {
                    console.log("collision");
                    bpawn8.bprmv()

                }



                if (((Math.abs(wb1.x - br1.x - 2) < 0.05) && (Math.abs(wb1.z - br1.z - 7) < 0.05))) {
                    console.log("collision");
                    brook1.brrmv()
                }
                if (((Math.abs(wb1.x - br2.x - 2) < 0.05) && (Math.abs(wb1.z - br2.z - 7) < 0.05))) {
                    console.log("collision");
                    brook2.brrmv()
                }
                if (((Math.abs(wb2.x - br1.x - 2) < 0.05) && (Math.abs(wb2.z - br1.z - 7) < 0.05))) {
                    console.log("collision");
                    brook1.brrmv()
                }
                if (((Math.abs(wb2.x - br2.x - 2) < 0.05) && (Math.abs(wb2.z - br2.z - 7) < 0.05))) {
                    console.log("collision");
                    brook2.brrmv()
                }



                if (((Math.abs(wb1.x - bb1.x - 0.05) <= 0.05) && (Math.abs(wb1.z - bb1.z - 7) < 0.05))) {
                    console.log("collision");
                    wbishop1.wbrmv();
                }
                if ((Math.abs(wb1.x - bb2.x - 0.05) <= 0.05) && (Math.abs(wb1.z - bb2.z - 7) < 0.05)) {
                    console.log("collision");
                    wbishop2.wbrmv();
                }
                if (((Math.abs(wb2.x - bb1.x - 0.05) <= 0.05) && (Math.abs(wb2.z - bb1.z - 7) < 0.05))) {
                    console.log("collision");
                    wbishop1.wbrmv();
                }
                if ((Math.abs(wb2.x - bb2.x - 0.05) <= 0.05) && (Math.abs(wb2.z - bb2.z - 7) < 0.05)) {
                    console.log("collision");
                    wbishop2.wbrmv();
                }



                if (((Math.abs(wb1.x - bk2.x - 1) < 0.05) && (Math.abs(wb1.z - bk2.z - 7.1) < 0.05))) {
                    console.log("collision");
                    wknight2.wkrmv()
                }

                if (((Math.abs(wb1.x - bk1.x - 1) < 0.05) && (Math.abs(wb1.z - bk1.z - 7.1) < 0.05))) {
                    console.log("collision");
                    wknight1.wkrmv()
                }

                if (((Math.abs(wb2.x - bk2.x - 1) < 0.05) && (Math.abs(wb2.z - bk2.z - 7.1) < 0.05))) {
                    console.log("collision");
                    wknight2.wkrmv()

                }

                if (((Math.abs(wb2.x - bk1.x - 1) < 0.05) && (Math.abs(wb2.z - bk1.z - 7.1) < 0.05))) {
                    console.log("collision");
                    wknight2.wkrmv()

                }

                if (((Math.abs(wb1.x - bki.x + 0.95) < 0.05) && (Math.abs(wb1.z - bki.z - 7) < 0.05))) {
                    console.log("collision");
                    bking.bkirmv()
                        endw=0;

                }
                if (((Math.abs(wb2.x - bki.x + 0.95) < 0.05) && (Math.abs(wb2.z - bki.z - 7) < 0.05))) {
                    console.log("collision");
                    bking.bkirmv()
                        endw=0;

                }

                rmvLyr()
                turn = 'b'

                clicked = false;
            })

        } else break
    }

    for (let i = 0; i < 8; i++) {
        if ((pz + 0.35 - 8 - i) > -4 && (px - 2.45 + 5 + i) < 4) {
            let select = new THREE.Mesh(plane_geo, plane_mat);
            select.name = 'select'
            select.position.set(px - 2.45 + 5 + i, 0.2, pz + 0.25 - 8 - i)
            layer.add(select)
            select.rotation.x = -90 * (Math.PI / 180)
            domEvents.addEventListener(select, 'click', () => {
                let layer_posX = select.getWorldPosition(worldPosition).x;
                let layer_posZ = select.getWorldPosition(worldPosition).z;

                obj.position.set(layer_posX - 1.5, -0.7, layer_posZ + 6.75)
                if (t == 'a') {
                    wb1 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
                }
                else { wb2 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z } }

                if (((Math.abs(wb2.x - bp1.x + 2.05) < 0.05) && (Math.abs(wb2.z - bp1.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn1.bprmv()

                }
                if (((Math.abs(wb1.x - bp1.x + 2.05) < 0.05) && (Math.abs(wb1.z - bp1.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn1.bprmv()

                }
                if (((Math.abs(wb1.x - bp2.x + 2.05) < 0.05) && (Math.abs(wb1.z - bp2.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn2.bprmv()
                }
                if (((Math.abs(wb2.x - bp2.x + 2.05) < 0.05) && (Math.abs(wb2.z - bp2.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn2.bprmv()
                }

                if (((Math.abs(wb1.x - bp3.x + 2.05) < 0.05) && (Math.abs(wb1.z - bp3.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn3.bprmv()
                }
                if (((Math.abs(wb2.x - bp3.x + 2.05) < 0.05) && (Math.abs(wb2.z - bp3.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn3.bprmv()
                }

                if (((Math.abs(wb1.x - bp4.x + 2.05) < 0.05) && (Math.abs(wb1.z - bp4.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn4.bprmv()

                }
                if (((Math.abs(wb2.x - bp4.x + 2.05) < 0.05) && (Math.abs(wb2.z - bp4.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn4.bprmv()

                }
                if (((Math.abs(wb1.x - bp5.x + 2.05) < 0.05) && (Math.abs(wb1.z - bp5.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn5.bprmv()

                }
                if (((Math.abs(wb2.x - bp5.x + 2.05) < 0.05) && (Math.abs(wb2.z - bp5.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn5.bprmv()

                }
                if (((Math.abs(wb1.x - bp6.x + 2.05) < 0.05) && (Math.abs(wb1.z - bp6.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn6.bprmv()

                }
                if (((Math.abs(wb2.x - bp6.x + 2.05) < 0.05) && (Math.abs(wb2.z - bp6.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn6.bprmv()

                }

                if (((Math.abs(wb1.x - bp7.x + 2.05) < 0.05) && (Math.abs(wb1.z - bp7.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn7.bprmv()

                }
                if (((Math.abs(wb2.x - bp7.x + 2.05) < 0.05) && (Math.abs(wb2.z - bp7.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn7.bprmv()

                }
                if ((Math.abs(wb1.x - bp8.x + 2.05) < 0.05) && (Math.abs(wb1.z - bp8.z - 6) < 0.05)) {
                    console.log("collision");
                    bpawn8.bprmv()

                }
                if ((Math.abs(wb2.x - bp8.x + 2.05) < 0.05) && (Math.abs(wb2.z - bp8.z - 6) < 0.05)) {
                    console.log("collision");
                    bpawn8.bprmv()

                }



                if (((Math.abs(wb1.x - br1.x - 2) < 0.05) && (Math.abs(wb1.z - br1.z - 7) < 0.05))) {
                    console.log("collision");
                    brook1.brrmv()
                }
                if (((Math.abs(wb1.x - br2.x - 2) < 0.05) && (Math.abs(wb1.z - br2.z - 7) < 0.05))) {
                    console.log("collision");
                    brook2.brrmv()
                }
                if (((Math.abs(wb2.x - br1.x - 2) < 0.05) && (Math.abs(wb2.z - br1.z - 7) < 0.05))) {
                    console.log("collision");
                    brook1.brrmv()
                }
                if (((Math.abs(wb2.x - br2.x - 2) < 0.05) && (Math.abs(wb2.z - br2.z - 7) < 0.05))) {
                    console.log("collision");
                    brook2.brrmv()
                }



                if (((Math.abs(wb1.x - bb1.x - 0.05) <= 0.05) && (Math.abs(wb1.z - bb1.z - 7) < 0.05))) {
                    console.log("collision");
                    wbishop1.wbrmv();
                }
                if ((Math.abs(wb1.x - bb2.x - 0.05) <= 0.05) && (Math.abs(wb1.z - bb2.z - 7) < 0.05)) {
                    console.log("collision");
                    wbishop2.wbrmv();
                }
                if (((Math.abs(wb2.x - bb1.x - 0.05) <= 0.05) && (Math.abs(wb2.z - bb1.z - 7) < 0.05))) {
                    console.log("collision");
                    wbishop1.wbrmv();
                }
                if ((Math.abs(wb2.x - bb2.x - 0.05) <= 0.05) && (Math.abs(wb2.z - bb2.z - 7) < 0.05)) {
                    console.log("collision");
                    wbishop2.wbrmv();
                }



                if (((Math.abs(wb1.x - bk2.x - 1) < 0.05) && (Math.abs(wb1.z - bk2.z - 7.1) < 0.05))) {
                    console.log("collision");
                    wknight2.wkrmv()
                }

                if (((Math.abs(wb1.x - bk1.x - 1) < 0.05) && (Math.abs(wb1.z - bk1.z - 7.1) < 0.05))) {
                    console.log("collision");
                    wknight1.wkrmv()
                }

                if (((Math.abs(wb2.x - bk2.x - 1) < 0.05) && (Math.abs(wb2.z - bk2.z - 7.1) < 0.05))) {
                    console.log("collision");
                    wknight2.wkrmv()

                }

                if (((Math.abs(wb2.x - bk1.x - 1) < 0.05) && (Math.abs(wb2.z - bk1.z - 7.1) < 0.05))) {
                    console.log("collision");
                    wknight2.wkrmv()

                }


                if (((Math.abs(wb1.x - bki.x + 0.95) < 0.05) && (Math.abs(wb1.z - bki.z - 7) < 0.05))) {
                    console.log("collision");
                    bking.bkirmv()
                        endw=0;

                }
                if (((Math.abs(wb2.x - bki.x + 0.95) < 0.05) && (Math.abs(wb2.z - bki.z - 7) < 0.05))) {
                    console.log("collision");
                    bking.bkirmv()
                        endw=0;

                }

                rmvLyr()
                turn = 'b'

                clicked = false;
            })
        } else break
    }

    for (let i = 0; i < 8; i++) {
        if ((pz - 0.65 - 7 - i) > -4 && (px - 3.95 + 4.45 - i) > -4) {
            let select = new THREE.Mesh(plane_geo, plane_mat);
            select.name = 'select'
            select.position.set(px - 3.95 + 4.45 - i, 0.2, pz - 0.75 - 7 - i)
            layer.add(select)
            select.rotation.x = -90 * (Math.PI / 180)
            domEvents.addEventListener(select, 'click', () => {
                let layer_posX = select.getWorldPosition(worldPosition).x;
                let layer_posZ = select.getWorldPosition(worldPosition).z;

                obj.position.set(layer_posX - 1.5, -0.7, layer_posZ + 6.75)
                if (t == 'a') {
                    wb1 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
                }
                else { wb2 = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z } }




                if (((Math.abs(wb2.x - bp1.x + 2.05) < 0.05) && (Math.abs(wb2.z - bp1.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn1.bprmv()

                }
                if (((Math.abs(wb1.x - bp1.x + 2.05) < 0.05) && (Math.abs(wb1.z - bp1.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn1.bprmv()

                }
                if (((Math.abs(wb1.x - bp2.x + 2.05) < 0.05) && (Math.abs(wb1.z - bp2.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn2.bprmv()
                }
                if (((Math.abs(wb2.x - bp2.x + 2.05) < 0.05) && (Math.abs(wb2.z - bp2.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn2.bprmv()
                }

                if (((Math.abs(wb1.x - bp3.x + 2.05) < 0.05) && (Math.abs(wb1.z - bp3.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn3.bprmv()
                }
                if (((Math.abs(wb2.x - bp3.x + 2.05) < 0.05) && (Math.abs(wb2.z - bp3.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn3.bprmv()
                }

                if (((Math.abs(wb1.x - bp4.x + 2.05) < 0.05) && (Math.abs(wb1.z - bp4.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn4.bprmv()

                }
                if (((Math.abs(wb2.x - bp4.x + 2.05) < 0.05) && (Math.abs(wb2.z - bp4.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn4.bprmv()

                }
                if (((Math.abs(wb1.x - bp5.x + 2.05) < 0.05) && (Math.abs(wb1.z - bp5.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn5.bprmv()

                }
                if (((Math.abs(wb2.x - bp5.x + 2.05) < 0.05) && (Math.abs(wb2.z - bp5.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn5.bprmv()

                }
                if (((Math.abs(wb1.x - bp6.x + 2.05) < 0.05) && (Math.abs(wb1.z - bp6.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn6.bprmv()

                }
                if (((Math.abs(wb2.x - bp6.x + 2.05) < 0.05) && (Math.abs(wb2.z - bp6.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn6.bprmv()

                }

                if (((Math.abs(wb1.x - bp7.x + 2.05) < 0.05) && (Math.abs(wb1.z - bp7.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn7.bprmv()

                }
                if (((Math.abs(wb2.x - bp7.x + 2.05) < 0.05) && (Math.abs(wb2.z - bp7.z - 6) < 0.05))) {
                    console.log("collision");
                    bpawn7.bprmv()

                }
                if ((Math.abs(wb1.x - bp8.x + 2.05) < 0.05) && (Math.abs(wb1.z - bp8.z - 6) < 0.05)) {
                    console.log("collision");
                    bpawn8.bprmv()

                }
                if ((Math.abs(wb2.x - bp8.x + 2.05) < 0.05) && (Math.abs(wb2.z - bp8.z - 6) < 0.05)) {
                    console.log("collision");
                    bpawn8.bprmv()

                }



                if (((Math.abs(wb1.x - br1.x - 2) < 0.05) && (Math.abs(wb1.z - br1.z - 7) < 0.05))) {
                    console.log("collision");
                    brook1.brrmv()
                }
                if (((Math.abs(wb1.x - br2.x - 2) < 0.05) && (Math.abs(wb1.z - br2.z - 7) < 0.05))) {
                    console.log("collision");
                    brook2.brrmv()
                }
                if (((Math.abs(wb2.x - br1.x - 2) < 0.05) && (Math.abs(wb2.z - br1.z - 7) < 0.05))) {
                    console.log("collision");
                    brook1.brrmv()
                }
                if (((Math.abs(wb2.x - br2.x - 2) < 0.05) && (Math.abs(wb2.z - br2.z - 7) < 0.05))) {
                    console.log("collision");
                    brook2.brrmv()
                }



                if (((Math.abs(wb1.x - bb1.x - 0.05) <= 0.05) && (Math.abs(wb1.z - bb1.z - 7) < 0.05))) {
                    console.log("collision");
                    wbishop1.wbrmv();
                }
                if ((Math.abs(wb1.x - bb2.x - 0.05) <= 0.05) && (Math.abs(wb1.z - bb2.z - 7) < 0.05)) {
                    console.log("collision");
                    wbishop2.wbrmv();
                }
                if (((Math.abs(wb2.x - bb1.x - 0.05) <= 0.05) && (Math.abs(wb2.z - bb1.z - 7) < 0.05))) {
                    console.log("collision");
                    wbishop1.wbrmv();
                }
                if ((Math.abs(wb2.x - bb2.x - 0.05) <= 0.05) && (Math.abs(wb2.z - bb2.z - 7) < 0.05)) {
                    console.log("collision");
                    wbishop2.wbrmv();
                }



                if (((Math.abs(wb1.x - bk2.x - 1) < 0.05) && (Math.abs(wb1.z - bk2.z - 7.1) < 0.05))) {
                    console.log("collision");
                    wknight2.wkrmv()
                }

                if (((Math.abs(wb1.x - bk1.x - 1) < 0.05) && (Math.abs(wb1.z - bk1.z - 7.1) < 0.05))) {
                    console.log("collision");
                    wknight1.wkrmv()
                }

                if (((Math.abs(wb2.x - bk2.x - 1) < 0.05) && (Math.abs(wb2.z - bk2.z - 7.1) < 0.05))) {
                    console.log("collision");
                    wknight2.wkrmv()

                }

                if (((Math.abs(wb2.x - bk1.x - 1) < 0.05) && (Math.abs(wb2.z - bk1.z - 7.1) < 0.05))) {
                    console.log("collision");
                    wknight2.wkrmv()

                }

                if (((Math.abs(wb1.x - bki.x + 0.95) < 0.05) && (Math.abs(wb1.z - bki.z - 7) < 0.05))) {
                    console.log("collision");
                    bking.bkirmv()
                        endw=0;

                }
                if (((Math.abs(wb2.x - bki.x + 0.95) < 0.05) && (Math.abs(wb2.z - bki.z - 7) < 0.05))) {
                    console.log("collision");
                    bking.bkirmv()
                        endw=0;

                }



                rmvLyr()
                turn = 'b'

                clicked = false;
            })

        } else break
    }

    board.add(layer)

}

function Wqueen_onClick(px, pz, obj) {
    plane_geo = new THREE.PlaneGeometry(0.8, 0.8);
    plane_mat = new THREE.MeshBasicMaterial({ color: 0xd87d7d })

    // for back
    for (let i = 0; i < 8; i++) {
        if ((pz + 1.15 - 7 + i) < 4) {
            let select = new THREE.Mesh(plane_geo, plane_mat);
            select.name = 'select'
            select.position.set(px - 0.5, 0.2, pz + 1.25 - 7 + i)
            layer.add(select)
            domEvents.addEventListener(select, 'click', () => {
                let layer_posX = select.getWorldPosition(worldPosition).x;
                let layer_posZ = select.getWorldPosition(worldPosition).z;

                obj.position.set(px, -0.7, layer_posZ + 6.75)
                wq = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }



                rmvLyr()


                turn = 'b'
                clicked = false;


            })
            select.rotation.x = -90 * (Math.PI / 180)

        } else break
    }
    // for right
    for (let i = 1; i < 8; i++) {
        if ((px - 0.45 + i) < 4) {

            let select = new THREE.Mesh(plane_geo, plane_mat);
            select.name = 'select'
            select.position.set(px - 0.55 + i, 0.2, pz - 7 + 0.25)
            layer.add(select)
            select.rotation.x = -90 * (Math.PI / 180)
            domEvents.addEventListener(select, 'click', () => {
                let layer_posX = select.getWorldPosition(worldPosition).x;
                let layer_posZ = select.getWorldPosition(worldPosition).z;
                if (layer.getObjectByName('select')) {
                    obj.position.set(layer_posX + 0.6, -0.7, pz)
                    wq = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }

                }
                rmvLyr()
                turn = 'b'

                clicked = false;
            })


        } else break;
    }
    // //for left
    for (let i = 1; i < 8; i++) {
        if ((px - 0.55 - i) > -4) {
            let select = new THREE.Mesh(plane_geo, plane_mat);
            select.name = 'select'
            select.position.set(px - 0.55 - i, 0.2, pz - 7 + 0.25)
            layer.add(select)
            select.rotation.x = -90 * (Math.PI / 180)
            domEvents.addEventListener(select, 'click', () => {
                let layer_posX = select.getWorldPosition(worldPosition).x;
                let layer_posZ = select.getWorldPosition(worldPosition).z;
                if (layer.getObjectByName('select')) {
                    obj.position.set(layer_posX + 0.6, -0.7, pz)
                    wq = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
                }
                rmvLyr()
                turn = 'b'

                clicked = false;


            })

        } else break;
    }
    // //for front
    for (let i = 0; i < 8; i++) {
        if ((pz + -0.65 - 7 - i) > -4) {
            let select = new THREE.Mesh(plane_geo, plane_mat);
            select.name = 'select'
            select.position.set(px - 0.45, 0.2, pz - 7 - 0.75 - i)
            layer.add(select)
            select.rotation.x = -90 * (Math.PI / 180)
            domEvents.addEventListener(select, 'click', () => {
                let layer_posX = select.getWorldPosition(worldPosition).x;
                let layer_posZ = select.getWorldPosition(worldPosition).z;

                obj.position.set(px, -0.7, layer_posZ + 6.7)
                wq = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }

                if (((Math.abs(wq.x - bp1.x) <= 0.051) && (Math.abs(wq.z - bp1.z - 6.1) < 0.05))) {
                    console.log("collision");
                    bpawn1.bprmv()

                }

                if (((Math.abs(wq.x - bp2.x) <= 0.051) && (Math.abs(wq.z - bp2.z - 6.1) < 0.05))) {
                    console.log("collision");
                    bpawn2.bprmv()
                }


                if (((Math.abs(wq.x - bp3.x) <= 0.051) && (Math.abs(wq.z - bp3.z - 6.1) < 0.05))) {
                    console.log("collision");
                    bpawn3.bprmv()
                }


                if (((Math.abs(wq.x - bp4.x) <= 0.051) && (Math.abs(wq.z - bp4.z - 6.1) < 0.05))) {
                    console.log("collision");
                    bpawn4.bprmv()

                }

                if (((Math.abs(wq.x - bp5.x) <= 0.051) && (Math.abs(wq.z - bp5.z - 6.1) < 0.05))) {
                    console.log("collision");
                    bpawn5.bprmv()

                }

                if (((Math.abs(wq.x - bp6.x) <= 0.051) && (Math.abs(wq.z - bp6.z - 6.1) < 0.05))) {
                    console.log("collision");
                    bpawn6.bprmv()

                }


                if (((Math.abs(wq.x - bp7.x) <= 0.051) && (Math.abs(wq.z - bp7.z - 6.1) < 0.05))) {
                    console.log("collision");
                    bpawn7.bprmv()

                }

                if ((Math.abs(wq.x - bp8.x) <= 0.051) && (Math.abs(wq.z - bp8.z - 6.1) < 0.05)) {
                    console.log("collision");
                    bpawn8.bprmv()

                }






                if (((Math.abs(wq.x - br1.x - 4) < 0.05) && (Math.abs(wq.z - br1.z - 7.1) < 0.05))) {
                    console.log("collision");
                    brook1.brrmv()
                }
                if (((Math.abs(wq.x - br2.x - 4) < 0.05) && (Math.abs(wq.z - br2.z - 7.1) < 0.05))) {
                    console.log("collision");
                    brook2.brrmv()
                }
                if (((Math.abs(wq.x - br1.x - 4) < 0.05) && (Math.abs(wq.z - br1.z - 7.1) < 0.05))) {
                    console.log("collision");
                    brook1.brrmv()
                }
                if (((Math.abs(wq.x - br2.x - 4) < 0.05) && (Math.abs(wq.z - br2.z - 7.1) < 0.05))) {
                    console.log("collision");
                    brook2.brrmv()
                }



                if (((Math.abs(wq.x - bb1.x - 2) <= 0.05) && (Math.abs(wq.z - bb1.z - 7.1) < 0.05))) {
                    console.log("collision");
                    bbishop1.bbrmv();
                }

                if ((Math.abs(wq.x - bb2.x - 2) <= 0.05) && (Math.abs(wq.z - bb2.z - 7.1) < 0.05)) {
                    console.log("collision");
                    bbishop2.bbrmv();
                }







                if (((Math.abs(wq.x - bk2.x - 3) < 0.05) && (Math.abs(wq.z - bk2.z - 7.1) < 0.05))) {
                    console.log("collision");
                    bknight2.bkrmv()

                }

                if (((Math.abs(wq.x - bk1.x - 3) < 0.05) && (Math.abs(wq.z - bk1.z - 7.1) < 0.05))) {
                    console.log("collision");
                    bknight1.bkrmv()

                }





                if (((Math.abs(wq.x - bq.x) < 0.05) && (Math.abs(wq.z - bq.z - 7.1) < 0.05))) {
                    console.log("collision");
                    bqueen.bqrmv()
                }
                if (((Math.abs(wq.x - bq.x) < 0.05) && (Math.abs(wq.z - bq.z - 7.1) < 0.05))) {
                    console.log("collision");
                    bqueen.bqrmv()
                }

                if (((Math.abs(wq.x - bki.x - 1) < 0.05) && (Math.abs(wq.z - bki.z - 7.1) < 0.05))) {
                    console.log("collision");
                    bking.bkirmv()
                        endw=0;

                }
                if (((Math.abs(wq.x - bki.x - 1) < 0.05) && (Math.abs(wq.z - bki.z - 7.1) < 0.05))) {
                    console.log("collision");
                    bking.bkirmv()
                        endw=0;

                }

                rmvLyr()
                turn = 'b'

                clicked = false;
            })

        } else break
    }

    //right and back

    for (i = 0; i < 8; i++) {
        if ((pz + 1.35 - 7 + i) < 4 && (px - 0.55 + i) < 4) {
            let select = new THREE.Mesh(plane_geo, plane_mat);
            select.name = 'select'
            select.position.set(px + 0.5 + i, 0.2, pz + 1.25 - 7 + i);
            layer.add(select);
            select.rotation.x = -90 * (Math.PI / 180)
            domEvents.addEventListener(select, 'click', () => {
                let layer_posX = select.getWorldPosition(worldPosition).x;
                let layer_posZ = select.getWorldPosition(worldPosition).z;

                obj.position.set(layer_posX + 0.55, -0.7, layer_posZ + 6.8)
                wq = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
                if (((Math.abs(wq.x - bp1.x) <= 0.051) && (Math.abs(wq.z - bp1.z - 6.1) < 0.05))) {
                    console.log("collision");
                    bpawn1.bprmv()

                }

                if (((Math.abs(wq.x - bp2.x) <= 0.051) && (Math.abs(wq.z - bp2.z - 6.1) < 0.05))) {
                    console.log("collision");
                    bpawn2.bprmv()
                }


                if (((Math.abs(wq.x - bp3.x) <= 0.051) && (Math.abs(wq.z - bp3.z - 6.1) < 0.05))) {
                    console.log("collision");
                    bpawn3.bprmv()
                }


                if (((Math.abs(wq.x - bp4.x) <= 0.051) && (Math.abs(wq.z - bp4.z - 6.1) < 0.05))) {
                    console.log("collision");
                    bpawn4.bprmv()

                }

                if (((Math.abs(wq.x - bp5.x) <= 0.051) && (Math.abs(wq.z - bp5.z - 6.1) < 0.05))) {
                    console.log("collision");
                    bpawn5.bprmv()

                }

                if (((Math.abs(wq.x - bp6.x) <= 0.051) && (Math.abs(wq.z - bp6.z - 6.1) < 0.05))) {
                    console.log("collision");
                    bpawn6.bprmv()

                }


                if (((Math.abs(wq.x - bp7.x) <= 0.051) && (Math.abs(wq.z - bp7.z - 6.1) < 0.05))) {
                    console.log("collision");
                    bpawn7.bprmv()

                }

                if ((Math.abs(wq.x - bp8.x) <= 0.051) && (Math.abs(wq.z - bp8.z - 6.1) < 0.05)) {
                    console.log("collision");
                    bpawn8.bprmv()

                }






                if (((Math.abs(wq.x - br1.x - 4) < 0.05) && (Math.abs(wq.z - br1.z - 7.1) < 0.05))) {
                    console.log("collision");
                    brook1.brrmv()
                }
                if (((Math.abs(wq.x - br2.x - 4) < 0.05) && (Math.abs(wq.z - br2.z - 7.1) < 0.05))) {
                    console.log("collision");
                    brook2.brrmv()
                }
                if (((Math.abs(wq.x - br1.x - 4) < 0.05) && (Math.abs(wq.z - br1.z - 7.1) < 0.05))) {
                    console.log("collision");
                    brook1.brrmv()
                }
                if (((Math.abs(wq.x - br2.x - 4) < 0.05) && (Math.abs(wq.z - br2.z - 7.1) < 0.05))) {
                    console.log("collision");
                    brook2.brrmv()
                }



                if (((Math.abs(wq.x - bb1.x - 2) <= 0.05) && (Math.abs(wq.z - bb1.z - 7.1) < 0.05))) {
                    console.log("collision");
                    bbishop1.bbrmv();
                }

                if ((Math.abs(wq.x - bb2.x - 2) <= 0.05) && (Math.abs(wq.z - bb2.z - 7.1) < 0.05)) {
                    console.log("collision");
                    bbishop2.bbrmv();
                }







                if (((Math.abs(wq.x - bk2.x - 3) < 0.05) && (Math.abs(wq.z - bk2.z - 7.1) < 0.05))) {
                    console.log("collision");
                    bknight2.bkrmv()

                }

                if (((Math.abs(wq.x - bk1.x - 3) < 0.05) && (Math.abs(wq.z - bk1.z - 7.1) < 0.05))) {
                    console.log("collision");
                    bknight1.bkrmv()

                }





                if (((Math.abs(wq.x - bq.x) < 0.05) && (Math.abs(wq.z - bq.z - 7.1) < 0.05))) {
                    console.log("collision");
                    bqueen.bqrmv()
                }
                if (((Math.abs(wq.x - bq.x) < 0.05) && (Math.abs(wq.z - bq.z - 7.1) < 0.05))) {
                    console.log("collision");
                    bqueen.bqrmv()
                }

                if (((Math.abs(wq.x - bki.x - 1) < 0.05) && (Math.abs(wq.z - bki.z - 7.1) < 0.05))) {
                    console.log("collision");
                    bking.bkirmv()
                        endw=0;

                }
                if (((Math.abs(wq.x - bki.x - 1) < 0.05) && (Math.abs(wq.z - bki.z - 7.1) < 0.05))) {
                    console.log("collision");
                    bking.bkirmv()
                        endw=0;

                }

                rmvLyr()
                turn = 'b'

                clicked = false;

            })
        }
    }


    //left and back

    for (let i = 0; i < 8; i++) {
        if ((pz + 1.35 - 7 + i) < 4 && (px - 1.55 - i) > -4) {
            let select = new THREE.Mesh(plane_geo, plane_mat);
            select.name = 'select'
            select.position.set(px - 1.45 - i, 0.2, pz - 7 + 1.25 + i)
            select.rotation.x = -90 * (Math.PI / 180)
            layer.add(select)
            domEvents.addEventListener(select, 'click', () => {
                let layer_posX = select.getWorldPosition(worldPosition).x;
                let layer_posZ = select.getWorldPosition(worldPosition).z;

                obj.position.set(layer_posX + 0.55, -0.7, layer_posZ + 6.8)
                wq = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
                if (((Math.abs(wq.x - bp1.x) <= 0.051) && (Math.abs(wq.z - bp1.z - 6.1) < 0.05))) {
                    console.log("collision");
                    bpawn1.bprmv()

                }

                if (((Math.abs(wq.x - bp2.x) <= 0.051) && (Math.abs(wq.z - bp2.z - 6.1) < 0.05))) {
                    console.log("collision");
                    bpawn2.bprmv()
                }


                if (((Math.abs(wq.x - bp3.x) <= 0.051) && (Math.abs(wq.z - bp3.z - 6.1) < 0.05))) {
                    console.log("collision");
                    bpawn3.bprmv()
                }


                if (((Math.abs(wq.x - bp4.x) <= 0.051) && (Math.abs(wq.z - bp4.z - 6.1) < 0.05))) {
                    console.log("collision");
                    bpawn4.bprmv()

                }

                if (((Math.abs(wq.x - bp5.x) <= 0.051) && (Math.abs(wq.z - bp5.z - 6.1) < 0.05))) {
                    console.log("collision");
                    bpawn5.bprmv()

                }

                if (((Math.abs(wq.x - bp6.x) <= 0.051) && (Math.abs(wq.z - bp6.z - 6.1) < 0.05))) {
                    console.log("collision");
                    bpawn6.bprmv()

                }


                if (((Math.abs(wq.x - bp7.x) <= 0.051) && (Math.abs(wq.z - bp7.z - 6.1) < 0.05))) {
                    console.log("collision");
                    bpawn7.bprmv()

                }

                if ((Math.abs(wq.x - bp8.x) <= 0.051) && (Math.abs(wq.z - bp8.z - 6.1) < 0.05)) {
                    console.log("collision");
                    bpawn8.bprmv()

                }






                if (((Math.abs(wq.x - br1.x - 4) < 0.05) && (Math.abs(wq.z - br1.z - 7.1) < 0.05))) {
                    console.log("collision");
                    brook1.brrmv()
                }
                if (((Math.abs(wq.x - br2.x - 4) < 0.05) && (Math.abs(wq.z - br2.z - 7.1) < 0.05))) {
                    console.log("collision");
                    brook2.brrmv()
                }
                if (((Math.abs(wq.x - br1.x - 4) < 0.05) && (Math.abs(wq.z - br1.z - 7.1) < 0.05))) {
                    console.log("collision");
                    brook1.brrmv()
                }
                if (((Math.abs(wq.x - br2.x - 4) < 0.05) && (Math.abs(wq.z - br2.z - 7.1) < 0.05))) {
                    console.log("collision");
                    brook2.brrmv()
                }



                if (((Math.abs(wq.x - bb1.x - 2) <= 0.05) && (Math.abs(wq.z - bb1.z - 7.1) < 0.05))) {
                    console.log("collision");
                    bbishop1.bbrmv();
                }

                if ((Math.abs(wq.x - bb2.x - 2) <= 0.05) && (Math.abs(wq.z - bb2.z - 7.1) < 0.05)) {
                    console.log("collision");
                    bbishop2.bbrmv();
                }







                if (((Math.abs(wq.x - bk2.x - 3) < 0.05) && (Math.abs(wq.z - bk2.z - 7.1) < 0.05))) {
                    console.log("collision");
                    bknight2.bkrmv()

                }

                if (((Math.abs(wq.x - bk1.x - 3) < 0.05) && (Math.abs(wq.z - bk1.z - 7.1) < 0.05))) {
                    console.log("collision");
                    bknight1.bkrmv()

                }





                if (((Math.abs(wq.x - bq.x) < 0.05) && (Math.abs(wq.z - bq.z - 7.1) < 0.05))) {
                    console.log("collision");
                    bqueen.bqrmv()
                }
                if (((Math.abs(wq.x - bq.x) < 0.05) && (Math.abs(wq.z - bq.z - 7.1) < 0.05))) {
                    console.log("collision");
                    bqueen.bqrmv()
                }

                if (((Math.abs(wq.x - bki.x - 1) < 0.05) && (Math.abs(wq.z - bki.z - 7.1) < 0.05))) {
                    console.log("collision");
                    bking.bkirmv()
                        endw=0;

                }
                if (((Math.abs(wq.x - bki.x - 1) < 0.05) && (Math.abs(wq.z - bki.z - 7.1) < 0.05))) {
                    console.log("collision");
                    bking.bkirmv()
                        endw=0;

                }

                rmvLyr()
                turn = 'b'

                clicked = false;

            })

        } else break
    }

    //right front

    for (let i = 1; i < 8; i++) {
        if ((pz + 0.35 - 7 - i) > -4 && (px - 0.45 + i) < 4) {
            let select = new THREE.Mesh(plane_geo, plane_mat);
            select.name = 'select'
            select.position.set(px - 0.55 + i, 0.2, pz + +0.25 - 7 - i)
            select.rotation.x = -90 * (Math.PI / 180)
            layer.add(select)
            domEvents.addEventListener(select, 'click', () => {
                let layer_posX = select.getWorldPosition(worldPosition).x;
                let layer_posZ = select.getWorldPosition(worldPosition).z;

                obj.position.set(layer_posX + 0.55, -0.7, layer_posZ + 6.8)
                wq = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }
                if (((Math.abs(wq.x - bp1.x) <= 0.051) && (Math.abs(wq.z - bp1.z - 6.1) < 0.05))) {
                    console.log("collision");
                    bpawn1.bprmv()

                }

                if (((Math.abs(wq.x - bp2.x) <= 0.051) && (Math.abs(wq.z - bp2.z - 6.1) < 0.05))) {
                    console.log("collision");
                    bpawn2.bprmv()
                }


                if (((Math.abs(wq.x - bp3.x) <= 0.051) && (Math.abs(wq.z - bp3.z - 6.1) < 0.05))) {
                    console.log("collision");
                    bpawn3.bprmv()
                }


                if (((Math.abs(wq.x - bp4.x) <= 0.051) && (Math.abs(wq.z - bp4.z - 6.1) < 0.05))) {
                    console.log("collision");
                    bpawn4.bprmv()

                }

                if (((Math.abs(wq.x - bp5.x) <= 0.051) && (Math.abs(wq.z - bp5.z - 6.1) < 0.05))) {
                    console.log("collision");
                    bpawn5.bprmv()

                }

                if (((Math.abs(wq.x - bp6.x) <= 0.051) && (Math.abs(wq.z - bp6.z - 6.1) < 0.05))) {
                    console.log("collision");
                    bpawn6.bprmv()

                }


                if (((Math.abs(wq.x - bp7.x) <= 0.051) && (Math.abs(wq.z - bp7.z - 6.1) < 0.05))) {
                    console.log("collision");
                    bpawn7.bprmv()

                }

                if ((Math.abs(wq.x - bp8.x) <= 0.051) && (Math.abs(wq.z - bp8.z - 6.1) < 0.05)) {
                    console.log("collision");
                    bpawn8.bprmv()

                }






                if (((Math.abs(wq.x - br1.x - 4) < 0.05) && (Math.abs(wq.z - br1.z - 7.1) < 0.05))) {
                    console.log("collision");
                    brook1.brrmv()
                }
                if (((Math.abs(wq.x - br2.x - 4) < 0.05) && (Math.abs(wq.z - br2.z - 7.1) < 0.05))) {
                    console.log("collision");
                    brook2.brrmv()
                }
                if (((Math.abs(wq.x - br1.x - 4) < 0.05) && (Math.abs(wq.z - br1.z - 7.1) < 0.05))) {
                    console.log("collision");
                    brook1.brrmv()
                }
                if (((Math.abs(wq.x - br2.x - 4) < 0.05) && (Math.abs(wq.z - br2.z - 7.1) < 0.05))) {
                    console.log("collision");
                    brook2.brrmv()
                }



                if (((Math.abs(wq.x - bb1.x - 2) <= 0.05) && (Math.abs(wq.z - bb1.z - 7.1) < 0.05))) {
                    console.log("collision");
                    bbishop1.bbrmv();
                }

                if ((Math.abs(wq.x - bb2.x - 2) <= 0.05) && (Math.abs(wq.z - bb2.z - 7.1) < 0.05)) {
                    console.log("collision");
                    bbishop2.bbrmv();
                }







                if (((Math.abs(wq.x - bk2.x - 3) < 0.05) && (Math.abs(wq.z - bk2.z - 7.1) < 0.05))) {
                    console.log("collision");
                    bknight2.bkrmv()

                }

                if (((Math.abs(wq.x - bk1.x - 3) < 0.05) && (Math.abs(wq.z - bk1.z - 7.1) < 0.05))) {
                    console.log("collision");
                    bknight1.bkrmv()

                }





                if (((Math.abs(wq.x - bq.x) < 0.05) && (Math.abs(wq.z - bq.z - 7.1) < 0.05))) {
                    console.log("collision");
                    bqueen.bqrmv()
                }
                if (((Math.abs(wq.x - bq.x) < 0.05) && (Math.abs(wq.z - bq.z - 7.1) < 0.05))) {
                    console.log("collision");
                    bqueen.bqrmv()
                }

                if (((Math.abs(wq.x - bki.x - 1) < 0.05) && (Math.abs(wq.z - bki.z - 7.1) < 0.05))) {
                    console.log("collision");
                    bking.bkirmv()
                        endw=0;

                }
                if (((Math.abs(wq.x - bki.x - 1) < 0.05) && (Math.abs(wq.z - bki.z - 7.1) < 0.05))) {
                    console.log("collision");
                    bking.bkirmv()
                        endw=0;

                }

                rmvLyr()
                turn = 'b'

                clicked = false;


            })

        } else break
    }

    //left front
    for (let i = 0; i < 8; i++) {
        if ((pz - 7 - 0.65 - i) > -4 && (px - 1.5 - i) > -4) {
            let select = new THREE.Mesh(plane_geo, plane_mat);
            select.name = 'select'
            select.position.set(px - 1.5 - i, 0.2, pz - 7 - 0.75 - i)
            select.rotation.x = -90 * (Math.PI / 180)
            layer.add(select)
            domEvents.addEventListener(select, 'click', () => {
                let layer_posX = select.getWorldPosition(worldPosition).x;
                let layer_posZ = select.getWorldPosition(worldPosition).z;

                obj.position.set(layer_posX + 0.55, -0.7, layer_posZ + 6.8)
                wq = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }

                if (((Math.abs(wq.x - bp1.x) <= 0.051) && (Math.abs(wq.z - bp1.z - 6.1) < 0.05))) {
                    console.log("collision");
                    bpawn1.bprmv()

                }

                if (((Math.abs(wq.x - bp2.x) <= 0.051) && (Math.abs(wq.z - bp2.z - 6.1) < 0.05))) {
                    console.log("collision");
                    bpawn2.bprmv()
                }


                if (((Math.abs(wq.x - bp3.x) <= 0.051) && (Math.abs(wq.z - bp3.z - 6.1) < 0.05))) {
                    console.log("collision");
                    bpawn3.bprmv()
                }


                if (((Math.abs(wq.x - bp4.x) <= 0.051) && (Math.abs(wq.z - bp4.z - 6.1) < 0.05))) {
                    console.log("collision");
                    bpawn4.bprmv()

                }

                if (((Math.abs(wq.x - bp5.x) <= 0.051) && (Math.abs(wq.z - bp5.z - 6.1) < 0.05))) {
                    console.log("collision");
                    bpawn5.bprmv()

                }

                if (((Math.abs(wq.x - bp6.x) <= 0.051) && (Math.abs(wq.z - bp6.z - 6.1) < 0.05))) {
                    console.log("collision");
                    bpawn6.bprmv()

                }


                if (((Math.abs(wq.x - bp7.x) <= 0.051) && (Math.abs(wq.z - bp7.z - 6.1) < 0.05))) {
                    console.log("collision");
                    bpawn7.bprmv()

                }

                if ((Math.abs(wq.x - bp8.x) <= 0.051) && (Math.abs(wq.z - bp8.z - 6.1) < 0.05)) {
                    console.log("collision");
                    bpawn8.bprmv()

                }






                if (((Math.abs(wq.x - br1.x - 4) < 0.05) && (Math.abs(wq.z - br1.z - 7.1) < 0.05))) {
                    console.log("collision");
                    brook1.brrmv()
                }
                if (((Math.abs(wq.x - br2.x - 4) < 0.05) && (Math.abs(wq.z - br2.z - 7.1) < 0.05))) {
                    console.log("collision");
                    brook2.brrmv()
                }
                if (((Math.abs(wq.x - br1.x - 4) < 0.05) && (Math.abs(wq.z - br1.z - 7.1) < 0.05))) {
                    console.log("collision");
                    brook1.brrmv()
                }
                if (((Math.abs(wq.x - br2.x - 4) < 0.05) && (Math.abs(wq.z - br2.z - 7.1) < 0.05))) {
                    console.log("collision");
                    brook2.brrmv()
                }



                if (((Math.abs(wq.x - bb1.x - 2) <= 0.05) && (Math.abs(wq.z - bb1.z - 7.1) < 0.05))) {
                    console.log("collision");
                    bbishop1.bbrmv();
                }

                if ((Math.abs(wq.x - bb2.x - 2) <= 0.05) && (Math.abs(wq.z - bb2.z - 7.1) < 0.05)) {
                    console.log("collision");
                    bbishop2.bbrmv();
                }







                if (((Math.abs(wq.x - bk2.x - 3) < 0.05) && (Math.abs(wq.z - bk2.z - 7.1) < 0.05))) {
                    console.log("collision");
                    bknight2.bkrmv()

                }

                if (((Math.abs(wq.x - bk1.x - 3) < 0.05) && (Math.abs(wq.z - bk1.z - 7.1) < 0.05))) {
                    console.log("collision");
                    bknight1.bkrmv()

                }





                if (((Math.abs(wq.x - bq.x) < 0.05) && (Math.abs(wq.z - bq.z - 7.1) < 0.05))) {
                    console.log("collision");
                    bqueen.bqrmv()
                }
                if (((Math.abs(wq.x - bq.x) < 0.05) && (Math.abs(wq.z - bq.z - 7.1) < 0.05))) {
                    console.log("collision");
                    bqueen.bqrmv()
                }

                if (((Math.abs(wq.x - bki.x - 1) < 0.05) && (Math.abs(wq.z - bki.z - 7.1) < 0.05))) {
                    console.log("collision");
                    bking.bkirmv()
                        endw=0;

                }
                if (((Math.abs(wq.x - bki.x - 1) < 0.05) && (Math.abs(wq.z - bki.z - 7.1) < 0.05))) {
                    console.log("collision");
                    bking.bkirmv()
                        endw=0;

                }

                rmvLyr()
                turn = 'b'

                clicked = false;


            })


        } else break
    }
    board.add(layer)
}

function Wking_onClick(px, pz, obj) {
    plane_geo = new THREE.PlaneGeometry(0.8, 0.8);
    plane_mat = new THREE.MeshBasicMaterial({ color: 0xd87d7d })
    if ((px - 0.55) > -4) {
        let select = new THREE.Mesh(plane_geo, plane_mat);
        select.position.set(px - 0.55, 0.2, pz - 7 + 0.35)
        select.rotation.x = -90 * (Math.PI / 180)
        layer.add(select)

        domEvents.addEventListener(select, 'click', () => {

            obj.position.set(px - 1, -0.7, pz)
            wki = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }


            if (((Math.abs(wki.x - bp1.x + 1.05) < 0.05) && (Math.abs(wki.z - bp1.z - 6) < 0.05))) {
                console.log("collision");
                bpawn1.bprmv()

            }

            if (((Math.abs(wki.x - bp2.x + 1.05) < 0.05) && (Math.abs(wki.z - bp2.z - 6) < 0.05))) {
                console.log("collision");
                bpawn2.bprmv()
            }


            if (((Math.abs(wki.x - bp3.x + 1.05) < 0.05) && (Math.abs(wki.z - bp3.z - 6) < 0.05))) {
                console.log("collision");
                bpawn3.bprmv()
            }


            if (((Math.abs(wki.x - bp4.x + 1.05) < 0.05) && (Math.abs(wki.z - bp4.z - 6) < 0.05))) {
                console.log("collision");
                bpawn4.bprmv()

            }

            if (((Math.abs(wki.x - bp5.x + 1.05) < 0.05) && (Math.abs(wki.z - bp5.z - 6) < 0.05))) {
                console.log("collision");
                bpawn5.bprmv()

            }

            if (((Math.abs(wki.x - bp6.x + 1.05) < 0.05) && (Math.abs(wki.z - bp6.z - 6) < 0.05))) {
                console.log("collision");
                bpawn6.bprmv()

            }


            if (((Math.abs(wki.x - bp7.x + 1.05) < 0.05) && (Math.abs(wki.z - bp7.z - 6) < 0.05))) {
                console.log("collision");
                bpawn7.bprmv()

            }

            if ((Math.abs(wki.x - bp8.x + 1.05) < 0.05) && (Math.abs(wki.z - bp8.z - 6) < 0.05)) {
                console.log("collision");
                bpawn8.bprmv()

            }


            if (((Math.abs(wki.x - br1.x - 3) < 0.05) && (Math.abs(wki.z - br1.z - 7) < 0.05))) {
                console.log("collision");
                brook1.brrmv()
            }
            if (((Math.abs(wki.x - br2.x - 3) < 0.05) && (Math.abs(wki.z - br2.z - 7) < 0.05))) {
                console.log("collision");
                brook2.brrmv()
            }








            if (((Math.abs(wki.x - bb1.x - 1) <= 0.05) && (Math.abs(wki.z - bb1.z - 7) < 0.05))) {
                console.log("collision");
                bbishop1.bbrmv();
            }

            if ((Math.abs(wki.x - bb2.x - 1) <= 0.05) && (Math.abs(wki.z - bb2.z - 7) < 0.05)) {
                console.log("collision");
                bbishop2.bbrmv();
            }




            if (((Math.abs(wki.x - bk2.x - 2) < 0.05) && (Math.abs(wki.z - bk2.z - 7) < 0.05))) {
                console.log("collision");
                bknight2.bkrmv()

            }

            if (((Math.abs(wki.x - bk1.x - 2) < 0.05) && (Math.abs(wki.z - bk1.z - 7) < 0.05))) {
                console.log("collision");
                bknight1.bkrmv()

            }


            if (((Math.abs(wki.x - bq.x + 1) < 0.05) && (Math.abs(wki.z - bq.z - 7) < 0.05))) {
                console.log("collision");
                bqueen.bqrmv()
            }
            if (((Math.abs(wki.x - bq.x + 1) < 0.05) && (Math.abs(wki.z - bq.z - 7) < 0.05))) {
                console.log("collision");
                bqueen.bqrmv()
            }




            rmvLyr()
            domEvents.removeEventListener(select, 'click')
            turn = 'b'

            clicked = false;
        })
    }

    if ((px + 1.45) < 4) {
        let select1 = new THREE.Mesh(plane_geo, plane_mat);
        select1.position.set(px + 1.45, 0.2, pz - 7 + 0.35)
        select1.rotation.x = -90 * (Math.PI / 180)
        layer.add(select1)

        domEvents.addEventListener(select1, 'click', () => {

            obj.position.set(px + 1, -0.8, pz)
            wki = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }

            if (((Math.abs(wki.x - bp1.x + 1.05) < 0.05) && (Math.abs(wki.z - bp1.z - 6) < 0.05))) {
                console.log("collision");
                bpawn1.bprmv()

            }

            if (((Math.abs(wki.x - bp2.x + 1.05) < 0.05) && (Math.abs(wki.z - bp2.z - 6) < 0.05))) {
                console.log("collision");
                bpawn2.bprmv()
            }


            if (((Math.abs(wki.x - bp3.x + 1.05) < 0.05) && (Math.abs(wki.z - bp3.z - 6) < 0.05))) {
                console.log("collision");
                bpawn3.bprmv()
            }


            if (((Math.abs(wki.x - bp4.x + 1.05) < 0.05) && (Math.abs(wki.z - bp4.z - 6) < 0.05))) {
                console.log("collision");
                bpawn4.bprmv()

            }

            if (((Math.abs(wki.x - bp5.x + 1.05) < 0.05) && (Math.abs(wki.z - bp5.z - 6) < 0.05))) {
                console.log("collision");
                bpawn5.bprmv()

            }

            if (((Math.abs(wki.x - bp6.x + 1.05) < 0.05) && (Math.abs(wki.z - bp6.z - 6) < 0.05))) {
                console.log("collision");
                bpawn6.bprmv()

            }


            if (((Math.abs(wki.x - bp7.x + 1.05) < 0.05) && (Math.abs(wki.z - bp7.z - 6) < 0.05))) {
                console.log("collision");
                bpawn7.bprmv()

            }

            if ((Math.abs(wki.x - bp8.x + 1.05) < 0.05) && (Math.abs(wki.z - bp8.z - 6) < 0.05)) {
                console.log("collision");
                bpawn8.bprmv()

            }


            if (((Math.abs(wki.x - br1.x - 3) < 0.05) && (Math.abs(wki.z - br1.z - 7) < 0.05))) {
                console.log("collision");
                brook1.brrmv()
            }
            if (((Math.abs(wki.x - br2.x - 3) < 0.05) && (Math.abs(wki.z - br2.z - 7) < 0.05))) {
                console.log("collision");
                brook2.brrmv()
            }








            if (((Math.abs(wki.x - bb1.x - 1) <= 0.05) && (Math.abs(wki.z - bb1.z - 7) < 0.05))) {
                console.log("collision");
                bbishop1.bbrmv();
            }

            if ((Math.abs(wki.x - bb2.x - 1) <= 0.05) && (Math.abs(wki.z - bb2.z - 7) < 0.05)) {
                console.log("collision");
                bbishop2.bbrmv();
            }




            if (((Math.abs(wki.x - bk2.x - 2) < 0.05) && (Math.abs(wki.z - bk2.z - 7) < 0.05))) {
                console.log("collision");
                bknight2.bkrmv()

            }

            if (((Math.abs(wki.x - bk1.x - 2) < 0.05) && (Math.abs(wki.z - bk1.z - 7) < 0.05))) {
                console.log("collision");
                bknight1.bkrmv()

            }


            if (((Math.abs(wki.x - bq.x + 1) < 0.05) && (Math.abs(wki.z - bq.z - 7) < 0.05))) {
                console.log("collision");
                bqueen.bqrmv()
            }
            if (((Math.abs(wki.x - bq.x + 1) < 0.05) && (Math.abs(wki.z - bq.z - 7) < 0.05))) {
                console.log("collision");
                bqueen.bqrmv()
            }

            rmvLyr()
            domEvents.removeEventListener(select1, 'click')
            turn = 'b'

            clicked = false;
        })
    }

    if ((px + 1.45) < 4 && (pz - 7 + 1.35) < 4) {
        let select2 = new THREE.Mesh(plane_geo, plane_mat);
        select2.position.set(px + 1.45, 0.2, pz - 7 + 1.35)
        select2.rotation.x = -90 * (Math.PI / 180)
        layer.add(select2)

        domEvents.addEventListener(select2, 'click', () => {

            obj.position.set(px + 1, -0.8, pz + 1)
            wki = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }

            if (((Math.abs(wki.x - bp1.x + 1.05) < 0.05) && (Math.abs(wki.z - bp1.z - 6) < 0.05))) {
                console.log("collision");
                bpawn1.bprmv()

            }

            if (((Math.abs(wki.x - bp2.x + 1.05) < 0.05) && (Math.abs(wki.z - bp2.z - 6) < 0.05))) {
                console.log("collision");
                bpawn2.bprmv()
            }


            if (((Math.abs(wki.x - bp3.x + 1.05) < 0.05) && (Math.abs(wki.z - bp3.z - 6) < 0.05))) {
                console.log("collision");
                bpawn3.bprmv()
            }


            if (((Math.abs(wki.x - bp4.x + 1.05) < 0.05) && (Math.abs(wki.z - bp4.z - 6) < 0.05))) {
                console.log("collision");
                bpawn4.bprmv()

            }

            if (((Math.abs(wki.x - bp5.x + 1.05) < 0.05) && (Math.abs(wki.z - bp5.z - 6) < 0.05))) {
                console.log("collision");
                bpawn5.bprmv()

            }

            if (((Math.abs(wki.x - bp6.x + 1.05) < 0.05) && (Math.abs(wki.z - bp6.z - 6) < 0.05))) {
                console.log("collision");
                bpawn6.bprmv()

            }


            if (((Math.abs(wki.x - bp7.x + 1.05) < 0.05) && (Math.abs(wki.z - bp7.z - 6) < 0.05))) {
                console.log("collision");
                bpawn7.bprmv()

            }

            if ((Math.abs(wki.x - bp8.x + 1.05) < 0.05) && (Math.abs(wki.z - bp8.z - 6) < 0.05)) {
                console.log("collision");
                bpawn8.bprmv()

            }


            if (((Math.abs(wki.x - br1.x - 3) < 0.05) && (Math.abs(wki.z - br1.z - 7) < 0.05))) {
                console.log("collision");
                brook1.brrmv()
            }
            if (((Math.abs(wki.x - br2.x - 3) < 0.05) && (Math.abs(wki.z - br2.z - 7) < 0.05))) {
                console.log("collision");
                brook2.brrmv()
            }








            if (((Math.abs(wki.x - bb1.x - 1) <= 0.05) && (Math.abs(wki.z - bb1.z - 7) < 0.05))) {
                console.log("collision");
                bbishop1.bbrmv();
            }

            if ((Math.abs(wki.x - bb2.x - 1) <= 0.05) && (Math.abs(wki.z - bb2.z - 7) < 0.05)) {
                console.log("collision");
                bbishop2.bbrmv();
            }




            if (((Math.abs(wki.x - bk2.x - 2) < 0.05) && (Math.abs(wki.z - bk2.z - 7) < 0.05))) {
                console.log("collision");
                bknight2.bkrmv()

            }

            if (((Math.abs(wki.x - bk1.x - 2) < 0.05) && (Math.abs(wki.z - bk1.z - 7) < 0.05))) {
                console.log("collision");
                bknight1.bkrmv()

            }


            if (((Math.abs(wki.x - bq.x + 1) < 0.05) && (Math.abs(wki.z - bq.z - 7) < 0.05))) {
                console.log("collision");
                bqueen.bqrmv()
            }
            if (((Math.abs(wki.x - bq.x + 1) < 0.05) && (Math.abs(wki.z - bq.z - 7) < 0.05))) {
                console.log("collision");
                bqueen.bqrmv()
            }

            rmvLyr()
            domEvents.removeEventListener(select2, 'click')

            turn = 'b'

            clicked = false;
        })
    }

    if ((px - 0.55) > -4 && (pz - 7 + 1.35) < 4) {
        let select3 = new THREE.Mesh(plane_geo, plane_mat);
        select3.position.set(px - 0.55, 0.2, pz - 7 + 1.35)
        select3.rotation.x = -90 * (Math.PI / 180)
        layer.add(select3)

        domEvents.addEventListener(select3, 'click', () => {

            obj.position.set(px - 1, -0.8, pz + 1)
            wki = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }

            if (((Math.abs(wki.x - bp1.x + 1.05) < 0.05) && (Math.abs(wki.z - bp1.z - 6) < 0.05))) {
                console.log("collision");
                bpawn1.bprmv()

            }

            if (((Math.abs(wki.x - bp2.x + 1.05) < 0.05) && (Math.abs(wki.z - bp2.z - 6) < 0.05))) {
                console.log("collision");
                bpawn2.bprmv()
            }


            if (((Math.abs(wki.x - bp3.x + 1.05) < 0.05) && (Math.abs(wki.z - bp3.z - 6) < 0.05))) {
                console.log("collision");
                bpawn3.bprmv()
            }


            if (((Math.abs(wki.x - bp4.x + 1.05) < 0.05) && (Math.abs(wki.z - bp4.z - 6) < 0.05))) {
                console.log("collision");
                bpawn4.bprmv()

            }

            if (((Math.abs(wki.x - bp5.x + 1.05) < 0.05) && (Math.abs(wki.z - bp5.z - 6) < 0.05))) {
                console.log("collision");
                bpawn5.bprmv()

            }

            if (((Math.abs(wki.x - bp6.x + 1.05) < 0.05) && (Math.abs(wki.z - bp6.z - 6) < 0.05))) {
                console.log("collision");
                bpawn6.bprmv()

            }


            if (((Math.abs(wki.x - bp7.x + 1.05) < 0.05) && (Math.abs(wki.z - bp7.z - 6) < 0.05))) {
                console.log("collision");
                bpawn7.bprmv()

            }

            if ((Math.abs(wki.x - bp8.x + 1.05) < 0.05) && (Math.abs(wki.z - bp8.z - 6) < 0.05)) {
                console.log("collision");
                bpawn8.bprmv()

            }


            if (((Math.abs(wki.x - br1.x - 3) < 0.05) && (Math.abs(wki.z - br1.z - 7) < 0.05))) {
                console.log("collision");
                brook1.brrmv()
            }
            if (((Math.abs(wki.x - br2.x - 3) < 0.05) && (Math.abs(wki.z - br2.z - 7) < 0.05))) {
                console.log("collision");
                brook2.brrmv()
            }








            if (((Math.abs(wki.x - bb1.x - 1) <= 0.05) && (Math.abs(wki.z - bb1.z - 7) < 0.05))) {
                console.log("collision");
                bbishop1.bbrmv();
            }

            if ((Math.abs(wki.x - bb2.x - 1) <= 0.05) && (Math.abs(wki.z - bb2.z - 7) < 0.05)) {
                console.log("collision");
                bbishop2.bbrmv();
            }




            if (((Math.abs(wki.x - bk2.x - 2) < 0.05) && (Math.abs(wki.z - bk2.z - 7) < 0.05))) {
                console.log("collision");
                bknight2.bkrmv()

            }

            if (((Math.abs(wki.x - bk1.x - 2) < 0.05) && (Math.abs(wki.z - bk1.z - 7) < 0.05))) {
                console.log("collision");
                bknight1.bkrmv()

            }


            if (((Math.abs(wki.x - bq.x + 1) < 0.05) && (Math.abs(wki.z - bq.z - 7) < 0.05))) {
                console.log("collision");
                bqueen.bqrmv()
            }
            if (((Math.abs(wki.x - bq.x + 1) < 0.05) && (Math.abs(wki.z - bq.z - 7) < 0.05))) {
                console.log("collision");
                bqueen.bqrmv()
            }

            rmvLyr()
            domEvents.removeEventListener(select3, 'click')

            turn = 'b'

            clicked = false;
        })
    }

    if ((pz - 7 + 1.35) < 4) {
        let select4 = new THREE.Mesh(plane_geo, plane_mat);
        select4.position.set(px + 0.45, 0.2, pz - 7 + 1.35)
        select4.rotation.x = -90 * (Math.PI / 180)
        layer.add(select4)

        domEvents.addEventListener(select4, 'click', () => {

            obj.position.set(px, -0.8, pz + 1)
            wki = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }

            if (((Math.abs(wki.x - bp1.x + 1.05) < 0.05) && (Math.abs(wki.z - bp1.z - 6) < 0.05))) {
                console.log("collision");
                bpawn1.bprmv()

            }

            if (((Math.abs(wki.x - bp2.x + 1.05) < 0.05) && (Math.abs(wki.z - bp2.z - 6) < 0.05))) {
                console.log("collision");
                bpawn2.bprmv()
            }


            if (((Math.abs(wki.x - bp3.x + 1.05) < 0.05) && (Math.abs(wki.z - bp3.z - 6) < 0.05))) {
                console.log("collision");
                bpawn3.bprmv()
            }


            if (((Math.abs(wki.x - bp4.x + 1.05) < 0.05) && (Math.abs(wki.z - bp4.z - 6) < 0.05))) {
                console.log("collision");
                bpawn4.bprmv()

            }

            if (((Math.abs(wki.x - bp5.x + 1.05) < 0.05) && (Math.abs(wki.z - bp5.z - 6) < 0.05))) {
                console.log("collision");
                bpawn5.bprmv()

            }

            if (((Math.abs(wki.x - bp6.x + 1.05) < 0.05) && (Math.abs(wki.z - bp6.z - 6) < 0.05))) {
                console.log("collision");
                bpawn6.bprmv()

            }


            if (((Math.abs(wki.x - bp7.x + 1.05) < 0.05) && (Math.abs(wki.z - bp7.z - 6) < 0.05))) {
                console.log("collision");
                bpawn7.bprmv()

            }

            if ((Math.abs(wki.x - bp8.x + 1.05) < 0.05) && (Math.abs(wki.z - bp8.z - 6) < 0.05)) {
                console.log("collision");
                bpawn8.bprmv()

            }


            if (((Math.abs(wki.x - br1.x - 3) < 0.05) && (Math.abs(wki.z - br1.z - 7) < 0.05))) {
                console.log("collision");
                brook1.brrmv()
            }
            if (((Math.abs(wki.x - br2.x - 3) < 0.05) && (Math.abs(wki.z - br2.z - 7) < 0.05))) {
                console.log("collision");
                brook2.brrmv()
            }








            if (((Math.abs(wki.x - bb1.x - 1) <= 0.05) && (Math.abs(wki.z - bb1.z - 7) < 0.05))) {
                console.log("collision");
                bbishop1.bbrmv();
            }

            if ((Math.abs(wki.x - bb2.x - 1) <= 0.05) && (Math.abs(wki.z - bb2.z - 7) < 0.05)) {
                console.log("collision");
                bbishop2.bbrmv();
            }




            if (((Math.abs(wki.x - bk2.x - 2) < 0.05) && (Math.abs(wki.z - bk2.z - 7) < 0.05))) {
                console.log("collision");
                bknight2.bkrmv()

            }

            if (((Math.abs(wki.x - bk1.x - 2) < 0.05) && (Math.abs(wki.z - bk1.z - 7) < 0.05))) {
                console.log("collision");
                bknight1.bkrmv()

            }


            if (((Math.abs(wki.x - bq.x + 1) < 0.05) && (Math.abs(wki.z - bq.z - 7) < 0.05))) {
                console.log("collision");
                bqueen.bqrmv()
            }
            if (((Math.abs(wki.x - bq.x + 1) < 0.05) && (Math.abs(wki.z - bq.z - 7) < 0.05))) {
                console.log("collision");
                bqueen.bqrmv()
            }

            rmvLyr()
            domEvents.removeEventListener(select4, 'click')

            turn = 'b'

            clicked = false;
        })
    }

    if ((pz - 7 - 0.75) > -4) {
        let select5 = new THREE.Mesh(plane_geo, plane_mat);
        select5.position.set(px + 0.45, 0.2, pz - 7 - 0.75)
        select5.rotation.x = -90 * (Math.PI / 180)
        layer.add(select5)

        domEvents.addEventListener(select5, 'click', () => {

            obj.position.set(px, -0.8, pz - 1)
            wki = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }

            if (((Math.abs(wki.x - bp1.x + 1.05) < 0.05) && (Math.abs(wki.z - bp1.z - 6) < 0.05))) {
                console.log("collision");
                bpawn1.bprmv()

            }

            if (((Math.abs(wki.x - bp2.x + 1.05) < 0.05) && (Math.abs(wki.z - bp2.z - 6) < 0.05))) {
                console.log("collision");
                bpawn2.bprmv()
            }


            if (((Math.abs(wki.x - bp3.x + 1.05) < 0.05) && (Math.abs(wki.z - bp3.z - 6) < 0.05))) {
                console.log("collision");
                bpawn3.bprmv()
            }


            if (((Math.abs(wki.x - bp4.x + 1.05) < 0.05) && (Math.abs(wki.z - bp4.z - 6) < 0.05))) {
                console.log("collision");
                bpawn4.bprmv()

            }

            if (((Math.abs(wki.x - bp5.x + 1.05) < 0.05) && (Math.abs(wki.z - bp5.z - 6) < 0.05))) {
                console.log("collision");
                bpawn5.bprmv()

            }

            if (((Math.abs(wki.x - bp6.x + 1.05) < 0.05) && (Math.abs(wki.z - bp6.z - 6) < 0.05))) {
                console.log("collision");
                bpawn6.bprmv()

            }


            if (((Math.abs(wki.x - bp7.x + 1.05) < 0.05) && (Math.abs(wki.z - bp7.z - 6) < 0.05))) {
                console.log("collision");
                bpawn7.bprmv()

            }

            if ((Math.abs(wki.x - bp8.x + 1.05) < 0.05) && (Math.abs(wki.z - bp8.z - 6) < 0.05)) {
                console.log("collision");
                bpawn8.bprmv()

            }


            if (((Math.abs(wki.x - br1.x - 3) < 0.05) && (Math.abs(wki.z - br1.z - 7) < 0.05))) {
                console.log("collision");
                brook1.brrmv()
            }
            if (((Math.abs(wki.x - br2.x - 3) < 0.05) && (Math.abs(wki.z - br2.z - 7) < 0.05))) {
                console.log("collision");
                brook2.brrmv()
            }








            if (((Math.abs(wki.x - bb1.x - 1) <= 0.05) && (Math.abs(wki.z - bb1.z - 7) < 0.05))) {
                console.log("collision");
                bbishop1.bbrmv();
            }

            if ((Math.abs(wki.x - bb2.x - 1) <= 0.05) && (Math.abs(wki.z - bb2.z - 7) < 0.05)) {
                console.log("collision");
                bbishop2.bbrmv();
            }




            if (((Math.abs(wki.x - bk2.x - 2) < 0.05) && (Math.abs(wki.z - bk2.z - 7) < 0.05))) {
                console.log("collision");
                bknight2.bkrmv()

            }

            if (((Math.abs(wki.x - bk1.x - 2) < 0.05) && (Math.abs(wki.z - bk1.z - 7) < 0.05))) {
                console.log("collision");
                bknight1.bkrmv()

            }


            if (((Math.abs(wki.x - bq.x + 1) < 0.05) && (Math.abs(wki.z - bq.z - 7) < 0.05))) {
                console.log("collision");
                bqueen.bqrmv()
            }
            if (((Math.abs(wki.x - bq.x + 1) < 0.05) && (Math.abs(wki.z - bq.z - 7) < 0.05))) {
                console.log("collision");
                bqueen.bqrmv()
            }

            rmvLyr()
            domEvents.removeEventListener(select5, 'click')

            turn = 'b'

            clicked = false;
        })
    }

    if ((px - 0.55) > -4 && (pz - 7 - 0.75) > -4) {
        let select6 = new THREE.Mesh(plane_geo, plane_mat);
        select6.position.set(px - 0.55, 0.2, pz - 7 - 0.75)
        select6.rotation.x = -90 * (Math.PI / 180)
        layer.add(select6)

        domEvents.addEventListener(select6, 'click', () => {

            obj.position.set(px - 1, -0.8, pz - 1)
            wki = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }

            if (((Math.abs(wki.x - bp1.x + 1.05) < 0.05) && (Math.abs(wki.z - bp1.z - 6) < 0.05))) {
                console.log("collision");
                bpawn1.bprmv()

            }

            if (((Math.abs(wki.x - bp2.x + 1.05) < 0.05) && (Math.abs(wki.z - bp2.z - 6) < 0.05))) {
                console.log("collision");
                bpawn2.bprmv()
            }


            if (((Math.abs(wki.x - bp3.x + 1.05) < 0.05) && (Math.abs(wki.z - bp3.z - 6) < 0.05))) {
                console.log("collision");
                bpawn3.bprmv()
            }


            if (((Math.abs(wki.x - bp4.x + 1.05) < 0.05) && (Math.abs(wki.z - bp4.z - 6) < 0.05))) {
                console.log("collision");
                bpawn4.bprmv()

            }

            if (((Math.abs(wki.x - bp5.x + 1.05) < 0.05) && (Math.abs(wki.z - bp5.z - 6) < 0.05))) {
                console.log("collision");
                bpawn5.bprmv()

            }

            if (((Math.abs(wki.x - bp6.x + 1.05) < 0.05) && (Math.abs(wki.z - bp6.z - 6) < 0.05))) {
                console.log("collision");
                bpawn6.bprmv()

            }


            if (((Math.abs(wki.x - bp7.x + 1.05) < 0.05) && (Math.abs(wki.z - bp7.z - 6) < 0.05))) {
                console.log("collision");
                bpawn7.bprmv()

            }

            if ((Math.abs(wki.x - bp8.x + 1.05) < 0.05) && (Math.abs(wki.z - bp8.z - 6) < 0.05)) {
                console.log("collision");
                bpawn8.bprmv()

            }


            if (((Math.abs(wki.x - br1.x - 3) < 0.05) && (Math.abs(wki.z - br1.z - 7) < 0.05))) {
                console.log("collision");
                brook1.brrmv()
            }
            if (((Math.abs(wki.x - br2.x - 3) < 0.05) && (Math.abs(wki.z - br2.z - 7) < 0.05))) {
                console.log("collision");
                brook2.brrmv()
            }








            if (((Math.abs(wki.x - bb1.x - 1) <= 0.05) && (Math.abs(wki.z - bb1.z - 7) < 0.05))) {
                console.log("collision");
                bbishop1.bbrmv();
            }

            if ((Math.abs(wki.x - bb2.x - 1) <= 0.05) && (Math.abs(wki.z - bb2.z - 7) < 0.05)) {
                console.log("collision");
                bbishop2.bbrmv();
            }




            if (((Math.abs(wki.x - bk2.x - 2) < 0.05) && (Math.abs(wki.z - bk2.z - 7) < 0.05))) {
                console.log("collision");
                bknight2.bkrmv()

            }

            if (((Math.abs(wki.x - bk1.x - 2) < 0.05) && (Math.abs(wki.z - bk1.z - 7) < 0.05))) {
                console.log("collision");
                bknight1.bkrmv()

            }


            if (((Math.abs(wki.x - bq.x + 1) < 0.05) && (Math.abs(wki.z - bq.z - 7) < 0.05))) {
                console.log("collision");
                bqueen.bqrmv()
            }
            if (((Math.abs(wki.x - bq.x + 1) < 0.05) && (Math.abs(wki.z - bq.z - 7) < 0.05))) {
                console.log("collision");
                bqueen.bqrmv()
            }
            rmvLyr()
            domEvents.removeEventListener(select6, 'click')

            turn = 'b'

            clicked = false;
        })
    }

    if ((px + 1.45) < 4 && (pz - 7 - 0.75) > - 4) {
        let select7 = new THREE.Mesh(plane_geo, plane_mat);
        select7.position.set(px + 1.45, 0.2, pz - 7 - 0.75)
        select7.rotation.x = -90 * (Math.PI / 180)
        layer.add(select7)

        domEvents.addEventListener(select7, 'click', () => {

            obj.position.set(px + 1, -0.8, pz - 1)
            wki = { x: obj.getWorldPosition(worldPosition).x, z: obj.getWorldPosition(worldPosition).z }

            if (((Math.abs(wki.x - bp1.x + 1.05) < 0.05) && (Math.abs(wki.z - bp1.z - 6) < 0.05))) {
                console.log("collision");
                bpawn1.bprmv()

            }

            if (((Math.abs(wki.x - bp2.x + 1.05) < 0.05) && (Math.abs(wki.z - bp2.z - 6) < 0.05))) {
                console.log("collision");
                bpawn2.bprmv()
            }


            if (((Math.abs(wki.x - bp3.x + 1.05) < 0.05) && (Math.abs(wki.z - bp3.z - 6) < 0.05))) {
                console.log("collision");
                bpawn3.bprmv()
            }


            if (((Math.abs(wki.x - bp4.x + 1.05) < 0.05) && (Math.abs(wki.z - bp4.z - 6) < 0.05))) {
                console.log("collision");
                bpawn4.bprmv()

            }

            if (((Math.abs(wki.x - bp5.x + 1.05) < 0.05) && (Math.abs(wki.z - bp5.z - 6) < 0.05))) {
                console.log("collision");
                bpawn5.bprmv()

            }

            if (((Math.abs(wki.x - bp6.x + 1.05) < 0.05) && (Math.abs(wki.z - bp6.z - 6) < 0.05))) {
                console.log("collision");
                bpawn6.bprmv()

            }


            if (((Math.abs(wki.x - bp7.x + 1.05) < 0.05) && (Math.abs(wki.z - bp7.z - 6) < 0.05))) {
                console.log("collision");
                bpawn7.bprmv()

            }

            if ((Math.abs(wki.x - bp8.x + 1.05) < 0.05) && (Math.abs(wki.z - bp8.z - 6) < 0.05)) {
                console.log("collision");
                bpawn8.bprmv()

            }


            if (((Math.abs(wki.x - br1.x - 3) < 0.05) && (Math.abs(wki.z - br1.z - 7) < 0.05))) {
                console.log("collision");
                brook1.brrmv()
            }
            if (((Math.abs(wki.x - br2.x - 3) < 0.05) && (Math.abs(wki.z - br2.z - 7) < 0.05))) {
                console.log("collision");
                brook2.brrmv()
            }








            if (((Math.abs(wki.x - bb1.x - 1) <= 0.05) && (Math.abs(wki.z - bb1.z - 7) < 0.05))) {
                console.log("collision");
                bbishop1.bbrmv();
            }

            if ((Math.abs(wki.x - bb2.x - 1) <= 0.05) && (Math.abs(wki.z - bb2.z - 7) < 0.05)) {
                console.log("collision");
                bbishop2.bbrmv();
            }
            
            if (((Math.abs(wki.x - bk2.x - 2) < 0.05) && (Math.abs(wki.z - bk2.z - 7) < 0.05))) {
                console.log("collision");
                bknight2.bkrmv()

            }

            if (((Math.abs(wki.x - bk1.x - 2) < 0.05) && (Math.abs(wki.z - bk1.z - 7) < 0.05))) {
                console.log("collision");
                bknight1.bkrmv()

            }


            if (((Math.abs(wki.x - bq.x + 1) < 0.05) && (Math.abs(wki.z - bq.z - 7) < 0.05))) {
                console.log("collision");
                bqueen.bqrmv()
            }
            if (((Math.abs(wki.x - bq.x + 1) < 0.05) && (Math.abs(wki.z - bq.z - 7) < 0.05))) {
                console.log("collision");
                bqueen.bqrmv()
            }
            rmvLyr()
            domEvents.removeEventListener(select7, 'click')

            turn = 'b'

            clicked = false;
        })
    }
    board.add(layer)
}

