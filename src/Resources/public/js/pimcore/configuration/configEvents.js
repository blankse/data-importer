pimcore.plugin.pimcoreDataHubBatchImportBundle.configuration.events = {

    /**
     * Fired when data object class changed
     *
     * arguments
     *  - combo
     *  - newValue
     *  - oldValue
     */
    classChanged: 'class_changed',

    /**
     * Fired when data object class combo is initialized
     *
     * arguments
     *  - combo
     *  - newValue
     *  - oldValue
     */
    classInit: 'class_init',

    /**
     * Fired when transformation result preview is updated
     *
     * arguments
     *  - transformationResultHandler (to load data from)
     *
     */
    transformationResultPreviewUpdated: 'transformation_result_preview_updated',


    /**
     * Fired when transformation result type changed
     *
     * arguments
     *   - newType
     */
    transformationResultTypeChanged: 'transformation_result_type_changed',

    /**
     * Fired when loader type changed
     *
     * arguments
     *   - newType
     */
    loaderTypeChanged: 'loader_type_changed',


    /**
     * Fired when dirty state of config changed
     *
     * arguments
     *   - dirty
     */
    configDirtyChanged: 'config_dirty_changed',

};