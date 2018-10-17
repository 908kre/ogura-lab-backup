import { storiesOf } from '@storybook/vue'
import NavBar from '@/components/NavBar'

storiesOf('NavBar', module)
  .add('simple', () => ({
    components: { NavBar },
    template: `<nav-bar></nav-bar>`,
  }))
