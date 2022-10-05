const sizes = {
	mobileS: '320px',
	mobileM: '375px',
	mobileL: '428px',
    tablet: '768px',
    tabletL: '820px',
    galaxyFold: '884px',
	laptop: '1024px',
	laptopMicrosoft: '1114px',
	laptopMac: '1280px',
	laptopL: '1440px',
	desktop: '2560px',
};

export const devices = {
	mobileS: `(max-width: ${sizes.mobileS})`,
	mobileM: `(max-width: ${sizes.mobileM})`,
	mobileL: `(max-width: ${sizes.mobileL})`,
	tablet: `(max-width: ${sizes.tablet})`,
	tabletL: `(max-width: ${sizes.tabletL})`,
	galaxyFold: `(max-width: ${sizes.galaxyFold})`,
	laptop: `(max-width: ${sizes.laptop})`,
	laptopMicrosoft: `(max-width: ${sizes.laptopMicrosoft})`,
	laptopMac: `(max-width: ${sizes.laptopMac})`,
	laptopL: `(max-width: ${sizes.laptopL})`,
	desktop: `(max-width: ${sizes.desktop})`,
};
