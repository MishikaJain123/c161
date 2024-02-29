AFRAME.registerComponent("bullets",{
    init:function(){
        this.shootBullet();
    },
    shootBullet:function(){
        window.addEventListener("keydown",e=>{
            var bullet = document.createElement("a-entity")
            bullet.setAttribute("geometry",{primitive:"sphere",radius:0.1})
            bullet.setAttribute("material","color","black")
            var camera = document.querySelector("#camera")
            var p = camera.getAttribute("position")
            bullet.setAttribute("position",{x:p.x,y:p.y,z:p.z})
            var camera1 = document.querySelector("#camera").object3D;
            var d = new THREE.Vector3()
            camera1.getWorldDirection(d)
            bullet.setAttribute("velocity",d.multiplyScalar(-15))
            var scene = document.querySelector("#scene")
            scene.appendChild(bullet)

        })
    }
})