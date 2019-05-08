
/**
 * ICI est codée la vue de Post
 * Cette classe sert à afficher des données, PAS à les manipuler !!!
 */

/**
 * La classe PostDisplayer permet d'afficher un Post, et UNIQUEMENT à l'afficher 
 */
class PostDisplayer {
    /**
     * 
     * 
     * @param 
     */
    constructor(title, text) {
        this.display = `<p><b>Post :</b> ${title}<br/>
        ${text}</p>`
    }

}