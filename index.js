/**
 * ShowMe.js - A simple library to tour people around your webpage.
 */

const helpers = {
	addTransparentOverlay: () => {
		let elementHTML = `
			<div id="showme-transparentoverlay" style="
				position: fixed;
				background: rgba(0, 0, 0, 0.7);
				overflow-y: auto;
				top: 0;
				bottom: 0;
				right: 0;
				left: 0;
				display: flex;
				height: auto;
				align-items: center;
				z-index: 999;
			"></div>
		`;
		if (!document.getElementById("showme-transparentoverlay"))
			document.body.innerHTML += elementHTML;
	},
	removeTransparentOverlay: () => {
		if (!document.getElementById("showme-transparentoverlay"))
			document.getElementById("showme-transparentoverlay").remove();
	},
};

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

/**
Sample Steps Array:
[
    {
        title: "Text or HTML",
        description: "Text or HTML",
        element: document.querySelector(".step-1"),
    },
    {
        title: "Text or HTML",
        description: "Text or HTML",
        element: document.querySelector(".step-2"),
    }
    ...
]
*/
