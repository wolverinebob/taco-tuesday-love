import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  contacts = [
    {id: 1, name: "Contact 001", pic: "../../assets/imgs/EEVON.png", description: "https://www.biggerbolderbaking.com/wp-content/uploads/2017/08/1C5A0056-500x500.jpg", email: "c001@email.com"},
    {id: 2, name: "Contact 002", pic: "../../assets/imgs/EEVON.png", description: "https://www.biggerbolderbaking.com/wp-content/uploads/2017/08/1C5A0056-500x500.jpg", email: "c002@email.com"},
    {id: 3, name: "Contact 003", pic: "../../assets/imgs/EEVON.png", description: "https://www.biggerbolderbaking.com/wp-content/uploads/2017/08/1C5A0056-500x500.jpg", email: "c003@email.com"},
    {id: 4, name: "Contact 004", pic: "../../assets/imgs/EEVON.png", description: "https://www.blessthismessplease.com/wp-content/uploads/2013/05/Pioneer-Womans-yeast-glazed-donuts2.jpg", email: "c004@email.com"}
  ];
  bostonRest = [
    {
      type: "American",
      name: "Buttermilk & Bourbon",
      logo: "../../assets/fw/BmB-logo.png",
      pics: [
        "../../assets/fw/BmB-oysters.jpg",
        "../../assets/fw/BmB-teapot.jpg",
        "../../assets/fw/BmB-chickWaff.jpg"
      ],
      url: "https://www.buttermilkbourbon.com/"
    },
    {
      type: "Italian",
      name: "Vinoteca di Monica",
      logo: "../../assets/fw/Monicas-logo.png",
      pics: [
        "../../assets/fw/Monicas-arancini.jpg",
        "../../assets/fw/Monicas-shrimp.png",
        "../../assets/fw/Monicas-salmon.png"
      ],
      url: "https://www.monicasboston.com/"
    },
    {
    type: "sweets",
    name: "Modern Pastry",
    logo: "../../assets/fw/MP-logo.png",
    pics: [
      "../../assets/fw/MP-cannoli.jpg",
      "../../assets/fw/MP-cookies.jpg",
      "../../assets/fw/MP-window.jpg"
    ],
    url: "https://www.modernpastry.com/"
    },
    {
    type: "sweets",
      name: "Insomnia Cookies",
      logo: "../../assets/fw/Insom-logo.png",
      pics: [
        "../../assets/fw/Insom-stack.png",
        "../../assets/fw/Insom-cake.png",
        "../../assets/fw/Insom-6pack.jpg"
      ],
      url: "https://insomniacookies.com/"
    },
    {
      type: "sweets",
      name: "Milk Bar",
      logo: "../../assets/fw/MB-logo.jpeg",
      pics: [
        "../../assets/fw/MB-everything.png",
        "../../assets/fw/MB-bday-truffles.jpg",
        "../../assets/fw/MB-cookies.jpg"
      ],
      url: "https://milkbarstore.com/"
    },
    {
      type: "sweets",
      name: "Zinneken's Waffles",
      logo: "../../assets/fw/ZW-logo.png",
      pics: [
        "../../assets/fw/ZW-assorted.jpg",
        "../../assets/fw/ZW-berries.jpg",
        "../../assets/fw/ZW-banutella.jpg"
      ],
      url: "http://zinnekenswaffles.com/"
      }
    ];
  sanDiegoRest = [
    {
      type: "American",
      name: "Rocky's Crown Pub",
      logo: "../../assets/fw/RCP-logo.png",
      pics: [
        "../../assets/fw/RCP-burger-fries.jpeg"
      ],
      url: "http://rockyburgers.com/"
    },
    {
      type: "American",
      name: "Hodad's",
      logo: "../../assets/fw/HD-logo.png",
      pics: [
        "../../assets/fw/HD-burger.jpg",
        "../../assets/fw/HD-milkshake.jpg",
        "../../assets/fw/HD-onion-rings.jpg"
      ],
      url: "https://hodadies.com/"
    },
    {
      type: "Brunch",
      name: "Breakfast Republic",
      logo: "../../assets/fw/BR-logo.png",
      pics: [
        "../../assets/fw/BR-breakfast.jpeg",
        "../../assets/fw/BR-pancakes.jpg",
        "../../assets/fw/BR-burrito.jpg"
      ],
      url: "https://www.breakfastrepublic.com/"
    },
    {
      type: "sweets",
      name: "Crumbl Cookies",
      logo: "../../assets/fw/Crumbl-logo.svg",
      pics: [
        "../../assets/fw/Crumbl-ckCrm.png",
        "../../assets/fw/Crumbl-ReesesPB.png",
        "../../assets/fw/Crumbl-Nutella.png"
      ],
      url: "https://www.crumblcookies.com/"
    },
    {
      type: "sweets",
      name: "Extraordinary Desserts",
      logo: "../../assets/fw/ED-logo.png",
      pics: [
        "../../assets/fw/ED-plates.jpg",
        "../../assets/fw/ED-PBJ-toast.jpg",
        "../../assets/fw/ED-samSoup.jpg"
      ],
      url: "http://extraordinarydesserts.com/"
    }
  ];
  fortWorthRest = [
    {
      type: "Texan",
      name: "Reata",
      logo: "../../assets/fw/Reata-logo.jpg",
      pics: [
        "../../assets/fw/Reata-chile-relleno.jpg",
        "../../assets/fw/Reata-salad.jpg",
        "../../assets/fw/Reata-calf-fries.jpg"
      ],
      url: "https://www.reata.net/"
    },
    {
      type: "Texan",
      name: "Bonnell's Texas",
      logo: "../../assets/fw/BonL-logoBk.png",
      pics: [
        "../../assets/fw/BonL-real.jpg",
        "../../assets/fw/BonL-fried.jpeg",
        "../../assets/fw/BonL-dessert.jpg"
      ],
      url: "https://bonnellstexas.com/"
    },
    {
      type: "BBQ",
      name: "Cousin's BBQ",
      logo: "../../assets/fw/CBBQ-logo.png",
      pics: [
        "../../assets/fw/CBBQ-brisket-flag.jpg",
        "../../assets/fw/CBBQ-assorted.jpg",
        "../../assets/fw/CBBQ-sandwich.jpg",
        "../../assets/fw/CBBQ-tray.jpg"
      ],
      url: "https://www.cousinsbbq.com/"
    },
    {
      type: "Mexican",
      name: "La Familia Mexican Restaurant",
      logo: "../../assets/fw/LFMex-logo.png",
      pics: [
        "../../assets/fw/LFMex-fajitas.jpg",
        "../../assets/fw/LFMex-enchiladas.jpg",
        "../../assets/fw/LFMex-marg.jpg"
      ],
      url: "https://www.cousinsbbq.com/"
    },
    {
      type: "sweets",
      name: "Crumbl Cookies",
      logo: "../../assets/fw/Crumbl-logo.svg",
      pics: [
        "../../assets/fw/Crumbl-ckCrm.png",
        "../../assets/fw/Crumbl-ReesesPB.png",
        "../../assets/fw/Crumbl-Nutella.png"
      ],
      url: "https://www.crumblcookies.com/"
    },
    {
      type: "sweets",
      name: "Schakolad Chocolate Factory",
      logo: "../../assets/fw/SCF-logo.jpeg",
      pics: [
        "../../assets/fw/SCF-chocobites.jpg",
        "../../assets/fw/SCF-strawberries.jpg",
        "../../assets/fw/SCF-chocobar.jpg"
      ],
      url: "https://schakolad.com/"
    },
    {
      type: "sweets",
      name: "Steel City Pops",
      logo: "../../assets/fw/SCP-logo.svg",
      pics: [
        "../../assets/fw/SCP-stacks.jpg",
        "../../assets/fw/SCP-fruity.jpg",
        "../../assets/fw/SCP-watermelon.jpg",
        "../../assets/fw/SCP-FlavorGif.gif"
      ],
      url: "https://steelcitypops.com/"
    }
//   {
//   type: "sweets",
//   name: "Sweet Sammies",
//   logo: "../../assets/fw/SSam-logo.png",
//   pics: [
//     "../../assets/imgs/SSam-flavors.jpg",
//     "../../assets/imgs/SSam-cookie.jpeg",
//     "../../assets/imgs/SSam-cookie.jpeg"
//   ],
//   url: "https://www.ubereats.com/dallas/food-delivery/sweet-sammies/xU3d83FIRPecXQmhZwQ_AA"
// },
    
  ];
  nYCRest = [
    {
      type: "Italian",
      name: "Don Angie",
      logo: "../../assets/nyc/DA-logoM.png",
      pics: [
        "../../assets/nyc/DA-yummy.jpg",
        "../../assets/nyc/DA-antipasto.jpg",
        "../../assets/nyc/DA-steak.jpg"
      ],
      url: "https://www.donangie.com/"
    },
    {
      type: "Steakhouse",
      name: "4 Charles Prime Rib",
      logo: "../../assets/nyc/4CPR-logoBk.png",
      pics: [
        "../../assets/nyc/4CPR-steak.webp",
        "../../assets/nyc/4CPR-meal.webp",
        "../../assets/nyc/4CPR-burger.webp"
      ],
      url: "http://www.nycprimerib.com/"
    },
    {
      type: "Bar",
      name: "Tokyo Record Bar",
      logo: "../../assets/nyc/TRB-logoW.jpg",
      pics: [
        "../../assets/nyc/TRB-bar.jpg",
        "../../assets/nyc/TRB-sammie.jpg",
        "../../assets/nyc/TRB-sushi.jpg"
      ],
      url: "https://www.tokyorecordbar.com/"
    },
    {
      type: "Seafood",
      name: "Gramercy Tavern",
      logo: "../../assets/nyc/GT-logoGr.png",
      pics: [
        "../../assets/nyc/GT-lobster-salad.jpg",
        "../../assets/nyc/GT-shrimp-dumplings.jpg",
        "../../assets/nyc/GT-bbry-pie.jpg"
      ],
      url: "https://www.gramercytavern.com/"
    },
  ];
  sarasotaRest = [
    {
      type: "sweets",
      name: "Federal Doughnuts",
      logo: "../../assets/imgs/FedNuts-logo.png",
      pics: [
        "../../assets/imgs/FedNuts-pack6.jpg",
        "../../assets/imgs/FedNuts-chiksam.jpg",
        "../../assets/imgs/FedNuts-baby.jpg"
      ],
      url: "https://www.federaldonuts.com/"
    }
  ];
  phillyRest = [
    {
      type: "sweets",
      name: "Federal Doughnuts",
      logo: "../../assets/imgs/FedNuts-logo.png",
      pics: [
        "../../assets/imgs/FedNuts-pack6.jpg",
        "../../assets/imgs/FedNuts-chiksam.jpg",
        "../../assets/imgs/FedNuts-baby.jpg"
      ],
      url: "https://www.federaldonuts.com/"
    },
    {
      type: "sweets",
      name: "Philly Cheesecake Lady",
      logo: "../../assets/imgs/CCLady-logo.jpg",
      pics: [
        "../../assets/imgs/CCLady-baby6.png",
        "../../assets/imgs/CCLady-baby12.png",
        "../../assets/imgs/CCLady-bbry.png"
      ],
      url: "https://www.phillycheesecakelady.com/"
    },
    {
      type: "sweets",
      name: "Beiler's Doughnuts",
      logo: "../../assets/imgs/BD-logoP2.png",
      pics: [
        "../../assets/imgs/BD-3choco.png",
        "../../assets/imgs/BD-mocha.png",
        "../../assets/imgs/BD-PBC.png"
      ],
      url: "https://www.beilersdoughnuts.com/"
    },
    {
      type: "sweets",
      name: "The Bakeshop on 20th",
      logo: "../../assets/imgs/BS20-logo.png",
      pics: [
        "../../assets/imgs/BS20-fudgy.png",
        "../../assets/imgs/BS20-baked.png",
        "../../assets/imgs/BS20-window.jpg"
      ],
      url: "https://www.bakeshopon20th.com/"
    },
    {
      type: "American",
      name: "Good Dog Bar",
      logo: "../../assets/imgs/GDBar-logoimg.jpg",
      pics: [
        "../../assets/imgs/GDBar-burger.jpg",
        "../../assets/imgs/GDBar-MozzWings.jpg",
        "../../assets/imgs/GDBar-taco.jpg"
      ],
      url: "http://www.gooddogbar.com/"
    },
    {
      type: "American",
      name: "Village Whiskey",
      logo: "../../assets/imgs/VW-logo.png",
      pics: [
        "../../assets/imgs/VW-burger.jpeg",
        "../../assets/imgs/VW-French.jpg",
        "../../assets/imgs/VW-IceBall.jpg"
      ],
      url: "http://philadelphia.villagewhiskey.com/"
    },
    {
      type: "American",
      name: "The Continental Mid-town",
      logo: "../../assets/imgs/CMtown-logoO.png",
      pics: [
        "../../assets/imgs/CMtown-brunch.jpg",
        "../../assets/imgs/CMtown-drink.jpg",
        "../../assets/imgs/CMtown-desserts.jpg"
      ],
      url: "https://continentalmidtown.com/"
    },
    {
      type: "Mexican",
      name: "Mission Taqueria",
      logo: "../../assets/imgs/MTaq-logo.png",
      pics: [
        "../../assets/imgs/MTaq-nachos.jpg",
        "../../assets/imgs/MTaq-marg.jpg",
        "../../assets/imgs/MTaq-tacos.jpg"
      ],
      url: "https://www.missiontaqueria.com/"
    },
    {
      type: "Italian",
      name: "Pizzeria Vetri",
      logo: "../../assets/imgs/PV-logo.jpg",
      pics: [
        "../../assets/imgs/PV-crudo.png",
        "../../assets/imgs/PV-rotolo.png",
        "../../assets/imgs/PV-espresso.png"
      ],
      url: "https://www.pizzeriavetri.com/"
    },
    {
      type: "Italian",
      name: "Villa di Roma",
      logo: "../../assets/imgs/VdR-logo.png",
      pics: [
        "../../assets/imgs/VdR-ziti.jpg",
        "../../assets/imgs/VdR-salad.jpg",
        "../../assets/imgs/VdR-shrimp.jpg"
      ],
      url: "http://www.villadiroma.com/"
    },
    {
      type: "Israeli",
      name: "Merkaz",
      logo: "../../assets/imgs/Merk-logo.png",
      pics: [
        "../../assets/imgs/Merk-meal.jpg",
        "../../assets/imgs/Merk-pita.jpg",
        "../../assets/imgs/Merk-dinner.jpg"
      ],
      url: "http://www.merkazphilly.com/"
    },
    {
      type: "Mediterranean",
      name: "Dizengoff Hummus",
      logo: "../../assets/imgs/DZH-logo.png",
      pics: [
        "../../assets/imgs/DZH-dinner.jpg",
        "../../assets/imgs/DZH-oven.jpg",
        "../../assets/imgs/DZH-tray.jpg"
      ],
      url: "https://www.dizengoffhummus.com/"
    },
    {
      type: "British",
      name: "The Dandelion",
      logo: "../../assets/imgs/Dandy-logoY.png",
      pics: [
        "../../assets/imgs/Dandy-brunch.jpg",
        "../../assets/imgs/Dandy-lunch.jpg",
        "../../assets/imgs/Dandy-dessert.jpg"
      ],
      url: "https://thedandelionpub.com/"
    }
  ]

  constructor() { }

  public getContacts():Array<{id, pic, name, description, email}>{
    return this.contacts;
  }
  public createContact(contact: {id, pic, name, description, email}){
    this.contacts.push(contact);
  }
  public getSanDiego():Array<{type, name, logo, pics, url}>{
    return this.sanDiegoRest
  }
  public getFortWorth():Array<{type, name, logo, pics, url}>{
    return this.fortWorthRest
  }
  public getBoston():Array<{type, name, logo, pics, url}>{
    return this.bostonRest
  }
  public getNYC():Array<{type, name, logo, pics, url}>{
    return this.nYCRest
  }
  public getPhilly():Array<{type, name, logo, pics, url}>{
    return this.phillyRest
  }
  public getSarasota():Array<{type, name, logo, pics, url}>{
    return this.sarasotaRest
  }
}

