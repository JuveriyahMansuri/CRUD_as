// App Routing Class : Main Point
class routing{

    //Routes function : V1
    v1(app){
        const user = require('./v1/user/route/routes');
        user(app);
    }
}

module.exports = new routing();