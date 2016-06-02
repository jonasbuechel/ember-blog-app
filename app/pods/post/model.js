import DS from 'ember-data';

export default DS.Model.extend({
    id: DS.attr(),
    title: DS.attr('string'),
    date: DS.attr('date'),
    text: DS.attr('string')
});
