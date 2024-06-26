import Vue from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// This allows for tree-shaking to minimize bundle size
import {
  faPaperPlane,
  faMoon,
  faCalendar,
  faList,
  faBars,
  faSearch,
  faAddressBook,
  faFileAlt,
  //faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faPaperPlane,
  faMoon,
  faCalendar,
  faList,
  faBars,
  faSearch,
  faAddressBook,
  faFileAlt
  //faCircleInfo
);

Vue.component("font-awesome-icon", FontAwesomeIcon);
