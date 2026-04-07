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

const menuItems = [
  // ── Page 1 (slots 1–12) ──────────────────────────────────────
  { id: 'vanilla_cake',            name: 'Vanilla Cake',            price: 5.50, description: 'Classic sponge with silky vanilla buttercream',   image: VanillaCake },
  { id: 'strawberry_shortcake',    name: 'Strawberry Shortcake',    price: 6.50, description: 'Airy sponge layered with cream and berries',      image: StrawberryShortcake },
  { id: 'raspberry_cheesecake_pot',name: 'Raspberry Cheesecake Pot',price: 5.50, description: 'Tangy raspberry on smooth cheesecake cream',      image: RaspberryCheesecakePot },
  { id: 'macarons',                name: 'Macarons',                price: 5.00, description: 'Delicate almond shells with a soft ganache',      image: Macarons },
  { id: 'carrot_cake',             name: 'Carrot Cake',             price: 5.50, description: 'Spiced sponge with cream cheese frosting',        image: CarrotCake },
  { id: 'panna_cotta',             name: 'Panna Cotta',             price: 5.50, description: 'Creamy Italian set pudding, delicately flavoured', image: PannaCotta },
  { id: 'blue_jelly',              name: 'Blue Jelly',              price: 4.00, description: 'Wobbly berry jelly, cool and refreshing',         image: BlueJelly },
  { id: 'lemon_cheesecake',        name: 'Lemon Cheesecake',        price: 6.00, description: 'Zesty lemon curd on a creamy cheesecake base',    image: LemonCheesecake },
  { id: 'glazed_cinnamon_roll',    name: 'Glazed Cinnamon Roll',    price: 5.00, description: 'Pillowy swirl with warm cinnamon and glaze',      image: GlazedCinnamonRoll },
  { id: 'chocolate_swiss_roll',    name: 'Chocolate Swiss Roll',    price: 5.50, description: 'Cocoa sponge rolled with chocolate cream',        image: ChocolateSwissRoll },
  { id: 'berry_pancakes',          name: 'Berry Pancakes',          price: 6.50, description: 'Fluffy stacks loaded with fresh berries',         image: PancakesBerry },
  { id: 'creme_caramel',           name: 'Crème Caramel',           price: 5.00, description: 'Silky custard with a golden caramel top',         image: CremeCaramel },
  // ── Page 2+ ──────────────────────────────────────────────────
  { id: 'bakewell_tart',           name: 'Bakewell Tart',           price: 5.00, description: 'Almond frangipane on buttery shortcrust',       image: BakewellTart },
  { id: 'banana_split',            name: 'Banana Split',            price: 6.50, description: 'Classic banana with three scoops and sauce',     image: BananaSplit },
  { id: 'banoffee_pot',            name: 'Banoffee Pot',            price: 5.50, description: 'Toffee, banana and whipped cream in a jar',       image: BanoffeePot },
  { id: 'cheesecake_pot',          name: 'Cheesecake Pot',          price: 5.50, description: 'Silky cheesecake layered in a little pot',        image: CheesecakePot },
  { id: 'cherry_shortcake',        name: 'Cherry Shortcake',        price: 6.00, description: 'Light sponge piled with cream and cherries',      image: CherryShortcake },
  { id: 'chocolate_cake',          name: 'Chocolate Cake',          price: 6.50, description: 'Rich dark chocolate layers, ganache frosted',     image: ChocolateCake },
  { id: 'chocolate_donut',         name: 'Chocolate Donut',         price: 4.00, description: 'Fluffy ring glazed in dark chocolate',            image: ChocolateDonut },
  { id: 'cookie_n_cream_pot',      name: 'Cookie N Cream Pot',      price: 5.50, description: 'Crushed cookies folded into vanilla cream',       image: CookieNCreamPot },
  { id: 'croissant',               name: 'Croissant',               price: 4.50, description: 'Buttery, flaky layers baked to golden',           image: Croissant },
  { id: 'danish_glazed',           name: 'Danish Glazed',           price: 4.50, description: 'Flaky pastry swirl with a sweet glaze',           image: DanishGlazed },
  { id: 'french_fancies',          name: 'French Fancies',          price: 5.00, description: 'Petit fours with fondant and a creamy centre',    image: FrenchFancies },
  { id: 'ice_cream_waffles',       name: 'Ice Cream Waffles',       price: 7.00, description: 'Crispy waffles topped with scoops and drizzle',   image: IceCreamWaffles },
  { id: 'lemon_blueberry_pot',     name: 'Lemon Blueberry Pot',     price: 5.50, description: 'Tangy lemon cream with fresh blueberries',        image: LemonBlueberryPot },
  { id: 'lemon_donut',             name: 'Lemon Donut',             price: 4.00, description: 'Soft ring glazed with bright lemon icing',        image: LemonDonut },
  { id: 'chocolate_pancakes',      name: 'Chocolate Pancakes',      price: 6.50, description: 'Thick chocolate stacks with cocoa drizzle',       image: PancakesChocolate },
  { id: 'rainbow_pancakes',        name: 'Rainbow Pancakes',        price: 6.50, description: 'Colourful layered stacks with whipped cream',     image: PancakesRainbow },
  { id: 'rainbow_cake',            name: 'Rainbow Cake',            price: 7.00, description: 'Six vivid layers with cloud-white frosting',      image: RainbowCake },
  { id: 'red_velvet_cake',         name: 'Red Velvet Cake',         price: 6.50, description: 'Crimson sponge with cream cheese frosting',       image: RedVelvetCake },
  { id: 'strawberry_donut',        name: 'Strawberry Donut',        price: 4.00, description: 'Pillowy ring glazed in strawberry pink',          image: StrawberryDonut },
  { id: 'strawberry_waffles',      name: 'Strawberry Waffles',      price: 7.00, description: 'Golden waffles topped with strawberries and cream',image: StrawberryWaffles },
  { id: 'swiss_roll',              name: 'Swiss Roll',              price: 5.00, description: 'Fluffy vanilla sponge rolled with fresh cream',    image: SwissRoll },
  { id: 'tiramisu',                name: 'Tiramisu',                price: 6.50, description: 'Coffee-soaked sponge with mascarpone cloud',      image: Tiramisu },
  { id: 'waffles',                 name: 'Waffles',                 price: 6.00, description: 'Crispy golden waffles with butter and syrup',     image: Waffles },
];

export default menuItems;
