varying vec2 vUv;


void main()
{


    vec2 center = vec2(0.25, 0.25);
    float distance = length(vUv - center);

    distance = step(0.15, distance);
    // gl_FragColor = vec4(vUv, 1.0, 1.0);

    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);

    gl_FragColor = vec4(distance, distance, distance, 1.0);
}