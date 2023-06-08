import * as THREE from 'three';
import SplineLoader from '@splinetool/loader';



export class GitGuiScene {

    constructor(properties) {

        this.width = 100;
        this.height = 100;


        if (typeof properties === 'object') {
            this.width = properties.width ?? this.width;
            this.height = properties.height ?? this.height;
        }


        if (typeof window == 'undefined')
            return;


        this.isDragging = false;
        this.scene = new THREE.Scene();

        this.camera = new THREE.PerspectiveCamera(75, this.width / this.height, 0.1, 1000);
       // this.camera = new THREE.OrthographicCamera(0, this.width, 0, this.height);
        this.camera.position.z = 400;

        this.geometry = new THREE.BoxGeometry();

        this.directionalLight = new THREE.DirectionalLight(0x2D2E32,3.7);
        this.directionalLight.position.set(-150, 200, 200).normalize();
        this.scene.add(this.directionalLight);

        this.renderer = null;

        this.starnight = null;
     

        this.onLoadModel()
        window.addEventListener('mousedown', this.onMouseDown.bind(this));
        window.addEventListener('mouseup', this.onMouseUp.bind(this));
        window.addEventListener('resize', this.resize);

        window.addEventListener('mousemove', (event) => {
            if (this.isDragging && this.starnight != null) {
                this.mouseX = event.clientX;
                this.mouseY = event.clientY;
        
            }
        });
    }

    async onLoadModel(){
             
        // spline scene
     
        self = this;
        this.loader = new SplineLoader();
        this.loader.load(

            'https://prod.spline.design/6JqM5YunTZGiztNg/scene.splinecode',
            (splineScene) => {
                self.starnight = splineScene
                self.scene.add(self.starnight);
            }
        );

    }

    onMouseDown(event) {
        this.isDragging = true;
        this.mouseX = event.clientX;
        this.mouseY = event.clientY;

    }

    onMouseUp(event) {
        this.isDragging = false;
    }

    resize() {
        this.renderer.setSize(this.width, this.height);
        this.camera.aspect = this.width / this.height;
        this.camera.updateProjectionMatrix();
    }

    animate() {

        requestAnimationFrame(() => {
            this.animate()
        });

        if(this.starnight == null)
            return;

        if (!this.isDragging)  {
            this.starnight.rotation.y += 0.001;
        }else{
            this.starnight.rotation.y += ((this.mouseX ?? 0)- this.width / 2) * 0.00005;
            this.starnight.rotation.x += ((this.mouseY ?? 0 )- this.height / 2) * 0.00005;
          
        }
        this.renderer.render(this.scene, this.camera);
    }

    createScene(el) {

        this.renderer = new THREE.WebGLRenderer({ antialias: true, canvas: el, alpha: true });
        this.resize();
        this.animate();

    }

}
