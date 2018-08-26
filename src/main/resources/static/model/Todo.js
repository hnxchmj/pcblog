function Todo() { }
Todo.prototype.getUserInfo = function (
    successFunc,
    failFunc,
    username,
    password
) {
    axios.get('http://localhost:8080/User/getUserInfo',
        {
            params: {
                userInfo: JSON.stringify(stringToJsonObject(username, password))
            }
        }
    ).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    });
}
Todo.prototype.registerNewUser = function (
    successFunc,
    failFunc,
    username,
    password
) {
    axios.get(
        'http://localhost:9080/User/registerNewUser',
        {
            params: {
                userInfo: JSON.stringify(stringToJsonObject(username, password))
            }
        }
    ).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    });
}
// Todo.prototype.registerNewUser = function (
//     successFunc,
//     failFunc,
//     username,
//     password
// ) {
//     axios.post(
//         'http://localhost:8080/User/registerNewUser',
//         {
//             'userInfo':JSON.stringify(stringToJsonObject(username,password))
//         }
//     )
//         .then(function (response) {
//             console.log(response);
//         })
//         .catch(function (error) {
//             console.log(error);
//         });
// }