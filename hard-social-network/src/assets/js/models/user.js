
/**
 * ICI est codé le modèle de User
 * Cette classe sert à manipuler des données, PAS à les afficher !!!
 */

/**
 * La classe User
 */
class User {

    /**
     * Le constructeur de User
     * 
     * @param string email 
     */
    constructor(email) {
        // On crée l'email
        this.setEmail(email);
        this.friends = [];
        this.posts = [];
    }

    /**
     * Modifie l'email
     * 
     * @TODO Tester si l'email est valide avant toute chose... 
     * 
     * @param string email 
     */
    setEmail(email) {
        // Teste si l'email n'est pas valide
        if (!isItAnEmail(email)) {
            console.log(`Oh!! "${email}" is not a valid email!!!`);
            this.email = 'error@email.co';
        }
        // Si c'est le cas
        else {
            this.email = email;
        }
    }

    /**
     * Récupère l'email
     */
    getEmail() {
        return this.email;
    }

    /**
     * Modifie le userName
     * 
     * @TODO Tester si le usernName est valide avant toute chose... 
     * 
     * @param string userName 
     */
    setUserName(userName) {
        // Teste si le userName n'est pas valide
        if (!isItAUserName(userName)) {
            console.log(`Oh!! "${userName}" is not a valid user name!!!`);
            this.userName = 'error';
        }
        // Si c'est le cas
        else {
            this.userName = userName;
        }
    }

    /**
     * Récupère le userName
     */
    getUserName() {
        return this.userName;
    }

    /**
     * Modifie l'age
     * 
     * @TODO Tester si l'age est valide avant toute chose... 
     * 
     * @param int age 
     */
    setAge(age) {
        // Teste si l'age n'est pas valide
        if (isItAnAge(age)) {
            console.log(`Oh!! "${age}" is not a valid age!!!`);
            // this.age = -1;
        }
        // Si c'est le cas
        else {
            this.age = age;
        }
    }

    /**
     * Récupère l'age
     */
    getAge() {
        return this.age;
    }

    /**
     * Ajoute un ami
     * 
     * @TODO Tester si l'ami est valide avant toute chose... 
     * 
     * @param User friend 
     */
    addFriend(friend) {
        // Teste si le friend n'est pas valide
        if (!isItAUser(friend)) {
            console.log(`Oh!! "${friend}" is not a valid friend!!!`);
        }
        // Si c'est le cas
        else {
            this.friends.push(friend);
        }
    }

    /**
     * Récupérer les amis
     */
    getFriends() {
        return this.friends;
    }

    /**
     * Ajoute un post
     * 
     * @param Post post 
     */
    addPost(post) {
        // On teste si le post n'est pas un Post
        if (!isItAPost(post)) {
            console.log(`Oh!! "${post}" is not a valid post!!!`);
        }
        // Si c'est le cas
        else {
            this.posts.push(post);
        }
    }
}
