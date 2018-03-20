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
  play
  text='Hello world'
/>
```
Will speak “Hello world” in English (default language)

### Customizing with props	
```jsx
<SpeakText
  pause={ null /* NOTE a button could pause this.state.pause */ }
  resume={ null /* NOTE a button could resume this.state.resume */ }
  text='Bonjour tout le monde'
  lang='fr-CA'
  volume={ 1.5 }
  rate={ 0.5 }
  pitch={ .75 }
  onPause={ ()=>{ console.log('speech paused')} }
  onResume={ ()=>{ console.log('speech resumed')} }
  onStart={ ()=>{ console.log('speech started')} }
  onEnd={ ()=>{ console.log('speech ended')} }
/>
```
Will speak « Bonjour tout le monde » in French with different volume, rate and pitch.

## Source

```jsx
TODO

```


## As an NPM module
- Built according to this tutorial to allow publishing the ES6 React JSX code as an NPM module
- https://medium.com/@BrodaNoel/how-to-create-a-react-component-and-publish-it-in-npm-668ad7d363ce
	
