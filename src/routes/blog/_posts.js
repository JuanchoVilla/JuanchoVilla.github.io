// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
	{
		title: 'On the importance of narrative',
		slug: 'on-the-importance-of-narrative',
		html: `
			<h3>Listen up, writing in prose is far more important than you think it is.</h3><br>
			<h3>A long time ago in a galaxy far, far away...</h3>

			<p>There once was a small child, who had a superpower. His superpower was the ability to ignore all the things going on around him that didn't matter, day or night, hot or cold, heck even flipped upside down. He had the uncanny ability to shut the world out while he worked away on what was occupying his mind at the time.</p>
			<br>
			<p>He grew old unaware of his supernatural gift. Some might say he squandered the most valuable gift known to man, the ability to focus. He lived his life in blissfull ignorance of the many great changes his skill could have produced. However you view it, he never regretted a day in his life. He said so at his death bed.</p>
			<br>
			<p>I was blessed with the chance to ask him a couple questions before his last breath was breathed... they are as follows:</p>
			<ul>
				<li><p>What is it about chess?</p></li>
				<li><p>Do you reckon your life would be better if you lived twice as long?</p></li>
			</ul>
			<br>
			<p>The old man was a Grandmaster, one thing he always came back to was the infinitely replayable game we know as chess. Of course back then it was reffered to by its original name "Chaturanga". He was a strategiest at his core he recounted, he loved the chaotic nature of both the human mind and the real world. He never did figure out what the universe was made out of, where the universe was, or if it was being held up by an infinite stack of turtles.</p>
			<br>
			<p>During a match, however, the complexity of the universe faded to black. It also faded to white. "Thirty-two of one and thirty-two of the other", he claimed that was what made up this universe within a universe. "The players are bound by nature to follow the law", the inhabitants had just enough freedom for chaos to emerge, but not enough for the universe to be engulfed by it.</p>
			<br>
			<p>The second answer was far simpler, yet unfathomably more profound. I could tell he used what little life force he had to ponder the question. He laid puzzeld, for a few moments trying to find the right words, for he didn't have many left. At last, his baffled face broke away, with it the tension. He was radiating certainty as he muttered his final response, a straighforward, "No."</p>
		`
	},

	{
		title: 'Why the name?',
		slug: 'why-the-name',
		html: `
			<p>Allow me to introduce myself. My full name is Juan Miguel Carmona Zavala. Having 4 whole names is annoying.</p>

			<p>I found out that my initials are the same as the N-number of a Boeing 737 that flies in the UK: G-JMCZ <br>
			
			I figured that the name "jmcz" would be a little easier to claim as wholly my own. Juan is one of the most common names in spanish speaking contries. <br>

			I've got my eye set on the top result of the first page on Google. I've too many namesakes too compete with my full name.</p>

			<h3>Here's a list of goals I'd like to achieve while building jmcz's world out</h3>

			<ul>
				<li>Encourage individuals who care about an open internet to fight for an open internet</li>
				<li>Grow my confidence as a developer and start taking on bigger projects</li>
				<li>Make the internet infinitesimally more rad</li>
				<li>Learn more about quantum mechanics and maybe make some visualisations ¯&bsol;_(ツ)_/¯</li>
			</ul>

			<p>Now that you're done ingesting my content I encourage you to make some of your own. <br> I hope you come along for the journey!</p>
			
			<p><br>So long and thanks for all the fish,<br>jmcz signing off.</p>
		`
	}
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
