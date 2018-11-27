uniform vec3 color;
uniform sampler2D texture;
uniform float screenWidth;
uniform float screenHeight;
varying vec3 vColor;
void main() {
  float x = ( screenWidth * 0.5 - gl_FragCoord.x ) / screenWidth * 0.5;
  float y = ( screenHeight * 0.5 - gl_FragCoord.y ) / screenHeight * 0.5;
  float opacity = abs(min(x,y)) * 0.8;
  gl_FragColor = vec4( color * vColor, opacity);
  gl_FragColor = gl_FragColor * texture2D( texture, gl_PointCoord );
}