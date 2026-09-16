const OWNER = 'irfanjat'
const REPO = 'portfolio'
const WORKFLOW_FILE = 'deploy-cloudflare-pages.yml'
const GH_API = 'https://api.github.com'

export async function onRequest() {
  try {
    const url = `${GH_API}/repos/${OWNER}/${REPO}/actions/workflows/${WORKFLOW_FILE}/runs?per_page=1`
    const res = await fetch(url, {
      headers: { Accept: 'application/vnd.github.v3+json', 'User-Agent': 'irfan-portfolio' },
    })

    if (!res.ok) {
      return json({ ok: false, error: `upstream ${res.status}` }, 502)
    }

    const data = await res.json()
    const run = data.workflow_runs?.[0]

    if (!run) {
      return json({ ok: false, error: 'no runs found' }, 404)
    }

    return json({
      ok: true,
      status: run.status,
      conclusion: run.conclusion,
      branch: run.head_branch,
      updatedAt: run.updated_at,
      runNumber: run.run_number,
      url: run.html_url,
    })
  } catch (err) {
    return json({ ok: false, error: String(err) }, 500)
  }
}

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, s-maxage=60, max-age=0',
    },
  })
}
