varying vec2 vUv;
uniform float aspectRatio;
uniform float blinkValue;


void main()
{


    vec2 center = vec2(0.5, 0.5);

    vec2 uv = vec2(vUv.x * 2.0 , vUv.y);
    
    float distance = length(uv - center);

    float pupil = step(0.13, distance);

    float blink = uv.y -= (blinkValue + 0.2);

    blink = step(0.1, blink * -1.0);

    float o = pupil * blink;

    gl_FragColor = vec4(o, o, o, 1.0);
}
