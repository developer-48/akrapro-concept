// Resolve screen density without changing the model or downloading larger assets.
// Phones get a sharp Retina frame; the pixel budget bounds the GPU buffer on tablets.
export function mustangPixelRatio({width,height,dpr=1,touch=false}){
 const density=Number.isFinite(dpr)&&dpr>0?dpr:1;
 if(!touch)return Math.min(density,1.5);
 const pixels=Math.max(1,width)*Math.max(1,height);
 return Math.min(density,3,Math.sqrt(1_500_000/pixels));
}
