import style from '../global-style.css';
import { navigationBar, stopSlide} from './navbar';
import { leftPanel, rightPanel } from "./pageone";
import { loadFooter } from './footer';



import starryLogo from '../assets/starry-night/hero-small.jpg';
import imageThumb from '../assets/starry-night/artist.jpg';

import girlEaringLogo from '../assets/girl-with-pearl-earring/hero-small.jpg';
import girlThumb from '../assets/girl-with-pearl-earring/artist.jpg';

import guernacaLogo from '../assets/guernica/hero-small.jpg';
import guernacaThumb from '../assets/guernica/artist.jpg';

import magdelineLogo from '../assets/penitent-magdalene/hero-small.jpg';
import magdelineThumb from '../assets/penitent-magdalene/artist.jpg';

import seaStormLogo from '../assets/the-storm-on-the-sea-of-galilee/hero-small.jpg';
import seaStormThumb from '../assets/the-storm-on-the-sea-of-galilee/artist.jpg';

import kanagawaLogo from '../assets/the-great-wave-off-kanagawa/hero-small.jpg';
import kanagawaThumb from '../assets/the-great-wave-off-kanagawa/artist.jpg';

import vanLogo from '../assets/van-gogh-self-portrait/hero-small.jpg';
import vanThumb from '../assets/van-gogh-self-portrait/artist.jpg';

import gypsyLogo from '../assets/the-sleeping-gypsy/hero-small.jpg';
import gypsyThumb from '../assets/the-sleeping-gypsy/artist.jpg';

import ladyLogo from '../assets/lady-with-an-ermine/hero-small.jpg';
import ladyThumb from '../assets/lady-with-an-ermine/artist.jpg';

import cafeLogo from '../assets/the-night-cafe/hero-small.jpg';
import cafeThumb from '../assets/the-night-cafe/artist.jpg';

import appleLogo from '../assets/the-basket-of-apples/hero-small.jpg';
import appleThumb from '../assets/the-basket-of-apples/artist.jpg';

import boyLogo from '../assets/the-boy-in-the-red-vest/hero-small.jpg';
import boyThumb from '../assets/the-boy-in-the-red-vest/artist.jpg';

import arnoLogo from '../assets/arnolfini-portrait/hero-small.jpg';
import arnoThumb from '../assets/arnolfini-portrait/artist.jpg';

import monaLogo from '../assets/mona-lisa/hero-small.jpg';
import monaThumb from '../assets/mona-lisa/artist.jpg';

import swingLogo from '../assets/the-swing/hero-small.jpg';
import swingThumb from '../assets/the-swing/artist.jpg';


function templatePanel(){
    const panelHolder = document.createElement("div");
    panelHolder.classList.add("panel_holder");

    let left = leftPanel(starryLogo, "Starry Night", "Vincent Van Gohn", imageThumb);
    let right = rightPanel("Although The Starry Night was painted during the day in Van Gogh's ground-floor studio, it would be inaccurate to state that the picture was painted from memory. The view has been identified as the one from his bedroom window, facing east, a view which Van Gogh painted variations of no fewer than twenty-one times, including The Starry Night. 'Through the iron-barred window,' he wrote to his brother, Theo, around 23 May 1889, 'I can see an enclosed square of wheat ... above which, in the morning, I watch the sun rise in all its glory.'", "1889");

    panelHolder.append(left, right);

    return panelHolder;

}


function firstSlidePanel(){
    let changeImage = document.getElementById("image_container");
    changeImage.innerText = "";

    let newImage = document.createElement("img");
    newImage.src  = starryLogo;

    changeImage.append(newImage);

    let getContainer = document.getElementById("left_content_container");
    getContainer.classList.remove("left_content_container_girl");
    getContainer.classList.remove("left_content_container_guernica");


    let newUpper = document.getElementById("left_upper_text");
    newUpper.innerText = "";
    newUpper.classList.remove("girl_new_height");

    let newLower = document.getElementById("left_lower_text");
    newLower.classList.remove("pearl_lower_text");
    newLower.innerText = "";


    newUpper.innerText = "Starry Night";
    newLower.innerText = "Vincent Van Gogh";

    let getNewThumb = document.getElementById("left_thumb_container");
    getNewThumb.innerText = "";

    let newThumb = document.createElement("img");
    newThumb.src  = imageThumb;

    getNewThumb.append(newThumb);

    let newDate = document.getElementById("date_content");
    newDate.innerText = "";
    newDate.innerText = "1889";

    let newDescription  = document.getElementById("right_content_description");
    newDescription.innerText = "";
    newDescription.innerText = "Although The Starry Night was painted during the day in Van Gogh's ground-floor studio, it would be inaccurate to state that the picture was painted from memory. The view has been identified as the one from his bedroom window, facing east, a view which Van Gogh painted variations of no fewer than twenty-one times, including The Starry Night. 'Through the iron-barred window,'' he wrote to his brother, Theo, around 23 May 1889, 'I can see an enclosed square of wheat ... above which, in the morning, I watch the sun rise in all its glory.'";


}

function secondSlidePanel(){
    let changeImage = document.getElementById("image_container");
    changeImage.innerText = "";

    let newImage = document.createElement("img");
    newImage.src  = girlEaringLogo;

    changeImage.append(newImage);

    let getContainer = document.getElementById("left_content_container");
    getContainer.classList.add("left_content_container_girl");
    getContainer.classList.remove("left_content_container_guernica");


    let newUpper = document.getElementById("left_upper_text");
    newUpper.innerText = "";
    newUpper.classList.add("girl_new_height");
    newUpper.classList.remove("mobile_guernica");

    let newLower = document.getElementById("left_lower_text");
    newLower.classList.add("pearl_lower_text");
    newLower.classList.remove("guernica_lower_text");
    newLower.innerText = "";


    newUpper.innerText = "Girl with a Pearl Earring";
    newLower.innerText = "Johannes Vermeer";

    let getNewThumb = document.getElementById("left_thumb_container");
    getNewThumb.innerText = "";

    let newThumb = document.createElement("img");
    newThumb.src  = girlThumb;

    getNewThumb.append(newThumb);

    let newDate = document.getElementById("date_content");
    newDate.innerText = "";
    newDate.innerText = "1665";

    let newDescription  = document.getElementById("right_content_description");
    newDescription.innerText = "";
    newDescription.innerText = "The painting is a tronie, the Dutch 17th-century description of a 'head' that was not meant to be a portrait. It depicts a European girl wearing an exotic dress, an oriental turban, and what was thought to be a very large pearl as an earring. In 2014, Dutch astrophysicist Vincent Icke raised doubts about the material of the earring and argued that it looks more like polished tin than pearl on the grounds of the specular reflection, the pear shape and the large size of the earring.";

}

function thirdSlidePanel(){
    let changeImage = document.getElementById("image_container");
    changeImage.innerText = "";

    let newImage = document.createElement("img");
    newImage.src  = guernacaLogo;

    changeImage.append(newImage);

    let getContainer = document.getElementById("left_content_container");
    getContainer.classList.remove("left_content_container_girl");
    getContainer.classList.remove("left_content_container_sea");
    getContainer.classList.add("left_content_container_guernica");


    let newUpper = document.getElementById("left_upper_text");
    newUpper.innerText = "";
    newUpper.classList.add("girl_new_height");
    newUpper.classList.add("mobile_guernica");

    let newLower = document.getElementById("left_lower_text");
    newLower.classList.remove("pearl_lower_text");
    newLower.classList.remove("sea_lower_text");
    newLower.classList.add("guernica_lower_text");

    newLower.innerText = "";


    newUpper.innerText = "Guernica";
    newLower.innerText = "Pablo Picasso";

    let getNewThumb = document.getElementById("left_thumb_container");
    getNewThumb.innerText = "";

    let newThumb = document.createElement("img");
    newThumb.src  = guernacaThumb;

    getNewThumb.append(newThumb);

    let newDate = document.getElementById("date_content");
    newDate.innerText = "";
    newDate.innerText = "1937";

    let newDescription  = document.getElementById("right_content_description");
    newDescription.innerText = "";
    newDescription.innerText = "The scene occurs within a room where, on the left, a wide-eyed bull stands over a grieving woman holding a dead child in her arms. In the center of the room a horse falls in agony with a large gaping hole in its side, as if it had just been run through by a spear or javelin. The horse appears to be wearing chain mail armor, decorated with vertical tally marks arranged in rows. A dead and dismembered soldier lies under the horse. The hand of his severed right arm grasps a shattered sword, from which a flower grows.";

}

function fourthSlidePanel(){
    let changeImage = document.getElementById("image_container");
    changeImage.innerText = "";

    let newImage = document.createElement("img");
    newImage.src  = magdelineLogo;

    changeImage.append(newImage);

    let getContainer = document.getElementById("left_content_container");
    getContainer.classList.remove("left_content_container_guernica");
    getContainer.classList.remove("left_content_container_magdalene");
    getContainer.classList.remove("left_content_container_sea");


    let newUpper = document.getElementById("left_upper_text");
    newUpper.innerText = "";
    newUpper.classList.add("girl_new_height");
    newUpper.classList.remove("mobile_guernica");

    let newLower = document.getElementById("left_lower_text");
    newLower.classList.remove("guernica_lower_text");
    newLower.classList.remove("sea_lower_text");
    newLower.innerText = "";


    newUpper.innerText = "Penitent Magdalene";
    newLower.innerText = "Artemisia Gentileschi";

    let getNewThumb = document.getElementById("left_thumb_container");
    getNewThumb.innerText = "";

    let newThumb = document.createElement("img");
    newThumb.src  = magdelineThumb;

    getNewThumb.append(newThumb);

    let newDate = document.getElementById("date_content");
    newDate.innerText = "";
    newDate.innerText = "1625";

    let newDescription  = document.getElementById("right_content_description");
    newDescription.innerText = "";
    newDescription.innerText = "Penitent Magdalene is a painting by the Italian artist Artemisia Gentileschi. It hangs in Seville Cathedral. It has probably been in the cathedral since the late 17th century. The painting's first home was the collection of Fernando Enriquez Afan de Ribera, from 1626 to 1637. She returned to the subject later in the 1620s in Mary Magdalene as Melancholy.";

}

function fithSlidePanel(){
    let changeImage = document.getElementById("image_container");
    changeImage.innerText = "";

    let newImage = document.createElement("img");
    newImage.src  = seaStormLogo;

    changeImage.append(newImage);

    let getContainer = document.getElementById("left_content_container");
    getContainer.classList.add("left_content_container_sea");
    getContainer.classList.add("storm_mobile");
    getContainer.classList.remove("left_content_container_magdalene");


    let newUpper = document.getElementById("left_upper_text");
    newUpper.innerText = "";
    newUpper.classList.add("girl_new_height");
    newUpper.classList.add("storm_text_mobile");

    let newLower = document.getElementById("left_lower_text");
    newLower.classList.add("sea_lower_text");
    newLower.innerText = "";


    newUpper.innerText = "The Storm on the Sea of Galilee";
    newLower.innerText = "Rembrandt";

    let getNewThumb = document.getElementById("left_thumb_container");
    getNewThumb.innerText = "";

    let newThumb = document.createElement("img");
    newThumb.src  = seaStormThumb;

    getNewThumb.append(newThumb);

    let newDate = document.getElementById("date_content");
    newDate.innerText = "";
    newDate.innerText = "1633";

    let newDescription  = document.getElementById("right_content_description");
    newDescription.innerText = "";
    newDescription.innerText = "The painting, in vertical format, shows a close-up view of Christ's disciples struggling frantically against the heavy storm to regain control of their fishing boat. A huge wave beats the bow and rips the sail. One of the disciples is seen vomiting over the side. Another one, looking directly out at the viewer, is a self-portrait of the artist. Only Christ, depicted on the right, remains calm.";

}

function sixSlidePanel(){
    let changeImage = document.getElementById("image_container");
    changeImage.innerText = "";

    let newImage = document.createElement("img");
    newImage.src  = kanagawaLogo;

    changeImage.append(newImage);

    let getContainer = document.getElementById("left_content_container");
    getContainer.classList.add("left_content_container_sea");
    getContainer.classList.remove("left_content_container_magdalene");
    getContainer.classList.remove("left_content_container_self");
    getContainer.classList.remove("left_content_container_cafe");
    getContainer.classList.remove("left_content_container_lady");



    let newUpper = document.getElementById("left_upper_text");
    newUpper.innerText = "";
    newUpper.classList.add("girl_new_height");
    newUpper.classList.add("mobile_kanagawa_text");

    let newLower = document.getElementById("left_lower_text");
    newLower.classList.add("sea_lower_text");
    newLower.classList.remove("self_lower_text");
    newLower.classList.remove("gypsy_lower_text");
    newLower.classList.remove("apple_lower_text");
    newLower.classList.remove("cafe_lower_text");
    newLower.innerText = "";


    newUpper.innerText = "The Great Wave off Kanagawa";
    newLower.innerText = "Hokusai";

    let getNewThumb = document.getElementById("left_thumb_container");
    getNewThumb.innerText = "";

    let newThumb = document.createElement("img");
    newThumb.src  = kanagawaThumb;

    getNewThumb.append(newThumb);

    let newDate = document.getElementById("date_content");
    newDate.innerText = "";
    newDate.innerText = "1831";

    let newDescription  = document.getElementById("right_content_description");
    newDescription.innerText = "";
    newDescription.innerText = "The Great Wave off Kanagawa (Japanese: 神奈川沖浪裏, Hepburn: Kanagawa-oki Nami Ura, lit. 'Under the Wave off Kanagawa'), also known as The Great Wave or simply The Wave, is a woodblock print by the Japanese ukiyo-e artist Hokusai. It was published sometime between 1829 and 1833 in the late Edo period as the first print in Hokusai's series Thirty-six Views of Mount Fuji. The image depicts an enormous wave threatening three boats off the coast in the Sagami Bay (Kanagawa Prefecture) while Mount Fuji rises in the background.";

}

function sevenSlidePanel(){
    let changeImage = document.getElementById("image_container");
    changeImage.innerText = "";

    let newImage = document.createElement("img");
    newImage.src  = vanLogo;

    changeImage.append(newImage);

    let getContainer = document.getElementById("left_content_container");
    getContainer.classList.remove("left_content_container_sea");
    getContainer.classList.add("left_content_container_self");


    let newUpper = document.getElementById("left_upper_text");
    newUpper.innerText = "";
    newUpper.classList.add("girl_new_height");

    let newLower = document.getElementById("left_lower_text");
    newLower.classList.remove("sea_lower_text");
    newLower.classList.add("self_lower_text");
    newLower.innerText = "";


    newUpper.innerText = "Van Gogh self-portrait";
    newLower.innerText = "Vincent van Gogh";

    let getNewThumb = document.getElementById("left_thumb_container");
    getNewThumb.innerText = "";

    let newThumb = document.createElement("img");
    newThumb.src  = vanThumb;

    getNewThumb.append(newThumb);

    let newDate = document.getElementById("date_content");
    newDate.innerText = "";
    newDate.innerText = "1889";

    let newDescription  = document.getElementById("right_content_description");
    newDescription.innerText = "";
    newDescription.innerText = "This self-portrait was one of about 32 produced over a 10-year period, and these were an important part of his work as a painter; he painted himself because he often lacked the money to pay for models. He took the painting with him to Auvers-sur-Oise, near Paris, where he showed it to Dr. Paul Gachet, who thought it was 'absolutely fanatical'. Art historians are divided as to whether this painting or Self-portrait without beard is Van Gogh's final self-portrait. The art historians Ingo F. Walther and Jan Hulsker consider this to be the last.";

}

function eightSlidePanel(){
    let changeImage = document.getElementById("image_container");
    changeImage.innerText = "";

    let newImage = document.createElement("img");
    newImage.src  = gypsyLogo;

    changeImage.append(newImage);

    let getContainer = document.getElementById("left_content_container");
    getContainer.classList.add("left_content_container_sea");
    getContainer.classList.remove("left_content_container_self");
    getContainer.classList.remove("left_content_container_cafe");
    getContainer.classList.remove("left_content_container_lady");


    let newUpper = document.getElementById("left_upper_text");
    newUpper.innerText = "";
    newUpper.classList.add("girl_new_height");

    let newLower = document.getElementById("left_lower_text");
    newLower.classList.add("gypsy_lower_text");
    newLower.classList.remove("self_lower_text");
    newLower.innerText = "";


    newUpper.innerText = "The Sleeping Gypsy";
    newLower.innerText = "Henri Rousseau";

    let getNewThumb = document.getElementById("left_thumb_container");
    getNewThumb.innerText = "";

    let newThumb = document.createElement("img");
    newThumb.src  = gypsyThumb;

    getNewThumb.append(newThumb);

    let newDate = document.getElementById("date_content");
    newDate.innerText = "";
    newDate.innerText = "1897";

    let newDescription  = document.getElementById("right_content_description");
    newDescription.innerText = "";
    newDescription.innerText = "The Sleeping Gypsy (French: La Bohémienne endormie) is an 1897 oil painting by French Naïve artist Henri Rousseau (1844–1910). It is a fantastical depiction of a lion musing over a sleeping woman on a moonlit night. Rousseau first exhibited the painting at the 13th Salon des Indépendants, and tried unsuccessfully to sell it to the mayor of his hometown, Laval. Instead, it entered the private collection of a Parisian charcoal merchant where it remained until 1924, when it was discovered by the art critic Louis Vauxcelles.";

}

function nineSlidePanel(){
    let changeImage = document.getElementById("image_container");
    changeImage.innerText = "";

    let newImage = document.createElement("img");
    newImage.src  = ladyLogo;

    changeImage.append(newImage);

    let getContainer = document.getElementById("left_content_container");
    getContainer.classList.remove("left_content_container_sea");
    getContainer.classList.add("left_content_container_lady");


    let newUpper = document.getElementById("left_upper_text");
    newUpper.innerText = "";
    newUpper.classList.add("girl_new_height");

    let newLower = document.getElementById("left_lower_text");
    newLower.classList.remove("gypsy_lower_text");
    newLower.innerText = "";


    newUpper.innerText = "Lady with an Ermine";
    newLower.innerText = "Leonardo da Vinci";

    let getNewThumb = document.getElementById("left_thumb_container");
    getNewThumb.innerText = "";

    let newThumb = document.createElement("img");
    newThumb.src  = ladyThumb;

    getNewThumb.append(newThumb);

    let newDate = document.getElementById("date_content");
    newDate.innerText = "";
    newDate.innerText = "1489";

    let newDescription  = document.getElementById("right_content_description");
    newDescription.innerText = "";
    newDescription.innerText = "The Lady with an Ermine (Italian: Dama con l'ermellino [ˈdaːma kon lermelˈliːno]; Polish: Dama z gronostajem) is a portrait painting widely attributed to the Italian Renaissance artist Leonardo da Vinci. Dated to c. 1489–1491, the work is painted in oils on a panel of walnut wood. Its subject is Cecilia Gallerani, a mistress of Ludovico Sforza ('Il Moro'), Duke of Milan; Leonardo was painter to the Sforza court at the time of its execution. It is one of only four surviving portraits of women painted by Leonardo, the others being Ginevra de' Benci, La Belle Ferronnière and the Mona Lisa.";

}

function tenSlidePanel(){
    let changeImage = document.getElementById("image_container");
    changeImage.innerText = "";

    let newImage = document.createElement("img");
    newImage.src  = cafeLogo;

    changeImage.append(newImage);

    let getContainer = document.getElementById("left_content_container");
    getContainer.classList.remove("left_content_container_sea");
    getContainer.classList.add("left_content_container_cafe");


    let newUpper = document.getElementById("left_upper_text");
    newUpper.innerText = "";
    newUpper.classList.add("girl_new_height");
    newUpper.classList.remove("storm_text_mobile");

    let newLower = document.getElementById("left_lower_text");
    newLower.classList.add("cafe_lower_text");
    newLower.innerText = "";


    newUpper.innerText = "The Night Cafe";
    newLower.innerText = "Vincent van Gogh";

    let getNewThumb = document.getElementById("left_thumb_container");
    getNewThumb.innerText = "";

    let newThumb = document.createElement("img");
    newThumb.src  = cafeThumb;

    getNewThumb.append(newThumb);

    let newDate = document.getElementById("date_content");
    newDate.innerText = "";
    newDate.innerText = "1888";

    let newDescription  = document.getElementById("right_content_description");
    newDescription.innerText = "";
    newDescription.innerText = "The Night Café (French: Le Café de nuit) is an oil painting created by Dutch artist Vincent van Gogh in September 1888 in Arles. Its title is inscribed lower right beneath the signature. The painting is owned by Yale University and is currently held at the Yale University Art Gallery in New Haven, Connecticut. The interior depicted is the Café de la Gare, 30 Place Lamartine, run by Joseph-Michel Ginoux and his wife Marie, who in November 1888 posed for Van Gogh's and Gauguin's Arlésienne; a bit later, Joseph Ginoux evidently posed for both artists, too.";

}

function elevenSlidePanel(){
    let changeImage = document.getElementById("image_container");
    changeImage.innerText = "";

    let newImage = document.createElement("img");
    newImage.src  = appleLogo;

    changeImage.append(newImage);

    let getContainer = document.getElementById("left_content_container");
    getContainer.classList.remove("left_content_container_sea");
    getContainer.classList.add("left_content_container_cafe");


    let newUpper = document.getElementById("left_upper_text");
    newUpper.innerText = "";
    newUpper.classList.add("girl_new_height");

    let newLower = document.getElementById("left_lower_text");
    newLower.classList.add("apple_lower_text");
    newLower.innerText = "";


    newUpper.innerText = "The Basket of Apples";
    newLower.innerText = "Paul Cezanne";

    let getNewThumb = document.getElementById("left_thumb_container");
    getNewThumb.innerText = "";

    let newThumb = document.createElement("img");
    newThumb.src  = appleThumb;

    getNewThumb.append(newThumb);

    let newDate = document.getElementById("date_content");
    newDate.innerText = "";
    newDate.innerText = "1893";

    let newDescription  = document.getElementById("right_content_description");
    newDescription.innerText = "";
    newDescription.innerText = "The Basket of Apples (French: Le panier de pommes) is a still life oil painting by French artist Paul Cézanne, which he created c. 1893. The painting is particularly remarkable for its creative composition, which rejected realistic representation in favour of distorting objects to create multiple perspectives. This approach eventually influenced other art movements, including Fauvism and Cubism. It belongs to the Helen Birch Bartlett Memorial Collection of the Art Institute of Chicago.";

}

function twelveSlidePanel(){
    let changeImage = document.getElementById("image_container");
    changeImage.innerText = "";

    let newImage = document.createElement("img");
    newImage.src  = boyLogo;

    changeImage.append(newImage);

    let getContainer = document.getElementById("left_content_container");
    getContainer.classList.remove("left_content_container_sea");
    getContainer.classList.add("left_content_container_cafe");


    let newUpper = document.getElementById("left_upper_text");
    newUpper.innerText = "";
    newUpper.classList.add("girl_new_height");
    newUpper.classList.remove("mona_new_height");

    let newLower = document.getElementById("left_lower_text");
    newLower.classList.add("apple_lower_text");
    newLower.innerText = "";


    newUpper.innerText = "The Boy in the Red Vest";
    newLower.innerText = "Paul Cezanne";

    let getNewThumb = document.getElementById("left_thumb_container");
    getNewThumb.innerText = "";

    let newThumb = document.createElement("img");
    newThumb.src  = boyThumb;

    getNewThumb.append(newThumb);

    let newDate = document.getElementById("date_content");
    newDate.innerText = "";
    newDate.innerText = "1889";

    let newDescription  = document.getElementById("right_content_description");
    newDescription.innerText = "";
    newDescription.innerText = "Cézanne painted four oil portraits of this Italian boy in the red vest, all in different poses, which allowed him to study the relationship between the figure and space. The most famous of the four, and the one commonly referred to by this title, is the one which depicts the boy in a melancholic seated pose with his elbow on a table and his head cradled in his hand. It is currently held in Zürich, Switzerland. The other three portraits, of different poses, are in museums in the US.";

}

function thirteenSlidePanel(){
    let changeImage = document.getElementById("image_container");
    changeImage.innerText = "";

    let newImage = document.createElement("img");
    newImage.src  = arnoLogo;

    changeImage.append(newImage);

    let getContainer = document.getElementById("left_content_container");
    getContainer.classList.remove("left_content_container_sea");
    getContainer.classList.add("left_content_container_cafe");


    let newUpper = document.getElementById("left_upper_text");
    newUpper.innerText = "";
    newUpper.classList.add("girl_new_height");

    let newLower = document.getElementById("left_lower_text");
    newLower.classList.add("apple_lower_text");
    newLower.innerText = "";


    newUpper.innerText = "Arnolfini Portrait";
    newLower.innerText = "Jan van Eyck";

    let getNewThumb = document.getElementById("left_thumb_container");
    getNewThumb.innerText = "";

    let newThumb = document.createElement("img");
    newThumb.src  = arnoThumb;

    getNewThumb.append(newThumb);

    let newDate = document.getElementById("date_content");
    newDate.innerText = "";
    newDate.innerText = "1434";

    let newDescription  = document.getElementById("right_content_description");
    newDescription.innerText = "";
    newDescription.innerText = "It is considered one of the most original and complex paintings in Western art, because of its beauty, complex iconography, geometric orthogonal perspective, and expansion of the picture space with the use of a mirror. According to Ernst Gombrich 'in its own way it was as new and revolutionary as Donatello's or Masaccio's work in Italy. A simple corner of the real world had suddenly been fixed on to a panel as if by magic ... For the first time in history the artist became the perfect eye-witness in the truest sense of the term'.";

}

function fourteenSlidePanel(){
    let changeImage = document.getElementById("image_container");
    changeImage.innerText = "";

    let newImage = document.createElement("img");
    newImage.src  = monaLogo;

    changeImage.append(newImage);

    let getContainer = document.getElementById("left_content_container");
    getContainer.classList.remove("left_content_container_sea");
    getContainer.classList.remove("left_content_container_lady");
    getContainer.classList.remove("left_content_container_swing");
    getContainer.classList.add("left_content_container_cafe");


    let newUpper = document.getElementById("left_upper_text");
    newUpper.innerText = "";
    newUpper.classList.remove("girl_new_height");
    newUpper.classList.remove("swing_new_height");
    newUpper.classList.add("mona_new_height");

    let newLower = document.getElementById("left_lower_text");
    newLower.classList.add("apple_lower_text");
    newLower.classList.remove("cafe_lower_text");
    newLower.classList.remove("swing_lower_text");
    newLower.innerText = "";


    newUpper.innerText = "Mona Lisa";
    newLower.innerText = "Leonardo da Vinci";

    let getNewThumb = document.getElementById("left_thumb_container");
    getNewThumb.innerText = "";

    let newThumb = document.createElement("img");
    newThumb.src  = monaThumb;

    getNewThumb.append(newThumb);

    let newDate = document.getElementById("date_content");
    newDate.innerText = "";
    newDate.innerText = "1503";

    let newDescription  = document.getElementById("right_content_description");
    newDescription.innerText = "";
    newDescription.innerText = "The Mona Lisa (/ˌmoʊnə ˈliːsə/; italian: La Gioconda [la dʒoˈkonda] or Monna Lisa [ˈmɔnna ˈliːza]) is a half-length portrait painting by Italian artist Leonardo da Vinci. Considered an archetypal masterpiece of the Italian Renaissance, it has been described as 'the best known, the most visited, the most written about, the most sung about, the most parodied work of art in the world'. The painting's novel qualities include the subject's enigmatic expression, the monumentality of the composition, the subtle modelling of forms, and the atmospheric illusionism.";

}

function fithteenSlidePanel(){
    let changeImage = document.getElementById("image_container");
    changeImage.innerText = "";

    let newImage = document.createElement("img");
    newImage.src  = swingLogo;

    changeImage.append(newImage);

    let getContainer = document.getElementById("left_content_container");
    getContainer.classList.add("left_content_container_swing");
    getContainer.classList.remove("left_content_container_cafe");


    let newUpper = document.getElementById("left_upper_text");
    newUpper.innerText = "";
    newUpper.classList.remove("mona_new_height");
    newUpper.classList.add("swing_new_height");

    let newLower = document.getElementById("left_lower_text");
    newLower.classList.add("swing_lower_text");
    newLower.innerText = "";


    newUpper.innerText = "The Swing";
    newLower.innerText = "Jean Honore Fragonard";

    let getNewThumb = document.getElementById("left_thumb_container");
    getNewThumb.innerText = "";

    let newThumb = document.createElement("img");
    newThumb.src  = swingThumb;

    getNewThumb.append(newThumb);

    let newDate = document.getElementById("date_content");
    newDate.innerText = "";
    newDate.innerText = "1767";

    let newDescription  = document.getElementById("right_content_description");
    newDescription.innerText = "";
    newDescription.innerText = "The painting depicts an elegant young woman on a swing. A smiling young man, hiding in the bushes on the left, watches her from a vantage point that allows him to see up into her billowing dress, where his arm is pointed with hat in hand. A smiling older man, who is nearly hidden in the shadows on the right, propels the swing with a pair of ropes. The older man appears to be unaware of the young man. As the young lady swings high, she throws her left leg up, allowing her dainty shoe to fly through the air.";

}



export function loadSlide(){
   const section = document.createElement("section");
   section.id = "main_section";
    
    
   const nav = navigationBar();
   const panelOne = templatePanel();
   let slide = document.getElementById("slide_page");
   section.append(panelOne);
   slide.append(nav, section);
   stopSlide();
}
loadSlide();
loadFooter();
selectPanel();


function selectPanel(){
    const getForward = document.getElementById("back_button");
    const getBack = document.getElementById("forward_button");

    let functionArray = [
        firstSlidePanel,
        secondSlidePanel,
        thirdSlidePanel,
        fourthSlidePanel,
        fithSlidePanel,
        sixSlidePanel,
        sevenSlidePanel,
        eightSlidePanel,
        nineSlidePanel,
        tenSlidePanel,
        elevenSlidePanel,
        twelveSlidePanel,
        thirteenSlidePanel,
        fourteenSlidePanel,
        fithteenSlidePanel
    ]


    functionArray.id = "function_array";

    console.log(functionArray.indexOf(firstSlidePanel));
    console.log(functionArray.indexOf( secondSlidePanel));
    console.log(functionArray.indexOf(thirdSlidePanel));
    console.log(functionArray.indexOf(fourthSlidePanel));
    console.log(functionArray.indexOf(fithSlidePanel));
    console.log(functionArray.indexOf(sixSlidePanel));
    console.log(functionArray.indexOf(sevenSlidePanel));
    console.log(functionArray.indexOf(eightSlidePanel));
    console.log(functionArray.indexOf(nineSlidePanel));
    console.log(functionArray.indexOf(tenSlidePanel));
    console.log(functionArray.indexOf(elevenSlidePanel));
    console.log(functionArray.indexOf(twelveSlidePanel));
    console.log(functionArray.indexOf(thirteenSlidePanel));
    console.log(functionArray.indexOf(fourteenSlidePanel));
    console.log(functionArray.indexOf(fithteenSlidePanel));

    let index = 0;
    if(getForward.addEventListener("click", function(){
        if(index < 14)
        {
           index++;
           functionArray[index]();  
        }
    }));

    if(getBack.addEventListener("click", function(){
        if(index > 0)
        {
            index--; 
            functionArray[index]();
            console.log(index);  
        }
    }));


}