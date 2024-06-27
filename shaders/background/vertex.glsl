uniform float time;
varying vec2 vUv;

void main() {
    vUv = uv;
    vec3 pos = position;
    
    // Create a ripple effect
    float amplitude = 0.1;
    float frequency = 2.0;
    float speed = 2.0;
    
    float distance = length(uv - 0.5);
    pos.z += sin(distance * frequency - time * speed) * amplitude;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}