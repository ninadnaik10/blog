export default function Background() {
  return (
    <section
      className="background"
      style={{
        backgroundImage:
          'url("https://source.unsplash.com/random/960x540/?space,cityscape,buildings,monuments,mountains,rivers,valleys,moon,abstract,mosaic,universe,galaxy,blog,journal")',
      }}
    >
      <div className="mainHeading">
        <p className="catchline" id="quote" />
        <p className="subtext" id="author" />
      </div>
    </section>
  );
}
