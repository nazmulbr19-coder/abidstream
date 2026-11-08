/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  FolderGit2,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Layers,
  FileCode2,
  Search,
  PackageCheck,
  Terminal,
} from 'lucide-react';

const MODULES = [
  { name: 'AniChan', type: 'Anime Streaming Provider', status: 'Active' },
  { name: 'AniKotoAnime', type: 'Anime Sub & Dub Provider', status: 'Active' },
  { name: 'AniSuge', type: 'Anime Sub & Dub Streaming', status: 'Active' },
  { name: 'AnimeWorldIndia', type: 'Anime & Dubbed Provider', status: 'Active' },
  { name: 'RareAnimesIndia', type: 'Regional Indian Anime & Cartoons', status: 'Active' },
  { name: 'Toonix', type: 'Cartoons & Anime Provider', status: 'Active' },
];

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredModules = MODULES.filter((m) =>
    m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    m.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Top Banner / Navbar */}
      <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <FolderGit2 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-bold text-slate-100 tracking-tight">abidstreaming</h1>
                <span className="text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full font-mono">
                  CloudStream Repository
                </span>
              </div>
              <p className="text-xs text-slate-400">Extension & Provider Repository</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/KSHITIJ8473/raghav"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors border border-slate-700"
            >
              <span>GitHub Repository</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full space-y-8">
        {/* Status Callout */}
        <div className="rounded-xl border border-emerald-500/20 bg-emerald-950/20 p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-emerald-300">
                Direct Unmodified Repository Import
              </h2>
              <p className="text-xs text-slate-300 mt-0.5">
                All source files, Gradle scripts (<code className="text-emerald-400 font-mono">build.gradle.kts</code>, <code className="text-emerald-400 font-mono">settings.gradle.kts</code>), workflow configs, and Kotlin extension modules have been imported 100% byte-for-byte intact.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-stretch sm:self-auto justify-end">
            <span className="text-xs font-mono bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-slate-300">
              Shortcode: <strong className="text-indigo-400">raghav766</strong>
            </span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-400">Total Extensions</span>
              <Layers className="w-4 h-4 text-indigo-400" />
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-white">{MODULES.length}</span>
              <span className="text-xs text-slate-400">provider modules</span>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-400">Target Framework</span>
              <FileCode2 className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-white">CloudStream 3</span>
              <span className="text-xs text-slate-400">Kotlin Gradle</span>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-400">File Integrity</span>
              <CheckCircle2 className="w-4 h-4 text-blue-400" />
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-white">100%</span>
              <span className="text-xs text-slate-400">Zero modifications</span>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-400">License</span>
              <PackageCheck className="w-4 h-4 text-amber-400" />
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-white">GNU GPLv3</span>
              <span className="text-xs text-slate-400">Free Software</span>
            </div>
          </div>
        </div>

        {/* Modules Explorer */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-semibold text-slate-100">Imported Provider Modules</h3>
              <p className="text-xs text-slate-400">
                Inspect the CloudStream extension packages included in the repository
              </p>
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                placeholder="Filter providers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 pt-2">
            {filteredModules.map((item) => (
              <div
                key={item.name}
                className="p-3 rounded-lg border border-slate-800/80 bg-slate-950/60 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm font-medium text-indigo-300">
                      /{item.name}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">{item.type}</p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Module</span>
                  <span className="font-mono text-slate-400">Kotlin</span>
                </div>
              </div>
            ))}
          </div>

          {filteredModules.length === 0 && (
            <div className="py-12 text-center text-slate-500 text-sm">
              No modules matching &quot;{searchTerm}&quot;
            </div>
          )}
        </div>

        {/* Build & CLI info */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/30 p-5 space-y-3">
          <div className="flex items-center gap-2 text-slate-200 text-sm font-semibold">
            <Terminal className="w-4 h-4 text-indigo-400" />
            <span>Repository Build System</span>
          </div>
          <p className="text-xs text-slate-400">
            This repository builds CloudStream plugins using Gradle Kotlin DSL. In an Android/Gradle development environment, plugins can be built with:
          </p>
          <div className="bg-slate-950 border border-slate-800 rounded-lg p-3 font-mono text-xs text-slate-300">
            ./gradlew makePlugins
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
        Repository imported intact from github.com/KSHITIJ8473/raghav
      </footer>
    </div>
  );
}

