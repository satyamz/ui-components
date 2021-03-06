import React from 'react';

import Shape from './_Shape';

const UNIT_REPLICA_PATH = 'm0.93,-1.25309c0,0.18922 -0.43,0.34691 -0.96,0.34691s-0.97,-0.15768 -0.97,-0.34691s0.43,-0.34691 0.96,-0.34691s0.97,0.15768 0.97,0.34691zm-1.93,1.83965c0,0.21025 0.43,0.37844 0.96,0.37844s0.96,-0.1682 0.96,-0.37844m-1.92,-1.83965l0,1.85016m1.93,-1.85016l0,1.85016m-1.49,-1.24045m-0.01,1.31404l0,-1.42967l0.56,0c0.16,0 0.28,0.03154 0.36,0.09461c0.09,0.06307 0.13,0.15768 0.13,0.28383c0,0.09461 -0.03,0.1682 -0.08,0.23127c-0.04,0.07359 -0.21,0.15768 -0.3,0.17871m0.38,0.64125l-0.18,-0.47305c-0.03,-0.07359 -0.07,-0.11564 -0.11,-0.13666c-0.04,-0.02102 -0.11,-0.03154 -0.2,-0.03154l-0.55,0m0.56,-0.70432';

const renderTemplate = attrs => <path d={UNIT_REPLICA_PATH} {...attrs} />;

export default class ShapeReplica extends React.Component {
  render() {
    return <Shape renderTemplate={renderTemplate} {...this.props} />;
  }
}