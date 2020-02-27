// Copyright 2019, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import Sim from '../../joist/js/Sim.js';
import SimLauncher from '../../joist/js/SimLauncher.js';
import Tandem from '../../tandem/js/Tandem.js';
import VectorAdditionConstants from '../../vector-addition/js/common/VectorAdditionConstants.js';
import EquationsScreen from '../../vector-addition/js/equations/EquationsScreen.js';
import vectorAdditionEquationsStrings from './vector-addition-equations-strings.js';

const vectorAdditionEquationsTitleString = vectorAdditionEquationsStrings[ 'vector-addition-equations' ].title;

SimLauncher.launch( () => {

  const screens = [
    new EquationsScreen( Tandem.ROOT.createTandem( 'vectorAdditionEquationsScreen' ) )
  ];

  const sim = new Sim( vectorAdditionEquationsTitleString, screens, {
    credits: VectorAdditionConstants.CREDITS
  } );

  sim.start();
} );