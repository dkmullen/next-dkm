import LikeButton from './like-button';

function Header({ title }) {
  return <h1>{`Hey. ${title}`}</h1>;
}

export default function Homepage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  return (
    <>
    <div className='page'>
        <div className="headline">
          <h1>Dennis Mullen</h1>
          <p>Web Developer</p>
          <p className="smaller">East Tennessee, USA</p>
        </div>

        <p className="left">
          I am a <a href="#self-taught">self-taught*</a> web developer who has
          been working professionally in the field since early 2018. The bulk of
          my work so far has been
          <strong>1) Developing a Web UI (in Angular) for TrueNAS</strong>, the
          open-source storage and networking product, and
          <strong>2) Building web apps (in Vue and Laravel, using AWS)</strong>
          that citizens use to access local government services.
          <a href="assets/dkm-resume.pdf" target="_blank">
            See my full resume (pdf) here</a
          >.
        </p>

        <p className="left">
          This website is intended as a brief introduction to me and as an
          exercise in using the simpliest web development tools (HTML, CSS and
          Javascript) with no frameworks.
        </p>

        <div id="random-quote">Random quote on the way...</div>

        <p className="left">
          I was a minister for many years. These days, I think that the greatest
          virtues are things like
          <strong>Rationality, Discipline, Compassion,</strong> and
          <strong>Respect</strong>. I have also been influenced by the writings
          of the
          <a
            href="https://ryanholiday.net/stoicism-a-practical-philosophy-you-can-actually-use/"
            target="_blank"> Stoics</a>, and by their four main virtues,
          <a href="https://dailystoic.com/4-stoic-virtues/" target="_blank"
            >Courage, Temperance, Justice, and Wisdom</a
          >.
        </p>

        <p className="left">
          I went into the ministry out of a desire to stand up for truth, and to
          discover more of it. I was probably more successful with the second
          than the first. In my search for more truth, I discovered the
          wonderful Seth Godin, who often writes about marketing, but sometimes
          touches on why we believe things, and how beliefs (regardless of their
          veracity) tie us to others and give us meaning. This is what he does
          in
          <a
            href="https://seths.blog/2020/09/dancing-with-belief/"
            target="_blank"
          > Dancing With Belief</a>,
          <a
            href="https://seths.blog/2020/11/a-paradox-of-community-belief-and-reality/"
            target="_blank"
          > A Paradox of Community, Belief and Reality</a>, and
          <a
            href="https://seths.blog/2021/01/belief-and-knowledge/"
            target="_blank"
            > Belief and Knowledge</a>. Seth Godin writes (in a way I wish I could) that our most
          firmly-held beliefs are about many things other than the actual state
          of reality.
        </p>

        <p className="left">
          In my ongoing struggle toward virtue, my frequent companion and
          antagonist has been anger. Somewhere I heard Seth Godin (again) say
          that &quot;You are almost never right to be angry,&quot; but I have lost the
          source. But Ryan Holiday writes about a similar idea in
          <a
            href="https://dailystoic.com/anger-is-a-kind-of-madness/"
            target="_blank"
          > Anger is a Kind of Madness</a>.
        </p>
        <hr />
        <div className="link-section">
          <h3><strong>Some writing I&apos;ve done:</strong></h3>
          <div>
            <a
              href="https://medium.com/@dkmullen_74695/do-we-ask-too-much-from-work-5443e7ef6e03?sk=8faf0b88f6b73ace8bf2e6245631abe1"
              target="_blank"
              >Do we ask too much from work?</a>
          </div>
          <div>
            <a
              href="https://medium.com/@dkmullen_74695/facing-unendurable-truths-e7a3fdf01012?sk=07a1c8bf1caee748c07e6aaf0ea76702"
              target="_blank"
              >Facing unendurable truths</a>
          </div>
          <div>
            <a
              href="
              https://medium.com/excommunications/as-faith-faded-i-became-more-myself-3b1da4ce6089?source=friends_link&sk=813171b1b2358affc207041f25f49ed2"
              target="_blank"
              >As faith faded, I became more myself</a>
          </div>
        </div>
        
          <p className="left aside">
            <a id="self-taught">*</a> Who is really “self-taught” though, in a world so rich in free and
            low-cost technical education online, not to mention the generosity
            of developers willing to share their own solutions to almost any
            problem?!
          </p>
      </div>
      <a rel="me" href="https://awscommunity.social/@dkmullen"></a>

    </>
  );
}
