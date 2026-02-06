import { COLORS } from '../helpers/colors.ts';
/**
 * ! Factory Method:
 * El patrón Factory Method permite crear objetos sin especificar
 * la clase exacta del objeto que se creará.
 *
 * En lugar de eso, delegamos la creación de objetos a subclases o métodos
 * que encapsulan esta lógica.
 *
 * * Es útil cuando una clase no puede anticipar la clase
 * * de objetos que debe crear.
 *
 * https://refactoring.guru/es/design-patterns/factory-method
 *
 */

interface Hamburger {
    prepare(): void;
}

class ChickenHamburger implements Hamburger {
    prepare(): void {
        console.log('Preparando una hamburguesa de %cpollo', COLORS.yellow)
    }

}

class BeefHamburger implements Hamburger {
    prepare(): void {
        console.log('Preparando una hamburguesa de %cres', COLORS.brown)
    }

}

abstract class Restaurant {
   protected abstract createHamburguer(): Hamburger;

    orderHamburger() {
        const hamburguer = this.createHamburguer();
        hamburguer.prepare();
    }
}

class ChickenRestaurant extends Restaurant {

    createHamburguer(): Hamburger {
        return new ChickenHamburger();
    }

}

class BeefRestaurant extends Restaurant {
    createHamburguer(): Hamburger {
        return new BeefHamburger();
    }
}


function main() {
    let restaurant: Restaurant;

    const burgerType = prompt('Que tipo de hamburguesa quieres?(beef/chicken)');

    switch (burgerType) {
        case 'chicken':
            restaurant = new ChickenRestaurant();
            break;
        case 'beef':
            restaurant = new BeefRestaurant();
            break;

        default:
            throw new Error('Opcion no valida');
    }

    restaurant.orderHamburger();
}

main();