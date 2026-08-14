import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import ReactMarkdown from 'react-markdown';
import Lanyard from './components/Lanyard/Lanyard';
import './styles.css';

const chapters = [
  ['01-basics','Git fundamentals','Working tree, staging, commits, status and config'],
  ['02-branches','Branching','Create, switch, merge and reason about topology'],
  ['03-remote','Remote workflow','Clone, fetch, pull, push and upstream tracking'],
  ['04-history','History','Log, show, diff, blame and inspect what changed'],
  ['05-undo','Undo safely','Restore, reset, revert and recovery patterns'],
  ['06-stash','Stash','Park work temporarily without losing your changes'],
  ['07-collaboration','Collaboration','Pull requests, review flow and team conventions'],
  ['08-rebase','Rebase','Linearize local history and resolve conflicts deliberately'],
  ['09-tags','Tags & releases','Mark versions and create reproducible release points'],
  ['10-debugging','Debugging','Bisect, reflog and practical recovery techniques'],
  ['11-cheatsheet','Cheat sheet','High-frequency commands in terminal order'],
  ['12-scenarios','Scenarios','Real-world recipes for common engineering situations'],
];

const resources = [
  { name:'Pro Git', kind:'Official book', url:'https://git-scm.com/book/en/v2', note:'Deep reference covering fundamentals, branching, distributed workflows and GitHub.' },
  { name:'Git Reference', kind:'Official docs', url:'https://git-scm.com/docs', note:'Complete command reference and command families.' },
  { name:'Git Cheat Sheet', kind:'Official cheat sheet', url:'https://git-scm.com/cheat-sheet', note:'Fast command lookup with common staging, commit and branch operations.' },
  { name:'GitHub Git Guide', kind:'GitHub', url:'https://github.com/git-guides', note:'Beginner-to-advanced Git workflow with a strong GitHub collaboration path.' },
  { name:'GitHub Git Cheat Sheet', kind:'GitHub', url:'https://training.github.com/downloads/github-git-cheat-sheet/', note:'Compact reference for everyday Git and GitHub commands.' },
  { name:'Learn Git Branching', kind:'Interactive', url:'https://github.com/pcottle/learnGitBranching', note:'Interactive visual practice focused on branches and Git history.' },
  { name:'GitTutorial', kind:'Community', url:'https://github.com/rafaballerini/GitTutorial', note:'Community Git tutorial included in the research pass.' },
  { name:'GitHub Tutorial', kind:'Community', url:'https://github.com/WeMakeDevs/github-tutorial', note:'Community-oriented GitHub workflow reference.' },
  { name:'GitHub Git Basics', kind:'Official docs', url:'https://docs.github.com/en/get-started/git-basics', note:'Git setup, remotes, workflows, ignore files and credential guidance.' },
];

const fallback = `# Terminal Git Manual\n\nSelect a chapter from the left. The app loads the chapter Markdown from this repository so the website and source manual stay in sync.`;

function TerminalPrompt({ children }) { return <span className="prompt">$ {children}</span>; }

function App() {
  const [selected, setSelected] = useState('01-basics');
  const [content, setContent] = useState(fallback);
  const [query, setQuery] = useState('');
  const [tab, setTab] = useState('manual');
  const [loading, setLoading] = useState(false);

  const filtered = useMemo(() => chapters.filter(c => c.join(' ').toLowerCase().includes(query.toLowerCase())), [query]);

  useEffect(() => {
    if (tab !== 'manual') return;
    let alive = true;
    setLoading(true);
    fetch(`https://raw.githubusercontent.com/ayazmirza54/shots-repo/main/${selected}/README.md`)
      .then(r => r.ok ? r.text() : Promise.reject(new Error('not found')))
      .then(text => alive && setContent(text))
      .catch(() => alive && setContent(fallback))
      .finally(() => alive && setLoading(false));
    return () => { alive = false; };
  }, [selected, tab]);

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand"><span className="dot red"/><span className="dot amber"/><span className="dot green"/><strong>git://manual</strong></div>
        <div className="top-actions">
          <button className={tab === 'manual' ? 'active' : ''} onClick={() => setTab('manual')}>manual</button>
          <button className={tab === 'resources' ? 'active' : ''} onClick={() => setTab('resources')}>research</button>
          <a href="https://github.com/ayazmirza54/shots-repo" target="_blank" rel="noreferrer">github ↗</a>
        </div>
      </header>

      <section className="hero">
        <div>
          <div className="eyebrow">TERMINAL-FIRST · ENGINEERING REFERENCE</div>
          <h1>Git without the noise.</h1>
          <p>A single practical manual for the commands, mental models and recovery moves you actually need at the terminal.</p>
          <div className="hero-command"><TerminalPrompt>git log --oneline --graph --decorate</TerminalPrompt></div>
        </div>
        <div className="hero-art hero-lanyard" aria-label="Interactive 3D Git lanyard">
          <div className="lanyard-label">INTERACTIVE BADGE · DRAG TO SWING</div>
          <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
          <div className="hero-art-caption">REACT BITS / PHYSICS / THREE.JS</div>
        </div>
      </section>

      {tab === 'manual' ? (
        <main className="layout">
          <aside className="sidebar">
            <div className="sidebar-title">chapters</div>
            <input value={query} onChange={e => setQuery(e.target.value)} placeholder="search chapters..." />
            <nav>{filtered.map((c, i) => <button key={c[0]} className={selected === c[0] ? 'chapter selected' : 'chapter'} onClick={() => setSelected(c[0])}>
              <span className="num">{String(i + 1).padStart(2,'0')}</span><span><b>{c[1]}</b><small>{c[2]}</small></span>
            </button>)}</nav>
          </aside>
          <article className="reader">
            <div className="reader-bar"><span>~/shots-repo/{selected}</span><span>{loading ? 'loading…' : '● synced with source'}</span></div>
            <div className="markdown"><ReactMarkdown>{content}</ReactMarkdown></div>
          </article>
        </main>
      ) : (
        <main className="research">
          <div className="research-head"><div><div className="eyebrow">RESEARCH PASS</div><h2>Git manuals worth knowing</h2><p>We reviewed official Git/GitHub references and well-known Git learning repositories, then used their coverage to shape this manual. No source text is copied wholesale.</p></div></div>
          <div className="resource-grid">{resources.map(r => <a className="resource" key={r.url} href={r.url} target="_blank" rel="noreferrer"><span className="resource-kind">{r.kind}</span><h3>{r.name} ↗</h3><p>{r.note}</p></a>)}</div>
        </main>
      )}

      <footer><span><TerminalPrompt>echo "keep commits small"</TerminalPrompt></span><span>shots-repo · terminal aesthetic · 2026</span></footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
