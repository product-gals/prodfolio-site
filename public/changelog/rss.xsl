<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <xsl:output method="html" indent="yes" doctype-system="about:legacy-compat"
              encoding="UTF-8" omit-xml-declaration="yes" />

  <xsl:template match="/rss/channel">
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title><xsl:value-of select="title" /> — RSS feed</title>
        <meta name="description" content="Subscribe to the Prodfolio changelog in any RSS reader." />
        <link rel="icon" href="/favicon.ico" />
        <style><![CDATA[
          * { box-sizing: border-box; }
          html, body { margin: 0; padding: 0; }
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            color: rgba(255, 255, 255, 0.92);
            line-height: 1.55;
            min-height: 100vh;
            background:
              radial-gradient(ellipse 60% 50% at 15% 20%, hsla(264, 88%, 76%, 0.08) 0%, transparent 65%),
              radial-gradient(ellipse 50% 40% at 85% 35%, hsla(264, 88%, 76%, 0.05) 0%, transparent 60%),
              linear-gradient(180deg,
                hsl(266 74% 54%) 0%,
                hsl(261 52% 27%) 28%,
                hsl(256 43% 13%) 58%,
                hsl(250 38% 9%) 100%);
            background-attachment: fixed;
          }
          .wrap { max-width: 760px; margin: 0 auto; padding: 64px 24px 96px; }
          .pill {
            display: inline-flex; align-items: center; gap: 8px;
            padding: 6px 14px; border-radius: 999px;
            background: rgba(255,255,255,0.08);
            border: 1px solid rgba(255,255,255,0.18);
            font-size: 12px; font-weight: 600; letter-spacing: 0.02em;
            color: rgba(255,255,255,0.82);
            margin-bottom: 20px;
          }
          h1 { font-size: clamp(32px, 5vw, 48px); font-weight: 800; margin: 0 0 12px; letter-spacing: -0.02em; line-height: 1.1; }
          .grad { background: linear-gradient(135deg, hsl(248 100% 90%) 0%, hsl(254 91% 85%) 100%); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }
          .lede { font-size: 18px; color: rgba(255,255,255,0.82); margin: 0 0 32px; max-width: 620px; }
          .lede a { color: #d4c5ff; text-decoration: underline; text-underline-offset: 3px; }
          .lede a:hover { color: #fff; }
          .card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.10); border-radius: 16px; padding: 24px; margin: 24px 0; backdrop-filter: blur(6px); }
          .card h2 { margin: 0 0 14px; font-size: 18px; font-weight: 700; color: #fff; }
          .ctas { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px; }
          .cta {
            display: flex; align-items: center; justify-content: center; gap: 8px;
            padding: 14px 18px; border-radius: 12px; font-weight: 600; font-size: 14px;
            text-decoration: none; transition: transform 0.15s ease, background 0.15s ease;
            border: 1px solid transparent;
          }
          .cta:hover { transform: translateY(-1px); }
          .cta-primary { background: hsl(254 91% 65%); color: #fff; }
          .cta-primary:hover { background: hsl(254 91% 72%); }
          .cta-secondary { background: rgba(255,255,255,0.08); color: #fff; border-color: rgba(255,255,255,0.18); }
          .cta-secondary:hover { background: rgba(255,255,255,0.14); }
          .url-row { display: flex; gap: 8px; margin-top: 14px; align-items: stretch; flex-wrap: wrap; }
          .url-row code {
            flex: 1 1 280px; min-width: 0; overflow-x: auto; white-space: nowrap;
            background: rgba(0,0,0,0.35); border: 1px solid rgba(255,255,255,0.10);
            padding: 12px 14px; border-radius: 10px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
            font-size: 13px; color: rgba(255,255,255,0.92);
          }
          .copy-btn {
            background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.18);
            color: #fff; padding: 12px 18px; border-radius: 10px; font-weight: 600; font-size: 13px;
            cursor: pointer; white-space: nowrap;
          }
          .copy-btn:hover { background: rgba(255,255,255,0.14); }
          .copy-btn.ok { background: hsl(150 60% 35%); border-color: transparent; }
          .help { font-size: 13px; color: rgba(255,255,255,0.55); margin: 10px 0 0; }
          .help a { color: rgba(255,255,255,0.85); }
          .items { margin-top: 40px; }
          .items h2 { font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: rgba(255,255,255,0.55); margin: 0 0 16px; }
          .item { padding: 18px 0; border-bottom: 1px solid rgba(255,255,255,0.08); }
          .item:last-child { border-bottom: none; }
          .item a { color: #fff; text-decoration: none; font-weight: 600; font-size: 17px; }
          .item a:hover { color: #d4c5ff; }
          .item .meta { font-size: 13px; color: rgba(255,255,255,0.5); margin-top: 4px; }
          .item .desc { font-size: 14px; color: rgba(255,255,255,0.72); margin-top: 6px; }
          .footer { margin-top: 64px; padding-top: 32px; border-top: 1px solid rgba(255,255,255,0.08); font-size: 13px; color: rgba(255,255,255,0.55); }
          .footer a { color: rgba(255,255,255,0.85); }
        ]]></style>
      </head>
      <body>
        <div class="wrap">
          <div class="pill">📡 RSS feed</div>
          <h1>The Prodfolio <span class="grad">Changelog</span>, in your reader</h1>
          <p class="lede">
            You found our RSS feed — a raw stream of every Prodfolio release that any feed reader can subscribe to. Pick a reader below and you'll get every new entry the moment we ship it. No email, no algorithm, no missed updates.
          </p>

          <div class="card">
            <h2>Subscribe in one click</h2>
            <div class="ctas">
              <a class="cta cta-primary" href="https://feedly.com/i/subscription/feed/https%3A%2F%2Fprodfolio.io%2Fchangelog%2Frss.xml" target="_blank" rel="noopener">
                Add to Feedly →
              </a>
              <a class="cta cta-secondary" href="https://www.inoreader.com/?add_feed=https%3A%2F%2Fprodfolio.io%2Fchangelog%2Frss.xml" target="_blank" rel="noopener">
                Add to Inoreader →
              </a>
              <a class="cta cta-secondary" href="https://readwise.io/feed_document_added?url=https%3A%2F%2Fprodfolio.io%2Fchangelog%2Frss.xml" target="_blank" rel="noopener">
                Add to Readwise Reader →
              </a>
            </div>

            <div class="url-row">
              <code id="feed-url">https://prodfolio.io/changelog/rss.xml</code>
              <button class="copy-btn" id="copy-btn" type="button">Copy URL</button>
            </div>
            <p class="help">
              Using a different reader (NetNewsWire, Reeder, The Old Reader, Slack <code>/feed</code>)? Copy the URL and paste it into the "Add feed" or "Subscribe" field.
            </p>
            <p class="help">
              New to RSS? Think of it as email-style updates for websites — your reader checks the feed on a schedule and shows you new posts. <a href="https://en.wikipedia.org/wiki/RSS" target="_blank" rel="noopener">Learn more</a>.
            </p>
          </div>

          <div class="items">
            <h2>Recent releases</h2>
            <xsl:for-each select="item">
              <div class="item">
                <a><xsl:attribute name="href"><xsl:value-of select="link" /></xsl:attribute><xsl:value-of select="title" /></a>
                <div class="meta"><xsl:value-of select="pubDate" /></div>
                <div class="desc"><xsl:value-of select="description" /></div>
              </div>
            </xsl:for-each>
          </div>

          <div class="footer">
            ← Back to the <a href="/changelog">readable changelog</a> · <a href="/">prodfolio.io</a>
          </div>
        </div>
        <script><![CDATA[
          (function () {
            var btn = document.getElementById('copy-btn');
            if (!btn) return;
            btn.addEventListener('click', function () {
              var url = 'https://prodfolio.io/changelog/rss.xml';
              var done = function () {
                var original = btn.textContent;
                btn.textContent = 'Copied ✓';
                btn.classList.add('ok');
                setTimeout(function () {
                  btn.textContent = original;
                  btn.classList.remove('ok');
                }, 1800);
              };
              if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(url).then(done, function () {
                  window.prompt('Copy this URL', url);
                });
              } else {
                window.prompt('Copy this URL', url);
              }
            });
          })();
        ]]></script>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
