export default function Background(props) {
  console.log(props);
  return (
    <section
      className="background"
      style={{
        backgroundImage:
          'url("https://source.unsplash.com/random/960x540/?space,cityscape,buildings,monuments,mountains,rivers,valleys,moon,abstract,mosaic,universe,galaxy,blog,journal")',
      }}
    >
      <div className="mainHeading">
        <p className="catchline" id="quote">{props.catchline}</p>
        <p className="subtext" id="author">{props.subtext}</p>
      </div>
    </section>
  );
}
