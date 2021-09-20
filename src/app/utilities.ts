export class Utilities {

	// Function to shuffle the given collection, returns collection.
	static arrayShuffle<T>( collection: T[] ) : T[] {
		var length = collection.length;
		for ( var i = 0 ; i < length ; i++ ) {
			var swapIndex = Utilities.randRange( 0, ( length - 1 ) );
			if ( swapIndex !== i ) {
				Utilities.arraySwap( collection, i, swapIndex );
			}
		}
		return( collection );
	}

	// Function to swap the values located at the two indices, returns collection.
	static arraySwap<T>( collection: T[], i: number, j: number ) : T[] {
		var temp = collection[ j ];
		collection[ j ] = collection[ i ];
		collection[ i ] = temp;
		return( collection );
	}

	// I select a random integer from the given range, inclusive.
	static randRange( min: number, max: number ) : number {
		return( min + Math.floor( ( max - min + 1 ) * Math.random() ) );	
	}

}