import { registerBlockType } from '@wordpress/blocks';

import './style.scss';
import './editor.scss';

const DOMAIN = 'bc-theme';
  
import BcTicker from './blocks/bc-ticker/index';
registerBlockType(DOMAIN + '/bc-ticker', BcTicker);