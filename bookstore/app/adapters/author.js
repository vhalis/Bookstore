import ApplicationAdapter from './application';


export default ApplicationAdapter.extend({

    shouldReloadRecord() {
        return false;
    },

    shouldBackgroundReloadRecord(store, snapshot) {

        console.log("Calling shouldBackgroundReloadRecord");
        const loadedAt = snapshot.record.get('loadedAt');

        // if it was loaded more than an hour ago
        if (Date.now() - loadedAt > (60 * 60 * 1000)) {
            return true;
        } else {
            return false;
        }
    },

});
