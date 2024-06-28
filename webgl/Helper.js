import * as THREE from "three";
let instance = null;

export default class Helper {
  constructor() {
    // Singleton
    if (instance) {
      return instance;
    }
    instance = this;
  }

  getRandomVector3() {
    return new THREE.Vector3(
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10
    );
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  getRandomIntWithGap(min, max, minGap, maxGap) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let result = Math.floor(Math.random() * (max - min) + min);
    if (result > minGap && result < maxGap) {
      result = this.getRandomIntWithGap(min, max, minGap, maxGap);
    }

    return result;
  }

  magnitude(vector3) {
    return Math.sqrt(
      vector3.x * vector3.x + vector3.y * vector3.y + vector3.z * vector3.z
    );
  }

  isBetween(min, max, value) {
    return value > min && value < max;
  }

  createScreenSpacePlane(camera, distance, out = new THREE.Vector2()) {
    const mysteryModToMakeItFit = 1.2;
    const aspectRatio = camera.aspect;
    const fovInRadians = (camera.fov * Math.PI) / 180;

    // Calculate the plane dimensions based on the camera's FOV and aspect ratio
    const planeHeight =
      2 * Math.tan(fovInRadians / 2) * (distance * mysteryModToMakeItFit);
    const planeWidth = planeHeight * aspectRatio;

    return out.set(planeWidth, planeHeight);
  }

  getThreeXPositionFromScreenX(screenX, camera, cameraPosition) {
    if (!camera) {
      return;
    }

    const normalizedX = (screenX / window.innerWidth) * 2 - 1; // Convert to NDC
    const ndcPosition = new THREE.Vector3(normalizedX, 0, 0.5); // Y is 0, Z is 0.5 (within frustum)
    ndcPosition.unproject(camera); // Unproject to get the position in 3D space

    const direction = ndcPosition.sub(cameraPosition).normalize(); // Direction from camera to point
    const distance = -cameraPosition.z / direction.z; // Calculate distance to place the point at camera's depth

    return cameraPosition.clone().add(direction.multiplyScalar(distance)).x; // Return only the X position
  }

  getThreePositionFromScreenPosition(
    Vector3ScreenPosition,
    camera,
    zArray,
    cameraPosition
  ) {
    if (!camera) {
      return;
    }
    const positionInThreeSpace = new THREE.Vector3();
    const vec1 = new THREE.Vector3(
      (Vector3ScreenPosition.x / window.innerWidth) * 2 - 1,
      -(Vector3ScreenPosition.y / window.innerHeight) * 2 + 1,
      0.0
    );
    vec1.unproject(camera);
    vec1.sub(cameraPosition).normalize();
    const distance1 = -zArray / vec1.z;
    return positionInThreeSpace
      .copy(cameraPosition)
      .add(vec1.multiplyScalar(distance1));
  }

  getRandomColor(brightness) {
    function randomChannel(brightness) {
      var r = 255 - brightness;
      var n = 0 | (Math.random() * r + brightness);
      var s = n.toString(16);
      return s.length == 1 ? "0" + s : s;
    }
    return new THREE.Color(
      "#" +
        randomChannel(brightness) +
        randomChannel(brightness) +
        randomChannel(brightness)
    );
  }

  getRandomShade() {
    var c = Math.random();

    return new THREE.Color(c, c, c);
  }

  // getRandomColorFromPalette() {
  //   const arrayPosition = Math.round(Math.random() * colorsArray.length);
  //   return new THREE.Color(colorsArray[arrayPosition]);
  // }

  lerp(start, end, t) {
    return start * (1 - t) + end * t;
  }

  lerp2(a, b, t) {
    return (1 - t) * a + t * b;
  }

  smoothStep2(t, x) {
    const v1 = t * t;
    const v2 = 1.0 - (1.0 - t) * (1.0 - t);
    return this.lerp(v1, v2, t * x);
  }

  smoothstep(edge0, edge1, x) {
    const t = Math.min(Math.max((x - edge0) / (edge1 - edge0), 0), 1);
    return t * t * (3 - 2 * t);
  }

  clamp(min, max, value) {
    return Math.min(Math.max(value, min), max);
  }

  tri(time) {
    const period = 2; // length of one cycle in seconds
    const phase = (time % period) / period;
    let value = 0;
    if (phase < 0.5) {
      value = phase * 4 - 1;
    } else {
      value = (1 - phase) * 4 - 1;
    }
    return value;
  }

  squ(time) {
    const period = 2;
    const phase = (time % period) / period;
    const value = phase < 0.5 ? 1 : -1;
    return value;
  }

  saw(time) {
    const period = 2;
    const phase = (time % period) / period;
    const value = phase * 2 - 1;
    return value;
  }

  update3DObjectPosition(htmlElement, threeObject, camera) {
    const rect = htmlElement.getBoundingClientRect();
    const x = ((rect.left + rect.width / 2) / window.innerWidth) * 2 - 1;
    const y = (-(rect.top + rect.height / 2) / window.innerHeight) * 2 + 1;

    // Convert screen position (x, y) to NDC
    const vector = new THREE.Vector3(x, y, 0); // Z is arbitrarily chosen, depends on your scene

    // Unproject from NDC to 3D world space
    vector.unproject(camera);

    return vector;
  }

  update3DObjectPositionWithOffsetX(htmlElement, threeObject, camera, xOffset, yOffset) {
    const rect = htmlElement.getBoundingClientRect();
    // console.log(xOffset, yOffset);
    let x = (((rect.left + rect.width / 2) + xOffset) / window.innerWidth) * 2 - 1;
    let y = (-((rect.top + rect.height / 2) + yOffset) / window.innerHeight) * 2 + 1;

    // Convert screen position (x, y) to NDC
    const vector = new THREE.Vector3(x, y, 0); // Z is arbitrarily chosen, depends on your scene

    // Unproject from NDC to 3D world space
    vector.unproject(camera);

    return vector;
  }

  findPositionedAncestor(element) {
    // Start from the parent element of the provided element
    element = element.parentElement;

    while (element && element !== document) {
      if (window.getComputedStyle(element).position !== "static") {
        return element;
      }
      element = element.parentElement;
    }

    return null; // No positioned ancestor found
  }

  getYPpositionFromElement(element) {
    const rect = element.getBoundingClientRect();
    return rect.top + window.scrollY;
  }
}
