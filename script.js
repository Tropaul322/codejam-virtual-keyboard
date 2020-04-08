
const Keyboard = {
  elements: {

    mainContainer: null,
    keysContainer: null,
    keys: [],
    keysEng: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter', 'ShiftLeft', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'ArrowUp', 'ShiftRight', 'ControlL', 'Meta', 'AltL', ' ', 'AltR', 'ControlR', 'ArrowLeft', 'ArrowDown', 'ArrowRight'],
    ruKeys: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'ShiftLeft', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/', 'ArrowUp', 'ShiftRight', 'ControlL', 'Meta', 'AltL', ' ', 'AltR', 'ControlR', 'ArrowLeft', 'ArrowDown', 'ArrowRight'],
  },

  eventHandler: {
    oninput: null,
  },

  properties: {
    value: '',
    capsLock: false,
    eng: true,
    shift1: false,
    alt1: false,
  },

  checkSessionStorage() {
    if (sessionStorage.getItem('capsLock') === 'true') {
      this.properties.capsLock = true;
    }
    if (sessionStorage.getItem('eng') === 'false') {
      this.properties.eng = false;
    }
  },
  init() {
    // creat elements
    const description = document.createElement('div');
    const textarea = document.createElement('textarea');
    this.elements.mainContainer = document.createElement('div');
    this.elements.keysContainer = document.createElement('div');

    // add classes to the elements
    textarea.classList.add('textarea');
    description.classList.add('description');


    /* document.querySelector('.textarea').innerHTML */
    this.elements.mainContainer.classList.add('keyboard');
    this.elements.keysContainer.classList.add('keyboard_keys');
    this.elements.keysContainer.appendChild(this.createKeys());
    document.body.appendChild(description);
    description.innerHTML = 'Клавиатура создана на WINDOWS</br>Для измения языка, нажмите сочетание клавиш Shift + Alt.';

    this.elements.keys = this.elements.keysContainer.querySelectorAll('.keyboard_key');

    // add to DOM
    document.body.appendChild(textarea);
    document.body.appendChild(this.elements.mainContainer);
    this.elements.mainContainer.appendChild(this.elements.keysContainer);
    textarea.placeholder = 'Введите текст...';

    const area = document.querySelector('.textarea');
    area.addEventListener('focus', () => {
      this.open(area.value, (currentValue) => {
        area.value = currentValue;
      });
    });
  },
  createKeysAndListners() {
    this.elements.keysContainer.appendChild(this.createKeys());
    this.keyDownAndUp();
  },
  keyDownAndUp() {
    const keyboardKeys = document.querySelectorAll('.keyboard_key');
    const keyCodesEng = {
      Backquote: '`',
      Digit1: '1',
      Digit2: '2',
      Digit3: '3',
      Digit4: '4',
      Digit5: '5',
      Digit6: '6',
      Digit7: '7',
      Digit8: '8',
      Digit9: '9',
      Digit0: '0',
      Minus: '-',
      Equal: '=',
      Backspace: 'Backspace',
      Tab: 'Tab',
      KeyQ: 'q',
      KeyW: 'w',
      KeyE: 'e',
      KeyR: 'r',
      KeyT: 't',
      KeyY: 'y',
      KeyU: 'u',
      KeyI: 'i',
      KeyO: 'o',
      KeyP: 'p',
      BracketLeft: '[',
      BracketRight: ']',
      Enter: 'Enter',
      CapsLock: 'CapsLock',
      KeyA: 'a',
      KeyS: 's',
      KeyD: 'd',
      KeyF: 'f',
      KeyG: 'g',
      KeyH: 'h',
      KeyJ: 'j',
      KeyK: 'k',
      KeyL: 'l',
      Semicolon: ';',
      Quote: "'",
      Backslash: '\\',
      ShiftLeft: 'ShiftL',
      KeyZ: 'z',
      KeyX: 'x',
      KeyC: 'c',
      KeyV: 'v',
      KeyB: 'b',
      KeyN: 'n',
      KeyM: 'm',
      Comma: ',',
      Period: '.',
      Slash: '/',
      ShiftRight: 'ShiftR',
      ControlLeft: 'CtrlL',
      MetaLeft: 'Win',
      AltLeft: 'AltL',
      Space: '',
      AltRight: 'AltR',
      ArrowLeft: '◄',
      ArrowUp: '▲',
      ArrowDown: '▼',
      ArrowRight: '►',
      ControlRight: 'CtrlR',
    };
    const keyCodesRu = {
      Backquote: '`',
      Digit1: '1',
      Digit2: '2',
      Digit3: '3',
      Digit4: '4',
      Digit5: '5',
      Digit6: '6',
      Digit7: '7',
      Digit8: '8',
      Digit9: '9',
      Digit0: '0',
      Minus: '-',
      Equal: '=',
      Backspace: 'Backspace',
      Tab: 'Tab',
      KeyQ: 'й',
      KeyW: 'ц',
      KeyE: 'у',
      KeyR: 'к',
      KeyT: 'е',
      KeyY: 'н',
      KeyU: 'г',
      KeyI: 'ш',
      KeyO: 'щ',
      KeyP: 'з',
      BracketLeft: '[',
      BracketRight: ']',
      Enter: 'Enter',
      CapsLock: 'CapsLock',
      KeyA: 'ф',
      KeyS: 'ы',
      KeyD: 'в',
      KeyF: 'а',
      KeyG: 'п',
      KeyH: 'р',
      KeyJ: 'о',
      KeyK: 'л',
      KeyL: 'д',
      Semicolon: ';',
      Quote: "'",
      Backslash: '\\',
      ShiftLeft: 'ShiftL',
      KeyZ: 'я',
      KeyX: 'ч',
      KeyC: 'с',
      KeyV: 'м',
      KeyB: 'и',
      KeyN: 'т',
      KeyM: 'ь',
      Comma: ',',
      Period: '.',
      Slash: '/',
      ShiftRight: 'ShiftR',
      ControlLeft: 'CtrlL',
      MetaLeft: 'Win',
      AltLeft: 'AltL',
      Space: '',
      AltRight: 'AltR',
      ArrowLeft: '◄',
      ArrowUp: '▲',
      ArrowDown: '▼',
      ArrowRight: '►',
      ControlRight: 'CtrlR',
    };
    document.addEventListener('keydown', (event) => {
      const keyKode = event.code;
      this.myFocusFunction();
      let keyCodes;
      if (this.properties.eng) {
        keyCodes = keyCodesEng;
      } else {
        keyCodes = keyCodesRu;
      }
      const shift = true;
      keyboardKeys.forEach((key) => {
        this.open(key.value, (currentValue) => {
          key.value = currentValue;
        });
        if (key.innerHTML.toLowerCase() === keyCodes[keyKode]) {
          key.classList.add('keyboard_key-dark');
          if (key.innerHTML === 'CapsLock') {
            this.toggleCapsLock();
            key.classList.toggle('keyboard_key-active');
          }
          if (key.innerHTML === 'ShiftL' || key.innerHTML === 'ShiftR') {
            this.properties.shift1 = true;
            if (shift) {
              const arr = this.elements.keys;
              for (let i = 0; i < arr.length; i += 1) {
                if (/^[a-zA-Zа-яА-я]$/.test(arr[i].textContent)) {
                  arr[i].textContent = arr[i].textContent.toUpperCase();
                }
              }
            }
          } else if (key.innerHTML === 'AltL' || key.innerHTML === 'AltR') {
            event.preventDefault();
            this.properties.alt1 = true;
          }
        }
      });
      if (this.properties.shift1 && this.properties.alt1) {
        this.changeLanguage();
      }
    });
    document.addEventListener('keyup', (event) => {
      const keyKode = event.code;
      let keyCodes;
      if (this.properties.eng) {
        keyCodes = keyCodesEng;
      } else {
        keyCodes = keyCodesRu;
      }
      let shift = false;
      this.myFocusFunction();
      keyboardKeys.forEach((key) => {
        if (key.innerHTML.toLowerCase() === keyCodes[keyKode]) {
          key.classList.remove('keyboard_key-dark');

          if (key.innerHTML === 'ShiftL' || key.innerHTML === 'ShiftR') {
            this.properties.shift1 = false;


            shift = true;
            if (shift) {
              const arr = this.elements.keys;
              for (let i = 0; i < arr.length; i += 1) {
                if (/^[a-zA-Zа-яА-я]$/.test(arr[i].textContent)) {
                  arr[i].textContent = arr[i].textContent.toLowerCase();
                }
              }
            }
          }
          if (key.innerHTML === 'AltL' || key.innerHTML === 'AltR') {
            this.properties.alt1 = false;
          }
        }
      });
    });
  },

  createKeys() {
    const fragment = document.createDocumentFragment();
    let keys;
    if (this.properties.eng) {
      keys = this.elements.keysEng;
    } else {
      keys = this.elements.ruKeys;
    }
    keys.forEach((key) => {
      const keyButton = document.createElement('button');

      keyButton.setAttribute('type', 'button');
      keyButton.classList.add('keyboard_key');

      switch (key) {
        case 'Backspace':
          keyButton.classList.add('keyboard_key-wide');
          keyButton.textContent = key;
          keyButton.addEventListener('click', () => {
            this.properties.value = this.properties.value.substring(0, this.properties.value.length
- 1);
            this.triggerEvent();
            this.myFocusFunction();
          });

          break;

        case 'Tab':
          keyButton.classList.add('keyboard_key-wide');
          keyButton.textContent = key;
          keyButton.addEventListener('click', () => {
            this.properties.value += '\t';
            this.triggerEvent();
            this.myFocusFunction();
          });


          break;
        case 'Enter':
          keyButton.classList.add('keyboard_key-wide');
          keyButton.textContent = key;
          keyButton.addEventListener('click', () => {
            this.properties.value += '\n';
            this.triggerEvent();
            this.myFocusFunction();
          });

          break;

        case 'CapsLock':
          keyButton.classList.add('keyboard_key-wide', 'keyboard_key-activatable');
          keyButton.textContent = key;
          if (this.properties.capsLock) {
            keyButton.classList.toggle('keyboard_key-active');
          }
          keyButton.addEventListener('click', () => {
            this.toggleCapsLock();
            keyButton.classList.toggle('keyboard_key-active');
          });

          break;

        case 'ControlL':
          keyButton.textContent = 'CtrlL';
          break;
        case 'ControlR':
          keyButton.textContent = 'CtrlR';
          break;

        case 'Meta':
          keyButton.textContent = 'Win';
          break;

        case 'ShiftRight':
          keyButton.classList.add('keyboard_key-wide');
          keyButton.textContent = 'ShiftR';
          break;
        case 'ShiftLeft':
          keyButton.classList.add('keyboard_key-wide');
          keyButton.textContent = 'ShiftL';
          break;
        case 'AltL':
          keyButton.textContent = 'AltL';
          break;
        case 'AltR':
          keyButton.textContent = 'AltR';
          break;

        case ' ':
          keyButton.classList.add('keyboard_key-extra-wide');
          keyButton.addEventListener('click', () => {
            this.properties.value += ' ';
            this.triggerEvent();
            this.myFocusFunction();
          });
          break;

        case 'ArrowUp':
          keyButton.classList.add('keyboard_key');
          keyButton.textContent = '▲';
          keyButton.addEventListener('click', () => {
            this.properties.value += '▲';
            this.triggerEvent();
            this.myFocusFunction();
          });
          break;
        case 'ArrowLeft':
          keyButton.textContent = '◄';
          keyButton.addEventListener('click', () => {
            this.properties.value += '◄';
            this.triggerEvent();
            this.myFocusFunction();
          });

          break;
        case 'ArrowDown':
          keyButton.textContent = '▼';
          keyButton.addEventListener('click', () => {
            this.properties.value += '▼';
            this.triggerEvent();
            this.myFocusFunction();
          });
          break;
        case 'ArrowRight':
          keyButton.textContent = '►';
          keyButton.addEventListener('click', () => {
            this.properties.value += '►';
            this.triggerEvent();
            this.myFocusFunction();
          });
          break;

        default:
          if (this.properties.capsLock) {
            keyButton.textContent = key.toUpperCase();
          } else {
            keyButton.textContent = key.toLowerCase();
          }
          keyButton.addEventListener('click', () => {
            this.properties.value += this.properties.capsLock ? key.toUpperCase()
              : key.toLowerCase();
            this.triggerEvent();
            this.myFocusFunction();
          });


          break;
      }
      fragment.appendChild(keyButton);

      if (key === 'Backspace' || key === 'Enter' || key === '\\' || key === 'ShiftRight') {
        fragment.appendChild(document.createElement('br'));
      }
    });
    return fragment;
  },
  toggleCapsLock() {
    const arr = document.querySelectorAll('.keyboard_key');
    this.properties.capsLock = !this.properties.capsLock;
    sessionStorage.setItem('capsLock', this.properties.capsLock);
    for (let i = 0; i < arr.length; i += 1) {
      if (/^[a-zA-Zа-яА-я]$/.test(arr[i].textContent)) {
        arr[i].textContent = this.properties.capsLock ? arr[i].textContent.toUpperCase()
          : arr[i].textContent.toLowerCase();
      }
    }
  },
  changeLanguage() {
    setTimeout(() => {
      this.deleteChild();
      this.properties.eng = !this.properties.eng;
      sessionStorage.setItem('eng', this.properties.eng);
      this.createKeysAndListners();
    }, 100);
  },

  deleteChild() {
    const c = this.elements.keysContainer;
    while (c.firstElementChild) {
      c.firstElementChild.innerHTML = '';
      c.removeChild(c.firstChild);
    }
  },
  triggerEvent() {
    this.eventHandler.oninput(this.properties.value);
  },
  open(initVal, oninput) {
    this.properties.value = initVal || '';
    this.eventHandler.oninput = oninput;
  },
  myFocusFunction() {
    setTimeout(document.querySelector('.textarea').focus(), 100);
  },
};

window.addEventListener('DOMContentLoaded', () => {
  Keyboard.checkSessionStorage();

  // initialize the keybord
  Keyboard.init();
  Keyboard.keyDownAndUp();
  Keyboard.myFocusFunction();
});
