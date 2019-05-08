
/**
 * ICI est codée la vue de User
 * Cette classe sert à afficher des données, PAS à les manipuler !!!
 */
/**
 * La classe UserDisplayer permet d'afficher un User, et UNIQUEMENT à l'afficher 
 */
class UserDisplayer {
    /**
     * 
     * 
     * @param 
     */
    constructor(userName, email, age) {
        this.display = `Username : ${userName} Email: ${email} Age: ${age}`;
    }

}

