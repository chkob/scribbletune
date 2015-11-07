'use strict';

var test = require('tape'),
	st = require('../');

test('Scribbletune::modes Common', function(t) {
	t.equal(
		st.mode('c', 'ionian').join(''),
		'c3d3e3f3g3a3b3',
		'C Ionian is c d e f g a b'
	);
	t.equal(
		st.mode('d', 'dorian').join(''),
		'd3e3f3g3a3b3c4',
		'D Dorian is d e f g a b c'
	);
	t.equal(
		st.mode('e', 'phrygian').join(''),
		'e3f3g3a3b3c4d4',
		'E Phrygian is e f g a b c d'
	);
	t.equal(
		st.mode('f', 'lydian').join(''),
		'f3g3a3b3c4d4e4',
		'F Lydian is f g a b c d e'
	);
	t.equal(
		st.mode('g', 'mixolydian').join(''),
		'g3a3b3c4d4e4f4',
		'G Mixolydian is g a b c d e f'
	);
	t.equal(
		st.mode('a', 'aeolian').join(''),
		'a3b3c4d4e4f4g4',
		'A Aeolian is a b c d e f g'
	);
	t.equal(
		st.mode('b', 'locrian').join(''),
		'b3c4d4e4f4g4a4',
		'B Locrian is b c d e f g a'
	);
});

test('Scribbletune::modes Melodic Minor scales', function(t) {
	t.equal(
		st.mode('c', 'melodic minor').join(''),
		'c3d3d#3f3g3a3b3',
		'C Melodic Minor is c d d# f g a b'
	);
	t.equal(
		st.mode('c', 'phrygian #6').join(''),
		'c3c#3d#3f3g3a3a#3',
		'C Phrygian #6 is c c# d# f g a a#'
	);
	t.equal(
		st.mode('c', 'lydian augmented').join(''),
		'c3d3e3f#3g#3a3b3',
		'C Lyidan Augmented is c d e f# g# a b'
	);
	t.equal(
		st.mode('c', 'lydian dominant').join(''),
		'c3d3e3f#3g3a3a#3',
		'C Lydian Dominant is c d e f# g a a#'
	);
	t.equal(
		st.mode('c', 'fifth mode').join(''),
		'c3d3e3f3g3g#3a#3',
		'C Fifth mode is c d e f g g# a#'
	);
	t.equal(
		st.mode('c', 'locrian #2').join(''),
		'c3d3d#3f3f#3g#3a#3',
		'C Locrian #2 is c d d# f f# g# a#'
	);
	t.equal(
		st.mode('c', 'altered').join(''),
		'c3c#3d#3e3f#3g#3a#3',
		'C Altered is c c# d# e f# g# a#'
	);
});

test('Scribbletune::modes Blues/Jazz/Harmonic', function(t) {
	t.equal(
		st.mode('c', 'whole tone').join(''),
		'c3d3e3f#3g#3a#3',
		'C Whole Tone is c d e f# g# a#'
	);
	t.equal(
		st.mode('c', 'diminished whole half').join(''),
		'c3d3d#3f3f#3g#3a3b3',
		'C Diminished Whole Half is c d d# f f# g# a b'
	);
	t.equal(
		st.mode('c', 'major pentatonic').join(''),
		'c3d3e3g3a3',
		'C Major Pentatonic is c d e g a'
	);
	t.equal(
		st.mode('c', 'minor pentatonic').join(''),
		'c3d#3f3g3a#3',
		'C Minor Pentatonic is c d# f g a#'
	);
	t.equal(
		st.mode('c', 'suspended pentatonic').join(''),
		'c3d3f3g3a#3',
		'C Suspended Pentatonic is c d f g a#'
	);
	t.equal(
		st.mode('c', 'dominant pentatonic').join(''),
		'c3d3e3g3a#3',
		'C Dominant Pentatonic is c d e g a#'
	);
	t.equal(
		st.mode('c', 'japanese').join(''),
		'c3c#3f3g3g#3',
		'C Japanese is c c# f g g#'
	);
	t.equal(
		st.mode('c', 'blues').join(''),
		'c3d#3f3f#3g3a#3',
		'C Blues is c d# f f# g a#'
	);
	t.equal(
		st.mode('c', 'bebop major').join(''),
		'c3d3e3f3g3g#3a3b3',
		'C Bebop Major is c d e f g g# a b'
	);
	t.equal(
		st.mode('c', 'bebop minor').join(''),
		'c3d3d#3e3f3g3a3a#3',
		'C Bebop Minor is c d d# e f g a a#'
	);
	t.equal(
		st.mode('c', 'bebop dominant').join(''),
		'c3d3e3f3g3a3a#3b3',
		'C Bebop Dominant is c d e f g a a# b'
	);
	t.equal(
		st.mode('c', 'bebop melodic minor').join(''),
		'c3d3d#3f3g3g#3a3b3',
		'C Bebop Melodic Minor is c d d# f g g# a b'
	);
	t.equal(
		st.mode('c', 'harmonic major').join(''),
		'c3d3e3f3g3g#3b3',
		'C Harmonic major is c d e f g g# b'
	);
	t.equal(
		st.mode('c', 'harmonic minor').join(''),
		'c3d3d#3f3g3g#3b3',
		'C Harmonic Minor is c d d# f g g# b'
	);
	t.equal(
		st.mode('c', 'double harmonic major').join(''),
		'c3c#3e3f3g3g#3b3',
		'C Double Harmonic Minor is c c# e f g g# b'
	);
});

test('Scribbletune::modes Exotic', function(t) {
	t.equal(
		st.mode('c', 'hungarian gypsy').join(''),
		'c3d3d#3f#3g3g#3a#3',
		'C Hungarian Gypsy is c d d# f# g g# a#'
	);
	t.equal(
		st.mode('c', 'hungarian major').join(''),
		'c3d#3e3f#3g3a3a#3',
		'C Hungarian Major is c d# e f# g a a#'
	);
	t.equal(
		st.mode('c', 'phrygian dominant').join(''),
		'c3c#3e3f3g3g#3a#3',
		'C Phrygian Dominant is c c# e f g g# a#'
	);
	t.equal(
		st.mode('c', 'neapolitan minor').join(''),
		'c3c#3d#3f3g3g#3b3',
		'C Neopolitan Minor is c c# d# f g g# b'
	);
	t.equal(
		st.mode('c', 'neapolitan major').join(''),
		'c3c#3d#3f3g3a3b3',
		'C Neopolitan Major is c c# d# f g a b'
	);
	t.equal(
		st.mode('c', 'enigmatic').join(''),
		'c3c#3e3f#3g#3a#3b3',
		'C Enigmatic is c c# e f# g# a# b'
	);
	t.equal(
		st.mode('c', 'eight-tone spanish').join(''),
		'c3c#3d#3e3f3f#3g#3a#3',
		'C Eight-Tone Spanish is c c# d# e f f# g# a#'
	);
	t.equal(
		st.mode('c', 'balinese pelog').join(''),
		'c3c#3d#3g3g#3',
		'C Balinese Pelog is c c# d# g g#'
	);
	t.equal(
		st.mode('c', 'oriental').join(''),
		'c3c#3e3f3f#3a3a#3',
		'C Oriental is c c# e f f# a a#'
	);
	t.equal(
		st.mode('c', 'iwato').join(''),
		'c3c#3f3f#3a#3',
		'C Iwato c c# f f# a#'
	);
	t.equal(
		st.mode('c', 'yo').join(''),
		'c3d3f3g3a3',
		'C Yo is c d f g a'
	);
	t.equal(
		st.mode('c', 'prometheus').join(''),
		'c3d3e3f#3a3a#3',
		'C Prometheus is c d e f# a a#'
	);
	t.equal(
		st.mode('c', 'symmetrical').join(''),
		'c3c#3d#3f3g#3a3a#3',
		'C Symmetrical is c c# d# f g# a a#'
	);
	t.equal(
		st.mode('c', 'major locrian').join(''),
		'c3d3e3f3f#3g#3a#3',
		'C Major Locrian is c d e f f# g# a#'
	);
});

test('Scribbletune::modes Miscellaneous', function(t) {
	t.equal(
		st.mode('c', 'augmented').join(''),
		'c3d3e3f#3g#3a3b3',
		'C Augmented is c d e f# g# a b'
	);
	t.equal(
		st.mode('c', 'lydian minor').join(''),
		'c3d3e3f#3g3g#3',
		'C Lydian Minor is c d e f# g g#'
	);
	t.equal(
		st.mode('c', 'ionian').join(''),
		st.mode('c', 'major').join(''),
		'Ionian mode is also known as Major scale'
	);
	t.equal(
		st.mode('a', 'aeolian').join(''),
		st.mode('a', 'minor').join(''),
		'Aeolian mode is also known as  Minor scale'
	);
	t.equal(
		st.mode('c', 'diminished whole half').join(''),
		st.mode('c', 'diminished half whole').join(''),
		'Diminished Whole Half is also known as Diminished Half Whole'
	);
	t.equal(
		st.mode('c', 'lydian dominant').join(''),
		st.mode('c', 'mixolydian #4').join(''),
		'Lydian Dominant is also known as Mixolydian #4'
	);
	t.equal(
		st.mode('c', 'fifth mode').join(''),
		st.mode('c', 'mixolydian b6').join(''),
		'Fifth mode is also known as mixolydian b6'
	);
	t.equal(
		st.mode('c', 'locrian #2').join(''),
		st.mode('c', 'aeolian b5').join(''),
		'Locrian #2 is also known as aeolian b5'
	);

	t.end();
});
