import Ember from 'ember';

export default Ember.Route.extend({

    actions: {
        showAll() {
            const total = this.controllerFor('books').get('total');
            this.transitionTo({ queryParams: { limit: total }});
        }
    },

    model(params) {
        return this.store.query('book', params);
    },

    queryParams: {
        limit: {
            refreshModel: true,
        },
    },
});
