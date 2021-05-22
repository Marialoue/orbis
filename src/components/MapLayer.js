import {
  scaleThreshold,
  scaleLinear,
  scaleSqrt,
  scaleSequential,
  scaleQuantile,
  scaleQuantize,
} from "d3-scale";

export const colors = {
  blueToGreen: [
  // blue
  [2, 56, 88, 150],
  [4, 90, 141, 150],
  [5, 112, 176, 150],
  [54, 144, 192, 150],
  [116, 169, 207, 150],
  [166, 189, 219, 150],
  [208, 209, 230, 150],
  [236, 231, 242, 150],
  [255, 247, 251, 150],
  // white
  [247, 252, 253, 150],
  [229, 245, 249, 150],
  [204, 236, 230, 150],
  [153, 216, 201, 150],
  [102, 194, 164, 150],
  [65, 174, 118, 150],
  [35, 139, 69, 150],
  [0, 109, 44, 150],
  [0, 68, 27, 150],
  // green
  ], 
  redToGreen: [
  // red
  [127, 0, 0, 150],
  [179, 0, 0, 150],
  [215, 48, 31, 150],
  [239, 101, 72, 150],
  [252, 141, 89, 150],
  [253, 187, 132, 150],
  [253, 212, 158, 150],
  [254, 232, 200, 150],
  [255, 247, 236, 150],
  // yellow
  [255, 255, 229, 150],
  [247, 252, 185, 150],
  [217, 240, 163, 150],
  [173, 221, 142, 150],
  [120, 198, 121, 150],
  [65, 171, 93, 150],
  [35, 132, 67, 150],
  [0, 104, 55, 150],
  [0, 69, 41, 150],
  // green
  ]
}

  export const COLOR_SCALE = scaleThreshold()
  .domain([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20
    // 0, 5, 10, 15, 20, 25, 30, 35, 40, 45
    // scaleLinear()
    // .domain([d3.min.fully, d3.max.fully])
    // color = d3.scaleSequential()
    // .domain(d3.extent(Array.from(data.values())))
    // .interpolator(d3.interpolateYlGnBu)
    // .unknown("#ccc")
  ])
  .range(colors.redToGreen);
