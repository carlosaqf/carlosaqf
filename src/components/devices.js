/* eslint-disable linebreak-style */
const size = {
	mobileS: '320px',
	mobileM: '375px',
	mobileL: '425px',
	tablet: '768px',
	laptop: '1024px',
	laptopL: '1440px',
	desktop: '2560px',
}

export const device = {
	mobileS: `(min-width: ${size.mobileS})`,
	// Anything bigger than 320px

	mobileM: `(min-width: ${size.mobileM})`,
	// Anything bigger than 375px

	mobileL: `(min-width: ${size.mobileL})`,
	// Anything bigger than 425px

	tablet: `(min-width: ${size.tablet})`,
	// Anything bigger than 768px

	laptop: `(min-width: ${size.laptop})`,
	// Anything bigger than 1024px

	laptopL: `(min-width: ${size.laptopL})`,
	// Anything bigger than 1440px

	desktop: `(min-width: ${size.desktop})`,
	// Anything bigger than 2560px
}