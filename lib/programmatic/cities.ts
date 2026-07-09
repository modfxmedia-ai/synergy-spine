// Programmatic SEO city data: 75 New Mexico communities served by Synergy Spine and Nerve Center.
// Each city carries the localized data we use to keep programmatic pages unique
// (landmarks, neighborhoods, distance, county, blurb, nearby cities for cross-links).

export type CityCopy = {
  slug: string; // URL segment, e.g. "rio-rancho"
  name: string; // display name, e.g. "Rio Rancho"
  county: string;
  zip: string;
  driveMin: number; // approx drive minutes from Synergy in Rio Rancho
  blurb: string; // 1-2 sentence localized intro
  landmarks: string[]; // 3 nearby places that signal real local knowledge
  neighborhoods: string[]; // 2-3 named areas/zones
  population?: string; // optional rough population descriptor
};

export const CITIES: CityCopy[] = [
  {
    slug: "rio-rancho",
    name: "Rio Rancho",
    county: "Sandoval County",
    zip: "87124",
    driveMin: 0,
    blurb:
      "Rio Rancho is our home, the third-largest city in New Mexico and the city Synergy Spine and Nerve Center has called home for two decades.",
    landmarks: [
      "Rio Rancho Boulevard",
      "Loma Colorado Public Library",
      "Santa Ana Star Center",
    ],
    neighborhoods: ["North Hills", "Enchanted Hills", "Mariposa", "Cabezon"],
    population: "100,000+",
  },
  {
    slug: "albuquerque",
    name: "Albuquerque",
    county: "Bernalillo County",
    zip: "87102",
    driveMin: 20,
    blurb:
      "Albuquerque is New Mexico's largest city and the heart of the metro Synergy Spine and Nerve Center serves every day.",
    landmarks: ["Old Town", "Sandia Peak Tramway", "ABQ BioPark"],
    neighborhoods: ["Northeast Heights", "Nob Hill", "North Valley", "Westside"],
    population: "560,000+",
  },
  {
    slug: "bernalillo",
    name: "Bernalillo",
    county: "Sandoval County",
    zip: "87004",
    driveMin: 15,
    blurb:
      "Bernalillo sits at the crossroads of I-25 and US-550 just north of Rio Rancho, many of our patients commute in from this historic Rio Grande town.",
    landmarks: ["Coronado Historic Site", "Town of Bernalillo Plaza", "Range Café"],
    neighborhoods: ["Old Town Bernalillo", "Camino del Pueblo", "Algodones edge"],
  },
  {
    slug: "corrales",
    name: "Corrales",
    county: "Sandoval County",
    zip: "87048",
    driveMin: 12,
    blurb:
      "Corrales is the rural village of horses, lavender fields, and old adobe just east of Rio Rancho, a quick drive across the Rio Grande to our office.",
    landmarks: ["Corrales Bosque Preserve", "Old Church", "Corrales Road wineries"],
    neighborhoods: ["Old Corrales", "Loma Larga", "East Corrales"],
  },
  {
    slug: "placitas",
    name: "Placitas",
    county: "Sandoval County",
    zip: "87043",
    driveMin: 25,
    blurb:
      "Placitas is the high-desert village northeast of Bernalillo where the Sandia foothills meet open country, patients drive in for spinal hygiene support every week.",
    landmarks: ["Las Placitas Presbyterian Church", "Crest of Montezuma trail", "Tunnel Spring"],
    neighborhoods: ["Anasazi Trails", "Homestead Village", "Overlook"],
  },
  {
    slug: "sandia-park",
    name: "Sandia Park",
    county: "Bernalillo County",
    zip: "87047",
    driveMin: 35,
    blurb:
      "Sandia Park sits in the East Mountains under the back side of the Sandias, a scenic but spine-stiffening commute that many patients pair with chiropractic visits.",
    landmarks: ["Tinkertown Museum", "Sandia Peak Ski Area", "Capulin Snow Play Area"],
    neighborhoods: ["Cedro", "Paako", "Cole Springs"],
  },
  {
    slug: "tijeras",
    name: "Tijeras",
    county: "Bernalillo County",
    zip: "87059",
    driveMin: 35,
    blurb:
      "Tijeras is the East Mountain village at the I-40 / NM-14 junction, a base for patients in the Carnuel and Cedar Crest corridor.",
    landmarks: ["Cibola National Forest", "Tijeras Pueblo Archaeological Site", "Tijeras Open Space"],
    neighborhoods: ["Cedro Peak", "Carnuel", "Sedillo"],
  },
  {
    slug: "cedar-crest",
    name: "Cedar Crest",
    county: "Bernalillo County",
    zip: "87008",
    driveMin: 30,
    blurb:
      "Cedar Crest sits along NM-14 in the East Mountains, close enough to Rio Rancho that many residents commute for honest, evidence-based chiropractic care.",
    landmarks: ["Sandia Crest Highway", "Cedar Crest Library", "Tinkertown Museum"],
    neighborhoods: ["Sandia Park edge", "San Antonito", "Frost Road"],
  },
  {
    slug: "edgewood",
    name: "Edgewood",
    county: "Santa Fe County",
    zip: "87015",
    driveMin: 40,
    blurb:
      "Edgewood is the East Mountain town along I-40 and NM-344, a growing community of commuters, ranchers, and remote workers who value drug-free spinal care.",
    landmarks: ["Wildlife West Nature Park", "Edgewood town center", "Kraft Azalea park"],
    neighborhoods: ["Estates of Edgewood", "Edgewood Heights", "Frost Road corridor"],
  },
  {
    slug: "moriarty",
    name: "Moriarty",
    county: "Torrance County",
    zip: "87035",
    driveMin: 50,
    blurb:
      "Moriarty is the historic Route 66 town along I-40, patients drive in from the Estancia Valley for spinal decompression and chiropractic care.",
    landmarks: ["Moriarty Civic Center", "Lewis Antique Auto & Toy Museum", "Moriarty Soaring Club"],
    neighborhoods: ["Old Route 66", "South Moriarty", "Moriarty Heights"],
  },
  {
    slug: "estancia",
    name: "Estancia",
    county: "Torrance County",
    zip: "87016",
    driveMin: 65,
    blurb:
      "Estancia is the county seat of Torrance County in the Estancia Valley, ranch country an hour southeast of Rio Rancho.",
    landmarks: ["Salinas Pueblo Missions", "Estancia Public Library", "Stagecoach Trail"],
    neighborhoods: ["Old Estancia", "Estancia Valley"],
  },
  {
    slug: "mountainair",
    name: "Mountainair",
    county: "Torrance County",
    zip: "87036",
    driveMin: 80,
    blurb:
      "Mountainair sits at the southern edge of the Manzano Mountains, the gateway to the Salinas Pueblo Missions and a scenic drive south for our patients.",
    landmarks: ["Salinas Pueblo Missions National Monument", "Shaffer Hotel", "Manzano Mountain Trails"],
    neighborhoods: ["Old Mountainair", "Manzano foothills"],
  },
  {
    slug: "belen",
    name: "Belen",
    county: "Valencia County",
    zip: "87002",
    driveMin: 45,
    blurb:
      "Belen anchors the Mid-Rio Grande Valley south of Albuquerque, a Rail Runner stop and rail town with deep New Mexico history.",
    landmarks: ["Belen Harvey House Museum", "Eagle Park", "Our Lady of Belen Church"],
    neighborhoods: ["Old Belen", "Becker Avenue", "Rio Communities"],
  },
  {
    slug: "los-lunas",
    name: "Los Lunas",
    county: "Valencia County",
    zip: "87031",
    driveMin: 35,
    blurb:
      "Los Lunas is the largest community in Valencia County and one of the fastest-growing towns in New Mexico, many of our south-corridor patients live here.",
    landmarks: ["Daniel Fernandez Park", "Los Lunas Museum of Heritage and Arts", "Los Lunas River Park"],
    neighborhoods: ["Huning Ranch", "Mission Valley", "Los Morros"],
  },
  {
    slug: "bosque-farms",
    name: "Bosque Farms",
    county: "Valencia County",
    zip: "87068",
    driveMin: 30,
    blurb:
      "Bosque Farms sits along the Rio Grande between Los Lunas and the South Valley, small, quiet, and equestrian-minded.",
    landmarks: ["Bosque Farms Police Department park", "Whitfield Wildlife Conservation Area", "Bosque Farms Library"],
    neighborhoods: ["Bosque Loop", "Pinto Lane", "Old Church Road"],
  },
  {
    slug: "peralta",
    name: "Peralta",
    county: "Valencia County",
    zip: "87042",
    driveMin: 32,
    blurb:
      "Peralta is the small Rio Grande Valley village just north of Los Lunas, named for the Peralta land grant.",
    landmarks: ["Tomé Hill (nearby)", "Whitfield Wildlife Conservation Area", "Old Peralta Church"],
    neighborhoods: ["Old Peralta", "Mecca Lane", "Peralta Boulevard"],
  },
  {
    slug: "tome",
    name: "Tomé",
    county: "Valencia County",
    zip: "87060",
    driveMin: 38,
    blurb:
      "Tomé is a historic Rio Grande Valley village known for Tomé Hill, a Lenten pilgrimage site and a New Mexico landmark.",
    landmarks: ["Tomé Hill", "Tomé Plaza", "Immaculate Conception Church"],
    neighborhoods: ["Tomé Plaza", "Tomé Hill foothills"],
  },
  {
    slug: "jarales",
    name: "Jarales",
    county: "Valencia County",
    zip: "87023",
    driveMin: 50,
    blurb:
      "Jarales is the small unincorporated village south of Belen along the Rio Grande, quiet, agricultural, and tight-knit.",
    landmarks: ["Jarales Lateral", "Belen River corridor", "Pueblitos Road farmland"],
    neighborhoods: ["Pueblitos", "Jarales Road"],
  },
  {
    slug: "meadow-lake",
    name: "Meadow Lake",
    county: "Valencia County",
    zip: "87031",
    driveMin: 40,
    blurb:
      "Meadow Lake is the unincorporated community east of Los Lunas, a growing residential area along NM-47.",
    landmarks: ["Meadow Lake Park", "Manzano Vista Middle School area", "Jarales Lateral access"],
    neighborhoods: ["Meadow Lake Estates", "Manzano Vista"],
  },
  {
    slug: "el-cerro-mission",
    name: "El Cerro Mission",
    county: "Valencia County",
    zip: "87031",
    driveMin: 38,
    blurb:
      "El Cerro Mission is a small Valencia County community south of Los Lunas, many residents commute to Albuquerque or Rio Rancho.",
    landmarks: ["El Cerro de los Lunas", "Mission Valley shopping", "Highway 47 corridor"],
    neighborhoods: ["El Cerro Mission", "El Cerro Estates"],
  },
  {
    slug: "casa-colorada",
    name: "Casa Colorada",
    county: "Valencia County",
    zip: "87002",
    driveMin: 55,
    blurb:
      "Casa Colorada is the small Rio Grande Valley village east of Belen, quiet farmland and a strong agricultural community.",
    landmarks: ["Casa Colorada Lateral", "Rio Grande bosque", "Belen rail corridor"],
    neighborhoods: ["Old Casa Colorada", "Highway 304 corridor"],
  },
  {
    slug: "veguita",
    name: "Veguita",
    county: "Socorro County",
    zip: "87062",
    driveMin: 65,
    blurb:
      "Veguita sits south of Belen in northern Socorro County, small, rural, and along the Rio Grande's southern reach.",
    landmarks: ["Sevilleta National Wildlife Refuge", "Bernardo Wildlife Area", "Rio Grande bosque"],
    neighborhoods: ["Old Veguita", "Highway 304"],
  },
  {
    slug: "cochiti-lake",
    name: "Cochiti Lake",
    county: "Sandoval County",
    zip: "87083",
    driveMin: 45,
    blurb:
      "Cochiti Lake is the small community at the base of Cochiti Dam, surrounded by the lake, the Pueblo, and the Jemez Mountains.",
    landmarks: ["Cochiti Dam", "Cochiti Lake recreation area", "Tent Rocks National Monument"],
    neighborhoods: ["Cochiti Lake village", "Lake View Estates"],
  },
  {
    slug: "cochiti-pueblo",
    name: "Cochiti Pueblo",
    county: "Sandoval County",
    zip: "87072",
    driveMin: 50,
    blurb:
      "Cochiti Pueblo is one of the historic Keres Pueblos along the Rio Grande, with deep cultural and agricultural ties to the valley.",
    landmarks: ["Pueblo de Cochiti", "Cochiti Golf Club", "Tent Rocks National Monument"],
    neighborhoods: ["Pueblo center", "Cochiti Lake side"],
  },
  {
    slug: "pena-blanca",
    name: "Peña Blanca",
    county: "Sandoval County",
    zip: "87041",
    driveMin: 40,
    blurb:
      "Peña Blanca is the historic Rio Grande village between Bernalillo and Cochiti, a quiet stop on NM-22 toward Cochiti Lake.",
    landmarks: ["Peña Blanca church", "Cochiti Dam (nearby)", "Rio Grande bosque"],
    neighborhoods: ["Old Peña Blanca", "Sile road"],
  },
  {
    slug: "algodones",
    name: "Algodones",
    county: "Sandoval County",
    zip: "87001",
    driveMin: 25,
    blurb:
      "Algodones is the small Rio Grande village along NM-313 between Bernalillo and Santo Domingo, a peaceful drive of vineyards and pastures.",
    landmarks: ["NM-313 / El Camino Real", "Rio Grande bosque", "Tamaya Resort (nearby)"],
    neighborhoods: ["Old Algodones", "Camino del Pueblo"],
  },
  {
    slug: "santo-domingo-pueblo",
    name: "Santo Domingo Pueblo",
    county: "Sandoval County",
    zip: "87052",
    driveMin: 40,
    blurb:
      "Kewa / Santo Domingo Pueblo is one of the largest Keres Pueblos, on the Rio Grande between Bernalillo and Cochiti.",
    landmarks: ["Kewa Pueblo Trading Post", "Santo Domingo Pueblo church", "Indian Market events"],
    neighborhoods: ["Pueblo center", "Tetilla Peak area"],
  },
  {
    slug: "san-felipe-pueblo",
    name: "San Felipe Pueblo",
    county: "Sandoval County",
    zip: "87001",
    driveMin: 30,
    blurb:
      "San Felipe Pueblo sits along the Rio Grande between Algodones and Santo Domingo, one of the historic Keres Pueblos of the middle Rio Grande.",
    landmarks: ["San Felipe Pueblo church", "Black Mesa Casino", "Rio Grande bosque"],
    neighborhoods: ["Pueblo center", "Black Mesa side"],
  },
  {
    slug: "santa-ana-pueblo",
    name: "Santa Ana Pueblo",
    county: "Sandoval County",
    zip: "87004",
    driveMin: 18,
    blurb:
      "Santa Ana Pueblo (Tamaya) is the closest Pueblo to Rio Rancho, many patients live and work here, and the Tamaya Resort is a frequent stop on the way to our office.",
    landmarks: ["Hyatt Regency Tamaya Resort", "Santa Ana Star Casino", "Santa Ana golf course"],
    neighborhoods: ["Tamaya", "Pueblo center"],
  },
  {
    slug: "zia-pueblo",
    name: "Zia Pueblo",
    county: "Sandoval County",
    zip: "87053",
    driveMin: 35,
    blurb:
      "Zia Pueblo gives New Mexico its iconic sun symbol, a Keres Pueblo on US-550 northwest of Bernalillo, surrounded by stunning red-rock country.",
    landmarks: ["Zia Pueblo Cultural Center", "US-550 corridor", "Mesa Cabezon"],
    neighborhoods: ["Pueblo center", "US-550 frontage"],
  },
  {
    slug: "san-ysidro",
    name: "San Ysidro",
    county: "Sandoval County",
    zip: "87053",
    driveMin: 40,
    blurb:
      "San Ysidro sits at the junction of US-550 and NM-4, the gateway village to the Jemez Mountains and Jemez Springs.",
    landmarks: ["San Ysidro Church", "Jemez River canyon", "Cabezon Peak"],
    neighborhoods: ["Old San Ysidro", "US-550 / NM-4 junction"],
  },
  {
    slug: "jemez-pueblo",
    name: "Jemez Pueblo",
    county: "Sandoval County",
    zip: "87024",
    driveMin: 50,
    blurb:
      "Walatowa / Jemez Pueblo is the only remaining Towa-speaking Pueblo, set in the red-rock canyon of the Jemez River.",
    landmarks: ["Walatowa Visitor Center", "Red Rocks", "Jemez Historic Site"],
    neighborhoods: ["Pueblo center", "Cañon"],
  },
  {
    slug: "jemez-springs",
    name: "Jemez Springs",
    county: "Sandoval County",
    zip: "87025",
    driveMin: 70,
    blurb:
      "Jemez Springs is the mountain village in the heart of the Jemez Mountains, hot springs, ranch country, and a long but stunning drive to our office.",
    landmarks: ["Jemez Springs Bath House", "Jemez Historic Site", "Soda Dam"],
    neighborhoods: ["Old Jemez Springs", "Jemez Falls area"],
  },
  {
    slug: "ponderosa",
    name: "Ponderosa",
    county: "Sandoval County",
    zip: "87044",
    driveMin: 65,
    blurb:
      "Ponderosa is the small high-desert community at the foot of the Jemez Mountains, off NM-290.",
    landmarks: ["Ponderosa Valley Vineyards", "Jemez Mountains foothills", "Cañon de San Diego"],
    neighborhoods: ["Old Ponderosa", "NM-290 corridor"],
  },
  {
    slug: "canoncito",
    name: "Cañoncito",
    county: "Sandoval County",
    zip: "87026",
    driveMin: 65,
    blurb:
      "Cañoncito (To'Hajiilee) is the Navajo Nation chapter west of Albuquerque, patients commute in along I-40 for honest, evidence-based chiropractic care.",
    landmarks: ["I-40 corridor", "Tohajiilee community", "Mesa landscape"],
    neighborhoods: ["Tohajiilee village", "Cañoncito"],
  },
  {
    slug: "el-llanito",
    name: "El Llanito",
    county: "Sandoval County",
    zip: "87004",
    driveMin: 18,
    blurb:
      "El Llanito is the small community east of Bernalillo near Santa Ana Pueblo and the Rio Grande.",
    landmarks: ["Rio Grande bosque", "Santa Ana Pueblo edge", "El Llanito orchard country"],
    neighborhoods: ["Old El Llanito", "Santa Ana side"],
  },
  {
    slug: "golden",
    name: "Golden",
    county: "Santa Fe County",
    zip: "87047",
    driveMin: 45,
    blurb:
      "Golden is the historic mining village along NM-14, the start of the Turquoise Trail Scenic Byway between Albuquerque and Santa Fe.",
    landmarks: ["San Francisco Catholic Church", "Turquoise Trail National Scenic Byway", "Sandia Mountains backside"],
    neighborhoods: ["Old Golden", "NM-14 corridor"],
  },
  {
    slug: "madrid",
    name: "Madrid",
    county: "Santa Fe County",
    zip: "87010",
    driveMin: 55,
    blurb:
      "Madrid is the artsy former coal town along the Turquoise Trail, galleries, the Mine Shaft Tavern, and a steady weekend pull from across the metro.",
    landmarks: ["Mine Shaft Tavern", "Madrid Old Coal Town Museum", "Turquoise Trail"],
    neighborhoods: ["Madrid Main Street", "Turquoise Trail"],
  },
  {
    slug: "cerrillos",
    name: "Cerrillos",
    county: "Santa Fe County",
    zip: "87010",
    driveMin: 60,
    blurb:
      "Cerrillos is the historic mining village just north of Madrid, turquoise country and a stop on the Turquoise Trail toward Santa Fe.",
    landmarks: ["Cerrillos Hills State Park", "Casa Grande Trading Post", "Turquoise Mining Museum"],
    neighborhoods: ["Old Cerrillos", "Cerrillos Hills"],
  },
  {
    slug: "stanley",
    name: "Stanley",
    county: "Santa Fe County",
    zip: "87056",
    driveMin: 55,
    blurb:
      "Stanley is the small ranching community along NM-41 in southern Santa Fe County, wide open and quiet.",
    landmarks: ["NM-41 corridor", "Galisteo Basin Preserve (nearby)", "Stanley Volunteer Fire Station"],
    neighborhoods: ["Old Stanley", "NM-41 frontage"],
  },
  {
    slug: "galisteo",
    name: "Galisteo",
    county: "Santa Fe County",
    zip: "87540",
    driveMin: 55,
    blurb:
      "Galisteo is the historic adobe village in the Galisteo Basin south of Santa Fe, old church, ranch country, and quiet beauty.",
    landmarks: ["Galisteo Basin Preserve", "Our Lady of Remedies Church", "Cerro Pelon"],
    neighborhoods: ["Old Galisteo", "Galisteo Basin"],
  },
  {
    slug: "lamy",
    name: "Lamy",
    county: "Santa Fe County",
    zip: "87540",
    driveMin: 60,
    blurb:
      "Lamy is the small rail village south of Santa Fe, Amtrak's Santa Fe stop and a quiet base of ranch country.",
    landmarks: ["Lamy Train Station", "Sky Railway", "Galisteo Basin Preserve"],
    neighborhoods: ["Old Lamy", "Eldorado side"],
  },
  {
    slug: "eldorado",
    name: "Eldorado",
    county: "Santa Fe County",
    zip: "87508",
    driveMin: 65,
    blurb:
      "Eldorado at Santa Fe is the planned community southeast of Santa Fe, adobe-style homes, the Eldorado Community School, and easy I-25 access for our patients.",
    landmarks: ["Eldorado Community Center", "Hondo Hills", "Galisteo Basin Preserve"],
    neighborhoods: ["Eldorado", "Vista del Monte", "Hondo Hills"],
  },
  {
    slug: "clines-corners",
    name: "Clines Corners",
    county: "Torrance County",
    zip: "87070",
    driveMin: 70,
    blurb:
      "Clines Corners is the I-40 / US-285 crossroads east of Moriarty, a Route 66 landmark and a true New Mexico travel stop.",
    landmarks: ["Clines Corners Travel Center", "Route 66", "I-40 / US-285 junction"],
    neighborhoods: ["I-40 frontage", "Old Clines Corners"],
  },
  {
    slug: "encino",
    name: "Encino",
    county: "Torrance County",
    zip: "88321",
    driveMin: 90,
    blurb:
      "Encino is the small Route 66 era village east of Clines Corners, quiet ranchland and big-sky country.",
    landmarks: ["Old US-60 corridor", "Encino Pioneer Cemetery", "Estancia Valley"],
    neighborhoods: ["Old Encino", "US-60 frontage"],
  },
  {
    slug: "willard",
    name: "Willard",
    county: "Torrance County",
    zip: "87063",
    driveMin: 80,
    blurb:
      "Willard sits in the southern Estancia Valley along NM-42, ranching country south of Estancia.",
    landmarks: ["Estancia Valley", "Manzano Mountains east edge", "NM-42 corridor"],
    neighborhoods: ["Old Willard", "Estancia Valley south"],
  },
  {
    slug: "torreon",
    name: "Torreón",
    county: "Torrance County",
    zip: "87061",
    driveMin: 70,
    blurb:
      "Torreón is the small village in the Manzano Mountain foothills, quiet ranchland east of the Manzano range.",
    landmarks: ["Manzano Mountains", "Torreón Cemetery", "NM-55 corridor"],
    neighborhoods: ["Old Torreón", "NM-55 frontage"],
  },
  {
    slug: "tajique",
    name: "Tajique",
    county: "Torrance County",
    zip: "87016",
    driveMin: 65,
    blurb:
      "Tajique is the small mountain village in the Manzanos along NM-55, a stop on the Salt Missions Trail.",
    landmarks: ["Cibola National Forest", "Salt Missions Trail", "Manzano peaks"],
    neighborhoods: ["Old Tajique", "NM-55"],
  },
  {
    slug: "manzano",
    name: "Manzano",
    county: "Torrance County",
    zip: "87016",
    driveMin: 70,
    blurb:
      "Manzano is the historic apple-orchard village in the Manzano Mountains, some of the oldest cultivated apple trees in the U.S.",
    landmarks: ["Manzano Mountains State Park", "Manzano Catholic Church", "Salt Missions Trail"],
    neighborhoods: ["Old Manzano", "Manzano Mountains"],
  },
  {
    slug: "mcintosh",
    name: "McIntosh",
    county: "Torrance County",
    zip: "87032",
    driveMin: 55,
    blurb:
      "McIntosh is the Estancia Valley community north of Estancia along NM-41, ranching, rail, and rural quiet.",
    landmarks: ["Estancia Valley", "NM-41 corridor", "Salt Missions Trail edge"],
    neighborhoods: ["Old McIntosh", "Estancia Valley"],
  },
  {
    slug: "north-valley",
    name: "North Valley",
    county: "Bernalillo County",
    zip: "87107",
    driveMin: 18,
    blurb:
      "Albuquerque's North Valley runs the Rio Grande between downtown and Bernalillo, old adobes, horse properties, and easy access to Synergy Spine.",
    landmarks: ["Los Poblanos Open Space", "Rio Grande bosque", "Open Space Visitor Center"],
    neighborhoods: ["Los Ranchos", "Alameda", "North Valley estates"],
  },
  {
    slug: "south-valley",
    name: "South Valley",
    county: "Bernalillo County",
    zip: "87105",
    driveMin: 30,
    blurb:
      "Albuquerque's South Valley is the long Rio Grande corridor south of downtown, agricultural roots, multigenerational families, and a strong community fabric.",
    landmarks: ["Tingley Beach", "Pueblo Cultural Center", "Rio Grande bosque"],
    neighborhoods: ["Pajarito", "Mountain View", "Atrisco"],
  },
  {
    slug: "los-ranchos-de-albuquerque",
    name: "Los Ranchos de Albuquerque",
    county: "Bernalillo County",
    zip: "87107",
    driveMin: 18,
    blurb:
      "Los Ranchos de Albuquerque is the village inside the North Valley, vineyards, lavender, and small farms minutes from Synergy Spine.",
    landmarks: ["Los Poblanos Historic Inn", "Anderson Valley Vineyards", "Rio Grande Nature Center"],
    neighborhoods: ["Los Poblanos", "Mountain Bluff", "Old Los Ranchos"],
  },
  {
    slug: "los-padillas",
    name: "Los Padillas",
    county: "Bernalillo County",
    zip: "87105",
    driveMin: 30,
    blurb:
      "Los Padillas is the Rio Grande village in the South Valley, historic, quiet, and surrounded by acequias.",
    landmarks: ["Los Padillas Wildlife Sanctuary", "Rio Grande bosque", "Pajarito Drain"],
    neighborhoods: ["Old Los Padillas", "Pajarito"],
  },
  {
    slug: "sandia-heights",
    name: "Sandia Heights",
    county: "Bernalillo County",
    zip: "87122",
    driveMin: 30,
    blurb:
      "Sandia Heights is the foothills neighborhood pressed up against the west face of the Sandias, incredible views and easy access to the Tram and trails.",
    landmarks: ["Sandia Peak Tramway", "La Luz Trail", "Elena Gallegos Open Space"],
    neighborhoods: ["Sandia Heights North", "Sandia Heights South", "High Desert"],
  },
  {
    slug: "north-albuquerque-acres",
    name: "North Albuquerque Acres",
    county: "Bernalillo County",
    zip: "87122",
    driveMin: 25,
    blurb:
      "North Albuquerque Acres is the foothills neighborhood north of Paseo del Norte, bigger lots, mountain views, and an easy commute across to Rio Rancho.",
    landmarks: ["Sandia Foothills", "Embudito Trailhead", "La Cueva area schools"],
    neighborhoods: ["North ABQ Acres", "Tanoan", "High Desert"],
  },
  {
    slug: "paradise-hills",
    name: "Paradise Hills",
    county: "Bernalillo County",
    zip: "87114",
    driveMin: 12,
    blurb:
      "Paradise Hills is the Westside Albuquerque neighborhood that flows directly into Rio Rancho, five minutes from our office.",
    landmarks: ["Paradise Hills Park", "Black Arroyo Wilderness", "Westside Boulevard corridor"],
    neighborhoods: ["Paradise Hills East", "Paradise Hills West", "Ventana Ranch edge"],
  },
  {
    slug: "ventana-ranch",
    name: "Ventana Ranch",
    county: "Bernalillo County",
    zip: "87114",
    driveMin: 12,
    blurb:
      "Ventana Ranch is the planned community on Albuquerque's far West Side, minutes from Rio Rancho and a steady source of patients for Synergy Spine.",
    landmarks: ["Ventana Ranch park system", "Paseo del Norte West", "Petroglyph National Monument"],
    neighborhoods: ["Ventana Ranch East", "Ventana Ranch West"],
  },
  {
    slug: "volcano-cliffs",
    name: "Volcano Cliffs",
    county: "Bernalillo County",
    zip: "87120",
    driveMin: 20,
    blurb:
      "Volcano Cliffs is the West Side Albuquerque neighborhood at the edge of Petroglyph National Monument, bold views and easy access to Rio Rancho.",
    landmarks: ["Petroglyph National Monument", "Volcanoes Trail", "Double Eagle Airport"],
    neighborhoods: ["Volcano Cliffs", "Volcano Vista"],
  },
  {
    slug: "carnuel",
    name: "Carnuel",
    county: "Bernalillo County",
    zip: "87123",
    driveMin: 30,
    blurb:
      "Carnuel sits in Tijeras Canyon along old Route 66, the gateway between Albuquerque and the East Mountains.",
    landmarks: ["Tijeras Canyon", "Route 66 corridor", "Cibola National Forest"],
    neighborhoods: ["Old Carnuel", "Tijeras Canyon"],
  },
  {
    slug: "sedillo",
    name: "Sedillo",
    county: "Bernalillo County",
    zip: "87047",
    driveMin: 35,
    blurb:
      "Sedillo is the East Mountain community along NM-217 / Sedillo Hill Road, quiet wooded lots and easy I-40 access.",
    landmarks: ["Cibola National Forest", "Sedillo Hill", "Tijeras Canyon"],
    neighborhoods: ["Old Sedillo", "Sedillo Hill"],
  },
  {
    slug: "sandia-knolls",
    name: "Sandia Knolls",
    county: "Bernalillo County",
    zip: "87015",
    driveMin: 35,
    blurb:
      "Sandia Knolls is the East Mountain residential neighborhood between Edgewood and Cedar Crest, wooded acreages and mountain quiet.",
    landmarks: ["Sandia Crest", "Cibola National Forest", "Frost Road corridor"],
    neighborhoods: ["Sandia Knolls", "Frost Road"],
  },
  {
    slug: "ponderosa-pine",
    name: "Ponderosa Pine",
    county: "Bernalillo County",
    zip: "87015",
    driveMin: 38,
    blurb:
      "Ponderosa Pine is the East Mountain residential pocket near Edgewood, pine-shaded lots and a strong commuter community.",
    landmarks: ["Cibola National Forest", "Frost Road corridor", "Edgewood schools"],
    neighborhoods: ["Ponderosa Pine", "Frost Road"],
  },
  {
    slug: "chilili",
    name: "Chilili",
    county: "Bernalillo County",
    zip: "87016",
    driveMin: 50,
    blurb:
      "Chilili is the historic land-grant village along NM-337 in the southern East Mountains, old roots and a tight-knit community.",
    landmarks: ["Chilili Land Grant", "Manzano Mountains", "Salt Missions Trail edge"],
    neighborhoods: ["Old Chilili", "Land Grant"],
  },
  {
    slug: "punta-de-agua",
    name: "Punta de Agua",
    county: "Torrance County",
    zip: "87036",
    driveMin: 75,
    blurb:
      "Punta de Agua is the historic settlement near the Salinas Pueblo Missions south of Mountainair.",
    landmarks: ["Salinas Pueblo Missions", "Manzano Mountains", "NM-55 corridor"],
    neighborhoods: ["Old Punta de Agua", "Quarai area"],
  },
  {
    slug: "rio-communities",
    name: "Rio Communities",
    county: "Valencia County",
    zip: "87002",
    driveMin: 47,
    blurb:
      "Rio Communities is the city east of Belen, a fast-growing community across the Rio Grande from the historic Belen rail town.",
    landmarks: ["Tierra del Sol Country Club", "Whitfield Wildlife Conservation Area", "Eagle Park"],
    neighborhoods: ["Rio del Oro", "Tierra del Sol"],
  },
  {
    slug: "valencia",
    name: "Valencia",
    county: "Valencia County",
    zip: "87031",
    driveMin: 35,
    blurb:
      "Valencia is the unincorporated Mid-Rio Grande community between Los Lunas and Bosque Farms, old farmland and quiet rural living.",
    landmarks: ["Whitfield Wildlife Conservation Area", "NM-47 corridor", "Old Valencia church"],
    neighborhoods: ["Old Valencia", "NM-47"],
  },
  {
    slug: "isleta-pueblo",
    name: "Isleta Pueblo",
    county: "Bernalillo County",
    zip: "87022",
    driveMin: 25,
    blurb:
      "Isleta Pueblo is the historic Tiwa-speaking Pueblo south of Albuquerque, agriculture, gaming, and a deep cultural heritage.",
    landmarks: ["Isleta Resort & Casino", "St. Augustine Mission Church", "Isleta Lakes"],
    neighborhoods: ["Pueblo center", "Isleta lakes side"],
  },
  {
    slug: "tomeito",
    name: "ToméAdelino",
    county: "Valencia County",
    zip: "87031",
    driveMin: 38,
    blurb:
      "ToméAdelino is the small unincorporated community in eastern Valencia County, near Tomé Hill and the Adelino farmland.",
    landmarks: ["Tomé Hill", "Adelino farmland", "Manzano Mountain views"],
    neighborhoods: ["Adelino", "Tomé"],
  },
  {
    slug: "regina",
    name: "Regina",
    county: "Sandoval County",
    zip: "87046",
    driveMin: 90,
    blurb:
      "Regina is the small mountain village in the upper Rio Puerco country northwest of Cuba, high desert, ranch country, and a long but striking drive in.",
    landmarks: ["Cuba (nearby)", "Santa Fe National Forest", "Rio Puerco"],
    neighborhoods: ["Old Regina", "Rio Puerco"],
  },
  {
    slug: "cuba",
    name: "Cuba",
    county: "Sandoval County",
    zip: "87013",
    driveMin: 90,
    blurb:
      "Cuba sits at the junction of US-550 and NM-126, the gateway to the Continental Divide Trail and the high country northwest of the Jemez.",
    landmarks: ["Continental Divide Trail", "Bandera Volcano (nearby)", "Cuba High School"],
    neighborhoods: ["Old Cuba", "US-550 frontage"],
  },
  {
    slug: "ojito",
    name: "Ojito",
    county: "Sandoval County",
    zip: "87053",
    driveMin: 50,
    blurb:
      "Ojito Wilderness is the badlands-and-mesa country northwest of San Ysidro, a small community known for the wilderness area itself.",
    landmarks: ["Ojito Wilderness", "Mesa Cabezon", "Seismosaurus dig site"],
    neighborhoods: ["Ojito", "San Ysidro edge"],
  },
];

export const CITY_BY_SLUG: Record<string, CityCopy> = CITIES.reduce(
  (acc, c) => {
    acc[c.slug] = c;
    return acc;
  },
  {} as Record<string, CityCopy>
);

// Lightweight lookup of geographically related cities for cross-linking.
// (Cities in the same county or close drive distance)
export function getNearbyCities(slug: string, limit = 4): CityCopy[] {
  const me = CITY_BY_SLUG[slug];
  if (!me) return [];
  const rest = CITIES.filter((c) => c.slug !== slug);
  // Score: same county = +3, drive distance closeness = +2 if within 10 min, +1 if within 25 min
  const scored = rest.map((c) => {
    let score = 0;
    if (c.county === me.county) score += 3;
    const diff = Math.abs(c.driveMin - me.driveMin);
    if (diff <= 10) score += 2;
    else if (diff <= 25) score += 1;
    return { c, score, diff };
  });
  scored.sort((a, b) => b.score - a.score || a.diff - b.diff);
  return scored.slice(0, limit).map((s) => s.c);
}
