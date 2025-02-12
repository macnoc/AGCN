// @ts-ignore
import App from './App.svelte'
import defaultConfig from './js/defaultConfig.js'
import { deepMerge } from './js/utils'
import Styles from './js/globalStyles'
import Notice from './js/notice'

class AGCN {
  constructor(config = {}) {
    new Styles();

    this.config = deepMerge(defaultConfig, config)
    this.container = document.createElement('div')
    this.container.classList.add('agcn-reset', 'agcn-variables', 'agcn-container')
    document.body.appendChild(this.container)

    this.instance = new App({
      target: this.container,
      props: {
        content: this.config.content || {},
        config: this.config.config || {}
      }
    })

    new Notice({
      config: this.config,
      openModal: () => {
        this.openModal();
      }
    });
  }

  destroy() {
    if (this.instance) {
      this.instance.$destroy()
      this.container.remove()
    }
  }

  update(newConfig = {}) {
    if (this.instance) {
      const mergedConfig = deepMerge(this.config, newConfig)
      this.instance.$set({
        content: mergedConfig.content || {},
        config: mergedConfig.config || {},
      })
      this.config = mergedConfig
    }
  }

  openModal() {
    if (this.instance && this.instance.openModal) {
      this.instance.openModal();
    }
  }
}

// Development mode
if (import.meta.env.DEV) {
  new AGCN({
    config: {
      badgePosition: "bottom-left"
    },
    content: {
      en: {
        sections: [
          {
            title: "Personalized Content Suggestions",
            body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam libero perspiciatis ratione rerum iste velit amet sed vitae deleniti, dicta officia adipisci dolore porro voluptatibus facere provident. Repellat, exercitationem eos!"
          },
          {
            title: "Enhanced Search Capabilities",
            body: `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nesciunt laboriosam repudiandae voluptate accusantium fugiat amet est dolorum atque sapiente qui, maiores beatae, aut deserunt voluptatibus placeat explicabo odit necessitatibus!</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nesciunt laboriosam repudiandae voluptate accusantium fugiat amet est dolorum atque sapiente qui, maiores beatae, aut deserunt voluptatibus placeat explicabo odit necessitatibus!</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nesciunt laboriosam repudiandae voluptate accusantium fugiat amet est dolorum atque sapiente qui, maiores beatae, aut deserunt voluptatibus placeat explicabo odit necessitatibus!</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nesciunt laboriosam repudiandae voluptate accusantium fugiat amet est dolorum atque sapiente qui, maiores beatae, aut deserunt voluptatibus placeat explicabo odit necessitatibus!</p>`
          },
          {
            title: "Automated Customer Support",
            body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam libero perspiciatis ratione rerum iste velit amet sed vitae deleniti, dicta officia adipisci dolore porro voluptatibus facere provident. Repellat, exercitationem eos!"
          },
        ]
      }
    }
  })
} else {
  // Production mode
  // @ts-ignore
  window.AGCN = AGCN
}

export default AGCN
