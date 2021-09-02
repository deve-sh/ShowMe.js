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
		if (!steps || !Array.isArray(steps) || !steps.length)
			this.constructError("invalid-steps", "Invalid Steps Array passed.");
		this.activeStep = 0;
		this.steps = steps;
	}

	start() {
		// start / restart
		this.isShowing = true;
		this.activeStep = 0;
	}

	stop() {
		// stop / skip
		this.isShowing = false;
		this.activeStep = this.steps?.length;
	}

	nextStep() {
		if (this.activeStep < this.steps?.length - 1 && this.isShowing)
			this.activeStep++;
	}
}

export default ShowMe;
