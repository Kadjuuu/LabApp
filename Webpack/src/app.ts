import {Animal} from "../src/animal";
import {Horse} from "../src/horse";
import {Snake} from "../src/snake";




let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);