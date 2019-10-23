// Copyright 2019, University of Colorado Boulder

/**
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( require => {
  'use strict';

  // modules
  const ResetAllButton = require( 'SCENERY_PHET/buttons/ResetAllButton' );
  const ScreenView = require( 'JOIST/ScreenView' );
  const vectorAdditionEquations = require( 'VECTOR_ADDITION_EQUATIONS/vectorAdditionEquations' );
  const VectorAdditionEquationsConstants = require( 'VECTOR_ADDITION_EQUATIONS/common/VectorAdditionEquationsConstants' );

  class VectorAdditionEquationsScreenView extends ScreenView {

    /**
     * @param {VectorAdditionEquationsModel} model
     * @param {Tandem} tandem
     */
    constructor( model, tandem ) {

      super( {
        tandem: tandem
      } );

      const resetAllButton = new ResetAllButton( {
        listener: () => {
          this.interruptSubtreeInput(); // cancel interactions that may be in progress
          model.reset();
          this.reset();
        },
        right: this.layoutBounds.maxX - VectorAdditionEquationsConstants.SCREEN_VIEW_X_MARGIN,
        bottom: this.layoutBounds.maxY - VectorAdditionEquationsConstants.SCREEN_VIEW_Y_MARGIN,
        tandem: tandem.createTandem( 'resetAllButton' )
      } );
      this.addChild( resetAllButton );
    }

    /**
     * Resets the view.
     * @public
     */
    reset() {
      //TODO
    }

    /**
     * Steps the view.
     * @param {number} dt - time step, in seconds
     * @public
     */
    step( dt ) {
      //TODO
    }
  }

  return vectorAdditionEquations.register( 'VectorAdditionEquationsScreenView', VectorAdditionEquationsScreenView );
} );