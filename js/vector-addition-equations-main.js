// Copyright 2019, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( require => {
  'use strict';

  // modules
  const EquationsScreen = require( 'VECTOR_ADDITION/equations/EquationsScreen' );
  const Sim = require( 'JOIST/Sim' );
  const SimLauncher = require( 'JOIST/SimLauncher' );
  const Tandem = require( 'TANDEM/Tandem' );
  const VectorAdditionConstants = require( 'VECTOR_ADDITION/common/VectorAdditionConstants' );

  // strings
  const vectorAdditionEquationsTitleString = require( 'string!VECTOR_ADDITION_EQUATIONS/vector-addition-equations.title' );

  SimLauncher.launch( () => {

    const screens = [
      new EquationsScreen( Tandem.rootTandem.createTandem( 'vectorAdditionEquationsScreen' ) )
    ];

    const sim = new Sim( vectorAdditionEquationsTitleString, screens, {
      credits: VectorAdditionConstants.CREDITS
    } );

    sim.start();
  } );
} );