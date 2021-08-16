import { ProgressBars } from "./components/progress-bar/ProgressBars.js";
import { progressBarData } from "./data/progressBarData.js";

const pb = new ProgressBars(progressBarData);
console.log(pb);

pb.render();