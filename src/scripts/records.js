
var textCont = document.getElementById("copyBody");
var textOpen = false;
var closeButton = document.getElementById("closeText");
var forward = document.getElementById("forwardText");
var instruct = document.getElementById("instructText");
var imgCount = 1;
var txtCount = 0;
var productSel = "";

window.Mossman = {
    location: "SEELOO",
    name: "Mossman Tunic +",
    story: [
        "<span class='green'>COMPOSITION:</span> <br><br>The Mossman Tunic and Pant combination is constructed of a layered smooth nylon-backed flocking velvet. ",
        "<span class='green'>BANKOO:</span> <br><br>The first person to have encountered a Mossman was thought to have been affected by hallucinogenic foreign fauna, as they described being in a world where the trees turned into people.",
        "<span class='green'>CONTINENT:</span> <br><br>Little is known about the 7th Continent and its elusive inhabitants. Those who’ve managed to reach it beyond the protection of the 4th and 5th Continent have reported a land of dreams and abstraction- where artifacts, people, and land are one-and-the-same.",
    ],
    images: "https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/records/Mossman/SCOGE-Mossman-small-",
};
window.Negative = {
    location: "SEELOO",
    name: "Negative Sweater",
    story: [
        "<span class='green'>COMPOSITION:</span> <br><br>Assembled with lightweight cotton twill and a thick gauge cotton sash cord, creating a physical contrast that intrigues depth perception.",
        "<span class='green'>BANKOO:</span> <br><br>Throughout the most technologically advanced cities, a few highly intelligent citizens have discovered depth perception-altering methods to avoid autopay systems.",
        "<span class='green'>CONTINENT:</span> <br><br>Little is known about the 7th Continent and its elusive inhabitants throughout Bankoo. Those who’ve managed to reach it beyond the protection of the 4th and 5th Continent have reported a land of dreams and abstraction- where artifacts, people, and land are one-and-the-same.",
    ],
    images: "https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/records/NegativeSweater/SCOGE-NegativeSweater-Small-",
};
window.AntiCoat = {
    location: "FAALSANA",
    name: "(Anti) SandCoat",
    story: [
        "<span class='green'>COMPOSITION:</span> <br><br>ANTI’ print cotton twill lightweight coat with braided mid-section.",
        "<span class='green'>BANKOO:</span> <br><br>T.A.O.S City citizens hold a strong resentment toward the neighboring Faalsana- blaming them for the inequalities and heavy law enforcement experienced throughout the city. However, are mostly unaware of the deadly campaigns that provoked the Faalsanians to flee into T.A.O.S and seek retribution.",
        "<span class='green'>CONTINENT:</span> <br><br>Neighboring Alansana- Faalsana is known to be politically unstable and marked as the land of Vagabonds, however, recently discovered documents shed light on a history of brutal global campaigns led by Alansana to gain control of a valuable unknown resource unique to Faalsana.",
    ],
    images: "https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/records/AntiCoat/SCOGE-AntiCoat-Small-",
};
window.AndWrap = {
    location: "FAALSANA",
    name: "DNA Wrap Dress",
    story: [
        "<span class='green'>COMPOSITION:</span> <br><br>Braided cotton shirting wrap top, with several Water & Sky talismans combined with ‘DNA’ print cotton-twill wrap skirt. The Water-Sky Talisman imbues an understanding of creativity and freedom, granting its wearer the ability to create valuable items and ideas.",
        "<span class='green'>BANKOO:</span> <br><br>Throughout Bankoo you’ll find inhabitants with apparel displaying bold reputations of a single word. Such apparel is part of a decentralized form of protest, where the complete sentiment is seen through the assembly of multiple persons.",
        "<span class='green'>CONTINENT:</span> <br><br>Neighboring Alansana- Faalansana is known to be politically unstable and marked as the land of Vagabonds, however, recently discovered documents shed light on a history of brutal global campaigns led by Alansana to gain control of a valuable unknown resource unique to Faalansana.",
    ],
    images: "https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/records/AndWrap/SCOGE-AndWrap-Small-",
};
window.tenthDmDress = {
    location: "JINOO",
    name: "10th Dimension Dress",
    story: [
        "<span class='green'>COMPOSITION:</span> <br><br>The 10th Dimension Dress is constructed of 70 Sun-Body Talismans bound together. The Sun-Body Talismans imbue an understanding of scale, granting its wearer the ability to recognize worlds beyond and within their own.",
        "<span class='green'>BANKOO:</span> <br><br>Within some continents of Bankoo you’ll find that dress serves additional utilities beyond protection and status. In some places, apparel is used as a tool to explore the metaphysical, which in Bankoo is a vast understood realm.",
        "<span class='green'>CONTINENT:</span> <br><br>This dress comes from the 4th Continent Jinoo. You’ll find its inhabitants retain and nurture a unique sense of metaphysical intuition and practice. They adorn themselves in talismans reshaped into what could be considered garments but have little regard for the conventional.",
    ],
    images: "https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/records/10DimensionDress/SCOGE-10thDimensionDress-Small-",
};
window.tenthDmVest = {
    location: "JINOO",
    name: "10th Dimension Vest",
    story: [
        "<span class='green'>COMPOSITION:</span> <br><br>The 10th Dimension Vest is constructed of 46 Water-Sky Talismans bound together. The Water-Sky Talisman imbues an understanding of creativity and freedom, granting its wearer the ability to create valuable items and ideas.",
        "<span class='green'>BANKOO:</span> <br><br>It’s said throughout Bankoo that T.A.O.S city founders were the first few carriers of the Water-Sky Talisman. Leading many aspiring architects and cerebraticians to seek the artifact.",
        "<span class='green'>CONTINENT:</span> <br><br>Most Talismans are discovered on the 4th Continent of Jinoo. You’ll find its inhabitants retain and nurture a unique sense of metaphysical intuition and practice. They adorn themselves in talismans reshaped into what could be considered garments but have little regard for the conventional.",
    ],
    images: "https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/records/10thDimensionVest/SCOGE-10thDimensionVest-Small-",
};
window.ProDress = {
    location: "FAALSANA",
    name: "(Pro) Willowing Dress +",
    story: [
        "<span class='green'>COMPOSITION:</span> <br><br>Braided, ‘PRO’ print cotton twill willowing Pancho, with a single Fire & Blood talisman known to grant the wearer access to the Union-of-the-three, a rare mental attribute. Combined with ‘PRO’ print cotton twill  Asymmetrical drop skirt.",
        "<span class='green'>BANKOO:</span> <br><br>After a series of intense deadly protests against the Lx-comm corporation, T.A.O.S city politicians and allies made it close to impossible for any group globally to assemble in protest. Citizens from neighboring countries developed ingenious decentralized methods to avoid singular individual prosecution.",
        "<span class='green'>CONTINENT:</span> <br><br>Neighboring Alansana- Faalansana is known to be politically unstable and marked as the land of Vagabonds, however, recently discovered documents shed light on a history of brutal global campaigns led by Alansana to gain control of a valuable unknown resource unique to Faalansana.",
    ],
    images: "https://storageapi.fleek.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Images/records/ProDress1/SCOGE-ProDress-Small-",
};

window.enterRecords = () => {
    document.getElementById("landingP").style.display = "none";
}
window.viewRecordText = () => {
    closeButton.style.display = "block";
    textCont.style.transition = ".5s all";
    textCont.style.bottom = "0%";
    textOpen = true;
    textCont.removeAttribute("onclick", viewRecordText);
    document.getElementById("cbText").style.transition = "2s all";
    document.getElementById("cbText").style.opacity = "100%";
    forward.style.display = "block";
    instruct.style.display = "none";
}
window.closeText = () => {
    closeButton.style.display = "none";
    forward.style.display = "none";
    textCont.style.bottom = "-40%";
    textCont.setAttribute("onclick", "viewRecordText()");
    document.getElementById("cbText").style.transition = "1s all";
    document.getElementById("cbText").style.opacity = "0%";
    instruct.style.display = "block";
}
window.nextImage = () => {
    document.getElementById("location").innerHTML = eval(productSel).location;
    document.getElementById("name").innerHTML = eval(productSel).name;
    if (imgCount <= 5) {
        document.getElementById("images").style.backgroundImage = `url("${eval(productSel).images+imgCount}.jpg")`;
        if (imgCount === 5) {
            imgCount = 1;
            return
        } else {
            imgCount++
            return
        }
    }
}
window.nextText = () => {
    document.getElementById("cbText").scrollTop = 0;
    if (txtCount <= 2) {
        document.getElementById("cbText").innerHTML = eval(productSel).story[txtCount];
        if (txtCount === 2) {
            txtCount = 0;
            return
        } else {
            txtCount++
            return
        }
    }
}

window.getParamsRecords = () => {
    const params = new URLSearchParams(window.location.search)
    productSel = params.get("Product");
    window.nextImage();
    window.nextText();
  }