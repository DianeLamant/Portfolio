function isItAnEmail(str) {
    return str.indexOf('@') > -1;
}

function isItAUserName(str) {
    let regExp = new RegExp(/^(?=.{3,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/);
    return regExp.test(str);
}

function isItAnAge(int) {
    return Number.isInteger(int) && int > 0;
}

function isItAUser(user) {
    return user instanceof User;
}

function isItAPost(post) {
    return post instanceof Post;
}

function isItAString(string) {
    if (typeof string === 'string') {
        return true;
    } else {
        return false;
    }
}

