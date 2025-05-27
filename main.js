// Software camera requirements:
const desiredDistance = [0.5, 5.0]; // in meters
const desiredLight = [100, 10000]; // in lux

// Hardware 1: Covers both requirements (should return true)
const cameraSet1 = [
  { distance: [0.3, 2.0], light: [50, 5000] },
  { distance: [1.0, 6.0], light: [100, 10000] },
  { distance: [0.5, 7.0], light: [200, 8000] },
];

// Hardware 2: Does not cover desired distance (should return false)
const cameraSet2 = [
  { distance: [1.0, 2.0], light: [100, 10000] },
  { distance: [2.1, 4.0], light: [200, 8000] },
];

// Hardware 3: Does not cover desired light (should return false)
const cameraSet3 = [
  { distance: [0.3, 6.0], light: [200, 5000] },
  { distance: [0.5, 5.0], light: [300, 9000] },
];

// Hardware 4: Covers both requirements with a single camera (should return true)
const cameraSet4 = [{ distance: [0.1, 10.0], light: [10, 20000] }];

// Hardware 5: No cameras (should return false)
const cameraSet5 = [];

function checkHardwareRequirements(desiredDistance, desiredLight, cameras) {
  // Check if the camera set cover the desired distance
  const distanceCovered = cameras.some(
    (camera) =>
      camera.distance[0] <= desiredDistance[0] &&
      camera.distance[1] >= desiredDistance[1]
  );

  // Check if the hardware cameras cover the desired light
  const lightCovered = cameras.some(
    (camera) =>
      camera.light[0] <= desiredLight[0] && camera.light[1] >= desiredLight[1]
  );

  // The software camera can be constructed if both distance and light requirements are met
  return distanceCovered && lightCovered;
}

console.log(
  `Checking hardware requirements for desired distance: [${desiredDistance}] and light: [${desiredLight}] with Camera Set 1 : ` +
    checkHardwareRequirements(desiredDistance, desiredLight, cameraSet1)
);
console.log(
  `Checking hardware requirements for desired distance: [${desiredDistance}] and light: [${desiredLight}] with Camera Set 2 : ` +
    checkHardwareRequirements(desiredDistance, desiredLight, cameraSet2)
);
console.log(
  `Checking hardware requirements for desired distance: [${desiredDistance}] and light: [${desiredLight}] with Camera Set 3 : ` +
    checkHardwareRequirements(desiredDistance, desiredLight, cameraSet3)
);
console.log(
  `Checking hardware requirements for desired distance: [${desiredDistance}] and light: [${desiredLight}] with Camera Set 4 : ` +
    checkHardwareRequirements(desiredDistance, desiredLight, cameraSet4)
);
console.log(
  `Checking hardware requirements for desired distance: [${desiredDistance}] and light: [${desiredLight}] with Camera Set 5 : ` +
    checkHardwareRequirements(desiredDistance, desiredLight, cameraSet5)
);
