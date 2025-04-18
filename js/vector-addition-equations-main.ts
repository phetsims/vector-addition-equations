// Copyright 2019-2022, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import Sim from '../../joist/js/Sim.js';
import simLauncher from '../../joist/js/simLauncher.js';
import Tandem from '../../tandem/js/Tandem.js';
import VectorAdditionConstants from '../../vector-addition/js/common/VectorAdditionConstants.js';
import EquationsScreen from '../../vector-addition/js/equations/EquationsScreen.js';
import VectorAdditionEquationsStrings from './VectorAdditionEquationsStrings.js';
import PreferencesModel from '../../joist/js/preferences/PreferencesModel.js';
import VectorAdditionPreferencesNode from '../../vector-addition/js/common/view/VectorAdditionPreferencesNode.js';
import VectorAdditionPreferences from '../../vector-addition/js/common/model/VectorAdditionPreferences.js';

simLauncher.launch( () => {

  const screens = [
    new EquationsScreen( Tandem.ROOT.createTandem( 'vectorAdditionEquationsScreen' ) )
  ];

  const sim = new Sim( VectorAdditionEquationsStrings[ 'vector-addition-equations' ].titleStringProperty, screens, {
    credits: VectorAdditionConstants.CREDITS,

    // Preferences
    preferencesModel: new PreferencesModel( {
      simulationOptions: {
        customPreferences: [ {
          createContent: tandem => new VectorAdditionPreferencesNode( VectorAdditionPreferences.instance, tandem )
        } ]
      }
    } )
  } );

  sim.start();
} );