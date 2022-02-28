import style from '../global-style.css';
import imageOne from '../assets/starry-night/thumbnail.jpg';
import imageTwo from '../assets/girl-with-pearl-earring/thumbnail.jpg';
import imageThree from '../assets/guernica/thumbnail.jpg';
import imageFour from '../assets/penitent-magdalene/thumbnail.jpg';
import imageFive from '../assets/the-storm-on-the-sea-of-galilee/thumbnail.jpg';
import imageSix from '../assets/the-great-wave-off-kanagawa/thumbnail.jpg';
import imageSeven from '../assets/van-gogh-self-portrait/thumbnail.jpg';
import imageEight from '../assets/the-sleeping-gypsy/thumbnail.jpg';
import imageNine from '../assets/lady-with-an-ermine/thumbnail.jpg';
import imageTen from '../assets/the-night-cafe/thumbnail.jpg';
import imageEleven from '../assets/mona-lisa/thumbnail.jpg';
import imageTwelve from '../assets/the-basket-of-apples/thumbnail.jpg';
import imageThirteen from '../assets/the-boy-in-the-red-vest/thumbnail.jpg';
import imageFourteen from '../assets/arnolfini-portrait/thumbnail.jpg';
import imageFithteen from '../assets/the-swing/thumbnail.jpg';
import { navigationBar} from './navbar';


function picturePanel(wrapperName, imageSource, topContentText, bottomContentText){
    const panelWrapper = document.createElement("div");
    panelWrapper.id = "home_panel_wrapper";
    panelWrapper.classList.add(wrapperName);

    const panelImage = document.createElement("img");
    panelImage.id = "home_panel_image";
    panelImage.src= imageSource;

    const panelContentContainer = document.createElement("div");
    panelContentContainer.id = "home_panel_content_container";

    const topContent = document.createElement("p");
    const bottomContent = document.createElement("p");
    topContent.id = 'home_top_content';
    bottomContent.id = 'home_bottom_content';
    topContent.innerText = topContentText;
    bottomContent.innerText = bottomContentText;



    panelContentContainer.append(topContent, bottomContent);
    panelWrapper.append(panelImage, panelContentContainer);

    return panelWrapper;
}

function createHome(){
    const homeWrapper = document.createElement("div");
    homeWrapper.id = "home_wrapper";
    
    
    let one = picturePanel("panel_one", imageOne, "Starry Night", "Vincent van Gogh");
    let two = picturePanel("panel_two", imageTwo, "Girl with a Pearl Earing", "Johannes Vermeer");
    let three = picturePanel("panel_three", imageThree, "Guernica", "Pablo Picasso");
    let four = picturePanel("panel_four", imageFour, "Penitent Magdalene", "Artemisia Gentileschi");
    let five = picturePanel("panel_five", imageFive, "The Storm on the Sea of Galilee", "Rembrandt");
    let six = picturePanel("panel_six", imageSix, "The Great Wave off Kanagawa", "Hokusai");
    let seven = picturePanel("panel_seven", imageSeven, "Van Gogh self-portrait", "Vincent van Gogh");
    let eight = picturePanel("panel_eight", imageEight, "The Sleeping Gypsy", "Henri Rousseau");
    let nine = picturePanel("panel_nine", imageNine, "Lady with an Ermin", "Leonardo da Vinci");
    let ten = picturePanel("panel_ten", imageTen, "The Night Cafe", "Vincent van Gogh");
    let eleven = picturePanel("panel_eleven", imageEleven, "Mona Lisa", "Leonardo da Vinci");
    let twelve = picturePanel("panel_twelve", imageTwelve, "The Basket of Apples", "Paul Cezanne");
    let thirteen = picturePanel("panel_thirteen", imageThirteen, "The Boy in the Red Vest", "Edward Hopper");
    let fourteen = picturePanel("panel_fourteen", imageFourteen, "Arnolfini Portrait", "Jan van Eyck");
    let fithteen = picturePanel("panel_fithteen", imageFithteen, "The Swing", "Jean-Honore Fragonard");


    homeWrapper.append(one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fithteen);

    return homeWrapper;
}

function loadHome(){
    const createNav = navigationBar();
    const getHome = document.getElementById("home_page");
    const getWrapper = createHome();

    getHome.append(createNav, getWrapper);
}
loadHome();
