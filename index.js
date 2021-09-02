/**
 * ShowMe.js - A simple library to tour people around your webpage.
 */

class ShowMe {
	constructError(code, message) {
		const error = { message, code };
		throw error;
	}

	constructor(steps = []) {
		this.isShowing = false;
		this.activeStep = 0;
		if (!steps || !Array.isArray(steps) || !steps.length)
			this.constructError("invalid-steps", "Invalid Steps Array passed.");
	}
}

export default ShowMe;
