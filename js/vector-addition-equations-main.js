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

  // strings
  const vectorAdditionEquationsTitleString = require( 'string!VECTOR_ADDITION_EQUATIONS/vector-addition-equations.title' );

  const simOptions = {
    credits: {
      //TODO fill in credits, all of these fields are optional, see joist.CreditsNode
      leadDesign: '',
      softwareDevelopment: '',
      team: '',
      qualityAssurance: '',
      graphicArts: '',
      soundDesign: '',
      thanks: ''
    }
  };

  SimLauncher.launch( () => {
    const sim = new Sim( vectorAdditionEquationsTitleString, [
      new EquationsScreen( Tandem.rootTandem.createTandem( 'vectorAdditionEquationsScreen' ) )
    ], simOptions );
    sim.start();
  } );
} );