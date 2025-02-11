# AI-Driven Content Notice (ADCN)

AI-Driven Content Notice (ADCN) is an open-source service designed to help websites inform their visitors about AI-generated content. With a simple and customizable notices and badge, you can transparently display when and where AI has been used to create text, images, or other elements on the page. It is easy to implement via a CDN, making it straightforward to build trust with your users through clear communication.

## Table of Contents

- [Key Benefits](#key-benefits)
- [Features](#features)
- [Accessibility](#accessibility)
- [Parts](#badge)
    - [The Badge](#badge)
    - [Information Modal](#information-modal)
    - [Notice Element](#notice)
- [Usage](#usage)
- [Configuration](#configuration)
    - [Config object](#config)
    - [Content object](#content)
    - [Sections object](#sections)
    - [Notices Configuration](#notices-configuration)
- [Styling](#styling)
- [ADCN class](#ADCN-class)
    - [init(config | object)](#init)
    - [update(config | object)](#update)
    - [openModal()](#openModal)
    - [destroy()](#destroy)
- [Contributing](#contributing)
- [License](#license)

## Key Benefits

- Builds user trust by promoting AI transparency.
- Helps websites comply with potential future AI transparency regulations.
- Simple setup with minimal code footprint.

## Features

- **Modular Architecture**: The widget is built with a modular architecture, allowing for easy customization and extension.
- **Accessible Modal Dialog**: The modal dialog is accessible, with ARIA attributes and focus trapping.
- **Customizable Content**: The widget supports multiple languages and allows for custom content in the modal and notices.

## Accessibility

The widget is designed with accessibility in mind. The modal dialog includes ARIA attributes to ensure that it is accessible to all users. The modal is also focus-trapped to prevent users from tabbing outside the modal. The badge and modal are keyboard accessible, and the modal can be closed using the escape key.

## Svelte as a Framework

The widget is built using Svelte, a modern web framework that compiles to highly optimized vanilla JavaScript. Svelte is a great choice for building web components and widgets due to its simplicity and performance. The widget is compiled to a standalone JavaScript file that can be easily included in any website.

[Read more about Svelte](https://svelte.dev/)

## Badge

The badge is a small clickable element that appears on the edge of the screen. It can be configured to appear in different positions:

- `top-right`
- `bottom-right`
- `top-left`
- `bottom-left`

## Information Modal

The information modal is a dialog that provides detailed information about the website's use of AI. It includes a title, body content, and sections that can be expanded to show more details. The modal is accessible and includes ARIA attributes and focus trapping to ensure a good user experience.

## Notice Element

Notices are elements that can be placed anywhere on the page using the `data-ai-content` attribute. They display different types of notices based on the content provided in the configuration.

## Usage

### CDN

To use the widget via CDN, include the following script in your HTML file:

```html
<script src="https://cdn.jsdelivr.net/gh/macnoc/ADCN@latest/dist/adcn.min.iife.js"></script>
```

Then, initialize the widget with the following code:

```javascript
const widget = new ADCN({
    config: {
        //...
    },
    content: {
        //...
    }
});
```

### Download

To use the widget by downloading the files, follow these steps:

1. Download the repository files.
2. Include the `adcn.min.iife.js` file in your HTML file. The file is located in the `dist` directory.

### Clone Repository

To use the widget by cloning the repository, follow these steps:

```bash
git clone path/to/repo
cd adcn
npm install
npm run dev
```


## Configuration

The widget can be configured using the following options:

- `config`: An object containing configuration options such as language, badge position, support, and whether to show the badge.

- `content`: An object containing the content to be displayed in the modal and notices. This includes the header, title, body, sections, and notices.

### Config

| Option | Type | Description | Default |
| --- | --- | --- | --- |
| `language` | `string` | The language to use for the widget. | `'en'` |
| `badgePosition` | `string` | The position of the badge on the screen. | `'top-right'` |
| `showBadge` | `boolean` | Whether to show the badge on the screen. | `true` |
| `support` | `boolean` | Powered-by link to Macnoc. | `true` |

### Content

Each language has its own content configuration. For example, the English content configuration would look like this:

```javascript
const widget = new ADCN({
    config: {
        //...
    },
    content: {
        en: {
            //...
        },
        fr: {
            //...
        }
    }
});
```

The content object contains the following options:

| Option | Type | Description | Default |
| --- | --- | --- | --- |
| `header` | `string` | The header text for the modal. | `'AI Contributions on This Page'` |
| `title` | `string` | The title of the modal. | `'Our AI Helps Improve Your Experience'` |
| `body` | `string` | The body text of the modal. Html is supported. | `'This website uses AI to enhance the user experience.'` |
| `sectionsHeader` | `string` | The header text for the sections in the modal. | `'Below are some ways AI contributes to your experience:'` |
| `sections` | `array` | An array of objects representing sections in the modal. | `[]` |
| `notices` | `array` | An array of objects representing notices to display. | `[]` |

### Sections

Each section object contains the following options:

| Option | Type | Description | Default |
| --- | --- | --- | --- |
| `title` | `string` | The title of the section. | `'Section Title'` |
| `body` | `string` | The content of the section. Html is supported. | `'Section content goes here.'` |

## Notices Configuration

The `notices` configuration allows you to customize the messages displayed by the ADCN widget for different types of AI-generated content. By default, the configuration includes the following notices:

| Notice | Description |
| --- | --- |
| `generated` | AI generated content |
| `modified` | AI modified content |
| `personalized` | AI personalized content |
| `recommended` | AI recommended content |
| `assisted` | AI assisted content |

## Styling

The widget includes global styles for consistent design. You can customize the appearance of the widget by overriding the default styles in your CSS file. Please override CSS variables to customize the widget's appearance.

### CSS Variables

The following CSS variables are available for customization:

```css
.adcn-container {
    --main-color: #0ea5e9;
    --text-color: #0f172a;

    --badge-bg-color: #1e293b;
    --badge-color: #f1f5f9;
    --badge-border-color: #334155;
    --badge-bg-color-hover: #0f172a;
    --badge-offset: 8rem;

    --modal-bg-color: #f8fafc;
    --modal-border-color: #cbd5e1;
    --modal-icon-color: #f1f5f9;

    --support-color: #94a3b8;

    --accordion-open-bg-color: #f1f5f9;

    --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

.adcn-notice {
    --bg-color: #f1f5f9;
    --border-color: #cbd5e1;
    --text-color: #64748B;
    --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

@media (prefers-color-scheme: dark) {
    .adcn-container{
        --text-color: #E2E8F0;

        --badge-bg-color: #F1F5F9;
        --badge-color: #0F172A;
        --badge-border-color: #CBD5E1;
        --badge-bg-color-hover: #E2E8F0;

        --modal-bg-color: #1E293B;
        --modal-border-color: #334155;
        --modal-icon-color: #F1F5F9;

        --support-color:#64748B;

        --accordion-open-bg-color: #334155;
    }

    .adcn-notice {
        --bg-color: #1e293b;
        --border-color: #334155;
        --text-color: #e2e8f0;
    }
  }
```

## ADCN class

The `ADCN` class is the main class that creates the widget. It takes an object with the following options:

### `init(config | object)`

The `init` method initializes the widget and adds the badge to the screen. It also sets up event listeners for the badge and modal.

#### Parameters

- `config` (object): An object containing configuration options for the widget.

### `update(config | object)`

The `update` method updates the widget with new configuration options. It deep merges the new options with the existing options and updates the badge and modal with the new configuration.

#### Parameters

- `config` (object): An object containing configuration options to update the widget.

### `openModal()`

The `openModal` method opens the information modal.

### `destroy()`

The `destroy` method removes the badge from the screen and cleans up event listeners.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes. Please support the project by giving it a star if you find it useful 😀.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.