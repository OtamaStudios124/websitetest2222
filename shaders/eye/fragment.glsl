varying vec2 vUv;
uniform float aspectRatio;


void main()
{


    vec2 center = vec2(0.5, 0.5);

    vec2 uv = vec2(vUv.x * 2.0 , vUv.y);
    
    float distance = length(uv - center);

    float pupil = step(0.08, distance);

    gl_FragColor = vec4(pupil, pupil, pupil, 1.0);
}
