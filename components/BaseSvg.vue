Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore
 
@felipepimentab 
UpperSoft
/
ouvidoria-web
Private
4
00
Code
Issues
Pull requests
1
Actions
Projects
Security
Insights
ouvidoria-web/src/components/base/svg/SVG.vue
@felipepimentab
felipepimentab feat(ticket details): various corrections
…
Latest commit 8a2a87d 4 days ago
 History
 2 contributors
@felipepimentab@Matheusgfgl
371 lines (363 sloc)  13.8 KB
   
<template>
  <svg
    v-if="name"
    xmlns="http://www.w3.org/2000/svg"
    :width="iconData.width"
    :height="iconData.height"
    :viewBox="iconData.viewBox"
    :aria-labelledby="`${iconData.name.replace(' ', '-')}-icon`"
    role="presentation"
  >

    <title :id="`${iconData.name.replace(' ', '-')}-icon`">{{ iconData.name }}</title>

    <g :fill="color">
      <component :is="name" />
    </g>
  </svg>
</template>

<script>
// Import SVGs here
const Menu = () => import('@/components/svg/Menu.vue');

export default {
  name: 'SvgBase',
  components: {
    // Load them here
    Menu,
  },
  props: {
    icon: {
      type: String,
      required: false,
      default: null,
    },
    name: {
      type: String,
      required: false,
      default: null,
    },
    color: {
      type: String,
      required: false,
      default: null,
    },
    width: {
      type: [Number, String],
      required: false,
      default: null,
    },
    height: {
      type: [Number, String],
      required: false,
      default: null,
    },
    viewBox: {
      type: String,
      required: false,
      default: null,
    },
  },
  computed: {
    iconData() {
      switch (this.name) {
        case 'Menu':
        return this.defaultData('24', '24');
        default:
          return this.defaultData('200');
      }
    },
  },
  methods: {
    defaultData(width, height = null, viewBox = null) {
      return {
        name: this.name ? this.name : this.icon,
        width: this.width ? this.width : width,
        height: this.height ? this.height : (height || width),
        viewBox: this.viewBox ? this.viewBox : (viewBox || `0 0 ${width} ${(height || width)}`),
      };
    },
  },
};
</script>
© 2021 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
Loading complete