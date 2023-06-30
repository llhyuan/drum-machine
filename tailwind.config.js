/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        clear: '15px 20px 2px #D3D3D3',
        screen: '#ADADAD 2px 12px 6px',
        powerOff: '#F44336 0px 0px 6px',
        powerOn: '#28C840 0px 0px 6px',
        button:
          '#ededed 0px 7px 0px inset, #7A7A7A 0px -8px 0px inset, #ADADAD 2px 10px 6px',
        buttonPressed: '#9A9A9A -6px 6px 4px inset',
        off: '#ededed 0px 10px 0px inset, #7A7A7A 0px -8px 0px inset, #ADADAD 2px 10px 6px',
      },
      screens: {
        md: '880px',
      },
      fontFamily: {
        mono: ["'Share Tech Mono'", 'monospace'],
      },
    },
  },
  plugins: [],
};
