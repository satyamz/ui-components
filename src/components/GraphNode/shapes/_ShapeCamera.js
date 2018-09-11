import React from 'react';
import { line, curveCardinalClosed } from 'd3-shape';

import Shape from './_Shape';

// const UNIT_CAMERA_PATH =
//   'M -1 0.75' +
//   'L -1 -0.5' +
//   'L -0.5 -0.5' +
//   'L -0.5 -1' +
//   'L 0.5 -1' +
//   'L 0.5 -0.5' +
//   'L 1 -0.5' +
//   'L 1 0.75' +
//   'Z';

const UNIT_CAMERA_PATH = [
  [-1, 0.65],
  [-1, -0.6],
  [-0.5, -0.6],
  [-0.5, -1.1],
  [0.5, -1.1],
  [0.5, -0.6],
  [1, -0.6],
  [1, 0.65],
];

export function curvedCameraPath() {
  const curve = curveCardinalClosed.tension(0.65);
  const spline = line().curve(curve);
  return spline(UNIT_CAMERA_PATH);
}

const renderTemplate = attrs => <path d={curvedCameraPath()} {...attrs} />;

export default class ShapeCamera extends React.Component {
  render() {
    return <Shape renderTemplate={renderTemplate} {...this.props} />;
  }
}
