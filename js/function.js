// Array mit den fuer die Bildergalerie notwendigen Informationen
var picGalleryArray = [
    [
        "img/luis-royo-original-the-monastery-of-the-red-witches.jpg",
        "img/rhapsody-v.jpg",
        "img/miel-de-sombras(3).jpg",
        "img/sinner.jpg",
        "img/40352572_1517231451711722_3495695515964669952_n.jpg",
        "img/40962704_2144412368925699_3161712712929509376_n.jpg",
        "img/7-LuisRoyo-Ref_DL_18-Title_Dreaming_in_the_Labyrinth_18-Year_2016-7-Size_28x38_5cm.jpg",
        "img/NewProhibitedIV2010.jpg",
        "img/LuisRoyo-Ref_DL_10-Title_Dreaming_in_the_Labyrinth_10-Year_2015-Size_27x39cm.jpg",
        "img/3-LuisRoyo-Ref_LNDM-Title_La_noche_de_Medusa-Year_Size_56_38cm-Mancha_30x46cm.jpg",
        "img/3-LuisRoyo-Ref_LNDM-Title_La_noche_de_Medusa-Year_Size_56_38cm-Mancha_30x46cm.jpg",
        "img/1-LuisRoyo-Ref_DN-Title_Dance_night-Year_2018_Size_76x56cm-Mancha_63x42cm.jpg",
        "img/Luz-The-Great-Goat-2-by-Luis-Royo-published-in-Malefic-Time-Akelarre-book.jpg",
        "img/The-Thousand-Faces-of-Lilith-6-by-Luis-Royo-published-in-Malefic-Time-Akelarre-book.jpg",
        "img/Luis-Royo-illustration-Evolution-book-Malefic-Time-Full-Moon-2000.jpg",
        "img/Luis-Royo-illustration-Prohibited-II-book-Surprise-2000.jpg",
        "img/Malefic-Time-Apocalypse-Luis-Royo-Romulo-Royo-illustration-Soum-2011.jpg",
        "img/Luis-Royo-illustration-Women-book-New-Women-2004.jpg",
        "img/Malefic-Time-110-Katanas-Luis-Royo-Romulo-Royo-illustration-The-Blade-and-Plucked-Flowers-2013.jpg",
        "img/Luis-Royo-illustration-Subversive-beauty-Medusas-Gaze-2005.jpg",
        "img/Luis-Royo-Romulo-Royo-illustration-Malefic-Time-Akelarre-2016.jpg",
        "img/dark-room-15.jpg",
        "img/the-bed-of-the-four-moons.jpg",
        "img/A-Thousand-Words-For-Stranger-III-Millennium-1997.jpg",
        "img/P-148-PORTADA-III-MILLENIUM.jpg",
        "img/TheFiveActsOfHecate.jpg",
        "img/MadreTierra.jpg",
        "img/Threads-of-Desire-1995.jpg",
        "img/NewSecrets.jpg",
        "img/The-Observer-I-2000.jpg",
        "img/Vacationning-on-the-Southern-Beaches-1996.jpg",
        "img/LuisRoyo-Luz_Tokio_4.jpg",
        "img/The-Needles-of-Joy-2004.jpg",
        "img/LuisRoyoRomuloRoyo-Night_and_Moon.jpg",
        "img/Subversive-Beauty-China-Eye-2005.jpg",
        "img/The-Five-Faces-of-Hecate-N.-4-2004.jpg",
        "img/Dead-Moon-Nido-de-Brujas-2009.jpg",
        "img/Prohibited-Book-2-El-Principe-Azul-20-2001.jpg",
        "img/New-III-Millenium-2004.jpg",
        "img/New-Malefic-2004.jpg",
        "img/Dead-Moon-El-Vuelo-2008.jpg",
        "img/Fondo5.jpg",
        "img/Fondo11.jpg",
        "img/Fondo2.jpg",
        "img/Fondo3.jpg",
        "img/Fondo4.jpg"
    ],
    [
        "the-monastery-of-the-red-witches",
        "rhapsody-v",
        "miel-de-sombras (3)",
        "sinner",
        "Picture by Royo",
        "Picture by Royo",
        "Dreaming_in_the_Labyrinth",
        "Picture by Royo",
        "Dreaming_in_the_Labyrinth",
        "La_noche_de_Medusa",
        "Dance_night",
        "Luz-The-Great-Goat",
        "The-Thousand-Faces-of-Lilith",
        "Time-Full-Moon",
        "Prohibited",
        "Soum-2011",
        "New-Women-2004",
        "The-Blade-and-Plucked-Flowers",
        "Subversive-beauty-Medusas-Gaze",
        "Akelarre",
        "dark-room",
        "the-bed-of-the-four-moons",
        "Picture by Royo",
        "Picture by Royo",
        "The Five Acts Of Hecate",
        "Madre Tierra",
        "Threads-of-Desire",
        "Picture by Royo",
        "The-Observer",
        "Luz_Tokio",
        "The-Needles-of-Joy",
        "Picture by Royo",
        "Subversive-Beauty-China-Eye",
        "The-Five-Faces-of-Hecate",
        "Dead-Moon-Nido-de-Brujas",
        "El-Principe-Azul",
        "Picture by Royo",
        "Picture by Royo",
        "El-Vuelo",
        "Picture by Royo",
        "Picture by Royo",
        "Picture by Royo",
        "Picture by Royo",
        "Picture by Royo"
    ],
    [
        "-the-monastery-of-the-red-witches",
        "rhapsody-v",
        "miel-de-sombras",
        "sinner",
        "Picture by Royo",
        "Picture by Royo",
        "Dreaming_in_the_Labyrinth",
        "Picture by Royo",
        "Dreaming_in_the_Labyrinth",
        "La_noche_de_Medusa",
        "Dance_night",
        "Luz-The-Great-Goat",
        "The-Thousand-Faces-of-Lilith",
        "Time-Full-Moon",
        "Prohibited",
        "Soum-2011",
        "New-Women-2004",
        "The-Blade-and-Plucked-Flowers",
        "Subversive-beauty-Medusas-Gaze",
        "Akelarre",
        "dark-room",
        "the-bed-of-the-four-moons",
        "Picture by Royo",
        "Picture by Royo",
        "The Five Acts Of Hecate",
        "Madre Tierra",
        "Threads-of-Desire",
        "Picture by Royo",
        "The-Observer",
        "Vacationning-on-the-Southern-Beaches",
        "Luz_Tokio",
        "The-Needles-of-Joy",
        "Picture by Royo",
        "Subversive-Beauty-China-Eye",
        "The-Five-Faces-of-Hecate",
        "Dead-Moon-Nido-de-Brujas",
        "El-Principe-Azul",
        "Picture by Royo",
        "Picture by Royo",
        "El-Vuelo",
        "Picture by Royo",
        "Picture by Royo",
        "Picture by Royo",
        "Picture by Royo",
        "Picture by Royo"
    ]
];

// Zaehlervariable zum iterieren der Bildergalerie
var picIndex = 0;

// Funktion zum setzen der Bilder im DOM
function setImage()
{
    document.getElementById("imgID").src = picGalleryArray[0][picIndex];
    document.getElementById("imgID").alt = picGalleryArray[1][picIndex];
    document.getElementById("imgID").title = picGalleryArray[2][picIndex];
    document.getElementById("artDiscriptionID").innerHTML = picGalleryArray[2][picIndex];
}

// Funktion zum setzen des naechsten Bildes bzw. Zaehlervariablen
function setNextPicCounter() {
    if (picIndex >= 44) {
        picIndex = -1;
    }
    picIndex++;
}

// Funktion zum iteriren der Bilder
function iterateGallery() {
    setImage();
    setNextPicCounter();
}
