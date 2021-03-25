import {Animal} from "../src/animal";
import { type } from "node:os";

class Horse extends Animal {
    constructor(name: string) {
      super(name);
    }
    move(distanceInMeters = 45) {
      console.log("Galloping...");
      super.move(distanceInMeters);
    }
  }
  export  {Horse};
 