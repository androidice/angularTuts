import { Accounts } from 'meteor/accounts-base';
Accounts.onCreateUser((options, user) => {
    if (options.profile) {
        user.profile = options.profile;
    }
    return user;
});
//# sourceMappingURL=accounts.overrides.js.map