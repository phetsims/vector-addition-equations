// Copyright 2019-2025, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import PreferencesModel from '../../joist/js/preferences/PreferencesModel.js';
import Sim from '../../joist/js/Sim.js';
import simLauncher from '../../joist/js/simLauncher.js';
import Tandem from '../../tandem/js/Tandem.js';
import VectorAdditionPreferences from '../../vector-addition/js/common/model/VectorAdditionPreferences.js';
import VectorAdditionConstants from '../../vector-addition/js/common/VectorAdditionConstants.js';
import VectorAdditionPreferencesNode from '../../vector-addition/js/common/view/VectorAdditionPreferencesNode.js';
import EquationsScreen from '../../vector-addition/js/equations/EquationsScreen.js';
import VectorAdditionEquationsStrings from './VectorAdditionEquationsStrings.js';

simLauncher.launch( () => {

  const titleStringProperty = VectorAdditionEquationsStrings[ 'vector-addition-equations' ].titleStringProperty;

  const screens = [
    new EquationsScreen( Tandem.ROOT.createTandem( 'equationsScreen' ) )
  ];

  const options = {
    phetioDesigned: true,
    credits: VectorAdditionConstants.CREDITS,

    // Preferences
    preferencesModel: new PreferencesModel( {
      simulationOptions: {
        customPreferences: [ {
          createContent: tandem => new VectorAdditionPreferencesNode( VectorAdditionPreferences.instance, tandem )
        } ]
      }
    } )
  };

  const sim = new Sim( titleStringProperty, screens, options );
  sim.start();
} );