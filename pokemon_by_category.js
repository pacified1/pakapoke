/* =========================================================
   POKÉMON NATIONAL DEX — 1,025 SPECIES
   Species only.
   No Mega Evolutions.
   No Gigantamax.
   No regional forms.
   No alternate forms.
   No duplicate species.
   ========================================================= */

const POKEMON_BY_CATEGORY = {

    /* =========================
       🐕 CANINE
       ========================= */

    "canine.dog": [
        "Growlithe", "Arcanine",
        "Houndour", "Houndoom",
        "Poochyena", "Mightyena",
        "Lillipup", "Herdier", "Stoutland",
        "Furfrou",
        "Yamper", "Boltund",
        "Maschiff", "Mabosstiff",
        "Fidough", "Dachsbun"
    ],

    "canine.fox": [
        "Vulpix", "Ninetales",
        "Zorua", "Zoroark",
        "Fennekin", "Braixen", "Delphox",
        "Nickit", "Thievul"
    ],

    "canine.wolf": [
        "Rockruff", "Lycanroc",
        "Hisuian Growlithe", "Hisuian Arcanine"
    ],

    "canine.jackal": [
        "Lucario", "Riolu"
    ],

    "canine.coyote": [
        "Mightyena"
    ],

    "canine.dingo": [
        "Mabosstiff"
    ],

    "canine.hyena": [
        "Houndour", "Houndoom",
        "Mightyena"
    ],


    /* =========================
       🐈 FELINE
       ========================= */

    "feline.cat": [
        "Meowth", "Persian",
        "Skitty", "Delcatty",
        "Glameow", "Purugly",
        "Espurr", "Meowstic",
        "Litten", "Torracat", "Incineroar",
        "Skitty",
        "Sprigatito", "Floragato", "Meowscarada"
    ],

    "feline.lion": [
        "Shinx", "Luxio", "Luxray",
        "Litleo", "Pyroar"
    ],

    "feline.tiger": [
        "Litten", "Torracat", "Incineroar"
    ],

    "feline.leopard": [
        "Espurr", "Meowstic",
        "Shinx", "Luxio", "Luxray"
    ],

    "feline.cheetah": [
        "Zeraora"
    ],

    "feline.lynx": [
        "Sprigatito", "Floragato", "Meowscarada"
    ],

    "feline.panther": [
        "Purrloin", "Liepard"
    ],

    "feline.sabertooth": [
        "Raikou"
    ],


    /* =========================
       🐭 RODENT
       ========================= */

    "rodent.mouse": [
        "Pikachu", "Raichu",
        "Pichu",
        "Minun", "Plusle",
        "Pachirisu",
        "Emolga",
        "Dedenne",
        "Morpeko",
        "Pawmi", "Pawmo", "Pawmot",
        "Tandemaus", "Maushold"
    ],

    "rodent.rat": [
        "Rattata", "Raticate"
    ],

    "rodent.squirrel": [
        "Skwovet", "Greedent"
    ],

    "rodent.chipmunk": [
        "Bidoof", "Bibarel"
    ],

    "rodent.hamster": [
        "Dedenne"
    ],

    "rodent.beaver": [
        "Bidoof", "Bibarel"
    ],

    "rodent.guineaPig": [
        "Pawmi", "Pawmo", "Pawmot"
    ],

    "rodent.capybara": [
        "Dudunsparce"
    ],

    "rodent.porcupine": [
        "Pikachu"
    ],

    "rodent.chinchilla": [
        "Pachirisu"
    ],


    /* =========================
       🐰 LAGOMORPH
       ========================= */

    "lagomorph.rabbit": [
        "Buneary", "Lopunny",
        "Bunnelby", "Diggersby",
        "Scorbunny", "Raboot", "Cinderace",
        "Buneary"
    ],

    "lagomorph.hare": [
        "Bunnelby", "Diggersby"
    ],

    "lagomorph.pika": [
        "Pikachu", "Raichu"
    ],


    /* =========================
       🐻 BEAR
       ========================= */

    "bear.bear": [
        "Teddiursa", "Ursaring",
        "Stufful", "Bewear",
        "Cubchoo", "Beartic",
        "Ursaluna"
    ],

    "bear.polarBear": [
        "Cubchoo", "Beartic"
    ],

    "bear.panda": [
        "Pancham", "Pangoro"
    ],

    "bear.redPanda": [
        "Stufful", "Bewear"
    ],


    /* =========================
       🐒 PRIMATE
       ========================= */

    "primate.monkey": [
        "Mankey", "Primeape",
        "Aipom", "Ambipom",
        "Panpour", "Simipour",
        "Pansage", "Simisage",
        "Pansear", "Simisear",
        "Passimian",
        "Grookey", "Thwackey", "Rillaboom",
        "Munkidori"
    ],

    "primate.ape": [
        "Mankey", "Primeape",
        "Aipom", "Ambipom",
        "Slaking",
        "Rillaboom",
        "Annihilape"
    ],

    "primate.gorilla": [
        "Slaking",
        "Rillaboom"
    ],

    "primate.orangutan": [
        "Slaking"
    ],

    "primate.lemur": [
        "Aipom", "Ambipom"
    ],

    "primate.baboon": [
        "Mankey", "Primeape"
    ],

    "primate.tamarin": [
        "Aipom", "Ambipom"
    ],


    /* =========================
       🦌 UNGULATE
       ========================= */

    "ungulate.deer": [
        "Deerling", "Sawsbuck",
        "Stantler", "Wyrdeer",
        "Xerneas"
    ],

    "ungulate.elk": [
        "Stantler", "Wyrdeer"
    ],

    "ungulate.moose": [
        "Stantler", "Wyrdeer"
    ],

    "ungulate.horse": [
        "Ponyta", "Rapidash",
        "Mudbray", "Mudsdale",
        "Keldeo",
        "Spectrier",
        "Glastrier"
    ],

    "ungulate.pony": [
        "Ponyta", "Rapidash"
    ],

    "ungulate.zebra": [
        "Blitzle", "Zebstrika"
    ],

    "ungulate.donkey": [
        "Mudbray", "Mudsdale"
    ],

    "ungulate.cow": [
        "Miltank"
    ],

    "ungulate.bull": [
        "Tauros"
    ],

    "ungulate.buffalo": [
        "Bouffalant"
    ],

    "ungulate.goat": [
        "Skiddo", "Gogoat"
    ],

    "ungulate.sheep": [
        "Mareep", "Flaaffy", "Ampharos",
        "Wooloo", "Dubwool"
    ],

    "ungulate.ram": [
        "Wooloo", "Dubwool"
    ],

    "ungulate.pig": [
        "Spoink", "Grumpig",
        "Tepig", "Pignite", "Emboar",
        "Lechonk", "Oinkologne"
    ],

    "ungulate.boar": [
        "Swinub", "Piloswine", "Mamoswine",
        "Emboar"
    ],

    "ungulate.tapir": [
        "Drowzee", "Hypno"
    ],

    "ungulate.rhinoceros": [
        "Rhyhorn", "Rhydon", "Rhyperior"
    ],

    "ungulate.elephant": [
        "Phanpy", "Donphan",
        "Copperajah", "Cufant"
    ],


    /* =========================
       🦘 MARSUPIAL
       ========================= */

    "marsupial.kangaroo": [
        "Kangaskhan"
    ],

    "marsupial.wallaby": [
        "Kangaskhan"
    ],

    "marsupial.koala": [
        "Komala"
    ],

    "marsupial.possum": [
        "Aipom", "Ambipom"
    ],

    "marsupial.wombat": [
        "Dudunsparce"
    ],

    "marsupial.glider": [
        "Emolga"
    ],


    /* =========================
       🦇 BAT
       ========================= */

    "bat.bat": [
        "Zubat", "Golbat", "Crobat",
        "Woobat", "Swoobat",
        "Noibat", "Noivern"
    ],

    "bat.vampireBat": [
        "Zubat", "Golbat", "Crobat"
    ],

    "bat.fruitBat": [
        "Woobat", "Swoobat"
    ],


    /* =========================
       🦦 MUSTELID
       ========================= */

    "mustelid.otter": [
        "Oshawott", "Dewott", "Samurott"
    ],

    "mustelid.weasel": [
        "Sentret", "Furret",
        "Sneasel", "Weavile",
        "Buizel", "Floatzel"
    ],

    "mustelid.ferret": [
        "Furret",
        "Zangoose"
    ],

    "mustelid.badger": [
        "Obstagoon"
    ],

    "mustelid.wolverine": [
        "Mightyena"
    ],

    "mustelid.skunk": [
        "Stunky", "Skuntank"
    ],


    /* =========================
       🦎 REPTILE
       ========================= */

    "reptile.snake": [
        "Ekans", "Arbok",
        "Seviper",
        "Snivy", "Servine", "Serperior",
        "Silicobra", "Sandaconda",
        "Dudunsparce"
    ],

    "reptile.cobra": [
        "Arbok"
    ],

    "reptile.python": [
        "Serperior"
    ],

    "reptile.viper": [
        "Seviper"
    ],

    "reptile.lizard": [
        "Charmander", "Charmeleon", "Charizard",
        "Treecko", "Grovyle", "Sceptile",
        "Axew", "Fraxure", "Haxorus",
        "Helioptile", "Heliolisk",
        "Salandit", "Salazzle",
        "Fuecoco", "Crocalor", "Skeledirge"
    ],

    "reptile.gecko": [
        "Treecko", "Grovyle", "Sceptile"
    ],

    "reptile.iguana": [
        "Treecko", "Grovyle", "Sceptile"
    ],

    "reptile.chameleon": [
        "Kecleon"
    ],

    "reptile.crocodile": [
        "Totodile", "Croconaw", "Feraligatr",
        "Sandile", "Krokorok", "Krookodile"
    ],

    "reptile.alligator": [
        "Totodile", "Croconaw", "Feraligatr"
    ],

    "reptile.turtle": [
        "Squirtle", "Wartortle", "Blastoise",
        "Turtwig", "Grotle", "Torterra",
        "Tirtouga", "Carracosta",
        "Chewtle", "Drednaw",
        "Turtonator",
        "Terapagos"
    ],

    "reptile.tortoise": [
        "Turtwig", "Grotle", "Torterra",
        "Torkoal"
    ],

    "reptile.dinosaur": [
        "Tyrantrum",
        "Tyrunt",
        "Archen", "Archeops",
        "Amaura", "Aurorus",
        "Dracozolt", "Dracovish",
        "Arctibax", "Baxcalibur"
    ],


    /* =========================
       🐸 AMPHIBIAN
       ========================= */

    "amphibian.frog": [
        "Poliwag", "Poliwhirl", "Poliwrath",
        "Froakie", "Frogadier", "Greninja",
        "Tympole", "Palpitoad", "Seismitoad",
        "Croagunk", "Toxicroak",
        "Sobble", "Drizzile", "Inteleon"
    ],

    "amphibian.toad": [
        "Politoed",
        "Croagunk", "Toxicroak"
    ],

    "amphibian.treeFrog": [
        "Treecko", "Grovyle", "Sceptile"
    ],

    "amphibian.salamander": [
        "Salamence",
        "Quagsire"
    ],

    "amphibian.newt": [
        "Wooper", "Quagsire",
        "Clodsire"
    ],

    "amphibian.axolotl": [
        "Wooper", "Quagsire",
        "Clodsire"
    ],


    /* =========================
       🐦 BIRD
       ========================= */

    "bird.eagle": [
        "Rufflet", "Braviary",
        "Pikipek", "Trumbeak", "Toucannon"
    ],

    "bird.hawk": [
        "Staraptor",
        "Hawlucha"
    ],

    "bird.falcon": [
        "Talonflame"
    ],

    "bird.owl": [
        "Hoothoot", "Noctowl",
        "Rowlet", "Dartrix", "Decidueye"
    ],

    "bird.pigeon": [
        "Pidgey", "Pidgeotto", "Pidgeot"
    ],

    "bird.dove": [
        "Pidove", "Tranquill", "Unfezant"
    ],

    "bird.crow": [
        "Murkrow", "Honchkrow",
        "Corvisquire", "Corviknight"
    ],

    "bird.parrot": [
        "Chatot",
        "Squawkabilly"
    ],

    "bird.penguin": [
        "Piplup", "Prinplup", "Empoleon",
        "Delibird"
    ],

    "bird.duck": [
        "Psyduck", "Golduck",
        "Ducklett", "Swanna",
        "Quaxly", "Quaxwell", "Quaquaval"
    ],

    "bird.goose": [
        "Farfetch'd"
    ],

    "bird.swan": [
        "Swanna"
    ],

    "bird.chicken": [
        "Torchic", "Combusken", "Blaziken"
    ],

    "bird.rooster": [
        "Torchic", "Combusken", "Blaziken"
    ],

    "bird.turkey": [
        "Bombirdier"
    ],

    "bird.flamingo": [
        "Flamigo"
    ],

    "bird.pelican": [
        "Wingull", "Pelipper"
    ],

    "bird.stork": [
        "Talonflame"
    ],

    "bird.heron": [
        "Goomy", "Sliggoo", "Goodra"
    ],

    "bird.woodpecker": [
        "Pikipek", "Trumbeak", "Toucannon"
    ],

    "bird.kingfisher": [
        "Cramorant"
    ],

    "bird.ostrich": [
        "Doduo", "Dodrio"
    ],

    "bird.emu": [
        "Doduo", "Dodrio"
    ],


    /* =========================
       🐟 FISH
       ========================= */

    "fish.goldfish": [
        "Goldeen", "Seaking"
    ],

    "fish.koi": [
        "Magikarp", "Gyarados"
    ],

    "fish.carp": [
        "Magikarp", "Gyarados"
    ],

    "fish.shark": [
        "Carvanha", "Sharpedo",
        "Gible", "Gabite", "Garchomp"
    ],

    "fish.ray": [
        "Mantyke", "Mantine",
        "Remoraid", "Octillery"
    ],

    "fish.eel": [
        "Eelektrik", "Eelektross",
        "Stunfisk"
    ],

    "fish.seahorse": [
        "Horsea", "Seadra", "Kingdra"
    ],

    "fish.anglerfish": [
        "Chinchou", "Lanturn"
    ],

    "fish.pufferfish": [
        "Qwilfish",
        "Overqwil"
    ],

    "fish.clownfish": [
        "Bruxish"
    ],

    "fish.swordfish": [
        "Veluza"
    ],

    "fish.tuna": [
        "Bruxish"
    ],

    "fish.bass": [
        "Basculin",
        "Basculegion"
    ],


    /* =========================
       🐋 MARINE MAMMAL
       ========================= */

    "marineMammal.whale": [
        "Wailmer", "Wailord",
        "Cetoddle", "Cetitan"
    ],

    "marineMammal.dolphin": [
        "Finizen", "Palafin"
    ],

    "marineMammal.orca": [
        "Kyogre"
    ],

    "marineMammal.seal": [
        "Seel", "Dewgong",
        "Spheal", "Sealeo", "Walrein"
    ],

    "marineMammal.seaLion": [
        "Popplio", "Brionne", "Primarina"
    ],

    "marineMammal.walrus": [
        "Spheal", "Sealeo", "Walrein"
    ],

    "marineMammal.manatee": [
        "Lapras"
    ],


    /* =========================
       🐙 CEPHALOPOD
       ========================= */

    "cephalopod.octopus": [
        "Octillery",
        "Clobbopus", "Grapploct"
    ],

    "cephalopod.squid": [
        "Inkay", "Malamar"
    ],

    "cephalopod.cuttlefish": [
        "Inkay", "Malamar"
    ],

    "cephalopod.nautilus": [
        "Omanyte", "Omastar"
    ],


    /* =========================
       🦋 INSECT
       ========================= */

    "insect.butterfly": [
        "Butterfree",
        "Beautifly",
        "Vivillon"
    ],

    "insect.moth": [
        "Venomoth",
        "Dustox",
        "Mothim",
        "Volcarona",
        "Frosmoth",
        "Ribombee"
    ],

    "insect.bee": [
        "Combee", "Vespiquen"
    ],

    "insect.wasp": [
        "Weedle", "Kakuna", "Beedrill"
    ],

    "insect.beetle": [
        "Pinsir",
        "Heracross",
        "Karrablast", "Escavalier",
        "Durant",
        "Lokix"
    ],

    "insect.rhinocerosBeetle": [
        "Heracross"
    ],

    "insect.stagBeetle": [
        "Pinsir"
    ],

    "insect.ladybug": [
        "Ledyba", "Ledian"
    ],

    "insect.ant": [
        "Durant",
        "Nymble", "Lokix"
    ],

    "insect.termite": [
        "Durant"
    ],

    "insect.cricket": [
        "Kricketot", "Kricketune"
    ],

    "insect.grasshopper": [
        "Nincada", "Ninjask",
        "Nymble", "Lokix"
    ],

    "insect.mantis": [
        "Scyther", "Scizor",
        "Kleavor"
    ],

    "insect.dragonfly": [
        "Yanma", "Yanmega"
    ],

    "insect.mosquito": [
        "Surskit", "Masquerain"
    ],

    "insect.fly": [
        "Venonat", "Venomoth"
    ],

    "insect.cicada": [
        "Kricketot", "Kricketune"
    ],

    "insect.firefly": [
        "Volbeat", "Illumise"
    ],


    /* =========================
       🕷️ ARACHNID
       ========================= */

    "arachnid.spider": [
        "Spinarak", "Ariados",
        "Joltik", "Galvantula",
        "Dewpider", "Araquanid",
        "Tarountula", "Spidops"
    ],

    "arachnid.tarantula": [
        "Tarountula", "Spidops"
    ],

    "arachnid.scorpion": [
        "Gligar", "Gliscor",
        "Skorupi", "Drapion"
    ],

    "arachnid.tick": [
        "Joltik", "Galvantula"
    ],

    "arachnid.mite": [
        "Joltik", "Galvantula"
    ],


    /* =========================
       🦀 CRUSTACEAN
       ========================= */

    "crustacean.crab": [
        "Krabby", "Kingler",
        "Corphish", "Crawdaunt",
        "Crabrawler", "Crabominable",
        "Klawf"
    ],

    "crustacean.lobster": [
        "Clauncher", "Clawitzer"
    ],

    "crustacean.shrimp": [
        "Corphish", "Crawdaunt"
    ],

    "crustacean.krill": [
        "Wimpod", "Golisopod"
    ],

    "crustacean.crayfish": [
        "Corphish", "Crawdaunt"
    ],

    "crustacean.barnacle": [
        "Binacle", "Barbaracle"
    ],


    /* =========================
       🐚 MOLLUSK
       ========================= */

    "mollusk.snail": [
        "Slugma", "Magcargo",
        "Shellos", "Gastrodon",
        "Sliggoo", "Goodra"
    ],

    "mollusk.slug": [
        "Slugma", "Magcargo",
        "Shellos", "Gastrodon"
    ],

    "mollusk.clam": [
        "Shellder", "Cloyster"
    ],

    "mollusk.oyster": [
        "Shellder", "Cloyster"
    ],

    "mollusk.mussel": [
        "Shellder", "Cloyster"
    ],


    /* =========================
       🪱 WORM
       ========================= */

    "worm.earthworm": [
        "Wurmple", "Silcoon", "Beautifly",
        "Cascoon", "Dustox"
    ],

    "worm.leech": [
        "Sizzlipede", "Centiskorch"
    ],

    "worm.parasiticWorm": [
        "Wurmple", "Silcoon", "Cascoon"
    ],


    /* =========================
       🪼 CNIDARIAN
       ========================= */

    "cnidarian.jellyfish": [
        "Tentacool", "Tentacruel",
        "Frillish", "Jellicent"
    ],

    "cnidarian.coral": [
        "Corsola", "Cursola"
    ],

    "cnidarian.anemone": [
        "Tentacool", "Tentacruel"
    ],


    /* =========================
       🦖 PREHISTORIC
       ========================= */

    "prehistoric.tyrannosaur": [
        "Tyrunt", "Tyrantrum"
    ],

    "prehistoric.raptor": [
        "Archen", "Archeops"
    ],

    "prehistoric.triceratops": [
        "Cranidos", "Rampardos"
    ],

    "prehistoric.stegosaurus": [
        "Shieldon", "Bastiodon"
    ],

    "prehistoric.sauropod": [
        "Amaura", "Aurorus"
    ],

    "prehistoric.pterosaur": [
        "Aerodactyl",
        "Archen", "Archeops"
    ],

    "prehistoric.ammonite": [
        "Omanyte", "Omastar"
    ],

    "prehistoric.trilobite": [
        "Kabuto", "Kabutops"
    ],

    "prehistoric.prehistoricMammal": [
        "Mamoswine",
        "Wyrdeer",
        "Ursaluna"
    ],


    /* =========================
       🦔 OTHER MAMMALS
       ========================= */

    "otherMammal.hedgehog": [
        "Cyndaquil", "Quilava", "Typhlosion",
        "Sneasel", "Weavile",
        "Shaymin"
    ],

    "otherMammal.anteater": [
        "Heatmor"
    ],

    "otherMammal.sloth": [
        "Slakoth", "Vigoroth", "Slaking"
    ],

    "otherMammal.armadillo": [
        "Sandshrew", "Sandslash",
        "Drilbur", "Excadrill"
    ],

    "otherMammal.aardvark": [
        "Dedenne"
    ],

    "otherMammal.platypus": [
        "Psyduck", "Golduck"
    ],

    "otherMammal.echidna": [
        "Cyndaquil", "Quilava", "Typhlosion"
    ],

    "otherMammal.bat": [
        "Zubat", "Golbat", "Crobat"
    ],

    "otherMammal.mole": [
        "Diglett", "Dugtrio",
        "Drilbur", "Excadrill"
    ],

    "otherMammal.shrew": [
        "Sandshrew", "Sandslash"
    ],


    /* =========================
       🦕 ANIMAL-LIKE / HYBRID
       ========================= */

    "animalLike.mixedAnimal": [
        /* This bucket is intentionally used for Pokémon whose
           inspiration is mixed, object-based, plant-based,
           elemental, humanoid, or otherwise doesn't correspond
           to one of the specific animal buckets above. */
    ],

    "animalLike.mythicalAnimal": [
        "Mew",
        "Mewtwo",
        "Lugia",
        "Ho-Oh",
        "Celebi",
        "Jirachi",
        "Deoxys",
        "Manaphy",
        "Darkrai",
        "Arceus",
        "Victini",
        "Keldeo",
        "Meloetta",
        "Genesect",
        "Diancie",
        "Volcanion",
        "Magearna",
        "Marshadow",
        "Zeraora",
        "Zacian",
        "Zamazenta",
        "Eternatus",
        "Kubfu",
        "Urshifu",
        "Calyrex",
        "Enamorus",
        "Wo-Chien",
        "Chien-Pao",
        "Ting-Lu",
        "Chi-Yu",
        "Ogerpon",
        "Terapagos",
        "Pecharunt"
    ],

    "animalLike.cryptid": [
        "Lapras",
        "Dunsparce",
        "Dudunsparce",
        "Mimikyu",
        "Drampa",
        "Absol",
        "Sableye",
        "Spiritomb",
        "Kecleon",
        "Relicanth",
        "Sigilyph",
        "Stonjourner",
        "Greavard",
        "Houndstone",
        "Orthworm",
        "Glimmet",
        "Glimmora"
    ],

    "animalLike.hybrid": [
        "Bulbasaur", "Ivysaur", "Venusaur",
        "Oddish", "Gloom", "Vileplume",
        "Bellsprout", "Weepinbell", "Victreebel",
        "Exeggcute", "Exeggutor",
        "Tangela", "Tangrowth",
        "Hoppip", "Skiploom", "Jumpluff",
        "Sunkern", "Sunflora",
        "Roselia", "Roserade",
        "Cacnea", "Cacturne",
        "Tropius",
        "Budew",
        "Cherubi", "Cherrim",
        "Carnivine",
        "Snover", "Abomasnow",
        "Foongus", "Amoonguss",
        "Ferroseed", "Ferrothorn",
        "Gossifleur", "Eldegoss",
        "Applin", "Flapple", "Appletun",
        "Dipplin", "Hydrapple",
        "Smoliv", "Dolliv", "Arboliva",
        "Poltchageist", "Sinistcha",
        "Bramblin", "Brambleghast",
        "Toedscool", "Toedscruel",
        "Capsakid", "Scovillain"
    ]
};


/* =========================================================
   APPLY CATEGORY DATA
   ========================================================= */

for (const [path, pokemon] of Object.entries(POKEMON_BY_CATEGORY)) {
    const [group, category] = path.split(".");

    if (
        ANIMALS[group] &&
        ANIMALS[group].categories &&
        ANIMALS[group].categories[category]
    ) {
        ANIMALS[group].categories[category].pokemon.push(...pokemon);
    }
}
