# rc-speak-text
Uses the Web Speech API built into most modern browsers to vocalize a text string.

## Git repository
- https://github.com/stahlmanDesign/rc-speak-text

## Installation
- `npm install --save rc-speak-text`

## Usage
```import SpeakText from 'rc-speak-text'```
### Basic
```jsx
<SpeakText
  text='Bonjour tout le monde'
  lang='fr-CA'
/>
```
Will speak « Bonjour tout le monde » in French


### Customizing with props	
```jsx
<SpeakText
  text='Hello world'
  lang='en-US'
/>
```
Will speak “Hello world” in English

## Source

```jsx
TODO

```


## As an NPM module
- Built according to this tutorial to allow publishing the ES6 React JSX code as an NPM module
- https://medium.com/@BrodaNoel/how-to-create-a-react-component-and-publish-it-in-npm-668ad7d363ce
	
