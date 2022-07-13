function my_Dictionary() {
    var Animal = {
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
    };
    delete Animal.Sound; //Deletes the Bark Text From the Dictionary//
    document.getElementById("Dictionary").innerHTML = Animal.Sound; //Inside the Animal Variable sound is chosen then displayed//
}//Dictionary//