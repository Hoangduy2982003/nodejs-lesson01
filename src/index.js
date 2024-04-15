import {sumTwoNum , printConsole} from "./util.js";
// import subTwoNum from "./util.js";
import {default as subTwoNum } from "./util.js";

function main() {
    printConsole("Tong 2 so 1 va 2 la :" + sumTwoNum(1,2));
    printConsole("Hieu 2 so 1 va 2 la :" + subTwoNum(1,2));
}

main();