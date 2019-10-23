// Copyright 2019, University of Colorado Boulder

/**
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( require => {
  'use strict';

  // modules
  const Property = require( 'AXON/Property' );
  const Screen = require( 'JOIST/Screen' );
  const vectorAdditionEquations = require( 'VECTOR_ADDITION_EQUATIONS/vectorAdditionEquations' );
  const VectorAdditionEquationsModel = require( 'VECTOR_ADDITION_EQUATIONS/vector-addition-equations/model/VectorAdditionEquationsModel' );
  const VectorAdditionEquationsScreenView = require( 'VECTOR_ADDITION_EQUATIONS/vector-addition-equations/view/VectorAdditionEquationsScreenView' );

  class VectorAdditionEquationsScreen extends Screen {

    /**
     * @param {Tandem} tandem
     */
    constructor( tandem ) {

      const options = {
        backgroundColorProperty: new Property( 'white' ),
        tandem: tandem
      };

      super(
        () => new VectorAdditionEquationsModel( tandem.createTandem( 'model' ) ),
        model => new VectorAdditionEquationsScreenView( model, tandem.createTandem( 'view' ) ),
        options
      );
    }
  }

  return vectorAdditionEquations.register( 'VectorAdditionEquationsScreen', VectorAdditionEquationsScreen );
} );