import { Component } from "@angular/core";

@Component({
	selector: "app-root",
	styleUrls: [ "./app.component.css" ],
	templateUrl: "./app.component.html"
})
export class AppComponent {

	public phrases= [
		"Who just joined?",
		"___, are you there?",
		"Awkward silence",
		"It's still loading",
		"I have another call",
		"(Sound of someone typing)",
		"Can everyone seen my screen?",
		"(Loud, painful echo/feedback)",
		"(Child or animal noises)",
		"Can you hear me?",
		"Next slide, please",
		"Can everyone go on mute?",
		"Sorry, go ahead",
		"Hello? Hello?",
		"Sorry I'm late",
		"I have a hard stop at--",
		"I'm sorry, you cut out there",
		"Can we take this offline?",
		"I'll have to get back to you",
		"Sorry, I was having connection issues",
		"I think there's a lag",
		"can you repeat?",
		"Let's wait for___",
		"Two people talk at the same time",
		"Someone forgets to unmute"
	];


	constructor() {
	}

}