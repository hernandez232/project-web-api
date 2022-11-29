# ExpressJS RestFUL API

## Steps
1. Init project
    - Install dependencies
    - Config server in app.js
    - Create scripts in package.json
2. Start with configurations
    - Passport (if auth is needed)
    - MongoDb + Mongoose (if db is needed)
    - Create directories
    - Create global error handler (with HttpError)
3. Start with models (MVC)
    - Create entity model
4. Create controller for entity
    - Create controller with methods to handle entity management (CRUD)
5. Create router to interact with controller
    - With express router add controller methods
6. Config router in app.js
    - Test!