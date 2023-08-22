new THREE.TextureLoad().load(url,(texture)=>{
  texture.encoding=THREE.sRGBEncoding;
  var img=texture.image;
  texture.wrapS=TRHEE.RepeatWrapping;
  texture.wrapT=THREE.RepeatWrapping;
  texture.anisotropy=16;
  var mat=new THREE.MeshBasicMaterial({map:texture,side:THREE.DoubleSide,transparent:true});
  //mat.collor=new THREE.Color(0xffffff);
  var geom=new THREE.PlaneGenmetry(img.width,img.height);
  var mesh=new THREE.Mesh(geom,mat);
  mesh.position.set(0,0,0);
  mesh.rotation.x=-Math.PI/2;
  mesh.renderOrder=0;
  that.scene.add(mesh);
});
