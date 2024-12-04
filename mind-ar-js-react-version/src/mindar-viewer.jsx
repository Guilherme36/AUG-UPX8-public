import React, { useEffect, useRef } from 'react';
import 'aframe';
import 'mind-ar/dist/mindar-image-aframe.prod.js';

const MindarViewer = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    console.log("criaro ref", sceneRef);
    const sceneEl = sceneRef.current;
    const arSystem = sceneEl.systems["mindar-image-system"];
    console.log("arSystem -> ", arSystem);

    sceneEl.addEventListener('renderstart', () => {
      console.log("faz o start", arSystem);
      arSystem.start(); // start AR 
    });
    return () => {
      console.log("faz o stop ", arSystem);
      arSystem.stop();
    }
  }, []);

  return (
    <a-scene ref={sceneRef} mindar-image="imageTargetSrc: ./Fotos/targets_real.mind;" color-space="sRGB"
    renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false"
    device-orientation-permission-ui="enabled: false">
    <a-assets>
      <a-asset-item id="1_closedBox_edited" src="./Modelos3D/Carcaca/bomba.gltf"></a-asset-item>
      <a-asset-item id="2_unlockBox" src="./Modelos3D/Tranca_Giratoria/Tranca_Giratoria.gltf"></a-asset-item>
      <a-asset-item id="3_expositionBomb_edited" src="./Modelos3D/Fiacao/Fiacao.gltf"></a-asset-item>
      <a-asset-item id="4_blueCable" src="./Modelos3D/Fiacao/Fiacao.gltf"></a-asset-item>
      <a-asset-item id="5_redCable" src="./Modelos3D/Fiacao/Fiacao.gltf"></a-asset-item>
      <a-asset-item id="6_blackCable_edited" src="./Modelos3D/Fiacao/Fiacao.gltf"></a-asset-item>
    </a-assets>

    <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

    <a-entity mindar-image-target="targetIndex: 0">
      <a-text value="Bomba Identificada de modelo VX-12 Shadow, prosseguir com o desarmamento como mostrado na animacao abaixo" position="0 0.3 0" scale="0.2 0.2 0.2" align="center" color="#FFFFFF"></a-text>
      <a-gltf-model rotation="0 -90 0 " position="0 -0.25 0" scale="0.20 0.20 0.20" src="#1_closedBox_edited"
        animation-mixer />
    </a-entity>
    <a-entity mindar-image-target="targetIndex: 1">
      <a-gltf-model rotation="0 0 0 " position="0 -0.25 0" scale="0.05 0.05 0.05" src="#2_unlockBox" animation-mixer />
    </a-entity>
    <a-entity mindar-image-target="targetIndex: 2">
      <a-gltf-model rotation="0 0 0 " position="0 -0.25 0" scale="0.05 0.05 0.05" src="#3_expositionBomb_edited"
        animation-mixer />
    </a-entity>
    <a-entity mindar-image-target="targetIndex: 3">
      <a-gltf-model rotation="0 0 0 " position="0 -0.25 0" scale="0.05 0.05 0.05" src="#4_blueCable" animation-mixer />
    </a-entity>
    <a-entity mindar-image-target="targetIndex: 4">
      <a-gltf-model rotation="0 0 0 " position="0 -0.25 0" scale="0.05 0.05 0.05" src="#5_redCable" animation-mixer />
    </a-entity>
    <a-entity mindar-image-target="targetIndex: 5">
      <a-gltf-model rotation="0 0 0 " position="0 -0.25 0" scale="0.05 0.05 0.05" src="#6_blackCable_edited"
        animation-mixer />
    </a-entity>
  </a-scene>
  )
}

export default MindarViewer;