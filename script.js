const Keyboard = {
  structure: {
    container: null,
    keysContainer: null,
  },
  keysAndlayouts: {
    keys: [],
    engLayout: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter', 'ShiftLeft', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'ArrowUp', 'ShiftRight', 'ControlL', 'Meta', 'AltL', ' ', 'AltR', 'ControlR', 'ArrowLeft', 'ArrowDown', 'ArrowRight'],
    ruLayout: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'ShiftLeft', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/', 'ArrowUp', 'ShiftRight', 'ControlL', 'Meta', 'AltL', ' ', 'AltR', 'ControlR', 'ArrowLeft', 'ArrowDown', 'ArrowRight'],
  },

  layoutConfig: {
    keyCodesConfig: {
      Backquote: {
        ru: '`',
        en: '`',
      },
      Numpad1: {
        ru: '1',
        en: '1',
      },
      Numpad2: {
        ru: '2',
        en: '2',
      },
      Numpad3: {
        ru: '3',
        en: '3',
      },
      Numpad4: {
        ru: '4',
        en: '4',
      },
      Numpad5: {
        ru: '5',
        en: '5',
      },
      Numpad6: {
        ru: '6',
        en: '6',
      },
      Numpad7: {
        ru: '7',
        en: '7',
      },
      Numpad8: {
        ru: '8',
        en: '8',
      },
      Numpad9: {
        ru: '9',
        en: '9',
      },
      Numpad0: {
        ru: '0',
        en: '0',
      },
      NumpadDecimal: {
        ru: '.',
        en: '.',
      },
      NumpadEnter: {
        ru: 'Enter',
        en: 'Enter',
      },
      NumpadAdd: {
        ru: '+',
        en: '+',
      },
      NumpadSubtract: {
        ru: '-',
        en: '-',
      },
      NumLock: {
        ru: ' ',
        en: ' ',
      },
      AudioVolumeMute: {
        ru: ' ',
        en: ' ',
      },
      AudioVolumeDown: {
        ru: ' ',
        en: ' ',
      },
      AudioVolumeUp: {
        ru: ' ',
        en: ' ',
      },
      F1: {
        ru: 'F1',
        en: 'F1',
      },
      F2: {
        ru: 'F2',
        en: 'F2',
      },
      F3: {
        ru: 'F3',
        en: 'F3',
      },
      F4: {
        ru: 'F4',
        en: 'F4',
      },
      F5: {
        ru: 'F5',
        en: 'F5',
      },
      F6: {
        ru: 'F6',
        en: 'F6',
      },
      F7: {
        ru: 'F7',
        en: 'F7',
      },
      F8: {
        ru: 'F8',
        en: 'F8',
      },
      F9: {
        ru: 'F9',
        en: 'F9',
      },
      F10: {
        ru: 'F10',
        en: 'F10',
      },
      F11: {
        ru: 'F11',
        en: 'F11',
      },
      F12: {
        ru: 'F12',
        en: 'F12',
      },
      Digit1: {
        ru: '1',
        en: '1',
      },
      Digit2: {
        ru: '2',
        en: '2',
      },
      Digit3: {
        ru: '3',
        en: '3',
      },
      Digit4: {
        ru: '4',
        en: '4',
      },
      Digit5: {
        ru: '5',
        en: '5',
      },
      Digit6: {
        ru: '6',
        en: '6',
      },
      Digit7: {
        ru: '7',
        en: '7',
      },
      Digit8: {
        ru: '8',
        en: '8',
      },
      Digit9: {
        ru: '9',
        en: '9',
      },
      Digit0: {
        ru: '0',
        en: '0',
      },
      Minus: {
        ru: '-',
        en: '-',
      },
      Equal: {
        ru: '=',
        en: '=',
      },
      Backspace: {
        ru: 'Backspace',
        en: 'Backspace',
      },
      Tab: {
        ru: 'Tab',
        en: 'Tab',
      },
      KeyQ: {
        ru: 'й',
        en: 'q',
      },
      KeyW: {
        ru: 'ц',
        en: 'w',
      },
      KeyE: {
        ru: 'у',
        en: 'e',
      },
      KeyR: {
        ru: 'к',
        en: 'r',
      },
      KeyT: {
        ru: 'е',
        en: 't',
      },
      KeyY: {
        ru: 'н',
        en: 'y',
      },
      KeyU: {
        ru: 'г',
        en: 'u',
      },
      KeyI: {
        ru: 'ш',
        en: 'i',
      },
      KeyO: {
        ru: 'щ',
        en: 'o',
      },
      KeyP: {
        ru: 'з',
        en: 'p',
      },
      BracketLeft: {
        ru: 'х',
        en: '[',
      },
      BracketRight: {
        ru: 'ъ',
        en: ']',
      },
      Enter: {
        ru: 'Enter',
        en: 'Enter',
      },
      CapsLock: {
        ru: 'CapsLock',
        en: 'CapsLock',
      },
      KeyA: {
        ru: 'ф',
        en: 'a',
      },
      KeyS: {
        ru: 'ы',
        en: 's',
      },
      KeyD: {
        ru: 'в',
        en: 'd',
      },
      KeyF: {
        ru: 'а',
        en: 'f',
      },
      KeyG: {
        ru: 'п',
        en: 'g',
      },
      KeyH: {
        ru: 'р',
        en: 'h',
      },
      KeyJ: {
        ru: 'о',
        en: 'j',
      },
      KeyK: {
        ru: 'л',
        en: 'k',
      },
      KeyL: {
        ru: 'д',
        en: 'l',
      },
      Semicolon: {
        ru: 'ж',
        en: ';',
      },
      Quote: {
        ru: "'",
        en: 'э',
      },
      Backslash: {
        ru: '\\',
        en: '\\',
      },
      ShiftLeft: {
        ru: 'ShiftL',
        en: 'ShiftL',
      },

      KeyZ: {
        ru: 'я',
        en: 'z',
      },
      KeyX: {
        ru: 'ч',
        en: 'x',
      },
      KeyC: {
        ru: 'с',
        en: 'c',
      },
      KeyV: {
        ru: 'м',
        en: 'v',
      },
      KeyB: {
        ru: 'и',
        en: 'b',
      },
      KeyN: {
        ru: 'т',
        en: 'n',
      },
      KeyM: {
        ru: 'ь',
        en: 'm',
      },
      Comma: {
        ru: 'б',
        en: ',',
      },
      Period: {
        ru: 'ю',
        en: '.',
      },
      Slash: {
        ru: '/',
        en: '/',
      },
      ShiftRight: {
        ru: 'ShiftR',
        en: 'ShiftR',
      },
      ControlLeft: {
        ru: 'CtrlL',
        en: 'CtrlL',
      },
      MetaLeft: {
        ru: 'Win',
        en: 'Win',
      },
      AltLeft: {
        ru: 'AltL',
        en: 'AltL',
      },
      Space: {
        ru: '',
        en: '',
      },
      AltRight: {
        ru: 'AltR',
        en: 'AltR',
      },
      ArrowLeft: {
        ru: '◄',
        en: '◄',
      },
      ArrowUp: {
        ru: '▲',
        en: '▲',
      },
      ArrowDown: {
        ru: '▼',
        en: '▼',
      },
      ArrowRight: {
        ru: '►',
        en: '►',
      },
      ControlRight: {
        ru: 'CtrR',
        en: 'CtrR',
      },
    },
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

  init() {
    // Add description
    const description = document.createElement('div');
    description.classList.add('description');
    document.body.appendChild(description);
    description.innerHTML = 'Клавиатура создана на WINDOWS</br>Для измения языка, нажмите сочетание клавиш Shift + Alt.';


    // Add textarea and input
    const textarea = document.createElement('textarea');
    textarea.classList.add('textarea');
    document.body.appendChild(textarea);
    textarea.placeholder = 'Введите текст...';

    textarea.placeholder = 'Введите текст...';
    textarea.addEventListener('focus', () => {
      this.intupValue(textarea.value, (currentValue) => {
        textarea.value = currentValue;
      });
    });


    // Add keyboard
    this.structure.mainContainer = document.createElement('div');
    this.structure.keysContainer = document.createElement('div');
    this.structure.mainContainer.classList.add('keyboard');
    this.structure.keysContainer.classList.add('keyboard_keys');
    this.structure.keysContainer.appendChild(this.createKeys());
    this.structure.keys = this.structure.keysContainer.querySelectorAll('.keyboard_key');
    document.body.appendChild(this.structure.mainContainer);
    this.structure.mainContainer.appendChild(this.structure.keysContainer);
  },

  appendKeysAndListners() {
    this.structure.keysContainer.appendChild(this.createKeys());
    this.buttonPress();
  },
  checkSessionStorage() {
    if (sessionStorage.getItem('capsLock') === 'true') {
      this.properties.capsLock = true;
    }
    if (sessionStorage.getItem('eng') === 'false') {
      this.properties.eng = false;
    }
  },
  buttonPress() {
    const keyboardKeys = document.querySelectorAll('.keyboard_key');
    document.addEventListener('keydown', (event) => {
      const { code } = event;
      this.onFocus();
      let keyCodes;
      if (this.properties.eng) {
        keyCodes = this.layoutConfig.keyCodesConfig;
      } else {
        keyCodes = this.layoutConfig.keyCodesConfig;
      }
      keyboardKeys.forEach((key) => { 
        this.intupValue(key.value, (currentValue) => {
          key.value = currentValue;
        });
        if (key.innerHTML.toLowerCase() === keyCodes[code].en.toLowerCase()
           || key.innerHTML.toLowerCase() === keyCodes[code].ru.toLowerCase()) {
          key.classList.add('keyboard_key-dark');
          if (key.innerHTML === 'CapsLock') {
            this.toggleCapsLock();
            key.classList.toggle('keyboard_key-active');
          }
          if (key.innerHTML === 'ShiftL' || key.innerHTML === 'ShiftR') {
            this.properties.shift1 = true;
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
      const { code } = event;
      let keyCodes;
      if (this.properties.eng) {
        keyCodes = this.layoutConfig.keyCodesConfig;
      } else {
        keyCodes = this.layoutConfig.keyCodesConfig;
      }

      this.onFocus();
      keyboardKeys.forEach((key) => {
        if (key.innerHTML.toLowerCase() === keyCodes[code].en.toLowerCase()
           || key.innerHTML.toLowerCase() === keyCodes[code].ru.toLowerCase()) {
          key.classList.remove('keyboard_key-dark');

          if (key.innerHTML === 'ShiftL' || key.innerHTML === 'ShiftR') {
            this.properties.shift1 = false;
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
      keys = this.keysAndlayouts.engLayout;
    } else {
      keys = this.keysAndlayouts.ruLayout;
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
            this.onFocus();
          });

          break;

        case 'Tab':
          keyButton.classList.add('keyboard_key-wide');
          keyButton.textContent = key;
          keyButton.addEventListener('click', () => {
            this.properties.value += '\t';
            this.triggerEvent();
            this.onFocus();
          });


          break;
        case 'Enter':
          keyButton.classList.add('keyboard_key-wide');
          keyButton.textContent = key;
          keyButton.addEventListener('click', () => {
            this.properties.value += '\n';
            this.triggerEvent();
            this.onFocus();
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
            this.eventHandler.oninput(this.properties.value);
            this.onFocus();
          });
          break;

        case 'ArrowUp':
          keyButton.classList.add('keyboard_key');
          keyButton.textContent = '▲';
          keyButton.addEventListener('click', () => {
            this.properties.value += '▲';
            this.eventHandler.oninput(this.properties.value);
            this.onFocus();
          });
          break;
        case 'ArrowLeft':
          keyButton.textContent = '◄';
          keyButton.addEventListener('click', () => {
            this.properties.value += '◄';
            this.eventHandler.oninput(this.properties.value);
            this.onFocus();
          });

          break;
        case 'ArrowDown':
          keyButton.textContent = '▼';
          keyButton.addEventListener('click', () => {
            this.properties.value += '▼';
            this.triggerEvent();
            this.onFocus();
          });
          break;
        case 'ArrowRight':
          keyButton.textContent = '►';
          keyButton.addEventListener('click', () => {
            this.properties.value += '►';
            this.eventHandler.oninput(this.properties.value);
            this.onFocus();
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
            this.eventHandler.oninput(this.properties.value);
            this.onFocus();
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
      this.appendKeysAndListners();
    }, 100);
  },

  deleteChild() {
    while (this.structure.keysContainer.firstElementChild) {
      this.structure.keysContainer.firstElementChild.innerHTML = '';
      this.structure.keysContainer.removeChild(this.structure.keysContainer.firstChild);
    }
  },
  intupValue(initVal, oninput) {
    this.properties.value = initVal || '';
    this.eventHandler.oninput = oninput;
  },
  onFocus() {
    setTimeout(document.querySelector('.textarea').focus(), 100);
  },
};

window.addEventListener('DOMContentLoaded', () => {
  Keyboard.checkSessionStorage();
  Keyboard.init();
  Keyboard.buttonPress();
  Keyboard.onFocus();
});
