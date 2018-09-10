window.source = {
  "title": "Analytics",
  "url": "analytics.html",
  "type": "js",
  "content": "/**\n * @name Analytics\n * @category Utilities\n * @description Provides a façade to Google Analytics and other web analytics services through a system of plugins.\n * @example\n   <example name=\"Analytics\">\n    <file name=\"index.html\">\n      <div>\n        <p>Click the link below and check the console output:</p>\n        <div>\n          <a href id=\"click-me\" class=\"ring-link\">\n            Track click event\n          </a>\n        </div>\n      </div>\n    </file>\n    <file name=\"index.js\">\n      import analytics from '@jetbrains/ring-ui/components/analytics/analytics';\n      import '@jetbrains/ring-ui/components/link/link.scss';\n      import AnalyticsCustomPlugin from '@jetbrains/ring-ui/components/analytics/analytics__custom-plugin';\n\n      const FLUSH_INTERVAL = 100;\n\n      const customPlugin = new AnalyticsCustomPlugin(events => (\n        console.log('Custom plugin receives:', events[0].category, events[0].action)\n      ), false, FLUSH_INTERVAL);\n\n      analytics.config([customPlugin]);\n\n      document.getElementById('click-me').addEventListener('click', event => {\n        analytics.trackEvent('test-category', 'test-action');\n        event.preventDefault();\n      });\n    </file>\n   </example>\n */\nclass Analytics {\n  constructor() {\n    this._plugins = [];\n  }\n\n  config(plugins) {\n    this._plugins = plugins;\n  }\n\n  track(rawTrackingData, /* optional */ additionalData) {\n    if (!rawTrackingData) {\n      return;\n    }\n\n    let splitIdx = rawTrackingData.indexOf(':');\n    if (splitIdx < 0) {\n      splitIdx = rawTrackingData.indexOf('_');\n    }\n    if (splitIdx < 0) {\n      splitIdx = rawTrackingData.length;\n    }\n\n    const category = rawTrackingData.substr(0, splitIdx);\n    const subcategory = rawTrackingData.substr(splitIdx + 1);\n\n    this.trackEvent(category, subcategory, additionalData);\n  }\n\n  trackPageView(path) {\n    this._plugins.forEach(plugin => {\n      plugin.trackPageView(path);\n    });\n  }\n\n  trackEvent(category, action, /* optional */ additionalData) {\n    const subaction = additionalData ? action + this._buildSuffix(additionalData) : null;\n    this._plugins.forEach(plugin => {\n      plugin.trackEvent(category, action);\n      if (subaction) {\n        plugin.trackEvent(category, subaction);\n      }\n    });\n  }\n\n  trackShortcutEvent(category, action, /* optional */ additionalData) {\n    this.trackEvent(category, action, additionalData);\n    this.trackEvent('ring-shortcut', `${category}$${action}`, additionalData);\n  }\n\n  trackEntityProperties(entityName, entity, propertiesNames, /* optional */ additionalData) {\n    for (let i = 0; i < propertiesNames.length; ++i) {\n      const keys = propertiesNames[i].split('.');\n      let value = entity;\n\n      if (!keys.length) {\n        continue;\n      }\n\n      for (let j = 0; j < keys.length; ++j) {\n        if (value.hasOwnProperty(keys[j])) {\n          value = value[keys[j]];\n        } else {\n          value = 'no-value';\n          break;\n        }\n      }\n\n      if (typeof value === 'string') {\n        value = value.toLowerCase().replace(/[\\._]+/g, '-');\n      }\n\n      const resultAction = `${keys.join('-')}__${value}`;\n      this.trackEvent(entityName, resultAction, additionalData);\n    }\n  }\n\n  _buildSuffix(additionalData) {\n    if (!additionalData) {\n      return '';\n    }\n\n    let suffix = '';\n    let key;\n    for (key in additionalData) {\n      if (additionalData.hasOwnProperty(key)) {\n        suffix += `__${key}$${additionalData[key]}`;\n      }\n    }\n\n    return suffix;\n  }\n}\n\nexport default new Analytics();\n",
  "examples": [
    {
      "name": "Analytics",
      "url": "examples/analytics/analytics.html",
      "disableAutoSize": false,
      "files": [
        {
          "type": "html",
          "content": "\n<div>\n  <p>Click the link below and check the console output:</p>\n  <div>\n    <a href id=\"click-me\" class=\"ring-link\">\n      Track click event\n    </a>\n  </div>\n</div>\n    ",
          "showCode": true
        },
        {
          "type": "js",
          "content": "\nimport analytics from '@jetbrains/ring-ui/components/analytics/analytics';\nimport '@jetbrains/ring-ui/components/link/link.scss';\nimport AnalyticsCustomPlugin from '@jetbrains/ring-ui/components/analytics/analytics__custom-plugin';\n\nconst FLUSH_INTERVAL = 100;\n\nconst customPlugin = new AnalyticsCustomPlugin(events => (\n  console.log('Custom plugin receives:', events[0].category, events[0].action)\n), false, FLUSH_INTERVAL);\n\nanalytics.config([customPlugin]);\n\ndocument.getElementById('click-me').addEventListener('click', event => {\n  analytics.trackEvent('test-category', 'test-action');\n  event.preventDefault();\n});\n    ",
          "showCode": true
        }
      ]
    }
  ],
  "description": "Provides a façade to Google Analytics and other web analytics services through a system of plugins.",
  "attrs": {
    "name": "Analytics",
    "category": "Utilities",
    "description": "Provides a façade to Google Analytics and other web analytics services through a system of plugins.",
    "example": "   <example name=\"Analytics\">\n    <file name=\"index.html\">\n      <div>\n        <p>Click the link below and check the console output:</p>\n        <div>\n          <a href id=\"click-me\" class=\"ring-link\">\n            Track click event\n          </a>\n        </div>\n      </div>\n    </file>\n    <file name=\"index.js\">\n      import analytics from '@jetbrains/ring-ui/components/analytics/analytics';\n      import '@jetbrains/ring-ui/components/link/link.scss';\n      import AnalyticsCustomPlugin from '@jetbrains/ring-ui/components/analytics/analytics__custom-plugin';\n\n      const FLUSH_INTERVAL = 100;\n\n      const customPlugin = new AnalyticsCustomPlugin(events => (\n        console.log('Custom plugin receives:', events[0].category, events[0].action)\n      ), false, FLUSH_INTERVAL);\n\n      analytics.config([customPlugin]);\n\n      document.getElementById('click-me').addEventListener('click', event => {\n        analytics.trackEvent('test-category', 'test-action');\n        event.preventDefault();\n      });\n    </file>\n   </example>"
  }
};