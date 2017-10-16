import './main.css';
import { RubyOperators } from './RubyOperators.elm';
import registerServiceWorker from './registerServiceWorker';

const app = RubyOperators.embed(document.getElementById('root'));
app.ports.check.subscribe(function (example) {
    var highlightedExample = hljs.highlight("ruby", example);
    app.ports.processedOutput.send(highlightedExample.value);
});

registerServiceWorker();
