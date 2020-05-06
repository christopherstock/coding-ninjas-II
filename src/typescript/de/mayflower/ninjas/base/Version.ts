
    /* eslint-disable max-len */

    /** ****************************************************************************************************************
    *   Contains the project history with all current and completed version information.
    *******************************************************************************************************************/
    export class Version
    {
        /** The project's version v.1.1.1. */
        public      static  readonly                V_1_1_1                 :Version            = new Version( '1.1.1', 'SECOND-TRY',    '05.05.2020, 19:22:00 GMT+1' );
        /** The project's version v.1.0.0. */
        public      static  readonly                V_1_0_0                 :Version            = new Version( '1.0.0', 'CODING-NINJAS', '10.03.2018, 10:42:00 GMT+1' );
        /** The project's version v.0.0.1. */
        public      static  readonly                V_0_0_1                 :Version            = new Version( '0.0.1', 'PRIMAL',        '26.01.2018, 16:00:00 GMT+1' );

        /** The project's current version. */
        public      static  readonly                CURRENT_VERSION         :Version            = Version.V_1_1_1;

        /** This version's specifier. */
        private             readonly                 version                 :string             = null;
        /** This version's internal codename. */
        private             readonly                codename                :string             = null;
        /** This version's completion date. */
        private             readonly                date                    :string             = null;

        /** ************************************************************************************************************
        *   Creates a project version.
        *
        *   @param version      The version specifier.
        *   @param codename     The internal codename.
        *   @param date         The completion date.
        ***************************************************************************************************************/
        public constructor( version:string, codename:string, date:string )
        {
            this.version  = version;
            this.codename = codename;
            this.date     = date;
        }

        /** ************************************************************************************************************
        *   Returns a representation of the current project version and it's date.
        *
        *   @return A representation of the current project's version with it's timestamp.
        ***************************************************************************************************************/
        public getVersionDescriptor():string
        {
            return ( 'v. ' + this.version + ' [' + this.codename + ']' );
        }
    }
