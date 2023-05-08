const readline = require("readline");
const fs = require('fs');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const settings = require('./settings.json');

rl.question('What do you want to create block or pattern? (block/pattern): ', function(type) {
  if(type === 'pattern'){
    rl.question('Unique slug of the pattern? (bc-example-pattern-slug): ', function(name) {
      generatePattern({name});
      rl.close();
    });
  } else {
    rl.question('Unique slug of the block? (bc-example-block-slug): ', function(name) {
      rl.question('Title of the block? (BC Example title): ', function(title) {
        rl.question('Callback class name? (BCExampleCallback, empty if no callback): ', function(callback) {
          generateBlock({name, title, callback});
          rl.close();
        });
      });
    });
  }
});

rl.on('close', function() {
  console.log('All done :D');
  process.exit(0);
});

function generatePattern({name}){
  console.log(name);
  if(name){
    settings.patterns.push(name);
    saveFile('./settings.json', JSON.stringify(settings));
    savePatternBoilerplate(name);
  }
}

function generateBlock({name, title, callback}){
  console.log(name, title, callback)
  settings.blocks.push({name, title, callback});
  saveFile('./settings.json', JSON.stringify(settings));

  var dir = `./src/blocks/${name}`;
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
    generateBlockFiles({name, title, callback, dir});
  }
}

function saveFile(path, content){
  fs.writeFileSync(path, content,  err => {
    if (err) console.log('Error writing file:', err);
  });
}

function savePatternBoilerplate(patternSlug){
  const fileContent = `<?php
return [
    'title' => __('${patternSlug}', 'bc-theme'),
    'description' => _x(
        'Pattern description',
        'Block pattern description',
        'bc-theme'
    ),
    'content' => '<!-- wp:paragraph --><p>${patternSlug}</p><!-- /wp:paragraph -->',
];
  `;
  saveFile(`./patterns/${patternSlug}.php`, fileContent);
}

function generateBlockFiles({name, title, callback, dir}){
  saveFile(`${dir}/editor.scss`, '');
  appendStyleFile('editor', name);

  saveFile(`${dir}/style.scss`, '');
  appendStyleFile('style', name);

  const ccName = toCamelCase(name);
  const contentIndexJS = `
const ${ccName} = {
  title: '${title}',
  icon: 'admin-page',
  category: 'bc-theme',
  attributes: {},
  edit: props => <div>${title}</div>,
  save: props => <div>${title}</div>
};
export default ${ccName};
`;

  saveFile(`${dir}/index.js`, contentIndexJS);
  appendJSFile(name, ccName);

  if(callback){
    let content = `<?php

namespace BCBlocksAndPatterns;

use WP_Block_Type_Registry;

class ${callback}
{
    private $blockName = 'bc-theme/${name}';

    public function __construct()
    {
        add_action('init', [$this, 'registerBlock']);
    }
    
    public function registerBlock()
    {
        if (function_exists('register_block_type') && class_exists('WP_Block_Type_Registry')) {
            if (!WP_Block_Type_Registry::get_instance()->is_registered($this->blockName)) {
                register_block_type(
                    $this->blockName,
                    [
                        'attributes'      => [],
                        'render_callback' => [$this, 'render'],
                    ]
                );
            }
        }
    }
    
    public function render($attributes)
    {
        return '';
    }
}
new ${callback}();
`;
    saveFile(`${dir}/${callback}.php`, content);
  }
}

function appendStyleFile(type, name){
  let content = fs.readFileSync(`./src/${type}.scss`, 'utf8');
  content += `
@import 'blocks/${name}/${type}';`;
  saveFile(`./src/${type}.scss`, content);
}

function appendJSFile(name, ccName){
  let content = fs.readFileSync(`./src/index.js`, 'utf8');
  content += `
  
import ${ccName} from './blocks/${name}/index';
registerBlockType(DOMAIN + '/${name}', ${ccName});`;
  saveFile(`./src/index.js`, content);
}

function toCamelCase(name){
  const wordsArr = name.split("-").map(string => string.charAt(0).toUpperCase() + string.slice(1));
  return wordsArr.join('');
}
