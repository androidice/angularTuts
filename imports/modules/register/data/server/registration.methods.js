import { Meteor } from 'meteor/meteor';
import registration from './registration.model';
Meteor.methods({
    'user.register': registration.register
});
//# sourceMappingURL=registration.methods.js.map