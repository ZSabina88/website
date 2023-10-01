import {SectionCreator} from "./join-us-section.js";
import css from '../styles/style.css'assert { type: 'css' };

document.adoptedStyleSheets = [css];
const sectionCreator = new SectionCreator();

const standardSection = sectionCreator.create("Standard");
// const advancedSection = sectionCreator.create("Advanced");
// const advancedSection = sectionCreator.remove("Advanced");

