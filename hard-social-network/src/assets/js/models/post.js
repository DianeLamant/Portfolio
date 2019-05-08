
/**
 * ICI est codé le modèle de Post
 * Cette classe sert à manipuler des données, PAS à les afficher !!!
 */

/**
 * La classe Post
 */
class Post {

    /**
     * Constructeur de Post
     * 
     * @param  string title
     * @param  string text
     */
    constructor(title, text) {
        this.setTitle(title);
        this.setText(text);
    }

    /**
     * Récupère le title
     */
    getTitle() {
        return this.title;
    }

    /**
     * Modifie le title
     * 
     * @param string title 
     */
    setTitle(title) {
        // On teste si title n'est pas une String
        if (!isItAString(title)) {
            console.log(`Oh!! "${title}" is not a valid title!!!`);
            this.title = 'error';
        }
        // Si c'est le cas
        else {
            this.title = title;
        }
    }

    /**
     * Récupère le text
     */
    getText() {
        return this.text;
    }

    /**
     * Modifie le text
     * 
     * @param string text 
     */
    setText(text) {
        // On teste si text n'est pas une String
        if (!isItAString(text)) {
            console.log(`Oh!! "${text}" is not a valid text!!!`);
            this.text = 'error';
        }
        // Si c'est le cas
        else {
            this.text = text;
        }
    }
}