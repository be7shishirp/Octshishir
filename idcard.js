const idcard = document.getElementById('idcard');
let isDragging=false, startX, rotateY=0;
idcard.addEventListener('mousedown', e=>{ isDragging=true; startX=e.pageX; });
idcard.addEventListener('mouseup', ()=>{ isDragging=false; });
idcard.addEventListener('mousemove', e=>{ if(!isDragging) return; let diffX=e.pageX-startX; rotateY+=diffX*0.5; idcard.style.transform=`rotateY(${rotateY}deg)`; startX=e.pageX; });
idcard.addEventListener('wheel', e=>{ e.preventDefault(); let scale=1+e.deltaY*-0.001; idcard.style.transform+=` scale(${scale})`; });
