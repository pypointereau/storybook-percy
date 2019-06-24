import { storiesOf } from '@storybook/html';
// import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered/html';
import {array,boolean,button,color,date,select,withKnobs,text,number} from '@storybook/addon-knobs';

const options = {
	nca: require('!!raw-loader!@theme/brand-styles/nca.css').default,
	mhr: require('!!raw-loader!@theme/brand-styles/mhr.css').default,
	bodyandsoul: require('!!raw-loader!@theme/brand-styles/bodyandsoul.css').default,
	whimn: require('!!raw-loader!@theme/brand-styles/whimn.css').default,
	kidspot: require('!!raw-loader!@theme/brand-styles/kidspot.css').default,
};

// const post = () => ({
// 	date_live: text('DateLive', '089765809876578'),
// 	headline: text('Title', 'Photo reveals tough rise of Aussie stars'),
// 	thumbnail: {title: 'aezaez', width: 160, height: 90, src: text('Thumbnail', 'https://picsum.photos/160/90')},
// 	link: '#',
// 	standfirst: text('StandFirst', 'Twenty years on from a nude photoshoot that shocked the world, the Australian women’s soccer team heads to the World Cup as serious contenders.'),
// 	primary_section_route: 'zerzerz/zerzrerze/'
// });
const brandStyle = () => select('Brand style', options, options.nca);
const nav = () => ([
	{ menu_item_parent: '0', url: 'https://www.news.com.au/national', title: 'National' },
	{ menu_item_parent: '0', url: 'https://www.news.com.au/world', title: 'World' }
]);

import "./storybook.scss";


// const templateStoryblock = require("pug-loader!@components/storyblock/storyblock.storybook.pug");
// storiesOf('StoryBlock', module)
// 	.addDecorator(centered)
// 	.addDecorator(withKnobs)
// 	.add('Simple', () => {
// 		return `<style>${brandStyle()}</style>` + templateStoryblock({post: post()});
// 	});


// const templateCollection = require("pug-loader!@components/collection/collection.storybook.pug");
// storiesOf('Collection', module)
// 	.addDecorator(centered)
// 	.addDecorator(withKnobs)
// 	.add('Simple', () => {
// 		return `<style>${brandStyle()}</style>` + templateCollection({
// 			posts: {
// 				items: [post(), post(), post(), post(), post()]
// 			}
// 		});
// 	});


// const templateHeader = require("pug-loader!@components/header/header.storybook.pug");
// storiesOf('Header', module)
// 	.addDecorator(centered)
// 	.addDecorator(withKnobs)
// 	.add('Simple', () => {
// 		return `<style>${brandStyle()}</style>` + templateHeader({url: 'https://www.news.com.au', name: 'News.com.au', logo: require("@theme/assets/images/logos/nca.svg")});
// 	});



// const templateFooter = require("pug-loader!@components/footer/footer.storybook.pug");
// storiesOf('Footer', module)
// 	.addDecorator(centered)
// 	.addDecorator(withKnobs)
// 	.add('Simple', () => {
// 		return `<style>${brandStyle()}</style>` + templateFooter();
// 	});


// const templateMidimageblock = require("pug-loader!@components/midimageblock/midimageblock.storybook.pug");
// storiesOf('Midimageblock', module)
// 	.addDecorator(centered)
// 	.addDecorator(withKnobs)
// 	.add('Simple', () => {
// 		return `<style>${brandStyle()}</style>` + templateMidimageblock({post: post()});
// 	});

// const templateWideimageblock = require("pug-loader!@components/wideimageblock/wideimageblock.storybook.pug");
// storiesOf('Wideimageblock', module)
// 	.addDecorator(centered)
// 	.addDecorator(withKnobs)
// 	.add('Simple', () => {
// 		return `<style>${brandStyle()}</style>` + templateWideimageblock({post: post()});
// 	});


const templateNavigation = require("pug-loader!@components/navigation/navigation.storybook.pug");
storiesOf('Navigation', module)
	.addDecorator(centered)
	.addDecorator(withKnobs)
	.add('Simple', () => {
		return `<style>${brandStyle()}</style>` + templateNavigation({nav: nav()});
	});