/* *
 *
 *  (c) 2009-2020 Øystein Moseng
 *
 *  Default options for sonification.
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */

'use strict';

/**
 * Internal types.
 * @private
 */
declare global {
    namespace Highcharts {
        interface Options {
            sonification?: ChartSonificationOptions;
        }
        interface SeriesOptions {
            sonification?: SeriesSonificationOptions;
        }
    }
}

// Experimental, disabled by default, not exposed in API
const options = {
    sonification: {
        enabled: false,
        duration: 2000,
        afterSeriesWait: 1000,
        masterVolume: 0.7,
        order: 'sequential',
        defaultInstrumentOptions: {
            instrument: 'sineMusical',
            // Start at G4 note, end at C6
            minFrequency: 392,
            maxFrequency: 1046,
            mapping: {
                pointPlayTime: 'x',
                duration: 400,
                frequency: 'y'
            }
        }
    }
};

export default options;
