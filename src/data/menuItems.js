import BakewellTart from '../assets/BakewellTart.png';
import BananaSplit from '../assets/BananaSplit.png';
import BanoffeePot from '../assets/BanoffeePot.png';
import BlueJelly from '../assets/BlueJelly.png';
import CarrotCake from '../assets/CarrotCake.png';
import CheesecakePot from '../assets/CheesecakePot.png';
import CherryShortcake from '../assets/CherryShortcake.png';
import ChocolateCake from '../assets/ChocolateCake.png';
import ChocolateDonut from '../assets/ChocolateDonut.png';
import ChocolateSwissRoll from '../assets/ChocolateSwissRoll.png';
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
import PancakesRainbow from '../assets/Pancakes_Rainbow.png';
import PannaCotta from '../assets/PannaCotta.png';
import RainbowCake from '../assets/RainbowCake.png';
import RaspberryCheesecakePot from '../assets/RaspberryCheesecakePot.png';
import RedVelvetCake from '../assets/RedVelvetCake.png';
import StrawberryDonut from '../assets/StrawberryDonut.png';
import StrawberryShortcake from '../assets/StrawberryShortcake.png';
import StrawberryWaffles from '../assets/StrawberryWaffles.png';
import SwissRoll from '../assets/SwissRoll.png';
import Tiramisu from '../assets/Tirimasu.png';
import VanillaCake from '../assets/VanillaCake.png';
import Waffles from '../assets/Waffles.png';

const BASE = 'https://raw.githubusercontent.com/shahlafazz/sweet-corner-assets/main';

const menuItems = [
  // ── Page 1 (slots 1–12) ──────────────────────────────────────
  { id: 'vanilla_cake',            name: 'Vanilla Cake',            price: 5.50, description: 'Classic sponge with silky vanilla buttercream',   image: VanillaCake,            imageUrl: `${BASE}/VanillaCake.png` },
  { id: 'strawberry_shortcake',    name: 'Strawberry Cake',         price: 6.50, description: 'Airy sponge layered with cream and berries',      image: StrawberryShortcake,    imageUrl: `${BASE}/StrawberryShortcake.png` },
  { id: 'raspberry_cheesecake_pot',name: 'Raspberry Cheesecake Pot', mobileName: 'Berry Cheesecake',  price: 5.50, description: 'Tangy raspberry on smooth cheesecake cream',      image: RaspberryCheesecakePot, imageUrl: `${BASE}/RaspberryCheesecakePot.png` },
  { id: 'macarons',                name: 'Macarons',                price: 5.00, description: 'Delicate almond shells with a soft ganache',      image: Macarons,               imageUrl: `${BASE}/Macrons.png` },
  { id: 'berry_pancakes',          name: 'Berry Pancakes',          mobileImagePadTop: 10, price: 6.50, description: 'Fluffy stacks loaded with fresh berries',         image: PancakesBerry,          imageUrl: `${BASE}/Pancakes_Berry.png` },
  { id: 'creme_caramel',           name: 'Crème Caramel',           mobileImgSize: 62, price: 5.00, description: 'Silky custard with a golden caramel top',         image: CremeCaramel,           imageUrl: `${BASE}/CremeCaramel.png` },
  { id: 'blue_jelly',              name: 'Blue Jelly',              price: 4.00, description: 'Wobbly berry jelly, cool and refreshing',         image: BlueJelly,              imageUrl: `${BASE}/BlueJelly.png` },
  { id: 'lemon_cheesecake',        name: 'Lemon Cheesecake',        price: 6.00, description: 'Zesty lemon curd on a creamy cheesecake base',    image: LemonCheesecake,        imageUrl: `${BASE}/LemonCheesecake.png` },
  { id: 'chocolate_swiss_roll',    name: 'Chocolate Swiss Roll',    mobileName: 'Cocoa Swiss Roll', mobileImgSize: 62, price: 5.50, description: 'Cocoa sponge rolled with chocolate cream',        image: ChocolateSwissRoll,     imageUrl: `${BASE}/ChocolateSwissRoll.png` },
  { id: 'glazed_cinnamon_roll',    name: 'Glazed Cinnamon Roll',    mobileName: 'Cinnamon Roll',    mobileImgSize: 62, price: 5.00, description: 'Pillowy swirl with warm cinnamon and glaze',      image: GlazedCinnamonRoll,     imageUrl: `${BASE}/GlazedCinnamonroll.png` },
  { id: 'carrot_cake',             name: 'Carrot Cake',             price: 5.50, description: 'Spiced sponge with cream cheese frosting',        image: CarrotCake,             imageUrl: `${BASE}/CarrotCake.png` },
  { id: 'banoffee_pot',            name: 'Banoffee Pot',            mobileImagePadTop: 10, price: 5.50, description: 'Toffee, banana and whipped cream in a jar',       image: BanoffeePot,            imageUrl: `${BASE}/BanoffeePot.png` },
  // ── Page 2+ ──────────────────────────────────────────────────
  { id: 'danish_glazed',           name: 'Danish Glazed',           price: 4.50, description: 'Flaky pastry swirl with a sweet glaze',           image: DanishGlazed,           imageUrl: `${BASE}/DanishGlazed.png` },
  { id: 'panna_cotta',             name: 'Panna Cotta',             price: 5.50, description: 'Creamy Italian set pudding, delicately flavoured', image: PannaCotta,             imageUrl: `${BASE}/PannaCotta.png` },
  { id: 'red_velvet_cake',         name: 'Red Velvet Cake',         price: 6.50, description: 'Crimson sponge with cream cheese frosting',       image: RedVelvetCake,          imageUrl: `${BASE}/RedVelvetCake.png` },
  { id: 'tiramisu',                name: 'Tiramisu',                price: 6.50, description: 'Coffee-soaked sponge with mascarpone cloud',      image: Tiramisu,               imageUrl: `${BASE}/Tirimasu.png` },
  { id: 'cherry_shortcake',        name: 'Cherry Shortcake',        price: 6.00, description: 'Light sponge piled with cream and cherries',      image: CherryShortcake,        imageUrl: `${BASE}/CherryShortcake.png` },
  { id: 'chocolate_cake',          name: 'Chocolate Cake',          price: 6.50, description: 'Rich dark chocolate layers, ganache frosted',     image: ChocolateCake,          imageUrl: `${BASE}/ChocolateCake.png` },
  { id: 'chocolate_donut',         name: 'Chocolate Donut',         mobileImgSize: 62, price: 4.00, description: 'Fluffy ring glazed in dark chocolate',            image: ChocolateDonut,         imageUrl: `${BASE}/ChocolateDonut.png` },
  { id: 'cookie_n_cream_pot',      name: 'Cookie N Cream Pot',      mobileImagePadTop: 10, price: 5.50, description: 'Crushed cookies folded into vanilla cream',       image: CookieNCreamPot,        imageUrl: `${BASE}/CookieNCreamPot.png` },
  { id: 'croissant',               name: 'Croissant',               price: 4.50, description: 'Buttery, flaky layers baked to golden',           image: Croissant,              imageUrl: `${BASE}/Croissant.png` },
  { id: 'bakewell_tart',           name: 'Bakewell Tart',           mobileImgSize: 62, price: 5.00, description: 'Almond frangipane on buttery shortcrust',         image: BakewellTart,           imageUrl: `${BASE}/BakewellTart.png` },
  { id: 'french_fancies',          name: 'French Fancies',          price: 5.00, description: 'Petit fours with fondant and a creamy centre',    image: FrenchFancies,          imageUrl: `${BASE}/FrenchFancies.png` },
  { id: 'ice_cream_waffles',       name: 'Ice Cream Waffles',       price: 7.00, description: 'Crispy waffles topped with scoops and drizzle',   image: IceCreamWaffles,        imageUrl: `${BASE}/IceCreamWaffles.png` },
  { id: 'lemon_blueberry_pot',     name: 'Lemon Blueberry Pot',     mobileName: 'Blueberry Custard', price: 5.50, description: 'Tangy lemon cream with fresh blueberries',        image: LemonBlueberryPot,      imageUrl: `${BASE}/LemonBlueberryPot.png` },
  { id: 'lemon_donut',             name: 'Lemon Donut',             mobileImgSize: 62, price: 4.00, description: 'Soft ring glazed with bright lemon icing',        image: LemonDonut,             imageUrl: `${BASE}/LemonDonut.png` },
  { id: 'chocolate_pancakes',      name: 'Chocolate Pancakes',      mobileImagePadTop: 10, price: 6.50, description: 'Thick chocolate stacks with cocoa drizzle',       image: PancakesChocolate,      imageUrl: `${BASE}/Pancakes_Chocolate.png` },
  { id: 'rainbow_pancakes',        name: 'Rainbow Pancakes',        mobileImagePadTop: 10, price: 6.50, description: 'Colourful layered stacks with whipped cream',     image: PancakesRainbow,        imageUrl: `${BASE}/Pancakes_Rainbow.png` },
  { id: 'rainbow_cake',            name: 'Rainbow Cake',            price: 7.00, description: 'Six vivid layers with cloud-white frosting',      image: RainbowCake,            imageUrl: `${BASE}/RainbowCake.png` },
  { id: 'banana_split',            name: 'Banana Split',            price: 6.50, description: 'Classic banana with three scoops and sauce',      image: BananaSplit,            imageUrl: `${BASE}/BananaSplit.png` },
  { id: 'strawberry_donut',        name: 'Strawberry Donut',        mobileImgSize: 62, price: 4.00, description: 'Pillowy ring glazed in strawberry pink',          image: StrawberryDonut,        imageUrl: `${BASE}/StrawberryDonut.png` },
  { id: 'strawberry_waffles',      name: 'Strawberry Waffles',      price: 7.00, description: 'Golden waffles topped with strawberries and cream',image: StrawberryWaffles,      imageUrl: `${BASE}/StrawberryWaffles.png` },
  { id: 'swiss_roll',              name: 'Swiss Roll',              mobileImgSize: 62, price: 5.00, description: 'Fluffy vanilla sponge rolled with fresh cream',    image: SwissRoll,              imageUrl: `${BASE}/SwissRoll.png` },
  { id: 'cheesecake_pot',          name: 'Cheesecake Pot',          price: 5.50, description: 'Silky cheesecake layered in a little pot',        image: CheesecakePot,          imageUrl: `${BASE}/CheesecakePot.png` },
  { id: 'waffles',                 name: 'Waffles',                 price: 6.00, description: 'Crispy golden waffles with butter and syrup',     image: Waffles,                imageUrl: `${BASE}/Waffles.png` },
];

export default menuItems;
