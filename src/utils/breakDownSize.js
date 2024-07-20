const breakpoints = {
	sm: "480px",
	md: "768px",
	lg: "1024px",
	xl: "1200px"
};

const media = {
	sm: `@media screen and (max-width: ${breakpoints.sm})`,
	md: `@media screen and (max-width: ${breakpoints.md})`,
	lg: `@media screen and (max-width: ${breakpoints.lg})`,
	xl: `@media screen and (max-width: ${breakpoints.xl})`
};

export {breakpoints, media};