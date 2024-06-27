uniform float time;
varying vec2 vUv;

void main() {
    vec2 center = vec2(0.5, 0.5);
    float distance = length(vUv - center);
    
    // Create color bands
    vec3 color = vec3(1.0, 0.27, 0.27); // Base blue color
    color += vec3(0.1, 0.2, 0.3) * sin(distance * 10.0 - time * 2.0);
    
    // Add a softer, less bright glow at the center
    float glow = 0.02 / (distance + 0.05);
    color += vec3(0.05, 0.1, 0.2) * glow * (0.5 + 0.5 * sin(time * 3.0));

    // Clamp the color values to prevent over-brightening
    color = clamp(color, 0.0, 1.0);

    gl_FragColor = vec4(color, 1.0);
    //gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
}