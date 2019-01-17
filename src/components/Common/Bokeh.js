import React from 'react';
import PropTypes from 'prop-types';
import * as THREE from 'three';
// eslint-disable-next-line
import * as VertexShader from 'raw-loader!glslify-loader!./bokeh-vertexshader.vert';
// eslint-disable-next-line
import * as FragmentShader from 'raw-loader!glslify-loader!./bokeh-fragmentshader.vert';
import { BokehContainer } from './boken-styled';
import withViewport from '../../helpers/withViewport';

class Bokeh extends React.Component {
  constructor(props) {
    super(props);
    this.mount = null;
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.geometry = null;
    this.particlesystem = null;
    this.particles = 40;
    this.mouseX = 0;
    this.mouseY = 0;
    this.windowHalfX = 0;
    this.windowHalfY = 0;
    this.frameId = null;
    this.onResize = this.onResize.bind(this);
    this.loop = this.loop.bind(this);
    this.onDocumentMouseMove = this.onDocumentMouseMove.bind(this);
    this.onDocumentTouchStart = this.onDocumentTouchStart.bind(this);
    this.onDocumentTouchMove = this.onDocumentTouchMove.bind(this);
  }

  componentDidMount() {
    const { vw, vh } = this.props;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, vw / vh, 1, 1000);
    this.camera.position.z = 120;

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setClearColor(0x000000, 0.05);
    this.mount.append(this.renderer.domElement);

    const uniforms = {
      color: { value: new THREE.Color(0xffffff) },
      texture: { value: new THREE.TextureLoader().load('/bokeh/texture.png') },
      screenWidth: { value: vw },
      screenHeight: { value: vh },
    };
    const shaderMaterial = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: VertexShader,
      fragmentShader: FragmentShader,
      blending: THREE.AdditiveBlending,
      depthTest: false,
      transparent: true,
    });

    const radius = 100;

    this.geometry = new THREE.BufferGeometry();

    const positions = new Float32Array(this.particles * 3);
    const colors = new Float32Array(this.particles * 3);
    const sizes = new Float32Array(this.particles);

    const color = new THREE.Color();

    for (let i = 0, i3 = 0; i < this.particles; i++, i3 += 3) {
      if (i > this.particles * 0.4) {
        positions[i3 + 0] = (Math.random() * 2 - 1) * radius * 1.2;
        positions[i3 + 1] = (Math.random() * 2 - 1) * radius * 1;
        positions[i3 + 2] = (Math.random() * 2 - 1) * radius * 1.2;

        sizes[i] = 100 + Math.random() * 30;
      } else {
        positions[i3 + 0] = (Math.random() * 2 - 1) * radius * 0.75;
        positions[i3 + 1] = (Math.random() * 2 - 1) * radius * 0.5;
        positions[i3 + 2] = (Math.random() * 2 - 1) * radius * 0.75;

        sizes[i] = 25 + Math.random() * 10;
      }

      color.setHSL(i / this.particles, 0.5, 0.3);

      colors[i3 + 0] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
    }

    this.geometry.addAttribute('position', new THREE.BufferAttribute(positions, 3));
    this.geometry.addAttribute('customColor', new THREE.BufferAttribute(colors, 3));
    this.geometry.addAttribute('size', new THREE.BufferAttribute(sizes, 1));

    this.particlesystem = new THREE.Points(this.geometry, shaderMaterial);

    this.scene.add(this.particlesystem);

    this.onResize();

    // Render Loop
    this.loop();

    // event
    window.document.addEventListener('mousemove', this.onDocumentMouseMove, false);
    window.document.addEventListener('touchstart', this.onDocumentTouchStart, false);
    window.document.addEventListener('touchmove', this.onDocumentTouchMove, false);
  }

  componentDidUpdate(prevProps) {
    const { vw: prevVW, vh: prevVH } = prevProps;
    const { vw, vh } = this.props;

    if (vw !== prevVW || vh !== prevVH) {
      this.onResize(vw, vh);
    }
  }

  componentWillUnmount() {
    if (this.frameId) {
      cancelAnimationFrame(this.frameId);
    }

    this.mount.removeChild(this.renderer.domElement);

    window.document.removeEventListener('mousemove', this.onDocumentMouseMove, false);
    window.document.removeEventListener('touchstart', this.onDocumentTouchStart, false);
    window.document.removeEventListener('touchmove', this.onDocumentTouchMove, false);
  }

  onDocumentMouseMove(e) {
    this.mouseX = ((e.clientX - this.windowHalfX) / this.windowHalfX) * 80;
    this.mouseY = ((e.clientY - this.windowHalfY) / this.windowHalfY) * 30;
  }

  onDocumentTouchStart(e) {
    if (e.touches.length === 1) {
      this.mouseX = ((e.touches[0].pageX - this.windowHalfX) / this.windowHalfX) * 80;
      this.mouseY = ((e.touches[0].pageY - this.windowHalfY) / this.windowHalfY) * 30;
    }
  }

  onDocumentTouchMove(e) {
    if (e.touches.length === 1) {
      this.mouseX = ((e.touches[0].pageX - this.windowHalfX) / this.windowHalfX) * 80;
      this.mouseY = ((e.touches[0].pageY - this.windowHalfY) / this.windowHalfY) * 30;
    }
  }

  onResize(width, height) {
    this.windowHalfX = width / 2;
    this.windowHalfY = height / 2;

    this.particlesystem.material.uniforms.screenHeight.value = height;
    this.particlesystem.material.uniforms.screenWidth.value = width;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);
  }

  loop() {
    this.frameId = requestAnimationFrame(this.loop);

    const time = Date.now() * 0.001;

    this.camera.position.x += (-this.mouseX - this.camera.position.x) * 0.01;
    this.camera.position.y += (this.mouseY - this.camera.position.y) * 0.01;

    this.camera.lookAt(this.scene.position);

    this.particlesystem.rotation.y = -0.09 * time;

    const colors = this.geometry.attributes.customColor.array;
    const color = new THREE.Color();

    for (let i = 0, i3 = 0; i < this.particles; i++, i3 += 3) {
      color.setHSL(1 + Math.sin(0.1 * i + time * 0.1), 0.65, 0.45);

      colors[i3 + 0] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
    }

    this.geometry.attributes.customColor.needsUpdate = true;

    this.renderer.render(this.scene, this.camera);
  }

  render() {
    return (
      <BokehContainer
        ref={(el) => {
          this.mount = el;
        }}
      />
    );
  }
}

Bokeh.propTypes = {
  vh: PropTypes.number.isRequired,
  vw: PropTypes.number.isRequired,
};

export default withViewport()(Bokeh);
