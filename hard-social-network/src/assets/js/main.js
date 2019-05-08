
/**
 * ICI on instancie nos classes et on pose nos listeners
 */

let usersMap = {}; // Map (userName, user)
let usersArray = [];

$("#add-user button").click(function () {
    event.preventDefault();
    let email = $("#email").val();
    let userName = $("#user-name").val();
    let age = $("#age").val();

    let newUser = new User(email);
    newUser.setUserName(userName);
    newUser.setAge(age);

    usersMap[userName] = newUser;

    usersArray.push(newUser);

    $('select')
        .append($("<option></option>")
            .text(newUser.userName).val(email));

});

$("#add-post").append('<div class="col-12 mt-3 mb-2 text-center"><select class="form-control"></select>');
$("#add-post").append('<div class="col-12 mt-3 mb-2 text-center"><input class="form-control custom-focus" type="text" id="title" placeholder="Titre">');
$("#add-post").append('<div class="col-12 mt-3 mb-2 text-center"><input class="form-control custom-focus" type="text" id="text" placeholder="Texte">');
$("#add-post").append('<div class="col-12 mt-3 mb-2 text-center"><button type="submit" class="btn btn-success btn-block" id="send">Envoyer</button></div>');



$("select").click(function () {
    event.preventDefault();
});

$("#send").click(function () {
    event.preventDefault();

    let titel = $('#title').val();
    let textel = $('#text').val();

    let newPost = new Post(titel, textel);

    let userFound;

    for (let user of usersArray) {
        if (user.getUserName() == $("select").find(":selected").text()) {
            user.addPost(newPost);
            userFound = user;
        }
    }

    console.log(usersArray);

    let displayUser = new UserDisplayer(userFound.getUserName(), userFound.getEmail(), userFound.getAge());
    let theUser = displayUser.display;

    let displayPost = new PostDisplayer(titel, textel);
    let post = displayPost.display;
    $('body').append(theUser, post);

})
