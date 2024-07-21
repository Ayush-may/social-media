const breakpoints = {
	sm: "480px",
	md: "768px",
	lg: "1024px",
	xl: "1200px"
};

const minMedia = {
	md: `@media screen and (min-width: ${breakpoints.md})`,
	lg: `@media screen and (min-width: ${breakpoints.lg})`,
	sm: `@media screen and (min-width: ${breakpoints.sm})`,
	xl: `@media screen and (min-width: ${breakpoints.xl})`
}

const media = {
	sm: `@media screen and (max-width: ${breakpoints.sm})`,
	md: `@media screen and (max-width: ${breakpoints.md})`,
	lg: `@media screen and (max-width: ${breakpoints.lg})`,
	xl: `@media screen and (max-width: ${breakpoints.xl})`
};

export {breakpoints, media, minMedia};