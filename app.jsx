/* global React, ReactDOM, TweaksPanel, useTweaks, TweakSection, TweakToggle */
const { useState, useEffect } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "scanlines": true,
  "aberration": true,
  "floor": true
}/*EDITMODE-END*/;

const TICKER = "$CTOI";
const NAME = "COSMIC TOILET";
const TG = "t.me/cosmictoilet";
const X = "x.com/cosmictoilet";
const PUMP_URL = "https://pump.fun";

// ---- utilities ----
function useNow(ms = 1000) {
  const [n, set] = useState(() => Date.now());
  useEffect(() => { const id = setInterval(() => set(Date.now()), ms); return () => clearInterval(id); }, [ms]);
  return n;
}

// ---- sfx ----
let _ctx = null;
function ctx() { if (!_ctx) { try { _ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch(e){ return null; } } return _ctx; }
function chimeSfx() {
  const c = ctx(); if (!c) return; const t = c.currentTime;
  [988, 1320, 1568].forEach((f, i) => {
    const o = c.createOscillator(); o.type = "square"; o.frequency.setValueAtTime(f, t + i*0.05);
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t + i*0.05);
    g.gain.exponentialRampToValueAtTime(0.15, t + i*0.05 + 0.005);
    g.gain.exponentialRampToValueAtTime(0.0001, t + i*0.05 + 0.18);
    o.connect(g); g.connect(c.destination);
    o.start(t + i*0.05); o.stop(t + i*0.05 + 0.2);
  });
}

// ---- top status strip ----
function Status({ now }) {
  const dStr = new Date(now).toISOString().slice(11,19);
  return (
    <div className="status-strip">
      <div className="frame">
        <span className="pk blink">● PRE-LAUNCH</span>
        <span>{TICKER} · NOT YET DEPLOYED</span>
        <span className="cy">{dStr} UTC</span>
        <span style={{ marginLeft: "auto" }}>CONTRACT <b className="cy">TBA</b></span>
        <span>LAUNCHPAD <b className="pk">PUMP.FUN</b></span>
        <span>DATE <b className="cy">TBA</b></span>
      </div>
    </div>
  );
}

// ---- marquee ----
function Marquee() {
  return (
    <header className="marquee" data-screen-label="01 Marquee">
      <div className="frame">
        <div className="lockup">
          <span className="badge">TICKER · {TICKER}</span>
          <div className="title">
            <h1>
              <div>COSMIC</div>
              <div className="ln2">TOILET</div>
            </h1>
            <div className="kana-sub">コ ズ ミ ッ ク ・ ト イ レ</div>
            <div className="row-meta">
              <span>FLUSH FIAT.</span>
              <span><b>ENTER THE BOWL.</b></span>
              <span>ASCEND.</span>
            </div>
          </div>
          <span className="badge right">CHAIN · SOLANA</span>
        </div>
      </div>
    </header>
  );
}

// ---- hero / pre-launch ----
function PreLaunchNotice() {
  return (
    <div className="ca-strip" style={{ borderColor: "var(--hot)" }}>
      <span className="lab" style={{ color: "var(--hot)" }}>Notice</span>
      <code style={{ color: "var(--bone)", whiteSpace: "normal" }}>
        Contract address will be published <b style={{ color: "var(--cyan)" }}>only on official channels</b> at launch.
        Anyone DMing you a CA before then is not us.
      </code>
      <span className="chip pk">PRE-LAUNCH</span>
      <span className="chip">NO CA YET</span>
    </div>
  );
}

function Hero() {
  return (
    <section className="attract" data-screen-label="02 Pre-Launch">
      <div className="stars" />
      <div className="horizon" />
      <div className="floor" />
      <div className="frame">
        <div className="stage">
          <div className="col-l">
            <span className="cabinet-tag pk" style={{ alignSelf: "flex-end" }}>STATUS · PRE-LAUNCH</span>
            <div className="score-block">
              <div className="lbl">Launch Date</div>
              <div className="val" style={{ fontSize: 28 }}>TBA</div>
            </div>
            <div className="score-block hot">
              <div className="lbl">Contract</div>
              <div className="val" style={{ fontSize: 28 }}>NOT DEPLOYED</div>
            </div>
            <div className="score-block">
              <div className="lbl">Launchpad</div>
              <div className="val" style={{ fontSize: 28 }}>PUMP.FUN</div>
            </div>
          </div>

          <div className="logo-stage">
            <div className="ring ring3" />
            <div className="ring ring2" />
            <div className="ring" />
            <img src="assets/logo.avif" alt="Cosmic Toilet" />
          </div>

          <div className="col-r">
            <span className="cabinet-tag cy">GET LAUNCH ALERT</span>
            <div className="buy-panel">
              <div className="pair"><span>Ticker</span><b className="pk">{TICKER}</b></div>
              <div className="pair"><span>Chain</span><b className="cy">SOLANA</b></div>
              <div className="pair"><span>Launch via</span><b>PUMP.FUN</b></div>
              <div className="pair"><span>Status</span><b className="pk">PRE-LAUNCH</b></div>
              <a className="btn-arcade" href={`https://${TG}`} target="_blank" rel="noopener" onClick={chimeSfx}>JOIN TELEGRAM</a>
              <a className="btn-arcade cy" href={`https://${X}`} target="_blank" rel="noopener">FOLLOW ON X</a>
            </div>
          </div>
        </div>

        <PreLaunchNotice />
      </div>
    </section>
  );
}

// ---- mythos ----
function Mythos() {
  return (
    <section className="block darker" data-screen-label="03 Mythos">
      <div className="frame">
        <div className="section-head">
          <span className="ix">§ 03 // GOSPEL</span>
          <h2 className="aberr" data-t="THE MYTHOS">THE MYTHOS</h2>
          <span className="right">CANTO I OF I</span>
        </div>

        <div className="mythos">
          <div className="body">
            <p>
              The fiat is dirty. You know this. Your bags know this. The
              dollar that bought your coffee was three other things first,
              and none of them were good. There is, however, a way out.
            </p>
            <p>
              Somewhere past the Oort Cloud, a porcelain throne drifts
              through the void on a slow rotation. It has no plumbing. It
              has no need. To touch it is to be cleansed. To flush it is
              to be remembered.
            </p>
            <p>
              <span className="glow-cyan">{TICKER}</span> will be the on-chain receipt of that flush.
              One billion supply. Zero tax. LP burns at graduation. No
              roadmap past the bowl. We do not return.
            </p>
            <div className="sig">— The Plumber, dispatch 014</div>
          </div>

          <aside className="side">
            <h4>WHAT THIS WILL BE</h4>
            <p>A fair-launch meme on pump.fun. No team allocation. No private round. The chart is the team.</p>
            <h4 className="pk" style={{ color: "var(--hot)" }}>WHAT THIS IS NOT</h4>
            <p>A financial product. A utility. A promise. A plumbing fixture. A retirement plan.</p>
            <h4>WHEN</h4>
            <p>No date stated. We launch when we launch. Watch <a href={`https://${TG}`} style={{ color: "var(--cyan)" }} target="_blank" rel="noopener">Telegram</a> and <a href={`https://${X}`} style={{ color: "var(--cyan)" }} target="_blank" rel="noopener">X</a> for the CA drop.</p>
          </aside>
        </div>
      </div>
    </section>
  );
}

// ---- planned tokenomics + roadmap ----
function Specs() {
  return (
    <section className="block" data-screen-label="04 Tokenomics">
      <div className="frame">
        <div className="section-head">
          <span className="ix">§ 04 // PLANNED SPEC</span>
          <h2 className="aberr cy" data-t="TOKENOMICS">TOKENOMICS</h2>
          <span className="right">SUBJECT TO ON-CHAIN PROOF AT LAUNCH</span>
        </div>

        <div className="manual">
          <div>
            <table className="spec-table">
              <tbody>
                <tr><th>Name</th><td>{NAME}</td></tr>
                <tr><th>Ticker</th><td><b>{TICKER}</b></td></tr>
                <tr><th>Chain</th><td>Solana · SPL</td></tr>
                <tr><th>Launchpad</th><td>pump.fun · fair launch</td></tr>
                <tr><th>Total Supply</th><td><b>1,000,000,000</b> (planned)</td></tr>
                <tr><th>Buy / Sell Tax</th><td><b>0% / 0%</b> (planned)</td></tr>
                <tr><th>Team Allocation</th><td>0%</td></tr>
                <tr><th>Pre-sale</th><td>None</td></tr>
                <tr><th>LP at Graduation</th><td><b>BURNED</b> (planned)</td></tr>
                <tr><th>Mint Authority</th><td>To be revoked at launch</td></tr>
                <tr><th>Freeze Authority</th><td>To be revoked at launch</td></tr>
                <tr><th>Contract</th><td><b style={{ color: "var(--hot)" }}>NOT YET DEPLOYED</b></td></tr>
              </tbody>
            </table>
            <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
              <span className="chip">FAIR LAUNCH</span>
              <span className="chip pk">0/0 TAX</span>
              <span className="chip la">LP BURNED ON GRAD</span>
              <span className="chip pk">NO TEAM BAG</span>
            </div>
            <p style={{ marginTop: 16, fontFamily: "Share Tech Mono", fontSize: 13, color: "var(--bone)", lineHeight: 1.7 }}>
              <span className="glow-pink">NOTE.</span> Every number above describes intent. None of it exists on-chain yet.
              When the token is deployed we will publish the CA, the deployer wallet, and links to
              verify mint/freeze are revoked and LP is burned. Until then, treat every claim as a promise, not a proof.
            </p>
          </div>

          <div>
            <div style={{ fontFamily: "Major Mono Display", fontSize: 14, letterSpacing: "0.22em", color: "var(--cyan)", textTransform: "uppercase", marginBottom: 12 }}>
              The Four Phases of the Bowl
            </div>
            <div className="phases">
              <div className="phase">
                <div className="ph">Phase 01</div>
                <h6>RINSE</h6>
                Page goes live. Mythos shared. Believers gather in Telegram. No token yet.
              </div>
              <div className="phase">
                <div className="ph">Phase 02</div>
                <h6>FILL</h6>
                Deploy on pump.fun. CA posted on official channels only. Mint &amp; freeze revoked at deploy.
              </div>
              <div className="phase">
                <div className="ph">Phase 03</div>
                <h6>FLUSH</h6>
                On graduation, liquidity migrates to Raydium and the LP is burned. No off-ramp for the deployer.
              </div>
              <div className="phase">
                <div className="ph">Phase 04</div>
                <h6>ASCEND</h6>
                Lore expansion. One piece of merch (a porcelain mug). CEX listings if they come. We do not return.
              </div>
            </div>
            <p style={{ marginTop: 14, fontFamily: "Share Tech Mono", fontSize: 11, letterSpacing: "0.18em", color: "var(--laser)", textTransform: "uppercase" }}>
              Currently in Phase 01. The next phase begins only when we say so.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---- how to buy (when we launch) ----
function HowToBuy() {
  return (
    <section className="block darker" data-screen-label="05 How To Buy">
      <div className="frame">
        <div className="section-head">
          <span className="ix">§ 05 // ON LAUNCH DAY</span>
          <h2 className="aberr" data-t="HOW TO BUY">HOW TO BUY</h2>
          <span className="right">PREPARE NOW · BUY LATER</span>
        </div>

        <p style={{ fontFamily: "Share Tech Mono", fontSize: 14, color: "var(--bone)", maxWidth: 760, margin: "0 0 22px" }}>
          The token is not deployed yet. You cannot buy {TICKER} today. When we go live on pump.fun, here is the exact
          sequence — preparing now means you are not fumbling with a wallet at the moment that matters.
        </p>

        <div className="steps">
          <div className="step">
            <div className="n">01</div>
            <h5>Get a Solana wallet</h5>
            <p>Install <a href="https://phantom.app" target="_blank" rel="noopener">Phantom</a> or Solflare. Write your seed phrase down on paper, not in a screenshot, not in iCloud. Fund it with SOL from a centralized exchange.</p>
          </div>
          <div className="step">
            <div className="n">02</div>
            <h5>Wait for the CA</h5>
            <p>We will post the contract address on <a href={`https://${TG}`} target="_blank" rel="noopener">Telegram</a> and <a href={`https://${X}`} target="_blank" rel="noopener">X</a> at the moment we deploy. Bookmark both. Trust no other source — impostors will post fakes within minutes.</p>
          </div>
          <div className="step">
            <div className="n">03</div>
            <h5>Flush</h5>
            <p>Open <a href={PUMP_URL} target="_blank" rel="noopener">pump.fun</a>, paste the verified CA, connect your wallet, set slippage to 3–5%, enter SOL, buy. Hold. The bowl is patient.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---- FAQ ----
function FAQ() {
  const qs = [
    { q: "When does it launch?", a: "No date stated. The launch will be announced on Telegram and X first, with the contract address. Anyone giving you a precise date elsewhere is guessing or lying." },
    { q: "Is there a contract address yet?", a: "No. The token has not been deployed. There is nothing to buy. If a CA appears in your DMs or in a comment thread before we post one on official channels, it is not ours." },
    { q: "Will there be a pre-sale?", a: "No. No pre-sale, no whitelist, no private round, no team allocation. Fair launch only. We buy on launch alongside everyone else." },
    { q: "Is there utility?", a: "No. There is mythos, which is more durable." },
    { q: "Is the LP safe?", a: "At pump.fun graduation, the LP migrates to Raydium and is burned. After that, no one — including the deployer — can pull liquidity. This is enforced by the launchpad, not by trust." },
    { q: "Can the dev rug?", a: "Before graduation, the deployer holds no privileged position on pump.fun. After graduation, the LP is burned. There is no team bag to dump. Mint and freeze authorities will be revoked at deploy." },
    { q: "Why a toilet?", a: "Because every great memecoin needs a symbol you cannot mistake for anything else. And because fiat is dirty." },
    { q: "Is this a good investment?", a: "No. This is a meme. Treat it as such. Never buy with money you cannot watch evaporate." },
  ];
  return (
    <section className="block void" data-screen-label="06 FAQ">
      <div className="frame">
        <div className="section-head">
          <span className="ix">§ 06 // QUESTIONS</span>
          <h2 className="aberr cy" data-t="ASKED & FLUSHED">ASKED &amp; FLUSHED</h2>
          <span className="right">EIGHT OF EIGHT</span>
        </div>
        <div className="faq">
          {qs.map((x, i) => (
            <div key={i}>
              <div className="q">— {x.q}</div>
              <div className="a">{x.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---- footer ----
function Colophon() {
  return (
    <footer className="colophon" data-screen-label="07 Footer">
      <div className="frame">
        <div className="section-head">
          <span className="ix">§ 07 // CHANNELS</span>
          <h2 className="aberr" data-t="WHERE WE ARE">WHERE WE ARE</h2>
          <span className="right">NOT FINANCIAL ADVICE</span>
        </div>

        <div className="grid">
          <div>
            <h4>Official</h4>
            <p className="pk">{TICKER} · {NAME}</p>
            <p>Telegram · <a style={{ color: "var(--cyan)" }} href={`https://${TG}`} target="_blank" rel="noopener">{TG}</a></p>
            <p>X · <a style={{ color: "var(--cyan)" }} href={`https://${X}`} target="_blank" rel="noopener">{X}</a></p>
            <p>Launch on · <a style={{ color: "var(--cyan)" }} href={PUMP_URL} target="_blank" rel="noopener">pump.fun</a></p>
            <p style={{ marginTop: 8 }}>Contract</p>
            <p style={{ color: "var(--hot)" }}>Not yet deployed — TBA</p>
          </div>
          <div>
            <h4>Disclaimer</h4>
            <p>{TICKER} will be a memecoin. It will have no intrinsic value, no project roadmap beyond what is stated above, no team treasury, no promises.</p>
            <p>Cryptocurrency is volatile. You can and probably will lose money. Never buy more than you are comfortable losing entirely and immediately.</p>
            <p>Nothing on this page is financial, legal, or plumbing advice.</p>
          </div>
          <div>
            <h4>House Rules</h4>
            <p>1 · The bowl will be open to anyone.</p>
            <p>2 · We do not shill in other communities.</p>
            <p>3 · We do not bully paperhanders. We pity them.</p>
            <p>4 · There is no fourth rule.</p>
            <p style={{ marginTop: 10 }} className="pk">「コズミック・トイレ」</p>
            <p>FLUSH FIAT. ENTER THE BOWL.</p>
          </div>
        </div>

        <div style={{ marginTop: 22, paddingTop: 14, borderTop: "1px solid rgba(185,77,255,0.4)", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, fontSize: 12 }}>
          <span>© {NAME} · NO RIGHTS RESERVED · 2026</span>
          <span className="glow-cyan">SEE YOU IN THE BOWL</span>
          <span>PRE-LAUNCH · BUILD 015</span>
        </div>
      </div>
    </footer>
  );
}

// ---- tweaks ----
function Tweaks({ t, set }) {
  return (
    <TweaksPanel title="TWEAKS · CT-LAUNCH">
      <TweakSection title="Display">
        <TweakToggle label="CRT scanlines" value={t.scanlines} onChange={v => set("scanlines", v)} />
        <TweakToggle label="Chromatic aberration" value={t.aberration} onChange={v => set("aberration", v)} />
        <TweakToggle label="Floor grid" value={t.floor} onChange={v => set("floor", v)} />
      </TweakSection>
    </TweaksPanel>
  );
}

// ---- sticky pre-launch console ----
function LaunchAlert() {
  return (
    <div className="coin-console">
      <div className="hd"><span>● PRE-LAUNCH</span><span>{TICKER}</span></div>
      <div className="bd">
        <div className="lbl">Status</div>
        <div className="n" style={{ fontSize: 26, lineHeight: 1.1 }}>NOT YET<br />DEPLOYED</div>
        <div className="lbl" style={{ marginTop: 8 }}>Get the CA on launch</div>
        <a href={`https://${TG}`} target="_blank" rel="noopener" onClick={chimeSfx} style={{ display: "block", textDecoration: "none" }}>
          <button>JOIN TELEGRAM</button>
        </a>
      </div>
    </div>
  );
}

// ---- app ----
function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const now = useNow(1000);

  useEffect(() => {
    document.body.classList.toggle("no-scan", !tweaks.scanlines);
  }, [tweaks.scanlines]);

  return (
    <>
      <Status now={now} />
      <Marquee />
      <Hero />
      <Mythos />
      <Specs />
      <HowToBuy />
      <FAQ />
      <Colophon />

      <LaunchAlert />
      <Tweaks t={tweaks} set={setTweak} />

      {!tweaks.aberration && <style>{`.aberr::before, .aberr::after { display: none !important; }`}</style>}
      {!tweaks.floor && <style>{`.attract .floor { display: none !important; }`}</style>}
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
