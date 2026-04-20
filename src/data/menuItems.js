import BakewellTart from '../assets/BakewellTart.png';
import BananaSplit from '../assets/BananaSplit.png';
import CookieCheesecake from '../assets/CookieCheesecake.png';
import BanoffeePot from '../assets/BanoffeePot.png';
import BlueJelly from '../assets/BlueJelly.png';
import CarrotCake from '../assets/CarrotCake.png';
import Cheesecake from '../assets/Cheesecake.png';
import CherryShortcake from '../assets/CherryShortcake.png';
import ChocolateCake from '../assets/ChocolateCake.png';
import ChocolateDonut from '../assets/ChocolateDonut.png';
import ChocolateSwissRoll from '../assets/ChocolateSwissRoll.png';
import ChocolateTwist from '../assets/ChocolateTwist.png';
import CookieNCreamPot from '../assets/CookieNCreamPot.png';
import CremeCaramel from '../assets/CremeCaramel.png';
import Croissant from '../assets/Croissant.png';
import DanishGlazed from '../assets/DanishGlazed.png';
import FrenchFancies from '../assets/FrenchFancies.png';
import GlazedCinnamonRoll from '../assets/GlazedCinnamonroll.png';
import IceCreamWaffles from '../assets/IceCreamWaffles.png';
import LemonBlueberryPot from '../assets/LemonBlueberryPot.png';
import LemonCheesecake from '../assets/LemonCheesecake.png';
import LemonDonut from '../assets/LemonDonut.png';
import Macarons from '../assets/Macrons.png';
import PancakesBerry from '../assets/Pancakes_Berry.png';
import PancakesChocolate from '../assets/Pancakes_Chocolate.png';
import PannaCotta from '../assets/PannaCotta.png';
import PoachedPear from '../assets/PoachedPear.png';
import RainbowCake from '../assets/RainbowCake.png';
import RaspberryCheesecakePot from '../assets/RaspberryCheesecakePot.png';
import RedVelvetCake from '../assets/RedVelvetCake.png';
import StrawberryDonut from '../assets/StrawberryDonut.png';
import StrawberryShortcake from '../assets/StrawberryShortcake.png';
import StrawberryWaffles from '../assets/StrawberryWaffles.png';
import SwissRoll from '../assets/SwissRoll.png';
import Tiramisu from '../assets/Tirimasu.png';
import VanillaCake from '../assets/VanillaCake.png';

const BASE = 'https://raw.githubusercontent.com/shahlafazz/sweet-corner-assets/main';

/* ── All items defined once ───────────────────────────────────── */
const allItems = [
  { id: 'vanilla_cake',            name: 'Vanilla Cake',            price: 5.50, description: 'Classic sponge with silky vanilla buttercream',    image: VanillaCake,            imageUrl: `${BASE}/VanillaCake.png` },
  { id: 'strawberry_shortcake',    name: 'Strawberry Cake',         price: 6.50, description: 'Airy sponge layered with cream and berries',       image: StrawberryShortcake,    imageUrl: `${BASE}/StrawberryShortcake.png` },
  { id: 'raspberry_cheesecake_pot',name: 'Raspberry Cheesecake Pot', mobileName: 'Berry Cheesecake', price: 5.50, description: 'Tangy raspberry on smooth cheesecake cream', image: RaspberryCheesecakePot, imageUrl: `${BASE}/RaspberryCheesecakePot.png` },
  { id: 'macarons',                name: 'Macarons',                price: 5.00, description: 'Delicate almond shells with a soft ganache',       image: Macarons,               imageUrl: `${BASE}/Macrons.png` },
  { id: 'carrot_cake',             name: 'Carrot Cake',             price: 5.50, description: 'Spiced sponge with cream cheese frosting',         image: CarrotCake,             imageUrl: `${BASE}/CarrotCake.png` },
  { id: 'panna_cotta',             name: 'Panna Cotta',             price: 5.50, description: 'Creamy Italian set pudding, delicately flavoured',  image: PannaCotta,             imageUrl: `${BASE}/PannaCotta.png` },
  { id: 'blue_jelly',              name: 'Blue Jelly',              price: 4.00, description: 'Wobbly berry jelly, cool and refreshing',          image: BlueJelly,              imageUrl: `${BASE}/BlueJelly.png` },
  { id: 'lemon_cheesecake',        name: 'Lemon Cheesecake',        price: 6.00, description: 'Zesty lemon curd on a creamy cheesecake base',     image: LemonCheesecake,        imageUrl: `${BASE}/LemonCheesecake.png` },
  { id: 'glazed_cinnamon_roll',    name: 'Glazed Cinnamon Roll',    mobileName: 'Cinnamon Roll',    mobileImgSize: 62, price: 5.00, description: 'Pillowy swirl with warm cinnamon and glaze', image: GlazedCinnamonRoll, imageUrl: `${BASE}/GlazedCinnamonroll.png` },
  { id: 'chocolate_swiss_roll',    name: 'Chocolate Swiss Roll',    mobileName: 'Cocoa Swiss Roll', mobileImgSize: 62, price: 5.50, description: 'Cocoa sponge rolled with chocolate cream',   image: ChocolateSwissRoll, imageUrl: `${BASE}/ChocolateSwissRoll.png` },
  { id: 'berry_pancakes',          name: 'Berry Pancakes',          mobileImagePadTop: 10, price: 6.50, description: 'Fluffy stacks loaded with fresh berries',  image: PancakesBerry,  imageUrl: `${BASE}/Pancakes_Berry.png` },
  { id: 'creme_caramel',           name: 'Crème Caramel',           mobileImgSize: 62, price: 5.00, description: 'Silky custard with a golden caramel top',    image: CremeCaramel,   imageUrl: `${BASE}/CremeCaramel.png` },
  { id: 'bakewell_tart',           name: 'Bakewell Tart',           mobileImgSize: 62, price: 5.00, description: 'Almond frangipane on buttery shortcrust',    image: BakewellTart,   imageUrl: `${BASE}/BakewellTart.png` },
  { id: 'banana_split',            name: 'Banana Split',            price: 6.50, description: 'Classic banana with three scoops and sauce',       image: BananaSplit,            imageUrl: `${BASE}/BananaSplit.png` },
  { id: 'banoffee_pot',            name: 'Banoffee Pot',            mobileImagePadTop: 10, price: 5.50, description: 'Toffee, banana and whipped cream in a jar', image: BanoffeePot, imageUrl: `${BASE}/BanoffeePot.png` },
  { id: 'cheesecake',              name: 'Cheesecake',              price: 5.50, description: 'Classic baked cheesecake with a buttery biscuit base', image: Cheesecake,          imageUrl: `${BASE}/Cheesecake.png` },
  { id: 'cherry_shortcake',        name: 'Cherry Shortcake',        price: 6.00, description: 'Light sponge piled with cream and cherries',       image: CherryShortcake,        imageUrl: `${BASE}/CherryShortcake.png` },
  { id: 'chocolate_cake',          name: 'Chocolate Cake',          price: 6.50, description: 'Rich dark chocolate layers, ganache frosted',      image: ChocolateCake,          imageUrl: `${BASE}/ChocolateCake.png` },
  { id: 'chocolate_donut',         name: 'Chocolate Donut',         mobileImgSize: 62, price: 4.00, description: 'Fluffy ring glazed in dark chocolate',       image: ChocolateDonut, imageUrl: `${BASE}/ChocolateDonut.png` },
  { id: 'chocolate_twist',         name: 'Chocolate Twist',         price: 4.50, description: 'Flaky twisted pastry with a chocolate swirl',      image: ChocolateTwist,         imageUrl: `${BASE}/ChocolateTwist.png` },
  { id: 'cookie_n_cream_pot',      name: 'Cookie N Cream Pot',      mobileImagePadTop: 10, price: 5.50, description: 'Crushed cookies folded into vanilla cream', image: CookieNCreamPot, imageUrl: `${BASE}/CookieNCreamPot.png` },
  { id: 'cookie_cheesecake',       name: 'Cookie Cheesecake',       price: 5.50, description: 'Creamy cheesecake with a cookie crumble base',     image: CookieCheesecake,       imageUrl: `${BASE}/CookieCheesecake.png` },
  { id: 'croissant',               name: 'Croissant',               price: 4.50, description: 'Buttery, flaky layers baked to golden',            image: Croissant,              imageUrl: `${BASE}/Croissant.png` },
  { id: 'danish_glazed',           name: 'Danish Glazed',           price: 4.50, description: 'Flaky pastry swirl with a sweet glaze',            image: DanishGlazed,           imageUrl: `${BASE}/DanishGlazed.png` },
  { id: 'french_fancies',          name: 'French Fancies',          price: 5.00, description: 'Petit fours with fondant and a creamy centre',     image: FrenchFancies,          imageUrl: `${BASE}/FrenchFancies.png` },
  { id: 'ice_cream_waffles',       name: 'Ice Cream Waffles',       price: 7.00, description: 'Crispy waffles topped with scoops and drizzle',    image: IceCreamWaffles,        imageUrl: `${BASE}/IceCreamWaffles.png` },
  { id: 'lemon_blueberry_pot',     name: 'Lemon Blueberry Pot',     mobileName: 'Blueberry Custard', price: 5.50, description: 'Tangy lemon cream with fresh blueberries', image: LemonBlueberryPot, imageUrl: `${BASE}/LemonBlueberryPot.png` },
  { id: 'lemon_donut',             name: 'Lemon Donut',             mobileImgSize: 62, price: 4.00, description: 'Soft ring glazed with bright lemon icing',    image: LemonDonut,     imageUrl: `${BASE}/LemonDonut.png` },
  { id: 'chocolate_pancakes',      name: 'Chocolate Pancakes',      mobileImagePadTop: 10, price: 6.50, description: 'Thick chocolate stacks with cocoa drizzle', image: PancakesChocolate, imageUrl: `${BASE}/Pancakes_Chocolate.png` },
  { id: 'poached_pear',            name: 'Poached Pear',            price: 5.50, description: 'Tender pear poached in spiced syrup',              image: PoachedPear,            imageUrl: `${BASE}/PoachedPear.png` },
  { id: 'rainbow_cake',            name: 'Rainbow Cake',            price: 7.00, description: 'Six vivid layers with cloud-white frosting',       image: RainbowCake,            imageUrl: `${BASE}/RainbowCake.png` },
  { id: 'red_velvet_cake',         name: 'Red Velvet Cake',         price: 6.50, description: 'Crimson sponge with cream cheese frosting',        image: RedVelvetCake,          imageUrl: `${BASE}/RedVelvetCake.png` },
  { id: 'strawberry_donut',        name: 'Strawberry Donut',        mobileImgSize: 62, price: 4.00, description: 'Pillowy ring glazed in strawberry pink',      image: StrawberryDonut, imageUrl: `${BASE}/StrawberryDonut.png` },
  { id: 'strawberry_waffles',      name: 'Strawberry Waffles',      price: 7.00, description: 'Golden waffles topped with strawberries and cream', image: StrawberryWaffles,     imageUrl: `${BASE}/StrawberryWaffles.png` },
  { id: 'swiss_roll',              name: 'Swiss Roll',              mobileImgSize: 62, price: 5.00, description: 'Fluffy vanilla sponge rolled with fresh cream', image: SwissRoll,    imageUrl: `${BASE}/SwissRoll.png` },
  { id: 'tiramisu',                name: 'Tiramisu',                price: 6.50, description: 'Coffee-soaked sponge with mascarpone cloud',       image: Tiramisu,               imageUrl: `${BASE}/Tirimasu.png` },
];

/* Helper to look up an item by id */
const byId = (id) => allItems.find(item => item.id === id);

/* ── Desktop order — default export ───────────────────────────── */
const menuItems = [
  // Page 1
  byId('vanilla_cake'),            byId('strawberry_shortcake'),     byId('raspberry_cheesecake_pot'),
  byId('macarons'),                byId('red_velvet_cake'),           byId('panna_cotta'),
  byId('blue_jelly'),              byId('lemon_cheesecake'),          byId('glazed_cinnamon_roll'),
  byId('chocolate_swiss_roll'),    byId('berry_pancakes'),            byId('creme_caramel'),
  // Page 2
  byId('cookie_cheesecake'),       byId('rainbow_cake'),              byId('cheesecake'),
  byId('tiramisu'),                byId('danish_glazed'),             byId('croissant'),
  byId('cookie_n_cream_pot'),      byId('banoffee_pot'),              byId('lemon_blueberry_pot'),
  byId('strawberry_donut'),        byId('chocolate_donut'),           byId('lemon_donut'),
  // Page 3
  byId('chocolate_cake'),          byId('french_fancies'),            byId('carrot_cake'),
  byId('poached_pear'),            byId('cherry_shortcake'),          byId('chocolate_twist'),
  byId('strawberry_waffles'),      byId('chocolate_pancakes'),        byId('ice_cream_waffles'),
  byId('swiss_roll'),              byId('bakewell_tart'),             byId('banana_split'),
];

/* ── Mobile order (Shahla's custom layout) ────────────────────── */
export const mobileMenuItems = [
  // Page 1
  byId('vanilla_cake'),        byId('strawberry_shortcake'),    byId('raspberry_cheesecake_pot'),
  byId('macarons'),            byId('berry_pancakes'),           byId('creme_caramel'),
  byId('blue_jelly'),          byId('lemon_cheesecake'),         byId('chocolate_swiss_roll'),
  // Page 2
  byId('rainbow_cake'),        byId('red_velvet_cake'),          byId('chocolate_cake'),
  byId('glazed_cinnamon_roll'),byId('croissant'),                byId('tiramisu'),
  byId('cookie_n_cream_pot'),  byId('banoffee_pot'),             byId('lemon_blueberry_pot'),
  // Page 3
  byId('chocolate_donut'),     byId('strawberry_donut'),         byId('lemon_donut'),
  byId('panna_cotta'),         byId('danish_glazed'),            byId('bakewell_tart'),
  byId('chocolate_twist'),     byId('strawberry_waffles'),       byId('ice_cream_waffles'),
  // Page 4
  byId('carrot_cake'),         byId('cherry_shortcake'),         byId('french_fancies'),
  byId('chocolate_pancakes'),  byId('poached_pear'),             byId('banana_split'),
  byId('swiss_roll'),          byId('cheesecake'),
];

export default menuItems;
