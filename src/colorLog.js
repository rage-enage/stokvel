export default function colorLog(message) {
    var styles = [
        'background-color: #060D11'
        , 'border: 1px solid #3E0E02'
        , 'color: rgba(27,208,254,0.94)'
        , 'display: block'
        , 'text-shadow: 0 0 15px rgba(27,208,254,0.8);'
        , 'box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
        , 'text-align: left'
        , 'font-weight: bold'
        , 'font-family: \'Avenir\', Helvetica, Arial, sans-serif'
        , 'padding-right: 35px'
    ].join(';');
    console.log(`%c ${message}`, styles);
}