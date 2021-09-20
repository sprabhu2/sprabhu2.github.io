import { ChangeDetectionStrategy } from "@angular/core";
import { Component, ElementRef, Renderer2 } from "@angular/core";

import { Utilities } from "../utilities";
import * as confetti from 'canvas-confetti';

var MIN_LENGTH = 25;
var CENTER_VOID = 12;

interface SelectedIndices {
	[key: string]: boolean;
}

@Component({
	selector: "app-board",
	inputs: ["phrases"],
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrls: ["./board.component.css"],
	templateUrl: "./board.component.html"
})
export class BoardComponent {

	public phrases: string[];
	public selectedIndexes: number[];
	public selectedIndices: SelectedIndices;
	public spaces: string[];
	public winner: boolean = false;
	public winnerIndex: number[][];

	constructor(private renderer2: Renderer2, private elementRef: ElementRef) {
		this.phrases = [];
		this.selectedIndexes = [];
		this.selectedIndices = Object.create(null);
		this.spaces = [];
		this.winnerIndex = [
			[0, 1, 2, 3, 4],
			[5, 6, 7, 8, 9],
			[10, 11, 12, 13, 14],
			[15, 16, 17, 18, 19],
			[20, 21, 22, 23, 24],
			[0, 5, 10, 15, 20],
			[1, 6, 11, 16, 21],
			[2, 7, 12, 17, 22],
			[3, 8, 13, 18, 23],
			[4, 9, 14, 19, 24],
			[0, 6, 12, 18, 24],
			[4, 8, 12, 16, 20]
		];
	}

	public ngOnChanges(): void {
		this.selectedIndices = Object.create(null);
		this.spaces = this.selectRandomPhrases();
		this.spaces[CENTER_VOID] = 'BINGO';
		this.selectedIndices[CENTER_VOID] = true;
	}


	public toggleIndex(index: number): void {
		this.selectedIndexes.push(index);
		if (!this.selectedIndices[index]) {
			this.selectedIndices[index] = !this.selectedIndices[index];
		}
		this.checkWinner();
	}

	private selectRandomPhrases(): string[] {
		var selectedPhrases = this.phrases.slice();
		return (Utilities.arrayShuffle(selectedPhrases).slice(0, MIN_LENGTH));
	}

	public checkWinner(): void {
		this.selectedIndexes.push(12);
		let newWinnerIndex: number[][];
		newWinnerIndex = [[100, 100]];
		this.winner = false;
		this.winnerIndex.forEach(indexList => {
			if (indexList.every(elm => this.selectedIndexes.includes(elm))) {
				this.winner = true;
				this.surprise();
			}
			else {
				newWinnerIndex.push(indexList);
			};
		})
		this.winnerIndex = newWinnerIndex;
	}

	public surprise(): void {
		const canvas = this.renderer2.createElement('canvas');
		this.renderer2.appendChild(this.elementRef.nativeElement, canvas);
		const myConfetti = confetti.create(canvas, {
			resize: true,
		});

		myConfetti({
			particleCount: 2000,
			startVelocity: 30,
			spread: 360,
			zIndex:1000,
			origin:{
				x:0.5,
				y:-0.5
			}
		});

		setTimeout(() => {
			myConfetti.reset();
			this.winner = false;
		}, 3000);
	}

}