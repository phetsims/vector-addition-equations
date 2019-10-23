// Copyright 2019, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( require => {
  'use strict';

  // modules
  const Sim = require( 'JOIST/Sim' );
  const SimLauncher = require( 'JOIST/SimLauncher' );
  const VectorAdditionEquationsScreen = require( 'VECTOR_ADDITION_EQUATIONS/vector-addition-equations/VectorAdditionEquationsScreen' );
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

  // launch the sim - beware that scenery Image nodes created outside of SimLauncher.launch() will have zero bounds
  // until the images are fully loaded, see https://github.com/phetsims/coulombs-law/issues/70
  SimLauncher.launch( () => {
    const sim = new Sim( vectorAdditionEquationsTitleString, [
      new VectorAdditionEquationsScreen( Tandem.rootTandem.createTandem( 'vectorAdditionEquationsScreen' ) )
    ], simOptions );
    sim.start();
  } );
} );