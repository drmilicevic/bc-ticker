import { registerBlockType } from '@wordpress/blocks';

import './style.scss';
import './editor.scss';

const DOMAIN = 'bc-theme';
  
import BcAuthorCard from './blocks/bc-author-card/index';
registerBlockType(DOMAIN + '/bc-author-card', BcAuthorCard);