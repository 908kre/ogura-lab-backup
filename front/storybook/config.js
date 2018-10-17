import { configure } from '@storybook/vue'
import * as _  from "@/main";

const req = require.context("../stories", true, /.stories.js$/);

function loadStories () {
  req.keys().forEach(filename => req(filename));
}
configure(loadStories, module)
