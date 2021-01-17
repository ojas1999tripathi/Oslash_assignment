# Oslash Assignment
___
### Scenario

You're an employee of Twitter, and in regards to the recent security incident ([https://www.reuters.com/article/us-twitter-cyber-access-exclusive/exclusive-more-than-1000-people-at-twitter-had-ability-to-aid-hack-of-accounts-idUSKCN24O34E](https://www.reuters.com/article/us-twitter-cyber-access-exclusive/exclusive-more-than-1000-people-at-twitter-had-ability-to-aid-hack-of-accounts-idUSKCN24O34E)), you've been given the responsibility to design a solution and to prototype an authenticated audit and logging mechanism to prevent/monitor any abuse of internal tools which can be used to perform actions on production environments. (*We know that in an ideal secure design, we should not even have any such internal tool at all which can allow anyone to act on behalf of a user on production)

The application you're responsible for building, should allow data from three user roles:

1. Twitter Users: Generic user account
    - Users signup and generate content independently on the platform in the form of tweets.
2. Admin: Internal employee account of twitter
    - Admins can monitor/modify any data generated by said users'.
3. Super-Admin: Internal employee with critical data access
    - Each modification by an admin is followed by a verification/approval from the super-admin.
    - Super-admin can perform analytics queries and generate insights from user behavior.___

### Features :

For Users:

1. Create a tweet
2. List of tweets (Simple chronological timeline of own tweets, need not contain replies)
3. Delete own tweet

####For Admin:

1. Edit user details
2. Initiate CRUD of tweets on users' behalf

####For Super-admin:

1. Approve actions initiated by admin
2. View logs (e.g access/action/audit log)
3. Write custom queries to generate insights

    Examples:

    - Post frequency of user X within a timeframe
    - Number of changes requested by Admin P

### Scope: 

You're required to build a back-end heavy prototype in any tech stack, using any tools and open-source libraries/repositories of your choice. Use any DB(s) you are comfortable with. (Frontend is not a required criterion).

Design the architecture with future extensibility in mind. The design should be extended to any other application for providing audit and logging mechanism with ease.