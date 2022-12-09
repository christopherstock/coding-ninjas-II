
    import * as ninjas from '../ninjas';

    /** ****************************************************************************************************************
    *   Specifies all different soundSystem effects being used in the game.
    *******************************************************************************************************************/
    export class SoundData
    {
        /** 'chinese' from 'Graeme Norgate' taken from 'Time Splitters' */
        public      static      BG_CHINESE                      :string                 =
        (
            ninjas.SettingEngine.PATH_SOUND + 'bg/chinese.mp3'
        );

        /** An array holding all filenames of all sounds to load. */
        public      static      FILE_NAMES                      :string[]               =
        [
            SoundData.BG_CHINESE,
        ];
    }
