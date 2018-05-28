import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories/components/Alert');
}

configure(loadStories, module);
