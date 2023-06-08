import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export class GLTFScene {

	constructor(properties){

		this.width = 100;
		this.height = 100;


		if(typeof properties === 'object'){
			this.width = properties.width ?? this.width;
			this.height = properties.height ?? this.height;
		}
	

		if (typeof window == 'undefined')
			return;
		
	
		this.isDragging = false;
		this.scene = new THREE.Scene();

		this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
		this.camera.position.z = 10;
	
		this.geometry = new THREE.BoxGeometry();

		this.directionalLight = new THREE.DirectionalLight(0x9090aa);
		this.directionalLight.position.set(-10, 10, -10).normalize();
		this.scene.add(this.directionalLight);
	
		this.hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444);
		this.hemisphereLight.position.set(1, 1, 1);
		this.scene.add(this.hemisphereLight);
	

		this.pointLight = new THREE.PointLight(0x000000,1.2);
		this.pointLight.position.set(-10, 10, -10).normalize();
		this.scene.add(this.pointLight);

		this.renderer = null;
	
		this.starnight = null;
		
		self = this;
		var loader = new GLTFLoader();
		loader.load( '/models/switch/scene.gltf', function ( gltf )
		{
	
			self.starnight = gltf.scene 
			self.starnight.castShadow = true;
			self.starnight.receiveShadow = true;

			
			self.scene.add(self.starnight);
		});     


		window.addEventListener('mousedown', this.onMouseDown.bind(this));
		window.addEventListener('mouseup', this.onMouseUp.bind(this));
		window.addEventListener('resize', this.resize);

		window.addEventListener('mousemove', (event) => {
			if (this.isDragging) {
				const mouseX = event.clientX;
				const mouseY = event.clientY;
				this.starnight.rotation.y += (mouseX - this.width / 2) * 0.00005;
				this.starnight.rotation.x += (mouseY - this.height / 2) * 0.00005;
				this.renderer.render(this.scene, this.camera);
			}
		});
	}

	onMouseDown(event) {
		this.isDragging = true;
	}
	  
	onMouseUp(event) {
		this.isDragging = false;
	}

	resize()  {
		this.renderer.setSize(this.width, this.height);
		this.camera.aspect = this.width / this.height;
		this.camera.updateProjectionMatrix();
	}

	animate(){
		
		requestAnimationFrame(()=>{
			this.animate()
		});
		if(!this.isDragging){
			// this.starnight.rotation.x += 0.01;
			// this.starnight.rotation.y += 0.01;
			this.renderer.render(this.scene, this.camera);
		}

	}

	createScene(el) {

		this.renderer = new THREE.WebGLRenderer({  antialias: true, canvas: el ,alpha: true });
		this.resize();
		this.animate();

	}

}
